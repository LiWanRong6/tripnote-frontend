import{a,o as c,c as l,e as r,b as _,x as i,aF as d,aA as p,S as m}from"./index.94977f3f.js";import{_ as u}from"./DataTable.d874be5a.js";import"./Radio.d7adf3cd.js";import"./FocusDetector.ce54ad71.js";import"./index.20db2190.js";import"./keysOf.2fa8476a.js";const g={id:"Itineraries"},h={class:"container"},f=r("h1",null,"\u884C\u7A0B\u7BA1\u7406",-1),B={__name:"ItinerariesView",setup(y){const t=a([]),s=a([{title:"\u5716\u7247",key:"image",render(e){return i(d,{width:"100",src:e.image})}},{title:"\u6A19\u984C",key:"title",render(e){return i("a",{href:"#"},{default:()=>e.title})}},{title:"\u6703\u54E1\u540D\u7A31",key:"user.account"},{title:"\u5EFA\u7ACB\u6642\u9593",key:"date[0].created"}]),n=a({pageSize:10});return(async()=>{try{const{data:e}=await p.get("/tripnotes/all");t.push(...e.result),console.log(t)}catch(e){m.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}})(),(e,x)=>{const o=u;return c(),l("div",g,[r("div",h,[f,_(o,{columns:s,data:t,pagination:n,bordered:!1},null,8,["columns","data","pagination"])])])}}};export{B as default};
