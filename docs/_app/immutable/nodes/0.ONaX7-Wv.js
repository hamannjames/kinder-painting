import{s as u0,n as X,c as $0,r as v0,o as D0,d as z0,b as Q0,e as Z0,u as X0,g as Y0,f as ee,h as te}from"../chunks/scheduler.Z2cFbnb4.js";import{S as h0,i as d0,x as e0,y as t0,j as M,f as d,k as i,a as A,z as c,g,s as L,h as _,A as U,c as E,l as w0,B as $,r as r0,u as s0,v as i0,d as I,p as c0,t as S,b as f0,C as R0,w as o0,D as T0,m as _0,n as C0,e as P0,E as le,F as ne,G as M0}from"../chunks/index.wUtbSHPu.js";import{f as m0,e as F0,a as J0}from"../chunks/index.bm9S9Ykv.js";import{b as p0}from"../chunks/paths.tzOwPvBc.js";const re=!0,xe=Object.freeze(Object.defineProperty({__proto__:null,prerender:re},Symbol.toStringTag,{value:"Module"}));function se(o){let t,e;return{c(){t=e0("svg"),e=e0("path"),this.h()},l(l){t=t0(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var n=M(t);e=t0(n,"path",{d:!0}),M(e).forEach(d),n.forEach(d),this.h()},h(){i(e,"d","M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width",o[0]),i(t,"height",o[1]),i(t,"fill",o[2]),i(t,"viewBox","0 0 24 24")},m(l,n){A(l,t,n),c(t,e)},p(l,[n]){n&1&&i(t,"width",l[0]),n&2&&i(t,"height",l[1]),n&4&&i(t,"fill",l[2])},i:X,o:X,d(l){l&&d(t)}}}function ie(o,t,e){let{width:l=24}=t,{height:n=24}=t,{fill:m="white"}=t;return o.$$set=r=>{"width"in r&&e(0,l=r.width),"height"in r&&e(1,n=r.height),"fill"in r&&e(2,m=r.fill)},[l,n,m]}class K0 extends h0{constructor(t){super(),d0(this,t,ie,se,u0,{width:0,height:1,fill:2})}}const W0=""+new URL("../assets/Facebook_Logo_Primary.poCYdx3c.png",import.meta.url).href;function oe(o){let t,e;return{c(){t=e0("svg"),e=e0("path"),this.h()},l(l){t=t0(l,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var n=M(t);e=t0(n,"path",{d:!0}),M(e).forEach(d),n.forEach(d),this.h()},h(){i(e,"d","M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width",o[0]),i(t,"height",o[1]),i(t,"fill",o[2]),i(t,"viewBox","0 0 24 24")},m(l,n){A(l,t,n),c(t,e)},p(l,[n]){n&1&&i(t,"width",l[0]),n&2&&i(t,"height",l[1]),n&4&&i(t,"fill",l[2])},i:X,o:X,d(l){l&&d(t)}}}function ae(o,t,e){let{width:l=24}=t,{height:n=24}=t,{fill:m="white"}=t;return o.$$set=r=>{"width"in r&&e(0,l=r.width),"height"in r&&e(1,n=r.height),"fill"in r&&e(2,m=r.fill)},[l,n,m]}class q0 extends h0{constructor(t){super(),d0(this,t,ae,oe,u0,{width:0,height:1,fill:2})}}const G0=""+new URL("../assets/Instagram_Glyph_Gradient.jb1VGtFM.png",import.meta.url).href;function ce(o){let t,e,l,n,m="",r,a,s,u=`var ifr = document.getElementById("JotFormIFrame-240166132150139"); if (ifr) { var src = ifr.src; var iframeParams = []; if (window.location.href && window.location.href.indexOf("?") > -1) { iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&')); } if (src && src.indexOf("?") > -1) { iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&")); src = src.substr(0, src.indexOf("?")) } iframeParams.push("isIframeEmbed=1"); ifr.src = src + "?" + iframeParams.join('&'); } window.handleIFrameMessage = function(e) { if (typeof e.data === 'object') { return; } var args = e.data.split(":"); if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); } if (!iframe) { return; } switch (args[0]) { case "scrollIntoView": iframe.scrollIntoView(); break; case "setHeight": iframe.style.height = args[1] + "px"; if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) { iframe.style.minHeight = args[1] + "px"; } break; case "collapseErrorPage": if (iframe.clientHeight > window.innerHeight) { iframe.style.height = window.innerHeight + "px"; } break; case "reloadPage": window.location.reload(); break; case "loadScript": if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; } var src = args[1]; if (args.length > 3) { src = args[1] + ':' + args[2]; } var script = document.createElement('script'); script.src = src; script.type = 'text/javascript'; document.body.appendChild(script); break; case "exitFullscreen": if (window.document.exitFullscreen) window.document.exitFullscreen(); else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen(); else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen(); else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen(); else if (window.document.msExitFullscreen) window.document.msExitFullscreen(); break; } var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false; if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*"); } }; window.isPermitted = function(originUrl, whitelisted_domains) { var url = document.createElement('a'); url.href = originUrl; var hostname = url.hostname; var result = false; if( typeof hostname !== 'undefined' ) { whitelisted_domains.forEach(function(element) { if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element ) { result = true; } }); return result; } }; if (window.addEventListener) { window.addEventListener("message", handleIFrameMessage, false); } else if (window.attachEvent) { window.attachEvent("onmessage", handleIFrameMessage); }`,f,p,N="Close",x,k,y;return{c(){t=g("div"),e=g("div"),l=g("div"),n=g("iframe"),n.innerHTML=m,a=L(),s=g("script"),s.textContent=u,f=L(),p=g("button"),p.textContent=N,this.h()},l(w){t=_(w,"DIV",{class:!0});var v=M(t);e=_(v,"DIV",{class:!0});var T=M(e);l=_(T,"DIV",{class:!0});var b=M(l);n=_(b,"IFRAME",{id:!0,title:!0,onload:!0,allowtransparency:!0,allow:!0,src:!0,frameborder:!0,style:!0,scrolling:!0,"data-svelte-h":!0}),U(n)!=="svelte-1wb1z2e"&&(n.innerHTML=m),a=E(b),s=_(b,"SCRIPT",{type:!0,"data-svelte-h":!0}),U(s)!=="svelte-wr9wm2"&&(s.textContent=u),f=E(b),p=_(b,"BUTTON",{class:!0,"data-svelte-h":!0}),U(p)!=="svelte-mqll73"&&(p.textContent=N),b.forEach(d),T.forEach(d),v.forEach(d),this.h()},h(){i(n,"id","JotFormIFrame-240166132150139"),i(n,"title","Free Quote"),i(n,"onload","window.parent.scrollTo(0,0)"),i(n,"allowtransparency","true"),n.allowFullscreen="true",i(n,"allow","geolocation; microphone; camera"),$0(n.src,r="https://form.jotform.com/240166132150139")||i(n,"src",r),i(n,"frameborder","0"),w0(n,"min-width","100%"),w0(n,"max-width","100%"),w0(n,"height","539px"),w0(n,"border","none"),i(n,"scrolling","no"),i(s,"type","text/javascript"),i(p,"class","cursor-pointer absolute right-4 top-4 text-grey-900 z-50"),i(l,"class","relative text-lg text-center flex flex-col gap-6"),i(e,"class","form-container bg-naval-700 p-8 rounded-md relative h-full overflow-y-scroll max-w-full svelte-14znx9q"),i(t,"class",x="form-wrapper fixed w-screen h-screen flex justify-center z-50 bg-white/90 text-white p-4 overflow-y-scroll transition "+(o[0]?"show":"")+" svelte-14znx9q")},m(w,v){A(w,t,v),c(t,e),c(e,l),c(l,n),c(l,a),c(l,s),c(l,f),c(l,p),k||(y=[$(p,"click",o[1]),$(e,"click",fe),$(t,"click",o[2])],k=!0)},p(w,[v]){v&1&&x!==(x="form-wrapper fixed w-screen h-screen flex justify-center z-50 bg-white/90 text-white p-4 overflow-y-scroll transition "+(w[0]?"show":"")+" svelte-14znx9q")&&i(t,"class",x)},i:X,o:X,d(w){w&&d(t),k=!1,v0(y)}}}const fe=o=>o.stopPropagation();function ue(o,t,e){let l;return D0(()=>{const r=()=>e(0,l=!0);return window.addEventListener("show-email-popup",r),()=>{window.removeEventListener("show-email-popup",r)}}),[l,()=>e(0,l=!1),()=>e(0,l=!1)]}class he extends h0{constructor(t){super(),d0(this,t,ue,ce,u0,{})}}function V0(o){let t,e,l,n,m="Close",r,a,s=`<a href="${p0}/">Home</a>`,u,f,p=`<a href="${p0}/about-us">About Us</a>`,N,x,k,y,w,v,T,b,h,C,j=`<a class="inline-block" href="https://www.facebook.com/p/Kinder-Painting-100054254721438/"><img src="${W0}" alt="Follow us on Facebook" class="w-8 max-w-max"/></a>`,O,D,J=`<a class="inline-block" href="https://www.instagram.com/kinderpaintingpnw"><img src="${G0}" alt="Follow us on Instagram" class="w-8 max-w-max"/></a>`,R,K,z,P;return y=new K0({props:{width:32,height:32,fill:"rgb(203 193 163)"}}),b=new q0({props:{width:32,height:32,fill:"rgb(203 193 163)"}}),{c(){t=g("nav"),e=g("ul"),l=g("li"),n=g("button"),n.textContent=m,r=L(),a=g("li"),a.innerHTML=s,u=L(),f=g("li"),f.innerHTML=p,N=L(),x=g("li"),k=g("button"),r0(y.$$.fragment),w=L(),v=g("li"),T=g("button"),r0(b.$$.fragment),h=L(),C=g("li"),C.innerHTML=j,O=L(),D=g("li"),D.innerHTML=J,this.h()},l(V){t=_(V,"NAV",{class:!0});var W=M(t);e=_(W,"UL",{class:!0});var F=M(e);l=_(F,"LI",{class:!0});var Y=M(l);n=_(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),U(n)!=="svelte-1xl5kqr"&&(n.textContent=m),Y.forEach(d),r=E(F),a=_(F,"LI",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-jzycux"&&(a.innerHTML=s),u=E(F),f=_(F,"LI",{class:!0,"data-svelte-h":!0}),U(f)!=="svelte-oexa25"&&(f.innerHTML=p),N=E(F),x=_(F,"LI",{class:!0});var a0=M(x);k=_(a0,"BUTTON",{class:!0});var l0=M(k);s0(y.$$.fragment,l0),l0.forEach(d),a0.forEach(d),w=E(F),v=_(F,"LI",{class:!0});var G=M(v);T=_(G,"BUTTON",{class:!0});var n0=M(T);s0(b.$$.fragment,n0),n0.forEach(d),G.forEach(d),h=E(F),C=_(F,"LI",{class:!0,"data-svelte-h":!0}),U(C)!=="svelte-c1s3am"&&(C.innerHTML=j),O=E(F),D=_(F,"LI",{class:!0,"data-svelte-h":!0}),U(D)!=="svelte-nlljge"&&(D.innerHTML=J),F.forEach(d),W.forEach(d),this.h()},h(){i(n,"class","text-sm text-right inline"),i(l,"class","text-right mb-2"),i(a,"class","text-right"),i(f,"class","text-right"),i(k,"class","inline-block"),i(x,"class","text-right"),i(T,"class","inline-block"),i(v,"class","text-right"),i(C,"class","text-right"),i(D,"class","text-right"),i(e,"class","flex flex-col text-base text-white gap-4"),i(t,"class","lg:hidden fixed p-8 bg-naval-800 z-50 h-screen top-0 right-0")},m(V,W){A(V,t,W),c(t,e),c(e,l),c(l,n),c(e,r),c(e,a),c(e,u),c(e,f),c(e,N),c(e,x),c(x,k),i0(y,k,null),c(e,w),c(e,v),c(v,T),i0(b,T,null),c(e,h),c(e,C),c(e,O),c(e,D),K=!0,z||(P=[$(n,"click",o[4]),$(k,"click",o[2]),$(T,"click",o[2])],z=!0)},p:X,i(V){K||(I(y.$$.fragment,V),I(b.$$.fragment,V),V&&z0(()=>{K&&(R||(R=T0(t,m0,{x:"10vw"},!0)),R.run(1))}),K=!0)},o(V){S(y.$$.fragment,V),S(b.$$.fragment,V),V&&(R||(R=T0(t,m0,{x:"10vw"},!1)),R.run(0)),K=!1},d(V){V&&d(t),o0(y),o0(b),V&&R&&R.end(),z=!1,v0(P)}}}function de(o){let t,e,l,n=`<a href="${p0}/"><h1 class="cursor-pointer text-white text-center font-mont text-2xl italic font-bold relative shadow-1 svelte-jw8lgs">KINDER PAINTING</h1></a> <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="rect-cp"><rect id="rect" x="0" y="0" width="0" height="1"><animate id="anim" attributeName="width" dur="1s" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.5,0,0.5,1" values="0;1"></animate></rect></clipPath><clipPath id="rect-cp-indefinite"><rect id="rect" x="0" y="0" width="0" height="1"><animate id="anim-indefinite" attributeName="width" dur="1s" calcMode="spline" keyTimes="0; 1" keySplines="0.5,0,0.5,1" values="0;1" begin="0s;anim-indefinite.end+1s"></animate></rect></clipPath><clipPath id="clip" clipPathUnits="objectBoundingBox"><use href="#brush-shape" clip-path="url(#rect-cp)"></use></clipPath><clipPath id="clip-indefinite" clipPathUnits="objectBoundingBox"><use href="#brush-shape" clip-path="url(#rect-cp-indefinite)"></use></clipPath><path id="brush-shape" d="M.261.995A.07.07 0 0 0 .257.978V.975C.258.97.255.972.257.967.259.963.255.96.257.959V.95C.256.943.259.948.257.943.256.934.255.956.255.944.255.937.254.943.253.94.252.939.253.938.254.937.257.934.257.931.26.926.267.907.277.916.284.899.293.885.287.897.29.879.295.874.308.872.312.862.288.866.246.848.22.864.207.871.2.872.188.891.175.892.176.901.161.91.156.928.143.92.138.928c0-.005-.025-.012-.022.01-.007.013.01-.01.011-.003-.001.004.006 0 .004.003L.13.942C.13.947.113.951.111.945.103.948.059.92.089.918.069.889.048.9.029.904.028.901.002.922.008.898.012.884.032.892.029.873.026.872.031.869.029.867c0-.004.002-.012.005-.014A.055.055 0 0 0 .017.85C.021.826.042.831.045.818.044.818.038.815.041.811.042.804.053.795.046.793.041.79.032.788.029.791.026.792.019.799.024.783V.782C.024.784.022.778.022.781.021.786.019.782.022.778.024.774.023.773.02.77.011.75.041.756.045.75.037.732.04.727.048.717.051.714.045.713.046.704.04.698.026.726.019.716L.02.713C.02.711.049.696.036.696.031.688.013.697.011.7.009.699.012.689.015.686c.004-.01-.008 0-.009 0A.083.083 0 0 0 .01.671C-.015.656.013.64.022.638.065.619.022.624.05.602.076.574.047.581.061.565.065.559.049.563.054.556.056.549.035.568.036.554.034.55.047.529.046.527.045.52.061.504.058.495c0-.008.021-.016.024-.022C.09.469.095.459.101.455.102.454.101.453.1.453.093.454.093.447.09.446.087.446.094.439.095.443c.003.002.008 0 .012.005.004.008.001-.003 0-.006C.1.427.133.438.124.42c0-.006.005-.003.002-.009C.12.412.106.413.104.406.104.395.105.393.098.392.088.392.105.381.108.38.117.373.133.38.141.371.143.369.143.369.143.362V.348C.142.342.143.341.151.342.164.342.166.334.179.329.161.323.132.331.118.344v.002c-.001 0 0 .006-.002.001C.113.338.115.354.112.347.107.338.107.36.1.34.098.344.1.32.101.324L.102.32C.106.32.109.307.111.316H.11L.108.32v.002c0 .006.004.01.002.005C.109.324.115.328.115.325.116.32.117.33.118.324.118.317.119.319.12.315.121.311.125.309.125.304c0-.011.001.007.002-.001.002-.008 0 .008.002.001S.122.289.131.283C.133.283.135.281.135.277.136.271.143.276.144.27.14.26.126.277.123.262.121.254.124.257.122.252S.124.252.124.25C.121.245.128.243.128.247c0 .002 0 .002 0 0A.017.017 0 0 0 .135.244C.137.244.138.239.136.239.129.233.144.217.147.217.155.202.113.217.11.212.107.209.11.217.108.216.104.212.101.22.106.206c0 0-.004.003-.002 0C.106.198.112.215.113.205.112.202.121.202.12.205.122.199.131.198.134.195.139.19.14.192.144.188.151.183.13.188.131.187.123.185.055.231.084.194.128.159.184.15.23.132.26.119.281.094.313.079.321.079.338.05.341.074c0 .004.001.001.002.002C.345.074.342.09.344.084.339.11.33.106.375.088.4.081.424.072.449.069.461.086.479.065.497.067c.07-.01.145.008.213.021a.525.525 0 0 1 .129.034C.844.128.854.123.855.13c0 .003.001.004.001.001 0-.004.002.001.003 0C.861.13.861.145.859.136.832.14.793.123.76.123c.021.019.057.01.076.03C.833.158.826.15.821.149.814.149.802.15.793.142.789.15.775.143.77.146.772.151.768.154.762.151.727.147.687.119.652.139c.037.02.079.016.115.035.043.029.096.022.135.042C.887.223.852.214.835.215.826.213.824.214.829.217c.004.001.004.005 0 .008-.005.007.02.007.025.009.009.001.01.002.01.005-.003.007.027.007.029.012C.905.263.867.262.889.269c.024.003.053.029.075.04 0 .004-.005.002-.006.004 0 .003.006.005.003.01-.002.003.001.007.006.01S.975.34.973.34c-.001.002.01.009.013.013C.996.36.983.358.981.365.977.371.964.355.965.375c.002.002.021.013.01.014-.006 0-.004.003-.01.003-.014.004.012.011.014.015C.986.411.954.416.975.425c.006.006.009.001.013.007C.989.437.984.446.985.44.987.435.984.437.984.44S.983.443.977.442C.97.441.968.442.97.448c.002.018.019.014.022.027C.988.486.961.462.958.476.962.503 1 .488.997.509.997.516.99.514.992.527.994.536.99.539.995.541.998.56.982.538.982.547c-.004.017.002.022 0 .024v.002c.003.004-.011 0-.01.009C.972.584.971.585.97.585.96.586.978.604.98.608c.008-.002.015.013.005.02C.985.637.937.619.957.635.98.649.955.642.973.668.974.674.974.68.972.679.97.696.966.692.96.693.952.691.953.703.945.698.942.699.935.701.94.71c.002.006.022.018.015.026C.955.743.952.751.951.75.95.755.936.753.94.764c.003.01.007.005.005.022.001.009-.001 0-.002.002L.939.796C.948.8.939.808.935.813.931.818.934.825.926.816.922.812.921.812.919.819S.903.814.904.82c0 .003.013.008.01.011C.91.837.926.846.93.849.929.859.927.861.93.87.926.877.906.852.903.859c-.004.009.01.012.012.023C.916.887.906.881.906.884.91.894.899.882.898.881S.888.87.887.877c-.004.014.02.018.027.028C.93.914.907.914.905.915c0 .001.008.008.004.011C.908.931.9.921.901.926.914.945.868.935.866.939.807.926.75.894.69.896.674.894.679.901.673.897.668.896.661.885.657.89.656.892.653.89.653.887.62.879.637.881.59.88.563.878.561.88.536.882.532.882.527.891.529.895.526.915.52.903.513.904.485.903.45.918.424.927.418.921.398.928.392.932c.001.009.005.002.005.011 0 .004-.001.004-.002 0C.394.937.394.945.393.943.373.954.352.952.329.962.303.968.298.993.278.992.273.994.265.996.261 1V.995zm0-.019c-.002-.009-.003.019 0 0zM.354.945C.356.942.356.942.352.943L.337.948c0 .003.014 0 .017-.003zM.097.92C.097.919.095.919.095.921.096.924.097.921.097.92zm.04-.007c0-.003-.003-.002-.003 0 0 .004.003.002.003 0zM.111.903C.111.901.11.901.109.902.106.907.111.907.111.903zM.423.902C.429.893.404.901.396.903.394.904.42.908.423.902zm.02-.006c0-.002-.012 0-.006.003C.439.9.441.898.443.896zM.09.897c.003 0-.004-.007-.003 0 .001.004.002-.001.003 0zM.451.894c-.006-.006-.007.008 0 0zM.883.87C.884.867.876.868.88.87c.002.002.002.002.003 0zM.032.84C.031.839.03.841.032.841V.84zM.038.837C.041.834.037.836.036.837c-.001.002 0 .002.002 0zm.007.001C.05.822.038.834.042.835c.002 0 .001.007.003.003zM.943.802C.943.8.94.799.942.802c.001.002.001.002.001 0zM.059.718C.058.717.057.719.059.719V.718zM.055.712c0-.008-.009.005-.002.004L.055.712zm.01.001C.064.71.062.709.062.712c0 .004.003.004.003.001zM.061.711C.063.708.057.709.058.711c-.001.003.002.003.003 0zM.981.47C.981.467.98.467.98.47c0 .002.001.002.001 0zM.985.431H.984c-.001.002.002.002.001 0zM.977.406H.975c-.002.002.004.002.002 0zM.952.39C.951.388.941.38.94.382c.001.002.012.01.012.008zM.146.371C.148.368.144.369.144.371c-.001.002.001.002.002 0zM.948.359C.948.357.931.349.935.355c0 .001.013.007.013.004zM.115.334c0-.003-.001-.002-.001 0s.001.002.001 0zM.189.33C.188.329.187.331.189.331V.33zM.103.327.102.325C.1.324.104.332.103.327zM.105.324v.002-.002zM.137.31C.141.307.165.296.154.283.154.278.179.276.163.27.16.27.147.281.153.284.154.287.147.287.145.294c0 .002 0 .002-.001 0 0-.002-.001-.002 0 0C.144.299.138.3.137.298c0-.001-.001-.002-.001 0C.136.303.13.305.129.31c.001.005.007 0 .008 0zM.16.235C.159.233.157.239.159.237L.16.235zM.827.227c0-.002-.003-.003-.003 0 0 .002.003.002.003 0zM.161.214h.001C.159.205.155.219.161.214zm.661 0C.822.212.82.212.82.214c.001.002.002.002.002 0zm.003.001C.824.214.823.216.825.216V.215zM.171.21C.17.209.169.211.171.211V.21zM.109.208c0-.003-.001-.003-.001 0 0 .002.001.002.001 0zM.123.202.122.205.123.202zm.006.001c0-.008-.001.002-.001.003L.129.203zM.852.132C.851.131.85.133.852.133V.132zM.343.09C.343.087.342.085.342.089c0 .003.001.004.001.001zM.081.976c0-.007-.003-.01.002-.011C.087.964.081.97.083.973.085.973.086.97.086.967.085.965.091.977.092.969c.001-.006.003.013.002.01C.093.978.094.971.093.976.092.98.081.979.081.976zM.073.971V.965c.002.001.002.01 0 .006zM.085.955C.084.948.087.951.088.95.092.949.086.966.085.955zM.42.939.421.937C.422.936.42.943.42.939zM.426.938C.427.935.428.937.426.939V.938zM.13.932c.003-.018.003.009 0 0zM.753.913c0-.003.002-.002.002 0 .001.003-.002.003-.002 0zM.744.911c0-.002.001-.003.002 0 0 .002-.002.002-.002 0zM.196.908C.195.899.2.907.2.909.197.911.196.91.196.908zM.674.903c0-.005.002.002.001.002L.674.903zM.666.901c-.001-.005.001-.006 0 0 0 .002 0 .002 0 0zm.002.001V.899C.67.9.67.905.668.902zM.933.891V.886v.005zM.247.879c0-.002.002-.003.002 0-.001.002-.001.002-.002 0zM.252.875c0-.004.007-.006.006-.003v.002C.261.876.251.88.252.875zM.027.87.028.867C.029.87.027.875.027.87zM.032.816.033.813c0-.001-.001.01-.001.003zM.036.815V.813v.002zM.998.546C.997.541 1.001.547 1 .548L.998.546zM.091.393c0-.002.002-.002.002 0 0 .003-.002.002-.002 0zm.023-.03L.113.359C.117.355.136.351.124.36.121.362.117.369.114.363zm-.007 0h.001c.001.002-.001.002-.001 0zM.097.335V.332v.003zM.112.317C.112.309.108.31.113.302.119.292.119.3.117.305v.002C.123.31.117.312.115.311v.004C.114.315.113.323.112.317zM.119.301C.118.297.122.292.12.3c0 .001 0 .002-.001.001zM.1.214c0-.003.001-.002.002 0C.102.217.1.216.1.214zM.112.205C.113.201.113.201.113.204.113.205.11.21.112.205zm.78-.034C.893.169.896.167.897.168c0 .006-.006.003-.005.003zM.889.169c0-.007.005.006 0 0zM.875.166A.211.211 0 0 0 .837.157L.841.15l.001.004C.844.156.845.145.844.152c0 .002 0 .002 0 0C.849.147.855.155.86.155c.005 0 .014.001.019.006 0 .006-.002.008-.004.005zM.852.156C.852.153.85.154.85.156c-.001.002.002.002.002 0zM.882.15C.88.149.881.141.882.148V.15zM.87.142C.869.136.86.144.861.134.863.127.867.141.869.135.87.133.872.133.873.135.874.144.871.15.87.142zm.006.001c.003-.01.002.009 0 0zM.23.128h.001C.232.129.229.13.23.128zM.341.069c0-.005.002.002.001.002L.341.069zM.354.07C.352.062.357.067.356.056.357.049.364.052.363.042.364.035.365.046.366.043.367.035.37.044.37.041V.039C.372.038.372.047.374.047V.04C.379.034.474-.004.45.035c-.009.004.01.003.007.01 0 .001-.008.003-.008.001C.439.043.424.048.415.042a.039.039 0 0 1-.016.007C.398.045.396.049.395.05.395.047.39.048.389.052.388.058.378.062.378.055.377.057.378.064.376.059.375.057.375.057.375.059.375.063.37.06.37.063.369.07.366.059.366.058c0 .003-.001.009-.002.005C.362.062.355.074.354.07zM.346.06c0-.007.002 0 .001.002L.346.06zM.348.057.349.056C.351.057.347.06.348.057zM.539.051c-.004-.002 0-.006.001 0 0 .004 0 .001-.001 0zM.527.047c.002-.002.002-.002.001 0 0 .001-.003.003-.001 0zm.003 0c0-.003.003.003.001.002L.53.047zM.459.042C.457.035.479.039.478.04c.003-.001.003.002 0 .003C.475.045.477.036.475.044.472.051.471.042.469.045.468.047.467.046.468.042.467.04.46.049.459.042zm.045.003c0-.005.002.002.001.002L.504.045zM.482.041c-.002-.004 0-.003 0 0 .001.002.001.002 0 0zM.697.04C.694.034.683.044.68.033L.683.027c.001-.001 0 .01.002.004.002-.007.003.008.003.001 0-.01.003.002.003.001.002-.007.002.003.006 0C.7.034.703.034.703.039.704.042.697.043.697.04zm.009 0c0-.005.008-.003.003.001C.708.043.706.042.706.04zM.667.033C.666.028.662.034.662.033.659.03.651.032.644.028.64.022.632.036.629.028.601.037.582.02.551.023.539.021.485.026.498.008.535-.012.61.011.65.019.655.021.667.017.665.03.666.029.669.028.669.024v.001c0 .005.007-.001.008.002 0 .002.005.002.003.003C.678.03.678.031.679.032.682.035.668.037.667.033zM.506.015C.505.009.504.018.506.018V.015zM.474.022V.019c-.002.003 0-.006 0-.008.001.012.004.011.002 0C.475.005.482.012.482.008c0-.003.004-.004.004 0 0 .002 0 .002.001 0 .002-.004 0 .005 0 .006.001.009.002-.017.004-.008l.001.012C.494.019.492.022.49.022.483.026.483.005.481.014c0 .003.001-.002.001.003C.482.021.48.016.48.02.481.023.472.028.474.022zM.489.014V.012c-.002 0 0 .006 0 .002zM.466.022C.467.016.468.021.468.011.47.012.467.029.466.022zM.47.016c0-.007.002.002 0 .003V.016zM.472.011C.473.007.477.007.476.013.474.008.47.018.472.011zM.465.01h.001C.467.012.464.012.465.01zm.029 0C.492.007.495.008.495.01s0 .002-.001 0zM.491.006C.49 0 .494.011.492.01L.491.006z"></path></defs></svg>`,m,r,a="Serving Longview and Western Washington",s,u,f,p,N=`<a href="${p0}/about-us">About Us</a>`,x,k,y,w,v,T,b,h,C,j,O=`<a href="https://www.facebook.com/p/Kinder-Painting-100054254721438/"><img src="${W0}" alt="Follow us on Facebook" class="w-8 max-w-max"/></a>`,D,J,R=`<a href="https://www.instagram.com/kinderpaintingpnw"><img src="${G0}" alt="Follow us on Instagram" class="w-8 max-w-max"/></a>`,K,z,P="Menu",V,W,F,Y="Serving Longview and Western Washington",a0,l0,G,n0,g0,x0;w=new K0({props:{width:32,height:32,fill:"rgb(203 193 163)"}}),h=new q0({props:{width:32,height:32,fill:"rgb(203 193 163)"}});let B=o[1]&&V0(o);return G=new he({}),{c(){t=g("header"),e=g("div"),l=g("div"),l.innerHTML=n,m=L(),r=g("p"),r.textContent=a,s=L(),u=g("nav"),f=g("ul"),p=g("li"),p.innerHTML=N,x=L(),k=g("li"),y=g("button"),r0(w.$$.fragment),v=L(),T=g("li"),b=g("button"),r0(h.$$.fragment),C=L(),j=g("li"),j.innerHTML=O,D=L(),J=g("li"),J.innerHTML=R,K=L(),z=g("button"),z.textContent=P,V=L(),B&&B.c(),W=L(),F=g("p"),F.textContent=Y,l0=L(),r0(G.$$.fragment),this.h()},l(H){t=_(H,"HEADER",{class:!0});var q=M(t);e=_(q,"DIV",{class:!0});var Q=M(e);l=_(Q,"DIV",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-7czx7g"&&(l.innerHTML=n),m=E(Q),r=_(Q,"P",{class:!0,"data-svelte-h":!0}),U(r)!=="svelte-v66wkg"&&(r.textContent=a),s=E(Q),u=_(Q,"NAV",{class:!0});var k0=M(u);f=_(k0,"UL",{class:!0});var Z=M(f);p=_(Z,"LI",{"data-svelte-h":!0}),U(p)!=="svelte-198y3sw"&&(p.innerHTML=N),x=E(Z),k=_(Z,"LI",{});var y0=M(k);y=_(y0,"BUTTON",{class:!0});var L0=M(y);s0(w.$$.fragment,L0),L0.forEach(d),y0.forEach(d),v=E(Z),T=_(Z,"LI",{});var E0=M(T);b=_(E0,"BUTTON",{class:!0});var I0=M(b);s0(h.$$.fragment,I0),I0.forEach(d),E0.forEach(d),C=E(Z),j=_(Z,"LI",{"data-svelte-h":!0}),U(j)!=="svelte-zuxnj3"&&(j.innerHTML=O),D=E(Z),J=_(Z,"LI",{"data-svelte-h":!0}),U(J)!=="svelte-100u3wv"&&(J.innerHTML=R),Z.forEach(d),k0.forEach(d),K=E(Q),z=_(Q,"BUTTON",{class:!0,"data-svelte-h":!0}),U(z)!=="svelte-scrwyc"&&(z.textContent=P),V=E(Q),B&&B.l(Q),Q.forEach(d),W=E(q),F=_(q,"P",{class:!0,"data-svelte-h":!0}),U(F)!=="svelte-1dwcchk"&&(F.textContent=Y),q.forEach(d),l0=E(H),s0(G.$$.fragment,H),this.h()},h(){i(l,"class","relative px-4 py-2 logo before:bg-ramie-400 svelte-jw8lgs"),i(r,"class","hidden sm:block text-base text-white italic"),i(y,"class","block"),i(b,"class","block"),i(f,"class","flex text-base text-white items-center gap-4"),i(u,"class","hidden lg:block"),i(z,"class","lg:hidden text-white"),i(e,"class","flex items-center justify-between mx-auto max-w-vw-max gap-4"),i(F,"class","text-center sm:hidden text-base text-white italic mt-2"),i(t,"class","w-full bg-naval-700 px-6 py-4 fixed z-20")},m(H,q){A(H,t,q),c(t,e),c(e,l),c(e,m),c(e,r),c(e,s),c(e,u),c(u,f),c(f,p),c(f,x),c(f,k),c(k,y),i0(w,y,null),c(f,v),c(f,T),c(T,b),i0(h,b,null),c(f,C),c(f,j),c(f,D),c(f,J),c(e,K),c(e,z),c(e,V),B&&B.m(e,null),c(t,W),c(t,F),o[5](t),A(H,l0,q),i0(G,H,q),n0=!0,g0||(x0=[$(y,"click",o[2]),$(b,"click",o[2]),$(z,"click",o[3])],g0=!0)},p(H,[q]){H[1]?B?(B.p(H,q),q&2&&I(B,1)):(B=V0(H),B.c(),I(B,1),B.m(e,null)):B&&(c0(),S(B,1,1,()=>{B=null}),f0())},i(H){n0||(I(w.$$.fragment,H),I(h.$$.fragment,H),I(B),a0||z0(()=>{a0=R0(t,m0,{duration:200,y:"-100vh",opacity:1}),a0.start()}),I(G.$$.fragment,H),n0=!0)},o(H){S(w.$$.fragment,H),S(h.$$.fragment,H),S(B),S(G.$$.fragment,H),n0=!1},d(H){H&&(d(t),d(l0)),o0(w),o0(h),B&&B.d(),o[5](null),o0(G,H),g0=!1,v0(x0)}}}function me(o,t,e){console.log(p0);let l,n=!1;const m=()=>{window.dispatchEvent(new CustomEvent("show-email-popup"))},r=()=>e(1,n=!0),a=()=>e(1,n=!1);function s(u){Q0[u?"unshift":"push"](()=>{l=u,e(0,l)})}return[l,n,m,r,a,s]}class pe extends h0{constructor(t){super(),d0(this,t,me,de,u0,{})}}function we(o){let t,e,l,n,m,r,a=new Date().getFullYear()+"",s,u,f,p,N=`Work: (360) 423-6633<br/>
            Cell: (360) 430-4604<br/>
            Email: kinderpainting@gmail.com`,x,k,y='Powered by <a href="https://jamaneshamann.me">James Hamann</a>',w,v,T="",b;return{c(){t=g("footer"),e=g("div"),l=g("p"),n=_0("Kinder Painting"),m=g("br"),r=_0(`
            Copyright @`),s=_0(a),u=g("br"),f=L(),p=g("div"),p.innerHTML=N,x=L(),k=g("div"),k.innerHTML=y,w=L(),v=g("script"),v.innerHTML=T,this.h()},l(h){t=_(h,"FOOTER",{class:!0});var C=M(t);e=_(C,"DIV",{class:!0});var j=M(e);l=_(j,"P",{});var O=M(l);n=C0(O,"Kinder Painting"),m=_(O,"BR",{}),r=C0(O,`
            Copyright @`),s=C0(O,a),u=_(O,"BR",{}),O.forEach(d),f=E(j),p=_(j,"DIV",{"data-svelte-h":!0}),U(p)!=="svelte-161jnnh"&&(p.innerHTML=N),x=E(j),k=_(j,"DIV",{"data-svelte-h":!0}),U(k)!=="svelte-4bguc0"&&(k.innerHTML=y),j.forEach(d),w=E(C),v=_(C,"SCRIPT",{type:!0,src:!0,"data-svelte-h":!0}),U(v)!=="svelte-1gjfb4b"&&(v.innerHTML=T),C.forEach(d),this.h()},h(){i(e,"class","flex flex-col sm:flex-row sm:items-center justify-between mx-auto max-w-vw-max gap-4"),i(v,"type","text/javascript"),$0(v.src,b="https://form.jotform.com/jsform/240166132150139")||i(v,"src",b),i(t,"class","w-full bg-naval-700 px-6 py-4 text-white")},m(h,C){A(h,t,C),c(t,e),c(e,l),c(l,n),c(l,m),c(l,r),c(l,s),c(l,u),c(e,f),c(e,p),c(e,x),c(e,k),c(t,w),c(t,v)},p:X,i:X,o:X,d(h){h&&d(t)}}}class ve extends h0{constructor(t){super(),d0(this,t,null,we,u0,{})}}function H0(o,t,e){const l=o.slice();return l[28]=t[e],l[30]=e,l}function j0(o){let t,e,l=F0(Array.from(Array(b0))),n=[];for(let r=0;r<l.length;r+=1)n[r]=N0(H0(o,l,r));const m=r=>S(n[r],1,1,()=>{n[r]=null});return{c(){t=g("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){t=_(r,"DIV",{class:!0});var a=M(t);for(let s=0;s<n.length;s+=1)n[s].l(a);a.forEach(d),this.h()},h(){i(t,"class","app h-screen w-screen flex absolute z-10")},m(r,a){A(r,t,a);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(t,null);e=!0},p(r,a){if(a&2){l=F0(Array.from(Array(b0)));let s;for(s=0;s<l.length;s+=1){const u=H0(r,l,s);n[s]?(n[s].p(u,a),I(n[s],1)):(n[s]=N0(u),n[s].c(),I(n[s],1),n[s].m(t,null))}for(c0(),s=l.length;s<n.length;s+=1)m(s);f0()}},i(r){if(!e){for(let a=0;a<l.length;a+=1)I(n[a]);e=!0}},o(r){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)S(n[a]);e=!1},d(r){r&&d(t),ne(n,r)}}}function N0(o){let t,e,l,n,m,r;function a(){return o[13](o[30])}return{c(){t=g("div"),this.h()},l(s){t=_(s,"DIV",{class:!0}),M(t).forEach(d),this.h()},h(){i(t,"class","flex-1 h-full bg-naval-700")},m(s,u){A(s,t,u),n=!0,m||(r=$(t,"introend",a),m=!0)},p(s,u){o=s},i(s){n||(z0(()=>{n&&(l&&l.end(1),e=R0(t,m0,{delay:o[30]*150,duration:600,opacity:1,y:"-100vh"}),e.start())}),n=!0)},o(s){e&&e.invalidate(),l=M0(t,m0,{duration:800,y:"100vh",opacity:1}),n=!1},d(s){s&&d(t),s&&l&&l.end(),m=!1,r()}}}function B0(o){let t,e,l,n,m,r,a,s,u,f,p,N=`p, h1, h2, h3, h4, h5, h6, button, input, textarea, li {
        cursor: auto;
    }

    a, button {
        cursor: pointer;
    }`,x,k,y,w=o[2]&&o[3]&&o[4]&&S0(o),v=o[5].length>0&&U0(o);n=new pe({}),n.$on("show-email-popup",o[14]);const T=o[12].default,b=Z0(T,o,o[11],null);return u=new ve({}),{c(){w&&w.c(),t=L(),v&&v.c(),e=L(),l=g("div"),r0(n.$$.fragment),m=L(),r=g("div"),a=g("main"),b&&b.c(),s=L(),r0(u.$$.fragment),f=L(),p=g("style"),p.textContent=N,this.h()},l(h){w&&w.l(h),t=E(h),v&&v.l(h),e=E(h),l=_(h,"DIV",{class:!0,role:!0});var C=M(l);s0(n.$$.fragment,C),m=E(C),r=_(C,"DIV",{class:!0});var j=M(r);a=_(j,"MAIN",{class:!0});var O=M(a);b&&b.l(O),O.forEach(d),j.forEach(d),s=E(C),s0(u.$$.fragment,C),C.forEach(d),f=E(h),p=_(h,"STYLE",{"data-svelte-h":!0}),U(p)!=="svelte-185nann"&&(p.textContent=N),this.h()},h(){i(a,"class","flex-1"),i(r,"class","app flex flex-col pt-40 sm:pt-20"),i(l,"class","text-grey-900 flex flex-col justify-between min-h-screen cursor-paintbrush overflow-x-hidden"),i(l,"role","presentation")},m(h,C){w&&w.m(h,C),A(h,t,C),v&&v.m(h,C),A(h,e,C),A(h,l,C),i0(n,l,null),c(l,m),c(l,r),c(r,a),b&&b.m(a,null),c(l,s),i0(u,l,null),A(h,f,C),A(h,p,C),x=!0,k||(y=[$(l,"contextmenu",o[8]),$(l,"mousedown",o[9]),$(l,"mousemove",o[10]),$(l,"mouseup",o[8]),$(l,"mouseleave",o[8])],k=!0)},p(h,C){h[2]&&h[3]&&h[4]?w?(w.p(h,C),C&28&&I(w,1)):(w=S0(h),w.c(),I(w,1),w.m(t.parentNode,t)):w&&(c0(),S(w,1,1,()=>{w=null}),f0()),h[5].length>0?v?(v.p(h,C),C&32&&I(v,1)):(v=U0(h),v.c(),I(v,1),v.m(e.parentNode,e)):v&&(c0(),S(v,1,1,()=>{v=null}),f0()),b&&b.p&&(!x||C&2048)&&X0(b,T,h,h[11],x?ee(T,h[11],C,null):Y0(h[11]),null)},i(h){x||(I(w),I(v),I(n.$$.fragment,h),I(b,h),I(u.$$.fragment,h),x=!0)},o(h){S(w),S(v),S(n.$$.fragment,h),S(b,h),S(u.$$.fragment,h),x=!1},d(h){h&&(d(t),d(e),d(l),d(f),d(p)),w&&w.d(h),v&&v.d(h),o0(n),b&&b.d(h),o0(u),k=!1,v0(y)}}}function S0(o){let t,e,l,n,m;return{c(){t=e0("svg"),e=e0("polyline"),this.h()},l(r){t=t0(r,"svg",{class:!0});var a=M(t);e=t0(a,"polyline",{points:!0,stroke:!0,"stroke-opacity":!0,fill:!0,"stroke-width":!0,"stroke-linejoin":!0,"stroke-linecap":!0}),M(e).forEach(d),a.forEach(d),this.h()},h(){i(e,"points",o[4]),i(e,"stroke",l=o[7][o[6]]),i(e,"stroke-opacity","0.8"),i(e,"fill","transparent"),i(e,"stroke-width","15"),i(e,"stroke-linejoin","bevel"),i(e,"stroke-linecap","round"),i(t,"class","fixed w-screen z-50 h-screen pointer-events-none")},m(r,a){A(r,t,a),c(t,e),m=!0},p(r,a){(!m||a&16)&&i(e,"points",r[4]),(!m||a&64&&l!==(l=r[7][r[6]]))&&i(e,"stroke",l)},i(r){m||(n&&n.end(1),m=!0)},o(r){r&&(n=M0(t,J0,{})),m=!1},d(r){r&&d(t),r&&n&&n.end()}}}function U0(o){let t,e,l,n,m,r;return{c(){t=e0("svg"),e=e0("polyline"),this.h()},l(a){t=t0(a,"svg",{class:!0});var s=M(t);e=t0(s,"polyline",{points:!0,stroke:!0,fill:!0,"stroke-width":!0,"stroke-linejoin":!0,"stroke-linecap":!0,"stroke-opacity":!0}),M(e).forEach(d),s.forEach(d),this.h()},h(){i(e,"points",l=o[5].reduce(O0,"")),i(e,"stroke",n=o[7][o[6]]),i(e,"fill","transparent"),i(e,"stroke-width","15"),i(e,"stroke-linejoin","bevel"),i(e,"stroke-linecap","round"),i(e,"stroke-opacity","0.8"),i(t,"class","fixed w-screen z-50 h-screen pointer-events-none")},m(a,s){A(a,t,s),c(t,e),r=!0},p(a,s){(!r||s&32&&l!==(l=a[5].reduce(O0,"")))&&i(e,"points",l),(!r||s&64&&n!==(n=a[7][a[6]]))&&i(e,"stroke",n)},i(a){r||(m&&m.end(1),r=!0)},o(a){a&&(m=M0(t,J0,{})),r=!1},d(a){a&&d(t),a&&m&&m.end()}}}function ge(o){let t,e,l,n,m,r,a,s=!o[1]&&o[0]&&j0(o),u=o[1]&&B0(o);return{c(){t=g("link"),e=g("link"),l=g("link"),n=L(),s&&s.c(),m=L(),u&&u.c(),r=P0(),this.h()},l(f){const p=le("svelte-p0fgpe",document.head);t=_(p,"LINK",{rel:!0,href:!0}),e=_(p,"LINK",{rel:!0,href:!0,crossorigin:!0}),l=_(p,"LINK",{href:!0,rel:!0}),p.forEach(d),n=E(f),s&&s.l(f),m=E(f),u&&u.l(f),r=P0(),this.h()},h(){i(t,"rel","preconnect"),i(t,"href","https://fonts.googleapis.com"),i(e,"rel","preconnect"),i(e,"href","https://fonts.gstatic.com"),i(e,"crossorigin",""),i(l,"href","https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,400;0,6..12,700;1,6..12,200;1,6..12,400;1,6..12,700&display=swap"),i(l,"rel","stylesheet")},m(f,p){c(document.head,t),c(document.head,e),c(document.head,l),A(f,n,p),s&&s.m(f,p),A(f,m,p),u&&u.m(f,p),A(f,r,p),a=!0},p(f,[p]){!f[1]&&f[0]?s?(s.p(f,p),p&3&&I(s,1)):(s=j0(f),s.c(),I(s,1),s.m(m.parentNode,m)):s&&(c0(),S(s,1,1,()=>{s=null}),f0()),f[1]?u?(u.p(f,p),p&2&&I(u,1)):(u=B0(f),u.c(),I(u,1),u.m(r.parentNode,r)):u&&(c0(),S(u,1,1,()=>{u=null}),f0())},i(f){a||(I(s),I(u),a=!0)},o(f){S(s),S(u),a=!1},d(f){f&&(d(n),d(m),d(r)),d(t),d(e),d(l),s&&s.d(f),u&&u.d(f)}}}const b0=8;function A0(o,t){let e=null;return(...l)=>{e===null&&(o(...l),e=setTimeout(()=>{e=null},t))}}const O0=(o,t)=>`${o}${t.x},${t.y} `;function _e(o,t,e){let{$$slots:l={},$$scope:n}=t,m=!1,r=!0,a=!1,s=null,u=null,f=null,p="",N=null,x=[];const k=["#303a4c","#dcdfe1","#cbc1a3","#a69674"];let y=0,w=!0;D0(()=>{e(0,m=!0)});const v=()=>{a=!1,w&&y===k.length-1&&(w=!1),!w&&y===0&&(w=!0),e(6,y=w?y+1:y-1),h()},T=()=>{a=!0},b=z=>{a?C(z):O(z)},h=()=>{e(2,s=null),e(3,u=null),f=null,e(4,p=""),N=null,e(5,x=[])},C=({pageX:z,pageY:P,clientX:V,clientY:W})=>{f?(N.x=z,N.y=P,z<f.x?D({pageX:z,pageY:P}):J({pageX:z,pageY:P}),j({x:V,y:W})):(f={x:z,y:P},e(2,s={x:z,y:P}),e(3,u={x:z,y:P}),e(4,p=x.reduce((F,Y)=>`${F}${Y.x},${Y.y} `,"")),N={x:V,y:W},e(5,x=[]))},j=A0(({x:z,y:P})=>{e(4,p=`${p} ${z},${P} `)},30),O=A0(({clientX:z,clientY:P})=>{const V=x.slice(-1);e(5,x=[...V,{x:z,y:P}])},5),D=({pageX:z,pageY:P})=>{e(2,s.x=z,s),P<f.y?e(2,s.y=P,s):e(3,u.y=P,u)},J=({pageX:z,pageY:P})=>{e(3,u.x=z,u),P<f.y?e(2,s.y=P,s):e(3,u.y=P,u)},R=z=>{z===b0-1&&e(1,r=!0)};function K(z){te.call(this,o,z)}return o.$$set=z=>{"$$scope"in z&&e(11,n=z.$$scope)},[m,r,s,u,p,x,y,k,v,T,b,n,l,R,K]}class ke extends h0{constructor(t){super(),d0(this,t,_e,ge,u0,{})}}export{ke as component,xe as universal};
