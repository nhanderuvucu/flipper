(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(12),o=(n(0),n(222)),a=n(224),u={id:"index",title:"Features"},c={id:"features/index",title:"Features",description:"Flipper itself only provides the architectural platform. What makes it useful are the plugins built on top of it: [Logs](logs-plugin), [Layout Inspector](layout-plugin) and [Network Inspector](network-plugin) are all plugins. Plugins can be built very specific to your business logic and the use-cases you have in your app. We are shipping Flipper with a couple of built-in all-purpose plugins, but we encourage you to build your own. Each plugin needs to be enabled individually.",source:"@site/../docs/features/index.mdx",permalink:"/docs/features/index",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/index.mdx",sidebar:"features",next:{title:"Logs",permalink:"/docs/features/logs-plugin"}},l=[{value:"Build your own plugin",id:"build-your-own-plugin",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Flipper itself only provides the architectural platform. What makes it useful are the plugins built on top of it: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"logs-plugin"}),"Logs"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"layout-plugin"}),"Layout Inspector")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"network-plugin"}),"Network Inspector")," are all plugins. Plugins can be built very specific to your business logic and the use-cases you have in your app. We are shipping Flipper with a couple of built-in all-purpose plugins, but we encourage you to build your own. Each plugin needs to be enabled individually."),Object(o.b)("img",{alt:"Plugins",src:Object(a.a)("img/plugins.png")}),Object(o.b)("h2",{id:"build-your-own-plugin"},"Build your own plugin"),Object(o.b)("p",null,"The Flipper desktop app and the mobile native SDK establish a connection which is used to send data to and from the device. Flipper does not make any restrictions on what kind of data is being sent. This enables a lot of different use-cases where you want to better understand what is going inside your app. For example you can visualize the state of local caches, events happening or trigger actions on your app from the desktop."),Object(o.b)("p",null,"If there is no plugin that does exactly what you want, you can build your own plugin, tailored to your needs. A plugin always consists of the native implementation sending and receiving data and the desktop plugin visualizing data. Learn more on how to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../extending/index"}),"extend Flipper")," and build your own plugin. The native implementations are written in Java, Objective-C, or C++, the desktop UI is written in React."))}p.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return n?i.a.createElement(b,u({ref:t},l,{components:n})):i.a.createElement(b,u({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},223:function(e,t,n){"use strict";var r=n(0),i=n(60);t.a=function(){return Object(r.useContext)(i.a)}},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(225);var r=n(223);function i(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},225:function(e,t,n){"use strict";var r=n(5),i=n(10),o=n(226),a="".startsWith;r(r.P+r.F*n(227)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},226:function(e,t,n){var r=n(88),i=n(24);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},227:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);