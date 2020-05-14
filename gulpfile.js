const gulp = require("gulp");
const uglify = require("gulp-uglify");
const cleancss = require("gulp-clean-css");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const gulpSass = require("gulp-sass");
const gulpif = require("gulp-if");
const purgecss = require("gulp-purgecss");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync");
const nodemon = require("gulp-nodemon");

let flags = {
	production: false,
	secure: false
};

const paths = {
	styles: {
		src: "src/sass/**/*.scss",
		dest: "public/css"
	},
	scripts: {
		src: "src/js/**/*.js",
		dest: "public/js"
	},
	images: {
		src: "src/img/**/**/*",
		dest: "public/img"
	},
	html: {
		src: "src/views/**/*.{liquid,html}",
		dest: "public/layouts"
	}
};

const server = browserSync.create();

const serve = done => {
	let config = {
		proxy: flags.secure ? "https://localhost:1337" : "http://localhost:1337", // Express server
		notify: true
		// tunnel: true
	};
	if (flags.secure) {
		config.https = {
			key: "./dev-server/ssl/server.key",
			cert: "./dev-server/ssl/server.crt"
		};
	}
	server.init(config);
	done();
};

const reload = done => {
	server.reload();
	done();
};

const expressServer = cb => {
	let called = false;
	let config = {
		script: "./dev-server/server.js",
		ignore: ["gulpfile.js", "node_modules/", "public", "src"]
	};
	if (flags.secure) {
		config.args = ["--secure=true"];
	}
	return nodemon(config).on("start", function() {
		if (!called) {
			called = true;
			cb();
		}
	});
};

const enableProdMode = done => {
	flags.production = true;
	done();
};

const enableSSL = done => {
	flags.secure = true;
	done();
};

const sass = () => {
	return gulp
		.src("./src/sass/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(gulpSass().on("error.html", gulpSass.logError))
		.pipe(sourcemaps.write())
		.pipe(
			gulpif(
				flags.production,
				autoprefixer({
					browsers: ["last 2 versions"],
					cascade: false
				})
			)
		)
		.pipe(gulpif(flags.production, cleancss()))
		.pipe(
			gulpif(
				flags.production,
				purgecss({
					content: ["src/views/**/*{.liquid,.html}"],
					whitelistPatterns: [
						/active$/,
						/TACSJobModule$/,
						/tm_notification_link$/,
						/^facet/,
						/^job-list/,
						/^job-page__brand/,
						/^nav-active/,
						/^post/,
						/^no-jobs/,
						/custom-select/,
						/^keyword-/,
						/^topic-/,
						/^associated-blog-content/,
						/^programme-/,
						/^filter-/,
						/^event/,
						/^content-block__content/
					]
				})
			)
		)
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(server.stream());
};

const js = () => {
	return gulp
		.src([
			"./src/js/main.js"
		])
		.pipe(concat("main.min.js"))
		.pipe(gulpif(flags.production, uglify()))
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(server.stream());
};

const images = () => {
	return gulp
		.src(paths.images.src)
		.pipe(imagemin())
		.pipe(gulp.dest(paths.images.dest));
};

const watch = () => {
	gulp.watch(paths.styles.src, gulp.series(sass));
	gulp.watch(paths.scripts.src, gulp.series(js));
	gulp.watch(paths.html.src, reload);
	return;
};

gulp.task("build", gulp.series(enableProdMode, gulp.series(images, sass, js)));
gulp.task("images", images);

exports.default = gulp.series(expressServer, serve, sass, js, watch);
exports.ssl = gulp.series(
	enableSSL,
	expressServer,
	serve,
	images,
	sass,
	js,
	watch
);
