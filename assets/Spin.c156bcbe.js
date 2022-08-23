import{k as b,n as m,l as c,L as z,m as u,q as S,s as C,t as h,y as p,H as x,M as k,x as r,N as $,T,O as w,J as _}from"./index.94977f3f.js";const L=i=>{const{opacityDisabled:a,heightTiny:e,heightSmall:s,heightMedium:l,heightLarge:t,heightHuge:n,primaryColor:o,fontSize:d}=i;return{fontSize:d,textColor:o,sizeTiny:e,sizeSmall:s,sizeMedium:l,sizeLarge:t,sizeHuge:n,color:o,opacitySpinning:a}},R={name:"Spin",common:b,self:L},B=R,H=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",{position:"relative"},[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[z()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[u("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[u("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),N={small:20,medium:18,large:16},O=Object.assign(Object.assign({},h.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),V=S({name:"Spin",props:O,setup(i){const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=C(i),s=h("Spin","-spin",H,B,i,a),l=p(()=>{const{size:n}=i,{common:{cubicBezierEaseInOut:o},self:d}=s.value,{opacitySpinning:f,color:g,textColor:y}=d,v=typeof n=="number"?w(n):d[_("size",n)];return{"--n-bezier":o,"--n-opacity-spinning":f,"--n-size":v,"--n-color":g,"--n-text-color":y}}),t=e?x("spin",p(()=>{const{size:n}=i;return typeof n=="number"?String(n):n[0]}),l,i):void 0;return{mergedClsPrefix:a,compitableShow:k(i,["spinning","show"]),mergedStrokeWidth:p(()=>{const{strokeWidth:n}=i;if(n!==void 0)return n;const{size:o}=i;return N[typeof o=="number"?"medium":o]}),cssVars:e?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var i,a;const{$slots:e,mergedClsPrefix:s,description:l}=this,t=e.icon&&this.rotate,n=(l||e.description)&&r("div",{class:`${s}-spin-description`},l||((i=e.description)===null||i===void 0?void 0:i.call(e))),o=e.icon?r("div",{class:[`${s}-spin-body`,this.themeClass]},r("div",{class:[`${s}-spin`,t&&`${s}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):r("div",{class:[`${s}-spin-body`,this.themeClass]},r($,{clsPrefix:s,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),n);return(a=this.onRender)===null||a===void 0||a.call(this),e.default?r("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},r("div",{class:[`${s}-spin-content`,this.compitableShow&&`${s}-spin-content--spinning`]},e),r(T,{name:"fade-in-transition"},{default:()=>this.compitableShow?o:null})):o}});export{V as _};
