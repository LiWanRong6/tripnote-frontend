import{a as p,R as u,o as a,c as o,e,U as m,aB as h,f as g,S as v,b as n,w as r,aG as i,V as f,aI as w,X as x}from"./index.8abc673a.js";const y={id:"TopTrip"},k={class:"container"},B=e("h1",null,"\u53C3\u8003\u884C\u7A0B",-1),C={class:"wrapper"},V={class:"content"},I=f("Created By "),R={__name:"ReferenceItinerary",setup(N){const c=p([]);return(async()=>{try{const{data:t}=await g.get("/tripnotes/userall");c.push(...t.result)}catch(t){v.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}})(),(t,b)=>{const _=w,l=x,d=u("router-link");return a(),o("div",y,[e("div",k,[B,e("div",C,[(a(!0),o(m,null,h(c,s=>(a(),o("div",{class:"card",key:s._id},[n(d,{to:"/othertripnote/"+s._id},{default:r(()=>[n(l,null,{cover:r(()=>[n(_,{src:s.image,"preview-disabled":""},null,8,["src"])]),default:r(()=>[e("div",V,[e("h2",null,i(s.title),1),e("p",null,[I,e("span",null,i(s.user.account.toUpperCase()),1)])])]),_:2},1024)]),_:2},1032,["to"])]))),128))])])])}}};export{R as default};
