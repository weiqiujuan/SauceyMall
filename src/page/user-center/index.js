/**
 * Created by weiqiujuan on 17-12-6.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
let navSide = require('page/common/nav-side/index.js');
let _mm = require("util/mall.js");
let _user = require("service/user-service.js");
let templateIndex = require('./index.string');


let page = {
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        //初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });
        //加载用户信息
        this.loadUserInfo();
    },
    loadUserInfo: function () {
        let userHtml = '';
        _user.getUserInfo(function (res) {
            userHtml = _mm.renderHtml(templateIndex, res);
            $(".panel-body").html(userHtml)
        }, function (errMsg) {
            _mm.errorTips(errMsg);
        })
    }
};


$(function () {
    page.init();
});