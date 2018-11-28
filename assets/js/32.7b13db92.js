(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{189:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("In the code of stylIn the style development process, there are two issues are more prominent:")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("Fortunately vue provides us with "),e("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoped"),e("OutboundLink")],1),t._v(" can easily solve the above problem. As the name suggests, it adds a scoped concept to css.")]),t._v(" "),t._m(3),e("p",[t._v("If you add "),e("code",[t._v("<style scoped>")]),t._v(" the css will only effect in the current component。For detailed documentation, see "),e("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-loader"),e("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),e("br"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("p",[t._v('If you want a selector in scoped styles to be "deep", i.e. affecting child components, you can use the >>> combinator:')]),t._v(" "),t._m(16),e("p",[t._v("Will be compiled into")]),t._v(" "),t._m(17),e("p",[t._v("Some pre-processors, such as SASS, may not be able to parse >>> properly. In those cases you can use the /deep/ combinator instead - it's an alias for >>> and works exactly the same.")]),t._v(" "),t._m(18),e("p",[e("a",{attrs:{href:"https://vue-loader.vuejs.org/en/features/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official document"),e("OutboundLink")],1)]),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("Let's talk about the configuration of postcss. After the new version of the "),e("a",{attrs:{href:"https://github.com/vuejs-templates/webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli webpack template"),e("OutboundLink")],1),t._v(" initialization, there is a default "),e("code",[t._v(".postcssrc.js")]),t._v(" in the root directory. By default, "),e("code",[t._v("vue-loader")]),t._v(" will read the configuration of postcss from it, so here directly to change the configuration file on it. The configuration is the same as "),e("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(20),e("p",[t._v("As described in the previous code, autoprefixer reads the configuration parameters of browserslist under package.json.")]),t._v(" "),t._m(21),t._v(" "),e("p",[t._v("More detail "),e("a",{attrs:{href:"https://github.com/ai/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserslist"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("postcss")]),t._v(" has many other features "),e("a",{attrs:{href:"https://www.postcss.parts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("to explore by yourself"),e("OutboundLink")],1)]),t._v(" "),t._m(22),t._v(" "),e("p",[t._v("This project does not set to automatically inject sass mixin to the global, so you need to manually introduce the mixin.")]),t._v(" "),t._m(23),e("p",[t._v("If you need to automatically inject mixin global, you can use\n"),e("a",{attrs:{href:"https://github.com/shakacode/sass-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-resources-loader"),e("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#style","aria-hidden":"true"}},[this._v("#")]),this._v(" Style")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"css-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS Modules")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("Global pollution —— The selector in the CSS file is global. The same name selector in different files, according to the order in the build generation file, the styles generated later will overwrite the previous ones.")])]),this._v(" "),s("li",[s("p",[this._v("Selector complex —— In order to avoid the above problems, we have to be careful when writing styles, the name of the class will be marked with a range of restrictions, multi-person development is also very easy to lead to the chaos of the naming style. The classnames getting longer and longer. Eventually, it's hard to maintain.")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("/* Compile before */")]),t._v("\n"),e("span",{attrs:{class:"token selector"}},[t._v(".example")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v("color")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("/* Compile after */")]),t._v("\n"),e("span",{attrs:{class:"token selector"}},[t._v(".example[_v-f3f3eg9]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v("color")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("With scoped, the parent component's styles will not leak into child components. However, a child component's root node will be affected by both the parent's scoped CSS and the child's scoped CSS. This is by design so that the parent can style the child root element for layout purposes.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"project-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Project Structure")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("vue-element-admin All global styles are set in the "),s("code",[this._v("@/src/styles")]),this._v(" directory.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("├── styles\n│   ├── btn.scss                 "),e("span",{attrs:{class:"token comment"}},[t._v("# button css")]),t._v("\n│   ├── element-ui.scss          "),e("span",{attrs:{class:"token comment"}},[t._v("# global custom element-ui style")]),t._v("\n│   ├── index.scss               "),e("span",{attrs:{class:"token comment"}},[t._v("# global common style")]),t._v("\n│   ├── mixin.scss               "),e("span",{attrs:{class:"token comment"}},[t._v("# global sass mixin")]),t._v("\n│   ├── sidebar.scss             "),e("span",{attrs:{class:"token comment"}},[t._v("# sidebar css")]),t._v("\n│   ├── transition.scss          "),e("span",{attrs:{class:"token comment"}},[t._v("# vue transition animation")]),t._v("\n│   └── variables.scss           "),e("span",{attrs:{class:"token comment"}},[t._v("# global variables")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The common workflow is that the global styles are written in the "),s("code",[this._v("src/styles")]),this._v(" directory and each page's own style is written in its own "),s("code",[this._v(".vue")]),this._v(" file.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[this._v("<style>\n"),s("span",{attrs:{class:"token comment"}},[this._v("/* global styles */")]),this._v("\n</style>\n\n<style scoped>\n"),s("span",{attrs:{class:"token comment"}},[this._v("/* local styles */")]),this._v("\n</style>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"custom-element-ui-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-element-ui-style","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom element-ui style")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now let's talk about how to override the element-ui style. Because element-ui style we are import in the global, so you can't add "),s("code",[this._v("scoped")]),this._v(" to a page if you want to overwrite it, but you want to override only the element style of this page, you can add a class in its parent, using the namespace to solve this problem.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{attrs:{class:"token selector"}},[t._v(".article-page")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("/* you namespace*/")]),t._v("\n  "),e("span",{attrs:{class:"token selector"}},[t._v(".el-tag")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("/* element-ui element tag*/")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v("margin-right")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Of course, you can also use the deep selectors as described below.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"deep-selectors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deep-selectors","aria-hidden":"true"}},[this._v("#")]),this._v(" Deep Selectors")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Parent component changes child component style.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{attrs:{class:"token selector"}},[t._v("<style scoped>\n.a >>> .b")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n</style>\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{attrs:{class:"token selector"}},[t._v(".a[data-v-f3f3eg9] .b")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[this._v(".xxx-container >>> .el-button")]),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n  xxxx\n"),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"postcss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postcss","aria-hidden":"true"}},[this._v("#")]),this._v(" Postcss")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("//.postcssrc.js")]),t._v("\nmodule"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v('// to edit target browsers: use "browserslist" field in package.json')]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"autoprefixer"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("//package.json")]),t._v("\n"),e("span",{attrs:{class:"token string"}},[t._v('"browserslist"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"> 1%"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"last 2 versions"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v('"not ie <= 8"')]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("> 1%")]),t._v(" Compatible with browser with global usage above 1%")]),t._v(" "),e("li",[e("code",[t._v("last 2 versions")]),t._v(" Compatible with the last two versions of each browser")]),t._v(" "),e("li",[e("code",[t._v("not ie <= 8")]),t._v(" Not compatible ie8 and below")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixin","aria-hidden":"true"}},[this._v("#")]),this._v(" Mixin")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-scss extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scss"}},[e("code",[t._v("<style rel="),e("span",{attrs:{class:"token string"}},[t._v('"stylesheet/scss"')]),t._v(" lang="),e("span",{attrs:{class:"token string"}},[t._v('"scss"')]),t._v(">\n  "),e("span",{attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"src/styles/mixin.scss"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n</style>\n")])])])}],!1,null,null,null);n.options.__file="style.md";s.default=n.exports}}]);