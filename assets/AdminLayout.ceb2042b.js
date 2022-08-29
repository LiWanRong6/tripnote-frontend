import{t as B,z as d,aB as He,m as Se,a$ as Re,bo as Ne,Y as oe,s as ee,i as L,B as I,y as W,aE as D,F as Pe,W as ke,r as ne,a2 as ge,b4 as Ce,bi as Te,b2 as Ee,A as ie,aR as te,q as f,n as p,p as A,G as u,_ as Z,v as Fe,x as xe,aQ as Me,a3 as me,H as ue,a0 as he,ae as Oe,aa as O,M as Ke,af as Le,ag as Be,b as re,o as E,c as G,d as C,e as w,w as y,ai as b,am as J,ap as F,aN as $e,ar as M,bp as je,g as $,bl as Ve}from"./index.cfb277e4.js";import{f as De}from"./fade-in-height-expand.cssr.bf2b0396.js";import{_ as Ue}from"./InputGroup.312ae703.js";import{_ as qe}from"./Input.5c29b30d.js";const Ge=B({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function We(e,i,t,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:i,itemColorActiveHoverInverted:i,itemColorActiveCollapsedInverted:i,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:n}}const Qe=e=>{const{borderRadius:i,textColor3:t,primaryColor:n,textColor2:l,textColor1:a,fontSize:s,dividerColor:c,hoverColor:v,primaryColorHover:_}=e;return Object.assign({borderRadius:i,color:"#0000",groupTextColor:t,itemColorHover:v,itemColorActive:oe(n,{alpha:.1}),itemColorActiveHover:oe(n,{alpha:.1}),itemColorActiveCollapsed:oe(n,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:_,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:_,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:c},We("#BBB",n,"#FFF","#AAA"))},Ye=He({name:"Menu",common:Se,peers:{Tooltip:Re,Dropdown:Ne},self:Qe}),Ze=Ye,Je=ee("n-layout-sider"),Q=ee("n-menu"),le=ee("n-submenu"),ae=ee("n-menu-item-group"),X=8;function ce(e){const i=L(Q),{props:t,mergedCollapsedRef:n}=i,l=L(le,null),a=L(ae,null),s=I(()=>t.mode==="horizontal"),c=I(()=>s.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),v=I(()=>{var m;return Math.max((m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize,t.iconSize)}),_=I(()=>{var m;return!s.value&&e.root&&n.value&&(m=t.collapsedIconSize)!==null&&m!==void 0?m:t.iconSize}),k=I(()=>{if(s.value)return;const{collapsedWidth:m,indent:H,rootIndent:N}=t,{root:S,isGroup:P}=e,T=N===void 0?H:N;if(S)return n.value?m/2-v.value/2:T;if(a)return H/2+a.paddingLeftRef.value;if(l)return(P?H/2:H)+l.paddingLeftRef.value}),z=I(()=>{const{collapsedWidth:m,indent:H,rootIndent:N}=t,{value:S}=v,{root:P}=e;return s.value||!P||!n.value?X:(N===void 0?H:N)+S+X-(m+S)/2});return{dropdownPlacement:c,activeIconSize:_,maxIconSize:v,paddingLeft:k,iconMarginRight:z,NMenu:i,NSubmenu:l}}const de={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ie=Object.assign(Object.assign({},de),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Xe=B({name:"MenuOptionGroup",props:Ie,setup(e){W(le,null);const i=ce(e);W(ae,{paddingLeftRef:i.paddingLeft});const{mergedClsPrefixRef:t,props:n}=L(Q);return function(){const{value:l}=t,a=i.paddingLeft.value,{nodeProps:s}=n,c=s==null?void 0:s(e.tmNode.rawNode);return d("div",{class:`${l}-menu-item-group`,role:"group"},d("div",Object.assign({},c,{class:[`${l}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),D(e.title),e.extra?d(Pe,null," ",D(e.extra)):null),d("div",null,e.tmNodes.map(v=>se(v,n))))}}}),be=B({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:i}=L(Q);return{menuProps:i,style:I(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:I(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:l}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:i,menuProps:{renderIcon:t,renderLabel:n,renderExtra:l,expandIcon:a}}=this,s=t?t(i.rawNode):D(this.icon);return d("div",{onClick:c=>{var v;(v=this.onClick)===null||v===void 0||v.call(this,c)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(i.rawNode):D(this.title),this.extra||l?d("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(i.rawNode):D(this.extra)):null),this.showArrow?d(ke,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(i.rawNode):d(Ge,null)}):null)}}),ze=Object.assign(Object.assign({},de),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),eo=B({name:"Submenu",props:ze,setup(e){const i=ce(e),{NMenu:t,NSubmenu:n}=i,{props:l,mergedCollapsedRef:a,mergedThemeRef:s}=t,c=I(()=>{const{disabled:m}=e;return n!=null&&n.mergedDisabledRef.value||l.disabled?!0:m}),v=ne(!1);W(le,{paddingLeftRef:i.paddingLeft,mergedDisabledRef:c}),W(ae,null);function _(){const{onClick:m}=e;m&&m()}function k(){c.value||(a.value||t.toggleExpand(e.internalKey),_())}function z(m){v.value=m}return{menuProps:l,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,iconMarginRight:i.iconMarginRight,dropdownPlacement:i.dropdownPlacement,dropdownShow:v,paddingLeft:i.paddingLeft,mergedDisabled:c,mergedValue:t.mergedValueRef,childActive:ge(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>l.mode==="horizontal"?!1:a.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!c.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:z,handleClick:k}},render(){var e;const{mergedClsPrefix:i,menuProps:{renderIcon:t,renderLabel:n}}=this,l=()=>{const{isHorizontal:s,paddingLeft:c,collapsed:v,mergedDisabled:_,maxIconSize:k,activeIconSize:z,title:m,childActive:H,icon:N,handleClick:S,menuProps:{nodeProps:P},dropdownShow:T,iconMarginRight:U,tmNode:q,mergedClsPrefix:Y}=this,j=P==null?void 0:P(q.rawNode);return d("div",Object.assign({},j,{class:[`${Y}-menu-item`,j==null?void 0:j.class],role:"menuitem"}),d(be,{tmNode:q,paddingLeft:c,collapsed:v,disabled:_,iconMarginRight:U,maxIconSize:k,activeIconSize:z,title:m,showArrow:!s,childActive:H,clsPrefix:Y,icon:N,hover:T,onClick:S}))},a=()=>d(Te,null,{default:()=>{const{tmNodes:s,collapsed:c}=this;return c?null:d("div",{class:`${i}-submenu-children`,role:"menu"},s.map(v=>se(v,this.menuProps)))}});return this.root?d(Ce,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>d("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):d("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),_e=Object.assign(Object.assign({},de),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),oo=B({name:"MenuOption",props:_e,setup(e){const i=ce(e),{NSubmenu:t,NMenu:n}=i,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:s}=n,c=t?t.mergedDisabledRef:{value:!1},v=I(()=>c.value||e.disabled);function _(z){const{onClick:m}=e;m&&m(z)}function k(z){v.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),_(z))}return{mergedClsPrefix:a,dropdownPlacement:i.dropdownPlacement,paddingLeft:i.paddingLeft,iconMarginRight:i.iconMarginRight,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:ge(()=>e.root&&s.value&&l.mode!=="horizontal"&&!v.value),selected:I(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:v,handleClick:k}},render(){const{mergedClsPrefix:e,mergedTheme:i,tmNode:t,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l==null?void 0:l(t.rawNode);return d("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),d(Ee,{theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):D(this.title),trigger:()=>d(be,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),to=B({name:"MenuDivider",setup(){const e=L(Q),{mergedClsPrefixRef:i,isHorizontalRef:t}=e;return()=>t.value?null:d("div",{class:`${i.value}-menu-divider`})}}),ro=ie(Ie),no=ie(_e),io=ie(ze);function lo(e){return e.type==="divider"||e.type==="render"}function ao(e){return e.type==="divider"}function se(e,i){const{rawNode:t}=e;if(lo(t))return ao(t)?d(to,Object.assign({key:e.key},t.props)):void 0;const{labelField:n}=i,{key:l,level:a,isGroup:s}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[n],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?d(Xe,te(c,ro,{tmNode:e,tmNodes:e.children,key:l})):d(eo,te(c,io,{key:l,rawNodes:t[i.childrenField],tmNodes:e.children,tmNode:e})):d(oo,te(c,no,{key:l,tmNode:e}))}const pe=[f("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[f("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])],fe=[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],co=f([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[A("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[f("&::before","display: none;"),A("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[A("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),A("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Z("disabled",[Z("selected, child-active",[f("&:focus-within",fe)]),A("selected",[K(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),A("child-active",[K(null,[u("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",fe)]),p("menu-item-content-header",[f("a","color: var(--n-item-text-color-horizontal);")])])]),A("collapsed",[p("menu-item-content",[A("selected",[f("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),u("arrow","opacity: 0;"),u("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
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
 `),A("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),A("collapsed",[u("arrow","transform: rotate(0);")]),A("selected",[f("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[f("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),A("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[f("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Z("disabled",[Z("selected, child-active",[f("&:focus-within",pe)]),A("selected",[K(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[f("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),A("child-active",[K(null,[u("arrow","color: var(--n-arrow-color-child-active-hover);"),u("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[f("a","color: var(--n-item-text-color-child-active-hover);"),u("extra","color: var(--n-item-text-color-child-active-hover);")])])]),A("selected",[K(null,[f("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,pe)]),u("icon",`
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
 `),u("arrow",`
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
 `)]),u("extra",`
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
 `)]);function K(e,i){return[A("hover",e,i),f("&:hover",e,i)]}const so=Object.assign(Object.assign({},xe.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),vo=B({name:"Menu",props:so,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=Fe(e),n=xe("Menu","-menu",co,Ze,e,i),l=L(Je,null),a=I(()=>{var h;const{collapsed:g}=e;if(g!==void 0)return g;if(l){const{collapseModeRef:o,collapsedRef:x}=l;if(o.value==="width")return(h=x.value)!==null&&h!==void 0?h:!1}return!1}),s=I(()=>{const{keyField:h,childrenField:g}=e;return Me(e.items||e.options,{getChildren(o){return o[g]},getKey(o){var x;return(x=o[h])!==null&&x!==void 0?x:o.name}})}),c=I(()=>new Set(s.value.treeNodes.map(h=>h.key))),{watchProps:v}=e,_=ne(null);v!=null&&v.includes("defaultValue")?me(()=>{_.value=e.defaultValue}):_.value=e.defaultValue;const k=ue(e,"value"),z=he(k,_),m=ne([]),H=()=>{m.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(z.value,{includeSelf:!1}).keyPath};v!=null&&v.includes("defaultExpandedKeys")?me(H):H();const N=Oe(e,["expandedNames","expandedKeys"]),S=he(N,m),P=I(()=>s.value.treeNodes),T=I(()=>s.value.getPath(z.value).keyPath);W(Q,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:z,mergedExpandedKeysRef:S,activePathRef:T,mergedClsPrefixRef:i,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:ue(e,"inverted"),doSelect:U,toggleExpand:Y});function U(h,g){const{"onUpdate:value":o,onUpdateValue:x,onSelect:R}=e;x&&O(x,h,g),o&&O(o,h,g),R&&O(R,h,g),_.value=h}function q(h){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:o,onExpandedNamesChange:x,onOpenNamesChange:R}=e;g&&O(g,h),o&&O(o,h),x&&O(x,h),R&&O(R,h),m.value=h}function Y(h){const g=Array.from(S.value),o=g.findIndex(x=>x===h);if(~o)g.splice(o,1);else{if(e.accordion&&c.value.has(h)){const x=g.findIndex(R=>c.value.has(R));x>-1&&g.splice(x,1)}g.push(h)}q(g)}const j=h=>{const g=s.value.getPath(h!=null?h:z.value,{includeSelf:!1}).keyPath;if(!g.length)return;const o=Array.from(S.value),x=new Set([...o,...g]);e.accordion&&c.value.forEach(R=>{x.has(R)&&!g.includes(R)&&x.delete(R)}),q(Array.from(x))},ve=I(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:g},self:o}=n.value,{borderRadius:x,borderColorHorizontal:R,fontSize:ye,itemHeight:we,dividerColor:Ae}=o,r={"--n-divider-color":Ae,"--n-bezier":g,"--n-font-size":ye,"--n-border-color-horizontal":R,"--n-border-radius":x,"--n-item-height":we};return h?(r["--n-group-text-color"]=o.groupTextColorInverted,r["--n-color"]=o.colorInverted,r["--n-item-text-color"]=o.itemTextColorInverted,r["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,r["--n-item-text-color-active"]=o.itemTextColorActiveInverted,r["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,r["--n-item-icon-color"]=o.itemIconColorInverted,r["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,r["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,r["--n-arrow-color"]=o.arrowColorInverted,r["--n-arrow-color-hover"]=o.arrowColorHoverInverted,r["--n-arrow-color-active"]=o.arrowColorActiveInverted,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,r["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,r["--n-item-color-hover"]=o.itemColorHoverInverted,r["--n-item-color-active"]=o.itemColorActiveInverted,r["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(r["--n-group-text-color"]=o.groupTextColor,r["--n-color"]=o.color,r["--n-item-text-color"]=o.itemTextColor,r["--n-item-text-color-hover"]=o.itemTextColorHover,r["--n-item-text-color-active"]=o.itemTextColorActive,r["--n-item-text-color-child-active"]=o.itemTextColorChildActive,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,r["--n-item-icon-color"]=o.itemIconColor,r["--n-item-icon-color-hover"]=o.itemIconColorHover,r["--n-item-icon-color-active"]=o.itemIconColorActive,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,r["--n-arrow-color"]=o.arrowColor,r["--n-arrow-color-hover"]=o.arrowColorHover,r["--n-arrow-color-active"]=o.arrowColorActive,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,r["--n-arrow-color-child-active"]=o.arrowColorChildActive,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,r["--n-item-color-hover"]=o.itemColorHover,r["--n-item-color-active"]=o.itemColorActive,r["--n-item-color-active-hover"]=o.itemColorActiveHover,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),r}),V=t?Ke("menu",I(()=>e.inverted?"a":"b"),ve,e):void 0;return{mergedClsPrefix:i,controlledExpandedKeys:N,uncontrolledExpanededKeys:m,mergedExpandedKeys:S,uncontrolledValue:_,mergedValue:z,activePath:T,tmNodes:P,mergedTheme:n,mergedCollapsed:a,cssVars:t?void 0:ve,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender,showOption:j}},render(){const{mergedClsPrefix:e,mode:i,themeClass:t,onRender:n}=this;return n==null||n(),d("div",{role:i==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${i}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>se(l,this.$props)))}});const mo={id:"Admin"},uo={id:"Menu"},ho={class:"container"},po={class:"logo",style:{"text-align":"center"}},fo=C("img",{src:je,alt:"logo"},null,-1),go=C("p",null,"TRIPNOTE",-1),Co={class:"menu-items"},xo={class:"menu-item"},Io={href:"#attractions"},bo=$("\u666F\u9EDE"),zo={href:"#information"},_o=$("\u65C5\u904A\u8CC7\u8A0A"),yo={href:"#reference"},wo=$(" \u53C3\u8003\u884C\u7A0B"),Ao=$("\u6211\u7684\u884C\u7A0B"),Ho={key:1,href:"#admin"},So=$("\u7BA1\u7406"),Ro={class:"menu-item"},No={class:"search"},Po={key:0,class:"menu-item"},ko={class:"startedBtn"},To=C("a",{href:"#login"},"\u958B\u59CB\u4F7F\u7528",-1),Eo={class:"popover-group"},Fo=C("a",{href:"#memberinfo"},"\u500B\u4EBA\u8CC7\u6599 ",-1),Mo={href:"#"},Oo=$("\u767B\u51FA"),Ko=C("a",{href:"#attractions"}," \u666F\u9EDE ",-1),Lo=C("a",{href:"#information"}," \u65C5\u904A\u8CC7\u8A0A ",-1),Bo=C("a",{href:"#reference"}," \u53C3\u8003\u884C\u7A0B ",-1),$o=$(" \u6211\u7684\u884C\u7A0B "),jo={key:1,class:"startedBtn"},Vo=C("a",{href:"#login"}," \u958B\u59CB\u4F7F\u7528 ",-1),Do=[Vo],Uo={key:2,href:"#admin"},qo={class:"content"},Go={id:"SiderMenu"},Wo={class:"main-layout"},Xo={__name:"AdminLayout",setup(e){const i=Le(),{logout:t}=i,{isLogin:n,isAdmin:l,avatar:a}=Be(i),s=[{label:()=>d("a",{href:"#/admin/attractions"},"\u666F\u9EDE\u7BA1\u7406"),key:"attractions-management"},{label:()=>d("a",{href:"#/admin/tripinfos"},"\u65C5\u904A\u8CC7\u8A0A"),key:"tripinfos-management"},{label:()=>d("a",{href:"#/admin/members"},"\u6703\u54E1\u7BA1\u7406"),key:"members-management"},{label:()=>d("a",{href:"#/admin/itineraries"},"\u884C\u7A0B\u7BA1\u7406"),key:"itineraries-management"}],c=[{label:()=>d("a",{href:"#plan"},"\u898F\u5283\u884C\u7A0B"),key:"plan-itinerary"},{label:()=>d("a",{href:"#list"},"\u5206\u4EAB\u884C\u7A0B"),key:"list-itinerary"},{label:()=>d("a",{href:"#share"},"\u884C\u7A0B\u6E05\u55AE"),key:"share-itinerary"}];return(v,_)=>{const k=re("router-link"),z=Ce,m=re("font-awesome-icon"),H=qe,N=Ue,S=Ve,P=$e,T=vo,U=re("router-view");return E(),G("div",mo,[C("div",uo,[C("div",ho,[C("div",po,[w(k,{to:"/"},{default:y(()=>[fo,go]),_:1})]),C("ul",Co,[C("li",xo,[C("a",Io,[w(b(M),{color:"#1F2E3C"},{default:y(()=>[bo]),_:1})]),C("a",zo,[w(b(M),{color:"#1F2E3C"},{default:y(()=>[_o]),_:1})]),C("a",yo,[w(b(M),{color:"#1F2E3C"},{default:y(()=>[wo]),_:1})]),b(n)?(E(),J(z,{key:0,trigger:"hover",options:c},{default:y(()=>[w(b(M),{color:"#1F2E3C"},{default:y(()=>[Ao]),_:1})]),_:1})):F("",!0),b(n)&&b(l)?(E(),G("a",Ho,[w(b(M),{color:"#1F2E3C"},{default:y(()=>[So]),_:1})])):F("",!0)]),C("li",Ro,[C("div",No,[w(N,null,{default:y(()=>[w(H,{placeholder:"\u641C\u7D22",autosize:"",style:{"min-width":"70%"}},{prefix:y(()=>[w(m,{icon:"fa-solid fa-magnifying-glass"})]),_:1})]),_:1})])]),b(n)?F("",!0):(E(),G("li",Po,[C("div",ko,[w(b(M),{strong:"",secondary:"",round:""},{default:y(()=>[To]),_:1})])]))]),C("div",Eo,[b(n)?(E(),J(P,{key:0,trigger:"hover","show-arrow":!1},{trigger:y(()=>[w(S,{round:"",src:b(a)},null,8,["src"])]),default:y(()=>[Fo,C("a",Mo,[w(b(M),{class:"logoutBtn",onClick:b(t),color:"#E8CDA2"},{default:y(()=>[Oo]),_:1},8,["onClick"])])]),_:1})):F("",!0),b(n)?(E(),J(P,{key:1,trigger:"hover","show-arrow":!1},{trigger:y(()=>[w(b(M),{class:"burgarBtn",onMouseover:v.showMenu,color:"#1F2E3C"},{default:y(()=>[w(m,{icon:"fa-solid fa-bars"})]),_:1},8,["onMouseover"])]),default:y(()=>[Ko,Lo,Bo,b(n)?(E(),J(z,{key:0,trigger:"hover",options:c},{default:y(()=>[$o]),_:1})):F("",!0),b(n)?F("",!0):(E(),G("div",jo,Do)),b(n)&&b(l)?(E(),G("a",Uo," \u7BA1\u7406 ")):F("",!0)]),_:1})):F("",!0)])])]),C("div",qo,[C("div",Go,[w(T,{options:s})]),C("div",Wo,[w(U)])])])}}};export{Xo as default};
