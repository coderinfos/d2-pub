(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{296:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"异步请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步请求"}},[t._v("#")]),t._v(" 异步请求")]),t._v(" "),a("p",[t._v("D2Admin 使用 "),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),a("OutboundLink")],1),t._v(" 作为异步请求工具，并做了一些封装。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("axios")]),t._v(" "),a("th",[t._v("地址")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Github")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/axios/axios"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("npm")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://www.npmjs.com/package/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/axios"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("中文文档")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://www.kancloud.cn/yunye/axios/234845",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.kancloud.cn/yunye/axios/234845"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。")]),t._v(" "),a("ul",[a("li",[t._v("支持浏览器和node.js")]),t._v(" "),a("li",[t._v("支持promise")]),t._v(" "),a("li",[t._v("能拦截请求和响应")]),t._v(" "),a("li",[t._v("能转换请求和响应数据")]),t._v(" "),a("li",[t._v("能取消请求")]),t._v(" "),a("li",[t._v("自动转换JSON数据")]),t._v(" "),a("li",[t._v("浏览器端支持防止CSRF(跨站请求伪造)")])]),t._v(" "),a("h2",{attrs:{id:"浏览器支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持"}},[t._v("#")]),t._v(" 浏览器支持")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome"}})]),t._v(" "),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox"}})]),t._v(" "),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari"}})]),t._v(" "),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera"}})]),t._v(" "),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"Edge"}})]),t._v(" "),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png",alt:"IE"}})])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Latest ✔")]),t._v(" "),a("td",[t._v("Latest ✔")]),t._v(" "),a("td",[t._v("Latest ✔")]),t._v(" "),a("td",[t._v("Latest ✔")]),t._v(" "),a("td",[t._v("Latest ✔")]),t._v(" "),a("td",[t._v("11 ✔")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://saucelabs.com/u/axios",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://saucelabs.com/open_sauce/build_matrix/axios.svg",alt:"Browser Matrix"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),a("p",[t._v("axios 默认的使用方式在这里不做介绍，D2Admin 推荐在您的项目中使用下面的方式获取数据：")]),t._v(" "),a("h3",{attrs:{id:"设置接口地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置接口地址"}},[t._v("#")]),t._v(" 设置接口地址")]),t._v(" "),a("p",[t._v("默认的请求地址在 "),a("code",[t._v("d2-admin/.env")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("VUE_APP_API=/api/\n")])])]),a("p",[t._v("上述设置将在您访问 "),a("code",[t._v("/demo/a")]),t._v(" 时实际去访问 "),a("code",[t._v("/api/demo/a")])]),t._v(" "),a("h3",{attrs:{id:"区分不同环境设置接口地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区分不同环境设置接口地址"}},[t._v("#")]),t._v(" 区分不同环境设置接口地址")]),t._v(" "),a("p",[t._v("如果您希望不同的环境使用不同的请求地址，可以在 "),a("code",[t._v("d2-admin/.env.development")]),t._v(" 中添加设置（示例）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("VUE_APP_API=/api-dev/\n")])])]),a("p",[t._v("这样您在开发环境和正式环境就有了不同的公共请求地址，在开发环境访问 "),a("code",[t._v("/demo/a")]),t._v(" 时实际去访问 "),a("code",[t._v("/api-dev/demo/a")])]),t._v(" "),a("h3",{attrs:{id:"通用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用配置"}},[t._v("#")]),t._v(" 通用配置")]),t._v(" "),a("p",[t._v("您在开始使用 D2Admin 开发您的项目之前，应该首先修改 "),a("code",[t._v("d2-admin/src/plugin/axios/index.js")]),t._v(" 下的设置。")]),t._v(" "),a("p",[t._v("默认的设置需要遵循下面的数据返回格式约定：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 和后台约定的状态码")]),t._v("\n  code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后台返回请求状态信息")]),t._v("\n  msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'返回信息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data 内才是真正的返回数据")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在响应拦截器中处理完数据后将会返回：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"业务错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务错误"}},[t._v("#")]),t._v(" 业务错误")]),t._v(" "),a("p",[t._v("当发生错误时返回的数据示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 和后台约定的状态码")]),t._v("\n  code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unlogin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后台返回请求状态信息")]),t._v("\n  msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户没有登录'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果针对某个错误指定处理方法，应该在响应拦截器中加入对应的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功返回数据，在这里判断和后台约定的状态标识")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"http-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-错误"}},[t._v("#")]),t._v(" http 错误")]),t._v(" "),a("p",[t._v("如果需要针对某个 http 错误指定处理方法，应该在响应拦截器中第二个参数中添加对应的代码。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发生 http 错误，在这里判断状态码")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"不返回-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不返回-code"}},[t._v("#")]),t._v(" 不返回 code")]),t._v(" "),a("p",[t._v("在默认的设置中，如果您的接口没有返回 code 字段，将不会进行状态（非 http 状态，而是和后台约定好的状态类型）判断，直接返回 axios 请求返回的数据。")]),t._v(" "),a("p",[t._v("例如接口返回如下数据：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在响应拦截器中判断该接口没有返回 code 字段，将会直接将返回：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"设计-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计-api"}},[t._v("#")]),t._v(" 设计 API")]),t._v(" "),a("p",[t._v("假设您有一个返回数据的 API 接口，想访问它，您首先应该在 "),a("code",[t._v("d2-admin/src/api")]),t._v(" 文件夹内创建合适的文件目录，例如："),a("code",[t._v("d2-admin/src/api/demo/business/table/1/index.js")]),t._v("，这个文件中应该导出一个或者多个请求：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/plugin/axios'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BusinessTable1List")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/demo/business/table/1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用-api-获取数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-api-获取数据"}},[t._v("#")]),t._v(" 使用 API 获取数据")]),t._v(" "),a("p",[t._v("在上面的步骤中创建了 API 文件，您应该在页面中这样使用：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BusinessTable1List "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/api/demo/business/table/1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleSubmit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BusinessTable1List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数据")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异常情况")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("而不是在页面中直接调用 axios。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("虽然没有强制规定，请注意您的 API 文件夹结构规律性")])]),t._v(" "),a("h2",{attrs:{id:"模拟数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟数据"}},[t._v("#")]),t._v(" 模拟数据")]),t._v(" "),a("p",[t._v("详见 "),a("router-link",{attrs:{to:"/zh/sys-plugins/mock.html"}},[t._v("插件 | 模拟数据")])],1),t._v(" "),a("h2",{attrs:{id:"跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题"}},[t._v("#")]),t._v(" 跨域问题")]),t._v(" "),a("p",[t._v("如果您的前端项目和后端接口发生跨域，可以在本地配置代理：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("devServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://47.100.186.132/your-path/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      changeOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      pathRewrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上述配置的结果是在请求 "),a("code",[t._v("/api/login")]),t._v(" 时转发到 "),a("code",[t._v("http://47.100.186.132/your-path/api/login")]),t._v("。更多文档见 "),a("a",{attrs:{href:"https://cli.vuejs.org/zh/config/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI 3 | devServer.proxy"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);