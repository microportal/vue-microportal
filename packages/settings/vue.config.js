var Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            disableHostCheck: true,
            sockPort: 7072,
            sockHost: "localhost",
        },
        externals: ["single-spa-vue", "vue", "vue-router", /^@microportal\/.+/],
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
