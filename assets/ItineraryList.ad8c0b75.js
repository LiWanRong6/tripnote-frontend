import{a as f,R as v,o as r,c as i,e as _,U as w,aB as y,aC as d,S as n,b as o,w as c,V as x,aI as C,X as k,W as B}from"./index.246037ca.js";const I={id:"ItineraryList"},b={class:"container"},N=_("h1",null,"\u884C\u7A0B\u6E05\u55AE",-1),L={class:"wrapper"},V=x("X"),X={__name:"ItineraryList",setup(A){const a=f([]),u=e=>{n.fire({icon:"warning",title:"\u78BA\u5B9A\u522A\u9664?",showCancelButton:!0,cancelButtonColor:"#d33"}).then(async t=>{t.isConfirmed&&(await d.delete("/tripnotes/"+e),await n.fire({icon:"success",title:"\u6210\u529F"}),l())}).catch(t=>{n.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})})},l=async()=>{try{const{data:e}=await d.get("/tripnotes");a.push(...e.result),console.log(a)}catch(e){n.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};return l(),(e,t)=>{const p=C,m=k,g=v("router-link"),h=B;return r(),i("div",I,[_("div",b,[N,_("div",L,[(r(!0),i(w,null,y(a,s=>(r(),i("div",{id:"card",key:s._id},[o(g,{to:"/tripnotes/"+s._id},{default:c(()=>[o(m,{title:s.title,class:"card-item"},{cover:c(()=>[o(p,{src:s.image,"preview-disabled":""},null,8,["src"])]),_:2},1032,["title"])]),_:2},1032,["to"]),o(h,{onClick:E=>u(s._id),color:"rgba(231, 231, 231,0.5)"},{default:c(()=>[V]),_:2},1032,["onClick"])]))),128))])])])}}};export{X as default};
