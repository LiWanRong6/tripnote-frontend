import{a as _,Q as S,o as z,c as E,e as u,b as o,w as i,aD as F,bF as $,x as c,aF as D,aA as p,S as d,V as f,d as q,U as w,_ as I}from"./index.94977f3f.js";import{_ as Q}from"./text.b01c4e30.js";import{a as R,_ as T}from"./Upload.57622c8b.js";import{_ as j}from"./Modal.2c2869e5.js";import{_ as G}from"./DataTable.d874be5a.js";import{a as H,_ as J}from"./FormItem.eced928b.js";import{_ as K}from"./Spin.c156bcbe.js";import"./Warning.b66e6d82.js";import"./fade-in-height-expand.cssr.807fc5bd.js";import"./keysOf.2fa8476a.js";import"./Card.9ba3ce6d.js";import"./index.20db2190.js";import"./Radio.d7adf3cd.js";import"./FocusDetector.ce54ad71.js";const L={id:"Attraction"},O={class:"container"},P={id:"header"},W=u("h1",null,"\u666F\u9EDE\u7BA1\u7406",-1),X=w("\u65B0\u589E\u666F\u9EDE"),Y={style:{"margin-bottom":"12px"}},Z=w(" \u9EDE\u64CA\u6216\u62D6\u66F3\u5716\u7247\u5230\u6B64\u5340\u57DF "),tt=u("input",{type:"submit",value:"\u78BA\u8A8D"},null,-1),gt={__name:"AttractionsView",setup(et){const l=_([]);console.log(l);const e=_({_id:"",name:"",address:"",longitude:"",latitude:"",image:[],description:"",official:"",phone:"",idx:-1,showModal:!1,formValid:!1,submitting:!1}),b=_({name:[{required:!0,message:"\u666F\u9EDE\u540D\u7A31\u5FC5\u586B",trigger:"blur"}]}),h=async()=>{e.submitting=!0;const n=new FormData;for(const t in e)["_id","idx","formValid","showModal","submitting"].includes(t)||(t==="image"?e.image.length>0&&n.append(t,e[t][0].file):n.append(t,e[t]));try{if(e._id.length===0){const{data:t}=await p.post("/attractions",n);console.log(n),l.push(t.result),d.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:t}=await p.patch("/attractions/"+e._id,n);l[e.idx]=t.result,d.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.showModal=!1}catch(t){console.log(t),e.showModal=!1,d.fire({icon:"error",title:"\u5931\u6557",text:"\u65B0\u589E\u5931\u6557"})}e.submitting=!1},y=async n=>{d.fire({icon:"warning",title:"\u78BA\u5B9A\u522A\u9664?",showCancelButton:!0,cancelButtonColor:"#d33"}).then(async t=>{t.isConfirmed&&(await p.delete("/attractions/"+n),await d.fire({icon:"success",title:"\u6210\u529F"}),v())}).catch(t=>{d.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})})},g=(n,t)=>{e._id=n,t>-1?(e.name=l[t].name,e.address=l[t].address,e.longitude=l[t].longitude,e.latitude=l[t].latitude,e.description=l[t].description,e.official=l[t].official,e.phone=l[t].phone):(e.name="",e.address="",e.longitude="",e.latitude="",e.description="",e.official="",e.phone=""),e.image=[],e.idx=t,e.showModal=!0,e.formValid=!1,e.submitting=!1},x=_([{title:"\u5716\u7247",key:"image",render(n){return c(D,{width:"100",src:n.image})}},{title:"\u666F\u9EDE",key:"name"},{title:"\u5730\u5740",key:"address"},{title:"\u5B98\u7DB2",key:"official"},{title:"\u96FB\u8A71",key:"phone"},{title:"\u7DE8\u8F2F",key:"edit",render(n){return c(f,{strong:!0,tertiary:!0,size:"small",onClick:()=>g(n._id,n.idx)},{default:()=>"\u7DE8\u8F2F"})}},{title:"\u522A\u9664",key:"delete",render(n){return c(f,{strong:!0,tertiary:!0,size:"small",class:"bg-red",onClick:()=>y(n._id)},{default:()=>"\u522A\u9664"})}}]),m=_({pageSize:5}),v=async()=>{try{let n=0;const{data:t}=await p.get("/attractions/all");l.push(...t.result),console.log(l),l.forEach(s=>{s.idx=n++})}catch(n){d.fire({icon:"error",title:"\u5931\u6557",text:n.isAxiosError?n.response.data.message:n.message})}};return v(),(n,t)=>{const s=I,r=H,k=S("font-awesome-icon"),U=Q,M=R,V=T,A=K,C=J,B=j,N=G;return z(),E("div",L,[u("div",O,[u("div",P,[W,o(F(f),{class:"addBtn",onClick:t[0]||(t[0]=a=>g("",-1))},{default:i(()=>[X]),_:1})]),o(B,{show:e.showModal,"onUpdate:show":t[10]||(t[10]=a=>e.showModal=a),"mask-closable":!1,preset:"card",title:e._id.length>0?"\u7DE8\u8F2F\u666F\u9EDE\u8CC7\u8A0A":"\u65B0\u589E\u666F\u9EDE\u8CC7\u8A0A",style:{width:"500px"}},{default:i(()=>[o(C,{ref:"formValid","label-placement":"left",model:e,rules:b,onSubmit:q(h,["prevent"])},{default:i(()=>[o(r,{label:"\u540D\u7A31",path:"name"},{default:i(()=>[o(s,{value:e.name,"onUpdate:value":t[1]||(t[1]=a=>e.name=a)},null,8,["value"])]),_:1}),o(r,{label:"\u5730\u5740"},{default:i(()=>[o(s,{value:e.address,"onUpdate:value":t[2]||(t[2]=a=>e.address=a)},null,8,["value"])]),_:1}),o(r,{label:"\u7D93\u5EA6"},{default:i(()=>[o(s,{value:e.longitude,"onUpdate:value":t[3]||(t[3]=a=>e.longitude=a)},null,8,["value"])]),_:1}),o(r,{label:"\u7DEF\u5EA6"},{default:i(()=>[o(s,{value:e.latitude,"onUpdate:value":t[4]||(t[4]=a=>e.latitude=a)},null,8,["value"])]),_:1}),o(r,{label:"\u5716\u7247"},{default:i(()=>[o(V,{"file-list":e.image,"onUpdate:file-list":t[5]||(t[5]=a=>e.image=a),accept:"image/*","directory-dnd":"",max:1},{default:i(()=>[o(M,null,{default:i(()=>[u("div",Y,[o(k,{icon:"fa-solid fa-image"})]),o(U,{style:{"font-size":"16px"}},{default:i(()=>[Z]),_:1})]),_:1})]),_:1},8,["file-list"])]),_:1}),o(r,{label:"\u6558\u8FF0"},{default:i(()=>[o(s,{type:"textarea",value:e.description,"onUpdate:value":t[6]||(t[6]=a=>e.description=a),maxlength:"200","show-count":""},null,8,["value"])]),_:1}),o(r,{label:"\u5B98\u7DB2"},{default:i(()=>[o(s,{value:e.official,"onUpdate:value":t[7]||(t[7]=a=>e.official=a)},null,8,["value"])]),_:1}),o(r,{label:"\u96FB\u8A71"},{default:i(()=>[o(s,{value:e.phone,"onUpdate:value":t[8]||(t[8]=a=>e.phone=a)},null,8,["value"])]),_:1}),o(r,null,{default:i(()=>[u("input",{type:"button",onClick:t[9]||(t[9]=a=>e.showModal=!1),value:"\u53D6\u6D88"}),o(A,{show:e.submitting},{default:i(()=>[tt]),_:1},8,["show"])]),_:1})]),_:1},8,["model","rules","onSubmit"])]),_:1},8,["show","title"]),o(N,{columns:x,data:l,bordered:!1,pagination:m,"onUpdate:pagination":t[11]||(t[11]=a=>$(m)?m.value=a:null)},null,8,["columns","data","pagination"])])])}}};export{gt as default};
