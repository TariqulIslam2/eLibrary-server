import{x as h,r as d,j as e}from"./index-BnTmYUkP.js";import{a as x,b as o}from"./api-wfLvVcRq.js";const b=()=>{var l,c,a;const{roleId:n}=h(),[s,i]=d.useState([]);return d.useEffect(()=>{x.get(`${o}/admistration/roleaccessview/${n}`).then(t=>{const r=t.data.data;i(r)}).catch(t=>{alert(t.message)})},[]),e.jsx("div",{children:s?e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table table-bordered  ",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{width:"30%"},children:e.jsx("span",{className:"fw-bold",children:"Role name"})}),e.jsx("td",{style:{width:"70%"},children:(l=s==null?void 0:s.master)==null?void 0:l.ROLE_NAME})]}),e.jsxs("tr",{children:[e.jsxs("td",{style:{width:"30%"},children:[" ",e.jsx("span",{className:"fw-bold",children:"Role description"})]}),e.jsx("td",{style:{width:"70%"},children:(c=s==null?void 0:s.master)==null?void 0:c.ROLE_DESC})]})]})})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-bordered table-striped",children:[e.jsx("thead",{className:"bgColor text-center",children:e.jsxs("tr",{children:[e.jsx("th",{className:"bgColor text-center",children:"Module Name"}),e.jsx("th",{className:"bgColor text-center",children:"Sub Module Name"}),e.jsx("th",{className:"bgColor text-center",children:"Visible"}),e.jsx("th",{className:"bgColor text-center",children:"Write"}),e.jsx("th",{className:"bgColor text-center",children:"Edit"}),e.jsx("th",{className:"bgColor text-center",children:"Read"})]})}),e.jsx("tbody",{children:(a=s==null?void 0:s.Details)==null?void 0:a.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:t.MODULE_NAME}),e.jsx("td",{children:t.MODULE_DTL_NAME}),e.jsx("td",{className:"text-center",children:e.jsx("input",{type:"checkbox",checked:t.VISIBLE_FLAG==="true",style:{width:"25px",height:"25px"},readOnly:!0})}),e.jsx("td",{className:"text-center",children:e.jsx("input",{type:"checkbox",checked:t.WRITE_FLAG==="true",style:{width:"25px",height:"25px"},readOnly:!0})}),e.jsx("td",{className:"text-center",children:e.jsx("input",{type:"checkbox",checked:t.EDIT_FLAG==="true",style:{width:"25px",height:"25px"},readOnly:!0})}),e.jsx("td",{className:"text-center",children:e.jsx("input",{type:"checkbox",checked:t.READ_FLAG==="true",style:{width:"25px",height:"25px"},readOnly:!0})})]},r))})]})})]}):e.jsx("div",{className:"spinner-border text-center",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})})})};export{b as default};
