import{a as o,o as p,c as _,e as s,b as d,x as r,aG as m,aA as u,S as h,V as g}from"./index.12e72fe4.js";import{_ as f}from"./DataTable.9689459e.js";import"./RadioGroup.324c5dd8.js";import"./FocusDetector.1d8bdbc1.js";import"./index.20db2190.js";import"./keysOf.2fa8476a.js";const y={id:"ShareItinerary"},x={class:"container"},k=s("h1",null,"\u5206\u4EAB\u884C\u7A0B",-1),z={__name:"ShareItinerary",setup(S){const e=o([]),i=o([{title:"\u5716\u7247",key:"image",render(t){return r(m,{width:"100",src:t.image})}},{title:"\u6A19\u984C",key:"title"},{title:"\u767C\u5E03",key:"isPost",render(t){return r(g,{strong:!0,tertiary:!0,size:"small",onClick:()=>l(t.idx)},{default:()=>"\u53D6\u6D88\u767C\u5E03"})}}]),c=o({pageSize:10}),l=t=>{e[t].ispost=!1,console.log(e)};return(async()=>{try{let t=0;const{data:n}=await u.get("/tripnotes/post");e.push(...n.result),e.forEach(a=>a.idx=t++),console.log(e)}catch{h.fire({icon:"error",title:"\u5931\u6557",text:"\u8F09\u5165\u932F\u8AA4"})}})(),(t,n)=>{const a=f;return p(),_("div",y,[s("div",x,[k,d(a,{columns:i,data:e,pagination:c,bordered:!1},null,8,["columns","data","pagination"])])])}}};export{z as default};
