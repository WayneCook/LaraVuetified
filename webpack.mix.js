const mix = require('laravel-mix');


  mix.js('resources/js/app.js', 'public/js')
     .sass('resources/sass/app.scss', 'public/css')
     .js('resources/js/admin.js', 'public/js');



// Production

// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

// Mix.listen('configReady', config => {
    //     const scssRule = config.module.rules.find(r => r.test.toString() === /\.scss$/.toString())
    //     const scssOptions = scssRule.loaders.find(l => l.loader === 'sass-loader').options
    //     scssOptions.data = '@import "./resources/sass/styles.scss";'

    //     const sassRule = config.module.rules.find(r => r.test.toString() === /\.sass$/.toString())
    //     const sassOptions = sassRule.loaders.find(l => l.loader === 'sass-loader').options
    //     sassOptions.data = '@import "./resources/sass/styles.scss"'
    //   })


//   mix.webpackConfig({
    //       plugins: [new VuetifyLoaderPlugin()]
    //     })
    //     .js('resources/js/app.js', 'public/js')
    //     .sass('resources/sass/app.scss', 'public/css')
    //     .js('resources/js/admin.js', 'public/js');

    mix.browserSync({
        injectChanges: false,
        proxy: 'http://127.0.0.1:8000/'
    });
