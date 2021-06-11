const Visualizer = require('webpack-visualizer-plugin');
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    lintOnSave: false,

    configureWebpack: {
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            disableHostCheck: true,
            sockPort: 7070,
            sockHost: "localhost"
        },
        externals: ["core-js", "single-spa-vue", "vue", "vue-router", "vuex", "quasar", /^@microportal\/.+/],
        plugins: [
            new Visualizer({
                filename: '../statistics.html'
            }),
        ],
    },

    filenameHashing: false,

    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: false
        }
    },

    transpileDependencies: [
        'quasar'
    ]
};
