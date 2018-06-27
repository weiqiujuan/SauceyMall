let _mm = require('util/mall.js');

let address = {
    //获取商品列表
    getAddressList: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/list.do'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject
        });
    },
    //新增收货地址
    save: function (addressInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },

    //获取地址详细信息
    getAddress: function (shippingId, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/select.do'),
            data: {
                shippingId: shippingId
            },
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    //更新地址信息
    update: function (shippingInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/update.do'),
            data: shippingInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    //删除收货地址
    deleteAddress: function (shippingId, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/del.do'),
            data: {
                shippingId: shippingId
            },
            method: 'POST',
            success: resolve,
            error: reject
        });
    }

};
module.exports = address;