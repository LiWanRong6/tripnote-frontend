import{a as s,o as u,c as p,d as c,e as f,z as n,aj as i,S as a,ar as g}from"./index.cfb277e4.js";import{_ as h}from"./DataTable.f18b9c07.js";import"./RadioGroup.82cb21d8.js";import"./Input.5c29b30d.js";import"./FocusDetector.05a89463.js";const y={id:"Member"},b={class:"container"},x=c("h1",null,"\u6703\u54E1\u7BA1\u7406",-1),V={__name:"MembersView",setup(k){const r=s([]),l=s([{title:"\u6703\u54E1ID",key:"_id"},{title:"\u6703\u54E1\u540D\u7A31",key:"account"},{title:"\u6B0A\u9650",key:"role",sorter:(e,t)=>e.role-t.role},{title:"\u4FE1\u7BB1",key:"email",render(e){return n("a",{href:`mailto:${e.email}`},{default:()=>"\u5BC4\u4FE1"})}},{title:"\u522A\u9664",key:"delete",render(e){return n(g,{strong:!0,tertiary:!0,size:"small",class:"bg-red",onClick:()=>_(e._id)},{default:()=>"\u522A\u9664"})}}]),m=s({pageSize:10}),_=async e=>{a.fire({icon:"warning",title:"\u78BA\u5B9A\u522A\u9664?",showCancelButton:!0,cancelButtonColor:"#d33",confirmButtonText:"\u78BA\u8A8D\u522A\u9664",cancelButtonText:"\u53D6\u6D88"}).then(async t=>{t.isConfirmed&&(await i.delete("/users/"+e),await a.fire({icon:"success",title:"\u6210\u529F"}),o())}).catch(t=>{a.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})})},o=async()=>{try{const{data:e}=await i.get("/users/all");r.push(...e.result)}catch(e){a.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};return o(),(e,t)=>{const d=h;return u(),p("div",y,[c("div",b,[x,f(d,{columns:l,data:r,pagination:m,bordered:!1},null,8,["columns","data","pagination"])])])}}};export{V as default};
