import{x as M,k as F,r as o,A as N,j as t}from"./index-B2fBV0b0.js";import{u as G}from"./index.esm-Cgl_2XJM.js";import{a as h,b as i}from"./api-wfLvVcRq.js";import{C as y,a as O}from"./CRow-Bpgedh6M.js";import{S as C}from"./index-CFYdgIcY.js";import{a as T}from"./cil-lock-locked-b0GLSzjg.js";import"./AntdIcon-nBSLI4Ns.js";import"./compact-item-ChVofqhj.js";const $=()=>{const{roleId:D}=M(),{register:p,reset:_,handleSubmit:g}=G(),I=F(),[f,A]=o.useState([]),[r,S]=o.useState(),[d,c]=o.useState([]),[n,b]=o.useState([]),E=N();o.useEffect(()=>{h.get(`${i}/admistration/module`).then(e=>A(e.data.data)).catch(e=>alert(e.message))},[]),o.useEffect(()=>{h.get(`${i}/admistration/roleaccessview/${D}`).then(e=>{const a=e.data.data;b(a.master),sessionStorage.setItem("subModuleData",JSON.stringify(a.Details))}).catch(e=>alert(e.message))},[D]),o.useEffect(()=>{if(r){const e=JSON.parse(sessionStorage.getItem("subModuleData"))||[],a=e.filter(s=>s.MODULE_MST_ID===r);a.length>0?c(a):h.get(`${i}/admistration/submodule/${r}`).then(s=>{const l=s.data.data.map(x=>({...x,MODULE_MST_ID:r,VISIBLE_FLAG:!1,WRITE_FLAG:!1,EDIT_FLAG:!1,READ_FLAG:!1}));c(l);const m=[...e,...l];sessionStorage.setItem("subModuleData",JSON.stringify(m))}).catch(s=>{console.error("Error fetching submodule data:",s.message)})}},[r]);const j=(e,a)=>{const s=[...d];s[e]={...s[e],VISIBLE_FLAG:a,WRITE_FLAG:a,EDIT_FLAG:a,READ_FLAG:a},c(s),L(r,s)},u=(e,a,s)=>{const l=[...d];l[e][a]=s,c(l),L(r,l)},L=(e,a)=>{const m=[...(JSON.parse(sessionStorage.getItem("subModuleData"))||[]).filter(x=>x.MODULE_MST_ID!==e),...a];sessionStorage.setItem("subModuleData",JSON.stringify(m))},R=e=>{const a=JSON.parse(sessionStorage.getItem("subModuleData"))||[];e.array=a,e.USER_ID=E==null?void 0:E.employee_id,e.ROLE_NAME||(e.ROLE_NAME=n.ROLE_NAME),e.ROLE_DESC||(e.ROLE_DESC=n.ROLE_DESC),e.ROLE_ID=n.ROLE_ID,h.post(`${i}/admistration/roleaccesscreateByroleId`,e).then(s=>{_(),sessionStorage.removeItem("subModuleData"),c([]),I(-1)}).catch(s=>{console.error("Error submitting data:",s.message)})};return t.jsx("div",{children:t.jsxs("form",{onSubmit:g(R),children:[t.jsx(y,{children:t.jsxs(O,{xs:12,children:[t.jsxs("div",{className:"mb-1",children:[t.jsx("label",{className:"form-label small",children:"Role Name"}),t.jsx("input",{type:"text",className:"form-control",defaultValue:n.ROLE_NAME,...p("ROLE_NAME")})]}),t.jsxs("div",{className:"mb-1",children:[t.jsx("label",{className:"form-label small",children:"Role Description"}),t.jsx("input",{type:"text",className:"form-control",defaultValue:n.ROLE_DESC,...p("ROLE_DESC")})]}),t.jsxs("div",{className:"mb-1",children:[t.jsx("label",{className:"form-label small",children:"Select Module"}),t.jsx(C,{showSearch:!0,placeholder:"Select a Module",className:"w-100",onChange:S,options:f.map(e=>({value:e.MODULE_MST_ID,label:e.MODULE_NAME}))})]}),d.length>0&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{}),t.jsxs("table",{className:"table table-bordered",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"text-center",children:[t.jsx("th",{className:"text-start",children:"Sub Module"}),t.jsx("th",{children:"All"}),t.jsx("th",{children:"View"}),t.jsx("th",{children:"Write"}),t.jsx("th",{children:"Edit"}),t.jsx("th",{children:"Read"})]})}),t.jsx("tbody",{children:d.map((e,a)=>t.jsxs("tr",{className:"text-center",children:[t.jsx("td",{className:"text-start",children:e.MODULE_DTL_NAME}),t.jsx("td",{children:t.jsx("input",{type:"checkbox",style:{width:"25px",height:"25px"},checked:e.VISIBLE_FLAG==="true"&&e.WRITE_FLAG==="true"&&e.EDIT_FLAG==="true"&&e.READ_FLAG==="true"||e.VISIBLE_FLAG===!0&&e.WRITE_FLAG===!0&&e.EDIT_FLAG===!0&&e.READ_FLAG===!0,onChange:s=>j(a,s.target.checked)})}),t.jsx("td",{children:t.jsx("input",{type:"checkbox",checked:e.VISIBLE_FLAG==="true"||e.VISIBLE_FLAG===!0,style:{width:"25px",height:"25px"},onChange:s=>u(a,"VISIBLE_FLAG",s.target.checked)})}),t.jsx("td",{children:t.jsx("input",{type:"checkbox",checked:e.WRITE_FLAG==="true"||e.WRITE_FLAG===!0,style:{width:"25px",height:"25px"},onChange:s=>u(a,"WRITE_FLAG",s.target.checked)})}),t.jsx("td",{children:t.jsx("input",{type:"checkbox",checked:e.EDIT_FLAG==="true"||e.EDIT_FLAG===!0,style:{width:"25px",height:"25px"},onChange:s=>u(a,"EDIT_FLAG",s.target.checked)})}),t.jsx("td",{children:t.jsx("input",{type:"checkbox",checked:e.READ_FLAG==="true"||e.READ_FLAG===!0,style:{width:"25px",height:"25px"},onChange:s=>u(a,"READ_FLAG",s.target.checked)})})]},a))})]})]})]})}),t.jsx(T,{type:"submit",className:"mt-3",style:{backgroundColor:"#3C8DBC",color:"#fff"},children:"Save"})]})})};export{$ as default};
