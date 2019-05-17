# Talemetry Career Site quick-start


The objective of this project is to enable developers familiar with Javascript to rapidly set up the boilerplate of a Talemetry career site along with a tested, pre-configured development environment (server and task runners) that support Talemetry-code (outside of a _real_ Talemetry instance).

 The main driver being this was to create an environment (as close to a real Talemetry environment as possible) that allows forwards/backwards compatibility of the code base between the local and CMS versions of the site.

## Background
Our typical workflow for a career site project was to develop a site as much as possible without adding any liquid markup (as this would either be mis-interpreted our just simply break our dev Express server). 


When we needed to start working with liquid markup, the project would need to be copied in to a Talemetry instance - meaning all subsequent development also needed to happen in the CMS. While this does provide a 'real' experience of how the site would function in production, it is very cumbersome to re-upload assets to the CMS each time a change is made; and it made simultaneous collaboration nearly impossible.

When developing a site for a recent project I found a library called [LiquidJS](https://www.npmjs.com/package/liquidjs). This is the only library I've found that provides complete flexibility for adding custom tags, and supporting all core out-of-the-box tags (case statements, if/else blocks etc). Because of this, i've been able to write a 'dumb' version of Talemetry which is hooked in to an Express server. This solves the first problem of having a local dev environment that supports Talemetry code.

The second issue around having assets hosted in a Talemetry CMS (and thus running in to CORS for certain assets) is resolved by proxing these assets via the dev server. The dev server will try and resolve all assets from the `public` folder first, and if it fails it will try and look up the path on the Talemetry site.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You'll need an up to date version of [node](https://nodejs.org/en/) and npm (included with node) or [yarn](https://yarnpkg.com/en/) installed on your machine.

Once you've installed node, you'll need a globally installed version of [gulp](https://gulpjs.com/) on your machine:

```
npm install gulp-cli -g
```

### Installing

To get started, run the following commands in your terminal/console:

```
git clone https://github.com/Kanx/career-site-quickstart.git
cd career-site-quickstart
npm install
```
Once the dependencies have installed, run `gulp` and you're good to go! 

## Development environment

The dev-server is configured to use static assets located in the `public` folder. If an asset cannot be located it will instead try and look up the file in the Talemetry CMS.

This is to ensure backwards compatibility with the local environment once the project has been migrated in to production, and it is predominantly using production-hosted assets.


### Gulp commands

* `default` - This command will fire up the development server using Browsersync, and start all watch tasks to compile SCSS, minify images and concat all scripts. This is also the default command that is ran by `npm start`. This task does not carry out any minification tasks on styles or scripts
* `ssl` - This does the same as `default` but uses HTTPS. Only use this if you're comfortable configuring SSL for localhost on your machine 
* `build` - This runs all asset-production focussed tasks once (SCSS compilation, script concat/minification and image minification). Use this task to fully minify and optimise assets prior to uploading in to the CMS.
### Static assets

When starting out and developing locally it's normal to link to local assets stored in the `public` folder as you would with a standard Express server.

When a Talemetry version of the site needs to be stood up all assets need to be added to the Talemetry asset library. When referencing these assets they must be declared as relative hyperlinks/addresses:
 
 * **Good** ✅ - `/system/production/assets/39939/original/html5shiv.js`
 * **Bad** ❌ - `https://connect.talemetry.com/system/production/assets/39939/original/html5shiv.js`

### Setting up custom routing

The core templates are included in this quickstart and exist in the `views` folder.

All page templates are kept in the `views/pages` subdirectory. By default the dev-server will match page routes to the file name, for example:

`jobs.somecareersite.com/pages/my-page => /views/my-page.liquid`

For bigger projects with complex content structures, you may want to create your own schema of sub-folders to organise content. To do this you need to add mappings to the server in the `dev-server/route-mappings.js` file, using a key for the route match and a value representing where the liquid template is located:

```$javascript
module.exports = {
    'software-engineering': './../src/views/pages/job-families/software-engineering'
}
```

### Liquid filters and tags
While efforts will be made to maintain this repository as/when Talemetry make changes, you can add your own filters and tags in to the respective `filters.js` and `tags.js` files in the `dev-server` folder.

If you plan on adding any, please read [the docs](https://www.npmjs.com/package/liquidjs) on how to write these.

## Creating the site in Talemetry

### Static assets
All assets (fonts, images, scripts and styles etc) must be uploaded in to the Talemetry asset library. It's recommended to update the addresses in your CSS/liquid templates at the same time as you're going along.

### Layouts
All of the liquid files in the `src/views` match the templates found in Talemetry.

### Pages
All page content is located in `src/views/pages`. These need to be added to the corresponding pages in the Talemetry CMS.

## Built With

* [Express](https://expressjs.com/) - Framework for development server
* [nodemon](https://nodemon.io/) - Restarts the dev-server on file changes
* [LiquidJS](https://www.npmjs.com/package/liquidjs) - Brilliant port of the liquid templating language to Javascript environments
* [Gulp](https://gulpjs.com/) - Task runner
* [SASS/SCSS](https://sass-lang.com/) - Syntactically _Awesome_ Style Sheets

## Authors

* **Matt Smith** - [github.com/kanx](https://github.com/kanx)

