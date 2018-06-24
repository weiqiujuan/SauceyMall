/**
 * Created by weiqiujuan on 17-12-1.
 */
'use strict';
require('./index.css');

let _mm = require('util/mall.js');
//通用页面头部
let header = {
    init: function () {
        this.bindEvent();
    },
    onLoad: function () {
        let keyword = _mm.getUrlParam('keyword');
        //如果keyword存在，则回调函数
        if (keyword) {
            $("#search-input").val(keyword);
        }
    },
    bindEvent: function () {
        let _this = this;
        //点击搜索按钮以后，搜索提交
        $("#search-btn").click(function () {
            this.searchSubmit();
        });
        //点击回车后，提交
        $("#search-input").keyup(function (e) {
<<<<<<< HEAD
            //13回车键
=======
            //１３是回车code
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
            if(e.keyCode===13){
                _this.serchSubmit();
            }
        })
    },
    //搜索的提交
<<<<<<< HEAD
    searchSubmit: function () {
=======
    serchSubmit: function () {
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        let keyword = $.trim($('#search-input').val());
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