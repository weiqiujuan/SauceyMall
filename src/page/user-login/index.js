/**
 * Created by weiqiujuan on 17-12-1.
 */
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
let _user = require("service/user-service.js");
let _mm = require("util/mall.js");

//表单里的错误提示
let formError = {
    show: function (errMsg) {
<<<<<<< HEAD
        $(".error-item").show().find('.err-msg').text(errMsg);
    },
    hide: function () {
        $(".error-item").hide().find('.err-msg').text('');
=======
        $(".err-item").show().find('.err-msg').text(errMsg);
    },
    hide: function () {
        $(".err-item").hide().find('.err-msg').text('');
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
    }

};
//page逻辑部分
let page = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        let _this = this;
        //        登录按钮点击
        $('#submit').click(function () {
            _this.submit();
        });
        // 如果按下回车，也进行提交
        $(".user-content").keyup(function () {
            //13表示回车键
            if (e.keyCode === 13) {
                _this.submit();
            }
        });
    },
    //提交表单
    submit: function () {
        let formData = {
                username: $.trim($("#username").val()),
                password: $.trim($("#password").val())
            },
            //表单提交结果
<<<<<<< HEAD
            validateResult = this.formValidate(formData);
        //success
        if (validateResult.status) {
=======
            validateReault = this.formValidate(formData);
        //success
        if (validateReault.status) {
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
            _user.login(formData, function (res) {
                window.location.href = _mm.getUrlParam('redirect') || './index.html';
            }, function (errMsg) {
                formError.show(errMsg);
            });
        }
        //验证失败
        else {
<<<<<<< HEAD
            formError.show(validateResult.msg);
=======
            formError.show(validateReault.msg);
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
        }
    },
    //表单字段验证
    formValidate: function (formData) {
        let result = {
            status: false,
            msg: ''
        };
        if (!_mm.validate(formData.username, 'require')) {
            result.msg = "用户名不能为空";
            return result;
        }
        if (!_mm.validate(formData.password, 'require')) {
            result.msg = "密码不能为空";
            return result;
        }
        //通过验证，返回正确提示
        result.status = true;
        result.msg = "验证通过";
        return result;
    }
};
$(function () {
    page.init();
});