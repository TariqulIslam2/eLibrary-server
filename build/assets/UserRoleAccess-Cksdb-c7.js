import{r as t,j as e,L as i}from"./index-BnTmYUkP.js";import{a as m,b as d}from"./api-wfLvVcRq.js";import"./DefaultLayout-BXqfuJ5f.js";import{u}from"./index.esm-CJb1F2Ko.js";import{F as O,o as _,i as P}from"./paginationfunction-D0VE8UAN.js";import{s as $}from"./searchFunction-BiSHdcbM.js";import{a as p}from"./cil-lock-locked-Df1Z1tUn.js";import{M as k}from"./index-B5xwxV_0.js";import{C as U,a as j}from"./CRow-DtjUj6WL.js";import{S as B}from"./index-ClsgFobk.js";import{C as b}from"./CFormSelect-D3I97q4w.js";import{C as T}from"./CModalFooter-D8yuYI43.js";import{B as N}from"./button-CXLSpfiv.js";import{R as V}from"./FolderViewOutlined-BE11_cOL.js";import{R as Y}from"./EditOutlined-BtGnOwYh.js";import"./index.esm-DG5RHfQW.js";import"./AntdIcon-ZEkvb8A9.js";import"./compact-item-BqMqF4CM.js";import"./CFormControlWrapper-9QT-VOct.js";const fe=()=>{const[o,E]=t.useState([]),[h,C]=t.useState(""),[g,x]=t.useState(!1),[l,z]=t.useState({});t.useState(!1);const{register:r,reset:S,formState:{errors:H},handleSubmit:I}=u(),{register:K,reset:W,setValue:f,formState:{errors:X},handleSubmit:q}=u(),w=s=>{const a=D.split("&");s.EMPLOYEE_ID=parseInt(a[0]),s.PHONE_NUMBER=a[1],s.NAME=a[2],m.post(`${d}/usercreation`,s).then(n=>{S(),c(!1),x(!0)}).catch(n=>{alert(n.message)})},[v,y]=t.useState([]),[D,L]=t.useState(),R=(s,a)=>((a==null?void 0:a.label)??"").toLowerCase().includes(s.toLowerCase()),A=s=>{L(s)};t.useEffect(()=>{m.get(`${d}/setting/employee`).then(s=>{y(s.data.data)}).catch(s=>{alert(s.message)})},[]),t.useEffect(()=>{m.get(`${d}/admistration/roleaccess`).then(s=>{const a=s.data.data,n=$(a,h,"ROLE_NAME","ROLE_DESC");E(n),x(!1)}).catch(s=>{alert(s.message)})},[h,g]),t.useEffect(()=>{l&&Object.keys(l).forEach(s=>{f(s,l[s])})},[l,f]);const M=[{title:"#",className:"dark_bg text-center",dataIndex:"ROLE_ID",width:"10%"},{title:"Role Name",className:"dark_bg ",dataIndex:"ROLE_NAME",width:"35%"},{title:"Description",className:"dark_bg ",dataIndex:"ROLE_DESC",width:"35%"},{title:"Action",width:"20%",className:"dark_bg ",render:(s,a)=>e.jsxs("div",{className:"text-center",children:[e.jsx(i,{to:`/admistration/viewroleinfo/${a.ROLE_ID}`,children:e.jsx(N,{style:{backgroundColor:"#88C273",color:"#fff"},"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Access Product",shape:"circle",icon:e.jsx(V,{})})}),e.jsx(i,{to:`/admistration/updateRole/${a.ROLE_ID}`,children:e.jsx(N,{style:{backgroundColor:"#3C8DBC",color:"#fff"},"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Access Product",shape:"circle",icon:e.jsx(Y,{})})})]})}],[F,c]=t.useState(!1);return e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex justify-content-end",children:[e.jsx("div",{className:"me-2",children:e.jsxs("div",{className:"position-relative",children:[e.jsx("i",{className:"fa fa-search position-absolute",style:{left:"10px",top:"50%",transform:"translateY(-50%)",color:"#999"}}),e.jsx("input",{onChange:s=>{C(s.target.value)},className:"form-control w-100 shadow ps-4 ms-1",type:"text",placeholder:"Search Here",style:{paddingLeft:"35px"}})]})}),e.jsx("div",{className:"text-end",children:e.jsx(i,{to:"/admistration/createnewrole",children:e.jsx(p,{style:{backgroundColor:"#3C8DBC",color:"#fff"},children:"+ Create New Role"})})})]}),e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-md-12 ",children:e.jsx("div",{className:"table-responsive",children:e.jsx(O,{className:"table-striped",pagination:{total:o===void 0?0:o.length,showTotal:(s,a)=>`Showing ${a[0]} to ${a[1]} of ${s} entries`,showSizeChanger:!0,onShowSizeChange:_,itemRender:P},style:{overflowX:"auto"},columns:M,bordered:!0,dataSource:o===void 0?[]:o,rowKey:s=>s.EMPLOYEE_ID,onChange:console.log("change")})})})})}),e.jsx(k,{title:"User Creation",width:1e3,footer:!0,open:F,onCancel:()=>c(!1),children:e.jsxs("form",{onSubmit:I(w),children:[e.jsxs(U,{children:[e.jsxs(j,{xs:6,children:[e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label fw-bold small",children:"Employee Name"}),e.jsx(B,{showSearch:!0,placeholder:"Select a Employee",optionFilterProp:"children",className:"w-100",onChange:A,filterOption:R,options:v.map(s=>({value:`${s.EMPLOYEE_ID}&${s.MOBILE}&${s.EMP_NAME}`,label:s.EMP_NAME}))})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label fw-bold small",children:"Email"}),e.jsx("input",{type:"email",className:"form-control",id:"exampleFormControlInput14",placeholder:"Email",...r("EMAIL")})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label fw-bold small",children:"Password"}),e.jsx("input",{type:"password",className:"form-control",id:"exampleFormControlInput14",placeholder:"Password",...r("PASSWORD")})]})]}),e.jsxs(j,{xs:6,children:[e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label fw-bold small",children:"User Status"}),e.jsxs(b,{className:"mb-3",...r("USER_STATUS"),"aria-label":"Large select example",children:[e.jsx("option",{children:"Open this select menu"}),e.jsx("option",{value:"VALID",children:"VALID"}),e.jsx("option",{value:"INVALID",children:"INVALID"})]})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label fw-bold small",children:"User Type"}),e.jsxs(b,{className:"mb-3",...r("USER_TYPE"),"aria-label":"Large select example",children:[e.jsx("option",{children:"Open this select menu"}),e.jsx("option",{value:"ADMIN",children:"ADMIN"}),e.jsx("option",{value:"USER",children:"USER"})]})]})]})]}),e.jsx("div",{className:"submit-section mt-5",children:e.jsxs(T,{className:"justify-content-center",style:{borderTop:"none"},children:[e.jsx(p,{color:"secondary",className:"me-2",onClick:()=>c(!1),children:"Close"}),e.jsx(p,{style:{backgroundColor:"#3C8DBC",color:"#fff"},type:"submit",children:"Add"})]})})]})})]})};export{fe as default};
