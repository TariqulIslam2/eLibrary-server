import{r as o,_ as k,R as v,b as S,c as E,P as p,k as R,j as e}from"./index-BnTmYUkP.js";import{C as _,a as h}from"./index.esm-DG5RHfQW.js";import{a as u,b as x}from"./api-wfLvVcRq.js";import{u as I}from"./index.esm-CJb1F2Ko.js";import{C,a as g}from"./CRow-DtjUj6WL.js";import{C as P,a as T,b as f,c as j,d as G,e as b}from"./cil-user-DM9w-sHq.js";import{c as L,a as U}from"./cil-lock-locked-Df1Z1tUn.js";import"./CFormControlWrapper-9QT-VOct.js";var l=o.forwardRef(function(s,c){var n=s.children,i=s.className,r=k(s,["children","className"]);return v.createElement("div",S({className:E("card-group",i)},r,{ref:c}),n)});l.propTypes={children:p.node,className:p.string};l.displayName="CCardGroup";const K=()=>{const[s,c]=o.useState(""),[n,i]=o.useState(""),[r,N]=o.useState({});R();const{register:$,reset:B,formState:{errors:D},handleSubmit:y}=I();o.useEffect(()=>{u.get(`${x}/admistration/companyinfo`).then(a=>{const t=a.data.data[0];N(t)}).catch(a=>{alert(a.message)})},[]);const w=()=>{if(s&&n){const a={username:s,password:n};u({method:"post",url:`${x}/loginCheck`,headers:{"Content-Type":"application/json"},credentials:"include",data:a}).then(t=>{var d,m;t.data.error?alert(t.data.message):(m=(d=t.data)==null?void 0:d.data)!=null&&m.isMatchedPass?(document.cookie=`data = ${t.data.data.token} ; max-age=7200; path=/`,window.location.href="/dashboard"):alert("Email and password doesn't match")})}else alert("field missing")};return e.jsx("div",{className:"login-bg-background bg-body-tertiary  min-vh-100",children:e.jsx("div",{className:" min-vh-100 d-flex flex-row align-items-center",style:{backgroundColor:"#0000006b"},children:e.jsx(_,{children:e.jsx(C,{className:"justify-content-center",children:e.jsx(g,{md:8,xl:4,sm:12,lg:4,children:e.jsx(l,{children:e.jsx(P,{className:"p-4 text-center",style:{backgroundColor:"rgb(0 0 0 / 6%)"},children:e.jsx(T,{children:e.jsxs("form",{onSubmit:y(w),children:[e.jsx("h1",{className:"text-white",children:r==null?void 0:r.SHORT_NAME}),e.jsx("p",{className:" text-white",children:"Sign In to your account"}),e.jsxs(f,{className:"mb-3",style:{backgroundColor:"#0000006b"},children:[e.jsx(j,{children:e.jsx(h,{icon:G})}),e.jsx(b,{placeholder:"Username",autoComplete:"username",onChange:a=>c(a.target.value)})]}),e.jsxs(f,{className:"mb-4",children:[e.jsx(j,{children:e.jsx(h,{icon:L})}),e.jsx(b,{type:"password",placeholder:"Password",onChange:a=>i(a.target.value),autoComplete:"current-password"})]}),e.jsx(C,{className:"text-center",children:e.jsx(g,{xs:12,children:e.jsx(U,{type:"submit",className:"px-5 bgColor",children:"Login"})})})]})})})})})})})})})};export{K as default};
