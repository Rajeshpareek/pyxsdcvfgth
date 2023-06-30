import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function (app) {
    app.use(
        '/api/*',
        createProxyMiddleware({
            target: 'https://api-wip.onrender.com/',
            changeOrigin: true,
        })
    );
};
