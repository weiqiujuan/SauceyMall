require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');

let _mm = require('util/mall.js');
let _address = require('service/address-service.js');
let _order = require('service/order-confirm.js');
let templateProduct = require('./product-list.string');
let templateAddress = require('./address-list.string');
let addressModal = require('./address-modal.js');

let page = {
    data: {
        selectedAddressId: null
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadAddressList();
        this.loadProductList();
    },
    bindEvent: function () {
        let _this = this;
        //添加地址选中事件
        $(document).on('click', '.address-item', function () {
            $(this).addClass("active")
                .siblings(".address-item").removeClass("active");
            //把id传出去
            _this.data.selectedAddressId = $(this).data("id");
        });

        //创建订单
        $(document).on('click', '.order-submit', function () {
            let shippingId = _this.data.selectedAddressId;
            if (shippingId) {
                //地址选择好了进行请求
                _order.create({
                    shippingId: shippingId
                }, function (res) {
                    window.location.href = './payment.html?orderNumber=' + res.orderNo;
                }, function (errMsg) {
                    _mm.errorTips(errMsg)
                })
            } else {
                _mm.errorTips('请选择一个收获地址');
            }
        });

        //添加地址
        $(document).on('click', '.address-add', function () {
            addressModal.show({
                isUpdate: false,
                onSuccess: function () {
                    _this.loadAddressList();
                }
            });
        });

        //编辑收获地址
        $(document).on('click', '.address-update', function (e) {
            e.stopPropagation();
            let shippingId = $(this).parents('.address-item').data('id');
            _address.getAddress(shippingId, function (res) {
                addressModal.show({
                    isUpdate: true,
                    data: res,
                    onSuccess: function () {
                        _this.loadAddressList();
                    }
                });
            }, function (errMsg) {
                _mm.errorTips('打开失败，刷新一下试试看~')
            })
        });

        //删除地址
        $(document).on('click', '.address-delete', function (e) {
            e.stopPropagation();
            let id = $(this).parents('.address-item').data('id');
            if (window.confirm('确认删除改地址吗？')) {
                _address.deleteAddress(id, function (res) {
                    _this.loadAddressList();
                }, function (errMsg) {
                    _mm.errorTips(errMsg)
                })
            }
        })
    },
    loadAddressList: function () {
        let _this = this;
        //加载地址列表
        _address.getAddressList(function (res) {
            _this.filterAddress(res);
            let addressListHtml = _mm.renderHtml(templateAddress, res);
            $('.address-con').html(addressListHtml);
        }, function (errMsg) {
            $('.address-con').html('<p class="err-tip">地址加载失败，请刷新后重试</p>>');

        })
    },
    //加载商品列表
    loadProductList: function () {
        let _this = this;
        _order.getProductList(function (res) {
            let productListHtml = _mm.renderHtml(templateProduct, res);
            $('.product-con').html(productListHtml);
        }, function (errMsg) {
            $('.product-con').html('<p class="err-tip">地址加载失败，请刷新后重试</p>');

        })
    },
    filterAddress: function (data) {
        if (this.data.selectedAddressId) {
            let selectedAddressIdFlag = false;
            for (let i = 0, iLength = data.list.length; i < iLength; i++) {
                if (data.list[i].id === this.data.selectedAddressId) {
                    data.list[i].isActive = true;
                    selectedAddressIdFlag = true;
                }
            }
            if (!selectedAddressIdFlag) {
                this.data.selectedAddressId = null;
            }
        }
    }
};
$(function () {
    page.init();
});