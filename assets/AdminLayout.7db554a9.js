import{q as O,x as c,a9 as we,k as He,be as Ae,bD as _e,aH as Z,p as J,i as F,y as x,v as V,ab as B,R as Se,ac as Re,r as Y,aK as he,bh as pe,bw as Ne,bg as Pe,aq as X,n as f,l as p,m as z,C as v,aL as G,s as ke,t as fe,a$ as ae,D as ce,aJ as de,M as Te,a0 as M,H as Me,b6 as Ee,P as Fe,ay as Oe,Q as se,o as ve,c as Ke,e as y,b as R,w as N,aD as k,aB as Le,aF as $e,b2 as Be,V as $,bE as je,U as D,bB as Ve}from"./index.12e72fe4.js";import{k as ee}from"./keysOf.2fa8476a.js";import{f as De}from"./fade-in-height-expand.cssr.001bf153.js";const Ue=O({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function qe(e,i,t,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:i,itemColorActiveHoverInverted:i,itemColorActiveCollapsedInverted:i,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:n}}const Ge=e=>{const{borderRadius:i,textColor3:t,primaryColor:n,textColor2:l,textColor1:a,fontSize:s,dividerColor:d,hoverColor:m,primaryColorHover:b}=e;return Object.assign({borderRadius:i,color:"#0000",groupTextColor:t,itemColorHover:m,itemColorActive:Z(n,{alpha:.1}),itemColorActiveHover:Z(n,{alpha:.1}),itemColorActiveCollapsed:Z(n,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:b,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:b,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:d},qe("#BBB",n,"#FFF","#AAA"))},We=we({name:"Menu",common:He,peers:{Tooltip:Ae,Dropdown:_e},self:Ge}),Je=We,Qe=J("n-layout-sider"),U=J("n-menu"),oe=J("n-submenu"),te=J("n-menu-item-group"),W=8;function re(e){const i=F(U),{props:t,mergedCollapsedRef:n}=i,l=F(oe,null),a=F(te,null),s=x(()=>t.mode==="horizontal"),d=x(()=>s.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),m=x(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),b=x(()=>{var u;return!s.value&&e.root&&n.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),_=x(()=>{if(s.value)return;const{collapsedWidth:u,indent:w,rootIndent:A}=t,{root:S,isGroup:P}=e,T=A===void 0?w:A;if(S)return n.value?u/2-m.value/2:T;if(a)return w/2+a.paddingLeftRef.value;if(l)return(P?w/2:w)+l.paddingLeftRef.value}),I=x(()=>{const{collapsedWidth:u,indent:w,rootIndent:A}=t,{value:S}=m,{root:P}=e;return s.value||!P||!n.value?W:(A===void 0?w:A)+S+W-(u+S)/2});return{dropdownPlacement:d,activeIconSize:b,maxIconSize:m,paddingLeft:_,iconMarginRight:I,NMenu:i,NSubmenu:l}}const ne={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ge=Object.assign(Object.assign({},ne),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ze=O({name:"MenuOptionGroup",props:ge,setup(e){V(oe,null);const i=re(e);V(te,{paddingLeftRef:i.paddingLeft});const{mergedClsPrefixRef:t,props:n}=F(U);return function(){const{value:l}=t,a=i.paddingLeft.value,{nodeProps:s}=n,d=s==null?void 0:s(e.tmNode.rawNode);return c("div",{class:`${l}-menu-item-group`,role:"group"},c("div",Object.assign({},d,{class:[`${l}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),B(e.title),e.extra?c(Se,null," ",B(e.extra)):null),c("div",null,e.tmNodes.map(m=>ie(m,n))))}}}),Ce=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:i}=F(U);return{menuProps:i,style:x(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:x(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:l}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:i,menuProps:{renderIcon:t,renderLabel:n,renderExtra:l,expandIcon:a}}=this,s=t?t(i.rawNode):B(this.icon);return c("div",{onClick:d=>{var m;(m=this.onClick)===null||m===void 0||m.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(i.rawNode):B(this.title),this.extra||l?c("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(i.rawNode):B(this.extra)):null),this.showArrow?c(Re,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(i.rawNode):c(Ue,null)}):null)}}),xe=Object.assign(Object.assign({},ne),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Xe=O({name:"Submenu",props:xe,setup(e){const i=re(e),{NMenu:t,NSubmenu:n}=i,{props:l,mergedCollapsedRef:a,mergedThemeRef:s}=t,d=x(()=>{const{disabled:u}=e;return n!=null&&n.mergedDisabledRef.value||l.disabled?!0:u}),m=Y(!1);V(oe,{paddingLeftRef:i.paddingLeft,mergedDisabledRef:d}),V(te,null);function b(){const{onClick:u}=e;u&&u()}function _(){d.value||(a.value||t.toggleExpand(e.internalKey),b())}function I(u){m.value=u}return{menuProps:l,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,iconMarginRight:i.iconMarginRight,dropdownPlacement:i.dropdownPlacement,dropdownShow:m,paddingLeft:i.paddingLeft,mergedDisabled:d,mergedValue:t.mergedValueRef,childActive:he(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:x(()=>l.mode==="horizontal"?!1:a.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:x(()=>!d.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:I,handleClick:_}},render(){var e;const{mergedClsPrefix:i,menuProps:{renderIcon:t,renderLabel:n}}=this,l=()=>{const{isHorizontal:s,paddingLeft:d,collapsed:m,mergedDisabled:b,maxIconSize:_,activeIconSize:I,title:u,childActive:w,icon:A,handleClick:S,menuProps:{nodeProps:P},dropdownShow:T,iconMarginRight:Q,tmNode:j,mergedClsPrefix:q}=this,K=P==null?void 0:P(j.rawNode);return c("div",Object.assign({},K,{class:[`${q}-menu-item`,K==null?void 0:K.class],role:"menuitem"}),c(Ce,{tmNode:j,paddingLeft:d,collapsed:m,disabled:b,iconMarginRight:Q,maxIconSize:_,activeIconSize:I,title:u,showArrow:!s,childActive:w,clsPrefix:q,icon:A,hover:T,onClick:S}))},a=()=>c(Ne,null,{default:()=>{const{tmNodes:s,collapsed:d}=this;return d?null:c("div",{class:`${i}-submenu-children`,role:"menu"},s.map(m=>ie(m,this.menuProps)))}});return this.root?c(pe,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>c("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):c("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),be=Object.assign(Object.assign({},ne),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ye=O({name:"MenuOption",props:be,setup(e){const i=re(e),{NSubmenu:t,NMenu:n}=i,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:s}=n,d=t?t.mergedDisabledRef:{value:!1},m=x(()=>d.value||e.disabled);function b(I){const{onClick:u}=e;u&&u(I)}function _(I){m.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),b(I))}return{mergedClsPrefix:a,dropdownPlacement:i.dropdownPlacement,paddingLeft:i.paddingLeft,iconMarginRight:i.iconMarginRight,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:he(()=>e.root&&s.value&&l.mode!=="horizontal"&&!m.value),selected:x(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:m,handleClick:_}},render(){const{mergedClsPrefix:e,mergedTheme:i,tmNode:t,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l==null?void 0:l(t.rawNode);return c("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),c(Pe,{theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):B(this.title),trigger:()=>c(Ce,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),eo=O({name:"MenuDivider",setup(){const e=F(U),{mergedClsPrefixRef:i,isHorizontalRef:t}=e;return()=>t.value?null:c("div",{class:`${i.value}-menu-divider`})}}),oo=ee(ge),to=ee(be),ro=ee(xe);function no(e){return e.type==="divider"||e.type==="render"}function io(e){return e.type==="divider"}function ie(e,i){const{rawNode:t}=e;if(no(t))return io(t)?c(eo,Object.assign({key:e.key},t.props)):void 0;const{labelField:n}=i,{key:l,level:a,isGroup:s}=e,d=Object.assign(Object.assign({},t),{title:t.title||t[n],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?c(Ze,X(d,oo,{tmNode:e,tmNodes:e.children,key:l})):c(Xe,X(d,ro,{key:l,rawNodes:t[i.childrenField],tmNodes:e.children,tmNode:e})):c(Ye,X(d,to,{key:l,tmNode:e}))}const me=[f("&::before","background-color: var(--n-item-color-hover);"),v("arrow",`
 color: var(--n-arrow-color-hover);
 `),v("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[f("a",`
 color: var(--n-item-text-color-hover);
 `),v("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ue=[v("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],lo=f([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[f("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[z("selected",[v("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-horizontal);"),v("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),v("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),G("disabled",[G("selected, child-active",[f("&:focus-within",ue)]),z("selected",[E(null,[v("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),z("child-active",[E(null,[v("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),E("border-bottom: 2px solid var(--n-border-color-horizontal);",ue)]),p("menu-item-content-header",[f("a","color: var(--n-item-text-color-horizontal);")])])]),z("collapsed",[p("menu-item-content",[z("selected",[f("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),v("arrow","opacity: 0;"),v("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f("> *","z-index: 1;"),f("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[v("arrow","transform: rotate(0);")]),z("selected",[f("&::before","background-color: var(--n-item-color-active);"),v("arrow","color: var(--n-arrow-color-active);"),v("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[f("a","color: var(--n-item-text-color-active);"),v("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[f("a",`
 color: var(--n-item-text-color-child-active);
 `),v("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),v("arrow",`
 color: var(--n-arrow-color-child-active);
 `),v("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),G("disabled",[G("selected, child-active",[f("&:focus-within",me)]),z("selected",[E(null,[v("arrow","color: var(--n-arrow-color-active-hover);"),v("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[f("a","color: var(--n-item-text-color-active-hover);"),v("extra","color: var(--n-item-text-color-active-hover);")])])]),z("child-active",[E(null,[v("arrow","color: var(--n-arrow-color-child-active-hover);"),v("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[f("a","color: var(--n-item-text-color-child-active-hover);"),v("extra","color: var(--n-item-text-color-child-active-hover);")])])]),z("selected",[E(null,[f("&::before","background-color: var(--n-item-color-active-hover);")])]),E(null,me)]),v("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),v("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[f("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[f("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),v("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[De({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[f("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function E(e,i){return[z("hover",e,i),f("&:hover",e,i)]}const ao=Object.assign(Object.assign({},fe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),co=O({name:"Menu",props:ao,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=ke(e),n=fe("Menu","-menu",lo,Je,e,i),l=F(Qe,null),a=x(()=>{var h;const{collapsed:g}=e;if(g!==void 0)return g;if(l){const{collapseModeRef:o,collapsedRef:C}=l;if(o.value==="width")return(h=C.value)!==null&&h!==void 0?h:!1}return!1}),s=x(()=>{const{keyField:h,childrenField:g}=e;return Ee(e.items||e.options,{getChildren(o){return o[g]},getKey(o){var C;return(C=o[h])!==null&&C!==void 0?C:o.name}})}),d=x(()=>new Set(s.value.treeNodes.map(h=>h.key))),{watchProps:m}=e,b=Y(null);m!=null&&m.includes("defaultValue")?ae(()=>{b.value=e.defaultValue}):b.value=e.defaultValue;const _=ce(e,"value"),I=de(_,b),u=Y([]),w=()=>{u.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(I.value,{includeSelf:!1}).keyPath};m!=null&&m.includes("defaultExpandedKeys")?ae(w):w();const A=Te(e,["expandedNames","expandedKeys"]),S=de(A,u),P=x(()=>s.value.treeNodes),T=x(()=>s.value.getPath(I.value).keyPath);V(U,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:I,mergedExpandedKeysRef:S,activePathRef:T,mergedClsPrefixRef:i,isHorizontalRef:x(()=>e.mode==="horizontal"),invertedRef:ce(e,"inverted"),doSelect:Q,toggleExpand:q});function Q(h,g){const{"onUpdate:value":o,onUpdateValue:C,onSelect:H}=e;C&&M(C,h,g),o&&M(o,h,g),H&&M(H,h,g),b.value=h}function j(h){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:o,onExpandedNamesChange:C,onOpenNamesChange:H}=e;g&&M(g,h),o&&M(o,h),C&&M(C,h),H&&M(H,h),u.value=h}function q(h){const g=Array.from(S.value),o=g.findIndex(C=>C===h);if(~o)g.splice(o,1);else{if(e.accordion&&d.value.has(h)){const C=g.findIndex(H=>d.value.has(H));C>-1&&g.splice(C,1)}g.push(h)}j(g)}const K=h=>{const g=s.value.getPath(h!=null?h:I.value,{includeSelf:!1}).keyPath;if(!g.length)return;const o=Array.from(S.value),C=new Set([...o,...g]);e.accordion&&d.value.forEach(H=>{C.has(H)&&!g.includes(H)&&C.delete(H)}),j(Array.from(C))},le=x(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:g},self:o}=n.value,{borderRadius:C,borderColorHorizontal:H,fontSize:Ie,itemHeight:ze,dividerColor:ye}=o,r={"--n-divider-color":ye,"--n-bezier":g,"--n-font-size":Ie,"--n-border-color-horizontal":H,"--n-border-radius":C,"--n-item-height":ze};return h?(r["--n-group-text-color"]=o.groupTextColorInverted,r["--n-color"]=o.colorInverted,r["--n-item-text-color"]=o.itemTextColorInverted,r["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,r["--n-item-text-color-active"]=o.itemTextColorActiveInverted,r["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,r["--n-item-icon-color"]=o.itemIconColorInverted,r["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,r["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,r["--n-arrow-color"]=o.arrowColorInverted,r["--n-arrow-color-hover"]=o.arrowColorHoverInverted,r["--n-arrow-color-active"]=o.arrowColorActiveInverted,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,r["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,r["--n-item-color-hover"]=o.itemColorHoverInverted,r["--n-item-color-active"]=o.itemColorActiveInverted,r["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(r["--n-group-text-color"]=o.groupTextColor,r["--n-color"]=o.color,r["--n-item-text-color"]=o.itemTextColor,r["--n-item-text-color-hover"]=o.itemTextColorHover,r["--n-item-text-color-active"]=o.itemTextColorActive,r["--n-item-text-color-child-active"]=o.itemTextColorChildActive,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,r["--n-item-icon-color"]=o.itemIconColor,r["--n-item-icon-color-hover"]=o.itemIconColorHover,r["--n-item-icon-color-active"]=o.itemIconColorActive,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,r["--n-arrow-color"]=o.arrowColor,r["--n-arrow-color-hover"]=o.arrowColorHover,r["--n-arrow-color-active"]=o.arrowColorActive,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,r["--n-arrow-color-child-active"]=o.arrowColorChildActive,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,r["--n-item-color-hover"]=o.itemColorHover,r["--n-item-color-active"]=o.itemColorActive,r["--n-item-color-active-hover"]=o.itemColorActiveHover,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),r}),L=t?Me("menu",x(()=>e.inverted?"a":"b"),le,e):void 0;return{mergedClsPrefix:i,controlledExpandedKeys:A,uncontrolledExpanededKeys:u,mergedExpandedKeys:S,uncontrolledValue:b,mergedValue:I,activePath:T,tmNodes:P,mergedTheme:n,mergedCollapsed:a,cssVars:t?void 0:le,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender,showOption:K}},render(){const{mergedClsPrefix:e,mode:i,themeClass:t,onRender:n}=this;return n==null||n(),c("div",{role:i==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${i}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>ie(l,this.$props)))}});const so={id:"Admin"},vo={id:"Menu"},mo={class:"container"},uo=y("img",{src:je,alt:"logo",style:{display:"inline-block",width:"40px",height:"auto",margin:"0 8px"}},null,-1),ho=y("p",{style:{color:"azure","font-size":"20px",display:"inline-block","line-height":"40px","margin-bottom":"10px"}},"TRIPNOTE ",-1),po={class:"menu-items"},fo={class:"menu-item"},go={href:"#information"},Co=D("\u65C5\u904A\u8CC7\u8A0A"),xo={href:"#reference"},bo=D(" \u53C3\u8003\u884C\u7A0B"),Io=D("\u884C\u7A0B"),zo={class:"menu-item"},yo={href:"#memberinfo"},wo=D(" \u500B\u4EBA\u8CC7\u6599 "),Ho={href:"#"},Ao=D("\u767B\u51FA"),_o={class:"content"},So={id:"SiderMenu"},Ro={class:"main-layout"},To={__name:"AdminLayout",setup(e){const i=Fe(),{logout:t}=i,{isLogin:n,avatar:l}=Oe(i),a=[{label:()=>c("a",{href:"#/admin/attractions"},"\u666F\u9EDE\u7BA1\u7406"),key:"attractions-management"},{label:()=>c("a",{href:"#/admin/tripinfos"},"\u65C5\u904A\u8CC7\u8A0A"),key:"tripinfos-management"},{label:()=>c("a",{href:"#/admin/members"},"\u6703\u54E1\u7BA1\u7406"),key:"members-management"},{label:()=>c("a",{href:"#/admin/itineraries"},"\u884C\u7A0B\u7BA1\u7406"),key:"itineraries-management"}],s=[{label:()=>c("a",{href:"#plan"},"\u898F\u5283\u884C\u7A0B"),key:"plan-itinerary"},{label:()=>c("a",{href:"#share"},"\u5206\u4EAB\u884C\u7A0B"),key:"share-itinerary"},{label:()=>c("a",{href:"#list"},"\u6B77\u53F2\u7D00\u9304"),key:"list-itinerary"}];return(d,m)=>{const b=se("router-link"),_=pe,I=Ve,u=Be,w=co,A=se("router-view");return ve(),Ke("div",so,[y("div",vo,[y("div",mo,[R(b,{to:"/"},{default:N(()=>[uo,ho]),_:1}),y("ul",po,[y("li",fo,[y("a",go,[R(k($),null,{default:N(()=>[Co]),_:1})]),y("a",xo,[R(k($),null,{default:N(()=>[bo]),_:1})]),k(n)?(ve(),Le(_,{key:0,trigger:"hover",options:s},{default:N(()=>[R(k($),null,{default:N(()=>[Io]),_:1})]),_:1})):$e("",!0)]),y("li",zo,[R(u,{trigger:"hover","show-arrow":!1},{trigger:N(()=>[R(k($),{round:""},{default:N(()=>[R(I,{round:"",size:"large",src:k(l)},null,8,["src"])]),_:1})]),default:N(()=>[y("a",yo,[R(k($),null,{default:N(()=>[wo]),_:1})]),y("a",Ho,[R(k($),{onClick:k(t)},{default:N(()=>[Ao]),_:1},8,["onClick"])])]),_:1})])])])]),y("div",_o,[y("div",So,[R(w,{options:a})]),y("div",Ro,[R(A)])])])}}};export{To as default};
