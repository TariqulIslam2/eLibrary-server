import{r as o,j as e}from"./index-B2fBV0b0.js";import{a as d,b as n}from"./api-wfLvVcRq.js";import{l as y}from"./index-DCyy8gI1.js";import{F as M,o as F,i as k}from"./paginationfunction-CpYI36MX.js";import{a as b}from"./cil-lock-locked-b0GLSzjg.js";import{f as B}from"./index-CFYdgIcY.js";import{C as O,a as $,b as P,c as V}from"./CModalTitle-mhEHfMeo.js";import{C as Y,a as H,b as U,c as u}from"./DefaultLayout-TEfi6wH_.js";import{R as W}from"./FilePdfOutlined-EKJrLy7H.js";import{R as z}from"./CloudDownloadOutlined-aUzfchlx.js";import{C as J}from"./CModalFooter-BOHli4FM.js";import{B as G}from"./button-Cs9yHxtL.js";import{R as K}from"./FolderViewOutlined-aKyx42eZ.js";import"./AntdIcon-nBSLI4Ns.js";import"./compact-item-ChVofqhj.js";import"./index.esm-Dp7k2-ke.js";const me=()=>{const[i,C]=o.useState([]),[g,E]=o.useState(!0),p=o.useRef();y.useReactToPrint({content:()=>p.current,documentTitle:"All Document Report",onBeforeGetContent:()=>{},onAfterPrint:()=>{}});const[h,_]=o.useState([]),[D,w]=o.useState();o.useEffect(()=>{d.get(`${n}/setting/branch`).then(s=>{const a=s.data.data;_(a)}).catch(s=>{alert(s.message)})},[]);const I=()=>{d.get(`${n}/mis/branchdoc`,{headers:{branchid:D}}).then(s=>{const a=s.data.data;C(a),E(!1)}).catch(s=>{alert(s.message)})},[N,m]=o.useState(!1),[l,L]=o.useState({}),[x,f]=o.useState([]),[c,j]=o.useState("");o.useEffect(()=>{if(l!=null&&l.details)if(!c)f(l.details);else{const s=l.details.filter(a=>{var t;return(t=a==null?void 0:a.DTLS_FILE_NAME)==null?void 0:t.toLowerCase().includes(c==null?void 0:c.toLowerCase())});f(s)}},[l,c,g]);const A=async s=>{try{const a=await d.get(s,{responseType:"blob",withCredentials:!0}),t=window.URL.createObjectURL(new Blob([a.data])),r=document.createElement("a");r.href=t;const S=s.split("/").pop();r.setAttribute("download",S),document.body.appendChild(r),r.click(),r.remove(),window.URL.revokeObjectURL(t)}catch(a){console.error("Error downloading the file:",a)}},v=(s,a)=>{const t={FILE_ID:s,FILE_NAME:a,VIEW_YN:"Y",DOWNLOAD_YN:"N"};d({method:"post",url:`${n}/deshboard/totalViewDownloadCount`,data:t}).then(r=>{})},T=(s,a)=>{const t={FILE_ID:s,FILE_NAME:a,VIEW_YN:"N",DOWNLOAD_YN:"Y"};d({method:"post",url:`${n}/deshboard/totalViewDownloadCount`,data:t}).then(r=>{})},R=[{title:"TYPE",className:"dark_bg ",dataIndex:"DOC_CAT"},{title:"PROJECT NAME",className:"dark_bg ",dataIndex:"PROJECT_NAME"},{title:"BRANCH NAME",className:"dark_bg ",dataIndex:"BRANCH_NAME"},{title:"DEPARTMENT",className:"dark_bg ",dataIndex:"DEPT_NAME"},{title:"POLICY",className:"dark_bg ",dataIndex:"POLICY_NO"},{title:"DOCUMENT NAME",className:"dark_bg ",dataIndex:"FILE_NAME"},{title:"Action",className:"dark_bg ",render:(s,a)=>e.jsx("div",{className:"text-center",children:e.jsx(G,{style:{backgroundColor:"#347928",color:"#fff"},onClick:()=>{m(!N),L(a),j("")},shape:"circle",icon:e.jsx(K,{})})})}];return e.jsxs("div",{children:[e.jsxs("div",{className:"d-flex justify-content-start",children:[e.jsx("div",{className:"col-sm-4",children:e.jsxs("select",{className:"form-select form-control bba_documents-form-control",onChange:s=>w(s.target.value),children:[e.jsx("option",{value:"",children:"Select branch"}),(h==null?void 0:h.length)>0&&e.jsx(e.Fragment,{children:h.map((s,a)=>e.jsx("option",{value:s.BRANCH_ID,children:s.BRANCH_NAME}))})]})}),e.jsx("div",{className:"col-sm-4  ms-2",children:e.jsxs(b,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},onClick:()=>I(),children:[e.jsx(B,{})," Search"]})}),e.jsx("div",{className:"col-sm-4 "})]}),e.jsx("div",{className:"mt-4",ref:p,children:e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-md-12 ",children:e.jsx("div",{className:"table-responsive",children:e.jsx(M,{className:"table-striped",pagination:{total:i===void 0?0:i.length,showTotal:(s,a)=>`Showing ${a[0]} to ${a[1]} of ${s} entries`,showSizeChanger:!0,onShowSizeChange:F,itemRender:k},style:{overflowX:"auto"},columns:R,bordered:!0,dataSource:i===void 0?[]:i,rowKey:s=>s.COM_ID,onChange:console.log("change")})})})})})," ",l&&e.jsxs(O,{visible:N,size:"lg",onClose:()=>m(!1),"aria-labelledby":"LiveDemoExampleLabel",children:[e.jsx($,{onClose:()=>m(!1),children:e.jsx(P,{id:"LiveDemoExampleLabel",style:{fontFamily:"Segoe UI"},children:"View Document Files"})}),e.jsxs(V,{children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-6",children:[" ",e.jsx("div",{className:"",children:e.jsxs("div",{className:"position-relative",style:{marginLeft:"30px",marginBottom:"10px"},children:[e.jsx("i",{className:"fa fa-search position-absolute",style:{left:"10px",top:"50%",transform:"translateY(-50%)",color:"#999"}}),e.jsx("input",{onChange:s=>{j(s.target.value)},className:"form-control w-100 shadow ps-4 ms-1",type:"text",placeholder:"Search Here",style:{paddingLeft:"35px"}})]})})]}),e.jsx("div",{className:"col-sm-6"})]}),e.jsx("div",{className:"row px-5 py-1",children:e.jsxs("table",{class:"table table-bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"bgColor",scope:"col",children:"#"}),e.jsx("th",{className:"bgColor",scope:"col",children:"File"}),e.jsx("th",{className:"bgColor",scope:"col",children:"Action"})]})}),e.jsx("tbody",{children:x==null?void 0:x.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:++a}),e.jsx("td",{children:s.DTLS_FILE_NAME?s.DTLS_FILE_NAME:" "}),e.jsxs("td",{children:[" ",e.jsxs(Y,{className:"",children:[e.jsx(H,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},children:"Action"}),e.jsxs(U,{children:[e.jsxs(u,{onClick:()=>{v(s.TRAN_DTL_ID,s.DTLS_FILE_NAME)},href:`${n}/static/public/image/${s==null?void 0:s.FILE_PATH}`,target:"_blank",children:[e.jsx(W,{})," View"]}),e.jsxs(u,{style:{cursor:"pointer"},onClick:()=>{A(`${n}/static/public/image/${s==null?void 0:s.FILE_PATH}`),T(s.TRAN_DTL_ID,s.DTLS_FILE_NAME)},children:[e.jsx(z,{})," Download"]})]})]})]})]},a))})]})}),e.jsx("div",{className:"submit-section",children:e.jsx(J,{className:"justify-content-center",style:{borderTop:"none"},children:e.jsx(b,{color:"secondary",onClick:()=>m(!1),children:"Close"})})})]})]})]})};export{me as default};
