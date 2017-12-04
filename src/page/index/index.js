/**
 * Created by weiqiujuan on 17-11-23.
 */

'use strict';
require('./index.css');
require("page/common/header/index.css");
require("page/common/nav/index.css");
require("page/common/nav-side/index.css");
let _mm=require("util/mall.js");
let navSide=require('page/common/nav-side/index.js');
navSide.init({
    name:'pass-update'
});