const path = require('path');

module.exports = (opts, ctx) => {
    return {
        define: {
            COMMENT_OPTIONS: opts.options || {},
            COMMENT_CONTAINER: opts.container || 'main.page'
        },
        enhanceAppFiles: path.resolve(__dirname, 'comment.js'),
        globalUIComponents: 'TCComment'
    };
};