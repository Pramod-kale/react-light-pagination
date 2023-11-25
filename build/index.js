"use strict";var n=require("react");function t(n,t){void 0===t&&(t={});var e=t.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}t("");var e=function(){return e=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},e.apply(this,arguments)};function o(n,t,e){if(e||2===arguments.length)for(var o,i=0,a=t.length;i<a;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return n.concat(o||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;t("#ReactLightPagination.pagination-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1.2rem; }\n  #ReactLightPagination.pagination-container .block {\n    min-height: 3.2rem;\n    min-width: 3.2rem;\n    margin: 0.4rem;\n    padding: 0.4rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    outline: none;\n    border: none; }\n  #ReactLightPagination.pagination-container .page-numbers-container {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  #ReactLightPagination.pagination-container .block {\n    border-radius: 8px; }\n    #ReactLightPagination.pagination-container .block:focus {\n      outline: 2px solid #f6aa97; }\n  #ReactLightPagination.pagination-container .previous-btn,\n  #ReactLightPagination.pagination-container .next-btn {\n    background-color: #e76f51;\n    color: #ffffff; }\n  #ReactLightPagination.pagination-container .active {\n    border: 2px solid #f19584;\n    color: #e76f51; }\n");exports.Pagination=function(t){var i=t.perPage,a=t.currentPage,r=t.nextClickHandler,c=t.previousClickHandler,l=t.pageClickHandler,u=t.totalNumberOfData,s=void 0===u?0:u,p=t.classNames,d=t.components,g=t.inlineStyles,f=n.useState(a||1),v=f[0],m=f[1],b=Math.ceil(s/i),h=function(n,t){Number.isNaN(t)||("back"===n?v>1&&(m((function(n){return n-t})),null==c||c(v)):"forward"===n?v<b&&(m((function(n){return n+t})),null==r||r(v)):"page"===n&&(m((function(n){return t})),null==l||l(v)))},y=n.useMemo((function(){return function(n,t){for(var e=[],i=1;i<=t;i++)e.push(i);var a=Math.max(n-2,1),r=Math.min(n+1,t),c=a>2,l=r<t-2;return!c&&l?o(o([],e.slice(0,7),!0),["...",t],!1):c&&!l?o([1,"..."],e.slice(t-7),!0):c&&l?o(o([1,"..."],e.slice(a-1,r+1),!0),["...",t],!1):e}(v,b)}),[v,b]);return n.useEffect((function(){a&&a!==v&&a<=b&&a>=1&&m(a)}),[a]),n.createElement("div",{id:"ReactLightPagination",className:"pagination-container ".concat(null==p?void 0:p.container,"'"),style:null==g?void 0:g.container},n.createElement("button",{className:"previous-btn block ".concat(null==p?void 0:p.previousButton," ").concat(null==p?void 0:p.buttons),onClick:function(){return h("back",1)},style:e(e({},null==g?void 0:g.previousButton),null==g?void 0:g.buttons)},(null==d?void 0:d.previousButton)||"Previous"),n.createElement("div",{className:"page-numbers-container ".concat(null==p?void 0:p.pageContainer),style:null==g?void 0:g.pageContainer},null==y?void 0:y.map((function(t,o){return n.createElement("button",{onClick:function(){return h("page",Number(t))},key:"".concat(t).concat(o),className:"block page-number ".concat(t===v&&"active ".concat(null==p?void 0:p.pageActiveButton),"  ").concat(null==p?void 0:p.buttons," ").concat(null==p?void 0:p.pageButton," "),style:e(e(e({},null==g?void 0:g.pageButton),null==g?void 0:g.buttons),t===v?null==g?void 0:g.pageActiveButton:{})},(null==d?void 0:d.pageButton)||t)}))),n.createElement("button",{className:"block next-btn ".concat(null==p?void 0:p.nextButton," ").concat(null==p?void 0:p.buttons," "),onClick:function(){return h("forward",1)},style:e(e({},null==g?void 0:g.nextButton),null==g?void 0:g.buttons)},(null==d?void 0:d.nextButton)||"Next"))},exports.TestComponent=function(t){return n.createElement("div",null,"TestComponent",t.theme)};
//# sourceMappingURL=index.js.map
