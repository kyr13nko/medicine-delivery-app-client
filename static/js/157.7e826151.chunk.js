"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[157],{6353:function(n,e,i){i.d(e,{V:function(){return l},x:function(){return o}});var r,t,c=i(168),a=i(7924),d=i(7682),o=(0,a.ZP)(d.W2)(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),l=a.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20vh;\n  width: 100%;\n\n  font-weight: 700;\n"])))},9157:function(n,e,i){i.r(e),i.d(e,{default:function(){return q}});var r,t,c,a,d,o,l,s,u,p=i(9439),x=i(2791),h=i(4420),f=i(6351),m=i(4589),g=i(168),w=i(7924),Z=w.ZP.li(r||(r=(0,g.Z)(["\n  width: 100%;\n\n  text-align: center;\n\n  color: ",";\n  background-color: ",";\n\n  border: 1px solid teal;\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  padding: 6px 12px;\n"])),(function(n){return n.$isSelected?"white":"teal"}),(function(n){return n.$isSelected?"teal":"white"})),j=i(184),y=function(n){var e=n.pharmacy,i=n.onPharmacyClick,r=n.isSelected;return(0,j.jsx)(Z,{onClick:function(){return i(e)},$isSelected:r,children:(0,j.jsx)("p",{children:e.name})})},v=w.ZP.div(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),b=w.ZP.h3(c||(c=(0,g.Z)(["\n  /* color: teal; */\n"]))),k=w.ZP.ul(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n\n  width: 290px;\n\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    margin: 0;\n  }\n"]))),P=function(n){var e=n.pharmacies,i=n.onPharmacyClick,r=(0,x.useState)(null),t=(0,p.Z)(r,2),c=t[0],a=t[1],d=function(n){a(n),i(n)};return(0,j.jsxs)(v,{children:[(0,j.jsx)(b,{children:"Shops"}),(0,j.jsx)(k,{children:e.map((function(n){return(0,j.jsx)(y,{pharmacy:n,onPharmacyClick:d,isSelected:c&&c._id===n._id},n._id)}))})]})},_=w.ZP.li(d||(d=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 8px;\n\n  width: 100%;\n\n  background-color: white;\n  border: 1px solid teal;\n  border-radius: 12px;\n\n  padding: 6px 12px;\n\n  @media screen and (min-width: 425px) {\n    width: calc(100% / 2 - 8px);\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: calc(100% / 3 - 16px);\n  }\n"]))),C=w.ZP.p(o||(o=(0,g.Z)(["\n  font-size: 12px;\n  font-weight: 300;\n  text-align: end;\n  color: grey;\n"]))),S=w.ZP.button(l||(l=(0,g.Z)(["\n  width: 100%;\n\n  background-color: transparent;\n\n  border: 1px solid teal;\n  border-radius: 12px;\n\n  margin-top: 8px;\n  padding: 6px 12px;\n\n  transition: color background-color 0.3 ease;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: teal;\n  }\n"]))),$=i(2641),A=i(2564),D=function(n){var e=n.medicine,i=(0,h.I0)(),r=(0,h.v9)(f.KY).some((function(n){return n._id===e._id}));return(0,j.jsxs)(_,{children:[(0,j.jsx)("h3",{children:e.name}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(C,{children:["Price: ",e.price,"$"]}),(0,j.jsx)(S,{type:"button",onClick:function(){r?A.Am.warn("Medicine is already in the cart!"):i((0,$.Xq)(e))},children:"Add to Cart"})]})]})},I=w.ZP.div(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex-grow: 1;\n"]))),K=w.ZP.ul(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),O=function(n){var e=n.pharmacy,i=e.medicines.map((function(n){return n._id}));return(0,j.jsxs)(I,{children:[(0,j.jsx)("h3",{children:e.name}),(0,j.jsx)(K,{children:i.map((function(n){return(0,j.jsx)(D,{medicine:n},n._id)}))})]})},U=i(7682),V=i(6353),W=i(8649),Y=i(6143),q=function(){var n=(0,h.I0)(),e=(0,h.v9)(f.OD),i=(0,h.v9)(f.xU),r=(0,x.useState)(null),t=(0,p.Z)(r,2),c=t[0],a=t[1];(0,x.useEffect)((function(){n((0,m.W)())}),[n]);return i?(0,j.jsx)(Y.Z,{}):(0,j.jsx)(U.$0,{children:(0,j.jsxs)(V.x,{children:[(0,j.jsx)("h2",{style:W.$,children:"Shops"}),(0,j.jsx)(P,{pharmacies:e,onPharmacyClick:function(n){a(n)}}),c?(0,j.jsx)(O,{pharmacy:c}):(0,j.jsx)(V.V,{children:"Choose the shop, please!"})]})})}},6351:function(n,e,i){i.d(e,{KY:function(){return c},OD:function(){return r},xU:function(){return t}});var r=function(n){return n.pharmacies.items},t=function(n){return n.pharmacies.isLoading},c=function(n){return n.cart.items}},8649:function(n,e,i){i.d(e,{$:function(){return r}});var r={display:"inline-block",position:"absolute",overflow:"hidden",clip:"rect(0 0 0 0)",height:1,width:1,margin:-1,padding:0,border:0}}}]);
//# sourceMappingURL=157.7e826151.chunk.js.map