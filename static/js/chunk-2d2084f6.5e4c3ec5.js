(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2084f6"],{a3f4:function(e,t,r){"use strict";r.r(t);var a=r("be94"),n=r("2f62");const s="ge/index.html?lang=zh-CN";var o={name:"demo-graph-editor",data:()=>({key:""}),methods:Object(a.a)({},Object(n.e)("session",["enterIframe","leaveIframe","closeIframe"])),beforeRouteEnter(e,t,r){const a=e.fullPath;r(e=>{e.key=a,e.enterIframe({key:a,src:s})})},beforeRouteUpdate(e,t,r){const a=e.fullPath;this.enterIframe({key:a,src:s}),r()},beforeRouteLeave(e,t,r){this.leaveIframe(),r()},beforeDestroy(){this.closeIframe(this.key)}},f=r("2877"),l=Object(f.a)(o,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,null);t.default=l.exports}}]);