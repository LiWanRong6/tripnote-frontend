import{bt as be,bu as N,r as k,a8 as H,bv as ye,bw as G,l as W,ab as V,K as Ae,k as K,bh as He,aB as ke,m as J,b0 as Ve,A as we,q,n as S,G as B,p as z,aO as Ke,bx as qe,t as A,x as M,v as Z,B as T,L as Be,M as Q,z as d,N as ne,aE as F,W as Ue,ar as ie,V as re,by as Xe,s as Ye,aC as Ge,bz as Je,bA as Ze,H as U,i as Se,bB as Pe,y as D,bC as Qe,bD as eo,bE as oo,O as to,bF as no,b3 as io,ak as X,aZ as le,a5 as ro,bG as lo,T as Re,a_ as so,aR as Y,as as ao,bH as co,a7 as se,bI as uo,ac as fo,aF as ho,aU as go,bJ as vo,aa as _,bK as po,ae as mo}from"./index.7a8cc0c4.js";import{I as ae,S as Co,W as xo,E as bo}from"./Upload.eb70d353.js";import{e as yo}from"./FocusDetector.e14dcf3e.js";const L=k(null);function ce(e){if(e.clientX>0||e.clientY>0)L.value={x:e.clientX,y:e.clientY};else{const{target:o}=e;if(o instanceof Element){const{left:t,top:n,width:l,height:i}=o.getBoundingClientRect();t>0||n>0?L.value={x:t+l/2,y:n+i/2}:L.value={x:0,y:0}}else L.value=null}}let E=0,de=!0;function ko(){if(!be)return N(k(null));E===0&&H("click",document,ce,!0);const e=()=>{E+=1};return de&&(de=ye())?(G(e),W(()=>{E-=1,E===0&&V("click",document,ce,!0)})):e(),N(L)}const wo=k(void 0);let j=0;function ue(){wo.value=Date.now()}let fe=!0;function Bo(e){if(!be)return N(k(!1));const o=k(!1);let t=null;function n(){t!==null&&window.clearTimeout(t)}function l(){n(),o.value=!0,t=window.setTimeout(()=>{o.value=!1},e)}j===0&&H("click",window,ue,!0);const i=()=>{j+=1,H("click",window,l,!0)};return fe&&(fe=ye())?(G(i),W(()=>{j-=1,j===0&&V("click",window,ue,!0),V("click",window,l,!0),n()})):i(),N(o)}let O=0,he="",ge="",ve="",pe="";const me=k("0px");function So(e){if(typeof document>"u")return;const o=document.documentElement;let t,n=!1;const l=()=>{o.style.marginRight=he,o.style.overflow=ge,o.style.overflowX=ve,o.style.overflowY=pe,me.value="0px"};Ae(()=>{t=K(e,i=>{if(i){if(!O){const c=window.innerWidth-o.offsetWidth;c>0&&(he=o.style.marginRight,o.style.marginRight=`${c}px`,me.value=`${c}px`),ge=o.style.overflow,ve=o.style.overflowX,pe=o.style.overflowY,o.style.overflow="hidden",o.style.overflowX="hidden",o.style.overflowY="hidden"}n=!0,O++}else O--,O||l(),n=!1},{immediate:!0})}),W(()=>{t==null||t(),n&&(O--,O||l(),n=!1)})}const ee=k(!1),Ce=()=>{ee.value=!0},xe=()=>{ee.value=!1};let I=0;const Po=()=>(He&&(G(()=>{I||(window.addEventListener("compositionstart",Ce),window.addEventListener("compositionend",xe)),I++}),W(()=>{I<=1?(window.removeEventListener("compositionstart",Ce),window.removeEventListener("compositionend",xe),I=0):I--})),ee),Ro={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},zo=e=>{const{textColor1:o,textColor2:t,modalColor:n,closeIconColor:l,closeIconColorHover:i,closeIconColorPressed:c,closeColorHover:h,closeColorPressed:p,infoColor:m,successColor:v,warningColor:s,errorColor:f,primaryColor:b,dividerColor:y,borderRadius:x,fontWeightStrong:u,lineHeight:C,fontSize:g}=e;return Object.assign(Object.assign({},Ro),{fontSize:g,lineHeight:C,border:`1px solid ${y}`,titleTextColor:o,textColor:t,color:n,closeColorHover:h,closeColorPressed:p,closeIconColor:l,closeIconColorHover:i,closeIconColorPressed:c,closeBorderRadius:x,iconColor:b,iconColorInfo:m,iconColorSuccess:v,iconColorWarning:s,iconColorError:f,borderRadius:x,titleFontWeight:u})},To=ke({name:"Dialog",common:J,peers:{Button:Ve},self:zo}),ze=To,oe={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},$o=we(oe),Fo=q([S("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[B("icon",{color:"var(--n-icon-color)"}),z("bordered",{border:"var(--n-border)"}),z("icon-top",[B("close",{margin:"var(--n-close-margin)"}),B("icon",{margin:"var(--n-icon-margin)"}),B("content",{textAlign:"center"}),B("title",{justifyContent:"center"}),B("action",{justifyContent:"center"})]),z("icon-left",[B("icon",{margin:"var(--n-icon-margin)"}),z("closable",[B("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),B("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),B("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[z("last","margin-bottom: 0;")]),B("action",`
 display: flex;
 justify-content: flex-end;
 `,[q("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),B("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),B("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),S("dialog-icon-container",{display:"flex",justifyContent:"center"})]),Ke(S("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),S("dialog",[qe(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Oo={default:()=>d(ae,null),info:()=>d(ae,null),success:()=>d(Co,null),warning:()=>d(xo,null),error:()=>d(bo,null)},Mo=A({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},M.props),oe),setup(e){const{mergedComponentPropsRef:o,mergedClsPrefixRef:t,inlineThemeDisabled:n}=Z(e),l=T(()=>{var s,f;const{iconPlacement:b}=e;return b||((f=(s=o==null?void 0:o.value)===null||s===void 0?void 0:s.Dialog)===null||f===void 0?void 0:f.iconPlacement)||"left"});function i(s){const{onPositiveClick:f}=e;f&&f(s)}function c(s){const{onNegativeClick:f}=e;f&&f(s)}function h(){const{onClose:s}=e;s&&s()}const p=M("Dialog","-dialog",Fo,ze,e,t),m=T(()=>{const{type:s}=e,f=l.value,{common:{cubicBezierEaseInOut:b},self:{fontSize:y,lineHeight:x,border:u,titleTextColor:C,textColor:g,color:P,closeBorderRadius:w,closeColorHover:r,closeColorPressed:a,closeIconColor:R,closeIconColorHover:$,closeIconColorPressed:Te,closeIconSize:$e,borderRadius:Fe,titleFontWeight:Oe,titleFontSize:Me,padding:Ie,iconSize:Le,actionSpace:_e,contentMargin:Ee,closeSize:je,[f==="top"?"iconMarginIconTop":"iconMargin"]:De,[f==="top"?"closeMarginIconTop":"closeMargin"]:Ne,[Be("iconColor",s)]:We}}=p.value;return{"--n-font-size":y,"--n-icon-color":We,"--n-bezier":b,"--n-close-margin":Ne,"--n-icon-margin":De,"--n-icon-size":Le,"--n-close-size":je,"--n-close-icon-size":$e,"--n-close-border-radius":w,"--n-close-color-hover":r,"--n-close-color-pressed":a,"--n-close-icon-color":R,"--n-close-icon-color-hover":$,"--n-close-icon-color-pressed":Te,"--n-color":P,"--n-text-color":g,"--n-border-radius":Fe,"--n-padding":Ie,"--n-line-height":x,"--n-border":u,"--n-content-margin":Ee,"--n-title-font-size":Me,"--n-title-font-weight":Oe,"--n-title-text-color":C,"--n-action-space":_e}}),v=n?Q("dialog",T(()=>`${e.type[0]}${l.value[0]}`),m,e):void 0;return{mergedClsPrefix:t,mergedIconPlacement:l,mergedTheme:p,handlePositiveClick:i,handleNegativeClick:c,handleCloseClick:h,cssVars:n?void 0:m,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var e;const{bordered:o,mergedIconPlacement:t,cssVars:n,closable:l,showIcon:i,title:c,content:h,action:p,negativeText:m,positiveText:v,positiveButtonProps:s,negativeButtonProps:f,handlePositiveClick:b,handleNegativeClick:y,mergedTheme:x,loading:u,type:C,mergedClsPrefix:g}=this;(e=this.onRender)===null||e===void 0||e.call(this);const P=i?d(Ue,{clsPrefix:g,class:`${g}-dialog__icon`},{default:()=>ne(this.$slots.icon,r=>r||(this.icon?F(this.icon):Oo[this.type]()))}):null,w=ne(this.$slots.action,r=>r||v||m||p?d("div",{class:`${g}-dialog__action`},r||(p?[F(p)]:[this.negativeText&&d(ie,Object.assign({theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,ghost:!0,size:"small",onClick:y},f),{default:()=>F(this.negativeText)}),this.positiveText&&d(ie,Object.assign({theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,size:"small",type:C==="default"?"primary":C,disabled:u,loading:u,onClick:b},s),{default:()=>F(this.positiveText)})])):null);return d("div",{class:[`${g}-dialog`,this.themeClass,this.closable&&`${g}-dialog--closable`,`${g}-dialog--icon-${t}`,o&&`${g}-dialog--bordered`],style:n,role:"dialog"},l?d(Xe,{clsPrefix:g,class:`${g}-dialog__close`,onClick:this.handleCloseClick}):null,i&&t==="top"?d("div",{class:`${g}-dialog-icon-container`},P):null,d("div",{class:`${g}-dialog__title`},i&&t==="left"?P:null,re(this.$slots.header,()=>[F(c)])),d("div",{class:[`${g}-dialog__content`,w?"":`${g}-dialog__content--last`]},re(this.$slots.default,()=>[F(h)])),w)}}),Io=Ye("n-dialog-provider"),Lo=e=>{const{modalColor:o,textColor2:t,boxShadow3:n}=e;return{color:o,textColor:t,boxShadow:n}},_o=ke({name:"Modal",common:J,peers:{Scrollbar:Ge,Dialog:ze,Card:Je},self:Lo}),Eo=_o,te=Object.assign(Object.assign({},Ze),oe),jo=we(te),Do=A({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},te),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const o=k(null),t=k(null),n=k(e.show),l=k(null),i=k(null);K(U(e,"show"),u=>{u&&(n.value=!0)}),So(T(()=>e.blockScroll&&n.value));const c=Se(Pe);function h(){if(c.transformOriginRef.value==="center")return"";const{value:u}=l,{value:C}=i;if(u===null||C===null)return"";if(t.value){const g=t.value.containerScrollTop;return`${u}px ${C+g}px`}return""}function p(u){if(c.transformOriginRef.value==="center")return;const C=c.getMousePosition();if(!C||!t.value)return;const g=t.value.containerScrollTop,{offsetLeft:P,offsetTop:w}=u;if(C){const r=C.y,a=C.x;l.value=-(P-a),i.value=-(w-r-g)}u.style.transformOrigin=h()}function m(u){se(()=>{p(u)})}function v(u){u.style.transformOrigin=h(),e.onBeforeLeave()}function s(){n.value=!1,l.value=null,i.value=null,e.onAfterLeave()}function f(){const{onClose:u}=e;u&&u()}function b(){e.onNegativeClick()}function y(){e.onPositiveClick()}const x=k(null);return K(x,u=>{u&&se(()=>{const C=u.el;C&&o.value!==C&&(o.value=C)})}),D(uo,o),D(Qe,null),D(eo,null),{mergedTheme:c.mergedThemeRef,appear:c.appearRef,isMounted:c.isMountedRef,mergedClsPrefix:c.mergedClsPrefixRef,bodyRef:o,scrollbarRef:t,displayed:n,childNodeRef:x,handlePositiveClick:y,handleNegativeClick:b,handleCloseClick:f,handleAfterLeave:s,handleBeforeLeave:v,handleEnter:m}},render(){const{$slots:e,$attrs:o,handleEnter:t,handleAfterLeave:n,handleBeforeLeave:l,preset:i,mergedClsPrefix:c}=this;let h=null;if(!i){if(h=oo(e),!h){to("modal","default slot is empty");return}h=no(h),h.props=io({class:`${c}-modal`},o,h.props||{})}return this.displayDirective==="show"||this.displayed||this.show?X(d("div",{role:"none",class:`${c}-modal-body-wrapper`},d(ro,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${c}-modal-scroll-content`},{default:()=>{var p;return[(p=this.renderMask)===null||p===void 0?void 0:p.call(this),d(lo,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var m;return d(Re,{name:"fade-in-scale-up-transition",appear:(m=this.appear)!==null&&m!==void 0?m:this.isMounted,onEnter:t,onAfterEnter:this.onAfterEnter,onAfterLeave:n,onBeforeLeave:l},{default:()=>{const v=[[le,this.show]],{onClickoutside:s}=this;return s&&v.push([so,this.onClickoutside,void 0,{capture:!0}]),X(this.preset==="confirm"||this.preset==="dialog"?d(Mo,Object.assign({},this.$attrs,{class:[`${c}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Y(this.$props,$o),{"aria-modal":"true"}),e):this.preset==="card"?d(ao,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${c}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Y(this.$props,co),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=h,v)}})}})]}})),[[le,this.displayDirective==="if"||this.displayed||this.show]]):null}}),No=q([S("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),S("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[fo({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),S("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[S("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),S("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[ho({duration:".25s",enterScale:".5"})])]),Wo=Object.assign(Object.assign(Object.assign(Object.assign({},M.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),te),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),Jo=A({name:"Modal",inheritAttrs:!1,props:Wo,setup(e){const o=k(null),{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:l}=Z(e),i=M("Modal","-modal",No,Eo,e,t),c=Bo(64),h=ko(),p=go(),m=e.internalDialog?Se(Io,null):null,v=Po();function s(r){const{onUpdateShow:a,"onUpdate:show":R,onHide:$}=e;a&&_(a,r),R&&_(R,r),$&&!r&&$(r)}function f(){const{onClose:r}=e;r?Promise.resolve(r()).then(a=>{a!==!1&&s(!1)}):s(!1)}function b(){const{onPositiveClick:r}=e;r?Promise.resolve(r()).then(a=>{a!==!1&&s(!1)}):s(!1)}function y(){const{onNegativeClick:r}=e;r?Promise.resolve(r()).then(a=>{a!==!1&&s(!1)}):s(!1)}function x(){const{onBeforeLeave:r,onBeforeHide:a}=e;r&&_(r),a&&a()}function u(){const{onAfterLeave:r,onAfterHide:a}=e;r&&_(r),a&&a()}function C(r){var a;const{onMaskClick:R}=e;R&&R(r),e.maskClosable&&!((a=o.value)===null||a===void 0)&&a.contains(r.target)&&s(!1)}function g(r){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&yo(r)&&!v.value&&s(!1)}D(Pe,{getMousePosition:()=>{if(m){const{clickedRef:r,clickPositionRef:a}=m;if(r.value&&a.value)return a.value}return c.value?h.value:null},mergedClsPrefixRef:t,mergedThemeRef:i,isMountedRef:p,appearRef:U(e,"internalAppear"),transformOriginRef:U(e,"transformOrigin")});const P=T(()=>{const{common:{cubicBezierEaseOut:r},self:{boxShadow:a,color:R,textColor:$}}=i.value;return{"--n-bezier-ease-out":r,"--n-box-shadow":a,"--n-color":R,"--n-text-color":$}}),w=l?Q("theme-class",void 0,P,e):void 0;return{mergedClsPrefix:t,namespace:n,isMounted:p,containerRef:o,presetProps:T(()=>Y(e,jo)),handleEsc:g,handleAfterLeave:u,handleClickoutside:C,handleBeforeLeave:x,doUpdateShow:s,handleNegativeClick:y,handlePositiveClick:b,handleCloseClick:f,cssVars:l?void 0:P,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:e}=this;return d(vo,{to:this.to,show:this.show},{default:()=>{var o;(o=this.onRender)===null||o===void 0||o.call(this);const{unstableShowMask:t}=this;return X(d("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},d(Do,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:t?void 0:this.handleClickoutside,renderMask:t?()=>{var n;return d(Re,{name:"fade-in-transition",key:"mask",appear:(n=this.internalAppear)!==null&&n!==void 0?n:this.isMounted},{default:()=>this.show?d("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[po,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Ao={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},Ho=e=>{const{primaryColor:o,textColor2:t,borderColor:n,lineHeight:l,fontSize:i,borderRadiusSmall:c,dividerColor:h,fontWeightStrong:p,textColor1:m,textColor3:v,infoColor:s,warningColor:f,errorColor:b,successColor:y,codeColor:x}=e;return Object.assign(Object.assign({},Ao),{aTextColor:o,blockquoteTextColor:t,blockquotePrefixColor:n,blockquoteLineHeight:l,blockquoteFontSize:i,codeBorderRadius:c,liTextColor:t,liLineHeight:l,liFontSize:i,hrColor:h,headerFontWeight:p,headerTextColor:m,pTextColor:t,pTextColor1Depth:m,pTextColor2Depth:t,pTextColor3Depth:v,pLineHeight:l,pFontSize:i,headerBarColor:o,headerBarColorPrimary:o,headerBarColorInfo:s,headerBarColorError:b,headerBarColorWarning:f,headerBarColorSuccess:y,textColor:t,textColor1Depth:m,textColor2Depth:t,textColor3Depth:v,textColorPrimary:o,textColorInfo:s,textColorSuccess:y,textColorWarning:f,textColorError:b,codeTextColor:t,codeColor:x,codeBorder:"1px solid #0000"})},Vo={name:"Typography",common:J,self:Ho},Ko=Vo,qo=S("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[z("strong",`
 font-weight: var(--n-font-weight-strong);
 `),z("italic",{fontStyle:"italic"}),z("underline",{textDecoration:"underline"}),z("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),Uo=Object.assign(Object.assign({},M.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Zo=A({name:"Text",props:Uo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=Z(e),n=M("Typography","-text",qo,Ko,e,o),l=T(()=>{const{depth:c,type:h}=e,p=h==="default"?c===void 0?"textColor":`textColor${c}Depth`:Be("textColor",h),{common:{fontWeightStrong:m,fontFamilyMono:v,cubicBezierEaseInOut:s},self:{codeTextColor:f,codeBorderRadius:b,codeColor:y,codeBorder:x,[p]:u}}=n.value;return{"--n-bezier":s,"--n-text-color":u,"--n-font-weight-strong":m,"--n-font-famliy-mono":v,"--n-code-border-radius":b,"--n-code-text-color":f,"--n-code-color":y,"--n-code-border":x}}),i=t?Q("text",T(()=>`${e.type[0]}${e.depth||""}`),l,e):void 0;return{mergedClsPrefix:o,compitableTag:mo(e,["as","tag"]),cssVars:t?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,o,t;const{mergedClsPrefix:n}=this;(e=this.onRender)===null||e===void 0||e.call(this);const l=[`${n}-text`,this.themeClass,{[`${n}-text--code`]:this.code,[`${n}-text--delete`]:this.delete,[`${n}-text--strong`]:this.strong,[`${n}-text--italic`]:this.italic,[`${n}-text--underline`]:this.underline}],i=(t=(o=this.$slots).default)===null||t===void 0?void 0:t.call(o);return this.code?d("code",{class:l,style:this.cssVars},this.delete?d("del",null,i):i):this.delete?d("del",{class:l,style:this.cssVars},i):d(this.compitableTag||"span",{class:l,style:this.cssVars},i)}});export{Jo as _,Zo as a};