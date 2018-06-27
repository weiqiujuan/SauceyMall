let _mm = require('util/mall.js');
let _payment = {
    //获取支付信息
    getPaymentInfo: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
    //获取订单支付状态
    getPaymentStatus: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/query_order_pay_status.do'),
            data: {
                orderNo: orderNumber
            },
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
};
module.exports = _payment;