/**
 * Created by weiqiujuan on 17-12-6.
 */
require('./index.css');
require('page/common/nav-simple/index.js');
let _user = require('service/user-service.js');
let _mm = require("util/mall.js");

//表单里的错误提示
let formError = {
    show: function (errMsg) {
        $(".error-item").show().find('.err-msg').text(errMsg);
    },
    hide: function () {
        $(".error-item").hide().find('.err-msg').text('');
    }
};

//page逻辑部分

let page = {
    data: {
        username: '',
        question: '',
        answer: '',
        token: ''
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadStepUsername();
    },
    bindEvent: function () {
        let _this = this;
        //用户名后的下一步
        $("#submit-username").click(function () {
            let username = $.trim($('#username').val());

            //用户名存在
            if (username) {
                _user.getQuestion(username, function (res) {
                    _this.data.username = username;
                    _this.data.question = res;
                    _this.loadStepQuestion();
                }, function (errMsg) {
                    formError.show(errMsg);
                });
            }
            //用户名不存在
            else {
                formError.show('请输入用户名');
            }
        });
        //输入密码提示问题答案中的下一步
        $('#submit-question').click(function () {
            let answer=$.trim($("#answer").val());
            //密码提示问题答案存在
            if(answer){
                //检查密码提示问题答案
                _user.checkAnswer({
                    username:_this.data.username,
                    question:_this.data.question,
                    answer:answer
                },function (res) {
                    _this.data.answer=answer;
                    _this.data.token=res;
                    _this.loadStepPassword();
                },function (errMsg) {
                    formError.show(errMsg)
                });
            }
            else{
                formError.show('请输入密码提示问题答案')
            }
        });
        //输入新密码后的按钮
        $('#submit-password').click(function () {
            let password = $.trim($('#password').val());
            //密码不为空
            if (password && password.length >= 6) {
                //检查密码提示问题答案
                _user.resetPassword({
                    username: _this.data.username,
                    passwordNew: password,
                    forgetToken: _this.data.token
                }, function (res) {
                    window.location.href = './result.html?type=pass-reset';
                }, function (errMsg) {
                    formError.show(errMsg);
                });
            }
            else {
                formError.show("请输入不少于６位的新密码");
            }
        });
    },

    loadStepUsername: function () {
        $(".step-username").show();
    },
    loadStepQuestion: function () {
        formError.hide();
        // 做容器的切换
        $(".hide-username").hide()
            .siblings('.step-question').show()
            .find('.question').text(this.data.question);
    },
    // 加载输入password的一步
    loadStepPassword: function () {
        formError.hide();
        //容器的切换
        $(".step-question").hide()
            .siblings('.step-password').show();
    }
};
$(function () {
    page.init();
});
