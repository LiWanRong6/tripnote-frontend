import{r as g,a as f,B as y,b as w,o as c,c as u,d as t,e as r,w as i,F as k,ah as x,ai as n,h as B,S as C,ak as S,al as V,ao as d,g as b,aq as N,as as T}from"./index.cfb277e4.js";import{_ as A}from"./InputGroup.312ae703.js";const D={id:"TopTrip"},E={class:"container"},F=t("h1",null,"\u53C3\u8003\u884C\u7A0B",-1),I={class:"wrapper"},K={class:"content"},U=b("Created By "),R={__name:"ReferenceItinerary",setup(q){const l=g(),_=f([]);(async()=>{try{const{data:s}=await B.get("/tripnotes/userall");_.push(...s.result)}catch(s){C.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})();const a=y(()=>_.filter(s=>s.title.match(l.value)));return(s,o)=>{const p=A,m=N,h=T,v=w("router-link");return c(),u("div",D,[t("div",E,[F,r(p,{class:"search"},{default:i(()=>[S(t("input",{type:"search","onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),placeholder:"\u641C\u5C0B\u884C\u7A0B\u540D\u7A31"},null,512),[[V,l.value,void 0,{lazy:!0,trim:!0}]]),t("button",{onKeydown:o[1]||(o[1]=(...e)=>n(a)&&n(a)(...e)),onClick:o[2]||(o[2]=(...e)=>n(a)&&n(a)(...e))},"\u641C\u7D22",32)]),_:1}),t("div",I,[(c(!0),u(k,null,x(n(a),e=>(c(),u("div",{class:"card",key:e._id},[r(v,{to:"/othertripnote/"+e._id},{default:i(()=>[r(h,null,{cover:i(()=>[r(m,{src:e.image,"preview-disabled":""},null,8,["src"])]),default:i(()=>[t("div",K,[t("h2",null,d(e.title),1),t("p",null,[U,t("span",null,d(e.user.account.toUpperCase()),1)])])]),_:2},1024)]),_:2},1032,["to"])]))),128))])])])}}};export{R as default};
