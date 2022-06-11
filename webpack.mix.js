const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

/*
 |--------------------------------------------------------------------------
 | Browsersync Reloading
 |--------------------------------------------------------------------------
 |
 | automatically monitor your files for changes, 
 | and inject your changes into the browser without requiring a manual refresh.
 |
 */
mix.browserSync('127.0.0.1:8000');