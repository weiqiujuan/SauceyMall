/**
 * Created by weiqiujuan on 17-11-23.
 */

'use strict';
require('./index.css');
require('../common/nav/index.js');
require('../common/header/index.js');
require('../common/nav-side/index.js');

let _mm=require("util/mall.js");
let navSide=require('page/common/nav-side/index.js');
navSide.init({
    name:'pass-update'
});