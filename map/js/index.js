/**
 * @file index.js
 */
/**
 * 获取url参数
 *
 * @param {string} name 参数名
 * @return {string} 参数值
 */
var getQueryString = function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return '';
};
window.onload = function () {
    var key = getQueryString('key');
    var area = getQueryString('area');
    var content = getQueryString('content');
    var oMap = document.getElementById('map');
    var oArea = document.getElementById('area');
    var oContent = document.getElementById('content');
    oArea.innerHTML = area;
    oContent.innerHTML = content;
    oMap.style.backgroundImage = 'url("img/' + key + '.png")';
};
