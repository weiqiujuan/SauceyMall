/**
 * Created by weiqiujuan on 17-12-6.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');

let _mm = require('util/mall.js');
let _product = require('service/product-service.js');
let _cart = require('service/cart-service.js');
let templateIndex = require('./index.string');

let page = {
    data: {
<<<<<<< HEAD
        productId: _mm.getUrlParam('productId') || ''
=======
        data: {
            productId: _mm.getUrlParam('produceId') || ''
        }
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
<<<<<<< HEAD
    },
=======
    }
    ,
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
    onLoad: function () {
        //   如果没有传productId，自动跳回首页
        if (!this.data.productId) {
            _mm.goHome();
        }
        this.loadDetail();
    }
    ,
    bindEvent: function () {
        let _this = this;
        //图片预览
        $(document).on('mouseenter', '.p-img-item', function () {
            let imgUrl = $(this).find('.p-img').attr('src');
            $(".main-img").attr('src', imgUrl);
        });
        //    count的操作
        $(document).on('click', '.p-count-btn', function () {
<<<<<<< HEAD
            let type = $(this).hasClass('plus') ? 'plus' : 'minus',
=======
            let type = $(type).hasClass('plus') ? 'plus' : 'minus',
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
                $pCount = $('.p-count'),
                currCount = parseInt($pCount.val()),
                minCount = 1,
                maxCount = _this.data.detailInfo.stock || 1;
            if (type === 'plus') {
                $pCount.val(currCount < maxCount ? currCount + 1 : maxCount)
            } else if (type = 'minus') {
                $pCount.val(currCount > minCount ? currCount - 1 : minCount)
            }
        });
        //加入购物车
        $(document).on('click', '.cart-add', function () {
            _cart.addToCart({
                productId: _this.data.productId,
                count: $('.p-count').val()
            }, function (res) {
<<<<<<< HEAD
                window.location.href = './result.html?type=cart-add';
            }, function (errMsg) {
                _mm.errorTips(errMsg);
=======
                window.location, hres = './result.html?type=cart-add';
            }, function (errMag) {
                _mm.errotTips(errMag);
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
            })
        })
    },
    //加载商品详情的数据
    loadDetail: function () {
        let _this = this,
            html = '',
            $pageWrap = $('.page-wrap');
        //loading
        $pageWrap.html('<div class="loading"></div>');
<<<<<<< HEAD
        // 请求detail信息
=======
        //    请求detail信息
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        _product.getProductDetail(this.data.productId, function (res) {
            _this.filter(res);
            //    缓存detail的数据
            _this.data.detailInfo = res;
            //render
            html = _mm.renderHtml(templateIndex, res);
            $pageWrap.html(html);
        }, function (errMsg) {
            $pageWrap.html('<p class="err-tip">此商品太淘气，找不到</p>>')
        })
    },
    //数据匹配
    filter: function (data) {
        data.subImages = data.subImages.split(',');
    }
};
$(function () {
    page.init();
});