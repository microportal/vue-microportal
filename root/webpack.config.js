const path = require("path");
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "microportal",
        projectName: "root",
        webpackConfigEnv,
    });

    return webpackMerge.merge(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
        entry: path.resolve(__dirname, "src/microportal-root"),
        output: {
            filename: "[name].js",
            libraryTarget: "system",
            path: path.resolve(__dirname, "dist"),
        },
        devtool: "sourcemap",
        module: {
            rules: [
                { parser: { system: false } },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [{ loader: "babel-loader" }],
                },
            ],
        },
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            disableHostCheck: true,
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                template: "src/index.ejs",
                templateParameters: {
                    isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === "true",
                },
            }),
        ],
        externals: ["single-spa", "vue", "vue-router", "vuex", /^@microportal\/.+$/],
    });
};
