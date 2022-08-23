import{k as X,n as t,l as p,m as l,C as n,W as Y,X as Z,Y as G,q as Q,s as U,t as _,Z as oo,y as w,H as eo,x as s,I as f,$ as ro,a0 as to,J as k,a1 as no}from"./index.f68960c3.js";import{k as ao}from"./keysOf.2fa8476a.js";const lo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},so=o=>{const{primaryColor:v,borderRadius:g,lineHeight:e,fontSize:i,cardColor:c,textColor2:d,textColor1:r,dividerColor:a,fontWeightStrong:b,closeIconColor:h,closeIconColorHover:u,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:$,actionColor:m}=o;return Object.assign(Object.assign({},lo),{lineHeight:e,color:c,colorModal:S,colorPopover:$,colorTarget:v,colorEmbedded:m,textColor:d,titleTextColor:r,borderColor:a,actionColor:m,titleFontWeight:b,closeColorHover:z,closeColorPressed:C,closeBorderRadius:g,closeIconColor:h,closeIconColorHover:u,closeIconColorPressed:x,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:y,borderRadius:g})},io={name:"Card",common:X,self:so},co=io,bo=t([p("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[p("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),p("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),Y(p("card",{background:"var(--n-color-modal)"})),Z(p("card",{background:"var(--n-color-popover)"})),p("card",[G({background:"var(--n-color-modal)"})])]),T={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},vo=ao(T),go=Object.assign(Object.assign({},_.props),T),mo=Q({name:"Card",props:go,setup(o){const v=()=>{const{onClose:b}=o;b&&to(b)},{inlineThemeDisabled:g,mergedClsPrefixRef:e,mergedRtlRef:i}=U(o),c=_("Card","-card",bo,co,o,e),d=oo("Card",i,e),r=w(()=>{const{size:b}=o,{self:{color:h,colorModal:u,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:$,borderRadius:m,lineHeight:P,closeIconColor:R,closeIconColorHover:B,closeIconColorPressed:H,closeColorHover:O,closeColorPressed:I,closeBorderRadius:j,closeIconSize:E,closeSize:F,boxShadow:M,colorPopover:L,colorEmbedded:W,[k("padding",b)]:V,[k("fontSize",b)]:K,[k("titleFontSize",b)]:q},common:{cubicBezierEaseInOut:A}}=c.value,{top:D,left:J,bottom:N}=no(V);return{"--n-bezier":A,"--n-border-radius":m,"--n-color":o.embedded?W:h,"--n-color-modal":u,"--n-color-popover":L,"--n-color-target":x,"--n-text-color":z,"--n-line-height":P,"--n-action-color":$,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":R,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":H,"--n-close-color-hover":O,"--n-close-color-pressed":I,"--n-border-color":y,"--n-box-shadow":M,"--n-padding-top":D,"--n-padding-bottom":N,"--n-padding-left":J,"--n-font-size":K,"--n-title-font-size":q,"--n-close-size":F,"--n-close-icon-size":E,"--n-close-border-radius":j}}),a=g?eo("card",w(()=>o.size[0]),r,o):void 0;return{rtlEnabled:d,mergedClsPrefix:e,mergedTheme:c,handleCloseClick:v,cssVars:g?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:o,bordered:v,hoverable:g,mergedClsPrefix:e,rtlEnabled:i,onRender:c,$slots:d}=this;return c==null||c(),s("div",{class:[`${e}-card`,this.themeClass,{[`${e}-card--rtl`]:i,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:v,[`${e}-card--hoverable`]:g}],style:this.cssVars,role:this.role},f(d.cover,r=>r&&s("div",{class:`${e}-card-cover`,role:"none"},r)),f(d.header,r=>r||this.title||this.closable?s("div",{class:`${e}-card-header`,style:this.headerStyle},s("div",{class:`${e}-card-header__main`,role:"heading"},r||[this.title]),f(d["header-extra"],a=>a&&s("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},a)),this.closable?s(ro,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),f(d.default,r=>r&&s("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},r)),f(d.footer,r=>r&&[s("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},r)]),f(d.action,r=>r&&s("div",{class:`${e}-card__action`,role:"none"},r)))}});export{mo as _,T as a,vo as b,co as c};
