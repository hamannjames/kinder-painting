function x(){}const C=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function P(){return Object.create(null)}function O(t){t.forEach(q)}function v(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function b(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function g(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function U(t,n){const e=g(t.srcset),r=g(n||"");return r.length===e.length&&r.every(([s,o],c)=>o===e[c][1]&&(b(e[c][0],s)||b(s,e[c][0])))}function D(t){return Object.keys(t).length===0}function z(t,...n){if(t==null){for(const r of n)r(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(z(n,e))}function H(t,n,e,r){if(t){const s=k(t,n,e,r);return t[0](s)}}function k(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const s=t[2](r(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const o=[],c=Math.max(n.dirty.length,s.length);for(let a=0;a<c;a+=1)o[a]=n.dirty[a]|s[a];return o}return n.dirty|s}return n.dirty}function J(t,n,e,r,s,o){if(s){const c=k(n,e,r,o);t.p(c,s)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function L(t){return t&&v(t.destroy)?t.destroy:x}function N(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let _;function h(t){_=t}function w(){if(!_)throw new Error("Function called outside component initialization");return _}function Q(t){w().$$.on_mount.push(t)}function R(t){w().$$.after_update.push(t)}function T(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const i=[],y=[];let l=[];const m=[],E=Promise.resolve();let p=!1;function B(){p||(p=!0,E.then(M))}function V(){return B(),E}function F(t){l.push(t)}const d=new Set;let u=0;function M(){if(u!==0)return;const t=_;do{try{for(;u<i.length;){const n=i[u];u++,h(n),A(n.$$)}}catch(n){throw i.length=0,u=0,n}for(h(null),i.length=0,u=0;y.length;)y.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];d.has(e)||(d.add(e),e())}l.length=0}while(i.length);for(;m.length;)m.pop()();p=!1,d.clear(),h(t)}function A(t){if(t.fragment!==null){t.update(),O(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}function W(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{q as A,i as B,B as C,R as a,y as b,b as c,F as d,H as e,I as f,K as g,T as h,G as i,L as j,v as k,U as l,N as m,x as n,Q as o,C as p,P as q,O as r,S as s,V as t,J as u,M as v,D as w,W as x,_ as y,h as z};