import{Q as x,r as p,a as m,R as k,o as y,c as B,e as o,b as e,w as t,d as R,U,V as a,_ as V,W as C,X as N}from"./index.246037ca.js";import{_ as $}from"./Modal.6271f0e1.js";import{_ as z,a as S}from"./FormItem.c98f56d6.js";import"./Warning.43cd7505.js";import"./index.20db2190.js";const q={id:"Login"},A={class:"container"},F=o("h1",null,"\u767B\u5165",-1),L=a("\u5FD8\u8A18\u5BC6\u78BC"),M=a("\u5BC4\u51FA\u5BC6\u78BC\u91CD\u8A2D"),T=o("input",{class:"loginBtn",type:"submit",value:" \u767B\u5165"},null,-1),Z={class:"toRegister"},E=a("\u6C92\u6709\u5E33\u865F\uFF1F"),G=a("\u524D\u5F80\u8A3B\u518A"),H={id:"Footer"},I={class:"container"},O=a("\xA9COPYRIGHT 2022 "),P=o("span",null,"\u806F\u7D61\u6211\u5011",-1),K={__name:"LoginView",setup(Q){const g=x(),f=p(!1),r=p(!1),s=m({account:"",password:""}),h=m({account:[{required:!0,message:"\u5E33\u865F\u5FC5\u586B",trigger:"blur"},{min:4,max:20,message:"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u78BC\u5FC5\u586B",trigger:"blur"},{min:4,max:20,message:"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",trigger:"blur"},{pattern:/^[a-zA-Z0-9]+$/,message:"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210",trigger:"blur"}]}),v=()=>{g.login(s)};return(W,n)=>{const _=V,u=S,i=C,d=z,w=N,b=$,c=k("router-link");return y(),B(U,null,[o("div",q,[o("div",A,[F,e(d,{ref_key:"formRef",ref:f,model:s,rules:h,onSubmit:R(v,["prevent"])},{default:t(()=>[e(u,{label:"\u5E33\u865F",path:"account"},{default:t(()=>[e(_,{value:s.account,"onUpdate:value":n[0]||(n[0]=l=>s.account=l),placeholder:"\u8F38\u5165\u5E33\u865F",minlength:"4",maxlength:"20",round:""},null,8,["value"])]),_:1}),e(u,{label:"\u5BC6\u78BC",path:"password"},{default:t(()=>[e(_,{type:"password",value:s.password,"onUpdate:value":n[1]||(n[1]=l=>s.password=l),placeholder:"\u8F38\u5165\u5BC6\u78BC",minlength:"4",maxlength:"20",round:""},null,8,["value"])]),_:1}),e(i,{onClick:n[2]||(n[2]=l=>r.value=!0)},{default:t(()=>[L]),_:1}),e(b,{show:r.value,"onUpdate:show":n[3]||(n[3]=l=>r.value=l)},{default:t(()=>[e(w,{style:{width:"600px"},title:"\u5FD8\u8A18\u5BC6\u78BC",bordered:!1,size:"huge",role:"dialog"},{footer:t(()=>[e(i,null,{default:t(()=>[M]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>[e(_,{placeholder:"\u8F38\u5165\u96FB\u5B50\u4FE1\u7BB1",round:""})]),_:1})]),_:1})]),_:1},8,["show"]),e(u,null,{default:t(()=>[T]),_:1}),o("div",Z,[o("p",null,[E,e(c,{to:"/register"},{default:t(()=>[G]),_:1})])])]),_:1},8,["model","rules","onSubmit"])])]),o("div",H,[o("div",I,[o("p",null,[O,e(c,{to:"/contact"},{default:t(()=>[P]),_:1})])])])],64)}}};export{K as default};
