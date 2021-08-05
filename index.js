const path = require('path');

module.exports = (opts, ctx) => {
    return {
        define: {
            COMMENT_CONTAINER: opts.container || 'main.page',
            COMMENT_HOST: opts.host || '',
            COMMENT_GET_URL: opts.getUrl || '',
            COMMENT_INSERT_URL: opts.insertUrl || '',
        },
        enhanceAppFiles: path.resolve(__dirname, 'comment.js'),
        globalUIComponents: 'TCComment'
    };
};