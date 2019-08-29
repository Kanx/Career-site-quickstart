const express = require('express');
const Liquid = require('liquidjs');
const app = express();
const router = express.Router();
const path = require('path');
const fs = require('fs');
const https = require('https');
const request = require('request');
const filters = require('./filters');
const tags = require('./tags');
const globals = require('./globals');
const views = __dirname + '/../src/views';
const argv = require('yargs').argv;
const secure = argv.secure;
const routeMap = require('./route-map');

const productionTarget = 'preview-site-f1920b.ttcportals.com';

const certOptions = {
    key: fs.readFileSync(path.resolve(__dirname + '/ssl/server.key')),
    cert: fs.readFileSync(path.resolve(__dirname + '/ssl/server.crt'))
};

app.set('views', __dirname + '/../src/views');
app.set('view engine', 'liquid');
app.use(express.static(path.join(__dirname, '/../public')));

const engine = new Liquid({
    root: __dirname,
    extname: '.liquid'
});

for (const filter in filters) {
    engine.registerFilter(filter, filters[filter]);
}

for (const tag in tags) {
    engine.registerTag(tag, tags[tag]);
}

app.engine('liquid', engine.express());

const home = router.get('/', function (req, res, next) {
    globals.template.permalink = 'career_site_home_page';
    globals.template_content = engine.renderFile(`${views}/home`, globals);
    res.render('index', globals);
});

const posts = router.get('/posts', function (req, res, next) {
    globals.template.permalink = 'posts';
    globals.template_content = engine.renderFile(`${views}/posts`, globals);
    res.render('index', globals);
});

const post = router.get('/posts/:article', function (req, res, next) {
    globals.template.permalink = 'post';
    globals.post = require('./data/post.js');
    globals.template_content = engine.renderFile(`${views}/post`, globals);
    res.render('index', globals);
});

const search = router.get("/search/jobs", function (req, res, next) {
    globals.template.permalink = 'search-';
    globals.title = 'jobs';
    globals.template_content = engine.renderFile(`${views}/search`, globals);
    res.render('index', globals);
});

const facets = router.get("/search*", function (req, res, next) {
    if(secure) {
        request(`${productionTarget}/${req.originalUrl}`).pipe(res);
    } else {
        request(`${productionTarget}//${req.originalUrl}`).pipe(res);
    }
});

const jobs = router.get('/job/:jobs', function (req, res, next) {
    globals.template.permalink = 'jobs-';
    globals.template_content = engine.renderFile(`${views}/job`, globals);
    res.render('index', globals);
});

const pages = router.get('/pages/:pagename', function (req, res, next) {
    globals.template.permalink = 'page';
    if (fs.existsSync(`${views}/pages/${req.params.pagename}.liquid`)) {
        globals.template_content = engine.renderFile(`${views}/pages/${req.params.pagename}`, globals);
    } else {
        globals.template_content = engine.renderFile(`${views}/pages${routeMap[req.params.pagename]}`, globals)
    }
    res.render('index', globals);
});

app.use ((req, res, next) => {
    globals.params = req.query;  // For all requests read parameters and push in to globals (for development purposes)
    globals.request_fullpath = req.originalUrl;
    next();
});

app.use('/', home);
app.use('/pages', pages);
app.use('/posts', posts);
app.use('/post', post);
app.use('/jobs', jobs);
app.use('/search/jobs', search);
app.use('/search*', facets);

app.use((req, res)=> {
    // Pull in requested assets in order to bypass CORS headers on CMS
    if(secure) {
        request(`https://${productionTarget}/${req.originalUrl}`).pipe(res);
    } else {
        request(`http://${productionTarget}/${req.originalUrl}`).pipe(res);
    }
});

if(secure) {
    https.createServer(certOptions, app).listen(1337);
} else {
    app.listen(1337);
}
