import{a as p,b as u,o as a,c as o,d as e,F as m,ah as h,h as g,S as v,e as n,w as r,ao as i,g as f,aq as w,as as x}from"./index.7a8cc0c4.js";const y={id:"TopTrip"},k={class:"container"},B=e("h1",null,"\u53C3\u8003\u884C\u7A0B",-1),C={class:"wrapper"},N={class:"content"},S=f("Created By "),I={__name:"ReferenceItinerary",setup(V){const c=p([]);return(async()=>{try{const{data:t}=await g.get("/tripnotes/userall");c.push(...t.result)}catch(t){v.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}})(),(t,E)=>{const _=w,l=x,d=u("router-link");return a(),o("div",y,[e("div",k,[B,e("div",C,[(a(!0),o(m,null,h(c,s=>(a(),o("div",{class:"card",key:s._id},[n(d,{to:"/othertripnote/"+s._id},{default:r(()=>[n(l,null,{cover:r(()=>[n(_,{src:s.image,"preview-disabled":""},null,8,["src"])]),default:r(()=>[e("div",N,[e("h2",null,i(s.title),1),e("p",null,[S,e("span",null,i(s.user.account.toUpperCase()),1)])])]),_:2},1024)]),_:2},1032,["to"])]))),128))])])])}}};export{I as default};
