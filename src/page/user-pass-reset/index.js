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
        $('#submit-username').click(function () {
            let username = $.trim($('#username').val());
            _this.submitUsername(username, _this);
        });
        $('#username').keyup(function (e) {
            //回车键监听
            if (e.keyCode === 13) {
                let username = $.trim($('#username').val());
                _this.submitUsername(username, _this);
            }
        });
        //输入密码提示问题答案中的下一步
        $("#submit-question").click(function () {
            let answer = $.trim($('#answer').val());
            _this.submitAnswer(answer, _this);
        });
        $('#answer').keyup(function (e) {
            //回车键监听
            if (e.keyCode === 13) {
                let answer = $.trim($('#answer').val());
                _this.submitAnswer(answer, _this);
            }
        });
        $('#submit-password').click(function () {
            let password = $.trim($('#password').val());
            _this.submitPassword(password, _this);
        });
        $('#password').keyup(function (e) {
            //回车键监听
            if (e.keyCode === 13) {
                let password = $.trim($('#password').val());
                _this.submitPassword(password, _this);
            }
        });
    },
    // 加载输入用户名的一步
    loadStepUsername: function () {
        $(".step-username").show();
    },
    //加载输入密码提示问题答案的一步
    loadStepQuestion: function () {
        //清楚错误
        formError.hide();
        // 做容器的切换
        $(".step-username").hide()
            .siblings('.step-question').show()
            .find('.question').text(this.data.question);
    },
    // 加载输入password的一步
    loadStepPassword: function () {
        formError.hide();
        //容器的切换
        $(".step-question").hide()
            .siblings('.step-password').show();
    },
    //提交用户名获取问题
    submitUsername: function (username, _page) {
        if (username) {
            _user.getQuestion(username, function (res) {
                _page.data.username = username;
                _page.data.question = res;
                _page.loadStepQuestion();
            }, function (errMsg) {
                formError.show(errMsg);
            });
        } else {
            formError.show('请输入用户名');
        }
    },
    //提交问题答案获取token
    submitAnswer: function (answer, _page) {
        if (answer) {
            _user.checkAnswer({
                username: _page.data.username,
                question: _page.data.question,
                answer: answer
            }, function (res) {
                _page.data.answer = answer;
                _page.data.token = res;
                _page.loadStepPassword();
            }, function (errMsg) {
                formError.show(errMsg);
            });
        } else {
            formError.show('请输入答案');
        }
    },
    //输入新密码后的按钮
    submitPassword: function (password, _page) {
        if (password && password.length >= 6) {
            //检查密码提示问题答案
            _user.resetPassword({
                username: _page.data.username,
                passwordNew: password,
                forgetToken: _page.data.token
            }, function (res) {
                window.location.href = './result.html?type=pass-reset';
            }, function (errMsg) {
                formError.show(errMsg);
            });
        }
        else {
            formError.show("请输入不少于６位的新密码");
        }
    }
};
$(function () {
    page.init();
});
