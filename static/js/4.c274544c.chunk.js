(this["webpackJsonpe-commerce-crw"]=this["webpackJsonpe-commerce-crw"]||[]).push([[4],{101:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(41),l=(n(90),n(40)),i=n(16),o=n(25);var u=Object(i.b)(null,(function(e){return{addItem:function(t){return e(Object(o.a)(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,r=t.price,i=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",null,c),a.a.createElement("span",null,"$",r)),a.a.createElement(l.a,{onClick:function(){return n(t)},inverted:!0},"ADD TO CART"))}));n(91);function m(e){var t=e.title,n=e.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},t),a.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return a.a.createElement(u,{key:e.id,item:e})}))))}var s=n(18),f=Object(s.a)([function(e){return e.shopReducer}],(function(e){return e.collections})),v=Object(s.a)([f],(function(e){return Object.values(e)}));var d=Object(i.b)((function(e){return{collections:v(e)}}))((function(e){var t=e.collections;return a.a.createElement("div",null,t.map((function(e){var t=e.id,n=Object(r.a)(e,["id"]);return a.a.createElement(m,Object.assign({key:t},n))})))})),b=n(21);n(92);var p=Object(i.b)((function(e,t){return{selectCollection:(n=t.match.params.collectionid,Object(s.a)([f],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.selectCollection,n=t.title,c=t.items;return a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},n),a.a.createElement("div",{className:"items"},c.map((function(e){return a.a.createElement(u,{key:e.id,item:e})}))))})),E=n(33),h=n(47);t.default=Object(i.b)((function(e){return{getShopCollections:f(e)}}),(function(e){return{fetchCollectionsStart:function(){return e(Object(E.b)())}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match,r=e.getShopCollections;return Object(c.useEffect)((function(){t()}),[t]),a.a.createElement("div",null,""===r?a.a.createElement(h.a,null):a.a.createElement("div",null,a.a.createElement(b.b,{exact:!0,path:"".concat(n.url),component:d}),a.a.createElement(b.b,{path:"".concat(n.url,"/:collectionid"),component:p})))}))},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}}]);
//# sourceMappingURL=4.c274544c.chunk.js.map