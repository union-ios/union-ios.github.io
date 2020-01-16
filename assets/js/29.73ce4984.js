(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{360:function(e,t,s){"use strict";s.r(t);var o=s(10),a=Object(o.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" Directory Structure")]),e._v(" "),s("p",[e._v("VuePress follows the principle of "),s("strong",[e._v('"Convention is better than configuration"')]),e._v(", the recommended document structure is as follows:")]),e._v(" "),s("pre",{staticClass:"vue-container"},[s("code",[s("p",[e._v(".\n├── docs\n│   ├── .vuepress "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   ├── "),s("code",[e._v("components")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   ├── "),s("code",[e._v("theme")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   │   └── Layout.vue\n│   │   ├── "),s("code",[e._v("public")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   ├── "),s("code",[e._v("styles")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── "),s("code",[e._v("templates")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional, Danger Zone")]),e._v(")")]),e._v("\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── "),s("code",[e._v("config.js")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   └── "),s("code",[e._v("enhanceApp.js")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Please note the capitalization of the directory name.")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("docs/.vuepress")]),e._v(": It’s used to store global configuration, components, static resources, etc.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/components")]),e._v(": The Vue components in this directory will be automatically registered as global components.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/theme")]),e._v(": Used to store local theme.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles")]),e._v(": Stores style related files.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles/index.styl")]),e._v(": Automatically applied global style files, generated at the ending of the CSS file, have a higher priority than the default style.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles/palette.styl")]),e._v(": The palette is used to override the default color constants and to set the color constants of Stylus.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/public")]),e._v(": Static resource directory.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates")]),e._v(": Store HTML template files.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates/dev.html")]),e._v(": HTML template file for development environment.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates/ssr.html")]),e._v(": Vue SSR based HTML template file in the built time.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/config.js")]),e._v(": Entry file of configuration, can also be "),s("code",[e._v("yml")]),e._v(" or "),s("code",[e._v("toml")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/enhanceApp.js")]),e._v(": App level enhancement.")])]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("When customizing "),s("code",[e._v("templates/ssr.html")]),e._v(", or "),s("code",[e._v("templates/dev.html")]),e._v(", it’s best to edit it on the basis of the "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("default template files"),s("OutboundLink")],1),e._v(", otherwise it may cause a build failure.")])]),e._v(" "),s("h2",{attrs:{id:"default-page-routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-page-routing","aria-hidden":"true"}},[e._v("#")]),e._v(" Default Page Routing")]),e._v(" "),s("p",[e._v("Here we take "),s("code",[e._v("docs")]),e._v(" directory as the "),s("code",[e._v("targetDir")]),e._v(" (See "),s("RouterLink",{attrs:{to:"/api/cli.html#usage"}},[e._v("Command-line Interface")]),e._v('), and all the "Relative Path" below are relative to '),s("code",[e._v("docs")]),e._v(" directory. Add "),s("code",[e._v("scripts")]),e._v(" in "),s("code",[e._v("package.json")]),e._v(" that located in the project root directory:")],1),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress dev docs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vuepress build docs"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("For the above directory structure, the default page routing paths are as follows:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Relative Path")]),e._v(" "),s("th",[e._v("Page Routing")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("/README.md")])]),e._v(" "),s("td",[s("code",[e._v("/")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("/guide/README.md")])]),e._v(" "),s("td",[s("code",[e._v("/guide/")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("/config.md")])]),e._v(" "),s("td",[s("code",[e._v("/config.html")])])])])]),e._v(" "),s("p",[s("strong",[e._v("Also see:")])]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/config/"}},[e._v("Config")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/theme/"}},[e._v("Theme")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/theme/default-theme-config.html"}},[e._v("Default Theme Config")])],1)])])},[],!1,null,null,null);t.default=a.exports}}]);