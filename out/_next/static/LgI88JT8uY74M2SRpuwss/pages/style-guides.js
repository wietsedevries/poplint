(window.webpackJsonp=window.webpackJsonp||[]).push([["2e75"],{"5X9K":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/style-guides",function(){var e=n("dmJe");return{page:e.default||e}}])},dmJe:function(e,t,n){"use strict";n.r(t);var a=n("eVuF"),o=n.n(a),r=n("doui"),l=n("q1tI"),c=n.n(l),i=n("rHpe"),d=n("e+cM"),u=n("iEVl"),s=n("0QF8");t.default=function(){var e=Object(i.b)().rules,t=Object(l.useState)(),n=Object(r.default)(t,2),a=n[0],f=n[1],g=Object(l.useState)(),m=Object(r.default)(g,2),p=m[0],b=m[1],E=function(e){return function(){f(e),b(!0)}},w=function(){return["",arguments.length>0&&void 0!==arguments[0]&&arguments[0]?c.a.createElement(c.a.Fragment,null,c.a.createElement(u.b,{type:"eslint",active:!0,noMargin:!0})):null,c.a.createElement(c.a.Fragment,null,c.a.createElement(u.b,{type:"google",active:!0,noMargin:!0})),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.b,{type:"airBnb",active:!0,noMargin:!0})),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.b,{type:"standardJs",active:!0,noMargin:!0}))].filter(function(e){return null!==e})},h=Object(l.useState)([]),v=Object(r.default)(h,2),y=v[0],S=v[1];Object(l.useEffect)(function(){for(var t=e.filter(function(e){return[e.airBnb,e.eslint,e.google,e.standardJs].filter(Boolean).length}).sort(function(e,t){var n=[e.google,e.eslint,e.airBnb,e.standardJs].filter(Boolean).length;return[t.google,t.eslint,t.airBnb,t.standardJs].filter(Boolean).length-n}),n=[],a=0;a<t.length;a+=1){var o=t[a];n.push([c.a.createElement(u.a,{onClick:E(o.key),link:!0},o.key),o.eslint?"✅":"❌",o.google?"✅":"❌",o.airBnb?"✅":"❌",o.standardJs?"✅":"❌"])}S(n)},[]);var j=Object(l.useState)([]),F=Object(r.default)(j,2),J=F[0],k=F[1];return Object(l.useEffect)(function(){var e=[];["eslint-config-airbnb","standard","eslint-config-google"].forEach(function(t){e.push(fetch("https://api.npms.io/v2/package/".concat(t)))}),o.a.all(e).then(function(e){return o.a.all(e.map(function(e){return e.json()}))}).then(function(e){var t=e.find(function(e){return"eslint-config-google"===e.collected.metadata.name}),n=e.find(function(e){return"eslint-config-airbnb"===e.collected.metadata.name}),a=e.find(function(e){return"standard"===e.collected.metadata.name}),o=function(e){var t,n,a=e.collected,o=e.score,r=a.metadata,l=a.npm;return{repo:r.links.homepage,downloads:l.downloads[1].count.toLocaleString("en"),downloadDelta:(t=l.downloads[2].count/4,n=l.downloads[1].count,((n-t)/t*100).toFixed()),maintenanceScore:(100*o.detail.maintenance).toFixed(),popularityScore:(100*o.detail.popularity).toFixed(),qualityScore:(100*o.detail.quality).toFixed(),totalScore:(100*o.final).toFixed(),dependentsCount:l.dependentsCount.toLocaleString("en"),starsCount:l.starsCount.toLocaleString("en")}},r={google:o(t),airBnb:o(n),standardJs:o(a)},l=function(e,t){var n=t>0?"green":"red";return c.a.createElement(c.a.Fragment,null,e,c.a.createElement("span",{style:{color:n,paddingLeft:3,fontSize:11}},t,"%"))},i=r.google,d=r.airBnb,u=r.standardJs;k([["⬇ Weekly downloads",l(i.downloads,i.downloadDelta),l(d.downloads,d.downloadDelta),l(u.downloads,u.downloadDelta)],["🔌 Dependent repos",i.dependentsCount,d.dependentsCount,u.dependentsCount],["🌟 Weekly star count",i.starsCount,d.starsCount,u.starsCount],["💯 Total npm score","".concat(i.totalScore,"%"),"".concat(d.totalScore,"%"),"".concat(u.totalScore,"%")]])})},[]),c.a.createElement(i.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{xs:12},c.a.createElement(u.n,{type:"h1",align:"center"},"Javascript style guide comparison"),c.a.createElement(u.n,{align:"center"},"\n                Find out how the most popular javascirpt style guides compare to each other.\n                "),!!J.length&&c.a.createElement(d.b,{data:{headers:w(),rows:J},src:"https://npms.io"}),c.a.createElement(d.b,{data:{headers:w(!0),rows:y}}))))),function(){if(p){var t=e.find(function(e){return e.key===a});return c.a.createElement(d.e,{title:a,content:c.a.createElement(d.a,{rule:t}),close:function(){return b(!1)},open:p})}}())}}},[["5X9K","5d41","9da1"]]]);