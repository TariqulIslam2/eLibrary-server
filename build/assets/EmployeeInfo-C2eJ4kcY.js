import{r as s,j as e,L as r}from"./index-BnTmYUkP.js";import{a as h,b as f}from"./api-wfLvVcRq.js";import{u as i}from"./index.esm-CJb1F2Ko.js";import{F as g,o as N,i as E,R as u}from"./paginationfunction-D0VE8UAN.js";import{s as j}from"./searchFunction-BiSHdcbM.js";import{a as b}from"./cil-lock-locked-Df1Z1tUn.js";import{B as S}from"./button-CXLSpfiv.js";import"./AntdIcon-ZEkvb8A9.js";import"./compact-item-BqMqF4CM.js";import"./index-ClsgFobk.js";const L=()=>{const[o,n]=s.useState([]);s.useState(!1),s.useState({});const[d,c]=s.useState(!1);s.useState(!1);const[l,m]=s.useState("");i(),s.useState(!1),s.useEffect(()=>{h.get(`${f}/setting/employee`).then(a=>{const t=a.data.data,p=j(t,l,"CARD_NO","EMP_NAME","MOBILE","EMAIL","DESIG_NAME","DEPT_NAME","EMP_STATUS");n(p),c(!1)}).catch(a=>{alert(a.message)})},[l,d]),i();const x=[{title:"Card NO",className:"dark_bg ",dataIndex:"CARD_NO"},{title:"Employee Name",className:"dark_bg ",render:(a,t)=>e.jsx("div",{className:"",children:e.jsx("div",{children:t.EMP_NAME})})},{title:"Mobile",className:"dark_bg ",dataIndex:"MOBILE"},{title:"Email",className:"dark_bg ",dataIndex:"EMAIL"},{title:"Designation",className:"dark_bg ",dataIndex:"DESIG_NAME"},{title:"Department",className:"dark_bg ",dataIndex:"DEPT_NAME"},{title:"Status",className:"dark_bg ",dataIndex:"EMP_STATUS"},{title:"Action",className:"dark_bg",render:(a,t)=>e.jsx("div",{className:"text-center",children:e.jsx(r,{to:`/setting/employeedetails/${t.EMPLOYEE_ID}`,children:e.jsx(S,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Access Product",shape:"circle",icon:e.jsx(u,{})})})})}];return e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex justify-content-end",children:[e.jsx("div",{className:"me-2",children:e.jsxs("div",{className:"position-relative",children:[e.jsx("i",{className:"fa fa-search position-absolute",style:{left:"10px",top:"50%",transform:"translateY(-50%)",color:"#999"}}),e.jsx("input",{onChange:a=>{m(a.target.value)},className:"form-control w-100 shadow ps-4 ms-1",type:"text",placeholder:"Search Here",style:{paddingLeft:"35px"}})]})}),e.jsxs("div",{className:"text-end",children:[e.jsxs(r,{to:"/setting/employeecreate",children:[" ",e.jsx(b,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},children:"+ Add Employee"})]}),e.jsx("div",{className:"mb-1"})]})]}),e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-md-12 ",children:e.jsx("div",{className:"table-responsive",children:e.jsx(g,{className:"table-striped",pagination:{total:o===void 0?0:o.length,showTotal:(a,t)=>`Showing ${t[0]} to ${t[1]} of ${a} entries`,showSizeChanger:!0,onShowSizeChange:N,itemRender:E},style:{overflowX:"auto"},columns:x,bordered:!0,dataSource:o===void 0?[]:o,rowKey:a=>a.EMPLOYEE_ID,onChange:console.log("change")})})})})})]})};export{L as default};
