/**
 * Created by weiqiujuan on 17-12-3.
 */
require('./index.css');
require('page/common/nav-simple/index.js');
let _mm = require("util/mall.js");
var _user = require('service/user-service.js');


//表单错误提示
let formError = {
    show: function (errMsg) {
        $(".error-item").show().find('.err-msg').text(errMsg);
    },
    hide: function () {
        $(".error-item").hide().find('.err-msg').text("")
    }
};

//page逻辑部分
let page = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        let _this = this;
        //验证username
        $("#username").blur(function () {
            let username = $.trim($(this).val());
            //如果用户名为空，我们不做验证
            if (!username) {
                return;
            }
            //异步验证用户名是否存在
            _user.checkUsername(username, function (res) {
                formError.hide();
            }, function (errMsg) {
                formError.show(errMsg);
            });
        });

        //注册按钮的点击
        $('#submit').click(function () {
            _this.submit();
        });

        //按下回车健也可以提交
        $(".user-content").keyup(function (e) {
            if (e.keyCode === 13) {
                _this.submit();
            }
        })
    },
    //表单的提交
    submit: function () {
        let formData = {
                username: $.trim($('#username').val()),
                password: $.trim($('#password').val()),
                passwordConfirm: $.trim($('#password-confirm').val()),
                phone: $.trim($('#phone').val()),
                email: $.trim($('#email').val()),
                question: $.trim($('#question').val()),
                answer: $.trim($('#answer').val())
            },
            //表单验证接结果
            validateResult = this.formValidate(formData);
        //验证成功
        if (validateResult.status) {
            _user.register(formData, function (res) {
                window.location.href = './result.html?type=register';
            }, function (errMsg) {
                formError.show(errMsg);
            });
        } else {
            //错误提示
            formError.show(validateResult.msg);
        }
    },

    formValidate: function (formData) {
        let result = {
            status: false,
            msg: ''
        };
        //验证用户名是否为空
        if (!_mm.validate(formData.username, 'require')) {
            result.msg = '用户名不能为空';
            return result;
        }
        //验证密码是否为空
        if (!_mm.validate(formData.password, 'require')) {
            result.msg = '密码不能为空';
            return result;
        }
        //验证密码长度
        if (formData.password.length < 6) {
            result.msg = "密码长度至少６位";
            return result;
        }
        //验证两次密码是否一致
        if (formData.password !== formData.passwordConfirm) {
            result.msg = "两次输入的密码不一致";
            return result;
        }
        // 验证手机号
        if (!_mm.validate(formData.phone, 'phone')) {
            result.msg = '手机号格式不正确';
            return result;
        }
        // 验证邮箱格式
        if (!_mm.validate(formData.email, 'email')) {
            result.msg = '邮箱格式不正确';
            return result;
        }  // 验证密码提示问题是否为空
        if (!_mm.validate(formData.question, 'require')) {
            result.msg = '密码提示问题不能为空';
            return result;
        }
        // 验证密码提示问题答案是否为空
        if (!_mm.validate(formData.answer, 'require')) {
            result.msg = '密码提示问题答案不能为空';
            return result;
        }
        //通过验证
        result.status = true;
        result.msg = "验证通过";
        return result;
    }
};
$(function () {
    page.init();
});