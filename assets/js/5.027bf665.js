(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(t,e,a){"use strict";var s={name:"Credits"},n=(a(109),a(4)),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"credits"},[t._m(0),t._m(1),a("br"),a("router-link",{attrs:{to:"/"}},[t._v("Images.weserv.nl")]),t._v(" was "),a("i",{staticClass:"fa fa-code"}),t._v(" with "),a("i",{staticClass:"fa fa-heart-o pulse"}),t._v(" by "),a("a",{attrs:{href:"https://github.com/weserv/images/graphs/contributors",target:"_blank",rel:"noopener noreferrer"}},[t._v("our contributors")]),t._v(".\n")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("Design inspired by "),e("a",{attrs:{href:"https://getgrav.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Grav")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"https://github.com/weserv/images/blob/5.x/Privacy-Policy.md",target:"_blank",rel:"noopener noreferrer"}},[this._v("Privacy Policy")]),e("a",{attrs:{href:"https://github.com/weserv/images/blob/5.x/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[this._v("Changelog")])])}],!1,null,null,null);e.a=r.exports},103:function(t,e,a){"use strict";var s={computed:{$pagination:function(){return this.$getPagination("news")}},filters:{formatDate:function(t){return t?new Date(t).toDateString():""}}},n=(a(108),a(4)),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news"},[t._m(0),a("ul",t._l(t.$pagination.pages,(function(e,s){return a("li",{key:s,staticClass:"item"},[a("span",{staticClass:"item-date"},[t._v(t._s(t._f("formatDate")(e.frontmatter.date)))]),a("h3",{staticClass:"item-title"},[a("router-link",{attrs:{title:e.title,to:e.path}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1),e.frontmatter.summary?a("p",{staticClass:"item-summary"},[t._v("\n        "+t._s(e.frontmatter.summary)+"\n      ")]):t._e()])})),0),t.$pagination.hasPrev||t.$pagination.hasNext?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.$pagination.hasPrev?a("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.$pagination.hasPrev?a("router-link",{staticClass:"prev",attrs:{to:t.$pagination.prevLink}},[t._v("\n          Prev\n        ")]):t._e()],1):t._e(),t.$pagination.hasNext?a("span",{staticClass:"next"},[t.$pagination.hasNext?a("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n          Next\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"news"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#news","aria-hidden":"true"}},[this._v("#")]),this._v(" News")])}],!1,null,null,null);e.a=r.exports},108:function(t,e,a){"use strict";var s=a(95);a.n(s).a},109:function(t,e,a){"use strict";var s=a(96);a.n(s).a},110:function(t,e,a){"use strict";var s=a(97);a.n(s).a},123:function(t,e,a){"use strict";var s=a(98);a.n(s).a},135:function(t,e,a){"use strict";var s={extends:a(166).a},n=(a(123),a(4)),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userLinks.length||t.repoLink?a("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return a("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?a("DropdownLink",{attrs:{item:t}}):a("NavLink",{attrs:{item:t}})],1)})),t.repoLink?a("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),a("OutboundLink")],1):t._e(),t.repoLink?a("a",{staticClass:"github-corner",attrs:{href:t.repoLink,title:t.repoLabel,"aria-label":t.repoLabel,target:"_blank",rel:"noopener noreferrer"}},[a("svg",{staticStyle:{position:"fixed",top:"0",border:"0",right:"0"},attrs:{width:"57",height:"57",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",fill:"#a72376"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"#fff"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"#fff"}})])]):t._e()],2):t._e()}),[],!1,null,null,null);e.a=r.exports},170:function(t,e,a){"use strict";var s=a(171),n=a(103),r=a(101),i={extends:s.a,components:{NewsList:n.a,Credits:r.a}},o=(a(110),a(4)),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText))]):t._e(),null!==t.data.tagline?a("h2",{staticClass:"description"},[t._v(t._s(t.data.tagline))]):t._e(),null!==t.data.description?a("h2",{staticClass:"description"},[t._v(t._s(t.data.description))]):t._e(),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),a("Content",{staticClass:"theme-default-content custom"}),a("NewsList"),a("div",{staticClass:"footer"},[a("Credits")],1)],1)}),[],!1,null,null,null);e.a=l.exports},249:function(t,e,a){"use strict";a.r(e);var s=a(165),n=a(103),r=a(101),i={extends:s.a,components:{NewsList:n.a,Credits:r.a}},o=a(4),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._t("sidebar-bottom",null,{slot:"bottom"})],2),a("NewsList",{staticClass:"theme-default-content"}),a("Credits")],1)}),[],!1,null,null,null);e.default=l.exports},95:function(t,e,a){},96:function(t,e,a){},97:function(t,e,a){},98:function(t,e,a){}}]);