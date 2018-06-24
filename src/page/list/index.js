/**
 * Created by weiqiujuan on 17-12-6.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');

let _mm = require('util/mall.js');
let _product = require('service/product-service.js');
let Pagination = require('util/pagination/index.js');
let templateIndex = require('./index.string');

let page = {
    data: {
        listParam: {
<<<<<<< HEAD
            keyword: _mm.getUrlParam('keyword') || '',
            categoryId: _mm.getUrlParam('categoryId') || '',
            orderBy: _mm.getUrlParam('orderBy') || 'default',
            pageNum: _mm.getUrlParam('pageNum') || 1,
            pageSize: _mm.getUrlParam('pageSize') || 20
=======
            keyword: _mm.getUrlParam('keyword')||'',
            categoryId: _mm.getUrlParam('categoryId')||'',
            orderBy: _mm.getUrlParam('orderBy')||'default',
            pageNum: _mm.getUrlParam('pageNum')||1,
            pageSize: _mm.getUrlParam('pageSize')||20
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        }
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadList();
    },
    bindEvent: function () {
        let _this = this;
        //排序的点击事件
        $('.sort-item').click(function () {
<<<<<<< HEAD
            let $this = $(this);
            _this.data.listParam.pageNum = 1;
=======

            let $this = $(this);
            _this.data.listParam.pageNum = 1;

>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
            //点击默认排序
            if ($this.data('type') === 'default') {
                //已经是active样式
                if ($this.hasClass('active')) {
                    return;
                }
                //其他
                else {
                    $this.addClass('active').siblings('.sort-item')
                        .removeClass('active asc desc');
                    _this.data.listParam.orderBy = 'default'
                }
            }
            //点击价格排序
            else if ($this.data('type') === 'price') {
                //active class 的处理
                $this.addClass('active').siblings('.sort-item')
                    .removeClass('active asc desc');
                //升序，降序的处理
                if (!$this.hasClass('asc')) {
                    $this.addClass('asc').removeClass('desc');
<<<<<<< HEAD
                    _this.data.listParam.orderBy = 'price_asc';
=======
                    _this.data.listParam.orederBy = 'price_asc';
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
                } else {
                    $this.addClass('desc').removeClass('asc');
                    _this.data.listParam.orderBy = 'price_desc';
                }
            }
            //重新加载列表
            _this.loadList();
        });
    },
    loadList: function () {
        let _this = this,
            listHtml = '',
            listParam = this.data.listParam,
            $pListCon = $('.p-list-con');
        $pListCon.html('<div class="loading"></div>>');
        //删除参数中不必要的字段
        listParam.categoryId ? (delete listParam.keyword) : (delete listParam.categoryId);
        //请求接口
        _product.getProductList(listParam, function (res) {
            listHtml = _mm.renderHtml(templateIndex, {
                list: res.list
            });
            $pListCon.html(listHtml);
            _this.loadPagination({
                hasPreviousPage: res.hasPreviousPage,
                prePage: res.prePage,
                hasNextPage: res.hasNextPage,
                nextPage: res.nextPage,
                pageNum: res.pageNum,
                pages: res.pages
            })
        }, function (errMsg) {
<<<<<<< HEAD
            _mm.errorTips(errMsg);
=======
            _mm.errotTips(errMsg);
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        });
    },
    loadPagination: function (pageInfo) {
        let _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container: $('.pagination'),
            onSelectPage: function (pageNum) {
                _this.data.listParam.pageNum = pageNum;
                _this.loadList();
            }
        }));
    }
};

$(function () {
    page.init();
});