/**
 * @file index.js
 */
/**
 * 获取url参数
 *
 * @param {string} name 参数名
 * @return {string} 参数值
 */
// 获取URL中的参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(decodeURI(r[2]));
    }
    return null;
}

changeOrientation($('#map'));

// 强制横屏
function changeOrientation($map) {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    if (width < height) {
        $map.width(height);
        $map.height(width);
        $map.css('top', (height - width) / 2);
        $map.css('left', 0 - (height - width) / 2);
        $map.css('transform', 'rotate(90deg)');
        $map.css('transform-origin', '50% 50%');
    }

    var evt = 'resize' in window ? 'orientationchange' : 'resize';
    window.addEventListener(evt, function () {
        console.log(evt);
        setTimeout(function () {
            var width = document.documentElement.clientWidth;
            var height = document.documentElement.clientHeight;
            if (width > height) {
                $map.width(width);
                $map.height(height);
                $map.css('top', 0);
                $map.css('left', 0);
                $map.css('transform', 'none');
                $map.css('transform-origin', '50% 50%');
            }
            else {
                $map.width(height);
                $map.height(width);
                $map.css('top', (height - width) / 2);
                $map.css('left', 0 - (height - width) / 2);
                $map.css('transform', 'rotate(90deg)');
                $map.css('transform-origin', '50% 50%');
            }
        }, 300);

    }, false);
}
window.onload = function () {
    var area = getQueryString('area');
    var content = getQueryString('content');
    var key = getQueryString('key');
    var oArea = document.getElementById('area');
    var oContent = document.getElementById('content');
    var oMap = document.getElementById('map');
    oArea.innerHTML = area;
    oContent.innerHTML = content;
    oMap.style.backgroundImage = 'url("img/' + key + '.png")';
};