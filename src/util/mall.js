/**
 * Created by weiqiujuan on 17-11-27.
 */
'use strict';
let Hogan = require("hogan.js");
let conf = {
    serverHost: ''
};
let _mm = {
    request: function (param) {
        let _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || "",
            dataType: param.type || 'json',
            data: param.data || "",
            success: function (res) {
                //请求成功
                if (0 === res.status) {
                    typeof  param.success === 'function' && param.success(res.data, res.msg);
                }
                //没有登录状态,需要进行强制登录
                else if (10 === res.status) {
                    _this.doLogin();
                }
                else if (1 === res.status) {
                    typeof  param.error() === 'function' && param.error(res.msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText)
            }
        });
    },//获取服务器地址
    getServerUrl: function (path) {
        return conf.serverHost + path;
    },//获取url参数
    getUrlParam: function (name) {
        //happymall.com/product/list?keyword==xxx&&page=1
        let reg = new RegExp('(^|&)' + name + '=([^$]*)(&|$)');//获取？号开头的参数
        let result = window.location.search.substr(1).match(reg);//去掉匹配到正则的？号
        return result ? decodeURIComponent(result[2]) : null;//匹配到的值第二个值
    },
    //渲染html文件
    renderHtml: function (htmlTemplate, data) {
        let template = Hogan.compile(htmlTemplate),//进行编译
            result = template.render(data);
        return result;
    },
    //成功提示
    successTips: function (msg) {
        alert(msg || "操作成功");
    },
    //错误提醒
    errotTips: function (msg) {
        alert(msg || "哪里不对了");
    },
    //字段的验证，支持非空，手机，邮箱
    validate: function (value, type) {
        let value = $.trim(value);
        //非空验证
        if ("require" === type) {
            return !!value;
        }
        //手机号验证
        else if ("phone" === type) {
            return /^1\d{10}$/.test(value);
        }
        else if ("email" === type) {
            return /^(\w)+(\. \w)*@(\w)+((\. \w{2,3}){1,3})$/.test(value);
        }
    },
    //统一登录处理
    doLogin: function () {
        window.location.href = "./user-login.html?redirect=" + encodeURIComponent(window.location.href);
    },
    //返回主页
    goHome: function () {
        window.location.href = './index.html';
    }

};
module.exports = _mm;