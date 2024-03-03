"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[962],{8962:function(n,e,i){i.r(e),i.d(e,{default:function(){return H}});var r,t,c,a,d,l,o,s,p,h,x,u=i(9439),f=i(2791),m=i(4420),g=function(n){return n.pharmacies.items},w=function(n){return n.pharmacies.isLoading},Z=i(4589),j=i(168),y=i(7924),b=y.ZP.li(r||(r=(0,j.Z)(["\n  width: 100%;\n\n  text-align: center;\n\n  color: ",";\n  background-color: ",";\n\n  border: 1px solid teal;\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  padding: 6px 12px;\n"])),(function(n){return n.$isSelected?"white":"teal"}),(function(n){return n.$isSelected?"teal":"white"})),v=i(184),P=function(n){var e=n.pharmacy,i=n.onPharmacyClick,r=n.isSelected;return(0,v.jsx)(b,{onClick:function(){return i(e)},$isSelected:r,children:(0,v.jsx)("p",{children:e.name})})},k=y.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),C=y.ZP.h3(c||(c=(0,j.Z)(["\n  /* color: teal; */\n"]))),S=y.ZP.ul(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n\n  width: 290px;\n\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    margin: 0;\n  }\n"]))),_=function(n){var e=n.pharmacies,i=n.onPharmacyClick,r=(0,f.useState)(null),t=(0,u.Z)(r,2),c=t[0],a=t[1],d=function(n){a(n),i(n)};return(0,v.jsxs)(k,{children:[(0,v.jsx)(C,{children:"Shops"}),(0,v.jsx)(S,{children:e.map((function(n){return(0,v.jsx)(P,{pharmacy:n,onPharmacyClick:d,isSelected:c&&c._id===n._id},n._id)}))})]})},$=y.ZP.li(d||(d=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 8px;\n\n  width: 100%;\n\n  background-color: white;\n  border: 1px solid teal;\n  border-radius: 12px;\n\n  padding: 6px 12px;\n\n  @media screen and (min-width: 425px) {\n    width: calc(100% / 2 - 8px);\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: calc(100% / 3 - 16px);\n  }\n"]))),W=y.ZP.p(l||(l=(0,j.Z)(["\n  font-size: 12px;\n  font-weight: 300;\n  text-align: end;\n  color: grey;\n"]))),z=y.ZP.button(o||(o=(0,j.Z)(["\n  width: 100%;\n\n  background-color: transparent;\n\n  border: 1px solid teal;\n  border-radius: 12px;\n\n  margin-top: 8px;\n  padding: 6px 12px;\n\n  transition: color background-color 0.3 ease;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: teal;\n  }\n"]))),A=function(n){var e=n.medicine;return(0,v.jsxs)($,{children:[(0,v.jsx)("h3",{children:e.name}),(0,v.jsxs)("div",{children:[(0,v.jsxs)(W,{children:["Price: ",e.price,"$"]}),(0,v.jsx)(z,{type:"button",children:"Add to Cart"})]})]})},E=y.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  flex-grow: 1;\n"]))),I=y.ZP.ul(p||(p=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),L=function(n){var e=n.pharmacy,i=e.medicines.map((function(n){return n._id}));return(0,v.jsxs)(E,{children:[(0,v.jsx)("h3",{children:e.name}),(0,v.jsx)(I,{children:i.map((function(n){return(0,v.jsx)(A,{medicine:n},n._id)}))})]})},q=i(7682),B=(0,y.ZP)(q.W2)(h||(h=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),D=y.ZP.div(x||(x=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20vh;\n  width: 100%;\n\n  font-weight: 700;\n"]))),F={display:"inline-block",position:"absolute",overflow:"hidden",clip:"rect(0 0 0 0)",height:1,width:1,margin:-1,padding:0,border:0},G=i(6143),H=function(){var n=(0,m.I0)(),e=(0,m.v9)(g),i=(0,m.v9)(w),r=(0,f.useState)(null),t=(0,u.Z)(r,2),c=t[0],a=t[1];(0,f.useEffect)((function(){n((0,Z.W)())}),[n]);return i?(0,v.jsx)(G.Z,{}):(0,v.jsx)(q.$0,{children:(0,v.jsxs)(B,{children:[(0,v.jsx)("h2",{style:F,children:"Shops"}),(0,v.jsx)(_,{pharmacies:e,onPharmacyClick:function(n){a(n)}}),c?(0,v.jsx)(L,{pharmacy:c}):(0,v.jsx)(D,{children:"Choose the shop, please!"})]})})}}}]);
//# sourceMappingURL=962.e4e14ea4.chunk.js.map