import{k,x as Y,r as a,j as l}from"./index-B2fBV0b0.js";import{a as n,b as m}from"./api-wfLvVcRq.js";import{u as K}from"./index.esm-Cgl_2XJM.js";import{C as b,a as c}from"./CRow-Bpgedh6M.js";import{S as p}from"./index-CFYdgIcY.js";import{a as q}from"./cil-lock-locked-b0GLSzjg.js";import"./AntdIcon-nBSLI4Ns.js";import"./compact-item-ChVofqhj.js";const re=()=>{const{register:o,reset:f,formState:{errors:z},handleSubmit:I}=K(),N=k(),{bookid:i}=Y(),[t,j]=a.useState([]),[g,C]=a.useState(),[F,h]=a.useState(),[J,E]=a.useState([]);a.useState();const[Q,S]=a.useState([]);a.useState();const[W,y]=a.useState([]);a.useState();const u=(e,s)=>((s==null?void 0:s.label)??"").toLowerCase().includes(e.toLowerCase()),A=e=>{const s=e.target.files[0];C(s),h(URL.createObjectURL(s))};a.useEffect(()=>{n.get(`${m}/addbookinfo/byId/${i}`).then(e=>{var s,r,d,x;h((r=(s=e==null?void 0:e.data)==null?void 0:s.data[0])!=null&&r.IMAGE?`${m}/static/public/image/${(x=(d=e==null?void 0:e.data)==null?void 0:d.data[0])==null?void 0:x.IMAGE}`:"/placeHolder.png"),j(e.data.data[0])}).catch(e=>{alert(e.message)})},[i]),a.useEffect(()=>{n.get(`${m}/setting/designation`).then(e=>{E(e.data.data)}).catch(e=>{alert(e.message)})},[]),a.useEffect(()=>{n.get(`${m}/admistration/companyinfo`).then(e=>{y(e.data.data)}).catch(e=>{alert(e.message)})},[]),a.useEffect(()=>{n.get(`${m}/setting/department`).then(e=>{S(e.data.data)}).catch(e=>{alert(e.message)})},[]);const[P,O]=a.useState([]),[v,R]=a.useState(),T=e=>{R(e)};a.useEffect(()=>{n.get(`${m}/librarysetting/category`).then(e=>{console.log(e),O(e.data.data)}).catch(e=>{alert(e.message)})},[]);const[w,D]=a.useState([]),[L,_]=a.useState(),U=e=>{_(e)};a.useEffect(()=>{n.get(`${m}/librarysetting/author`).then(e=>{D(e.data.data)}).catch(e=>{alert(e.message)})},[]);const[B,V]=a.useState([]),[G,H]=a.useState(),$=e=>{H(e)};a.useEffect(()=>{n.get(`${m}/librarysetting/publisher`).then(e=>{V(e.data.data)}).catch(e=>{alert(e.message)})},[]);const M=e=>{e.CATEGORY_ID=parseInt(v),e.AUTHOR_ID=parseInt(L),e.PUBLISHER_ID=parseInt(G),e.BOOK_ID=parseInt(i);const s=new FormData;s.append("image",g);for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.append(r,e[r]);n.put(`${m}/addbookinfo`,s).then(r=>{N(-1)}).catch(r=>{alert(r.message)}),f()};return l.jsx(l.Fragment,{children:l.jsxs("form",{onSubmit:I(M),className:"bg-white p-5 my-3",children:[l.jsxs(b,{children:[l.jsxs(c,{xs:4,className:"",children:[l.jsx("div",{style:{borderRadius:"11px",textAlign:"center",marginBottom:"10px",fontFamily:"Segoe UI"},children:l.jsx("img",{src:F,width:"150px",height:"auto",alt:"Uploaded Preview"})}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Image"}),l.jsx("input",{type:"file",name:"image",className:"form-control ",id:"exampleFormControlInput14",onChange:e=>A(e)})]}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput22",className:"form-label small",children:"Title"}),l.jsx("input",{type:"text",className:"form-control ",id:"exampleFormControlInput22",defaultValue:t==null?void 0:t.TITLE,...o("TITLE")})]}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput21",className:"form-label small",children:"Category Name"}),l.jsx(p,{showSearch:!0,placeholder:t==null?void 0:t.CATEGORY_NAME,optionFilterProp:"children",className:"w-100 ",onChange:T,filterOption:u,options:P.map(e=>({value:e.CATEGORY_ID,label:e.CATEGORY_NAME}))})]})]}),l.jsx(c,{xs:8,children:l.jsxs(b,{children:[l.jsxs(c,{xs:6,children:[l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput23",className:"form-label small",children:"Author Name"}),l.jsx(p,{showSearch:!0,placeholder:t==null?void 0:t.AUTHOR_NAME,optionFilterProp:"children",className:"w-100 ",onChange:U,filterOption:u,options:w.map(e=>({value:e.AUTHOR_ID,label:e.AUTHOR_NAME}))})]}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput24",className:"form-label small",children:"Publisher Name"}),l.jsx(p,{showSearch:!0,placeholder:t==null?void 0:t.PUBLISHER_NAME,optionFilterProp:"children",className:"w-100 ",onChange:$,filterOption:u,options:B.map(e=>({value:e.PUBLISHER_ID,label:e.PUBLISHER_NAME}))})]}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput25",className:"form-label  small",children:"ISBN"}),l.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput25",defaultValue:t==null?void 0:t.ISBN,...o("ISBN")})]}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput26",className:"form-label  small",children:"Edition"}),l.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput26",defaultValue:t==null?void 0:t.EDITION,...o("EDITION")})]}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput27",className:"form-label  small",children:"Language"}),l.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput27",defaultValue:t==null?void 0:t.LANGUAGE,...o("LANGUAGE")})]})," ",l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Page"}),l.jsx("input",{type:"number",className:"form-control",id:"exampleFormControlInput27",defaultValue:t==null?void 0:t.PAGES,...o("PAGES")})]})," "]}),l.jsxs(c,{xs:6,children:[l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput28",className:"form-label  small",children:"Published Year"}),l.jsx("input",{type:"number",className:"form-control",id:"exampleFormControlInput28",defaultValue:t==null?void 0:t.PUBLISHED_YEAR,...o("PUBLISHED_YEAR")})]}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput29",className:"form-label  small",children:"Copies"}),l.jsx("input",{type:"number",className:"form-control",id:"exampleFormControlInput29",defaultValue:t==null?void 0:t.NO_OF_COPIES,...o("COPIES")})]}),l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput30",className:"form-label  small",children:"Location"}),l.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput30",defaultValue:t==null?void 0:t.LOCATION,...o("LOCATION")})]})," ",l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput31",className:"form-label  small",children:"Format"}),l.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput31",defaultValue:t==null?void 0:t.FORMAT,...o("FORMAT")})]})," ",l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput32",className:"form-label  small",children:"Price"}),l.jsx("input",{type:"number",className:"form-control",id:"exampleFormControlInput32",defaultValue:t==null?void 0:t.PRICE,...o("PRICE")})]})," ",l.jsxs("div",{className:"mb-1",children:[l.jsx("label",{htmlFor:"exampleFormControlInput14",className:"form-label  small",children:"Description"}),l.jsx("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",defaultValue:t==null?void 0:t.DESCRIPTION,...o("DESCRIPTION")})]})," "]})]})})]}),l.jsx("div",{className:"submit-section d-flex justify-content-center",children:l.jsx("div",{className:" w-25",style:{borderTop:"none"},children:l.jsx(q,{style:{backgroundColor:"rgb(61, 54, 78)",color:"#fff"},className:"ms-2 my-1 py-2 w-100",type:"submit",children:"Save"})})})]})})};export{re as default};
