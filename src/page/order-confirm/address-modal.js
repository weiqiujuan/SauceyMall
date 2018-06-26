let _mm = require('util/mall.js');
let _cities = require('util/cities/index.js');
let _address = require('service/address-service.js');
let templateAddressModal = require('./address-modal.string');

let addressModal = {
    show: function (option) {
        this.option = option;
        //初始化，防止null
        this.option.data = option.data || {};
        this.$modalWrap = $(".modal-wrap");
        //渲染页面
        this.loadModal();
        //绑定事件
        this.bindEvent();
    },
    hide: function () {
        this.$modalWrap.empty();
    },
    loadModal: function () {
        let modalHtml = _mm.renderHtml(templateAddressModal, {
            isUpdate: this.option.isUpdate,
            data: this.option.data
        });
        this.$modalWrap.html(modalHtml);
        //加载省份
        this.loadProvince();
    },
    bindEvent: function () {
        let _this = this;
        //选择框改变的情况下
        this.$modalWrap.find('#receiver-province').change(function () {
            var selectProvince = $(this).val();
            _this.loadCities(selectProvince);
        });

        //提交收货地址
        this.$modalWrap.find('.address-btn').click(function () {
            let receicerInfo = _this.getReceiverInfo(),
                isUpdate = _this.option.isUpdate;
            if (!isUpdate && receicerInfo.status) {
                _address.save(receicerInfo.data, function (res) {
                    _mm.successTips('地址添加成功');
                    _this.hide();
                    typeof  _this.option.onSuccess === 'function' && _this.option.onSuccess(res);
                }, function (errMsg) {
                    _mm.errorTips(errMsg);
                })
            } else if (isUpdate && receicerInfo.status) {
                //更新收获地址，并且验证通过
                _address.update(receicerInfo.data, function (res) {
                    _mm.successTips('修改地址成功');
                    _this.hide();
                    typeof  _this.option.onSuccess === 'function'
                    && _this.option.onSuccess(res);
                }, function (errMsg) {
                    _mm.errorTips(errMsg);
                });
            } else {
                //验证不通过
                _mm.errorTips(receicerInfo.errMsg || '好像哪里不对了~~>_<~~');
            }
        });
        //拦截事件
        this.$modalWrap.find('.modal-container').click(function (e) {
            e.stopPropagation();
        });
        //点击蒙版和X都关闭弹窗
        this.$modalWrap.find('.close').click(function () {
            _this.hide();
        });
    },
    //加载省份信息
    loadProvince: function () {
        let provinces = _cities.getProvinces() || [],
            $provinceSelect = this.$modalWrap.find('#receiver-province');
        //根据省份形成select html数据
        let html = this.getSelectOption(provinces);
        $provinceSelect.html(html);
        if (this.option.isUpdate && this.option.data.receiverProvince) {
            $provinceSelect.val(this.option.data.receiverProvince);
            this.loadCities(this.option.data.receiverProvince);
        }
    },
    //加载城市信息
    loadCities: function (provinceName) {
        let cities = _cities.getCities(provinceName) || [],
            $citySelect = this.$modalWrap.find('#receiver-city');
        $citySelect.html(this.getSelectOption(cities));
        if (this.option.isUpdate && this.option.data.receiverCity) {
            $citySelect.val(this.option.data.receiverCity)
        }
    },
    getSelectOption: function (optionArray) {
        let html = '<option value="">请选择</option>';
        for (let i = 0, length = optionArray.length; i < length; i++) {
            html += '<option value="' + optionArray[i] + '">' + optionArray[i] + '</option>';
        }
        return html;
    },
    //获取表单信息，并作表单验证
    getReceiverInfo: function () {
        let receicerInfo = {},
            result = {
                status: false
            };
        receicerInfo.receiverName = $.trim(this.$modalWrap.find('#receiver-name').val());
        receicerInfo.receiverProvince = this.$modalWrap.find('#receiver-province').val();
        receicerInfo.receiverCity = this.$modalWrap.find('#receiver-city').val();
        receicerInfo.receiverAddress = $.trim(this.$modalWrap.find('#receiver-address').val());
        receicerInfo.receiverPhone = $.trim(this.$modalWrap.find('#receiver-phone').val());
        receicerInfo.receiverZip = $.trim(this.$modalWrap.find('#receiver-zip').val());

        if (this.option.isUpdate) {
            receicerInfo.id = this.$modalWrap.find('#receiver-id').val();
        }
        // 表单验证
        if (!receicerInfo.receiverName) {
            result.errMsg = '请输入收件人姓名';
        }
        else if (!receicerInfo.receiverProvince) {
            result.errMsg = '请选择收件人所在省份';
        }
        else if (!receicerInfo.receiverCity) {
            result.errMsg = '请选择收件人所在城市';
        }
        else if (!receicerInfo.receiverAddress) {
            result.errMsg = '请输入收件人详细地址';
        }
        else if (!receicerInfo.receiverPhone) {
            result.errMsg = '请输入收件人手机号';
        }
        // 所有验证都通过了
        else {
            result.status = true;
            result.data = receicerInfo;
        }
        return result;

    }
};

module.exports = addressModal;