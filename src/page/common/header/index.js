/**
 * Created by weiqiujuan on 17-12-1.
 */
'use strict';
require('./index.css');

var _mm = require('util/mm.js');
//通用页面头部
var header = {
    init: function () {
        this.bindEvent();
    },
    onLoad: function () {
        var keyword = _mm.getUrlParam('keyword');
        //如果keyword存在，则回调函数
        if (keyword) {
            $("#search-input").val(keyword);
        }
    },
    bindEvent: function () {
        var _this = this;
        //点击搜索按钮以后，搜索提交
        $("#search-btn").click(function () {
            this.searchSubmit();
        });
        //点击回车后，提交
        $("#search-input").keyup(function (e) {
            //１３是回车code
            if(e.keyCode===13){
                _this.serchSubmit();
            }
        })
    },
    //搜索的提交
    serchSubmit: function () {
        var keyword = $.trim($('#search-input').val());
        //如果提交的时候有keyword正常跳转到list页面
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword;
        }
        //如果keyword为空，直接返回首页
        else {
            _mm.goHome();
        }
    }
};
header.init();