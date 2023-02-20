"use strict";(self.webpackChunkpet_support_team_project_8=self.webpackChunkpet_support_team_project_8||[]).push([[88],{8765:function(n,e,t){t.d(e,{Z:function(){return d}});var o,i=t(5705),r=t(168),a=t(7691),s=t(1607),c=a.ZP.div(o||(o=(0,r.Z)(["\n  padding-top: 5px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  right: 50%;\n  transform: translateX(50%);\n  font-family: ",";\n  font-size: ",";\n  text-align: center;\n  color: #e00e0e;\n\n  @media screen and (min-width: 768px) {\n    font-size: 17px;\n  }\n"])),s.Z.fonts.manrope,s.Z.fontSizes.s),l=t(3329),d=function(n){var e=n.name;return(0,l.jsx)(i.Bc,{name:e,render:function(n){return(0,l.jsx)(c,{children:n})}})}},2373:function(n,e,t){t.d(e,{Z:function(){return u}});var o,i,r,a=t(2791),s=t(168),c=t(7691),l={Backdrop:c.ZP.div(o||(o=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(17, 17, 17, 0.6);\n  position: fixed;\n  z-index: 200;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n  opacity: ",";\n  pointer-events: ",";\n  transition: 0.5s;\n"])),(function(n){return n.active?1:0}),(function(n){return n.active?"all":"none"})),Content:c.ZP.div(i||(i=(0,s.Z)(["\n  border-radius: 40px;\n  background: ",";\n  transform: ",";\n  transition: 0.4s all;\n  @media "," {\n    border-radius: 20px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.active?"scale(1)":"scale(0.5)"}),(function(n){return n.theme.media.mobile})),CloseBtn:c.ZP.div(r||(r=(0,s.Z)(["\n  position: fixed;\n  cursor: pointer;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  top: 16px;\n  right: 16px;\n  background-color: ",";\n  border: none;\n  border-radius: ",";\n  padding: 2px;\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.radius.round}))},d=t(71),p=t(3329),u=function(n){var e=n.active,t=n.setActive,o=n.children,i=l.Backdrop,r=l.Content,s=l.CloseBtn,c=(0,a.useCallback)((function(n){"Escape"===n.key&&t(!1)}),[t]);return(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"",document.addEventListener("keydown",c),function(){return document.removeEventListener("keydown",c)}})),(0,p.jsx)(i,{active:e,onClick:function(){return t(!1)},children:(0,p.jsxs)(r,{active:e,onClick:function(n){return n.stopPropagation()},children:[(0,p.jsx)(s,{onClick:function(){return t(!1)},children:(0,p.jsx)(d.bjh,{size:25})}),o]})})}},716:function(n,e,t){t.d(e,{Z:function(){return R}});var o,i,r,a,s,c,l,d=t(168),p=t(7691),u=t(1607),h=t(8820),m=t(5705),x=p.ZP.div(o||(o=(0,d.Z)(["\ndisplay: flex;\njustify-content: center;\n\n@media screen and (",") {\nmargin-top: 28px;\nmargin-bottom: 28px;\n}\nmargin-bottom: 40px;\nmargin-top: 40px;\n"])),u.Z.media.mobile),f=(0,p.ZP)(m.l0)(i||(i=(0,d.Z)(["\nposition: relative;\ndisplay: inline-block;\n\n@media screen and (",") {\nwidth: 280px;\n};\n\nwidth: 608px;\n"])),u.Z.media.mobile),g=(0,p.ZP)(m.gN)(r||(r=(0,d.Z)(["\n@media screen and (",") {\nheight: 40px;\nfont-size: ",";\nline-height: 1.375;\npadding: 9px 0 9px 12px;\npadding-right:  calc(5% + 20px)\n};\nwidth: 100%;\nheight: 44px;\n\n@media screen and (",") {\nborder-radius: 40px;\nline-height: 1.35;\n};\n\n@media screen and (",") {\nline-height: 1.2;\n};\n\nbackground: ",";\n\nbox-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\nborder: ",";\nborder-radius: 20px;\n\npadding: 8px 0 8px 20px;\npadding-right: calc(3% + 24px);\n\ncolor: #535353;\nfont-family: ",";\nfont-weight: ",";\nfont-size: 20px;\nletter-spacing: 0.04em;\noutline: none;\n\n&:focus {\n    outline: 1px solid rgba(245, 146, 86, 0.5);\n\n   \n}\n"])),u.Z.media.mobile,u.Z.fontSizes.m,u.Z.media.tablet,u.Z.media.desktop,u.Z.colors.white,u.Z.borders.none,u.Z.fonts.manrope,u.Z.fontWeights.normal),b=p.ZP.button(a||(a=(0,d.Z)(["\ndisplay: ",";\ncursor: pointer;\nposition: absolute;\ntop: 50%;\nright: 0;\npadding: 0;\npadding-right: 3%;\ntransform: translate(0, -50%);\n\n@media screen and (",") {\nheight: 40px;\npadding-right: 5%;\n};\n\nheight: 44px;\n\nbackground: transparent;\n\nborder: ",";\nborder-top-right-radius: 20px;\nborder-bottom-right-radius: 20px;\n"])),(function(n){return n.exist?"none":"block"}),u.Z.media.mobile,u.Z.borders.none),Z=p.ZP.button(s||(s=(0,d.Z)(["\ndisplay: ",";\ncursor: pointer;\nposition: absolute;\ntop: 50%;\nright: 0;\npadding: 0;\npadding-right: 3%;\ntransform: translate(0, -50%);\n\n@media screen and (",") {\nheight: 40px;\npadding-right: 5%;\n};\nheight: 44px;\nbackground: transparent;\n\nborder: ",";\nborder-top-right-radius: 20px;\nborder-bottom-right-radius: 20px;\n  "])),(function(n){return n.exist?"block":"none"}),u.Z.media.mobile,u.Z.borders.none),y={StyledForm:f,Input:g,SearchBtn:b,SearchBarContainer:x,MugnifyingGlass:(0,p.ZP)(h.RB5)(c||(c=(0,d.Z)(["\ndisplay: block;\n@media screen and (",") {\nwidth: 20px;\nheight: 20px;\n }\n\n  width: 24px; \n  height: 24px;"])),u.Z.media.mobile),CrissCross:(0,p.ZP)(h.SV5)(l||(l=(0,d.Z)(["\ndisplay: block;\n @media screen and (",") {\nwidth: 20px;\nheight: 20px;\n }\n\n  width: 24px; \n  height: 24px;\n"])),u.Z.media.mobile),ClearBtn:Z},j=t(9434),v=t(2242),w=t(2507),k=t(8765),C=t(2791),S=t(1724),P=t(3329),F=y.StyledForm,z=y.Input,B=y.SearchBtn,q=y.SearchBarContainer,I=y.MugnifyingGlass,L=y.CrissCross,T=y.ClearBtn,A=w.Z.selectSearchState,R=function(){var n=(0,j.I0)(),e=(0,j.v9)(A);(0,C.useEffect)((function(){n((0,v.q)(""))}),[n]);var t=function(e){var t=e.target.value;n((0,v.q)(t))},o=function(){n((0,v.q)(""))},i=S.Ry().shape({search:S.Z_().required("Value required")});return(0,P.jsx)(q,{children:(0,P.jsx)(m.J9,{initialValues:{search:e},validationSchema:i,validateOnChange:!0,enableReinitialize:!0,validateOnBlur:!1,children:function(n){var i=n.errors;return(0,P.jsxs)(F,{children:[(0,P.jsx)(z,{type:"text",value:e,name:"search",placeholder:"Search",onChange:t}),i.search?(0,P.jsx)(k.Z,{name:"search"}):null,(0,P.jsx)(B,{exist:e,type:"submit",children:(0,P.jsx)(I,{})}),(0,P.jsx)(T,{type:"button",onClick:o,exist:e,children:(0,P.jsx)(L,{})})]})}})})}},2088:function(n,e,t){t.r(e),t.d(e,{default:function(){return me}});var o,i,r,a,s,c,l,d,p,u,h,m,x,f,g,b,Z,y,j,v,w,k,C,S,P,F,z,B,q,I=t(716),L=t(9439),T=t(2791),A=t(2373),R=t(4165),_=t(5861),O=t(1413),W=t(9434),N=t(5705),E=t(168),M=t(7691),V=M.ZP.div(o||(o=(0,E.Z)(["\n  padding: 40px 80px;\n  width: 100%;\n  height: 100%;\n  height: 95vh;\n  overflow: hidden;\n  overflow-y: auto;\n  @media "," {\n    padding: 20px 40px;\n  }\n"])),(function(n){return n.theme.media.mobile})),H=(0,M.ZP)(N.l0)(i||(i=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  @media "," {\n    gap: 16px;\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),D=M.ZP.h1(r||(r=(0,E.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 36px;\n  color: ",";\n  line-height: 49px;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 40px;\n  @media "," {\n    margin: 28px;\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile})),G=M.ZP.div(a||(a=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 12px;\n  position: relative;\n  @media "," {\n    width: 100%;\n  }\n"])),(function(n){return n.theme.media.mobile})),J=(0,M.ZP)(N.gN)(s||(s=(0,E.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  text-align: flex-start;\n  justify-content: start;\n  align-items: start;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  letter-spacing: 0.04em;\n  background-color: ",";\n  color: ",";\n  padding: 11px 14px 10px 14px;\n  outline: 1px solid ",";\n  border: none;\n  border-radius: 40px;\n  cursor: pointer;\n  carent-color: ",";\n  transition: all 100ms ease-in;\n\n  @media "," {\n    height: 48px;\n    font-size: 20px;\n    padding: 11px 14px 10px 32px;\n    background-color: ",";\n  }\n\n  &::placeholder {\n    font-family: ",";\n    font-weight: 400;\n    font-size: ",";\n    line-height: 1.35;\n    letter-spacing: 0.04em;\n    color: rgba(17, 17, 17, 0.6);\n\n    @media "," {\n      font-size: 18px;\n      line-height: 1.38;\n      width: 100%;\n    }\n  }\n\n  &::-ms-reveal {\n    display: none;\n  }\n\n  &:focus,\n  &:hover {\n    outline: 2px solid ",";\n\n    @media screen and (min-width: 768px) {\n      outline-width: 3px;\n    }\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.colors.accent})),U=M.ZP.div(c||(c=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 12px;\n  @media "," {\n    flex-direction: column-reverse;\n    gap: 12px;\n    width: 100%;\n    margin: 0;\n    align-items: center;\n    text-align: center;\n  }\n"])),(function(n){return n.theme.media.mobile})),X=M.ZP.button(l||(l=(0,E.Z)(["\n  border: ",";\n  border-radius: ",";\n  width: 180px;\n  padding: 10px 28px;\n  font-family: ",";\n  font-size: 20px;\n  color: ",";\n  background-color: ",";\n  letter-spacing: 0.07em;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n  @media "," {\n    margin: ","px;\n    font-size: 20px;\n  }\n\n  @media "," {\n    margin-top: ","px;\n  }\n\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.borders.box}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),Y=M.ZP.input(d||(d=(0,E.Z)(["\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n"]))),$=M.ZP.label(p||(p=(0,E.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  width: 182px;\n  height: 182px;\n  background-color: ",";\n  border-radius: 40px;\n\n  ","\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.preview?"\n    background: url(".concat(n.preview,") center center no-repeat;\n    background-size: cover;\n  "):null})),K=M.ZP.div(u||(u=(0,E.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  width: 448px;\n  margin-bottom: 28px;\n  @media "," {\n    flex-wrap: wrap;\n    gap: 8px;\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),Q=M.ZP.label(h||(h=(0,E.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  text-align: center;\n  height: 47px;\n  letter-spacing: 0.04em;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n    line-height: 1.357;\n    padding: 8px 28px;\n  }\n\n  font-size: 20px;\n  line-height: 1.35;\n\n  padding: 10px 28px;\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: 40px;\n  transition: background-color 200ms, color 200ms;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  cursor: pointer;\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),nn=(0,M.ZP)(N.gN)(m||(m=(0,E.Z)(["\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  &:checked + "," {\n    background-color: ",";\n    color: ",";\n  }\n"])),Q,(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),en=M.ZP.label(x||(x=(0,E.Z)(["\n  display: grid;\n  gap: 12px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  text-align: center;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.accent})),tn=(0,M.ZP)(N.gN)(f||(f=(0,E.Z)(["\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  &:checked + "," {\n    color: ",";\n  }\n"])),en,(function(n){return n.theme.colors.accent})),on=M.ZP.div(g||(g=(0,E.Z)(["\n  width: 443px;\n  text-align: center;\n  margin-bottom: 28px;\n  @media "," {\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),rn=M.ZP.span(b||(b=(0,E.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  text-align: center;\n  letter-spacing: -0.01em;\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal})),an={Container:V,Forma:H,Title:D,Input:J,Label:M.ZP.label(Z||(Z=(0,E.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.ml})),RadioLabel:Q,InputBox:G,BtnBox:U,Btn:X,AddPhoto:$,CategoriesBox:K,RadioInput:nn,SexRadioInput:tn,SexLabel:en,TextBox:on,Text:rn,AvatarInput:Y,ErrorMsg:M.ZP.div(y||(y=(0,E.Z)(["\n  font-family: ",";\n  font-size: ",";\n  text-align: center;\n  color: #e00e0e;\n  position: absolute;\n  bottom: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontSizes.s}))},sn=t(8820),cn=t(8014),ln=t(1724),dn=t(3329),pn=an.Forma,un=an.Input,hn=an.InputBox,mn=an.BtnBox,xn=an.Btn,fn=an.AddPhoto,gn=an.CategoriesBox,bn=an.RadioLabel,Zn=an.RadioInput,yn=an.Text,jn=an.Label,vn=an.SexRadioInput,wn=an.SexLabel,kn=an.TextBox,Cn=an.AvatarInput,Sn=an.ErrorMsg,Pn=ln.Ry().shape({category:ln.Z_().oneOf(["lostfound","ingoodhands","sell"]).required("Category is required"),title:ln.Z_().required("Title is required").min(2).max(48),name:ln.Z_().required("Name is required").min(2).max(16),birthdate:ln.hT().required("Birthdate is required"),breed:ln.Z_().required("Breed is required").min(2).max(24)}),Fn={FirstStepAdd:function(n){var e=n.state,t=n.handleSubmit,o=n.onCancel;return(0,dn.jsxs)("div",{children:[(0,dn.jsx)(kn,{children:(0,dn.jsxs)(yn,{children:["Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"," "]})}),(0,dn.jsx)(N.J9,{initialValues:e,onSubmit:t,validationSchema:Pn,children:function(n){var e=n.errors,t=n.touched;return(0,dn.jsxs)(pn,{autoComplete:"off",children:[(0,dn.jsxs)("div",{style:{position:"relative"},children:[(0,dn.jsxs)(gn,{children:[(0,dn.jsx)(Zn,{id:"category-1",type:"radio",name:"category",value:"lostfound"}),(0,dn.jsx)(bn,{htmlFor:"category-1",children:"lost/found"}),(0,dn.jsx)(Zn,{id:"category-2",type:"radio",name:"category",value:"ingoodhands"}),(0,dn.jsx)(bn,{htmlFor:"category-2",children:"in good hands"}),(0,dn.jsx)(Zn,{id:"category-3",type:"radio",name:"category",value:"sell"}),(0,dn.jsx)(bn,{htmlFor:"category-3",children:"sell"})]}),e.category&&t.category?(0,dn.jsx)(Sn,{children:e.category}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"title",children:["Title of ad ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(un,{type:"text",name:"title",placeholder:"Type name"}),e.title&&t.title?(0,dn.jsx)(Sn,{children:e.title}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"name",children:["Pet's name ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(un,{type:"text",name:"name",placeholder:"Type the pet's name"}),e.name&&t.name?(0,dn.jsx)(Sn,{children:e.name}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"birthdate",children:["Date of birth ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(un,{type:"date",name:"birthdate",placeholder:"Type date of birth"}),e.birthdate&&t.birthdate?(0,dn.jsx)(Sn,{children:e.birthdate}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"breed",children:["Breed ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(un,{type:"text",name:"breed",placeholder:"Type breed"}),e.breed&&t.breed?(0,dn.jsx)(Sn,{children:e.breed}):null]}),(0,dn.jsxs)(mn,{children:[(0,dn.jsx)(xn,{type:"button",onClick:o,children:"Cancel"}),(0,dn.jsx)(xn,{type:"submit",children:"Next"})]})]})}})]})},SecondStepAdd:function(n){var e=n.state,t=n.handleSubmit,o=n.onBack,i=(0,T.useState)(e.avatar),r=(0,L.Z)(i,2),a=r[0],s=r[1],c=ln.Ry().shape({sex:ln.Z_().oneOf(["male","female"]).required("Sex is required"),location:ln.Z_().required("Location is required").matches(/^[A-Z][\w\s-]+,\s[A-Z][\w\s-]+$/,"Please, match this format: City, Region (both must start with capital letter)"),price:"sell"===e.category?ln.Rx().required("Price is required"):void 0,comments:ln.Z_().required("Comments are required").min(8).max(120)}),l=function(n){var e;s(null===(e=n.target.files)||void 0===e?void 0:e[0])};return(0,dn.jsx)(dn.Fragment,{children:(0,dn.jsx)(N.J9,{initialValues:e,onSubmit:function(n,e){t((0,O.Z)((0,O.Z)({},n),{},{avatar:a}),e)},validationSchema:c,children:function(n){var t=n.values,i=n.errors,r=n.touched;return(0,dn.jsxs)(pn,{autoComplete:"off",children:[(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"sex",children:["The sex ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsxs)("div",{style:{display:"flex",gap:80},children:[(0,dn.jsx)(vn,{id:"sex-male",type:"radio",name:"sex",value:"male",style:{width:60,height:60,opacity:0}}),(0,dn.jsxs)(wn,{htmlFor:"sex-male",style:{position:"relative"},children:[(0,dn.jsx)(cn.y4U,{size:60,style:{color:"23C2EF"}}),(0,dn.jsx)("span",{children:"Male"})]}),(0,dn.jsx)(vn,{id:"sex-female",type:"radio",name:"sex",value:"female",style:{width:60,height:60,opacity:0}}),(0,dn.jsxs)(wn,{htmlFor:"sex-female",style:{position:"relative"},children:[(0,dn.jsx)(cn.YgV,{size:60,style:{color:"FF8787"}}),(0,dn.jsx)("span",{children:"Female"})]})]}),i.sex&&r.sex?(0,dn.jsx)(Sn,{children:i.sex}):null]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"location",children:["Location ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(un,{type:"text",name:"location",placeholder:"Type location"}),i.location&&r.location?(0,dn.jsx)(Sn,{children:i.location}):null]}),"sell"===e.category&&(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"price",children:["Price ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(un,{type:"number",name:"price",placeholder:"Type price"}),i.price&&r.price?(0,dn.jsx)(Sn,{children:i.price}):null]}),(0,dn.jsxs)(hn,{style:{display:"flex",position:"relative",marginBottom:28},children:[(0,dn.jsx)(jn,{htmlFor:"avatar",children:"Load the pet\u2019s image"}),(0,dn.jsxs)("div",{style:{width:140,height:140},children:[(0,dn.jsx)(Cn,{id:"avatar",as:"input",type:"file",name:"avatar",accept:".png, .jpg, .jpeg",onChange:l}),(0,dn.jsx)(fn,{htmlFor:"avatar",preview:a?URL.createObjectURL(a):void 0,children:a?null:(0,dn.jsx)(sn.Lfi,{size:71,color:"rgba(17, 17, 17, 0.6"})})]})]}),(0,dn.jsxs)(hn,{children:[(0,dn.jsxs)(jn,{htmlFor:"comments",children:["Comments ",(0,dn.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,dn.jsx)(un,{component:"textarea",type:"text",name:"comments",placeholder:"Type comments",style:{height:116,borderRadius:20,display:"block"}}),i.comments&&r.comments?(0,dn.jsx)(Sn,{children:i.comments}):null]}),(0,dn.jsxs)(mn,{children:[(0,dn.jsx)(xn,{type:"button",onClick:function(){return o((0,O.Z)((0,O.Z)({},t),{},{avatar:a}))},children:"Back"}),(0,dn.jsx)(xn,{type:"submit",secondStep:!0,children:"Done"})]})]})}})})}},zn=t(398),Bn=zn.Z.addNotice,qn=Fn.FirstStepAdd,In=Fn.SecondStepAdd,Ln=an.Container,Tn=an.Title,An={category:"",title:"",name:"",birthdate:"",breed:"",sex:"",location:"",price:"",comments:"",avatar:void 0},Rn=function(n){var e=n.onCancel,t=(0,T.useState)(An),o=(0,L.Z)(t,2),i=o[0],r=o[1],a=(0,T.useState)(!1),s=(0,L.Z)(a,2),c=s[0],l=s[1],d=(0,W.I0)(),p=function(){var n=(0,_.Z)((0,R.Z)().mark((function n(t,o){var a,s,c,p,u,h;return(0,R.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o.resetForm,a=t.sex,s=t.location,c=t.price,p=t.avatar,u=t.comments,(h=new FormData).append("category",i.category),h.append("name",i.name),h.append("birthdate",new Date(i.birthdate).toISOString()),h.append("breed",i.breed),h.append("title",i.title),h.append("sex",a),h.append("location",s),c&&h.append("price",c),p&&h.append("avatar",p),h.append("comments",u),d(Bn(h)),r(An),l(!1),e();case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,dn.jsx)(dn.Fragment,{children:(0,dn.jsxs)(Ln,{children:[(0,dn.jsx)(Tn,{children:"Add pet"}),c?(0,dn.jsx)(In,{state:i,handleSubmit:p,onBack:function(n){var e=n.sex,t=n.location,o=n.price,i=n.avatar,a=n.comments;r((function(n){return(0,O.Z)((0,O.Z)({},n),{},{sex:e,location:t,price:o,avatar:i,comments:a})})),l(!1)}}):(0,dn.jsx)(qn,{state:i,handleSubmit:function(n){var e=n.name,t=n.birthdate,o=n.breed,i=n.category,a=n.title;r((function(n){return(0,O.Z)((0,O.Z)({},n),{},{title:a,name:e,birthdate:t,category:i,breed:o})})),l(!0)},onCancel:e})]})})},_n=t(1607),On={MobBtn:M.ZP.button(j||(j=(0,E.Z)(["\nz-index: 10;\n@media screen and (min-width: 767px) {\n    display: none;\n}\n cursor: pointer;\nposition: fixed;\nwidth: 80px;\nheight: 80px;\nright: 20px;\nbottom: 12%;\n\nbackground: ",";\nborder-radius: 50%;\noutline: none;\nborder: none;\nbox-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n\nfont-family: ",";\nfont-weight: ",";\nfont-size: ",";\nline-height:1.33;\n\ncolor: ",";\n\ntransition: background-color 200ms ease-in-out;\n\n&:hover, &:active {\n    background-color: #FF6101\n}"])),_n.Z.colors.accent,_n.Z.fonts.manrope,_n.Z.fontWeights.normal,_n.Z.fontSizes.xs,_n.Z.colors.white),Text:M.ZP.span(v||(v=(0,E.Z)(["\ndisplay: flex;\nalign-items: center;\nfont-family: ",";\nfont-weight: ",";\nfont-size: 20px;\nline-height: 1.35;\n\ncolor: ",";\n\n@media screen and (",") {\n    display: none;\n}"])),_n.Z.fonts.manrope,_n.Z.fontWeights.normal,_n.Z.colors.black,_n.Z.media.mobile),Btn:M.ZP.button(w||(w=(0,E.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 44px;\nheight: 44px;\npadding: 0;\nmargin-left: 12px;\nbackground: ",";\nborder-radius: 50%;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: background-color 200ms ease-in-out;\n\n&:hover, &:active {\n    background-color: #FF6101\n}"])),_n.Z.colors.accent),MobCross:(0,M.ZP)(sn.Lfi)(k||(k=(0,E.Z)(["\ndisplay: block;\nmargin: 0 auto;\nwidth: 32px;\nheight: 32px;\nfill: ",";"])),_n.Z.colors.white),Cross:(0,M.ZP)(sn.Lfi)(C||(C=(0,E.Z)(["\ndisplay: block;\nwidth: 24px;\nheight: 24px;\nfill: ",";"])),_n.Z.colors.white)},Wn=t(4289),Nn=t(5985),En=t(6774),Mn=On.MobBtn,Vn=On.Text,Hn=On.Btn,Dn=On.Cross,Gn=On.MobCross,Jn=Wn.Z.selectIsLoggedIn,Un=function(){var n=(0,T.useState)(!1),e=(0,L.Z)(n,2),t=e[0],o=e[1],i=(0,W.v9)(Jn),r=function(){if(!i)return Nn.Am.info("For this operation registration or login needed",En.Z);o(!0)};return(0,dn.jsxs)("div",{style:{flexShrink:0},children:[(0,dn.jsx)(Nn.Ix,{}),(0,dn.jsxs)(Mn,{type:"button",onClick:r,children:[(0,dn.jsx)(Gn,{})," Add pet"]}),(0,dn.jsxs)(Vn,{children:["Add pet",(0,dn.jsx)(Hn,{type:"button",onClick:r,children:(0,dn.jsx)(Dn,{})})]}),(0,dn.jsx)(A.Z,{active:t,setActive:o,children:(0,dn.jsx)(Rn,{onCancel:function(){return o(!1)}})})]})},Xn=t(1087),Yn=M.ZP.div(S||(S=(0,E.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 12px;\n"]))),$n={Option:(0,M.ZP)(Xn.OL)(P||(P=(0,E.Z)(["\nfont-family: ",";\nfont-weight: ",";\ntext-align: center;\nletter-spacing: 0.04em;\ncolor: ",";\n\n@media screen and (",") {\n    font-size: ",";\nline-height: 1.357;\npadding: 8px 28px;\n}\n\nfont-size: 20px;\nline-height: 1.35;\n\npadding: 10px 28px;\nbackground-color: ",";\nborder: 2px solid ",";\nborder-radius: 40px;\ntransition: background-color 200ms, color 200ms;\n\n&:hover, &:focus, &.active {\n    background-color: ",";\n    color: ",";\n};\ncursor: pointer;"])),_n.Z.fonts.manrope,_n.Z.fontWeights.normal,_n.Z.colors.black,_n.Z.media.mobile,_n.Z.fontSizes.s,_n.Z.colors.white,_n.Z.colors.accent,_n.Z.colors.accent,_n.Z.colors.white),Container:Yn},Kn=t(8487),Qn=zn.Z.fetchNoticesByCategory,ne=zn.Z.fetchOwnNotices,ee=zn.Z.fetchFavorite,te=$n.Option,oe=$n.Container,ie=function(){var n=Wn.Z.selectIsLoggedIn,e=(0,W.I0)(),t=(0,W.v9)(n);(0,T.useEffect)((function(){e(Qn({category:Kn.Z.sell}))}),[]);var o=function(n){e(Qn(n))};return(0,dn.jsxs)(oe,{children:[(0,dn.jsx)(te,{to:"lost-found",onClick:function(){return o({category:Kn.Z.lostFound})},children:"lost/found"}),(0,dn.jsx)(te,{to:"for-free",onClick:function(){return o({category:Kn.Z.inGoodHands})},children:"in good hands"}),(0,dn.jsx)(te,{to:"sell",onClick:function(){return o({category:Kn.Z.sell})},children:"sell"}),t?(0,dn.jsxs)(dn.Fragment,{children:[(0,dn.jsx)(te,{to:"favorite",onClick:function(){e(ee())},children:"favorite ads"}),(0,dn.jsx)(te,{to:"own",onClick:function(){e(ne())},children:"my ads"})]}):""]})},re=M.ZP.section(F||(F=(0,E.Z)(["\nbackground-color: ",";\nheight: auto;\npadding-bottom: 100px;\n@media screen and (",") {\n    padding-top: 100px;\n}\n\n@media screen and (",") {\npadding-top: 160px;\n}\n\n@media screen and (",") {\npadding-top: 126px;\npadding-bottom: 200px;\n}\n"])),_n.Z.colors.bg,_n.Z.media.mobile,_n.Z.media.tablet,_n.Z.media.desktop),ae=M.ZP.div(z||(z=(0,E.Z)(["\nmargin: 0 auto;\n@media screen and (",") {\n   padding: 0 20px;\n   width: 320px;\n}\n\n@media screen and (",") {\npadding: 0 32px;\nwidth: 768px;\n}\n\n@media screen and (",") {\npadding: 0 16px;\nwidth: 1280px;\n}\n"])),_n.Z.media.mobile,_n.Z.media.tablet,_n.Z.media.desktop),se={Section:re,Header:M.ZP.h1(B||(B=(0,E.Z)(["\n@media screen and (",") {\n    font-size: 24px;\n}\n\nfont-family: ",";\nfont-weight: ",";\nfont-size: 48px;\nline-height: 1.375;\n\n\ntext-align: center;\n\ncolor: ",";\n"])),_n.Z.media.mobile,_n.Z.fonts.manrope,_n.Z.fontWeights.bold,_n.Z.colors.black),Container:ae,CategoriesCont:M.ZP.div(q||(q=(0,E.Z)(["\ndisplay: flex;\njustify-content: space-between;\nmargin-left: auto;\nmargin-right: auto;\n\n@media screen and (",") {\n    margin-bottom: 30px;\n}\nmargin-bottom: 60px;"])),_n.Z.media.mobile)},ce=t(7689),le=t(4270),de=se.Section,pe=se.Header,ue=se.Container,he=se.CategoriesCont,me=function(){return(0,dn.jsxs)(de,{children:[(0,dn.jsx)(le.q,{children:(0,dn.jsx)("title",{children:"Notices"})}),(0,dn.jsxs)(ue,{children:[(0,dn.jsx)(pe,{style:{textAlign:"center"},children:"Find your favorite pet"}),(0,dn.jsx)(I.Z,{}),(0,dn.jsxs)(he,{children:[(0,dn.jsx)(ie,{}),(0,dn.jsx)(Un,{})]}),(0,dn.jsx)(T.Suspense,{children:(0,dn.jsx)(ce.j3,{})})]})]})}},2507:function(n,e){var t={selectSearchState:function(n){return n.search.query}};e.Z=t},8487:function(n,e){var t=Object.freeze({sell:"sell",lostFound:"lostfound",inGoodHands:"ingoodhands"});e.Z=t},6774:function(n,e){e.Z={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1}}}]);
//# sourceMappingURL=88.b7b52f5b.chunk.js.map