import{t as S,av as Q,aw as ee,K as te,bb as ne,ba as le,B as x,r as I,a2 as ie,aI as D,z as u,a6 as Y,ay as A,b9 as oe,ad as B,b3 as se}from"./index.7a8cc0c4.js";const K=new WeakSet;function de(n){K.add(n)}function fe(n){return!K.has(n)}function Z(n){return n&-n}class re{constructor(l,o){this.l=l,this.min=o;const c=new Array(l+1);for(let s=0;s<l+1;++s)c[s]=0;this.ft=c}add(l,o){if(o===0)return;const{l:c,ft:s}=this;for(l+=1;l<=c;)s[l]+=o,l+=Z(l)}get(l){return this.sum(l+1)-this.sum(l)}sum(l){if(l===void 0&&(l=this.l),l<=0)return 0;const{ft:o,min:c,l:s}=this;if(l>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let r=l*c;for(;l>0;)r+=o[l],l-=Z(l);return r}getBound(l){let o=0,c=this.l;for(;c>o;){const s=Math.floor((o+c)/2),r=this.sum(s);if(r>l){c=s;continue}else if(r<l){if(o===s)return this.sum(o+1)<=l?o+1:s;o=s}else return s}return o}}let F;function ae(){return F===void 0&&("matchMedia"in window?F=window.matchMedia("(pointer:coarse)").matches:F=!1),F}let _;function $(){return _===void 0&&(_="chrome"in window?window.devicePixelRatio:1),_}const ue=A(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[A("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[A("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),he=S({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){const l=Q();ue.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:ee,ssr:l}),te(()=>{const{defaultScrollIndex:e,defaultScrollKey:t}=n;e!=null?L({index:e}):t!=null&&L({key:t})});let o=!1,c=!1;ne(()=>{if(o=!1,!c){c=!0;return}L({top:M.value,left:k})}),le(()=>{o=!0,c||(c=!0)});const s=x(()=>{const e=new Map,{keyField:t}=n;return n.items.forEach((i,d)=>{e.set(i[t],d)}),e}),r=I(null),w=I(void 0),v=new Map,b=x(()=>{const{items:e,itemSize:t,keyField:i}=n,d=new re(e.length,t);return e.forEach((f,h)=>{const a=f[i],m=v.get(a);m!==void 0&&d.add(h,m)}),d}),p=I(0);let k=0;const M=I(0),O=ie(()=>Math.max(b.value.getBound(M.value-D(n.paddingTop))-1,0)),X=x(()=>{const{value:e}=w;if(e===void 0)return[];const{items:t,itemSize:i}=n,d=O.value,f=Math.min(d+Math.ceil(e/i+1),t.length-1),h=[];for(let a=d;a<=f;++a)h.push(t[a]);return h}),L=(e,t)=>{if(typeof e=="number"){z(e,t,"auto");return}const{left:i,top:d,index:f,key:h,position:a,behavior:m,debounce:g=!0}=e;if(i!==void 0||d!==void 0)z(i,d,m);else if(f!==void 0)V(f,m,g);else if(h!==void 0){const N=s.value.get(h);N!==void 0&&V(N,m,g)}else a==="bottom"?z(0,Number.MAX_SAFE_INTEGER,m):a==="top"&&z(0,0,m)};let T,R=null;function V(e,t,i){const{value:d}=b,f=d.sum(e)+D(n.paddingTop);if(!i)r.value.scrollTo({left:0,top:f,behavior:t});else{T=e,R!==null&&window.clearTimeout(R),R=window.setTimeout(()=>{T=void 0,R=null},16);const{scrollTop:h,offsetHeight:a}=r.value;if(f>h){const m=d.get(e);f+m<=h+a||r.value.scrollTo({left:0,top:f+m-a,behavior:t})}else r.value.scrollTo({left:0,top:f,behavior:t})}}function z(e,t,i){r.value.scrollTo({left:e,top:t,behavior:i})}function U(e,t){var i,d,f;if(o||n.ignoreItemResize||j(t.target))return;const{value:h}=b,a=s.value.get(e),m=h.get(a),g=(f=(d=(i=t.borderBoxSize)===null||i===void 0?void 0:i[0])===null||d===void 0?void 0:d.blockSize)!==null&&f!==void 0?f:t.contentRect.height;if(g===m)return;g-n.itemSize===0?v.delete(e):v.set(e,g-n.itemSize);const C=g-m;if(C===0)return;h.add(a,C);const y=r.value;if(y!=null){if(T===void 0){const W=h.sum(a);y.scrollTop>W&&y.scrollBy(0,C)}else if(a<T)y.scrollBy(0,C);else if(a===T){const W=h.sum(a);g+W>y.scrollTop+y.offsetHeight&&y.scrollBy(0,C)}H()}p.value++}const P=!ae();let E=!1;function q(e){var t;(t=n.onScroll)===null||t===void 0||t.call(n,e),(!P||!E)&&H()}function G(e){var t;if((t=n.onWheel)===null||t===void 0||t.call(n,e),P){const i=r.value;if(i!=null){if(e.deltaX===0&&(i.scrollTop===0&&e.deltaY<=0||i.scrollTop+i.offsetHeight>=i.scrollHeight&&e.deltaY>=0))return;e.preventDefault(),i.scrollTop+=e.deltaY/$(),i.scrollLeft+=e.deltaX/$(),H(),E=!0,oe(()=>{E=!1})}}}function J(e){if(o||j(e.target)||e.contentRect.height===w.value)return;w.value=e.contentRect.height;const{onResize:t}=n;t!==void 0&&t(e)}function H(){const{value:e}=r;e!=null&&(M.value=e.scrollTop,k=e.scrollLeft)}function j(e){let t=e;for(;t!==null;){if(t.style.display==="none")return!0;t=t.parentElement}return!1}return{listHeight:w,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:x(()=>{const{itemResizable:e}=n,t=B(b.value.sum());return p.value,[n.itemsStyle,{boxSizing:"content-box",height:e?"":t,minHeight:e?t:"",paddingTop:B(n.paddingTop),paddingBottom:B(n.paddingBottom)}]}),visibleItemsStyle:x(()=>(p.value,{transform:`translateY(${B(b.value.sum(O.value))})`})),viewportItems:X,listElRef:r,itemsElRef:I(null),scrollTo:L,handleListResize:J,handleListScroll:q,handleListWheel:G,handleItemResize:U}},render(){const{itemResizable:n,keyField:l,keyToIndex:o,visibleItemsTag:c}=this;return u(Y,{onResize:this.handleListResize},{default:()=>{var s,r;return u("div",se(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?u("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[u(c,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(w=>{const v=w[l],b=o.get(v),p=this.$slots.default({item:w,index:b})[0];return n?u(Y,{key:v,onResize:k=>this.handleItemResize(v,k)},{default:()=>p}):(p.key=v,p)})})]):(r=(s=this.$slots).empty)===null||r===void 0?void 0:r.call(s)])}})}}),me=S({name:"Backward",render(){return u("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",fill:"currentColor"}))}}),ve=S({name:"FastBackward",render(){return u("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},u("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},u("g",{fill:"currentColor","fill-rule":"nonzero"},u("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"}))))}}),ge=S({name:"FastForward",render(){return u("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},u("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},u("g",{fill:"currentColor","fill-rule":"nonzero"},u("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"}))))}}),we=S({name:"Forward",render(){return u("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",fill:"currentColor"}))}}),be=S({props:{onFocus:Function,onBlur:Function},setup(n){return()=>u("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}});export{me as B,be as F,he as V,we as a,ge as b,ve as c,fe as e,de as m};
