
require("./index.css");
require('page/common/nav-simple/index.js');
let _mm = require("util/mall.js");

$(function () {
    let type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    //显示对应的提示元素
    $element.show();
});