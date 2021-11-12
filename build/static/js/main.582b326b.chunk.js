(this["webpackJsonpiteria-intro"]=this["webpackJsonpiteria-intro"]||[]).push([[0],{113:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var c,r,a=n(0),i=n(45),s=n.n(i),l=n(40),o=n(77),j=n(78),d=n(101),b=n(99),h=n(7),O=n(161),m=n(171),x=n(103),u=n(153),g=n(152),p=n(155),f=n(154),_=n(157),w=n(100),v=new p.a({uri:"https://actual-stud-78.hasura.app/v1/graphql",headers:{"content-type":"application/json","x-hasura-admin-secret":"GjXVwnbaza3HI1oNcIofwJTFcJyz157gtzg13uAdaZF83xbTedOtX8mGnzRHZ8rh"}}),y=new f.a({cache:new _.a,link:w.a.from([v])}),S=n(61),k=n(163),I=n(162),N=n(168),z=n(146),C=n(147),D=n(169),T=n(148),J=n(149),L=n(170),P=n(164),R=n(151),q=n(156),G=n(160),V=(n(113),n(150)),F=n(5),H=Object(q.a)(c||(c=Object(S.a)(["\nquery GetClientList {\n  client_list {\n    id\n    client_name\n    date_of_birth\n    vip\n    orders_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n"]))),W=function(e){if(e)return Object(F.jsx)(k.a,{style:{fontWeight:"bold"},children:"VIP"})};function X(e){return new Date(e).toLocaleDateString().toString()}function Z(){var e=Object(h.f)(),t=Object(G.a)(H),n=t.data,c=t.loading,r=t.error;return c?Object(F.jsx)(I.a,{}):r?Object(F.jsx)(k.a,{children:r}):Object(F.jsxs)(N.a,{className:"mainTable",alignSelf:"stretch",children:[Object(F.jsx)(z.a,{children:Object(F.jsxs)(C.a,{children:[Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"Client ID"}),Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"Customer"}),Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"Date of birth"}),Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"Vip"}),Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"Sum of orders"})]})}),Object(F.jsx)(T.a,{children:n.client_list.map((function(t){var n=t.id,c=t.client_name,r=t.date_of_birth,a=t.vip,i=t.orders_aggregate;return Object(F.jsxs)(C.a,{style:{cursor:"pointer"},className:"mainTableRow",onClick:function(){e("/orders?id=".concat(n))},children:[Object(F.jsx)(D.a,{scope:"row",children:n}),Object(F.jsx)(D.a,{scope:"row",children:Object(F.jsx)("strong",{children:c})}),Object(F.jsx)(D.a,{children:X(r)}),Object(F.jsx)(D.a,{children:a?"\u2705":"\u274c"}),Object(F.jsx)(D.a,{children:i.aggregate.count})]},n)}))})]})}function A(){var e=new URLSearchParams(window.location.search).get("id"),t=Object(q.a)(r||(r=Object(S.a)(["\n  query GetOrderList {\n    client_list(where: {id: {_eq: ","}}) {\n      client_name\n      date_of_birth\n      id\n      vip\n      orders {\n        client_id\n        id\n        order_date\n        price\n        sum_of_products\n      }\n      orders_aggregate {\n        aggregate {\n          count\n          sum {\n            price\n            sum_of_products\n          }\n        }\n      }\n    }\n  }\n"])),e),n=Object(G.a)(t),c=n.data,a=n.loading,i=n.error;if(a)return Object(F.jsx)(I.a,{});if(i)return Object(F.jsx)("div",{children:i});var s=c.client_list[0],l=c.client_list[0].orders_aggregate.aggregate;return Object(F.jsxs)(x.a,{gap:"medium",alignSelf:"stretch",justify:"between",children:[Object(F.jsxs)(J.a,{direction:"row",margin:"small",background:"light-1",children:[Object(F.jsxs)(L.a,{pad:"small",justify:"start",children:[Object(F.jsx)(P.a,{background:"accent-4",children:Object(F.jsx)(V.a,{})}),Object(F.jsx)(k.a,{alignSelf:"center",children:s.client_name}),W(s.vip)]}),Object(F.jsxs)(R.a,{pad:"small",direction:"row",children:[Object(F.jsx)(k.a,{alignSelf:"center",margin:"small",children:"Id: ".concat(s.id)}),Object(F.jsx)(k.a,{alignSelf:"center",margin:"small",children:"Date of birth: ".concat(X(s.date_of_birth))}),Object(F.jsx)(k.a,{alignSelf:"center",margin:"small",children:"Orders: ".concat(l.count)}),Object(F.jsx)(k.a,{alignSelf:"center",margin:"small",children:"Products: ".concat(l.sum.sum_of_products)}),Object(F.jsx)(k.a,{alignSelf:"center",margin:"small",children:"Lifetime spendings: ".concat(l.sum.price)})]})]}),Object(F.jsxs)(N.a,{className:"mainTable",alignSelf:"stretch",children:[Object(F.jsx)(z.a,{children:Object(F.jsxs)(C.a,{children:[Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"ID"}),Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"Date of order"}),Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"Price"}),Object(F.jsx)(D.a,{scope:"col",border:"bottom",children:"Products"})]})}),Object(F.jsx)(T.a,{children:c.client_list[0].orders.map((function(e){var t=e.id,n=e.order_date,c=e.price,r=e.sum_of_products;return Object(F.jsxs)(C.a,{className:"mainTableRow",children:[Object(F.jsx)(D.a,{scope:"row",children:t}),Object(F.jsx)(D.a,{scope:"row",children:Object(F.jsx)("strong",{children:X(n)})}),Object(F.jsx)(D.a,{children:c}),Object(F.jsx)(D.a,{children:r})]},t)}))})]})]})}n(123);var B=n(159),E=n(165),U=function(e){var t=e.appName,n=e.appIcon;return Object(F.jsxs)(x.a,{tag:"header",direction:"row",background:"brand",align:"center",elevation:"medium",justify:"between",responsive:!1,pad:{vertical:"xsmall"},style:{position:"relative"},children:[Object(F.jsx)(B.a,{children:Object(F.jsxs)(x.a,{flex:!1,direction:"row",align:"center",margin:{left:"small"},children:[n,Object(F.jsx)(E.a,{level:"4",margin:{left:"small",vertical:"none"},children:t})]})}),Object(F.jsxs)(x.a,{direction:"row",align:"center",margin:{right:"medium"},style:{cursor:"pointer"},children:[Object(F.jsx)(P.a,{background:"#ffb3b3",children:"\ud83e\udd16"}),Object(F.jsx)(E.a,{level:"5",margin:{left:"small",vertical:"none"},children:"John Wireman"})]})]})},K={global:{colors:{brand:"#bb454e"},font:{family:"Roboto",size:"14px",height:"20px"}}},M=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(F.jsx)(O.a,{theme:K,full:!0,children:Object(F.jsx)(g.a,{client:y,children:Object(F.jsx)(m.a.Consumer,{children:function(){return Object(F.jsxs)(x.a,{fill:!0,children:[Object(F.jsx)(U,{appName:"Customer's sheet",appIcon:Object(F.jsx)(l.b,{to:"/",children:Object(F.jsx)(u.a,{})})}),Object(F.jsx)(x.a,{flex:!0,margin:{horizontal:"large"},overflow:{horizontal:"hidden"},align:"center",justify:"start",className:"main",children:Object(F.jsxs)(h.c,{children:[Object(F.jsx)(h.a,{path:"/",element:Object(F.jsx)(Z,{})}),Object(F.jsx)(h.a,{path:"orders",element:Object(F.jsx)(A,{})})]})})]})}})})})}}]),n}(a.Component),Q=M;s.a.render(Object(F.jsx)(l.a,{children:Object(F.jsx)(Q,{})}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.582b326b.chunk.js.map