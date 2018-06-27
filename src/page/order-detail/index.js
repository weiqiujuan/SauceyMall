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

let page = {
    data: {
        orderNo: _mm.getUrlParam('orderNumber')
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        //初始化左侧菜单
        navSide.init({
            name: 'order-list'
        });
        //加载detail数据
        this.loadOrderDetail();
    },
    //加载订单列表
    loadOrderDetail: function () {
        let orderDetailHtml = '';
        let _this = this;
        let $content = $('.content');
        $content.html('<div class="loading"></div>');
        _order.getOrderDetail(this.data.orderNo, function (res) {
            _this.dataFilter(res);
            orderDetailHtml = _mm.renderHtml(templateIndex, res);
            $content.html(orderDetailHtml);
        }, function (errMsg) {
            _mm.errorTips(errMsg);
        });
    },
    bindEvent: function () {
        let _this = this;
        $(document).on('click', '.order-cancel', function () {
            if (window.confirm('是否取消订单？')) {
                _order.cancelOrder(_this.data.orderNo, function () {
                    _mm.successTips('订单取消成功');
                    _this.loadOrderDetail();
                }, function (errMsg) {
                    _mm.errorTips(errMsg);
                })
            }
        })
    },
    dataFilter: function (data) {
        data.needPay = data.status === 10;
        data.isCancelable = data.status === 10;
    }
};
$(function () {
    page.init();
});