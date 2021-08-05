
let initComment;
loadScript();

let dom = null;

/**
 * Lazy load pkg
 *
 * @param {String} name
 */
export function loadScript () {
    import('tc-comment')
        .then(pkg => initComment = pkg.default);
}

/**
 * Support Gitalk and so on.
 */
export const provider = {
    render () {
        if (!dom) {
            const parent = document.querySelector(COMMENT_CONTAINER);
            if (!parent) {
                return false;
            }
            dom = document.createElement('div');
            dom.style.maxWidth = '1000px';
            dom.style.minWidth = '300px';
            dom.style.width = '80%';
            dom.style.margin = '20px auto';
            parent.appendChild(dom);
            setTimeout(() => {
                initComment({
                    el: dom,
                    urlConfig: {
                        host: COMMENT_HOST,
                        get: COMMENT_GET_URL,
                        insert: COMMENT_INSERT_URL
                    }
                });
            });
        }
        return true;
    },
    clear () {
        if (dom) {
            dom.remove();
            dom = null;
        }
        return true;
    }
};