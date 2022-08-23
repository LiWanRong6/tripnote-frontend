import{k as U,aG as H,p as O,aH as V,r as w,i as E,D as K,aI as G,aJ as _,s as P,K as N,a0 as $,l as D,C as u,n as C,m as R,aK as J,q,t as I,y as A,Z as W,H as Y,x as S,I as Z,J as L}from"./index.f68960c3.js";const Q={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px"},X=o=>{const{borderColor:e,primaryColor:a,baseColor:n,textColorDisabled:d,inputColorDisabled:g,textColor2:t,opacityDisabled:s,borderRadius:i,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:v,heightSmall:c,heightMedium:p,heightLarge:m,lineHeight:x}=o;return Object.assign(Object.assign({},Q),{labelLineHeight:x,buttonHeightSmall:c,buttonHeightMedium:p,buttonHeightLarge:m,fontSizeSmall:b,fontSizeMedium:h,fontSizeLarge:v,boxShadow:`inset 0 0 0 1px ${e}`,boxShadowActive:`inset 0 0 0 1px ${a}`,boxShadowFocus:`inset 0 0 0 1px ${a}, 0 0 0 2px ${H(a,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${a}`,boxShadowDisabled:`inset 0 0 0 1px ${e}`,color:n,colorDisabled:g,textColor:t,textColorDisabled:d,dotColorActive:a,dotColorDisabled:e,buttonBorderColor:e,buttonBorderColorActive:a,buttonBorderColorHover:e,buttonColor:n,buttonColorActive:n,buttonTextColor:t,buttonTextColorActive:a,buttonTextColorHover:a,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${a}, 0 0 0 2px ${H(a,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:i})},ee={name:"Radio",common:U,self:X},oe=ee,ae={name:String,value:{type:[String,Number],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,validator:()=>(N("radio","`checked-value` is deprecated, please use `checked` instead."),!0),default:void 0}},te=O("n-radio-group");function B(o){const e=V(o,{mergedSize(r){const{size:l}=o;if(l!==void 0)return l;if(t){const{mergedSizeRef:{value:f}}=t;if(f!==void 0)return f}return r?r.mergedSize.value:"medium"},mergedDisabled(r){return!!(o.disabled||t!=null&&t.disabledRef.value||r!=null&&r.disabled.value)}}),{mergedSizeRef:a,mergedDisabledRef:n}=e,d=w(null),g=w(null),t=E(te,null),s=w(o.defaultChecked),i=K(o,"checked"),b=G(i,s),h=_(()=>t?t.valueRef.value===o.value:b.value),v=_(()=>{const{name:r}=o;if(r!==void 0)return r;if(t)return t.nameRef.value}),c=w(!1);function p(){if(t){const{doUpdateValue:r}=t,{value:l}=o;$(r,l)}else{const{onUpdateChecked:r,"onUpdate:checked":l}=o,{nTriggerFormInput:f,nTriggerFormChange:y}=e;r&&$(r,!0),l&&$(l,!0),f(),y(),s.value=!0}}function m(){n.value||h.value||p()}function x(){m()}function k(){c.value=!1}function z(){c.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:P(o).mergedClsPrefixRef,inputRef:d,labelRef:g,mergedName:v,mergedDisabled:n,uncontrolledChecked:s,renderSafeChecked:h,focus:c,mergedSize:a,handleRadioInputChange:x,handleRadioInputBlur:k,handleRadioInputFocus:z}}B.props=ae;const re=D("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[u("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),D("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),u("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[C("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),R("checked",{boxShadow:"var(--n-box-shadow-active)"},[C("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),u("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),J("disabled",`
 cursor: pointer;
 `,[C("&:hover",[u("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),R("focus",[C("&:not(:active)",[u("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),R("disabled",`
 cursor: not-allowed;
 `,[u("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[C("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),R("checked",`
 opacity: 1;
 `)]),u("label",{color:"var(--n-text-color-disabled)"}),D("radio-input",`
 cursor: not-allowed;
 `)])]),ie=q({name:"Radio",props:Object.assign(Object.assign({},I.props),B.props),setup(o){const e=B(o),a=I("Radio","-radio",re,oe,o,e.mergedClsPrefix),n=A(()=>{const{mergedSize:{value:b}}=e,{common:{cubicBezierEaseInOut:h},self:{boxShadow:v,boxShadowActive:c,boxShadowDisabled:p,boxShadowFocus:m,boxShadowHover:x,color:k,colorDisabled:z,textColor:r,textColorDisabled:l,dotColorActive:f,dotColorDisabled:y,labelPadding:j,labelLineHeight:F,[L("fontSize",b)]:M,[L("radioSize",b)]:T}}=a.value;return{"--n-bezier":h,"--n-label-line-height":F,"--n-box-shadow":v,"--n-box-shadow-active":c,"--n-box-shadow-disabled":p,"--n-box-shadow-focus":m,"--n-box-shadow-hover":x,"--n-color":k,"--n-color-disabled":z,"--n-dot-color-active":f,"--n-dot-color-disabled":y,"--n-font-size":M,"--n-radio-size":T,"--n-text-color":r,"--n-text-color-disabled":l,"--n-label-padding":j}}),{inlineThemeDisabled:d,mergedClsPrefixRef:g,mergedRtlRef:t}=P(o),s=W("Radio",t,g),i=d?Y("radio",A(()=>e.mergedSize.value[0]),n,o):void 0;return Object.assign(e,{rtlEnabled:s,cssVars:d?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){const{$slots:o,mergedClsPrefix:e,onRender:a,label:n}=this;return a==null||a(),S("label",{class:[`${e}-radio`,this.themeClass,{[`${e}-radio--rtl`]:this.rtlEnabled,[`${e}-radio--disabled`]:this.mergedDisabled,[`${e}-radio--checked`]:this.renderSafeChecked,[`${e}-radio--focus`]:this.focus}],style:this.cssVars},S("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),S("div",{class:`${e}-radio__dot-wrapper`},"\xA0",S("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]})),Z(o.default,d=>!d&&!n?null:S("div",{ref:"labelRef",class:`${e}-radio__label`},d||n)))}});export{ie as _,te as a,oe as r};
