const DEV_PATH = "/";
const PROD_PATH = "/component";

function isProduct() {
    return process.env.NODE_ENV === 'production';
}

module.exports = {
    publicPath: isProduct() ? PROD_PATH : DEV_PATH,
    pages: {
        index: {
            entry: 'example/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            });
    },
    devServer: {
        port: 3000
    }
};
