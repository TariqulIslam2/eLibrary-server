import{x as $,r as t,k,j as e}from"./index-DO-SV_97.js";import{a as n,b as m}from"./api-wfLvVcRq.js";import{u as J}from"./index.esm-cMcdnTEW.js";import{C as f,a as i}from"./CRow-C5pS5nlF.js";import{S as p}from"./index-b-rH6Afy.js";import{C as d}from"./CFormSelect-h8fZy_Ts.js";import{a as X}from"./cil-lock-locked-CYdsg60D.js";import"./AntdIcon-p-8olrNo.js";import"./compact-item-CogaolUq.js";import"./CFormControlWrapper-DWJPogNQ.js";const te=()=>{var N,j,b;const{register:s,reset:I,formState:{errors:Y},handleSubmit:F}=J(),{emp_id:x}=$(),[E,C]=t.useState(),[a,g]=t.useState([]),[S,A]=t.useState([]),[h,D]=t.useState(),[v,T]=t.useState([]),[u,_]=t.useState(),[O,M]=t.useState([]),[y,P]=t.useState(),[R,L]=t.useState(),w=k(),c=(l,o)=>((o==null?void 0:o.label)??"").toLowerCase().includes(l.toLowerCase()),V=l=>{D(l)},U=l=>{_(l)},G=l=>{P(l)};t.useEffect(()=>{n.get(`${m}/admistration/companyinfo`).then(l=>{M(l.data.data)}).catch(l=>{alert(l.message)})},[]);const B=l=>{const o=l.target.files[0];C(o),L(URL.createObjectURL(o))};t.useEffect(()=>{n.get(`${m}/setting/employee/byId/${x}`).then(l=>{g(l.data.data[0])}).catch(l=>{alert(l.message)})},[]),t.useEffect(()=>{n.get(`${m}/setting/designation`).then(l=>{A(l.data.data)}).catch(l=>{alert(l.message)})},[]),t.useEffect(()=>{n.get(`${m}/setting/department`).then(l=>{T(l.data.data)}).catch(l=>{alert(l.message)})},[]);const H=l=>{l.DESIG_ID=h?parseInt(h):"",l.DEPT_ID=u?parseInt(u):"",l.EMPLOYEE_ID=parseInt(x),l.COM_ID=parseInt(y);const o=new FormData;o.append("image",E);for(const r in l)Object.prototype.hasOwnProperty.call(l,r)&&o.append(r,l[r]);n.put(`${m}/setting/employee`,o).then(r=>{w(-1)}).catch(r=>{alert(r.message)}),I()};return console.log(a),e.jsx("div",{children:e.jsxs("form",{onSubmit:F(H),className:"bg-white p-5 my-3",children:[e.jsxs(f,{children:[e.jsxs(i,{xs:4,className:"",children:[e.jsx("div",{style:{borderRadius:"11px",fontFamily:"Segoe UI"},children:e.jsx("img",{src:R||(a!=null&&a.PHOTO?`${m}/static/public/image/${a==null?void 0:a.PHOTO}`:"/placeholder.jpg"),width:"150px",height:"150px",alt:"Uploaded Preview",style:{borderRadius:"50%"}})}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Image"}),e.jsx("input",{type:"file",name:"image",className:"form-control",id:"exampleFormControlInput14",onChange:l=>B(l)})]}),e.jsxs("div",{className:"mb-1",children:[e.jsxs("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:["Employee Name ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.EMP_NAME,...s("EMP_NAME")})]}),e.jsxs("div",{className:"mb-1",children:[e.jsxs("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:["Mobile ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.MOBILE,...s("MOBILE")})]}),e.jsxs("div",{className:"mb-1",children:[e.jsxs("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:["Email ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.EMAIL,...s("EMAIL")})]}),e.jsxs("div",{className:"mb-1",children:[e.jsxs("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:["Designation ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(p,{showSearch:!0,optionFilterProp:"children",className:"w-100",placeholder:a.DESIG_NAME,onChange:V,filterOption:c,options:S.map(l=>({value:l.DESIG_ID,label:l.DESIG_NAME}))})]}),e.jsxs("div",{className:"mb-1",children:[e.jsxs("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:["Department",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(p,{showSearch:!0,placeholder:a.DEPT_NAME,optionFilterProp:"children",className:"w-100",onChange:U,filterOption:c,options:v.map(l=>({value:l.DEPT_ID,label:l.DEPT_NAME}))})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Status"}),e.jsxs(d,{className:"mb-3",...s("EMP_STATUS"),"aria-label":"Large select example",children:[e.jsx("option",{value:a.EMP_STATUS,children:a.EMP_STATUS}),e.jsx("option",{value:"Active",children:"Active"}),e.jsx("option",{value:"Deactive",children:"Deactive"})]})]})]}),e.jsx(i,{xs:8,children:e.jsxs(f,{children:[e.jsxs(i,{xs:6,children:[e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Card NO"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.CARD_NO,...s("CARD_NO")})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Father Name"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.FATHER_NAME,...s("FATHER_NAME")})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Present Address"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.PRESENT_ADDRESS,...s("PRESENT_ADDRESS")})]})," ",e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Gender"}),e.jsxs(d,{...s("SEX"),"aria-label":"Large select example",children:[e.jsx("option",{value:a.SEX,children:a.SEX}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"}),e.jsx("option",{value:"Other",children:"Other"})]})]})," ",e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Marital Status"}),e.jsxs(d,{...s("MARITAL_STATUE"),"aria-label":"Large select example",children:[e.jsx("option",{value:a.MARITAL_STATUE,children:a.MARITAL_STATUE}),e.jsx("option",{value:"Married ",children:"Married "}),e.jsx("option",{value:"Unmarried",children:"Unmarried "})]})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Passport No"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.PASSPORT_NO,...s("PASSPORT_NO")})]}),e.jsxs("div",{className:"mb-1",children:[e.jsxs("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:["Joining Date ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"date",className:"form-control",id:"exampleFormControlInput14",defaultValue:(N=a.JOINING_DATE)==null?void 0:N.split("T")[0],...s("JOINING_DATE")})]})]}),e.jsxs(i,{xs:6,children:[" ",e.jsxs("div",{className:"mb-1",children:[e.jsxs("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:["Company Name ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(p,{showSearch:!0,placeholder:a.COMP_NAME,optionFilterProp:"children",className:"w-100",style:{height:"38px"},onChange:G,filterOption:c,options:O.map(l=>({value:l.COM_ID,label:l.COMP_NAME}))})]})," ",e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Mother Name"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.MOTHER_NAME,...s("MOTHER_NAME")})]})," ",e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Permanent Address"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.PERMANENT_ADDRESS,...s("PERMANENT_ADDRESS")})]})," ",e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Blood Group"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.BLOOD_GROUP,...s("BLOOD_GROUP")})]})," ",e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Religion"}),e.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:a.RELIGION,...s("RELIGION")})]})," ",e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Date Of Birth"}),e.jsx("input",{type:"date",className:"form-control",id:"exampleFormControlInput14",defaultValue:(j=a.DATE_OF_BIRTH)==null?void 0:j.split("T")[0],...s("DATE_OF_BIRTH")})]})," ",e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Confirmation Date"}),e.jsx("input",{type:"date",className:"form-control",id:"exampleFormControlInput14",defaultValue:(b=a.CONFIRMATION_DATE)==null?void 0:b.split("T")[0],...s("CONFIRMATION_DATE")})]})]})]})})]}),e.jsx("div",{className:"submit-section d-flex justify-content-center",children:e.jsx("div",{className:" w-25",style:{borderTop:"none"},children:e.jsx(X,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},className:"ms-2 my-1 py-2 w-100",type:"submit",children:"Save"})})})]})})};export{te as default};
