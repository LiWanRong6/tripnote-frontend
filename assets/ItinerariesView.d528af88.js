import{a,o as r,c,d as i,e as _,z as l,aq as d,aj as p,S as m}from"./index.cfb277e4.js";import{_ as u}from"./DataTable.f18b9c07.js";import"./RadioGroup.82cb21d8.js";import"./Input.5c29b30d.js";import"./FocusDetector.05a89463.js";const g={id:"Itineraries"},h={class:"container"},y=i("h1",null,"\u884C\u7A0B\u7BA1\u7406",-1),N={__name:"ItinerariesView",setup(f){const t=a([]),s=a([{title:"\u5716\u7247",key:"image",render(e){return l(d,{width:"100",src:e.image})}},{title:"\u6A19\u984C",key:"title"},{title:"\u6703\u54E1\u540D\u7A31",key:"user.account"},{title:"\u5EFA\u7ACB\u6642\u9593",key:"date[0].created"}]),n=a({pageSize:10});return(async()=>{try{const{data:e}=await p.get("/tripnotes/all");t.push(...e.result),console.log(t)}catch(e){m.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}})(),(e,v)=>{const o=u;return r(),c("div",g,[i("div",h,[y,_(o,{columns:s,data:t,pagination:n,bordered:!1},null,8,["columns","data","pagination"])])])}}};export{N as default};
