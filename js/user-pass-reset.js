!function(e){function t(t){for(var o,i,u=t[0],a=t[1],f=t[2],l=0,d=[];l<u.length;l++)i=u[l],r[i]&&d.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(c&&c(t);d.length;)d.shift()();return s.push.apply(s,f||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={6:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var c=a;s.push([18,0]),n()}({18:function(e,t,n){n(66),n(5);let o=n(4),r=(n(0),function(e){$(".error-item").show().find(".err-msg").text(e)}),s=function(){$(".error-item").hide().find(".err-msg").text("")},i={data:{username:"",question:"",answer:"",token:""},init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){this.loadStepUsername()},bindEvent:function(){let e=this;$("#submit-username").click(function(){let t=$.trim($("#username").val());e.submitUsername(t,e)}),$("#username").keyup(function(t){if(13===t.keyCode){let t=$.trim($("#username").val());e.submitUsername(t,e)}}),$("#submit-question").click(function(){let t=$.trim($("#answer").val());e.submitAnswer(t,e)}),$("#answer").keyup(function(t){if(13===t.keyCode){let t=$.trim($("#answer").val());e.submitAnswer(t,e)}}),$("#submit-password").click(function(){let t=$.trim($("#password").val());e.submitPassword(t,e)}),$("#password").keyup(function(t){if(13===t.keyCode){let t=$.trim($("#password").val());e.submitPassword(t,e)}})},loadStepUsername:function(){$(".step-username").show()},loadStepQuestion:function(){s(),$(".step-username").hide().siblings(".step-question").show().find(".question").text(this.data.question)},loadStepPassword:function(){s(),$(".step-question").hide().siblings(".step-password").show()},submitUsername:function(e,t){e?o.getQuestion(e,function(n){t.data.username=e,t.data.question=n,t.loadStepQuestion()},function(e){r(e)}):r("请输入用户名")},submitAnswer:function(e,t){e?o.checkAnswer({username:t.data.username,question:t.data.question,answer:e},function(n){t.data.answer=e,t.data.token=n,t.loadStepPassword()},function(e){r(e)}):r("请输入答案")},submitPassword:function(e,t){e&&e.length>=6?o.resetPassword({username:t.data.username,passwordNew:e,forgetToken:t.data.token},function(e){window.location.href="./result.html?type=pass-reset"},function(e){r(e)}):r("请输入不少于６位的新密码")}};$(function(){i.init()})},66:function(e,t){}});