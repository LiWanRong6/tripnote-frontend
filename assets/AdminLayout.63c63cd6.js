import{t as B,z as d,aB as He,m as Se,a$ as Re,bo as Ne,Y as oe,s as X,i as L,B as I,y as G,aE as D,F as Pe,W as ke,r as ne,a2 as ge,b4 as Ce,bi as Te,b2 as Ee,A as ie,aR as te,q as f,n as p,p as _,G as m,_ as Y,v as Fe,x as xe,aQ as Me,a3 as me,H as ue,a0 as he,ae as Oe,aa as O,M as Ke,af as Le,ag as Be,b as re,o as T,c as q,d as x,e as R,w,ai as b,ap as E,am as Z,aN as $e,ar as F,bp as je,g as $,bl as Ve}from"./index.7fcf744d.js";import{f as De}from"./fade-in-height-expand.cssr.2f76ee2e.js";const Ue=B({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function qe(e,i,t,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:i,itemColorActiveHoverInverted:i,itemColorActiveCollapsedInverted:i,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:n}}const Ge=e=>{const{borderRadius:i,textColor3:t,primaryColor:n,textColor2:l,textColor1:a,fontSize:s,dividerColor:c,hoverColor:v,primaryColorHover:y}=e;return Object.assign({borderRadius:i,color:"#0000",groupTextColor:t,itemColorHover:v,itemColorActive:oe(n,{alpha:.1}),itemColorActiveHover:oe(n,{alpha:.1}),itemColorActiveCollapsed:oe(n,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:y,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:y,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:c},qe("#BBB",n,"#FFF","#AAA"))},We=He({name:"Menu",common:Se,peers:{Tooltip:Re,Dropdown:Ne},self:Ge}),Qe=We,Ye=X("n-layout-sider"),W=X("n-menu"),le=X("n-submenu"),ae=X("n-menu-item-group"),J=8;function ce(e){const i=L(W),{props:t,mergedCollapsedRef:n}=i,l=L(le,null),a=L(ae,null),s=I(()=>t.mode==="horizontal"),c=I(()=>s.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),v=I(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),y=I(()=>{var u;return!s.value&&e.root&&n.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),P=I(()=>{if(s.value)return;const{collapsedWidth:u,indent:A,rootIndent:N}=t,{root:H,isGroup:k}=e,M=N===void 0?A:N;if(H)return n.value?u/2-v.value/2:M;if(a)return A/2+a.paddingLeftRef.value;if(l)return(k?A/2:A)+l.paddingLeftRef.value}),z=I(()=>{const{collapsedWidth:u,indent:A,rootIndent:N}=t,{value:H}=v,{root:k}=e;return s.value||!k||!n.value?J:(N===void 0?A:N)+H+J-(u+H)/2});return{dropdownPlacement:c,activeIconSize:y,maxIconSize:v,paddingLeft:P,iconMarginRight:z,NMenu:i,NSubmenu:l}}const de={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ie=Object.assign(Object.assign({},de),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ze=B({name:"MenuOptionGroup",props:Ie,setup(e){G(le,null);const i=ce(e);G(ae,{paddingLeftRef:i.paddingLeft});const{mergedClsPrefixRef:t,props:n}=L(W);return function(){const{value:l}=t,a=i.paddingLeft.value,{nodeProps:s}=n,c=s==null?void 0:s(e.tmNode.rawNode);return d("div",{class:`${l}-menu-item-group`,role:"group"},d("div",Object.assign({},c,{class:[`${l}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),D(e.title),e.extra?d(Pe,null," ",D(e.extra)):null),d("div",null,e.tmNodes.map(v=>se(v,n))))}}}),be=B({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:i}=L(W);return{menuProps:i,style:I(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:I(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:l}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:i,menuProps:{renderIcon:t,renderLabel:n,renderExtra:l,expandIcon:a}}=this,s=t?t(i.rawNode):D(this.icon);return d("div",{onClick:c=>{var v;(v=this.onClick)===null||v===void 0||v.call(this,c)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(i.rawNode):D(this.title),this.extra||l?d("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(i.rawNode):D(this.extra)):null),this.showArrow?d(ke,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(i.rawNode):d(Ue,null)}):null)}}),ze=Object.assign(Object.assign({},de),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Je=B({name:"Submenu",props:ze,setup(e){const i=ce(e),{NMenu:t,NSubmenu:n}=i,{props:l,mergedCollapsedRef:a,mergedThemeRef:s}=t,c=I(()=>{const{disabled:u}=e;return n!=null&&n.mergedDisabledRef.value||l.disabled?!0:u}),v=ne(!1);G(le,{paddingLeftRef:i.paddingLeft,mergedDisabledRef:c}),G(ae,null);function y(){const{onClick:u}=e;u&&u()}function P(){c.value||(a.value||t.toggleExpand(e.internalKey),y())}function z(u){v.value=u}return{menuProps:l,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,iconMarginRight:i.iconMarginRight,dropdownPlacement:i.dropdownPlacement,dropdownShow:v,paddingLeft:i.paddingLeft,mergedDisabled:c,mergedValue:t.mergedValueRef,childActive:ge(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>l.mode==="horizontal"?!1:a.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!c.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:z,handleClick:P}},render(){var e;const{mergedClsPrefix:i,menuProps:{renderIcon:t,renderLabel:n}}=this,l=()=>{const{isHorizontal:s,paddingLeft:c,collapsed:v,mergedDisabled:y,maxIconSize:P,activeIconSize:z,title:u,childActive:A,icon:N,handleClick:H,menuProps:{nodeProps:k},dropdownShow:M,iconMarginRight:ee,tmNode:U,mergedClsPrefix:Q}=this,j=k==null?void 0:k(U.rawNode);return d("div",Object.assign({},j,{class:[`${Q}-menu-item`,j==null?void 0:j.class],role:"menuitem"}),d(be,{tmNode:U,paddingLeft:c,collapsed:v,disabled:y,iconMarginRight:ee,maxIconSize:P,activeIconSize:z,title:u,showArrow:!s,childActive:A,clsPrefix:Q,icon:N,hover:M,onClick:H}))},a=()=>d(Te,null,{default:()=>{const{tmNodes:s,collapsed:c}=this;return c?null:d("div",{class:`${i}-submenu-children`,role:"menu"},s.map(v=>se(v,this.menuProps)))}});return this.root?d(Ce,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>d("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):d("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),ye=Object.assign(Object.assign({},de),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Xe=B({name:"MenuOption",props:ye,setup(e){const i=ce(e),{NSubmenu:t,NMenu:n}=i,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:s}=n,c=t?t.mergedDisabledRef:{value:!1},v=I(()=>c.value||e.disabled);function y(z){const{onClick:u}=e;u&&u(z)}function P(z){v.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),y(z))}return{mergedClsPrefix:a,dropdownPlacement:i.dropdownPlacement,paddingLeft:i.paddingLeft,iconMarginRight:i.iconMarginRight,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:ge(()=>e.root&&s.value&&l.mode!=="horizontal"&&!v.value),selected:I(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:v,handleClick:P}},render(){const{mergedClsPrefix:e,mergedTheme:i,tmNode:t,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l==null?void 0:l(t.rawNode);return d("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),d(Ee,{theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):D(this.title),trigger:()=>d(be,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),eo=B({name:"MenuDivider",setup(){const e=L(W),{mergedClsPrefixRef:i,isHorizontalRef:t}=e;return()=>t.value?null:d("div",{class:`${i.value}-menu-divider`})}}),oo=ie(Ie),to=ie(ye),ro=ie(ze);function no(e){return e.type==="divider"||e.type==="render"}function io(e){return e.type==="divider"}function se(e,i){const{rawNode:t}=e;if(no(t))return io(t)?d(eo,Object.assign({key:e.key},t.props)):void 0;const{labelField:n}=i,{key:l,level:a,isGroup:s}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[n],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?d(Ze,te(c,oo,{tmNode:e,tmNodes:e.children,key:l})):d(Je,te(c,ro,{key:l,rawNodes:t[i.childrenField],tmNodes:e.children,tmNode:e})):d(Xe,te(c,to,{key:l,tmNode:e}))}const pe=[f("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[f("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],fe=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],lo=f([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[_("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[f("&::before","display: none;"),_("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[_("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),_("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Y("disabled",[Y("selected, child-active",[f("&:focus-within",fe)]),_("selected",[K(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),_("child-active",[K(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",fe)]),p("menu-item-content-header",[f("a","color: var(--n-item-text-color-horizontal);")])])]),_("collapsed",[p("menu-item-content",[_("selected",[f("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
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
 `),_("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),_("collapsed",[m("arrow","transform: rotate(0);")]),_("selected",[f("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[f("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),_("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[f("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Y("disabled",[Y("selected, child-active",[f("&:focus-within",pe)]),_("selected",[K(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[f("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),_("child-active",[K(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[f("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),_("selected",[K(null,[f("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,pe)]),m("icon",`
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
 `),m("arrow",`
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
 `)]),m("extra",`
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
 `)]);function K(e,i){return[_("hover",e,i),f("&:hover",e,i)]}const ao=Object.assign(Object.assign({},xe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),co=B({name:"Menu",props:ao,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=Fe(e),n=xe("Menu","-menu",lo,Qe,e,i),l=L(Ye,null),a=I(()=>{var h;const{collapsed:g}=e;if(g!==void 0)return g;if(l){const{collapseModeRef:o,collapsedRef:C}=l;if(o.value==="width")return(h=C.value)!==null&&h!==void 0?h:!1}return!1}),s=I(()=>{const{keyField:h,childrenField:g}=e;return Me(e.items||e.options,{getChildren(o){return o[g]},getKey(o){var C;return(C=o[h])!==null&&C!==void 0?C:o.name}})}),c=I(()=>new Set(s.value.treeNodes.map(h=>h.key))),{watchProps:v}=e,y=ne(null);v!=null&&v.includes("defaultValue")?me(()=>{y.value=e.defaultValue}):y.value=e.defaultValue;const P=ue(e,"value"),z=he(P,y),u=ne([]),A=()=>{u.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(z.value,{includeSelf:!1}).keyPath};v!=null&&v.includes("defaultExpandedKeys")?me(A):A();const N=Oe(e,["expandedNames","expandedKeys"]),H=he(N,u),k=I(()=>s.value.treeNodes),M=I(()=>s.value.getPath(z.value).keyPath);G(W,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:z,mergedExpandedKeysRef:H,activePathRef:M,mergedClsPrefixRef:i,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:ue(e,"inverted"),doSelect:ee,toggleExpand:Q});function ee(h,g){const{"onUpdate:value":o,onUpdateValue:C,onSelect:S}=e;C&&O(C,h,g),o&&O(o,h,g),S&&O(S,h,g),y.value=h}function U(h){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:o,onExpandedNamesChange:C,onOpenNamesChange:S}=e;g&&O(g,h),o&&O(o,h),C&&O(C,h),S&&O(S,h),u.value=h}function Q(h){const g=Array.from(H.value),o=g.findIndex(C=>C===h);if(~o)g.splice(o,1);else{if(e.accordion&&c.value.has(h)){const C=g.findIndex(S=>c.value.has(S));C>-1&&g.splice(C,1)}g.push(h)}U(g)}const j=h=>{const g=s.value.getPath(h!=null?h:z.value,{includeSelf:!1}).keyPath;if(!g.length)return;const o=Array.from(H.value),C=new Set([...o,...g]);e.accordion&&c.value.forEach(S=>{C.has(S)&&!g.includes(S)&&C.delete(S)}),U(Array.from(C))},ve=I(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:g},self:o}=n.value,{borderRadius:C,borderColorHorizontal:S,fontSize:_e,itemHeight:we,dividerColor:Ae}=o,r={"--n-divider-color":Ae,"--n-bezier":g,"--n-font-size":_e,"--n-border-color-horizontal":S,"--n-border-radius":C,"--n-item-height":we};return h?(r["--n-group-text-color"]=o.groupTextColorInverted,r["--n-color"]=o.colorInverted,r["--n-item-text-color"]=o.itemTextColorInverted,r["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,r["--n-item-text-color-active"]=o.itemTextColorActiveInverted,r["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,r["--n-item-icon-color"]=o.itemIconColorInverted,r["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,r["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,r["--n-arrow-color"]=o.arrowColorInverted,r["--n-arrow-color-hover"]=o.arrowColorHoverInverted,r["--n-arrow-color-active"]=o.arrowColorActiveInverted,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,r["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,r["--n-item-color-hover"]=o.itemColorHoverInverted,r["--n-item-color-active"]=o.itemColorActiveInverted,r["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(r["--n-group-text-color"]=o.groupTextColor,r["--n-color"]=o.color,r["--n-item-text-color"]=o.itemTextColor,r["--n-item-text-color-hover"]=o.itemTextColorHover,r["--n-item-text-color-active"]=o.itemTextColorActive,r["--n-item-text-color-child-active"]=o.itemTextColorChildActive,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,r["--n-item-icon-color"]=o.itemIconColor,r["--n-item-icon-color-hover"]=o.itemIconColorHover,r["--n-item-icon-color-active"]=o.itemIconColorActive,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,r["--n-arrow-color"]=o.arrowColor,r["--n-arrow-color-hover"]=o.arrowColorHover,r["--n-arrow-color-active"]=o.arrowColorActive,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,r["--n-arrow-color-child-active"]=o.arrowColorChildActive,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,r["--n-item-color-hover"]=o.itemColorHover,r["--n-item-color-active"]=o.itemColorActive,r["--n-item-color-active-hover"]=o.itemColorActiveHover,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),r}),V=t?Ke("menu",I(()=>e.inverted?"a":"b"),ve,e):void 0;return{mergedClsPrefix:i,controlledExpandedKeys:N,uncontrolledExpanededKeys:u,mergedExpandedKeys:H,uncontrolledValue:y,mergedValue:z,activePath:M,tmNodes:k,mergedTheme:n,mergedCollapsed:a,cssVars:t?void 0:ve,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender,showOption:j}},render(){const{mergedClsPrefix:e,mode:i,themeClass:t,onRender:n}=this;return n==null||n(),d("div",{role:i==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${i}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>se(l,this.$props)))}});const so={id:"Admin"},vo={id:"Menu"},mo={class:"container"},uo={class:"logo",style:{"text-align":"center"}},ho=x("img",{src:je,alt:"logo"},null,-1),po=x("p",null,"TRIPNOTE",-1),fo={class:"menu-items"},go={class:"menu-item"},Co={key:0,href:"#admin"},xo=$("\u7BA1\u7406"),Io={href:"#attractions"},bo=$("\u666F\u9EDE"),zo={href:"#information"},yo=$("\u65C5\u904A\u8CC7\u8A0A"),_o={href:"#reference"},wo=$(" \u53C3\u8003\u884C\u7A0B"),Ao=$("\u6211\u7684\u884C\u7A0B"),Ho={key:0,class:"menu-item"},So={class:"startedBtn"},Ro=x("a",{href:"#login"},"\u958B\u59CB\u4F7F\u7528",-1),No={class:"popover-group"},Po=x("a",{href:"#memberinfo"},"\u500B\u4EBA\u8CC7\u6599 ",-1),ko={href:"#"},To=$("\u767B\u51FA"),Eo=x("a",{href:"#attractions"}," \u666F\u9EDE ",-1),Fo=x("a",{href:"#information"}," \u65C5\u904A\u8CC7\u8A0A ",-1),Mo=x("a",{href:"#reference"}," \u53C3\u8003\u884C\u7A0B ",-1),Oo=$(" \u6211\u7684\u884C\u7A0B "),Ko={key:1,class:"startedBtn"},Lo=x("a",{href:"#login"}," \u958B\u59CB\u4F7F\u7528 ",-1),Bo=[Lo],$o={key:2,href:"#admin"},jo={class:"content"},Vo={id:"SiderMenu"},Do={class:"main-layout"},Go={__name:"AdminLayout",setup(e){const i=Le(),{logout:t}=i,{isLogin:n,isAdmin:l,avatar:a}=Be(i),s=[{label:()=>d("a",{href:"#/admin/attractions"},"\u666F\u9EDE\u7BA1\u7406"),key:"attractions-management"},{label:()=>d("a",{href:"#/admin/tripinfos"},"\u65C5\u904A\u8CC7\u8A0A"),key:"tripinfos-management"},{label:()=>d("a",{href:"#/admin/members"},"\u6703\u54E1\u7BA1\u7406"),key:"members-management"},{label:()=>d("a",{href:"#/admin/itineraries"},"\u884C\u7A0B\u7BA1\u7406"),key:"itineraries-management"}],c=[{label:()=>d("a",{href:"#plan"},"\u898F\u5283\u884C\u7A0B"),key:"plan-itinerary"},{label:()=>d("a",{href:"#list"},"\u5206\u4EAB\u884C\u7A0B"),key:"list-itinerary"},{label:()=>d("a",{href:"#share"},"\u884C\u7A0B\u6E05\u55AE"),key:"share-itinerary"}];return(v,y)=>{const P=re("router-link"),z=Ce,u=Ve,A=$e,N=re("font-awesome-icon"),H=co,k=re("router-view");return T(),q("div",so,[x("div",vo,[x("div",mo,[x("div",uo,[R(P,{to:"/"},{default:w(()=>[ho,po]),_:1})]),x("ul",fo,[x("li",go,[b(n)&&b(l)?(T(),q("a",Co,[R(b(F),{color:"#1F2E3C"},{default:w(()=>[xo]),_:1})])):E("",!0),x("a",Io,[R(b(F),{color:"#1F2E3C"},{default:w(()=>[bo]),_:1})]),x("a",zo,[R(b(F),{color:"#1F2E3C"},{default:w(()=>[yo]),_:1})]),x("a",_o,[R(b(F),{color:"#1F2E3C"},{default:w(()=>[wo]),_:1})]),b(n)?(T(),Z(z,{key:1,trigger:"hover",options:c},{default:w(()=>[R(b(F),{color:"#1F2E3C"},{default:w(()=>[Ao]),_:1})]),_:1})):E("",!0)]),b(n)?E("",!0):(T(),q("li",Ho,[x("div",So,[R(b(F),{strong:"",secondary:"",round:""},{default:w(()=>[Ro]),_:1})])]))]),x("div",No,[b(n)?(T(),Z(A,{key:0,trigger:"hover","show-arrow":!1},{trigger:w(()=>[R(u,{round:"",src:b(a)},null,8,["src"])]),default:w(()=>[Po,x("a",ko,[R(b(F),{class:"logoutBtn",onClick:b(t),color:"#E8CDA2"},{default:w(()=>[To]),_:1},8,["onClick"])])]),_:1})):E("",!0),b(n)?(T(),Z(A,{key:1,trigger:"hover","show-arrow":!1},{trigger:w(()=>[R(b(F),{class:"burgarBtn",onMouseover:v.showMenu,color:"#1F2E3C"},{default:w(()=>[R(N,{icon:"fa-solid fa-bars"})]),_:1},8,["onMouseover"])]),default:w(()=>[Eo,Fo,Mo,b(n)?(T(),Z(z,{key:0,trigger:"hover",options:c},{default:w(()=>[Oo]),_:1})):E("",!0),b(n)?E("",!0):(T(),q("div",Ko,Bo)),b(n)&&b(l)?(T(),q("a",$o," \u7BA1\u7406 ")):E("",!0)]),_:1})):E("",!0)])])]),x("div",jo,[x("div",Vo,[R(H,{options:s})]),x("div",Do,[R(k)])])])}}};export{Go as default};
