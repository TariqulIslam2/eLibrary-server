import{r as s,j as e,L as C}from"./index-BnTmYUkP.js";import{a as x,b as g}from"./api-wfLvVcRq.js";import{u as U}from"./index.esm-CJb1F2Ko.js";import{F as f,o as p,i as b}from"./paginationfunction-D0VE8UAN.js";import{s as S}from"./searchFunction-BiSHdcbM.js";import{C as y,a as I,b as O,c as A}from"./CModalTitle-DvCGmg8K.js";import{B as T}from"./button-CXLSpfiv.js";import"./AntdIcon-ZEkvb8A9.js";import"./compact-item-BqMqF4CM.js";import"./index-ClsgFobk.js";import"./DefaultLayout-BXqfuJ5f.js";import"./cil-lock-locked-Df1Z1tUn.js";import"./index.esm-DG5RHfQW.js";const Z=()=>{const[l,D]=s.useState([]),[r,M]=s.useState([]),[i,j]=s.useState(""),[N,m]=s.useState(!1),[o,v]=s.useState({}),[n,_]=s.useState(""),[h,d]=s.useState(!1),{register:$,reset:k,setValue:u,formState:{errors:F},handleSubmit:z}=U();s.useEffect(()=>{x.get(`${g}/admistration/module`).then(t=>{const a=t.data.data,c=S(a,i,"MODULE_NAME");D(c),m(!1)}).catch(t=>{alert(t.message)})},[i,N]),s.useEffect(()=>{n&&(()=>{x.get(`${g}/admistration/submodule/${n}`).then(a=>{const c=a.data.data,w=S(c,i,"MODULE_DTL_NAME");M(w),m(!1)}).catch(a=>{alert(a.message)})})()},[i,n]),s.useEffect(()=>{o&&Object.keys(o).forEach(t=>{u(t,o[t])})},[o,u]);const E=[{title:"SL",className:"dark_bg text-center",dataIndex:"MODULE_MST_ID",width:"10%"},{title:"Module name",className:"dark_bg ",dataIndex:"MODULE_NAME",width:"70%"},{title:"Action",width:"20%",className:"dark_bg text-center",render:(t,a)=>e.jsx("div",{className:"text-center",children:e.jsxs(T,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},onClick:()=>{d(!h),v(a),_(a.MODULE_MST_ID)},"data-bs-toggle":"tooltip","data-bs-placement":"top",children:[" ","Sub Module"]})})}],L=[{title:"SL",className:"dark_bg text-center",dataIndex:"MODULE_DTL_ID",width:"10%"},{title:"Sub Module",className:"dark_bg ",width:"90%",render:(t,a)=>e.jsx("div",{className:"text-start",children:e.jsx(C,{to:`${a.APP_PAGE_NO}`,className:"text-decoration-none text-black",children:e.jsx("td",{children:a.MODULE_DTL_NAME})})})}];return e.jsxs("div",{children:[e.jsx("div",{className:"d-flex justify-content-end",children:e.jsx("div",{className:"me-2",children:e.jsxs("div",{className:"position-relative",children:[e.jsx("i",{className:"fa fa-search position-absolute",style:{left:"10px",top:"50%",transform:"translateY(-50%)",color:"#999"}}),e.jsx("input",{onChange:t=>{j(t.target.value)},className:"form-control w-100 shadow ps-4 ms-1",type:"text",placeholder:"Search Here",style:{paddingLeft:"35px"}})]})})}),e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-md-12 ",children:e.jsx("div",{className:"table-responsive",children:e.jsx(f,{className:"table-striped",pagination:{total:l===void 0?0:l.length,showTotal:(t,a)=>`Showing ${a[0]} to ${a[1]} of ${t} entries`,showSizeChanger:!0,onShowSizeChange:p,itemRender:b},style:{overflowX:"auto"},columns:E,bordered:!0,dataSource:l===void 0?[]:l,rowKey:t=>t.MODULE_MST_ID,onChange:console.log("change")})})})})}),o&&e.jsxs(y,{visible:h,size:"lg",onClose:()=>d(!1),"aria-labelledby":"LiveDemoExampleLabel",children:[e.jsx(I,{onClose:()=>d(!1),children:e.jsxs(O,{style:{fontFamily:"Segoe UI",textAlign:"center"},children:["Module: ",o.MODULE_NAME]})}),e.jsx(A,{children:e.jsx("div",{className:"table-responsive",children:e.jsx(f,{className:"table-striped",pagination:{total:r===void 0?0:r.length,showTotal:(t,a)=>`Showing ${a[0]} to ${a[1]} of ${t} entries`,showSizeChanger:!0,onShowSizeChange:p,itemRender:b},style:{overflowX:"auto"},columns:L,bordered:!0,dataSource:r===void 0?[]:r,rowKey:t=>t.MODULE_MST_ID,onChange:console.log("change")})})})]})]})};export{Z as default};
