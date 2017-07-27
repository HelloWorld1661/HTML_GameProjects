function ready(fn) {
    // 现代浏览器
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn, false);
    } else {
        IEContentLoaded(fn);
    }


    // IE 模拟 DOMContentLoaded
    function IEContentLoaded(fn) {
        var flag = false;
        var doc = window.document;

        // 只执行一次init()
        var init = function() {
            if (!flag) {
                flag = true;
                fn();
            }
        };

        // 立即调用
        (function() {
            try {
                // DOM树未创建完之前调用doScroll会抛出错误
                doc.documentElement.doscroll('left');
            } catch (e) {
                // 延时再试一次
                setTimeout(arguments.callee, 50);
                return;
            }
            // 如果没有错误就表示DOM树创建完毕,执行回调函数
            init();
        })();

        // 监听document的加载状态
        doc.onreadystatechange = function() {
            // 如果用户在DOMready之后绑定了函数,就立即执行
            if (doc.readyState == 'complete') {
                doc.onreadystatechange = null;
                init();
            }

        };
    }
}
