import{u as h,a as o,o as y,c as g,d as l,e as f,z as i,aq as k,aj as n,S as s,ar as c}from"./index.7a8cc0c4.js";import{_ as x}from"./DataTable.0eadfb94.js";import"./RadioGroup.4a66a4d9.js";import"./Input.875f1932.js";import"./FocusDetector.e14dcf3e.js";const S={id:"ShareItinerary"},z={class:"container"},B=l("h1",null,"\u5206\u4EAB\u884C\u7A0B",-1),T={__name:"ShareItinerary",setup(I){const p=h(),e=o([]),d=o([{title:"\u5716\u7247",key:"image",render(t){return i(k,{width:"100",src:t.image})}},{title:"\u6A19\u984C",key:"title"},{title:"\u767C\u5E03",key:"isPost",render(t){return i(c,{strong:!0,tertiary:!0,size:"small",onClick:()=>_(t._id,t.idx)},{default:()=>"\u53D6\u6D88\u767C\u5E03"})}},{title:"\u7DE8\u8F2F",key:"edit",render(t){return i(c,{strong:!0,tertiary:!0,size:"small",onClick:()=>m(t._id)},{default:()=>"\u7DE8\u8F2F"})}}]),u=o({pageSize:10}),_=async(t,r)=>{e[r].ispost=!1;try{await n.patch("/tripnotes/post/"+t,e[r]),s.fire({icon:"success",title:"\u6210\u529F",text:"\u53D6\u6D88\u5206\u4EAB"})}catch(a){console.log(a),s.fire({icon:"error",title:"\u5931\u6557",text:"\u5206\u4EAB\u5931\u6557"})}},m=async t=>{p.push("/edit-share-tripnote/"+t)};return(async()=>{try{let t=0;const{data:r}=await n.get("/tripnotes/post");e.push(...r.result),e.forEach(a=>a.idx=t++),console.log(e)}catch{s.fire({icon:"error",title:"\u5931\u6557",text:"\u8F09\u5165\u932F\u8AA4"})}})(),(t,r)=>{const a=x;return y(),g("div",S,[l("div",z,[B,f(a,{columns:d,data:e,pagination:u,bordered:!1},null,8,["columns","data","pagination"])])])}}};export{T as default};
