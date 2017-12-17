/**
 * Created by weiqiujuan on 17-12-6.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');

let _mm=require('util/mall.js');
let _product=require('service/product-service.js');
// let Pagination=require('util/pagination/index.js');
let templateIndex=require('./index.string');

let page = {
    data:{
        listParam:{
            keyword:_mm.getUrlParam('keyword'),
            categoryId:_mm.getUrlParam('categoryId'),
            orderBy:_mm.getUrlParam('orderBy'),
            pageNum:_mm.getUrlParam('pageNum'),
            pageSize:_mm.getUrlParam('pageSize')
        }
    },
    init:function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad:function () {
        this.loadList();
    },
    bindEvent:function () {
        let _this=this;
        //排序的点击事件
        $('.sort-item').click(function () {

        })
    }
};


$(function () {
    page.init();
});