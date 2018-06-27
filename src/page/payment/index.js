/**
 * Created by weiqiujuan on 17-12-6.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');

let _mm = require("util/mall.js");
let _payment = require("service/payment-service.js");
let templateIndex = require('./index.string');

let page = {
    data: {
        orderNumber: _mm.getUrlParam('orderNumber')
    },
    init: function () {
        this.loadPaymentInfo();
    },
    //加载订单列表
    loadPaymentInfo: function () {
        let paymentHtml = '';
        let _this = this;
        let $pageWrap = $('.page-wrap');
        $pageWrap.html('<div class="loading"></div>');
        _payment.getPaymentInfo(this.data.orderNumber, function (res) {
            paymentHtml = _mm.renderHtml(templateIndex, res);
            $pageWrap.html(paymentHtml);
            _this.listenOrderStatus();
        }, function (errMsg) {
            $pageWrap.html('<p class="err-tip">' + errMsg + '</p>')
        })
    },
    //監聽訂單狀態，使用輪詢處理
    listenOrderStatus: function () {
        let _this = this;
        window.setInterval(function () {
            _payment.getPaymentStatus(_this.data.orderNumber, function (res) {
                if (res === true) {
                    window.location.href = './result.html?type=payment&&orderNumber=' + _this.data.orderNumber;
                }
            });
        }, 5000)
    }
};
$(function () {
    page.init();
});