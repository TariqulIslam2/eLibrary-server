import{r as f,_ as u,R as h,b as y,c as N,P as a,d as k}from"./index-BnTmYUkP.js";var b=f.forwardRef(function(e,l){var r=e.children,i=e.active,c=e.as,t=c===void 0?"a":c,d=e.className,s=e.disabled,n=u(e,["children","active","as","className","disabled"]);return h.createElement(t,y({className:N(d,{active:i,disabled:s})},i&&{"aria-current":"page"},t==="a"&&s&&{"aria-disabled":!0,tabIndex:-1},(t==="a"||t==="button")&&{onClick:function(o){o.preventDefault,!s&&n.onClick&&n.onClick(o)}},{disabled:s},n,{ref:l}),r)});b.propTypes={active:a.bool,as:a.elementType,children:a.node,className:a.string,disabled:a.bool};b.displayName="CLink";var C=f.forwardRef(function(e,l){var r,i=e.children,c=e.as,t=c===void 0?"button":c,d=e.className,s=e.color,n=e.shape,o=e.size,v=e.type,g=v===void 0?"button":v,p=e.variant,m=u(e,["children","as","className","color","shape","size","type","variant"]);return h.createElement(b,y({as:m.href?"a":t},!m.href&&{type:g},{className:N("btn",(r={},r["btn-".concat(s)]=s&&!p,r["btn-".concat(p,"-").concat(s)]=s&&p,r["btn-".concat(o)]=o,r),n,d)},m,{ref:l}),i)});C.propTypes={as:a.elementType,children:a.node,className:a.string,color:k,shape:a.string,size:a.oneOf(["sm","lg"]),type:a.oneOf(["button","submit","reset"]),variant:a.oneOf(["outline","ghost"])};C.displayName="CButton";var z=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"];export{b as C,C as a,z as c};
