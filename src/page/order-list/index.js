/**
 * Created by weiqiujuan on 17-12-6.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');

let navSide = require('page/common/nav-side/index.js');
let _mm = require("util/mall.js");
let _order = require("service/order-confirm.js");
let templateIndex = require('./index.string');
let Pagination = require('util/pagination/index.js');

let page = {
    data: {
        listParam: {
            pageNum: 1,
            pageSize: 5
        }
    },
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        //初始化左侧菜单
        navSide.init({
            name: 'order-list'
        });
        //加载用户信息
        this.loadOrderList();
    },
    //加载订单列表
    loadOrderList: function () {
        let orderListHtml = '';
        let _this = this;
        let $listCon = $('.order-list-con');
        $listCon.html('<div class="loading"></div>');
        _order.getOrderList(this.data.listParam, function (res) {
            orderListHtml = _mm.renderHtml(templateIndex, res);
            $listCon.html(orderListHtml);
            _this.loadPagination({
                hasPreviousPage: res.hasPreviousPage,
                prePage: res.prePage,
                hasNextPage: res.hasNextPage,
                nextPage: res.nextPage,
                pageNum: res.pageNum,
                pages: res.pages
            });
        }, function (errMsg) {
            $listCon.html('<p class="err-tip">加载订单失败，刷新后重试</p>')
        })

    },
    //分页信息的加载
    loadPagination: function (pageInfo) {
        let _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container: $('.pagination'),
            onSelectPage: function (pageNum) {
                _this.data.listParam.pageNum = pageNum;
                _this.loadOrderList();
            }
        }));
    }
};
$(function () {
    page.init();
});