import{a as g,Q as w,o as i,c,e as d,R as v,az as x,aA as l,S as o,b as n,w as a,U as k,aF as y,V as C}from"./index.f68960c3.js";import{_ as B}from"./Card.7ff3e2f9.js";import"./keysOf.2fa8476a.js";const I={id:"ItineraryList"},N={class:"container"},A=d("h1",null,"\u884C\u7A0B\u6E05\u55AE",-1),V=k("X"),z={__name:"ItineraryList",setup(b){const r=g([]),u=t=>{o.fire({icon:"warning",title:"\u78BA\u5B9A\u522A\u9664?",showCancelButton:!0,cancelButtonColor:"#d33"}).then(async e=>{e.isConfirmed&&(await l.delete("/tripnotes/"+t),await o.fire({icon:"success",title:"\u6210\u529F"}),_())}).catch(e=>{o.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})})},_=async()=>{try{const{data:t}=await l.get("/tripnotes");r.push(...t.result),console.log(r)}catch(t){o.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}};return _(),(t,e)=>{const p=y,m=C,f=B,h=w("router-link");return i(),c("div",I,[d("div",N,[A,(i(!0),c(v,null,x(r,s=>(i(),c("div",{id:"card",key:s._id},[n(h,{to:"/tripnotes/"+s._id},{default:a(()=>[n(f,{title:s.title,class:"card-item"},{cover:a(()=>[n(p,{src:s.image,"preview-disabled":""},null,8,["src"])]),default:a(()=>[n(m,{onClick:E=>u(s._id)},{default:a(()=>[V]),_:2},1032,["onClick"])]),_:2},1032,["title"])]),_:2},1032,["to"])]))),128))])])}}};export{z as default};