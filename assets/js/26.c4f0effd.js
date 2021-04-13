(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{203:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"第六周"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第六周"}},[t._v("#")]),t._v(" 第六周")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("怎么解决在云函数上实现自动实时编译")])]),t._v(" "),n("li",[n("p",[t._v("在入口函数写脚本即可执行generate那个脚本")]),t._v(" "),n("ul",[n("li",[t._v("当运行 "),n("code",[t._v("nuxt generate")]),t._v(" 命令或在编码中调用 "),n("code",[t._v("nuxt.generate()")]),t._v(" 时，Nuxt.js 会使用 "),n("code",[t._v("generate")]),t._v(" 属性的配置。")]),t._v(" "),n("li",[t._v("用serverless创建的框架和本地手脚架创建的一样")]),t._v(" "),n("li",[t._v("配置里面是把npm run build打包编译的.nuxt文件夹传上云？")]),t._v(" "),n("li",[t._v("无法生成新的文件，整个项目已经被打包编译成了一个文件")])])]),t._v(" "),n("li",[n("p",[t._v("怎么将打包的dist文件夹传到cos")]),t._v(" "),n("ul",[n("li",[t._v("用js写上传文件的函数")]),t._v(" "),n("li",[t._v("云函数由向 "),n("a",{attrs:{href:"https://cloud.tencent.com/product/cos",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云对象存储 COS"),n("OutboundLink")],1),t._v(" 上传对象文件操作、向 "),n("a",{attrs:{href:"https://cloud.tencent.com/product/mq",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云消息队列 CMQ"),n("OutboundLink")],1),t._v(" 中投递消息等事件触发")])])])]),t._v(" "),n("h3",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("云函数出现传不上去的情况")])]),t._v(" "),n("li",[n("p",[t._v("直接通过serverless的component上传是直接压缩打包的，找不到入口文件在哪")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("nuxt.build is not a function")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("研究了一下nuxt的源码")])]),t._v(" "),n("li",[n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Nuxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Builder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Generator "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuxt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import and Set Nuxt.js options")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./nuxt.config.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dev "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Init Nuxt.js")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nuxt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nuxt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" nuxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Build only in dev mode")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builder "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Builder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nuxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" generator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Generator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nuxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" builder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" generator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);