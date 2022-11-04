/*
 * @Author: chenzhongsheng
 * @Date: 2022-11-04 20:47:42
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-04 20:53:59
 */
const path = require('path');

module.exports = (opts, ctx) => {
    return {
        define: {
            COMMENT_CONTAINER: opts.container || 'main.page',
            COMMENT_HOST: opts.host || '',
            COMMENT_GET_URL: opts.getUrl || '',
            COMMENT_INSERT_URL: opts.insertUrl || '',
            REPLY_INSERT_URL: opts.replyUrl || '',
            APP_NAME: opts.appName || '',
            THEME: opts.theme || '',
            DARK_SELECTOR: opts.darkSelector || '',
        },
        enhanceAppFiles: path.resolve(__dirname, 'comment.js'),
        globalUIComponents: 'TCComment'
    };
};