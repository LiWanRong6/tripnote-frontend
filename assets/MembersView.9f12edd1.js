import{a as s,o as d,c as p,e as c,b as f,x as r,aA as i,S as a,V as h}from"./index.f68960c3.js";import{_ as g}from"./DataTable.77b6b1ac.js";import"./Radio.d31b0106.js";import"./FocusDetector.c15e2686.js";import"./index.20db2190.js";import"./keysOf.2fa8476a.js";const y={id:"Member"},b={class:"container"},k=c("h1",null,"\u6703\u54E1\u7BA1\u7406",-1),M={__name:"MembersView",setup(w){const o=s([]),l=s([{title:"\u6703\u54E1ID",key:"_id"},{title:"\u6703\u54E1\u540D\u7A31",key:"account",render(e){return r("a",{href:"#"},{default:()=>e.account})}},{title:"\u6B0A\u9650",key:"role",sorter:(e,t)=>e.role-t.role},{title:"\u4FE1\u7BB1",key:"email",render(e){return r("a",{href:`mailto:${e.email}`},{default:()=>"\u5BC4\u4FE1"})}},{title:"\u522A\u9664",key:"delete",render(e){return r(h,{strong:!0,tertiary:!0,size:"small",onClick:()=>u(e._id)},{default:()=>"\u522A\u9664"})}}]),m=s({pageSize:10}),u=async e=>{a.fire({icon:"warning",title:"\u78BA\u5B9A\u522A\u9664?",showCancelButton:!0,cancelButtonColor:"#d33"}).then(async t=>{t.isConfirmed&&(await i.delete("/users/"+e),await a.fire({icon:"success",title:"\u6210\u529F"}),n())}).catch(t=>{a.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})})},n=async()=>{try{const{data:e}=await i.get("/users/all");o.push(...e.result)}catch(e){a.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};return n(),(e,t)=>{const _=g;return d(),p("div",y,[c("div",b,[k,f(_,{columns:l,data:o,pagination:m,bordered:!1},null,8,["columns","data","pagination"])])])}}};export{M as default};