(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{16:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(5),i=t.n(n),r=t.p+"static/media/unpluged.c70b72e8.jpg",d=t(0),l=function(e){var a=e.name,t=e.tag,c=e.location,s=e.avatar,n=e.stats;return Object(d.jsxs)("div",{class:"profile",children:[Object(d.jsxs)("div",{class:"description",children:[Object(d.jsx)("img",{src:s,alt:a,class:"avatar"}),Object(d.jsx)("p",{class:"name",children:a}),Object(d.jsxs)("p",{class:"tag",children:["@",t]}),Object(d.jsx)("p",{class:"location",children:c})]}),Object(d.jsxs)("ul",{class:"stats",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{class:"label",children:"Followers"}),Object(d.jsx)("span",{class:"quantity",children:n.followers})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{class:"label",children:"Views"}),Object(d.jsx)("span",{class:"quantity",children:n.views})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{class:"label",children:"Likes"}),Object(d.jsx)("span",{class:"quantity",children:n.likes})]})]})]})};l.defaultProps={avatar:r};var b=l,o=t(2),j=function(e){var a=e.title,t=e.stats;return Object(d.jsxs)("section",{class:"statistics",children:[a&&Object(d.jsx)("h2",{class:"title",children:a}),Object(d.jsx)("ul",{class:"stat-list",children:t.map((function(e){var a=e.id,t=e.label,c=e.percentage;return Object(d.jsxs)("li",{class:"item",children:[Object(d.jsx)("span",{class:"label",children:t}),Object(d.jsx)("span",{class:"percentage",children:c})]},a)}))})]})};j.defaultProps={title:""};var u=j,p=t(6),f=t(3),m=t.n(f),h=function(e){var a=e.avatar,t=e.name;e.isOnline;return Object(d.jsxs)("li",{class:"item",children:[Object(d.jsx)("span",{class:"status"}),Object(d.jsx)("img",{class:"avatar",src:a,alt:t,width:"48"}),Object(d.jsx)("p",{class:"name",children:t})]})};h.defaultProps={avatar:r};var O=h,y=function(e){var a=e.friends;return Object(d.jsx)("ul",{class:"friend-list",children:a.map((function(e){var a=e.id,t=e.avatar,c=e.name,s=e.isOnline;return Object(d.jsx)(O,{avatar:t,name:c,isOnline:s},a)}))})};y.protoTypes={friends:m.a.arrayOf(m.a.shape({id:m.a.number.isRequired})).isRequired};var v=y,x=t(7),w=function(e){var a=e.items;return Object(d.jsxs)("table",{class:"transaction-history",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.type}),Object(d.jsx)("td",{children:e.amount}),Object(d.jsx)("td",{children:e.currency})]},e.id)}))})]})},g=t(8),U=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{name:o.name,tag:o.tag,location:o.location,avatar:o.avatar,stats:o.stats}),Object(d.jsx)(u,{title:"Upload stats",stats:p}),Object(d.jsx)(v,{friends:x}),Object(d.jsx)(w,{items:g})]})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784182.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},6:function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},7:function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},8:function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.ac3a5667.chunk.js.map