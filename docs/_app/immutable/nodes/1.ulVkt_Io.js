import{s as E,n as b,f as S}from"../chunks/scheduler._-LoI_4K.js";import{S as x,i as j,g as f,m as _,s as q,h as d,j as g,n as h,f as p,c as y,a as l,z as v,o as $}from"../chunks/index.0kiyXvzV.js";import{d as z}from"../chunks/singletons.QNB7FG8w.js";const C=()=>{const s=z;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=f("h1"),o=_(r),n=q(),i=f("p"),u=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(p),n=y(e),i=d(e,"P",{});var m=g(i);u=h(m,c),m.forEach(p)},m(e,a){l(e,t,a),v(t,o),l(e,n,a),l(e,i,a),v(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=e[0].error?.message+"")&&$(u,c)},i:b,o:b,d(e){e&&(p(t),p(n),p(i))}}}function k(s,t,r){let o;return S(s,H,n=>r(0,o=n)),[o]}let D=class extends x{constructor(t){super(),j(this,t,k,P,E,{})}};export{D as component};