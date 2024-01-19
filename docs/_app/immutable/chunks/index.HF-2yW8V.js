import{p as l,q as C}from"./scheduler.mRzyD__E.js";function U(t){return t?.length!==void 0?t:Array.from(t)}function d(t){const n=t-1;return n*n*n+1}function V(t,{delay:n=0,duration:o=400,easing:c=C}={}){const e=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:c,css:a=>`opacity: ${a*e}`}}function b(t,{delay:n=0,duration:o=400,easing:c=d,x:e=0,y:a=0,opacity:r=0}={}){const s=getComputedStyle(t),f=+s.opacity,u=s.transform==="none"?"":s.transform,y=f*(1-r),[p,i]=l(e),[$,g]=l(a);return{delay:n,duration:o,easing:c,css:(m,x)=>`
			transform: ${u} translate(${(1-m)*p}${i}, ${(1-m)*$}${g});
			opacity: ${f-y*x}`}}function h(t,{delay:n=0,duration:o=400,easing:c=d,start:e=0,opacity:a=0}={}){const r=getComputedStyle(t),s=+r.opacity,f=r.transform==="none"?"":r.transform,u=1-e,y=s*(1-a);return{delay:n,duration:o,easing:c,css:(p,i)=>`
			transform: ${f} scale(${1-u*i});
			opacity: ${s-y*i}
		`}}export{V as a,U as e,b as f,h as s};
