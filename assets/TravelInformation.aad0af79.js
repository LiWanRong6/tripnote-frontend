import{a as u,b as p,o as a,c as o,d as t,F as m,ah as h,h as g,S as v,e as n,w as r,ao as _,g as f,aq as w,as as x}from"./index.7a8cc0c4.js";const y={id:"FrontTripinfo"},k={class:"container"},N=t("h1",null,"\u65C5\u904A\u8CC7\u8A0A",-1),S={class:"wrapper"},B={class:"card-item"},D={class:"card-item"},F=t("hr",null,null,-1),I={__name:"TravelInformation",setup(T){const c=u([]);return(async()=>{try{const{data:s}=await g.get("/tripinfos");c.push(...s.result)}catch{v.fire({icon:"error",title:"\u5931\u6557",text:"\u8F09\u5165\u932F\u8AA4"})}})(),(s,b)=>{const i=w,l=x,d=p("router-link");return a(),o("div",y,[t("div",k,[N,(a(!0),o(m,null,h(c,e=>(a(),o("div",{key:e._id,class:"card"},[n(d,{to:"/tripinfos/"+e._id},{default:r(()=>[t("div",S,[t("div",B,[n(i,{src:e.image},null,8,["src"])]),t("div",D,[n(l,{bordered:!1,title:e.name},{footer:r(()=>[t("p",null,_(new Date(e.postdate).toLocaleDateString()),1)]),default:r(()=>[f(_(e.description)+" ",1)]),_:2},1032,["title"])])]),F]),_:2},1032,["to"])]))),128))])])}}};export{I as default};
