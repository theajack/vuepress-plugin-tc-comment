/*
 * @Author: chenzhongsheng
 * @Date: 2022-11-04 20:47:42
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-04 21:00:52
 */



function loadScript (callback) {
    import('tc-comment')
        .then(pkg => {callback(pkg)});
}

let maxTime = 10;
let time = 0;

export function renderComment(){
    const parent = document.querySelector(COMMENT_CONTAINER);
    if (!parent) {
        time ++;
        if(time > maxTime){
            console.warn(`父元素不存在：${COMMENT_CONTAINER}`)
            return;
        }
        setTimeout(()=>{
            renderComment();
        }, 500)
        return;
    }
    loadScript(pkg=>{
        const dom = document.createElement('div');
        dom.style.maxWidth = '1000px';
        dom.style.minWidth = '300px';
        dom.style.width = '80%';
        dom.style.margin = '20px auto';
        parent.appendChild(dom);
        console.log('Vuepress-plugin-tc-comment：init comment: v'+pkg.version);

        const data = {
            el: dom,
            theme: THEME || undefined,
            darkSelector: DARK_SELECTOR || undefined,
        }
        if(APP_NAME) data.appName = APP_NAME;
        else {
            data.urlConfig = {
                host: COMMENT_HOST,
                get: COMMENT_GET_URL,
                insert: COMMENT_INSERT_URL,
                reply: REPLY_INSERT_URL,
            }
        }
        pkg.initComment(data);
    });
}