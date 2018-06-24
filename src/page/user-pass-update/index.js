/**
 * Created by weiqiujuan on 17-12-17.
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('page/common/nav-side/index.js');

let navSide = require('page/common/nav-side/index.js');
let _mm = require('util/mall.js');
let _user = require('service/user-service.js');

//page逻辑部分
let page = {
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        //初始化左侧菜单
        navSide.init({
            name: 'user-pass-update'
        });
    },
    bindEvent: function () {
        let _this = this;
        //点击提交后按钮的动作
        $(document).on('click', 'btn-submit', function () {
            let userInfo = {
                    password: $.trim($('#password').val()),
                    passwordNew: $.trim($('#password-new').val()),
<<<<<<< HEAD
                    passwordConfirm: $.trim($('#password-confirm').val())
=======
                    passwordConfirm: $.trim($('#password-confirm').val()),
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
                },
                validateResult = _this.validateForm(userInfo);
            if (validateResult.status) {
                //更改用户密码
                _user.updatePassword({
<<<<<<< HEAD
                        passwordOld: userInfo.password,
                        passwordNew: userInfo.passwordNew
                    }, function (res, msg) {
                        _mm.successTips(msg);
                    }, function (errMsg) {
                        _mm.errorTips(errMsg)
                    });
            }
            else {
                _mm.errorTips(validateResult.msg);
=======
                    passwordOld:userInfo.password,
                    passwordNew:userInfo.passwordNew
                    },function (res,msg) {
                    _mm.successTips(msg);
                    },function (errMag) {
                    _mm.errotTips(errMag)
                    }
                );
            }
            else {
                _mm.errotTips(validateResult.msg);
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
            }
        });
    },
    //验证字段信息
<<<<<<< HEAD
    validateForm: function (formData) {
        let result = {
            status: false,
            msg: ''
        };
        if (!_mm.validate(formData.password, 'require')) {
            result.msg = '原密码不能为空';
            return result;
        }
        //验证更新密码长度
        if (!formData.passwordNew || formData.passwordNew.length < 6) {
=======
    validateForm:function (formData) {
        let result={
            status:false,
            msg:''
        };
        if(_mm.validate(formData.password,'require')){
            result.msg='原密码不能为空';
            return result;
        }
        //验证更新密码长度
        if(!formData.passwordNew||formData.passwordNew.length<6){
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
            result.msg = '密码长度不得少于6位';
            return result;
        }
        //验证两次输入的密码是否一致
<<<<<<< HEAD
        if (formData.passwordNew !== formData.passwordConfirm) {
=======
        if(formData.passwordNew!==formData.passwordConfirm){
>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
            result.msg = '两次输入的密码不一致';
            return result;
        }
        //验证通过，返回正确提示
<<<<<<< HEAD
        result.status = true;
        result.msg = '验证通过';
        return result;
    }
};
=======
        result.status=true;
        result.msg='验证通过';
        return result;
    }
};


>>>>>>> d2985c0ed6496cccd3c45466821fec630be22c30
$(function () {
    page.init();
});