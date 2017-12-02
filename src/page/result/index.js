/**
 * Created by weiqiujuan on 17-12-2.
 */
require("./index.css");
require('page/common/nav-simple/index.js');
var _mm = require("util/mall.js");

$(function () {
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    //显示对应的提示元素
    $element.show();
});