import{R as M}from"./index-DO-SV_97.js";var fe=e=>e.type==="checkbox",ee=e=>e instanceof Date,L=e=>e==null;const Ze=e=>typeof e=="object";var D=e=>!L(e)&&!Array.isArray(e)&&Ze(e)&&!ee(e),gr=e=>D(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,hr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vr=(e,s)=>e.has(hr(s)),_r=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function R(e){let s;const t=Array.isArray(e),l=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||l))&&(t||D(e)))if(s=t?[]:{},!t&&!_r(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=R(e[n]));else return e;return s}var Fe=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,d=(e,s,t)=>{if(!s||!D(e))return t;const l=Fe(s.split(/[,[\].]+?/)).reduce((n,a)=>L(n)?n:n[a],e);return w(l)||l===e?w(e[s])?t:e[s]:l},W=e=>typeof e=="boolean",pe=e=>/^\w*$/.test(e),er=e=>Fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,s,t)=>{let l=-1;const n=pe(s)?[s]:er(s),a=n.length,y=a-1;for(;++l<a;){const h=n[l];let B=t;if(l!==y){const q=e[h];B=D(q)||Array.isArray(q)?q:isNaN(+n[l+1])?{}:[]}if(h==="__proto__"||h==="constructor"||h==="prototype")return;e[h]=B,e=e[h]}return e};const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var br=(e,s,t,l=!0)=>{const n={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const y=a;return s._proxyFormState[y]!==I.all&&(s._proxyFormState[y]=!l||I.all),e[y]}});return n},O=e=>D(e)&&!Object.keys(e).length,Fr=(e,s,t,l)=>{t(e);const{name:n,...a}=e;return O(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(y=>s[y]===I.all)},ge=e=>Array.isArray(e)?e:[e];function Ar(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var $=e=>typeof e=="string",Vr=(e,s,t,l,n)=>$(e)?(l&&s.watch.add(e),d(t,e,n)):Array.isArray(e)?e.map(a=>(l&&s.watch.add(a),d(t,a))):(l&&(s.watchAll=!0),t),xr=(e,s,t,l,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[l]:n||!0}}:{},$e=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),je=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const oe=(e,s,t,l)=>{for(const n of t||Object.keys(e)){const a=d(e,n);if(a){const{_f:y,...h}=a;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],n)&&!l)return!0;if(y.ref&&s(y.ref,y.name)&&!l)return!0;if(oe(h,s))break}else if(D(h)&&oe(h,s))break}}};var wr=(e,s,t)=>{const l=ge(d(e,t));return V(l,"root",s[t]),V(e,t,l),e},Le=e=>e.type==="file",H=e=>typeof e=="function",ve=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>$(e),Oe=e=>e.type==="radio",_e=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Ke}return Ke};const ze={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,ze):ze;function Ge(e,s,t="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||W(e)&&!e)return{type:t,message:he(e)?e:"",ref:s}}var se=e=>D(e)&&!_e(e)?e:{value:e,message:""},Je=async(e,s,t,l,n)=>{const{ref:a,refs:y,required:h,maxLength:B,minLength:q,min:x,max:b,pattern:ce,validate:G,name:C,valueAsNumber:Ae,mount:j,disabled:J}=e._f,F=d(s,C);if(!j||J)return{};const K=y?y[0]:a,Y=_=>{l&&K.reportValidity&&(K.setCustomValidity(W(_)?"":_||""),K.reportValidity())},m={},re=Oe(a),de=fe(a),X=re||de,te=(Ae||Le(a))&&w(a.value)&&w(F)||ve(a)&&a.value===""||F===""||Array.isArray(F)&&!F.length,N=xr.bind(null,C,t,m),ye=(_,A,k,p=z.maxLength,P=z.minLength)=>{const U=_?A:k;m[C]={type:_?p:P,message:U,ref:a,...N(_?p:P,U)}};if(n?!Array.isArray(F)||!F.length:h&&(!X&&(te||L(F))||W(F)&&!F||de&&!rr(y).isValid||re&&!tr(y).isValid)){const{value:_,message:A}=he(h)?{value:!!h,message:h}:se(h);if(_&&(m[C]={type:z.required,message:A,ref:K,...N(z.required,A)},!t))return Y(A),m}if(!te&&(!L(x)||!L(b))){let _,A;const k=se(b),p=se(x);if(!L(F)&&!isNaN(F)){const P=a.valueAsNumber||F&&+F;L(k.value)||(_=P>k.value),L(p.value)||(A=P<p.value)}else{const P=a.valueAsDate||new Date(F),U=ae=>new Date(new Date().toDateString()+" "+ae),ie=a.type=="time",ue=a.type=="week";$(k.value)&&F&&(_=ie?U(F)>U(k.value):ue?F>k.value:P>new Date(k.value)),$(p.value)&&F&&(A=ie?U(F)<U(p.value):ue?F<p.value:P<new Date(p.value))}if((_||A)&&(ye(!!_,k.message,p.message,z.max,z.min),!t))return Y(m[C].message),m}if((B||q)&&!te&&($(F)||n&&Array.isArray(F))){const _=se(B),A=se(q),k=!L(_.value)&&F.length>+_.value,p=!L(A.value)&&F.length<+A.value;if((k||p)&&(ye(k,_.message,A.message),!t))return Y(m[C].message),m}if(ce&&!te&&$(F)){const{value:_,message:A}=se(ce);if(_e(_)&&!F.match(_)&&(m[C]={type:z.pattern,message:A,ref:a,...N(z.pattern,A)},!t))return Y(A),m}if(G){if(H(G)){const _=await G(F,s),A=Ge(_,K);if(A&&(m[C]={...A,...N(z.validate,A.message)},!t))return Y(A.message),m}else if(D(G)){let _={};for(const A in G){if(!O(_)&&!t)break;const k=Ge(await G[A](F,s),K,A);k&&(_={...k,...N(A,k.message)},Y(k.message),t&&(m[C]=_))}if(!O(_)&&(m[C]={ref:K,..._},!t))return m}}return Y(!0),m};function Dr(e,s){const t=s.slice(0,-1).length;let l=0;for(;l<t;)e=w(e)?l++:e[s[l++]];return e}function mr(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function E(e,s){const t=Array.isArray(s)?s:pe(s)?[s]:er(s),l=t.length===1?e:Dr(e,t),n=t.length-1,a=t[n];return l&&delete l[a],n!==0&&(D(l)&&O(l)||Array.isArray(l)&&mr(l))&&E(e,t.slice(0,-1)),e}var me=()=>{let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}},Se=e=>L(e)||!Ze(e);function Q(e,s){if(Se(e)||Se(s))return e===s;if(ee(e)&&ee(s))return e.getTime()===s.getTime();const t=Object.keys(e),l=Object.keys(s);if(t.length!==l.length)return!1;for(const n of t){const a=e[n];if(!l.includes(n))return!1;if(n!=="ref"){const y=s[n];if(ee(a)&&ee(y)||D(a)&&D(y)||Array.isArray(a)&&Array.isArray(y)?!Q(a,y):a!==y)return!1}}return!0}var sr=e=>e.type==="select-multiple",kr=e=>Oe(e)||fe(e),ke=e=>ve(e)&&e.isConnected,ir=e=>{for(const s in e)if(H(e[s]))return!0;return!1};function be(e,s={}){const t=Array.isArray(e);if(D(e)||t)for(const l in e)Array.isArray(e[l])||D(e[l])&&!ir(e[l])?(s[l]=Array.isArray(e[l])?[]:{},be(e[l],s[l])):L(e[l])||(s[l]=!0);return s}function ur(e,s,t){const l=Array.isArray(e);if(D(e)||l)for(const n in e)Array.isArray(e[n])||D(e[n])&&!ir(e[n])?w(s)||Se(t[n])?t[n]=Array.isArray(e[n])?be(e[n],[]):{...be(e[n])}:ur(e[n],L(s)?{}:s[n],t[n]):t[n]=!Q(e[n],s[n]);return t}var le=(e,s)=>ur(e,s,be(s)),ar=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:l})=>w(e)?e:s?e===""?NaN:e&&+e:t&&$(e)?new Date(e):l?l(e):e;function Ee(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Le(s)?s.files:Oe(s)?tr(e.refs).value:sr(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?rr(e.refs).value:ar(w(s.value)?e.ref.value:s.value,e)}var Er=(e,s,t,l)=>{const n={};for(const a of e){const y=d(s,a);y&&V(n,a,y._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:l}},ne=e=>w(e)?e:_e(e)?e.source:D(e)?_e(e.value)?e.value.source:e.value:e;const Qe="AsyncFunction";var Sr=e=>!!e&&!!e.validate&&!!(H(e.validate)&&e.validate.constructor.name===Qe||D(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Qe)),Tr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,s,t){const l=d(e,t);if(l||pe(t))return{error:l,name:t};const n=t.split(".");for(;n.length;){const a=n.join("."),y=d(s,a),h=d(e,a);if(y&&!Array.isArray(y)&&t!==a)return{name:t};if(h&&h.type)return{name:a,error:h};n.pop()}return{name:t}}var pr=(e,s,t,l,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?l.isOnBlur:n.isOnBlur)?!e:(t?l.isOnChange:n.isOnChange)?e:!0,Lr=(e,s)=>!Fe(d(e,s)).length&&E(e,s);const Or={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Cr(e={}){let s={...Or,...e},t={submitCount:0,isDirty:!1,isLoading:H(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},n=D(s.defaultValues)||D(s.values)?R(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:R(n),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},B,q=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:me(),array:me(),state:me()},ce=$e(s.mode),G=$e(s.reValidateMode),C=s.criteriaMode===I.all,Ae=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},j=async r=>{if(!s.disabled&&(x.isValid||r)){const i=s.resolver?O((await X()).errors):await N(l,!0);i!==t.isValid&&b.state.next({isValid:i})}},J=(r,i)=>{!s.disabled&&(x.isValidating||x.validatingFields)&&((r||Array.from(h.mount)).forEach(u=>{u&&(i?V(t.validatingFields,u,i):E(t.validatingFields,u))}),b.state.next({validatingFields:t.validatingFields,isValidating:!O(t.validatingFields)}))},F=(r,i=[],u,c,f=!0,o=!0)=>{if(c&&u&&!s.disabled){if(y.action=!0,o&&Array.isArray(d(l,r))){const g=u(d(l,r),c.argA,c.argB);f&&V(l,r,g)}if(o&&Array.isArray(d(t.errors,r))){const g=u(d(t.errors,r),c.argA,c.argB);f&&V(t.errors,r,g),Lr(t.errors,r)}if(x.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const g=u(d(t.touchedFields,r),c.argA,c.argB);f&&V(t.touchedFields,r,g)}x.dirtyFields&&(t.dirtyFields=le(n,a)),b.state.next({name:r,isDirty:_(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else V(a,r,i)},K=(r,i)=>{V(t.errors,r,i),b.state.next({errors:t.errors})},Y=r=>{t.errors=r,b.state.next({errors:t.errors,isValid:!1})},m=(r,i,u,c)=>{const f=d(l,r);if(f){const o=d(a,r,w(u)?d(n,r):u);w(o)||c&&c.defaultChecked||i?V(a,r,i?o:Ee(f._f)):p(r,o),y.mount&&j()}},re=(r,i,u,c,f)=>{let o=!1,g=!1;const v={name:r};if(!s.disabled){const S=!!(d(l,r)&&d(l,r)._f&&d(l,r)._f.disabled);if(!u||c){x.isDirty&&(g=t.isDirty,t.isDirty=v.isDirty=_(),o=g!==v.isDirty);const T=S||Q(d(n,r),i);g=!!(!S&&d(t.dirtyFields,r)),T||S?E(t.dirtyFields,r):V(t.dirtyFields,r,!0),v.dirtyFields=t.dirtyFields,o=o||x.dirtyFields&&g!==!T}if(u){const T=d(t.touchedFields,r);T||(V(t.touchedFields,r,u),v.touchedFields=t.touchedFields,o=o||x.touchedFields&&T!==u)}o&&f&&b.state.next(v)}return o?v:{}},de=(r,i,u,c)=>{const f=d(t.errors,r),o=x.isValid&&W(i)&&t.isValid!==i;if(s.delayError&&u?(B=Ae(()=>K(r,u)),B(s.delayError)):(clearTimeout(q),B=null,u?V(t.errors,r,u):E(t.errors,r)),(u?!Q(f,u):f)||!O(c)||o){const g={...c,...o&&W(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...g},b.state.next(g)}},X=async r=>{J(r,!0);const i=await s.resolver(a,s.context,Er(r||h.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return J(r),i},te=async r=>{const{errors:i}=await X(r);if(r)for(const u of r){const c=d(i,u);c?V(t.errors,u,c):E(t.errors,u)}else t.errors=i;return i},N=async(r,i,u={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...g}=f;if(o){const v=h.array.has(o.name),S=f._f&&Sr(f._f);S&&x.validatingFields&&J([c],!0);const T=await Je(f,a,C,s.shouldUseNativeValidation&&!i,v);if(S&&x.validatingFields&&J([c]),T[o.name]&&(u.valid=!1,i))break;!i&&(d(T,o.name)?v?wr(t.errors,T,o.name):V(t.errors,o.name,T[o.name]):E(t.errors,o.name))}!O(g)&&await N(g,i,u)}}return u.valid},ye=()=>{for(const r of h.unMount){const i=d(l,r);i&&(i._f.refs?i._f.refs.every(u=>!ke(u)):!ke(i._f.ref))&&Ve(r)}h.unMount=new Set},_=(r,i)=>!s.disabled&&(r&&i&&V(a,r,i),!Q(Ce(),n)),A=(r,i,u)=>Vr(r,h,{...y.mount?a:w(i)?n:$(r)?{[r]:i}:i},u,i),k=r=>Fe(d(y.mount?a:n,r,s.shouldUnregister?d(n,r,[]):[])),p=(r,i,u={})=>{const c=d(l,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&V(a,r,ar(i,o)),f=ve(o.ref)&&L(i)?"":i,sr(o.ref)?[...o.ref.options].forEach(g=>g.selected=f.includes(g.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(f)?!!f.find(v=>v===g.value):f===g.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(g=>g.checked=g.value===f):Le(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.values.next({name:r,values:{...a}})))}(u.shouldDirty||u.shouldTouch)&&re(r,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ae(r)},P=(r,i,u)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,g=d(l,o);(h.array.has(r)||D(f)||g&&!g._f)&&!ee(f)?P(o,f,u):p(o,f,u)}},U=(r,i,u={})=>{const c=d(l,r),f=h.array.has(r),o=R(i);V(a,r,o),f?(b.array.next({name:r,values:{...a}}),(x.isDirty||x.dirtyFields)&&u.shouldDirty&&b.state.next({name:r,dirtyFields:le(n,a),isDirty:_(r,o)})):c&&!c._f&&!L(o)?P(r,o,u):p(r,o,u),je(r,h)&&b.state.next({...t}),b.values.next({name:y.mount?r:void 0,values:{...a}})},ie=async r=>{y.mount=!0;const i=r.target;let u=i.name,c=!0;const f=d(l,u),o=()=>i.type?Ee(f._f):gr(r),g=v=>{c=Number.isNaN(v)||ee(v)&&isNaN(v.getTime())||Q(v,d(a,u,v))};if(f){let v,S;const T=o(),Z=r.type===He.BLUR||r.type===He.FOCUS_OUT,cr=!Tr(f._f)&&!s.resolver&&!d(t.errors,u)&&!f._f.deps||pr(Z,d(t.touchedFields,u),t.isSubmitted,G,ce),we=je(u,h,Z);V(a,u,T),Z?(f._f.onBlur&&f._f.onBlur(r),B&&B(0)):f._f.onChange&&f._f.onChange(r);const De=re(u,T,Z,!1),dr=!O(De)||we;if(!Z&&b.values.next({name:u,type:r.type,values:{...a}}),cr)return x.isValid&&(s.mode==="onBlur"?Z&&j():j()),dr&&b.state.next({name:u,...we?{}:De});if(!Z&&we&&b.state.next({...t}),s.resolver){const{errors:qe}=await X([u]);if(g(T),c){const yr=Xe(t.errors,l,u),We=Xe(qe,l,yr.name||u);v=We.error,u=We.name,S=O(qe)}}else J([u],!0),v=(await Je(f,a,C,s.shouldUseNativeValidation))[u],J([u]),g(T),c&&(v?S=!1:x.isValid&&(S=await N(l,!0)));c&&(f._f.deps&&ae(f._f.deps),de(u,S,v,De))}},ue=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},ae=async(r,i={})=>{let u,c;const f=ge(r);if(s.resolver){const o=await te(w(r)?r:f);u=O(o),c=r?!f.some(g=>d(o,g)):u}else r?(c=(await Promise.all(f.map(async o=>{const g=d(l,o);return await N(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!c&&!t.isValid)&&j()):c=u=await N(l);return b.state.next({...!$(r)||x.isValid&&u!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:u}:{},errors:t.errors}),i.shouldFocus&&!c&&oe(l,ue,r?f:h.mount),c},Ce=r=>{const i={...y.mount?a:n};return w(r)?i:$(r)?d(i,r):r.map(u=>d(i,u))},Ne=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),error:d((i||t).errors,r),isValidating:!!d(t.validatingFields,r),isTouched:!!d((i||t).touchedFields,r)}),lr=r=>{r&&ge(r).forEach(i=>E(t.errors,i)),b.state.next({errors:r?t.errors:{}})},Ue=(r,i,u)=>{const c=(d(l,r,{_f:{}})._f||{}).ref,f=d(t.errors,r)||{},{ref:o,message:g,type:v,...S}=f;V(t.errors,r,{...S,...i,ref:c}),b.state.next({name:r,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&c&&c.focus&&c.focus()},nr=(r,i)=>H(r)?b.values.subscribe({next:u=>r(A(void 0,i),u)}):A(r,i,!0),Ve=(r,i={})=>{for(const u of r?ge(r):h.mount)h.mount.delete(u),h.array.delete(u),i.keepValue||(E(l,u),E(a,u)),!i.keepError&&E(t.errors,u),!i.keepDirty&&E(t.dirtyFields,u),!i.keepTouched&&E(t.touchedFields,u),!i.keepIsValidating&&E(t.validatingFields,u),!s.shouldUnregister&&!i.keepDefaultValue&&E(n,u);b.values.next({values:{...a}}),b.state.next({...t,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&j()},Re=({disabled:r,name:i,field:u,fields:c,value:f})=>{if(W(r)&&y.mount||r){const o=r?void 0:w(f)?Ee(u?u._f:d(c,i)._f):f;(r||!r&&!w(o))&&V(a,i,o),re(i,o,!1,!1,!0)}},xe=(r,i={})=>{let u=d(l,r);const c=W(i.disabled)||W(s.disabled);return V(l,r,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),u?Re({field:u,disabled:W(i.disabled)?i.disabled:s.disabled,name:r,value:i.value}):m(r,!0,i.value),{...c?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:ne(i.min),max:ne(i.max),minLength:ne(i.minLength),maxLength:ne(i.maxLength),pattern:ne(i.pattern)}:{},name:r,onChange:ie,onBlur:ie,ref:f=>{if(f){xe(r,i),u=d(l,r);const o=w(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,g=kr(o),v=u._f.refs||[];if(g?v.find(S=>S===o):o===u._f.ref)return;V(l,r,{_f:{...u._f,...g?{refs:[...v.filter(ke),o,...Array.isArray(d(n,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),m(r,!1,void 0,o)}else u=d(l,r,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(vr(h.array,r)&&y.action)&&h.unMount.add(r)}}},Me=()=>s.shouldFocusError&&oe(l,ue,h.mount),or=r=>{W(r)&&(b.state.next({disabled:r}),oe(l,(i,u)=>{const c=d(l,u);c&&(i.disabled=c._f.disabled||r,Array.isArray(c._f.refs)&&c._f.refs.forEach(f=>{f.disabled=c._f.disabled||r}))},0,!1))},Be=(r,i)=>async u=>{let c;if(u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist()),s.disabled){i&&await i({...t.errors},u);return}let f=R(a);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:g}=await X();t.errors=o,f=g}else await N(l);if(E(t.errors,"root"),O(t.errors)){b.state.next({errors:{}});try{await r(f,u)}catch(o){c=o}}else i&&await i({...t.errors},u),Me(),setTimeout(Me);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},fr=(r,i={})=>{d(l,r)&&(w(i.defaultValue)?U(r,R(d(n,r))):(U(r,i.defaultValue),V(n,r,R(i.defaultValue))),i.keepTouched||E(t.touchedFields,r),i.keepDirty||(E(t.dirtyFields,r),t.isDirty=i.defaultValue?_(r,R(d(n,r))):_()),i.keepError||(E(t.errors,r),x.isValid&&j()),b.state.next({...t}))},Pe=(r,i={})=>{const u=r?R(r):n,c=R(u),f=O(r),o=f?n:c;if(i.keepDefaultValues||(n=u),!i.keepValues){if(i.keepDirtyValues){const g=new Set([...h.mount,...Object.keys(le(n,a))]);for(const v of Array.from(g))d(t.dirtyFields,v)?V(o,v,d(a,v)):U(v,d(o,v))}else{if(Te&&w(r))for(const g of h.mount){const v=d(l,g);if(v&&v._f){const S=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(ve(S)){const T=S.closest("form");if(T){T.reset();break}}}}l={}}a=s.shouldUnregister?i.keepDefaultValues?R(n):{}:R(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!x.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!s.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Q(r,n)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&a?le(n,a):t.dirtyFields:i.keepDefaultValues&&r?le(n,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ie=(r,i)=>Pe(H(r)?r(a):r,i);return{control:{register:xe,unregister:Ve,getFieldState:Ne,handleSubmit:Be,setError:Ue,_executeSchema:X,_getWatch:A,_getDirty:_,_updateValid:j,_removeUnmounted:ye,_updateFieldArray:F,_updateDisabledField:Re,_getFieldArray:k,_reset:Pe,_resetDefaultValues:()=>H(s.defaultValues)&&s.defaultValues().then(r=>{Ie(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:or,_subjects:b,_proxyFormState:x,_setErrors:Y,get _fields(){return l},get _formValues(){return a},get _state(){return y},set _state(r){y=r},get _defaultValues(){return n},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ae,register:xe,handleSubmit:Be,watch:nr,setValue:U,getValues:Ce,reset:Ie,resetField:fr,clearErrors:lr,unregister:Ve,setError:Ue,setFocus:(r,i={})=>{const u=d(l,r),c=u&&u._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&H(f.select)&&f.select())}},getFieldState:Ne}}function Br(e={}){const s=M.useRef(void 0),t=M.useRef(void 0),[l,n]=M.useState({isDirty:!1,isValidating:!1,isLoading:H(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:H(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Cr(e),formState:l});const a=s.current.control;return a._options=e,Ar({subject:a._subjects.state,next:y=>{Fr(y,a._proxyFormState,a._updateFormState)&&n({...a._formState})}}),M.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),M.useEffect(()=>{if(a._proxyFormState.isDirty){const y=a._getDirty();y!==l.isDirty&&a._subjects.state.next({isDirty:y})}},[a,l.isDirty]),M.useEffect(()=>{e.values&&!Q(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values,n(y=>({...y}))):a._resetDefaultValues()},[e.values,a]),M.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),M.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=br(l,a),s.current}export{Br as u};
