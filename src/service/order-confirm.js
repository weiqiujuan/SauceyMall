/**
 * Created by weiqiujuan on 17-12-8.
 */
let _mm = require('util/mall.js');

let order = {
    //获取商品详细信息
    getProductList: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/get_order_cart_product.do'),
            success: resolve,
            error: reject
        });
    },
    // 根据收货地址创建订单
    create: function (orderInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/create.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        });
    },
    // 获取当前登陆用户的订单列表
    getOrderList: function (orderInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/list.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        });
    },
    getOrderDetail: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
    cancelOrder: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    }
};
module.exports = order;