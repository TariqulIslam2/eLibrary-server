import{r as a,j as e}from"./index-DO-SV_97.js";import{s as o}from"./DefaultLayout-BdiyXKQm.js";import{a as u,b as h}from"./api-wfLvVcRq.js";import{u as j}from"./index.esm-cMcdnTEW.js";import{F as $,o as M,i as R}from"./paginationfunction-cQwcg583.js";import{s as z}from"./searchFunction-BiSHdcbM.js";import{a as n}from"./cil-lock-locked-CYdsg60D.js";import{C as y,a as C,b as g,c as D}from"./CModalTitle-DQifuASo.js";import{C as N,a as v}from"./CRow-C5pS5nlF.js";import{C as S}from"./CModalFooter-KGCUttOr.js";import{B}from"./button-B-GL0v4J.js";import{R as H}from"./EditOutlined-Dj1e-Inx.js";import"./index.esm-CDc6Ey47.js";import"./AntdIcon-p-8olrNo.js";import"./compact-item-CogaolUq.js";import"./index-b-rH6Afy.js";const ne=()=>{const[c,T]=a.useState([]),[p,l]=a.useState(!1),[d,O]=a.useState({}),[k,m]=a.useState(!1),[x,r]=a.useState(!1),[f,w]=a.useState("");a.useEffect(()=>{u.get(`${h}/setting/documenttype`).then(s=>{const t=s.data.data,i=z(t,f,"DOC_TYPE");T(i),m(!1)}).catch(s=>{alert(s.message)})},[f,k]);const{register:E,reset:F,formState:{errors:b},handleSubmit:I}=j(),{register:_,reset:Y,formState:{errors:V},handleSubmit:L}=j(),P=s=>{o({title:"Are you sure?",buttons:!0}).then(t=>{t?(s.DOC_NO=d.DOC_NO,u({method:"put",url:`${h}/setting/documenttype`,data:s}).then(i=>{i&&(o({title:"Thank You !",text:"Successfully Update",icon:"success",button:"Ok"}),m(!0),Y(),r(!1))})):o("Your imaginary file is safe!")})},U=s=>{o({title:"Are you sure?",buttons:!0}).then(t=>{t?u({method:"post",url:`${h}/setting/documenttype`,data:s}).then(i=>{i&&(o({title:"Thank You !",text:"Successfully Insert",icon:"success",button:"Ok"}),m(!0),F(),l(!1))}):o("Your imaginary file is safe!")})},A=[{title:" ID",className:"dark_bg text-center",dataIndex:"DOC_NO",width:"10%"},{title:"Document Type",className:"dark_bg ",dataIndex:"DOC_TYPE",width:"70%"},{title:"Action",width:"20%",className:"dark_bg text-center",render:(s,t)=>e.jsx("div",{className:"text-center",children:e.jsx(B,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},onClick:()=>{r(!x),O(t)},title:"Access Product",shape:"circle",icon:e.jsx(H,{})})})}];return e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex justify-content-end",children:[e.jsx("div",{className:"me-2",children:e.jsxs("div",{className:"position-relative",children:[e.jsx("i",{className:"fa fa-search position-absolute",style:{left:"10px",top:"50%",transform:"translateY(-50%)",color:"#999"}}),e.jsx("input",{onChange:s=>{w(s.target.value)},className:"form-control w-100 shadow ps-4 ms-1",type:"text",placeholder:"Search Here",style:{paddingLeft:"35px"}})]})}),e.jsx("div",{className:"text-end",children:e.jsx(n,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},onClick:()=>l(!p),children:"+ Add Document Type"})})]}),e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-md-12 ",children:e.jsx("div",{className:"table-responsive",children:e.jsx($,{className:"table-striped",pagination:{total:c===void 0?0:c.length,showTotal:(s,t)=>`Showing ${t[0]} to ${t[1]} of ${s} entries`,showSizeChanger:!0,onShowSizeChange:M,itemRender:R},style:{overflowX:"auto"},columns:A,bordered:!0,dataSource:c===void 0?[]:c,rowKey:s=>s.DOC_NO,onChange:console.log("change")})})})})}),e.jsxs(y,{visible:p,size:"lg",onClose:()=>l(!1),"aria-labelledby":"LiveDemoExampleLabel",children:[e.jsx(C,{onClose:()=>l(!1),children:e.jsx(g,{id:"LiveDemoExampleLabel",style:{fontFamily:"Segoe UI"},children:"Add Document Type"})}),e.jsx(D,{children:e.jsxs("form",{onSubmit:I(U),children:[e.jsx(N,{children:e.jsx(v,{xs:12,children:e.jsxs("div",{className:"mb-1",children:[e.jsxs("label",{htmlFor:"exampleFormControlInput14",className:"form-label small",children:["Document Type ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",className:`form-control ${b.DOC_TYPE?"is-invalid":""}`,id:"exampleFormControlInput14",placeholder:"Document Type",...E("DOC_TYPE",{required:!0})}),e.jsx("div",{className:"invalid-feedback",children:b.DOC_TYPE&&"Please enter a document type."})]})})}),e.jsx("div",{className:"submit-section",children:e.jsxs(S,{className:"justify-content-center",style:{borderTop:"none"},children:[e.jsx(n,{color:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(n,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},type:"submit",children:"Add"})]})})]})})]}),d&&e.jsxs(y,{visible:x,size:"lg",onClose:()=>r(!1),"aria-labelledby":"LiveDemoExampleLabel",children:[e.jsx(C,{onClose:()=>r(!1),children:e.jsx(g,{id:"LiveDemoExampleLabel",style:{fontFamily:"Segoe UI"},children:"Update Department Information"})}),e.jsx(D,{children:e.jsxs("form",{onSubmit:L(P),children:[e.jsx(N,{children:e.jsx(v,{xs:12,children:e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",style:{fontFamily:"Segoe UI"},children:"Document Type"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",placeholder:d.DOC_TYPE,..._("DOC_TYPE")})]})})}),e.jsx("div",{className:"submit-section",children:e.jsxs(S,{className:"justify-content-center",style:{borderTop:"none"},children:[e.jsx(n,{color:"secondary",onClick:()=>r(!1),children:"Close"}),e.jsx(n,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},type:"submit",children:"Update"})]})})]})})]})]})};export{ne as default};
