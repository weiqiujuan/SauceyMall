/**
 * Created by weiqiujuan on 17-11-23.
 */

'use strict';
require('./index.css');
<<<<<<< HEAD
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');

let navSide = require('page/common/nav-side/index.js');
let templateBanner = require('./index.string')
let _mm = require("util/mall.js");

$(function () {
    //渲染banner
    let bannerHtml = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    //初始化banner
    let $slider = $('.banner').unslider({
        dots: true
    });
    //前一张和后一张的事件绑定
    $(".banner-con .banner-arrow").click(function () {
        let forward = $(this).hasClass("prev") ? 'prev' : 'next';
=======
require('../common/nav/index.js');
require('../common/header/index.js');
require('../common/nav-side/index.js');
require('util/slider/index.js');
let templateBanner=require('./index.string')
let _mm=require("util/mall.js");
let navSide=require('page/common/nav-side/index.js');
navSide.init({
    name:'pass-update'
});

$(function () {
    //渲染banner
    let bannerHtml=_mm.render(templateBanner);
    $('.banner-con').html();
    //初始化banner
    let $slider=$('.banner').unslider({
        dots:true,
    });
    //前一张和后一张的事件绑定
    $(".banner-con .banner-arrow").click(function (){
        let forward=$(this).hasClass("prev")?'prev':'next';
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        $slider.data('unslider')[forward]();
    });
});