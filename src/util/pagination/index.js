/**
 * Created by weiqiujuan on 17-12-18.
 */
require('./index.css');

let _mm = require('util/mall.js');
let templatePagination = require('./index.string');

let Pagination = function () {
    let _this = this;
    this.defaultOption = {
        container: null,
        pageNum: 1,
        pageRange: 3,
        onSelectPage: null
    };
    //事件处理
    $(document).on('click', '.pg-item', function () {
        let $this = $(this);
        //对于active和disabled按钮点击，不做处理
        if ($this.hasClass('active') || $this.hasClass('disabled')) {
            return;
        }
        typeof _this.option.onSelectPage === 'function' ? _this.option.onSelectPage($this.data('value')) : null;
    })
};
//渲染分页组建
Pagination.prototype.render = function (userOption) {
    //合并选项
    this.option = $.extend({}, this.defaultOption, userOption);
    //判断容器是否为合法的jquery对象,instanceof是jquery中的一个对象
    if (!(this.option.container instanceof jQuery)) {
        return;
    }
    //判断是否只有一页
    if (this.option.pages <= 1) {
        return;
    }
    this.option.container.html(this.getPaginationHtml());
};
//获取分页的html　　｜上一页｜　1　2　3　4　5　6　｜下一页｜
Pagination.prototype.getPaginationHtml = function () {
    let html = '',
        option = this.option,
        pageArray = [],
        start = option.pageNum - option.pageRange > 0
            ? option.pageNum - option.pageRange : 1,
        end = option.pageNum + page.pageRange < option.pages
            ? option.pageNum + option.pageRange : option.pages;
    //上一页按钮的数据
    pageArray.push({
        name: '上一页',
        value: this.option.prePage,
        disabled: !this.option.hasPreviousPage
    });
    //数字按钮的处理
    for (let i = start; i <= end; i++) {
        pageArray.push({
            name: i,
            value: i,
            active: (i === option.pageNum)
        });
    }
    //下一页按钮的数据
    pageArray.push({
        name: '下一页',
        value: this.option.nextPage,
        disabled: !this.option.hasNextPage
    });
    html = _mm.renderHtml(templatePagination, {
        pageArray: pageArray,
        pageNum: option.pageNum,
        pages: option.pages
    });
    return html;
};
module.exports = Pagination;
