/*! Built with http://stenciljs.com */
App.loadComponents(function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.render=function(){return t("div",null,t("p",null,"Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",t("a",{href:"https://stenciljs.com"},"stenciljs.com")," to get started."),t("stencil-route-link",{url:"/profile/stencil"},t("button",null,"Profile page")),t("my-button",{title:"Button"}))},Object.defineProperty(e,"is",{get:function(){return"app-home"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"app-home div{padding:10px}app-home button{background:#5851ff;color:#fff;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}app-home button:hover{box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}"},enumerable:!0,configurable:!0}),e}(),o=function(){function e(){}return e.prototype.render=function(){return t("div",null,t("header",null,t("h1",null,"Stencil App Starter")),t("main",null,t("stencil-router",null,t("stencil-route",{url:"/",component:"app-home",exact:!0}),t("stencil-route",{url:"/profile/:name",component:"app-profile"}))))},Object.defineProperty(e,"is",{get:function(){return"my-app"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"my-app header{background:#5851ff;color:#fff;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}my-app h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}"},enumerable:!0,configurable:!0}),e}();e.AppHome=r,e.MyApp=o},"7laavvvn");