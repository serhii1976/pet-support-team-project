"use strict";(self.webpackChunkpet_support_team_project_8=self.webpackChunkpet_support_team_project_8||[]).push([[88],{8765:function(n,e,t){t.d(e,{Z:function(){return d}});var o,i=t(5705),r=t(168),a=t(7691),s=t(1607),l=a.ZP.div(o||(o=(0,r.Z)(["\n  padding-top: 5px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  right: 50%;\n  transform: translateX(50%);\n  font-family: ",";\n  font-size: ",";\n  text-align: center;\n  color: #e00e0e;\n\n  @media screen and (min-width: 768px) {\n    font-size: 17px;\n  }\n"])),s.Z.fonts.manrope,s.Z.fontSizes.s),c=t(3329),d=function(n){var e=n.name;return(0,c.jsx)(i.Bc,{name:e,render:function(n){return(0,c.jsx)(l,{children:n})}})}},2373:function(n,e,t){t.d(e,{Z:function(){return h}});var o,i,r,a=t(2791),s=t(168),l=t(7691),c={Backdrop:l.ZP.div(o||(o=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(17, 17, 17, 0.6);\n  position: fixed;\n  z-index: 200;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n  opacity: ",";\n  pointer-events: ",";\n  transition: 0.5s;\n"])),(function(n){return n.active?1:0}),(function(n){return n.active?"all":"none"})),Content:l.ZP.div(i||(i=(0,s.Z)(["\n  border-radius: 40px;\n  background: ",";\n  transform: ",";\n  transition: 0.4s all;\n  @media "," {\n    border-radius: 20px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.active?"scale(1)":"scale(0.5)"}),(function(n){return n.theme.media.mobile})),CloseBtn:l.ZP.div(r||(r=(0,s.Z)(["\n  position: fixed;\n  cursor: pointer;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  top: 16px;\n  right: 16px;\n  background-color: ",";\n  border: none;\n  border-radius: ",";\n  padding: 2px;\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.radius.round}))},d=t(71),p=t(3329),h=function(n){var e=n.active,t=n.setActive,o=n.children,i=c.Backdrop,r=c.Content,s=c.CloseBtn,l=(0,a.useCallback)((function(n){"Escape"===n.key&&t(!1)}),[t]);return(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"",document.addEventListener("keydown",l),function(){return document.removeEventListener("keydown",l)}})),(0,p.jsx)(i,{active:e,onClick:function(){return t(!1)},children:(0,p.jsxs)(r,{active:e,onClick:function(n){return n.stopPropagation()},children:[(0,p.jsx)(s,{onClick:function(){return t(!1)},children:(0,p.jsx)(d.bjh,{size:25})}),o]})})}},716:function(n,e,t){t.d(e,{Z:function(){return W}});var o,i,r,a,s,l,c,d=t(168),p=t(7691),h=t(1607),u=t(8820),m=t(5705),x=p.ZP.div(o||(o=(0,d.Z)(["\ndisplay: flex;\njustify-content: center;\n\n@media screen and (",") {\nmargin-top: 28px;\nmargin-bottom: 28px;\n}\nmargin-bottom: 40px;\nmargin-top: 40px;\n"])),h.Z.media.mobile),f=(0,p.ZP)(m.l0)(i||(i=(0,d.Z)(["\nposition: relative;\ndisplay: inline-block;\n\n@media screen and (",") {\nwidth: 280px;\n};\n\nwidth: 608px;\n"])),h.Z.media.mobile),g=(0,p.ZP)(m.gN)(r||(r=(0,d.Z)(["\n@media screen and (",") {\nheight: 40px;\nfont-size: ",";\nline-height: 1.375;\npadding: 9px 0 9px 12px;\npadding-right:  calc(5% + 20px)\n};\nwidth: 100%;\nheight: 44px;\n\n@media screen and (",") {\nborder-radius: 40px;\nline-height: 1.35;\n};\n\n@media screen and (",") {\nline-height: 1.2;\n};\n\nbackground: ",";\n\nbox-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\nborder: ",";\nborder-radius: 20px;\n\npadding: 8px 0 8px 20px;\npadding-right: calc(3% + 24px);\n\ncolor: #535353;\nfont-family: ",";\nfont-weight: ",";\nfont-size: 20px;\nletter-spacing: 0.04em;\noutline: none;\n\n&:focus {\n    outline: 1px solid rgba(245, 146, 86, 0.5);\n\n   \n}\n"])),h.Z.media.mobile,h.Z.fontSizes.m,h.Z.media.tablet,h.Z.media.desktop,h.Z.colors.white,h.Z.borders.none,h.Z.fonts.manrope,h.Z.fontWeights.normal),b=p.ZP.button(a||(a=(0,d.Z)(["\ndisplay: ",";\ncursor: pointer;\nposition: absolute;\ntop: 50%;\nright: 0;\npadding: 0;\npadding-right: 3%;\ntransform: translate(0, -50%);\n\n@media screen and (",") {\nheight: 40px;\npadding-right: 5%;\n};\n\nheight: 44px;\n\nbackground: transparent;\n\nborder: ",";\nborder-top-right-radius: 20px;\nborder-bottom-right-radius: 20px;\n"])),(function(n){return n.exist?"none":"block"}),h.Z.media.mobile,h.Z.borders.none),Z=p.ZP.button(s||(s=(0,d.Z)(["\ndisplay: ",";\ncursor: pointer;\nposition: absolute;\ntop: 50%;\nright: 0;\npadding: 0;\npadding-right: 3%;\ntransform: translate(0, -50%);\n\n@media screen and (",") {\nheight: 40px;\npadding-right: 5%;\n};\nheight: 44px;\nbackground: transparent;\n\nborder: ",";\nborder-top-right-radius: 20px;\nborder-bottom-right-radius: 20px;\n  "])),(function(n){return n.exist?"block":"none"}),h.Z.media.mobile,h.Z.borders.none),j={StyledForm:f,Input:g,SearchBtn:b,SearchBarContainer:x,MugnifyingGlass:(0,p.ZP)(u.RB5)(l||(l=(0,d.Z)(["\ndisplay: block;\n@media screen and (",") {\nwidth: 20px;\nheight: 20px;\n }\n\n  width: 24px; \n  height: 24px;"])),h.Z.media.mobile),CrissCross:(0,p.ZP)(u.SV5)(c||(c=(0,d.Z)(["\ndisplay: block;\n @media screen and (",") {\nwidth: 20px;\nheight: 20px;\n }\n\n  width: 24px; \n  height: 24px;\n"])),h.Z.media.mobile),ClearBtn:Z},y=t(9434),v=t(2242),w=t(2507),k=t(8765),C=t(2791),S=t(1724),P=t(3329),F=j.StyledForm,z=j.Input,B=j.SearchBtn,T=j.SearchBarContainer,L=j.MugnifyingGlass,I=j.CrissCross,A=j.ClearBtn,O=w.Z.selectSearchState,W=function(){var n=(0,y.I0)(),e=(0,y.v9)(O);(0,C.useEffect)((function(){n((0,v.q)(""))}),[n]);var t=function(e){var t=e.target.value;n((0,v.q)(t))},o=function(){n((0,v.q)(""))},i=S.Ry().shape({search:S.Z_().required("Value required")});return(0,P.jsx)(T,{children:(0,P.jsx)(m.J9,{initialValues:{search:e},validationSchema:i,validateOnChange:!0,enableReinitialize:!0,validateOnBlur:!1,children:function(n){var i=n.errors;return(0,P.jsxs)(F,{children:[(0,P.jsx)(z,{type:"text",value:e,name:"search",placeholder:"Search",onChange:t}),i.search?(0,P.jsx)(k.Z,{name:"search"}):null,(0,P.jsx)(B,{exist:e,type:"submit",children:(0,P.jsx)(L,{})}),(0,P.jsx)(A,{type:"button",onClick:o,exist:e,children:(0,P.jsx)(I,{})})]})}})})}},2088:function(n,e,t){t.r(e),t.d(e,{default:function(){return Gn}});var o,i,r,a,s,l,c,d,p,h,u,m,x,f,g,b,Z,j,y,v,w,k,C,S,P,F=t(716),z=t(9439),B=t(2791),T=t(2373),L=t(5705),I=t(168),A=t(7691),O=A.ZP.div(o||(o=(0,I.Z)(["\n  padding: 40px 80px;\n  width: 100%;\n  height: 100%;\n  height: 95vh;\n  overflow: hidden;\n  overflow-y: auto;\n  @media "," {\n    padding: 20px 40px;\n  }\n"])),(function(n){return n.theme.media.mobile})),W=(0,A.ZP)(L.l0)(i||(i=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  @media "," {\n    gap: 16px;\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),M=A.ZP.h1(r||(r=(0,I.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 36px;\n  color: ",";\n  line-height: 49px;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 40px;\n  @media "," {\n    margin: 28px;\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile})),N=A.ZP.div(a||(a=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 12px;\n  @media "," {\n    width: 100%;\n  }\n"])),(function(n){return n.theme.media.mobile})),_=A.ZP.label(s||(s=(0,I.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.ml})),q={Container:O,Forma:W,Title:M,Input:(0,A.ZP)(L.gN)(l||(l=(0,I.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  text-align: flex-start;\n  justify-content: start;\n  align-items: start;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  letter-spacing: 0.04em;\n  background-color: ",";\n  color: ",";\n  padding: 11px 14px 10px 14px;\n  outline: 1px solid ",";\n  border: none;\n  border-radius: 40px;\n  cursor: pointer;\n  carent-color: ",";\n  transition: all 100ms ease-in;\n\n  @media "," {\n    height: 48px;\n    font-size: 20px;\n    padding: 11px 14px 10px 32px;\n    background-color: ",";\n  }\n\n  &::placeholder {\n    font-family: ",";\n    font-weight: 400;\n    font-size: ",";\n    line-height: 1.35;\n    letter-spacing: 0.04em;\n    color: rgba(17, 17, 17, 0.6);\n\n    @media "," {\n      font-size: 18px;\n      line-height: 1.38;\n      width: 100%;\n    }\n  }\n\n  &::-ms-reveal {\n    display: none;\n  }\n\n  &:focus,\n  &:hover {\n    outline: 2px solid ",";\n\n    @media screen and (min-width: 768px) {\n      outline-width: 3px;\n    }\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.colors.accent})),Label:_,InputBox:N,BtnBox:A.ZP.div(c||(c=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 12px;\n  @media "," {\n    flex-direction: column;\n    gap: 12px;\n    width: 100%;\n    margin: 0;\n    align-items: center;\n    text-align: center;\n  }\n"])),(function(n){return n.theme.media.mobile})),Btn:A.ZP.button(d||(d=(0,I.Z)(["\n  border: ",";\n  border-radius: ",";\n  width: 180px;\n  padding: 10px 28px;\n  font-family: ",";\n  font-size: 20px;\n  color: ",";\n  background-color: ",";\n  letter-spacing: 0.07em;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n  @media "," {\n    margin: ","px;\n    font-size: 20px;\n  }\n\n  @media "," {\n    margin-top: ","px;\n  }\n\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.borders.box}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),AddPhoto:A.ZP.div(p||(p=(0,I.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  width: 182px;\n  height: 182px;\n  background-color: ",";\n  border-radius: 40px;\n"])),(function(n){return n.theme.colors.bg})),CategoriesBox:A.ZP.ul(h||(h=(0,I.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  width: 448px;\n  margin-bottom: 28px;\n  @media "," {\n    flex-wrap: wrap;\n    gap: 8px;\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),Option:A.ZP.button(u||(u=(0,I.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  text-align: center;\n  height: 47px;\n  letter-spacing: 0.04em;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n    line-height: 1.357;\n    padding: 8px 28px;\n  }\n\n  font-size: 20px;\n  line-height: 1.35;\n\n  padding: 10px 28px;\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: 40px;\n  transition: background-color 200ms, color 200ms;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n  cursor: pointer;\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),TextBox:A.ZP.div(m||(m=(0,I.Z)(["\n  width: 443px;\n  text-align: center;\n  margin-bottom: 28px;\n  @media "," {\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),Text:A.ZP.span(x||(x=(0,I.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  text-align: center;\n  letter-spacing: -0.01em;\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal})),LabelMale:A.ZP.label(f||(f=(0,I.Z)(["\n  display: grid;\n  gap: 12;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 20px;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.accent}))},E=t(8820),V=t(8014),H=t(3329),G=q.Forma,R=q.Input,J=q.Label,D=q.InputBox,U=q.BtnBox,X=q.Btn,Y=q.AddPhoto,K=q.CategoriesBox,Q=q.Option,$=q.Text,nn=q.LabelMale,en=q.TextBox,tn={FirstStepAdd:function(n){var e=n.state,t=n.handleSubmit;return(0,H.jsxs)("div",{children:[(0,H.jsx)(en,{children:(0,H.jsxs)($,{children:["Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"," "]})}),(0,H.jsxs)(K,{children:[(0,H.jsx)("li",{children:(0,H.jsx)(Q,{type:"button",children:"lost/found"})}),(0,H.jsx)("li",{children:(0,H.jsx)(Q,{type:"button",children:"in good hands"})}),(0,H.jsx)("li",{children:(0,H.jsx)(Q,{type:"button",children:"sell"})})]}),(0,H.jsx)(L.J9,{initialValues:e,onSubmit:t,children:(0,H.jsxs)(G,{autoComplete:"off",children:[(0,H.jsxs)(D,{children:[(0,H.jsxs)(J,{htmlFor:"title",children:["Tittle of ad ",(0,H.jsx)("span",{style:{color:"#F59256"},children:"*"})]}),(0,H.jsx)(R,{type:"text",name:"title",placeholder:"Type name"})]}),(0,H.jsxs)(D,{children:[(0,H.jsx)(J,{htmlFor:"name",children:"Name pet"}),(0,H.jsx)(R,{type:"text",name:"name",placeholder:"Type name pet"})]}),(0,H.jsxs)(D,{children:[(0,H.jsx)(J,{htmlFor:"date",children:"Date of birth"}),(0,H.jsx)(R,{type:"text",name:"date",placeholder:"Type date of birth"})]}),(0,H.jsxs)(D,{children:[(0,H.jsx)(J,{htmlFor:"breed",children:"Breed"}),(0,H.jsx)(R,{type:"text",name:"breed",placeholder:"Type breed"})]}),(0,H.jsxs)(U,{children:[(0,H.jsx)(X,{type:"submit",children:"Cancel"}),(0,H.jsx)(X,{type:"submit",children:"Next"})]})]})})]})},SecondStepAdd:function(n){var e=n.state,t=n.handleSubmit,o=(n.setState,n.setIsFirstStepComplete);return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(L.J9,{initialValues:e,onSubmit:t,children:(0,H.jsxs)(G,{autoComplete:"off",children:[(0,H.jsxs)(D,{children:[(0,H.jsxs)(J,{htmlFor:"sex",children:["The sex",(0,H.jsx)("span",{style:{color:"#F59256"},children:"*"}),":"]}),(0,H.jsxs)("div",{style:{display:"flex",gap:80},children:[(0,H.jsxs)(nn,{htmlFor:"sex",style:{position:"relative"},children:[(0,H.jsx)(V.y4U,{size:60,style:{position:"absolute",color:"23C2EF"}}),(0,H.jsx)(L.gN,{type:"radio",name:"sex",value:"male",style:{width:60,height:60,opacity:0}}),"Male"]}),(0,H.jsxs)(nn,{htmlFor:"sex",style:{position:"relative"},children:[(0,H.jsx)(V.YgV,{size:60,style:{position:"absolute",color:"FF8787"}}),(0,H.jsx)(L.gN,{type:"radio",name:"sex",value:"female",style:{width:60,height:60,opacity:0}}),"Female"]})]})]}),(0,H.jsxs)(D,{children:[(0,H.jsxs)(J,{htmlFor:"location",children:["Location",(0,H.jsx)("span",{style:{color:"#F59256"},children:"*"}),":"]}),(0,H.jsx)(R,{type:"text",name:"location",placeholder:"Type location"})]}),(0,H.jsxs)(D,{children:[(0,H.jsxs)(J,{htmlFor:"price",children:["Price",(0,H.jsx)("span",{style:{color:"#F59256"},children:"*"}),":"]}),(0,H.jsx)(R,{type:"text",name:"price",placeholder:"Type price"})]}),(0,H.jsxs)(D,{style:{display:"flex",position:"relative",marginBottom:28},children:[(0,H.jsx)(J,{htmlFor:"photo",children:"Load the pet\u2019s image:"}),(0,H.jsxs)("div",{style:{width:140,height:140},children:[(0,H.jsx)(Y,{children:(0,H.jsx)(E.Lfi,{size:71,color:"rgba(17, 17, 17, 0.6"})}),(0,H.jsx)(R,{type:"file",name:"photo",accept:".png, .jpg, .jpeg",style:{width:140,height:140,opacity:0}})]})]}),(0,H.jsxs)(D,{children:[(0,H.jsx)(J,{htmlFor:"coments",children:"Comments"}),(0,H.jsx)(R,{component:"textarea",type:"text",name:"coments",placeholder:"Type comments",style:{height:116,borderRadius:20,display:"block"}})]}),(0,H.jsxs)(U,{children:[(0,H.jsx)(X,{type:"submit",onClick:function(){o(!1)},children:"Back"}),(0,H.jsx)(X,{type:"submit",children:"Done"})]})]})})})}},on=tn.FirstStepAdd,rn=tn.SecondStepAdd,an=q.Container,sn=q.Title,ln={title:"",name:"",date:"",breed:""},cn={sex:"",location:"",price:"",photo:"",coments:""},dn=function(){var n=(0,B.useState)(ln),e=(0,z.Z)(n,2),t=e[0],o=e[1],i=(0,B.useState)(cn),r=(0,z.Z)(i,2),a=r[0],s=r[1],l=(0,B.useState)(!1),c=(0,z.Z)(l,2),d=c[0],p=c[1];return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(an,{children:[(0,H.jsx)(sn,{children:"Add pet"}),d?(0,H.jsx)(rn,{state:a,setState:s,handleSubmit:function(n){n.photo,n.coments},setIsFirstStepComplete:p}):(0,H.jsx)(on,{state:t,handleSubmit:function(n,e,t,i){o(i,n,e,t),p(!0)}})]})})},pn=t(1607),hn={MobBtn:A.ZP.button(g||(g=(0,I.Z)(["\nz-index: 10;\n@media screen and (min-width: 767px) {\n    display: none;\n}\n cursor: pointer;\nposition: fixed;\nwidth: 80px;\nheight: 80px;\nright: 20px;\nbottom: 12%;\n\nbackground: ",";\nborder-radius: 50%;\noutline: none;\nborder: none;\nbox-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n\nfont-family: ",";\nfont-weight: ",";\nfont-size: ",";\nline-height:1.33;\n\ncolor: ",";\n\ntransition: background-color 200ms ease-in-out;\n\n&:hover, &:active {\n    background-color: #FF6101\n}"])),pn.Z.colors.accent,pn.Z.fonts.manrope,pn.Z.fontWeights.normal,pn.Z.fontSizes.xs,pn.Z.colors.white),Text:A.ZP.span(b||(b=(0,I.Z)(["\ndisplay: flex;\nalign-items: center;\nfont-family: ",";\nfont-weight: ",";\nfont-size: 20px;\nline-height: 1.35;\n\ncolor: ",";\n\n@media screen and (",") {\n    display: none;\n}"])),pn.Z.fonts.manrope,pn.Z.fontWeights.normal,pn.Z.colors.black,pn.Z.media.mobile),Btn:A.ZP.button(Z||(Z=(0,I.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 44px;\nheight: 44px;\npadding: 0;\nmargin-left: 12px;\nbackground: ",";\nborder-radius: 50%;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: background-color 200ms ease-in-out;\n\n&:hover, &:active {\n    background-color: #FF6101\n}"])),pn.Z.colors.accent),MobCross:(0,A.ZP)(E.Lfi)(j||(j=(0,I.Z)(["\ndisplay: block;\nmargin: 0 auto;\nwidth: 32px;\nheight: 32px;\nfill: ",";"])),pn.Z.colors.white),Cross:(0,A.ZP)(E.Lfi)(y||(y=(0,I.Z)(["\ndisplay: block;\nwidth: 24px;\nheight: 24px;\nfill: ",";"])),pn.Z.colors.white)},un=t(9434),mn=t(4289),xn=t(5985),fn=t(6774),gn=hn.MobBtn,bn=hn.Text,Zn=hn.Btn,jn=hn.Cross,yn=hn.MobCross,vn=mn.Z.selectIsLoggedIn,wn=function(){var n=(0,B.useState)(!1),e=(0,z.Z)(n,2),t=e[0],o=e[1],i=(0,un.v9)(vn),r=function(){if(!i)return xn.Am.info("For this operation registration or login needed",fn.Z);o(!0)};return(0,H.jsxs)("div",{style:{flexShrink:0},children:[(0,H.jsx)(xn.Ix,{}),(0,H.jsxs)(gn,{type:"button",onClick:r,children:[(0,H.jsx)(yn,{})," Add pet"]}),(0,H.jsxs)(bn,{children:["Add pet",(0,H.jsx)(Zn,{type:"button",onClick:r,children:(0,H.jsx)(jn,{})})]}),(0,H.jsx)(T.Z,{active:t,setActive:o,children:(0,H.jsx)(dn,{})})]})},kn=t(1087),Cn=A.ZP.div(v||(v=(0,I.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 12px;\n"]))),Sn={Option:(0,A.ZP)(kn.OL)(w||(w=(0,I.Z)(["\nfont-family: ",";\nfont-weight: ",";\ntext-align: center;\nletter-spacing: 0.04em;\ncolor: ",";\n\n@media screen and (",") {\n    font-size: ",";\nline-height: 1.357;\npadding: 8px 28px;\n}\n\nfont-size: 20px;\nline-height: 1.35;\n\npadding: 10px 28px;\nbackground-color: ",";\nborder: 2px solid ",";\nborder-radius: 40px;\ntransition: background-color 200ms, color 200ms;\n\n&:hover, &:focus, &.active {\n    background-color: ",";\n    color: ",";\n};\ncursor: pointer;"])),pn.Z.fonts.manrope,pn.Z.fontWeights.normal,pn.Z.colors.black,pn.Z.media.mobile,pn.Z.fontSizes.s,pn.Z.colors.white,pn.Z.colors.accent,pn.Z.colors.accent,pn.Z.colors.white),Container:Cn},Pn=t(7689),Fn=t(398),zn=t(8487),Bn=Fn.Z.fetchNoticesByCategory,Tn=Fn.Z.fetchOwnNotices,Ln=Fn.Z.fetchFavorite,In=Sn.Option,An=Sn.Container,On=function(){var n=(0,Pn.s0)(),e=mn.Z.selectIsLoggedIn,t=(0,un.I0)(),o=(0,un.v9)(e);(0,B.useEffect)((function(){n("/notices/sell",{replace:!0}),t(Bn({category:zn.Z.sell}))}),[]);var i=function(n){t(Bn(n))};return(0,H.jsxs)(An,{children:[(0,H.jsx)(In,{to:"lost-found",onClick:function(){return i({category:zn.Z.lostFound})},children:"lost/found"}),(0,H.jsx)(In,{to:"for-free",onClick:function(){return i({category:zn.Z.inGoodHands})},children:"in good hands"}),(0,H.jsx)(In,{to:"sell",onClick:function(){return i({category:zn.Z.sell})},children:"sell"}),o?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(In,{to:"favorite",onClick:function(){t(Ln())},children:"favorite ads"}),(0,H.jsx)(In,{to:"own",onClick:function(){t(Tn())},children:"my ads"})]}):""]})},Wn=A.ZP.section(k||(k=(0,I.Z)(["\nbackground-color: ",";\nheight: auto;\npadding-bottom: 100px;\n@media screen and (",") {\n    padding-top: 110px;\n}\n\n@media screen and (",") {\npadding-top: 170px;\n}\n\n@media screen and (",") {\npadding-top: 152px;\npadding-bottom: 200px;\n}\n"])),pn.Z.colors.bg,pn.Z.media.mobile,pn.Z.media.tablet,pn.Z.media.desktop),Mn=A.ZP.div(C||(C=(0,I.Z)(["\nmargin: 0 auto;\n@media screen and (",") {\n   padding: 0 20px;\n   width: 320px;\n}\n\n@media screen and (",") {\npadding: 0 32px;\nwidth: 768px;\n}\n\n@media screen and (",") {\npadding: 0 16px;\nwidth: 1280px;\n}\n"])),pn.Z.media.mobile,pn.Z.media.tablet,pn.Z.media.desktop),Nn={Section:Wn,Header:A.ZP.h1(S||(S=(0,I.Z)(["\n@media screen and (",") {\n    font-size: 24px;\n}\n\nfont-family: ",";\nfont-weight: ",";\nfont-size: 48px;\nline-height: 1.375;\n\n\ntext-align: center;\n\ncolor: ",";\n"])),pn.Z.media.mobile,pn.Z.fonts.manrope,pn.Z.fontWeights.bold,pn.Z.colors.black),Container:Mn,CategoriesCont:A.ZP.div(P||(P=(0,I.Z)(["\ndisplay: flex;\njustify-content: space-between;\nmargin-left: auto;\nmargin-right: auto;\n\n@media screen and (",") {\n    margin-bottom: 30px;\n}\nmargin-bottom: 60px;"])),pn.Z.media.mobile)},_n=t(4270),qn=Nn.Section,En=Nn.Header,Vn=Nn.Container,Hn=Nn.CategoriesCont,Gn=function(){return(0,H.jsxs)(qn,{children:[(0,H.jsx)(_n.q,{children:(0,H.jsx)("title",{children:"Notices"})}),(0,H.jsxs)(Vn,{children:[(0,H.jsx)(En,{style:{textAlign:"center"},children:"Find your favorite pet"}),(0,H.jsx)(F.Z,{}),(0,H.jsxs)(Hn,{children:[(0,H.jsx)(On,{}),(0,H.jsx)(wn,{})]}),(0,H.jsx)(B.Suspense,{children:(0,H.jsx)(Pn.j3,{})})]})]})}},2507:function(n,e){var t={selectSearchState:function(n){return n.search.query}};e.Z=t},8487:function(n,e){var t=Object.freeze({sell:"sell",lostFound:"lostfound",inGoodHands:"ingoodhands"});e.Z=t},6774:function(n,e){e.Z={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1}}}]);
//# sourceMappingURL=88.ad4e1832.chunk.js.map