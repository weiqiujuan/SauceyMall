/**
 * Created by weiqiujuan on 17-12-1.
 */
'use strict';
require('./index.css');
let _mm = require("util/mall.js");
<<<<<<< HEAD
let templateIndex = require("./index.string");

//侧边导航
let navSide = {
    option: {
        name: "",
        navList: [
            {name: "user-center", desc: "个人中心", href: './user-center.html'},
            {name: "order-list", desc: "我的订单", href: './order-list.html'},
            {name: "user-pass-update", desc: "修改密码", href: './user-pass-update.html'},
            {name: "about", desc: "关于Mall", href: './about.html'}
=======
let templateIndex=require("./index.string");

//侧边导航
let navSide = {
    option:{
        name:"",
        navList:[
            {name:"user-center",desc:"个人中心",href:'./user-center.html'},
            {name:"order-list",desc:"我的订单",href:'./order-list.html'},
            {name:"user-pass-update",desc:"修改密码",href:'./user-pass-update.html'},
            {name:"about",desc:"关于Mall",href:'./about.html'}
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        ]
    },
    init: function (option) {
        //合并选项
<<<<<<< HEAD
        $.extend(this.option, option);
=======
        $.extend(this.option,option);
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        this.renderNav();
    },
    //渲染导航菜单
    renderNav: function () {
        //计算active数据
<<<<<<< HEAD
        for (let i = 0, iLength = this.option.navList.length; i < iLength; i++) {
            if (this.option.navList[i].name === this.option.name) {
                this.option.navList[i].isActive = true;
            }
        }
        //渲染list数据
        let navHtml = _mm.renderHtml(templateIndex, {
            navList: this.option.navList
=======
        for(let i=0,iLength=this.option.navList.length;i<iLength;i++){
            if(this.option.navList[i].name===this.option.name){
                this.option.navList[i].isActive=true;
            }
        }
        //渲染list数据
        let navHtml=_mm.renderHtml(templateIndex,{
            naveList:this.option.navList
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        });
        //吧html放入容器
        $(".nav-side").html(navHtml);

    }

};
module.exports = navSide;