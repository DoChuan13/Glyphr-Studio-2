var vx=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var nS=vx(ie=>{const Ux=Object.freeze(Object.defineProperty({__proto__:null,get ComponentInstance(){return Qr}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function y({tag:t="span",className:e="",id:r="",content:n="",title:a="",tabIndex:o=!1,attributes:s={},style:x=!1,innerHTML:L="",onClick:I,doc:c}={}){if(c||(c=document),!c.createElement)return console.warn("no document or createElement"),console.warn(c),new HTMLElement;const C=c.createElement(t);if(e&&C.setAttribute("class",e),r&&C.setAttribute("id",r),n&&(C.innerHTML=n),a&&C.setAttribute("title",a),o===!0?C.setAttribute("tabIndex","0"):o!==!1&&C.setAttribute("tabIndex",o),Object.keys(s).forEach(R=>C.setAttribute(R,s[R])),x&&C.setAttribute("style",x),L){const R=document.createElement("template");R.innerHTML=L,C.appendChild(R.content)}return I&&typeof I=="function"&&C.addEventListener("click",I),C}function ne(t,e=[]){Array.isArray(e)?e.forEach(r=>{Array.isArray(r)?ne(t,r):t.appendChild(r)}):t.appendChild(e)}function se(t=""){let e=y();return e.innerHTML=t,e.firstElementChild}function jn(t,e){t!=null&&t.parentNode&&e&&t.parentNode.insertBefore(e,t.nextSibling)}const wx="*{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:var(--global-transition)}:host{margin-right:8px;display:inline-block;width:max-content;min-width:40px;--fancy-gradient: linear-gradient( 135deg, var(--blue-l55), var(--purple-l45), var(--orange-l50), var(--purple-l45), var(--blue-l55), var(--purple-l45) );--fancy-animation: gradFade 120s linear infinite;--fancy-background-size: 500% 500%}@keyframes gradFade{0%{background-position:0% 0%}to{background-position:100% 100%}}:host(:active) .wrapper{top:1px;left:1px;box-shadow:none}:host([disabled]:active) .wrapper{top:0;left:0}.wrapper{display:inline-block;position:relative;top:0;left:0;margin:0;padding:2px;height:100%;width:100%;border-style:solid;border-width:0px;border-radius:5px;animation:var(--fancy-animation);box-shadow:var(--l2-shadow);background:var(--fancy-gradient);background-size:var(--fancy-background-size)}.wrapper:hover,.wrapper *:hover,.wrapper:focus,.wrapper *:focus{cursor:pointer}.wrapper:focus{outline:var(--global-focus-style)}.buttonContent{display:flex;align-items:center;padding:0;border-radius:3px;background-color:transparent;width:100%;height:100%}.buttonText{display:inline-block;width:max-content;height:max-content;margin:5px 10px;color:#fff;animation:var(--fancy-animation);background-color:transparent}.wrapper[secondary] .buttonContent{background-color:#fffffff2}.wrapper[secondary] .buttonText{background:var(--fancy-gradient);background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper:hover .buttonContent,.wrapper:active .buttonContent{background-color:#ffffff1a}.wrapper[secondary]:hover .buttonContent,.wrapper[secondary]:active .buttonContent{background-color:#fff}.wrapper[minimal]{padding:1px;box-shadow:var(--l1-shadow);background:linear-gradient(135deg,var(--blue-l85),var(--blue-l90));animation:var(--fancy-animation)}.wrapper[minimal] .buttonContent{background-color:#fffffff2}.wrapper[minimal] .buttonText{background:linear-gradient(135deg,var(--blue-l70),var(--blue-l90));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[minimal]:hover,.wrapper[minimal]:active{box-shadow:var(--l2-shadow);background:linear-gradient(135deg,var(--blue-l65),var(--blue-l70))}.wrapper[minimal]:hover .buttonContent,.wrapper[minimal]:active .buttonContent{background-color:#fff}.wrapper[minimal]:hover .buttonText,.wrapper[minimal]:active .buttonText{background:linear-gradient(135deg,var(--blue-l40),var(--blue-l70));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[danger]{background:linear-gradient(135deg,var(--orange-l50),var(--red));animation:var(--fancy-animation)}.wrapper[danger] .buttonText{background:#fff;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[secondary][danger] .buttonText{background:var(--red);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[disabled],.wrapper[disabled]:hover,.wrapper[disabled]:focus,.wrapper[disabled]:active{background-image:none;background-color:var(--disabled-border);cursor:default;box-shadow:none}.wrapper[disabled] .buttonContent,.wrapper[disabled]:hover .buttonContent,.wrapper[disabled]:focus .buttonContent,.wrapper[disabled]:active .buttonContent{background-color:var(--disabled-background);cursor:default}.wrapper[disabled] .buttonText,.wrapper[disabled]:hover .buttonText,.wrapper[disabled]:focus .buttonText,.wrapper[disabled]:active .buttonText{background-color:var(--disabled-background);background-clip:none;-webkit-text-fill-color:var(--disabled-border);color:var(--disabled-border);cursor:default}";class Yx extends HTMLElement{constructor(e={}){super(),Object.keys(e).forEach(a=>this.setAttribute(a,e[a])),this.wrapper=y({className:"wrapper"}),this.buttonContent=y({className:"buttonContent"}),this.buttonText=y({tag:"slot",className:"buttonText"}),this.hasAttribute("secondary")&&this.wrapper.setAttribute("secondary",""),this.hasAttribute("danger")&&this.wrapper.setAttribute("danger",""),this.hasAttribute("minimal")&&this.wrapper.setAttribute("minimal",""),this.hasAttribute("disabled")?(this.wrapper.setAttribute("disabled",""),this.disabled=!0):(this.wrapper.setAttribute("tabIndex","0"),this.disabled=!1);let r=this.attachShadow({mode:"open"}),n=y({tag:"style",innerHTML:wx});r.appendChild(n),this.buttonContent.appendChild(this.buttonText),this.wrapper.appendChild(this.buttonContent),r.appendChild(this.wrapper),this.disabled||this.addEventListener("keydown",this.keyPress)}static get observedAttributes(){return["disabled","secondary","danger","minimal"]}attributeChangedCallback(e,r,n){this.wrapper&&(e==="disabled"&&(n===""?this.wrapper.setAttribute("disabled",""):r===""&&this.wrapper.removeAttribute("disabled")),e==="secondary"&&(n===""?this.wrapper.setAttribute("secondary",""):r===""&&this.wrapper.removeAttribute("secondary")),e==="danger"&&(n===""?this.wrapper.setAttribute("danger",""):r===""&&this.wrapper.removeAttribute("danger")),e==="minimal"&&(n===""?this.wrapper.setAttribute("minimal",""):r===""&&this.wrapper.removeAttribute("minimal")))}keyPress(e){if(e.keyCode===13){let r=new MouseEvent("click",{shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(r),this.flashAsPressed(this)}}flashAsPressed(e){e.wrapper.style.top="1px",e.wrapper.style.left="1px",e.wrapper.style.boxShadow="none",setTimeout(function(){e.wrapper.style.top="0px",e.wrapper.style.left="0px",e.wrapper.style.boxShadow="2px 2px 2px rgba(0, 0, 0, 0.3)"},100)}}function Gr(t={}){const e=Object.keys(t);return e.length?e[0]:!1}function G1(t,e="id"){let r=1,n=""+e+r;for(;t[n];)r+=1,n=""+e+r;return n}function Ut(t){return Object.keys(t).length}function or(t){try{return structuredClone(t)}catch{const r=Array.isArray(t)?[]:{};for(const n of Object.keys(t))t[n]&&typeof t[n]=="object"&&n!=="parent"&&n!=="cache"?r[n]=or(t[n]):r[n]=t[n];return r}}function ma(t,e){if(t=or(t),e)return JSON.stringify(t);{let r=JSON.stringify(t,void 0,2);return r=r||"",r=r.replace(/\n/g,`\r
`),r=r.replaceAll(`\r
                  "`,'"'),r=r.replaceAll(`\r
                }`,"}"),r=r.replaceAll(`\r
                "`,'"'),r=r.replaceAll(`\r
              }`,"}"),r=r.replaceAll('},"','}, "'),r}}function P1(t,e){if(typeof t!="object"&&typeof e!="object")return t===e;for(const r of Object.keys(t))if(e[r]){if(typeof t[r]=="object"&&typeof e[r]=="object"){if(!P1(t[r],e[r]))return!1}else if(t[r]!==e[r])return!1}else return!1;return!0}function St(t,e,r=1){return isNaN(t.x)||isNaN(t.y)||isNaN(e.x)||isNaN(e.y)?!1:!!(t.x===e.x&&t.y===e.y||Y0(t.x,e.x,r)&&Y0(t.y,e.y,r))}function Y0(t,e,r=1){return isNaN(t)||isNaN(e)?!1:t===e||Math.abs(t-e)<=r}function gt(t,e=!1){const r=e?1:-1;return ae(t)+.5*r}function ae(t,e=0){return t&&+(Math.round(+`${t}e${e}`)+`e-${e}`)||0}function nr(t){t=He(t);const e=""+t;return(e.indexOf("0000")>-1||e.indexOf("9999")>-1)&&(t=ae(t,3)),t<1e-5&&t>0&&(t=0),t}function b1(t){return t=parseFloat(t),!(isNaN(t)||t!==Math.round(t))}function He(t=0){let e=+t;return isNaN(e)?0:e}function To(t=""){return t=String(t),t.replace(/[<>'"\\]/g,"")}function Io(t=""){if(t=String(t),t==='""'||t==="''")return"";try{return t=t.replace(/^\s+|\s+$/g,""),t.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}function pr(t="",e=""){return t=String(t),t=t.split(e).join(""),t||""}function v1(t=""){let e="";for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);n<=90&&n>=65&&(e+="-"),e+=t.charAt(r).toLowerCase()}return e}function pi(t=""){let e="";for(let r=0;r<t.length;r++)t.charAt(r)==="-"?(r++,e+=t.charAt(r).toUpperCase()):e+=t.charAt(r);return e}function U1(t=""){if(typeof t=="string"){if(t==='""'||t==="''")return"";t.indexOf("&")>-1&&(t=t.replace(/&/g,"&amp;")),t.indexOf('"')>-1&&(t=t.replace(/"/g,"&quot;")),t.indexOf("'")>-1&&(t=t.replace(/'/g,"&apos;")),t.indexOf("<")>-1&&(t=t.replace(/</g,"&lt;")),t.indexOf(">")>-1&&(t=t.replace(/>/g,"&gt;"))}return t}function Tt(t){return t===0||t===!1?!0:t==null||typeof t=="object"&&Object.keys(t).length===0?!1:!!t}function Ji(t){if(!t)return!0;for(const e of Object.keys(t))if(!Tt(t[e])||t[e]===Number.MAX_SAFE_INTEGER||t[e]===Number.MIN_SAFE_INTEGER)return!0;return!1}function Mn(t,e,r){return r.indexOf(t)===e}function ra(t=10){return new Promise(e=>{setTimeout(()=>{e("fast")},t)})}const wa=["top-left","middle-left","baseline-left","bottom-left","top-center","middle-center","baseline-center","bottom-center","top-right","middle-right","baseline-right","bottom-right"];function uo(t=0,e=0,r,n="baseline-left"){(n===!1||wa.indexOf(""+n)<0)&&(n="baseline-left"),n=""+n;let a={deltaX:0,deltaY:0};if(e!==0&&(n.includes("top")&&(a.deltaY=e*-1),n.includes("middle")&&(a.deltaY=e/-2),n.includes("baseline"))){let o=(e+r.height)/r.height,s=r.yMax*o,x=(r.yMax-s)*-1;a.deltaY=x-e}return t!==0&&(n.includes("right")&&(a.deltaX=t*-1),n.includes("center")&&(a.deltaX=t/-2)),a}function En(t,e={x:0,y:0}){let r=Math.atan2(t.y-e.y,t.x-e.x);return isNaN(r)&&(console.warn(`calculateAngle returned NaN
`+ma(t)+`

Item does not exist yet, click to create`),s==="new"&&(x=`

Item was created, but has not yet been edited`),s==="changed"&&(x=`

Item was recently edited`),this.hasAttribute("selected")&&this.wrapper.setAttribute("selected",""),this.glyph&&this.glyph.hasChangedThisSession===!0?(this.setAttribute("title",`${a}
${r}${x}`),this.thumbnail=y({tag:"span",className:"thumbnail"}),this.thumbnail.width=o,this.thumbnail.height=o):(this.setAttribute("title",`${a}
${r}${x}`),this.thumbnail=y({className:"thumbnail"}),zx(pr(r,"glyph-"))?this.thumbnail.innerHTML=`
					<div class="whitespace-char-thumbnail">white space</div>
				`:n?this.thumbnail.innerHTML=n:this.thumbnail.innerHTML=`
						<div class="whitespace-char-thumbnail">${r}</div>
					`),this.name=y({className:"name"}),n?this.name.innerHTML=r==="glyph-0x20"?"Space":n:this.name.innerHTML=a.replaceAll("Component ","comp-");const L=this.attachShadow({mode:"open"}),I=y({tag:"style",innerHTML:Xx});L.appendChild(I),this.wrapper.appendChild(this.thumbnail),this.wrapper.appendChild(this.name),L.appendChild(this.wrapper),this.redraw()}attributeChangedCallback(){const e=this.shadowRoot?this.shadowRoot.querySelector(".wrapper"):!1;e&&(this.hasAttribute("selected")?e.setAttribute("selected",""):e.removeAttribute("selected"))}redraw(){var e,r;(r=(e=this.glyph)==null?void 0:e.shapes)!=null&&r.length&&(this.thumbnail.innerHTML=this.project.makeItemThumbnail(this.glyph))}}const xt={gray:{l97:"hsl(200, 81%, 97%)",l95:"hsl(200, 81%, 94%)",l90:"hsl(200, 60%, 88%)",l85:"hsl(200, 52%, 82%)",l80:"hsl(200, 47%, 76%)",l75:"hsl(200, 42%, 71%)",l70:"hsl(200, 33%, 65%)",l65:"hsl(200, 27%, 60%)",l60:"hsl(200, 22%, 55%)",l55:"hsl(200, 18%, 50%)",l50:"hsl(200, 17%, 45%)",l45:"hsl(200, 17%, 40%)",l40:"hsl(200, 18%, 36%)",l35:"hsl(200, 18%, 31%)",l30:"hsl(200, 17%, 27%)",l25:"hsl(200, 18%, 23%)",l20:"hsl(200, 18%, 19%)",l15:"hsl(200, 17%, 15%)",l10:"hsl(200, 19%, 11%)",l05:"hsl(200, 18%, 7%)"},blue:{l95:"hsl(200, 100%, 94%)",l90:"hsl(200, 94%, 87%)",l85:"hsl(200, 100%, 80%)",l80:"hsl(200, 100%, 73%)",l75:"hsl(200, 100%, 64%)",l70:"hsl(200, 100%, 58%)",l65:"hsl(200, 100%, 49%)",l60:"hsl(200, 100%, 45%)",l55:"hsl(200, 100%, 41%)",l50:"hsl(200, 100%, 37%)",l45:"hsl(200, 100%, 33%)",l40:"hsl(200, 100%, 30%)",l35:"hsl(200, 100%, 25%)",l30:"hsl(200, 100%, 22%)",l25:"hsl(200, 100%, 19%)",l20:"hsl(200, 100%, 15%)",l15:"hsl(200, 100%, 12%)",l10:"hsl(200, 100%, 9%)",l05:"hsl(200, 100%, 6%)"},orange:{l95:"hsl(20, 100%, 95%)",l90:"hsl(20, 100%, 89%)",l85:"hsl(20, 100%, 84%)",l80:"hsl(20, 100%, 78%)",l75:"hsl(20, 100%, 72%)",l70:"hsl(20, 100%, 66%)",l65:"hsl(20, 100%, 56%)",l60:"hsl(20, 100%, 50%)",l55:"hsl(20, 100%, 46%)",l50:"hsl(20, 100%, 42%)",l45:"hsl(20, 100%, 37%)",l40:"hsl(20, 100%, 33%)",l35:"hsl(20, 100%, 29%)",l30:"hsl(20, 100%, 25%)",l25:"hsl(20, 100%, 22%)",l20:"hsl(20, 100%, 17%)",l15:"hsl(20, 100%, 14%)",l10:"hsl(20, 100%, 10%)",l05:"hsl(20, 100%, 6%)"},green:{l95:"hsl(125, 100%, 82%)",l90:"hsl(125, 97%, 74%)",l85:"hsl(125, 83%, 66%)",l80:"hsl(125, 74%, 58%)",l75:"hsl(125, 67%, 50%)",l70:"hsl(125, 82%, 43%)",l65:"hsl(125, 100%, 36%)",l60:"hsl(125, 100%, 33%)",l55:"hsl(125, 100%, 30%)",l50:"hsl(125, 100%, 27%)",l45:"hsl(125, 100%, 24%)",l40:"hsl(125, 95%, 22%)",l35:"hsl(125, 100%, 19%)",l30:"hsl(125, 100%, 16%)",l25:"hsl(125, 100%, 14%)",l20:"hsl(125, 100%, 11%)",l15:"hsl(125, 100%, 9%)",l10:"hsl(125, 100%, 6%)",l05:"hsl(125, 100%, 4%)"},purple:{l95:"hsl(285, 100%, 96%)",l90:"hsl(285, 100%, 92%)",l85:"hsl(285, 100%, 89%)",l80:"hsl(285, 100%, 85%)",l75:"hsl(285, 100%, 81%)",l70:"hsl(285, 100%, 77%)",l65:"hsl(285, 100%, 72%)",l60:"hsl(285, 100%, 66%)",l55:"hsl(285, 100%, 61%)",l50:"hsl(285, 100%, 50%)",l45:"hsl(285, 100%, 45%)",l40:"hsl(285, 100%, 40%)",l35:"hsl(285, 100%, 36%)",l30:"hsl(285, 100%, 31%)",l25:"hsl(285, 100%, 27%)",l20:"hsl(285, 100%, 22%)",l15:"hsl(285, 100%, 17%)",l10:"hsl(285, 100%, 13%)",l05:"hsl(285, 100%, 10%)"}},lA=xt.blue.l65,jr={accent:lA,offWhite:"hsl(200, 81%, 97%)",darkRed:"hsl(0, 100%, 23%)",red:"hsl(0, 100%, 48%)",lightRed:"hsl(0, 100%, 90%)",enabled:{resting:{text:"hsl(0, 0%, 5%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 75%)",fill:"hsl(0, 0%, 39%)",background:"hsl(0, 0%, 98%)"},restingLight:{text:"hsl(0, 0%, 20%)",lightText:"hsl(0, 0%, 30%)",border:"hsla(0, 0%, 75%, 0.2)",fill:"hsl(0, 0%, 39%, 0.4)",background:"hsl(0, 0%, 98%)"},focus:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:"hsl(200, 25%, 15%)",background:"white"},active:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:lA,background:"white"}},disabled:{text:"hsl(0, 0%, 40%)",border:"hsl(0, 0%, 82%)",fill:"hsl(0, 0%, 82%)",background:"hsl(0, 0%, 94%)"}};function Ya(t){const e={r:0,g:0,b:0,a:1};if(typeof t!="string")return e;if(t.charAt(0)==="#")t=t.substring(1,7),e.r=parseInt(t.substring(0,2),16),e.g=parseInt(t.substring(2,4),16),e.b=parseInt(t.substring(4,6),16);else if(t.substring(0,4)==="rgb("){let r=t.split("(")[1].split(")")[0].split(",");e.r=parseInt(r[0],10),e.g=parseInt(r[1],10),e.b=parseInt(r[2],10),e.a=parseInt(r[3],10)||1}return e}function k0(t){let e=Ya(t),r=e.r.toString(16).toUpperCase();r.length===1&&(r=`0${r}`);let n=e.g.toString(16).toUpperCase();n.length===1&&(n=`0${n}`);let a=e.b.toString(16).toUpperCase();return a.length===1&&(a=`0${a}`),`#${r}${n}${a}`}function jx(t,e,r){e=Math.max(0,Math.min(e,1));const n=Ya(t);return n.r=Math.max(0,Math.min(n.r,255)),n.g=Math.max(0,Math.min(n.g,255)),n.b=Math.max(0,Math.min(n.b,255)),r?(n.r=ae((255-n.r)*e+n.r),n.g=ae((255-n.g)*e+n.g),n.b=ae((255-n.b)*e+n.b)):(n.r=ae(n.r-n.r*e),n.g=ae(n.g-n.g*e),n.b=ae(n.b-n.b*e)),`rgb(${n.r},${n.g},${n.b})`}function gr(t,e){const r=Ya(t),n=ae((255-r.r)*(1-e)),a=ae((255-r.g)*(1-e)),o=ae((255-r.b)*(1-e)),s=r.r+n,x=r.g+a,L=r.b+o;return`rgb(${s},${x},${L})`}function un(t){const e=parseInt(t);return!e||isNaN(e)?1:e>100?0:e<0?1:(100-e)/100}function q1(){const t=Math.floor(Math.random()*5)*51,e=[],r=Math.floor(Math.random()*3);switch(e[r]=t,r){case 0:e[1]=0,e[2]=255;break;case 1:e[0]=0,e[2]=255;break;case 2:e[0]=255,e[1]=0;break}return"rgb("+e[0]+","+e[1]+","+e[2]+")"}const qx=Object.freeze(Object.defineProperty({__proto__:null,accentColors:xt,getColorFromRGBA:gr,makeRandomSaturatedColor:q1,parseColorString:Ya,rgbToHex:k0,shiftColor:jx,transparencyToAlpha:un,uiColors:jr},Symbol.toStringTag,{value:"Module"}));let ze={};function pn(t){let e=20;t.name&&t.name.indexOf("page_")===0&&(e=24),t.name&&t.name.indexOf("panel_")===0&&(e=24);let r=t.color||"rgb(76,81,86)",n="";return ze[t.name]&&(ze[t.name].outline?n=ze[t.name].outline:n=ze[t.name]),`
		<svg version="1.1"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px" width="${e}px" height="${e}px" viewBox="0 0 ${e} ${e}"
		>
			<defs></defs>
			<rect fill="transparent" width="${e}" height="${e}"/>
			<g pointer-events="none" fill="${r}">
				${n}
			</g>
		</svg>
	`}ze.panel_layers=`
	<polygon points="12 9 0 4.574 12 0 24 4.5 12 9"/>
	<polygon points="12 14 0 9.5 4 8 12 11 20 8 24 9.5 12 14"/>
	<polygon points="12 19 0 14.5 4 13 12 16 20 13 24 14.5 12 19"/>
	<polygon points="12 24 0 19.5 4 18 12 21 20 18 24 19.5 12 24"/>
`;ze.panel_guides=`
	<polygon points="2 17 5 20 5 17 2 17"/>
	<polygon points="24 22 0 22 0 23 24 23 24 22 24 22"/>
	<polygon points="24 7 0 7 0 8 24 8 24 7 24 7"/>
	<polygon points="24 3 0 3 0 3.5 24 3.5 24 3 24 3"/>
	<polygon points="24 1 0 1 0 2 24 2 24 1 24 1"/>
	<polygon points="24 15 0 15 0 17 24 17 24 15 24 15"/>
	<polygon points="7 0 5 0 5 24 7 24 7 0 7 0"/>
	<polygon points="22.5 0 22 0 22 24 22.5 24 22.5 0 22.5 0"/>
`;ze.panel_contextCharacters=`
	<path d="m8.942,16.997h-2.672v-.55c-.412.432-.882.647-1.407.647-.53,0-.973-.213-1.329-.64s-.534-.966-.534-1.621c0-.668.193-1.221.578-1.661s.875-.66,1.469-.66c.412,0,.82.141,1.224.424v-.737c0-.375-.047-.641-.139-.796s-.259-.233-.5-.233c-.322,0-.544.181-.666.542l-1.829-.383c.539-1.006,1.455-1.508,2.747-1.508.752,0,1.344.179,1.775.535s.646.879.646,1.569v3.57h.639v1.502Zm-2.672-1.801v-1.052c-.172-.216-.367-.324-.585-.324-.2,0-.358.083-.476.252-.118.168-.177.392-.177.669,0,.272.055.482.167.63s.264.221.459.221c.24,0,.444-.132.612-.397Z"/>
	<path d="m9.547,16.997v-1.502h.666v-6.995h-.666v-1.502h2.699v3.651h.027c.299-.496.727-.745,1.285-.745.594,0,1.068.292,1.424.876s.534,1.432.534,2.545c0,1.214-.171,2.146-.513,2.795s-.828.973-1.458.973c-.499,0-.931-.218-1.299-.657v.559h-2.699Zm2.699-3.987v1.416c0,.394.042.686.126.878.084.191.232.288.445.288.249,0,.409-.147.479-.441s.105-.843.105-1.648c0-.726-.04-1.23-.119-1.509-.079-.28-.239-.42-.479-.42-.213,0-.359.109-.439.326s-.119.587-.119,1.11Z"/>
	<path d="m19.429,14.229l1.571.598c-.258,1.581-1.079,2.371-2.461,2.371-.834,0-1.49-.334-1.968-1.001s-.717-1.587-.717-2.76c0-1.057.207-1.909.622-2.559s.958-.973,1.628-.973c.644,0,1.077.29,1.299.869h.027v-.757h1.462v2.823h-1.462c-.032-.505-.11-.878-.235-1.12-.125-.241-.312-.362-.561-.362-.263,0-.44.159-.53.476s-.136.85-.136,1.6c0,.819.044,1.401.133,1.746s.296.517.622.517c.227,0,.392-.118.496-.354s.174-.608.211-1.113Z"/>
	<path d="m18,4v-1h4v-1h-5v2h-1V0h-8v4h-1v-2H2v1h4v1H0v16h6v1H2v1h5v-2h1v4h8v-4h1v2h5v-1h-4v-1h6V4h-6ZM9,1h6v3h-6V1Zm6,22h-6v-3h6v3Zm7-5H2V6h20v12Z"/>
`;ze.panel_history=`
	<path d="m19.075,18.133l-.021.022c-.181.185-.478.189-.663.008l-5.229-5.102c-.185-.181.491-.874.676-.693l5.229,5.102c.185.181.189.478.008.663Z"/>
	<path d="m16.1,9.358l.022.021c.185.181.189.478.008.663l-2.291,2.348c-.181.185-.874-.491-.693-.676l2.291-2.348c.181-.185.478-.189.663-.008Z"/>
	<circle cx="13.165" cy="12.387" r="1.033"/>
	<path d="m19.551,5.842c.149.145.282.3.418.452l1.747-1.747c-.146-.159-.283-.322-.439-.475-2.259-2.204-5.187-3.302-8.112-3.302-3.021,0-6.039,1.171-8.315,3.504-2.196,2.251-3.287,5.166-3.295,8.08h2.475c.008-2.294.865-4.587,2.589-6.354,1.736-1.779,4.06-2.758,6.546-2.758,2.4,0,4.667.923,6.386,2.6Z"/>
	<path d="m1.608,11.33H.2l2.609,4.174,2.609-4.174h-1.166c-.954-.008-1.986-.008-2.644,0Z"/>
	<path d="m21.916,6.021l-.736.736c1.133,1.605,1.769,3.503,1.794,5.509.032,2.62-.958,5.096-2.788,6.971-1.862,1.908-4.355,2.959-7.022,2.959-2.574,0-5.007-.99-6.85-2.788-1.066-1.041-1.855-2.286-2.353-3.645l-.677,1.084c.541,1.201,1.309,2.324,2.309,3.3,2.108,2.057,4.841,3.082,7.571,3.082,2.819,0,5.636-1.093,7.761-3.27,3.747-3.841,4.05-9.742.991-13.938Z"/>
`;ze.panel_attributes=`
	<polygon points="12 10 0 10 0 11 12 11 12 10 12 10"/>
	<polygon points="12 12 0 12 0 13 12 13 12 12 12 12"/>
	<polygon points="12 14 0 14 0 15 12 15 12 14 12 14"/>
	<polygon points="24 2 12 2 12 3 24 3 24 2 24 2"/>
	<polygon points="24 4 12 4 12 5 24 5 24 4 24 4"/>
	<polygon points="24 6 12 6 12 7 24 7 24 6 24 6"/>
	<path d="m14,10v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1v-5c0-.552-.448-1-1-1h-8c-.552,0-1,.448-1,1Zm1,4l2-3,2,3h-4Zm6,0l-2-3h4l-2,3Z"/>
	<polygon points="12 18 0 18 0 19 12 19 12 18 12 18"/>
	<polygon points="12 20 0 20 0 21 12 21 12 20 12 20"/>
	<polygon points="12 22 0 22 0 23 12 23 12 22 12 22"/>
	<path d="m14,18v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1v-5c0-.552-.448-1-1-1h-8c-.552,0-1,.448-1,1Zm1,4l2-3,2,3h-4Zm6,0l-2-3h4l-2,3Z"/>
	<path d="m9,1H1c-.552,0-1,.448-1,1v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1V2c0-.552-.448-1-1-1Zm-4.5,5.5l-2.5-2.5,1-1,1.5,1.5,2.5-2.5,1,1-3.5,3.5Z"/>
`;ze.panel_view=`
	<circle cx="12" cy="13" r="4"/>
	<path d="m24,13h-2v-1c0-3.237-4.368-7-10-7S2,8.763,2,12v1H0v-1C0,7.29,5.72,3,12,3s12,4.29,12,9v1Z"/>
`;ze.command_save=`
	<path d="M0,0V17.22l2.78,2.78H20V0H0ZM5,1H15V10H5V1Zm2,18v-3h1v3h-1Zm2,0v-3h5v3h-5ZM19,3h-1v1h1v15h-4v-4H6v4H3.5l-2.5-2.5V1h3V11h12V1h3V3Z"/>
`;ze.command_export=`
	<polygon points="10 19.06 10 5.06 15.25 10.31 16 9.56 9.5 3.06 3 9.56 3.75 10.31 9 5.06 9 19.06 10 19.06"/>
	<rect width="19" height="1"/>
`;ze.command_newTab=`
	<polygon points="10.35 10.35 18.94 1.77 18.94 9 20 9 20 0 11 0 11 1.06 18.23 1.06 9.65 9.65 10.35 10.35"/>
	<polygon points="15 10 14.98 19 1 19 1 5 10 5 11 4 0 4 0 20 15.98 20 16 9 15 10"/>
`;ze.command_info=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M9.28,14.06v-4.76h-1.13v-1.28h2.57v6.04h1.13v1.28h-3.7v-1.28h1.13Zm-.2-8.53c0-.23,.08-.43,.25-.6s.37-.26,.62-.26c.24,0,.44,.08,.61,.25s.26,.37,.26,.61-.09,.45-.26,.62c-.17,.17-.38,.25-.61,.25s-.45-.09-.62-.26-.25-.37-.25-.61Z"/>
`;ze.command_help=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M10.06,12.65h-.82l-.19-3.53c.25,.06,.5,.1,.75,.1,.7,0,1.2-.18,1.5-.53s.46-.77,.46-1.25c0-.56-.17-1-.5-1.31-.33-.31-.75-.47-1.27-.47-.62,0-1.08,.18-1.39,.53s-.45,.8-.45,1.33c0,.11,0,.24,0,.39h-1.49c0-.14,0-.27,0-.37,0-1.09,.32-1.9,.97-2.41s1.42-.77,2.31-.77c1.08,0,1.91,.29,2.5,.87,.59,.58,.89,1.34,.89,2.28s-.28,1.64-.84,2.18-1.22,.81-1.98,.81c-.06,0-.14,0-.25,0l-.2,2.16Zm-1.41,2.99v-1.96h1.96v1.96h-1.96Z"/>
`;ze.command_autoFit=`
	<polygon points="6 9 3 9 4.75 7.25 4 6.5 1 9.5 4.25 12.25 5 11.5 3 10 6 10 6 9"/>
	<polygon points="14 9 17 9 15.25 7.25 16 6.5 19 9.5 15.75 12.25 15 11.5 17 10 14 10 14 9"/>
	<rect y="4" width="1" height="11"/>
	<rect x="19" y="4" width="1" height="11"/>
	<rect x="12" y="9" width="1" height="1"/>
	<rect x="7" y="9" width="1" height="1"/>
	<rect x="9" y="9" width="2" height="1"/>
`;ze.command_verticalBar='<rect x="9" y="0" width="2" height="18"/>';ze.command_horizontalBar='<rect y="9" x="1" height="2" width="19"/>';ze.command_crossProjectActions=`
  <path d="m18.916,7.084c-.962-.962-2.426-1.07-4.92-1.082-.013-2.48-.121-3.959-1.08-4.918-1.084-1.084-2.8-1.084-5.916-1.084S2.168,0,1.084,1.084,0,3.884,0,7s0,4.832,1.084,5.916c.959.959,2.437,1.068,4.918,1.081.012,2.493.12,3.958,1.082,4.919,1.084,1.084,2.8,1.084,5.916,1.084s4.832,0,5.916-1.084,1.084-2.8,1.084-5.916,0-4.832-1.084-5.916Zm-17.916-.084c0-2.849,0-4.418.791-5.209s2.36-.791,5.209-.791,4.418,0,5.209.791c.691.691.777,1.996.788,4.209-2.356,0-3.91.002-4.997.472v-.472h-2v2h.472c-.47,1.087-.472,2.641-.472,4.997-2.211-.011-3.518-.097-4.209-.788-.791-.791-.791-2.36-.791-5.209Zm17.209,11.209c-.791.791-2.36.791-5.209.791s-4.418,0-5.209-.791-.791-2.36-.791-5.209,0-4.418.791-5.209,2.36-.791,5.209-.791,4.418,0,5.209.791.791,2.36.791,5.209,0,4.418-.791,5.209Z"/>
  <rect x="9" y="9" width="2" height="2"/>
  <rect x="12" y="9" width="2" height="2"/>
  <rect x="9" y="12" width="2" height="2"/>
  <rect x="9" y="15" width="2" height="2"/>
  <rect x="12" y="12" width="2" height="2"/>
  <rect x="15" y="9" width="2" height="2"/>
  <rect x="3" y="3" width="2" height="2"/>
  <rect x="6" y="3" width="2" height="2"/>
  <rect x="3" y="6" width="2" height="2"/>
  <rect x="3" y="9" width="2" height="2"/>
  <rect x="9" y="3" width="2" height="2"/>
`;ze.page_about=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m11,17v-6h-2v-2h4v8h2v2s-6,0-6,0v-2h2Zm-.95-11.258c0-.468.165-.877.495-1.223s.748-.52,1.255-.52c.477,0,.888.168,1.233.504s.517.749.517,1.238-.173.905-.517,1.244c-.345.342-.756.514-1.233.514-.487,0-.9-.174-1.24-.52s-.51-.758-.51-1.238Z"/>
`;ze.page_help=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m12.398,16h-2v-4.5c2,0,4.202-.5,4.202-3,0-1.5-.6-2.5-2.202-2.5-2,0-2.398,1.3-2.398,2v1h-2v-1c0-1,.398-4,4.398-4,2.602,0,4.602,1.5,4.602,4.5s-2.602,4.5-4.102,4.5l-.5,3Z"/>
	<rect x="10" y="17" width="3" height="3" rx=".75" ry=".75"/>
`;ze.page_exportFont=`
	<polygon points="30.1,9.9 40.1,0 50,9.9 42.5,9.9 42.5,18.8 37.6,18.8 37.6,9.9"/>
	<path d="M15.2,12.7l-9.9,9.9V50h29.8V12.7H15.2z M26.7,29.1h-1.9l0.7-2.9H20L18.8,31h4.7l-0.4,1.8h-4.7l-1.3,5.4h1.7l-0.4,1.8H13l0.4-1.8h1.4l2.9-12h-1.5l0.4-1.8h11.3L26.7,29.1z"/>
`;ze.page_exportSVG=`
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m17.026,6H7v18h15v-12.75l-4.974-5.25Zm-5.835,11.758c-.272.247-.613.371-1.022.371-.359,0-.684-.115-.976-.344v.303h-.949v-1.575h.949c0,.369.051.608.154.718.103.11.238.165.406.165.15,0,.267-.043.351-.128.084-.084.126-.202.126-.353,0-.12-.048-.247-.143-.38-.095-.131-.332-.334-.711-.604-.511-.361-.836-.657-.978-.889-.141-.232-.212-.46-.212-.684,0-.339.124-.617.371-.834.247-.217.561-.326.94-.326.188,0,.353.022.494.065.141.045.309.137.503.279v-.303h.949v1.463h-.949c0-.308-.047-.515-.141-.62s-.228-.158-.402-.158c-.127,0-.227.033-.302.098-.075.065-.113.153-.113.262,0,.135.044.253.131.354.088.101.26.236.519.405.582.383.962.702,1.142.959.18.256.269.53.269.823,0,.375-.136.687-.408.934Zm5.908-3.793h-.437l-1.455,4.201h-1.213l-1.402-4.201h-.455v-.725h2.318v.725h-.464l.727,2.313.719-2.313h-.536v-.725h2.198v.725Zm3.308,3.02c-.062.274-.163.51-.304.706s-.313.341-.514.436-.43.142-.685.142c-.526,0-.941-.217-1.244-.65-.303-.435-.455-1.054-.455-1.857,0-.812.123-1.441.369-1.889.246-.448.591-.672,1.036-.672.299,0,.554.146.766.441h.014v-.366h.783v1.675h-.783c-.007-.31-.054-.542-.142-.695-.088-.154-.205-.23-.35-.23-.176,0-.288.101-.337.303-.049.201-.073.633-.073,1.295,0,.524.012.914.036,1.168.024.255.065.427.125.519.059.091.147.137.263.137.278,0,.42-.272.427-.817h-.328v-.734h1.49c0,.453-.031.817-.092,1.092Z"/>
`;ze.page_importAndExport=`
	<polygon points="17 20 20 24 23 20 21 20 21 17 19 17 19 20 17 20"/>
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m13.684,6h-6.684v12h10v-8.5l-3.316-3.5Zm1.316,9h-5v-1h5v1Zm0-2h-5v-1h5v1Zm0-2h-7v-1h7v1Z"/>
`;ze.page_settings=`
	<path d="m23.404,15.538c.366-1.11.572-2.291.596-3.518l-3.267-1.344c-.041-.326-.101-.645-.176-.959l2.601-2.372c-.448-1.126-1.057-2.169-1.806-3.098l-3.375,1.073c-.227-.21-.465-.408-.714-.594l.47-3.506c-1.043-.567-2.18-.982-3.381-1.221l-1.897,2.993c-.152-.008-.301-.023-.455-.023s-.303.015-.455.023l-1.897-2.993c-1.201.238-2.338.653-3.381,1.221l.47,3.506c-.249.186-.487.384-.714.594l-3.375-1.073c-.749.929-1.358,1.972-1.806,3.098l2.601,2.372c-.075.314-.135.633-.176.959l-3.267,1.344c.024,1.227.23,2.408.596,3.518l3.516.145c.153.308.319.607.505.893l-1.634,3.121c.785.893,1.699,1.665,2.715,2.294l2.777-2.142c.323.141.656.264.998.366l.752,3.43c.58.086,1.17.145,1.774.145s1.194-.059,1.774-.145l.752-3.43c.342-.102.675-.225.998-.366l2.777,2.142c1.016-.628,1.93-1.401,2.715-2.294l-1.634-3.121c.186-.286.353-.585.505-.893l3.516-.145Zm-11.404,1.284c-2.761,0-5-2.239-5-5s2.239-5,5-5,5,2.239,5,5-2.239,5-5,5Z"/>
`;ze.page_globalActions=`
	<path d="m22.198,17.785l-3.6-3.6c1.293-1.339,2.093-3.157,2.093-5.166,0-1.751-.609-3.358-1.621-4.629-.016.554-.129,1.161-.344,1.811-.555,1.67-1.718,3.448-3.277,5.006-2.205,2.205-4.81,3.581-6.833,3.625,1.272,1.016,2.882,1.627,4.636,1.627,1.923,0,3.669-.735,4.989-1.932l1.582,1.582c-3.828,3.509-9.79,3.421-13.497-.287-3.707-3.707-3.795-9.669-.287-13.497l1.705,1.705c-1.197,1.32-1.932,3.067-1.932,4.989,0,1.739.601,3.334,1.6,4.601,1.567.793,4.737-.5,7.343-3.106,1.453-1.453,2.532-3.095,3.04-4.622.377-1.137.382-2.067.055-2.715-1.266-.998-2.861-1.598-4.598-1.598-2.008,0-3.827.799-5.166,2.093L4.485.072c-.097-.097-.253-.097-.35,0s-.097.253,0,.35l.855.855c-4.085,4.406-3.998,11.309.287,15.593,1.774,1.774,4,2.818,6.31,3.157v1.583c-2.439.05-4.32.347-4.32.71v.96c0,.398,2.257.72,5.04.72s5.04-.322,5.04-.72v-.96c0-.362-1.881-.659-4.32-.71v-1.46c.068.001.136.01.205.01,2.747,0,5.487-1.009,7.638-3.003l.978.978c.048.048.112.073.175.073s.127-.024.175-.073c.097-.097.097-.253,0-.35Z"/>
`;ze.page_livePreview=`
	<rect x="20" y="5" width="1" height="15"/>
	<rect x="17" y="3.98" width="3" height="1"/>
	<rect x="21" y="4" width="3" height="1"/>
	<rect x="17" y="19.98" width="3" height="1"/>
	<rect x="21" y="20" width="3" height="1"/>
	<path d="m0,16v-2s2,0,2,0v-6H0v-2h6v2h-2v6h3v-2h2v4S0,16,0,16Z"/>
	<path d="m14,18v2h-4v-2h1v-7h-1v-2h3v.879c.618-.654,1.308-.981,2.069-.981.92,0,1.644.365,2.173,1.096s.794,1.582.794,2.554c0,1.03-.273,1.882-.819,2.558-.546.675-1.274,1.013-2.184,1.013-.742,0-1.42-.29-2.033-.869v2.751s1,0,1,0Zm1.759-5.495c0-.608-.126-1.063-.377-1.365s-.583-.453-.995-.453c-.417,0-.756.154-1.017.463s-.392.77-.392,1.383c0,.551.129.994.388,1.329s.603.503,1.035.503c.398,0,.723-.151.977-.453s.381-.771.381-1.408Z"/>
`;ze.page_kerning=`
	<path d="m16.697,18l-4.164-10.513h-1.534v-1.487h4.892v1.487h-1.432l3.156,7.976,3.072-7.976h-1.446v-1.487h4.758v1.487h-1.505l-4.078,10.513h-1.72Z"/>
	<path d="m11.616,16.5l-3.41-9h1.495v-1.5H3.379v1.5h1.445l-3.327,9H0v1.5h4.873v-1.5h-1.503l.946-2.714h4.456l.92,2.714h-1.538v1.5h4.846v-1.5h-1.384Zm-6.839-4.12l1.667-4.88h.26l1.602,4.88h-3.529Z"/>
	<rect x="11" y="2" width="13" height="1"/>
	<rect x="11" width="1" height="5"/>
	<rect y="21" width="13" height="1"/>
	<rect x="12" y="19" width="1" height="5"/>
`;ze.page_ligatures=`
	<path id="b" data-name="ligatures" d="m21,21v-13s-8,0-8,0c-.002-.479,0-1.249,0-2.083s.2-2.917,2.2-2.917c.642,0,2.572,0,2.572,1.423,0,.899.943,1.524,1.826,1.402.891-.116,1.402-.825,1.402-1.825,0-2-2.376-4-5-4-1.75,0-2.704.202-3.87,1.194-.541.461-1.147,1.187-1.525,2.294-.723-1.025-1.865-1.545-3.438-1.545-3.166,0-4.206,2.057-4.206,5.196v.861l-2.96-.035v3.035h3v10H0v3h24v-3h-3ZM6,7.142c0-1.076,0-2.596,1.383-2.596.701,0,1.107.518,1.218,1.553l1.634-.251v2.152h-4.236v-.858Zm0,13.858v-10h4v10h-4Zm7,0v-10h5v10h-5Z"/>
`;ze.page_components=`
	<path d="m9.831,15.308c-.899-.912-2.012-1.368-3.338-1.368-1.38,0-2.544.544-3.493,1.632v-5.572H0v1.986l1,.014v10H0v2h3.028l-.028-1.602c.279.405.736.773,1.373,1.104.637.332,1.34.497,2.109.497,1.373,0,2.499-.489,3.378-1.468.879-.978,1.318-2.184,1.318-3.617,0-1.493-.449-2.695-1.348-3.607Zm-.531,3.75c0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088,0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.288-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088Z"/>
	<path d="m12.821,18.915c0,1.433.439,2.638,1.318,3.617.879.978,2.005,1.468,3.378,1.468.77,0,1.473-.166,2.109-.497.637-.332,1.094-.7,1.373-1.104l-.028,1.602h3.028s0-2,0-2h-1v-10l1-.014v-1.986s-3,0-3,0v5.572c-.949-1.088-2.113-1.632-3.493-1.632-1.327,0-2.439.456-3.338,1.368-.899.912-1.348,2.114-1.348,3.607Zm1.886.055c0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.289-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088,0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088Z"/>
	<path d="m15,3.131c0-.992-.297-1.762-.89-2.31-.593-.548-1.288-.822-2.086-.822-.008,0-.016.002-.024.002-.008,0-.016-.002-.024-.002-.797,0-1.493.274-2.086.822-.593.548-.89,1.318-.89,2.31,0,.031.006.057.007.087,0,.031-.007.057-.007.088,0,.979.3,1.755.9,2.329.6.574,1.292.861,2.076.861.008,0,.016-.002.024-.002.008,0,.016.002.024.002.784,0,1.477-.287,2.076-.861.6-.574.9-1.35.9-2.329,0-.031-.006-.057-.007-.088,0-.03.007-.057.007-.087Z"/>
	<path d="m15.001,13.5c-.17,0-.335-.087-.429-.243l-2.571-4.285-2.571,4.285c-.142.236-.45.314-.686.172-.237-.142-.313-.449-.171-.686l3.429-5.715,3.429,5.715c.142.236.065.544-.171.686-.081.049-.169.071-.257.071Z"/>
`;ze.page_characters=`
	<path d="m13.548,0h2.452v6l-2.452.004c-.785-2.073-2.148-3.002-4.088-3.002-1.602,0-2.814.466-3.634,1.557s-1.231,2.399-1.231,3.923c0,1.594.434,2.884,1.302,3.87s1.973,1.479,3.316,1.479c1.1,0,3.795-.823,4.796-3.825l2.992,1.001c-1.225,3.805-3.923,5.84-8.094,5.84-2.945,0-5.166-.793-6.662-2.38S0,10.874,0,8.447c0-1.728.389-3.24,1.166-4.536S2.99,1.64,4.306.984s2.759-.984,4.33-.984c1.956,0,3.593.511,4.913,1.532V0Z"/>
	<polygon points="21 21 21 20.5 22 20.5 22 20 23 20 23 17 23 16.5 22.5 16.5 22.5 16 22 16 22 15.5 21.5 15.5 21.5 15 21 15 21 14.5 20.5 14.5 20.5 14 20 14 20 13.5 19.5 13.5 19.5 13 19 13 19 12.5 18.5 12.5 18.5 12 18 12 18 11.5 17.5 11.5 17.5 11 17 11 17 12 17.5 12 17.5 13 18 13 18 14 18.5 14 18.5 15 19 15 19 16 19.5 16 20 16 20 16.5 20.5 16.5 20.5 17.5 20 17.5 20 18 19.5 18 19 18 19 17.5 18.5 17.5 18.5 16.5 19 16.5 19 16 18.5 16 18.5 15 18 15 18 14 17.5 14 17.5 13 17 13 17 19 17 19.5 17.5 19.5 17.5 20 18 20 18 20.5 18.5 20.5 18.5 21 19 21 19 21.5 19.5 21.5 20 21.5 20 21 21 21"/>
	<polygon points="24 22 24 21 23.5 21 23.5 20 23 20 23 20.5 22 20.5 22 21 21 21 21 21.5 20 21.5 20 22 20 22.5 20.5 22.5 20.5 23.5 21.5 23.5 21.5 23 22.5 23 22.5 22.5 23.5 22.5 23.5 22 24 22"/>
`;ze.page_overview=`
	<path d="m7,9.646v1.362h-2.161v-.951c-.701.72-1.483,1.08-2.347,1.08-.671,0-1.254-.231-1.749-.693S0,9.39,0,8.671C0,7.946.263,7.344.789,6.866s1.16-.717,1.901-.717c.691,0,1.359.22,2.004.661v-.773c0-.397-.036-.704-.107-.918s-.238-.408-.499-.58-.603-.258-1.025-.258c-.726,0-1.252.306-1.577.918l-1.387-.387c.615-1.214,1.677-1.821,3.185-1.821.554,0,1.033.079,1.436.238s.705.363.903.612.331.52.4.81.103.752.103,1.386v3.609h.873Zm-2.306-1.539c-.625-.516-1.257-.773-1.898-.773-.401,0-.737.124-1.006.371s-.404.567-.404.959c0,.365.118.671.354.918s.558.371.964.371c.701,0,1.364-.312,1.989-.935v-.91Z"/>
	<path d="m8,11.007v-1.362h.925V1.362h-.925V0h2.343v4.312c.726-.881,1.618-1.321,2.675-1.321,1.016,0,1.868.369,2.557,1.108s1.033,1.712,1.033,2.921c0,1.16-.337,2.136-1.01,2.929s-1.536,1.188-2.587,1.188c-.589,0-1.128-.134-1.616-.403s-.838-.567-1.052-.894v1.168h-2.343Zm2.388-3.883c0,.811.235,1.454.705,1.93s1.012.713,1.627.713c.645,0,1.201-.252,1.669-.757s.701-1.182.701-2.03c0-.822-.232-1.46-.697-1.914s-1.01-.681-1.635-.681c-.615,0-1.163.235-1.646.705s-.724,1.148-.724,2.034Z"/>
	<path d="m24,3v3s-1.25,0-1.25,0c-.064-.564-.393-.999-.75-1.3s-.884-.294-1.356-.294c-.629,0-1.141.243-1.534.729s-.59,1.124-.59,1.914c0,.736.187,1.384.561,1.946s.915.842,1.623.842c.983,0,1.697-.51,2.139-1.531l1.158.596c-.639,1.552-1.758,2.328-3.356,2.328-1.131,0-2.021-.422-2.67-1.265s-.974-1.815-.974-2.917c0-1.176.354-2.147,1.062-2.913s1.524-1.148,2.449-1.148c.792,0,1.693.255,2.239.765v-.753h1.25Z"/>
	<path d="m4.047,17.842l-1.444,1.806h.941v1.406H0v-1.406h1.076l2.196-2.731-2.098-2.511H.189v-1.406h3.43v1.406h-.91l1.314,1.578,1.269-1.578h-.744v-1.406h3.452v1.406h-1.205l-2.002,2.503,2.281,2.739h.925v1.406h-3.452v-1.406h1.008l-1.51-1.806Z"/>
	<path d="m12.492,20.2l-2.503-5.798h-.989v-1.402h3.492v1.402h-.913l1.645,4.198,1.613-4.198h-1.007v-1.402h3.17v1.402h-.613l-3.883,9.598h-2.498v-1.5h1.593l.892-2.3Z"/>
	<path d="m18,21.054v-1.315l4.37-5.433h-3.12v.694h-1.25v-2h6v1.406l-4.387,5.333h3.191v-.74h1.196v2.054h-6Z"/>
`;function Qx(t="baseline-left"){let e=xt.gray.l25,r=xt.blue.l70,n=0;t.includes("center")&&(n=7),t.includes("right")&&(n=14);let a=0;return t.includes("middle")&&(a=8),t.includes("baseline")&&(a=11),t.includes("bottom")&&(a=15),`
	<svg version="1.1"
	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20">
	<defs></defs>
	<rect fill="transparent" width="20" height="20"/>
	<g pointer-events="none" width="20" height="20">
			<path d="m2,2v16h15V2H2Zm14,15H3v-3h13v3Zm0-4H3V3h13v10Z"/>
			<rect x="${n}" y="${a}" width="5" height="5" style="fill: ${e};"/>
			<rect x="${n+1}" y="${a+1}" width="3" height="3" style="fill: ${r};"/>
		</g>
	</svg>
	`}ze.back='<polygon points="37,23 20,23 25,18 22,15 12,25 22,35 25,32 20,27 37,27"/>';ze.more='<polygon points="0,0 0,10 5,5"/>';ze.selected='<polygon points="6,6 6,14 14,10"/>';ze.notSelected='<rect x="5" y="9.75" width="10" height="0.5"/>';ze.keyboard=`
	<rect x="12" y="29" width="26" height="7"/>
	<rect y="29" width="10" height="7"/>
	<rect y="21" width="8" height="6"/>
	<rect x="10" y="21" width="6" height="6"/>
	<rect x="18" y="21" width="6" height="6"/>
	<rect x="26" y="21" width="6" height="6"/>
	<rect x="34" y="21" width="6" height="6"/>
	<rect x="42" y="21" width="8" height="6"/>
	<rect x="6" y="13" width="6" height="6"/>
	<rect x="14" y="13" width="6" height="6"/>
	<rect x="22" y="13" width="6" height="6"/>
	<rect x="38" y="13" width="6" height="6"/>
	<rect x="30" y="13" width="6" height="6"/>
	<rect x="46" y="13" width="4" height="6"/>
	<rect y="13" width="4" height="6"/>
	<rect x="40" y="29" width="10" height="7"/>
`;function Wa(t,e="",r=[],n=!1){let a=`current${t.objType}`;a==="currentControlPoint"&&(a=`currentPathPoint.${t.type}`);let o=[a].concat(r);e&&(e+=":&ensp;");let s=y({tag:"label",innerHTML:`${e}x${ka()}y`}),x=y({tag:"div",className:"doubleInput"}),L=bt(t,"x",o,"input-number"),I=bt(t,"y",o,"input-number");return n&&(L.setAttribute("disabled",""),I.setAttribute("disabled","")),x.appendChild(L),x.appendChild(Ka()),x.appendChild(I),[s,x]}function So(t,e=!1){let r=[],n=`current${t.objType}`,a=Ue(`width${ka()}height`),o=y({tag:"div",className:"doubleInput"}),s=bt(t,"width",n,"input-number"),x=bt(t,"height",n,"input-number");if(e&&(s.setAttribute("disabled",""),x.setAttribute("disabled","")),o.appendChild(s),o.appendChild(Ka()),o.appendChild(x),r.push(a),r.push(o),!e){let L=["top-left","baseline-left","bottom-left","top-right","baseline-right","bottom-right","middle-center"];L=wa;let I=Ue("transform origin",`With increases or decreases to width or height,
		the transform origin is the point that stays fixed.
		<br><br>
		This only takes effect when directly entering values
		into the width or height inputs.`),c=y({tag:"option-chooser",attributes:{"selected-id":t.transformOrigin,"selected-name":t.transformOrigin.replace("-"," ")}});L.forEach(g=>{let Y=y({tag:"option",attributes:{"selection-id":g},innerHTML:`${Qx(g)}${g.replace("-"," ")}`});Y.addEventListener("click",()=>{t.transformOrigin=g,J().publish("editCanvasView",t)}),c.appendChild(Y)});let C=Ue("lock aspect ratio",`
			When either the width or height is adjusted,
			the overall size will be kept proportional.
			<br><br>
			Maintaining aspect ratio will override value
			locks if need be.
		`),R=Hn(t,"ratioLock",n);r.push(I),r.push(c),r.push(C),r.push(R)}return r}function bt(t,e,r,n,a=[]){let o=Array.isArray(r)?r:[r],s=y({tag:n,className:`singleInput-${e}`,attributes:{"pubsub-topic":o[0]}}),x=n==="input"?t[e]:ae(t[e],3);s.setAttribute("value",x),t.isLockable&&(s.setAttribute("is-locked",t.isLocked(e)),s.addEventListener("lock",I=>{I.detail.isLocked?t.lock(e):t.unlock(e);const c=J();o.forEach(C=>c.publish(C,t))}));function L(I){if(t.isLockable&&t.isLocked(e))return;let c=I.target.value;const C=J();if(e==="leftSideBearing"){let R=C.view;C.view.dx-=(c-t.leftSideBearing)*R.dz,C.publish("editCanvasView",t)}if((t.objType==="Glyph"||t.objType==="VirtualGlyph"||t.objType==="Path")&&(e==="width"||e==="height")){let R={width:!1,height:!1};R.ratioLock=t.ratioLock,R.transformOrigin=t.transformOrigin,e==="width"?R.width=c:R.height=c,t.objType==="Path"?t.setShapeSize(R):t.setGlyphSize(R)}else t[e]=c;t.objType==="VirtualGlyph"?o.forEach(R=>C.publish(R,C.selectedItem)):t.objType==="VirtualShape"?o.forEach(R=>C.publish(R,C.selectedItem)):o.forEach(R=>C.publish(R,t))}return s.addEventListener("change",L),a&&a.forEach(I=>{s.addEventListener(I,L)}),J().subscribe({topic:o,subscriberID:`attributesPanel.${o[0]}.${e}`,callback:I=>{if(I&&(I[e]||I[e]===0)){let c;n==="input"?c=I[e]:c=ae(I[e],3),s.value=c,s.setAttribute("value",c)}}}),s}function Hn(t,e,r){let n=y({tag:"input",attributes:{type:"checkbox"}});return t[e]&&n.setAttribute("checked",""),n.addEventListener("change",a=>{let o=a.target.checked;t[e]=!!o,r&&(J().publish(r,t),e==="use"&&(T0(t.type,!!o),t.parent.reconcileHandle(t.type)))}),r&&J().subscribe({topic:r,subscriberID:`attributesPanel.${r}.${e}`,callback:a=>{a[e]?(n.setAttribute("checked",""),e==="use"&&T0(t.type,!0)):(n.removeAttribute("checked"),e==="use"&&T0(t.type,!1))}}),n}function T0(t,e){let r=document.getElementById(`${t}InputGroup`);r&&(r.style.display=e?"grid":"none")}function Ue(t,e=!1,r=!1,n=!1){let a=y({content:t}),o=y({tag:"label"});if(r&&o.setAttribute("for",r),o.appendChild(a),e){let s=y({tag:"info-bubble",content:e});o.appendChild(s),o.classList.add("info")}return n&&o.setAttribute("class",n),o}function Wr(){return y({tag:"div",className:"rowPad"})}function ka(){return'<span class="dimSplit">&#x2044;</span>'}function Ka(){return y({className:"dimSplit",innerHTML:"&#x2044;"})}function ar(t,e,r,n=!1){let a=y({tag:"input",attributes:{type:"checkbox"}});return t[e]&&a.setAttribute("checked",""),typeof n=="string"&&a.setAttribute("id",n),a.addEventListener("change",o=>{let s=o.target.checked;t[e]=!!s,r&&r(s)}),a}function Q1(t){const e=J(),r=xe(),n=e.project.getItem(t);let a=y({className:"item-link__row",attributes:{"target-item-id":t}});return a.addEventListener("click",()=>{n.displayType==="Glyph"&&(e.nav.page="Characters"),n.displayType==="Component"&&(e.nav.page="Components"),n.displayType==="Ligature"&&(e.nav.page="Ligatures"),e.selectedItemID=t,e.navigate()}),a.appendChild(y({className:"item-link__thumbnail",attributes:{"target-item-id":t},innerHTML:r.makeItemThumbnail(n)})),a.appendChild(y({className:"item-link__title",innerHTML:`${(n==null?void 0:n.name)||"ERROR"}`})),a.appendChild(y({className:"item-link__subtitle",innerHTML:`${(n==null?void 0:n.displayType)||"ERROR"}&ensp;|&ensp;${t}`})),a}class fr{constructor(){this.parent,this.id=""}changed(){this.cache&&(this.cache={}),this.parent&&this.parent.changed&&this.parent.changed(),this.hasChangedThisSession=!0}get objType(){return this._objType||this.constructor.name}get displayType(){if(this.id){if(this.id.startsWith("liga-"))return"Ligature";if(this.id.startsWith("comp-"))return"Component";if(this.id.startsWith("glyph-"))return"Glyph";if(this.id.startsWith("kern-"))return"Kern Group"}return this.objType}set objType(e){this._objType=e}get cache(){return this._cache||(this._cache={}),this._cache}set cache(e){this._cache=e||{}}save(e=!1){const r=or(this);return e?r.objType=this.objType:delete r.objType,r.cache&&delete r.cache,r}clone(){return this.save(!0)}toString(){return ma(this.save())}print(e=0,r=!1){let n="";for(let x=0;x<e;x++)n+="  ";let a=`${n}{${this.objType} ${r||""}
`;n+="  ";const o=this.save();let s;for(const x of Object.keys(o))s=this[x],s.print?a+=`${n}${x}: ${s.print(e+1)}
`:typeof s!="function"&&(typeof s=="object"?a+=`${n}${x}: ${JSON.stringify(s)}
`:a+=`${n}${x}: ${s}
`);return a+=`${n.substring(2)}}/${this.objType} ${r||""}`,a}get isLockable(){return!1}}function $x(){let t=["💖","🦧","🐆","✅","🐋","😈","🦑"],e="";for(let r=0;r<3;r++)e+=t[Math.floor(Math.random()*t.length)];return e}const eE=Object.freeze(Object.defineProperty({__proto__:null,GlyphElement:fr,makeRandomID:$x},Symbol.toStringTag,{value:"Module"}));class Kt extends fr{constructor({xMin:e,xMax:r,yMin:n,yMax:a}={}){return super(),this.xMin=e,this.xMax=r,this.yMin=n,this.yMax=a,this.objType="Maxes",this}save(e=!1){const r={};return Tt(this._xMin)&&(r.xMin=this._xMin),Tt(this._xMax)&&(r.xMax=this._xMax),Tt(this._yMin)&&(r.yMin=this._yMin),Tt(this._yMax)&&(r.yMax=this._yMax),e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{`;return n+=`xMin:${this.xMin} `,n+=`xMax:${this.xMax} `,n+=`yMin:${this.yMin} `,n+=`yMax:${this.yMax}`,n+="}",n}get xMin(){return Tt(this._xMin)?He(this._xMin):Number.MAX_SAFE_INTEGER}get xMax(){return Tt(this._xMax)?He(this._xMax):Number.MIN_SAFE_INTEGER}get yMin(){return Tt(this._yMin)?He(this._yMin):Number.MAX_SAFE_INTEGER}get yMax(){return Tt(this._yMax)?He(this._yMax):Number.MIN_SAFE_INTEGER}get center(){return{x:this.width/2+this.xMin,y:this.height/2+this.yMin}}get width(){return this.xMax-this.xMin}get height(){return this.yMax-this.yMin}set xMin(e){e===void 0||isNaN(+e)?delete this._xMin:this._xMin=He(e)}set xMax(e){e===void 0||isNaN(+e)?delete this._xMax:this._xMax=He(e)}set yMin(e){e===void 0||isNaN(+e)?delete this._yMin:this._yMin=He(e)}set yMax(e){e===void 0||isNaN(+e)?delete this._yMax:this._yMax=He(e)}roundAll(e=3){this.xMin=ae(this.xMin,e),this.xMax=ae(this.xMax,e),this.yMin=ae(this.yMin,e),this.yMax=ae(this.yMax,e)}isPointInside(e,r){return!(e>=this.xMax||e<=this.xMin||r>=this.yMax||r<=this.yMin)}isMaxesInside(e){return!(!this.isPointInside(e.xMin,e.yMin)||!this.isPointInside(e.xMin,e.yMax)||!this.isPointInside(e.xMax,e.yMax)||!this.isPointInside(e.xMax,e.yMin))}}function Co(t={}){return!(isNaN(t==null?void 0:t.yMin)||isNaN(t==null?void 0:t.xMin)||isNaN(t==null?void 0:t.yMax)||isNaN(t==null?void 0:t.xMax))}function Di(t,e,r=!0){let n;return r?n=t.xMin<e.xMax&&t.xMax>e.xMin&&t.yMin<e.yMax&&t.yMax>e.yMin:n=t.xMin<=e.xMax&&t.xMax>=e.xMin&&t.yMin<=e.yMax&&t.yMax>=e.yMin,n}function Da(t){const e=$1();let r;for(let n=0;n<t.length;n++)r=new Kt(t[n]),e.xMin=Math.min(e.xMin,r.xMin),e.xMax=Math.max(e.xMax,r.xMax),e.yMin=Math.min(e.yMin,r.yMin),e.yMax=Math.max(e.yMax,r.yMax);return new Kt(e)}function go(t){return t.xMax===0&&t.xMin===0&&t.yMax===0&&t.yMin===0}function $1(){return{xMin:Number.MAX_SAFE_INTEGER,xMax:Number.MIN_SAFE_INTEGER,yMin:Number.MAX_SAFE_INTEGER,yMax:Number.MIN_SAFE_INTEGER}}function tE(){return{xMin:Number.MIN_SAFE_INTEGER,xMax:Number.MAX_SAFE_INTEGER,yMin:Number.MIN_SAFE_INTEGER,yMax:Number.MAX_SAFE_INTEGER}}const rE=Object.freeze(Object.defineProperty({__proto__:null,Maxes:Kt,getOverallMaxes:Da,isAllZeros:go,isMaxes:Co,maxesMaxBounds:tE,maxesMinBounds:$1,maxesOverlap:Di},Symbol.toStringTag,{value:"Module"}));class Kr{constructor(e={}){this.text=e.text||"",this.fontSize=e.fontSize||48,this.lineGap=e.lineGap||12,this.pagePadding=e.pagePadding||10,this.pageWidth=e.pageWidth||"fit",this.pageHeight=e.pageHeight||"auto",this.showCharacterExtras=e.showCharacterExtras||!1,this.showLineExtras=e.showLineExtras||!1,this.showPageExtras=e.showPageExtras||!1,this.showPlaceholderMessage=e.showPlaceholderMessage||!1,this.widthAdjustment=e.widthAdjustment||0}get text(){let e=this._text;return e.substring(0,2)==="{{"&&(e=e.substring(2,e.length-2),kt[e])?kt[e]:this._text}set text(e){this._text=e}get displayName(){let e="";return e+=`${this.text.substring(0,40)}...`,e}save(){let e={};return this.fontSize&&this.fontSize!==48&&(e.fontSize=this.fontSize),this.lineGap&&this.lineGap!==12&&(e.lineGap=this.lineGap),this.pagePadding&&this.pagePadding!==10&&(e.pagePadding=this.pagePadding),this.pageWidth&&this.pageWidth!=="fit"&&(e.pageWidth=this.pageWidth),this.pageHeight&&this.pageHeight!=="auto"&&(e.pageHeight=this.pageHeight),this.showCharacterExtras&&(e.showCharacterExtras=this.showCharacterExtras),this.showLineExtras&&(e.showLineExtras=this.showLineExtras),this.showPageExtras&&(e.showPageExtras=this.showPageExtras),this._text&&(e.text=this._text),this.text===kt.swadesh_207_short&&(e.text="{{swadesh_207_short}}"),this.text===kt.swadesh_207_frequent&&(e.text="{{swadesh_207_frequent}}"),this.text===kt.scowl_10_short&&(e.text="{{scowl_10_short}}"),this.text===kt.scowl_10_frequent&&(e.text="{{scowl_10_frequent}}"),this.text===kt.scowl_50_short&&(e.text="{{scowl_50_short}}"),this.text===kt.scowl_50_frequent&&(e.text="{{scowl_50_frequent}}"),this.text===kt.scowl_70_short&&(e.text="{{scowl_70_short}}"),this.text===kt.scowl_70_frequent&&(e.text="{{scowl_70_frequent}}"),e}}let kt={};kt.swadesh_207_short="I you they we you they this that here there who what where when how not all many some few other one two three four five big long wide thick heavy small short narrow thin woman man child wife husband mother father animal fish bird dog louse snake worm tree forest stick fruit seed leaf root bark flower grass rope skin meat blood bone fat egg horn tail feather hair head ear eye nose mouth tooth tongue fingernail foot leg knee hand wing belly guts neck back breast heart liver drink eat bite suck spit vomit blow breathe laugh see hear know think smell fear sleep live die kill fight hunt hit cut split stab scratch dig swim fly walk come lie sit stand turn fall give hold squeeze rub wash wipe pull push throw tie sew count say sing play float flow freeze swell sun moon star water rain river lake sea salt stone sand dust earth cloud fog sky wind snow ice smoke fire ash burn road mountain red green yellow white black night day year warm cold full new old good bad rotten dirty straight round sharp dull smooth wet dry correct near far right left at in with and if because name";kt.swadesh_207_frequent="stab black head leaf fingernail snake animal name husband narrow breast feather because heavy play bird blood bone breathe burn ice scratch thick cloud correct cut day wide dirty dog drink dust seed squeeze left egg yellow rotten sleep forest wet few they father flower freeze full straight give good grass tongue sharp short three die wife wipe this fruit liver skin knee sky laugh child walk salt belly smell vomit mountain stone nose many float smoke hold woman smooth rope mother spit split pull bark worm dry sing some suck swell stick guts turn two rub four mouth water where you";kt.scowl_10_short="able act add leaf age ahead aid major make all am an chaos gap are as at cause gave law tax day lazy bad rubber be bid object able submit box brand jobs doubt bug obvious by can occur ice char city back club code acquire cry cs act cup cycle day feedback broadcast add code edge did adjust badly admit midnight do dry adds due advice hardware body eat debate neck bed see left leg behalf being reject seek cell deem end video deep equal err hes bet queue even few sex eye fan fed off fit fly for fry left fun modify gap age meaningful bigger high girl glad sign go grew bugs length gun apology had forthcoming withdraw he hid highly algorithm technical hot three months eight huge worthwhile why via library ice aid die if big like ill aim in prior chip unique air is it medium five fix size object job jump package key background kid quickly knew asks awkward lucky law album welcome old led half algorithm lie bulk all film log help already also felt blue solve always fly mad dumb me harmful mix firmly common autumn mod dump aims much my name inch and net info hang unhappy nice enjoy bank only government annoy no input unreasonable runs cent numb invent unwanted any boat job lock mod doe of dog oh oil project book old come on too pop or cost got our love how box boy dozen pay update pen helpful graph pi plan equipment pop apple press chips kept put upwards copy quit ran nearby force card re perfect argue perhaps rid dark girl arm turn row sharp err bars art run serve forward cry sad husband disc see satisfy she sit ask slip small so spot square less best sum answer busy tax catch ate doubtful the tie title treatment to output try its putt tune two city equal club luck judge due stuff bug quit bulk sum fun quote up our us but buy van even via vote heavy war we awful who win awkward slowly own two write laws growth exact except boxes exist expand next maybe cycle eye dying style symbol syntax you type buys byte anyway bizarre size";kt.scowl_10_frequent="establishment accidentally administration afterwards disadvantage ahead straightforward majority mistaking alternatively fundamentally misunderstanding chaos applications broadcasting automatically available withdraw maximum displaying crazy embarrassing rubbish deliberately responsibility objections submitting borrowing observation doubtful contributions obviously thereby communications circumstances characters background conclusion acquiring descriptions electronics introduction consistency recommendation feedback additional knowledge adjust admittedly midnight documentation addressing misunderstands undergraduates hardware everybody disappearing somebody sophisticated guaranteeing definitions registering comprehensive rejecting seeking announcement simultaneously representation consequences interpretation queue nevertheless elsewhere experiencing keyboard facilities professional difficulties significantly reflecting frequently justifying investigate arrangements meaningful suggestions discouraging accordingly algorithms buildings strength terminology beforehand forthcoming thoroughly techniques authorities throughout months hundreds worthwhile philosophy appreciating opportunities likewise mediums fixing bizarre justification packages brackets quickly networks awkward lucky calculations album considerable yourself talking almost development helpful already individuals absolutely themselves always combinations harmful harmless autumn demonstration comparatively mysterious unfortunately unhappy enjoy thinking certainly environment unnecessarily unpleasant unreasonable continuously conventional unwanted anonymous misunderstood whatsoever programmers oh pointless projects looking controlling possibilities potentially improvements boxes destroying dozens updating developing upsetting manipulation upwards occupying disturbing performance perhaps particularly information instruction intervention unnecessary husband successfully asking criticism square answering symbols switching atmosphere output publication excluding sufficiently requirements corrupting buying individually avoiding heavy awful widespread unknown rewrite borrows growth examined exceptions executing complexity extending cycles destroyed style syntax everyone anyplace everything everywhere citizen";kt.scowl_50_short="salaam abed acme gad aery aft jag bah fain rajah hake alb lam ankh baobab apps aqua agar asp tat auk aver awl axon dray laze bah bobby webcam abductee abed clubfeet subgroups subhead bier abjure lambkin bleep submerse hobnail bola subplot brr albs bobtail bur obverse bobwhite bobby cads cocci apace achoo cis beck clew acme picnicker coda acquirable craw docs bract cud chancy czarina coda oddball redcap adder deb gadfly cadge dhoti ding adjure bodkin addle adman gladness doc midpoint dram ids hardtop duh adverted dweeb dyer adze lea deb beck zed jeep fief aegis meh lei deejay pekoe ell emo wen oleo hep coequal ere espy eta euro bevy clew hex fey wheezy fa halfback serfdom fey doff afghan wolfhound fie flan hafnium fob halfpence frack coifs aft futz daffy gad bugbear dogcatcher hangdog loge dogfish boggy aught gird glop magma cosign agog grog ergs dogtrot ague wigwag gyro haw highboy ashcans archduke hep mirthful flashgun fishhook hie babushka phlox bathmat techno hob dishpan thru ankhs aught hula schwa ashy iamb jib mica ids fie coif brig jihad piing demijohn wiki mil sim ding viol pip cliquish dirk cis clit odium diva antiwar nix sukiyaki baize jag jeep jib josh julep kale backbit crankcase workday hake sackful ginkgo ankh kith lockjaw yukked anklet milkmaid knave kook chickpea krone auks buckteeth haiku inkwell balky la alb milch veld lea milf bilge bullhorn clit killjoy bilk ell palmy ulna lo pulpy catafalque bulrush awls dolt alum salvo bulwark lynx maw iamb gimcrack slumdog meh brimful farmhand mid mkay armlet jimmy limn emo ump kumquat armrest ems emu triumvirate dimwit gamy nary inbox conch wend pone confab bong inhere nib ninja ankh wanly enmesh jinn noel unpin jonquil unripe duns nth nu convoke unwed lynx onyx benzene roan fob doc hod aloe oft agog oho poi emoji gook pol tom yon coon fop toque orb hos sot lout coven cowl lox soy boozy paps soapbox topcoat stepdad jape campfire popgun aphid pip bumpkin plait stepmom grapnel poi apps prig apps inapt pug pwn pyx aqua brad orb orc gird ere serf erg rho brig marjoram dirk purl berm lorn euro carpi marquis brr burs arty drub nervy airway aery furze mesa busby scat misdo apse misfire disgorge ashy sim disjointedly rusk slaw ism snaky sol asp squab disrobe buss sty suet svelte swag hussy eta catbird butch cote outfox outgo nth ti catkin fitly litmus botnet tom potpie tram lats attar tun outvote twain sty futz aqua nub deuce cud ague mufti pug duh quid jujube auk hula ump dun quoit yup bur buss abut muumuu uvula bauxite obloquy abuzz diva aver vim vole chevron ovule divvy bevy swag cowbird howdah wen lawfully gewgaw whey wiki hawker awl bowman pwn wooer cowpox wrack haws newtons wuss dewy frowzy fixate oxbow coxcomb fixer oxford foxglove foxhound axial laxly laxness axon sexpot coxswain sextet nexus boxwood epoxy yaw flyby lyceum hydra ye mayfly cygnet tallyho yip skyjack beryl hymen lynx yon hypo gyro cloys mythic yuk byword pyx piazza zed zing buzzkill drizzly hazmat kazoo gazpacho kudzu zwieback boozy";kt.scowl_50_frequent="salaaming imperturbability ultraconservatives disadvantageously aerodynamically afforestation tetrahedrons praiseworthiness majorettes groundbreakings electroencephalograms contemporaneously chaotically electroencephalographs aquaculture counterrevolutionaries overenthusiastic interrelationships authoritativeness circumnavigations straightaways axiomatically companionways nonhazardous flibbertigibbets subcontracting molybdenum disencumbering obfuscating subgroups subheadings comprehensibility unobjectionable lambkins bloodthirstiness submersibles abnegating chlorofluorocarbons subprograms transubstantiation obtrusiveness bureaucratically obviousness dumbwaiters labyrinthine electrocardiographs unacceptability lackadaisically counterclaiming acmes picnickers acquisitiveness aristocratically electrodynamics cryptocurrency czarinas daguerreotyping rebroadcasting featherbedding inconsiderateness crowdfunding foreknowledge hardheadedness maladjustment bodkins disconnectedly administratively lightheartedness ambassadorships sandpipers hydroelectricity fountainheads superconductivity hundredweights kudzus rebelliousness electioneering prefabrication gregariousness reinterpretations steeplejacks inconsequentially electromagnetism neurotransmitters exemplifications monkeyshines intermezzos multifariousness beefburger serfdom paraprofessionals afghans halfheartedness aloofness disinformation halfpennies disenfranchisement weatherproofs antiaircraft unfaithfulness misidentifying herringbone dogcatchers hangdog counterintelligence wrongfulness microaggressions bacteriological uncompromisingly phlegmatically nongovernmental dogtrotting wigwagging parapsychology archbishoprics beachcombers archdeacons thoroughgoing bathhouses babushkas arithmetically biotechnology catchphrase philanthropically mouthwatering inconspicuousness annihilators shanghaiing demijohns sportsmanlike deliquescent conversationalists triumvirates contrariwise transfixing sukiyaki prizefighters jitterbugging photojournalists jurisdictional blackballing blackcurrant backdating cantankerousness thankfulness blackguards blockhouses lockjaw yukking huckleberries brinkmanship kookaburras backpedals bankrolling backstretches blackthorns skulduggery anticlockwise buckyballs spellbinders spellcheckers officeholders overindulgence levelheadedness killjoys streetwalkers schoolmistresses invulnerability palpitations milquetoasts chivalrously galvanometers councilwoman discombobulating gimcracks humdingers interdepartmental circumflexes warmhearted interdenominational mkay circumlocutions telecommunication anthropomorphism kumquats armrests bantamweights mysteriousness boysenberries teleconferencing circumnavigating unhesitatingly conjunctivitis dimensionless environmentalism interconnections unpredictability inquisitiveness nonrepresentational counterrevolutions discontinuances overanxious mulligatawny extravaganzas prohibitionists boisterousness psychokinesis grandiloquence atmospherically incontrovertible flamethrowers detoxification spermatozoon shipbuilders slipcovers snapdragons sheepfolds popguns slipknots developmental pneumatically apprehensiveness circumscriptions unscrupulousness sleepwalkers aromatherapy noninterference hypoallergenic porterhouses crackerjacks telemarketing disorderliness predetermination overqualified incorruptibility counterweights counterrevolutionary overzealous crossbreeding conscientiousness disfranchisement thanksgivings disjointedly muskellunges unreasonableness misquotations disreputably transversely swashbucklers syllabification carpetbaggers boastfulness remortgaging catkins shuttlecocking forthrightness breastplates agriculturalists outvoting trustworthiness chintziest longitudinally genuflections lugubriousness brouhahas jujitsu interleukin muumuus antediluvian luxuriousness colloquy puzzlement chevrons skivvying waterboardings shadowboxing weatherproofing viewfinders lawgivers horsewhipping nighthawks sawmills clownishness cowpunchers wrongheadedness newspaperwoman swallowtails knockwursts billowy frowziest counterexamples oxbows unexceptionable oxfords foxgloves inexhaustibly sexless laxness exorbitantly expostulations coxswains extemporaneously waxwings oxyacetylene cyberbullies underemployed ladyfingers lollygagging policyholders skyjackers asymmetrically embryologists cryptocurrencies tyrannosauruses crystallographic electrolytes polyunsaturated pennyweights asphyxia quizzically buzzkills bedazzling hazmat gazpacho mazurkas zwieback lazybones";kt.scowl_70_short="aah ab ac ad ae aft aga ah ai haj aka al am an ciao ape aqua ar as at aud av aw ax aye azo aba abb bobcat bd be bf pibgorn abhor bi obj bk bl abmho cobnut boa bp br abs btl bu abvolt lbw bx by subzero ca ecbolic cc cd ace cf cg ch cig ck cl cm acne co cp acquit cr cs ct cu cw cyl czar dab db dc dd de gadfly dg edh di adj dk bdl dm ordn do dpi hdqrs dr ads obdt dub adv dwt dye dz ea deb dec ed bee def beg eh lei eject eek el em en eon dep eq er es et feu eve dew ex bey fez fa offbeat offcuts mfd fec ff mfg offhand fib fjeld offkey fl fm hafnium fo fp fr ifs ft fug fwd defy rugby agcy gds age bagful egg ugh gi logjam gl gm gnu go magpie gr gs gt gum dogvane hgwy gym zigzag ha cashbox ahchoo hd he hf hg hhd hi kishke hl chm john ho hp earthquake hr chs ht hub boschvark hwy hyp machzor ria ib hic id die if big ihram aalii bijou oik ail aim in bio dip liq air is it ilium civ iwis fix hiya biz ja jct jet jg jib hajj prajna jo jr adjt jug ka kb kc jackdaw eke nakfa kg ankh ki lockjaw dekko kl km kn koa kph kr ks kt haku kvass kw sky la lb talc eld ale elf lg pelham li killjoy alk ll lm ln lo alp calque dlr ls alt flu lv lwei lx fly colza ma mb emcee mdse me mf mg mho mi ramjet mk ml mm damn mo mp kumquat amrita ms mt mu duumvir dimwit my hamza ana inbox enc and ne inf eng sinh nib conj ink enl unman ann no tnpk cinque nr ans ant nu inv unwed jinx any bonze ob doc od doe of bog oh oi mojo oka col om on oo op loq or os bot fou gov ow ox boy oz pa peepbo pc pd pe pf pg pi kopje pk pl pm apnea pod pp pr ps pt pub pvt pwn pya pzazz qadi sheqel qi ql qoph sqq qr qt qu qwerty bra arb arc rd re barf erg rho interj ark birl rm urn bro rpm cirque arr rs rt cru arvo crwth cry orzo sac sb sc sd sea sf sgd sh si masjid ask isl ism assn so sp sq sri ss st sub svelte swab sym grosz ta tb etc gtd ate artful mtg fth ti muntjac latke atm tn to hatpin cotquean tr ts att tub outvote two qty ditz qua bub buck cue buff aug uh oui juju auk bul um bun duo up tuque bur us ut lituus guv thruway aux buy buzz ova vb avdp ave avg vhf via vlf avn vo livre vs ovum vv ivy evzone wad bawbee bawcock wd we awful gewgaw whf wig blowjob wk awl cwm awn wo twp wry bows wt swum bowwow fwy blowzy coxa oxbow exc flexdollars axed boxful foxglove exhale xi axle taxman laxness axon exp exquisite exr bxs ext xu paxwax boxy ya flyby syce yd ye dayfly tyg anyhow yid skyjack dyke syn yo gyp yr mys byte yuk gyve ywis pyx sayyid coryza zap whizzbang vizcacha samizdat zed fizgig muzhik zig britzka zloty gizmo kibbutznik chutzpah buzzsaw azure mitzvah buzzword cozy";kt.scowl_70_frequent="aardwolves honorificabilitudinitatibus psychopharmacologies contradistinctively aerothermodynamics tetrafluoroethylene supercalifragilisticexpialidocious tetrahydrocannabinol photoreconnaissance majoritarianism groundbreakings pneumonoultramicroscopicsilicovolcanoconiosis extraordinarily electroencephalographic anthraquinone antidisestablishmentarianisms overenthusiastically floccinaucinihilipilification circumnavigations unseaworthiness chemoprophylaxis companionways succinylsulfathiazole bacteriologically flabbergasting subclassification subdirectories overbearingnesses dumbfounding subglacial abhorrently objectionableness knobkerries subminiaturize subnormalities bourgeoisification subprofessionals tribromoethanols insubstantialities unobtrusiveness subventionary cobwebbiest bxs presbyterianism subzero ecbolic synecdochically cf cg dichlorodiphenyltrichloroethane buckminsterfullerene chlortetracyclines blancmanges chromaticness ecphonesis acquaintanceship colicweed czarevitch hippopotomonstrosesquipedalian rebroadcasting featherbedding departmentalization grandfathering curmudgeonliness goodheartedness adjudications handkerchiefs otherworldlinesses maladministration straightforwardness childproofing headquartering magnetohydrodynamics straightforwards bloodthirstiness individualistically disadvantageously hundredweights dziggetais chickenheartedness thrombophlebitides feeblemindednesses indefatigabilities photodisintegration incomprehensibility deinstitutionalization nonprejudicial triskaidekaphobias contemporaneousnesses inconsequentiality counterrevolutionaries praiseworthiness attorneyships piezoelectricities surfboardings unselfconsciousness chiefdom counteroffensives roofgarden halfheartedness fjords offkey engulfment aloofness halfpennyworth softheartednesses halfwitted interstratifying hummingbirds dogcatchers subkingdoms counterinsurgencies meaningfulness microaggressions logjams glomerulonephritides segmentalization otorhinolaryngologists stringpiece misunderstandings superstrength contradistinguished dogvane songwriters otorhinolaryngology zigzagging archbishoprics archconservative archdeaconries reproachfulness thoroughgoing highhandedness babushkas biotechnological thoroughpaced earthquakes pseudohermaphroditism electroencephalographs boschvark northwestwardly electroencephalography machzor triiodomethane bijouterie unsportsmanlike impressionistically hemidemisemiquavers microsporangium uncommunicativenesses contrariwise interlocutrix semiyearly compartmentalization straitjacketing jct jg jitterbugging hajjes prajna photojournalists jr adjt injudiciousness lackadaisicalness stockbrokerage blackcurrants backdating breakfasting backgrounders backhandedness counterattacking stockjobbers bookkeepers kaffeeklatsches acknowledgments cuckooflowers backpedaling bankruptcies backscratchers breakthroughs skulduggery kvetchers counterclockwise ankylostomiasis albuminurias tetramethyldiarsine algorithmically diphenylhydantoins killjoys phenylketonuria diacetylmorphine caesalpiniaceous unnilquadiums hexylresorcinol convolvulaceous pickerelweeds calxes calzone somnambulistically uncircumcision humdingers uncomfortableness circumgyration warmheartedness circumjacent gymkhanas circumlocutions kumquats steamrollering circumterrestrial multidimensionality circumvallating bantamweights dihydrostreptomycin hamza nonbelligerents undemonstrativeness videoconferencing environmentalists unpretentiousnesses inquisitiveness nonrepresentational deoxyribonuclease conversationalists unwholesomeness nasopharynxes dinitrobenzene unapproachabilities autobiographically chlorofluorocarbons brokenheartedly grandiloquently underemployment photozincography clapboarding stepchildren stepdaughters leapfrogging campgrounds flapjacks pumpkinseeds oversimplifications developmentally disproportionateness disputatiousness impv shipwrecking endocrinotherapy pzazz sheqalim sheqel qindarkas ql qophs seqq hdqrs qto qwerty electrocardiographic interjectionally disembarkation preternaturalness anthropomorphically overqualified electrodynamometers ultraconservatives bilharziases jurisdictional unsatisfactoriness disgracefulness disjointedness contemporaneously misrepresentations transvestitisms upperclasswoman groszy heartbreakingly postconvalescent outdistancing roentgenotherapy pocketknives indiscreetnesses bulletproofing cotquean glottochronologies bodhisattva untrustworthiness quartziferous intellectualization insufficiently superdreadnought kieselguhrs hallelujahs lukewarmness dichlorodifluoromethane chautauqua duumvirate chauvinistically rauwolfias juxtapositional ventriloquy muzzleloading vb avdp incontrovertibilities avg vhf pavlovas czarevna vraisemblance leitmotivs advt improvvisatore heavyweights evzone shadowboxings cowcatchers bowdlerizations weatherboardings sorrowfulness shadowgraphs wholeheartedness showjumping sparrowhawks snowmobiling downheartedness cowpunchers wrongheadedness newspaperwoman yellowthroats knockwursts hollowwares lawyerly frowziness hexamethylenetetramine boxberries excommunications sexdecillion exemplifications exfoliating foxgloves exhibitionistically lexicographically orthodoxly fluxmeter complexnesses inexorabilities exquisiteness boxrooms exsanguinate extemporaneousness heterosexuality maxwells cyanocobalamins cybernetician encephalomyelitis gillyflowers acanthopterygians platyhelminths skyjackings pyknic polymorphonuclear electromyographies hyperparathyroidism psychophysiological demythologizations polyunsaturated polyvalence archaeopteryxes sayyid psychoanalyzing whizzbangs mezcaline samizdat anthropomorphized wayzgoose muzhiks anthropomorphizing blitzkriegs bamboozlement quizmasters kibbutzniks chutzpah buzzsaw gazumping rendezvousing buzzwords zygophyllaceous";class K0{constructor(e={}){this.textBlocks=[],this.lineBreakers=e.lineBreakers||[" "," "," "],this.data=[],this.pixelHeight=0,this.canvasMaxes=e.canvasMaxes,this.ctx=e.ctx,this.project=e.project||xe(),this.options=new Kr(e.options),this.hasDrawableCharacters=!1,this.drawPageExtras=e.drawPageExtras||!1,this.drawLineExtras=e.drawLineExtras||!1,this.drawCharacterExtras=e.drawCharacterExtras||!1,this.drawCharacter=e.drawCharacter||!1,this.roundUp=e.roundUp||!1,this.generateData()}get canvasMaxes(){return this._canvasMaxes}set canvasMaxes(e){this._canvasMaxes=new Kt({xMin:e.xMin||0,xMax:e.xMax||1/0,yMin:e.yMin||0,yMax:e.yMax||1/0})}draw({showPageExtras:e=!1,showLineExtras:r=!1,showCharacterExtras:n=!1,showCharacter:a=!1}={}){if(this.drawPageExtras&&e&&this.drawPageExtras(this.ctx,this),this.options.text==="")return;let o=-1;this.drawLineExtras&&r&&this.iterator(s=>{s.lineNumber!==o&&(this.drawLineExtras(this.ctx,s,this),o=s.lineNumber)}),this.drawCharacterExtras&&n&&this.iterator(s=>{this.drawCharacterExtras(this.ctx,s,this.roundUp)}),this.drawCharacter&&a&&this.iterator(s=>{this.drawCharacter(this.ctx,s)})}iterator(e){for(let r=0;r<this.data.length;r++)for(let n=0;n<this.data[r].length;n++)e(this.data[r][n],this)}drawCanvasMaxes(e){e.fillStyle="transparent",e.strokeStyle="lime",e.lineWidth=1,e.strokeRect(this.canvasMaxes.xMin,this.canvasMaxes.yMin,this.canvasMaxes.width,this.canvasMaxes.height)}generateData(){var q;let e,r,n,a,o=0,s,x,L;for(this.data=[],this.textBlocks=this.options.text.split(`
`),n=0;n<this.textBlocks.length;n++)for(e=es(this.textBlocks[n].split(""),this.project),this.data[n]=[],a=0;a<e.length;a++)r=e[a],r.startsWith("liga-")?(L=this.project.ligatures[r],r=L.chars):L=this.project.getItem(`glyph-${Yr(r)}`),(q=L==null?void 0:L.shapes)!=null&&q.length&&(this.hasDrawableCharacters=!0),s=L?L.advanceWidth:this.project.defaultAdvanceWidth,x=qr(r,e[a+1]),o+=s+x,this.data[n][a]={char:r,item:L,view:!1,widths:{advance:s,kern:x,aggregate:o},isLineBreaker:this.lineBreakers.indexOf(r)>-1,isVisible:!1,lineNumber:!1};let I,c,C,R=0,g=0,Y=0,w=!1;const V=this.options.fontSize/this.project.totalVertical,_=this.project.settings.font.ascent,ee={lineHeight:this.project.totalVertical+this.options.lineGap/V,width:this.canvasMaxes.width/V,yMax:this.canvasMaxes.yMax/V,yMin:this.canvasMaxes.yMin/V,xMin:this.canvasMaxes.xMin/V};for(this.options.pageHeight==="auto"&&(ee.yMax=1/0),g=ee.xMin,Y=ee.yMin+_,n=0;n<this.data.length;n++){for(e=this.data[n],a=0;a<e.length;a++){if(I=e[a],I.view===!1){if(w&&Number.isFinite(ee.width)){if(c=nE(e,a),C=c.widths.aggregate+c.widths.advance-I.widths.aggregate,g+C>ee.width){if(R++,Y+ee.lineHeight>ee.yMax)return;g=ee.xMin,Y=ee.yMin+_+R*ee.lineHeight}w=!1}I.isVisible=!0,I.lineNumber=R,I.view={dx:g*V,dy:Y*V,dz:V},g+=I.widths.advance+I.widths.kern}I.isLineBreaker&&(w=!0)}if(R++,Y+ee.lineHeight>ee.yMax)return;g=ee.xMin,Y=ee.yMin+_+R*ee.lineHeight,this.pixelHeight=R*ee.lineHeight*V}}}function nE(t,e){for(let n=e;n<t.length;n++)if(t[n].isLineBreaker)return t[n];return t[t.length-1]}function qr(t,e){if(!t||!e)return 0;t=Ln(t).join(""),e=Ln(e).join("");let r=xe().kerning,n,a,o;for(let s of Object.keys(r))for(let x=0;x<r[s].leftGroup.length;x++)if(n=r[s].leftGroup[x],Ln(n)[0]===t){for(let L=0;L<r[s].rightGroup.length;L++)if(a=r[s].rightGroup[L],Ln(a)[0]===e)return o=r[s].value*-1,o}return 0}function es(t,e){e=e||xe();const r=e.sortedLigatures;let n,a;for(let o=0;o<t.length;o++)for(let s=0;s<r.length;s++)n=r[s].chars,a=t.slice(o,o+n.length).join(""),a===n&&t.splice(o,n.length,r[s].id);return t}class Ro{constructor(e={}){this.objType="Guide",this.angle=e.angle===0?0:90,this.name=e.name,this.location=isNaN(parseInt(e.location))?200:parseInt(e.location),this.color=e.color||xA,this.visible=!!e.visible}save(){let e={},r=this.name;return r!=="Horizontal guide"&&r!=="Vertical guide"&&r!=="Guide"&&(e.name=this.name),this.angle!==90&&(e.angle=this.angle),this.location!==200&&(e.location=this.location),this.color!==xA&&(e.color=this.color),this.visible||(e.visible=this.visible),e}get name(){return this._name||(this.angle===90?this._name="Horizontal guide":this.angle===0?this._name="Vertical guide":this._name="Guide"),this._name}set name(e){e||(this.angle===90?e="Horizontal guide":this.angle===0?e="Vertical guide":e="Guide"),this._name=e}}const xA="rgb(127, 0, 255)",_0="rgb(227, 190, 171)",V0="rgb(212, 154, 125)",ga="rgb(191, 106, 64)";function EA(t){let e=[],r=(t==null?void 0:t.attributes)||{},n=Number(r.r)||Number(r.rx)||100;n=Math.abs(n);let a=Number(r.r)||Number(r.ry)||100;a=Math.abs(a);let o=Number(r.cx)||0,s=Number(r.cy)||0;if(!(n===0&&a===0)){let x={xMin:o-n,xMax:o+n,yMin:s-a,yMax:s+a};e=aE(x)}return[e]}function aE(t){let e=t.xMin,r=t.yMax,n=t.xMax,a=t.yMin,o=(n-e)/2,s=(r-a)/2,x=o*.448,L=s*.448,I={x:be(e+o),y:be(r)},c={x:be(e+x),y:be(r)},C={x:be(n-x),y:be(r)},R={x:be(n),y:be(a+s)},g={x:be(n),y:be(r-L)},Y={x:be(n),y:be(a+L)},w={x:be(e+o),y:be(a)},V={x:be(n-x),y:be(a)},_={x:be(e+x),y:be(a)},ee={x:be(e),y:be(a+s)},q={x:be(e),y:be(a+L)},ce={x:be(e),y:be(r-L)};return[[I,C,g,R],[R,Y,V,w],[w,_,q,ee],[ee,ce,c,I]]}function ts(t,e,r,n,a,o,s,x,L,I){let c={x:t,y:e},C={x,y:L};if(t===x&&e===L||!r||!n)return[c.x,c.y,C.x,C.y,C.x,C.y];let R=iE(a);o=!!o,s=!!s;let g={},Y,w;if(I)Y=I[0],w=I[1],g={x:I[2],y:I[3]};else{c=li(c,R*-1),C=li(C,R*-1);let We=(c.x-C.x)/2,ke=(c.y-C.y)/2,At=ke*ke,st=We*We,ue=st/(r*r)+At/(n*n);ue>1&&(ue=Math.sqrt(ue),r*=ue,n*=ue);let It=r*r,Ae=n*n,$e=o===s?-1:1;$e*=Math.sqrt(Math.abs((It*Ae-It*At-Ae*st)/(It*At+Ae*st))),g.x=$e*r*ke/n+(c.x+C.x)/2,g.y=$e*-1*n*We/r+(c.y+C.y)/2,Y=Math.asin((c.y-g.y)/n),w=Math.asin((C.y-g.y)/n),Y=c.x<g.x?Math.PI-Y:Y,w=C.x<g.x?Math.PI-w:w;let lt=Math.PI*2;Y<0&&(Y=lt+Y),w<0&&(w=lt+w),s&&Y>w&&(Y=Y-lt),!s&&w>Y&&(w=w-lt)}let V=w-Y,_=[],ee=Math.PI*120/180;if(Math.abs(V)>ee){let We=w,ke=C.x,At=C.y;w=Y+ee*(s&&w>Y?1:-1),C.x=g.x+r*Math.cos(w),C.y=g.y+n*Math.sin(w),_=ts(C.x,C.y,r,n,a,0,s,ke,At,[w,We,g.x,g.y])}let q={x:Math.cos(Y),y:Math.sin(Y)},ce={x:Math.cos(w),y:Math.sin(w)};V=w-Y;let Te=Math.tan(V/4)*4/3,oe={x:c.x,y:c.y},Ie={x:c.x+r*Te*q.y,y:c.y-n*Te*q.x};Ie.x=2*oe.x-Ie.x,Ie.y=2*oe.y-Ie.y;let de={x:C.x+r*Te*ce.y,y:C.y-n*Te*ce.x},De={x:C.x,y:C.y};if(_=[Ie.x,Ie.y,de.x,de.y,De.x,De.y].concat(_),I)return _;{let We=[];for(let ke=0;ke<_.length;ke++)ke%2?We[ke]=li({x:_[ke-1],y:_[ke]},R).y:We[ke]=li({x:_[ke],y:_[ke+1]},R).x,We[ke]=be(We[ke]);return We}}function iE(t){return t*(Math.PI/180)}function li(t,e,r){if(!t)return;if(e===0)return t;r=r||{},r.x=r.x||0,r.y=r.y||0;const n={x:0,y:0};return n.x=Math.cos(e)*(t.x-r.x)-Math.sin(e)*(t.y-r.y)+r.x,n.y=Math.sin(e)*(t.x-r.x)+Math.cos(e)*(t.y-r.y)+r.y,n}function LA(t={}){const e=t.attributes.d||"";if(e.length===0||e.length===1)return[];let r=AE(e);return r=sE(r),r=lE(r),r=xE(r),r=EE(r),r=LE(r),r=hE(r),oE(r)}function oE(t){let e=[],r=[],n=0,a=0;return t.forEach(o=>{const s=o.parameters||[];s.forEach((x,L)=>s[L]=be(x)),o.type==="M"&&(n=s[0],a=s[1]),o.type==="L"&&(r.push([{x:n,y:a},!1,!1,{x:s[0],y:s[1]}]),n=s[0],a=s[1]),o.type==="C"&&(r.push([{x:n,y:a},{x:s[0],y:s[1]},{x:s[2],y:s[3]},{x:s[4],y:s[5]}]),n=s[4],a=s[5]),o.type==="Z"&&(e.push(r),r=[])}),r.length&&e.push(r),e}function AE(t){let e=[],r=!1,n=is(t);for(let a=0;a<n.length;a++)if(hA(n.charAt(a))){r=a;break}if(r===!1)return[{type:"Z"}];for(let a=r+1;a<n.length;a++)hA(n.charAt(a))&&(e.push({type:n.charAt(r),parameters:z0(n.substring(r+1,a))}),r=a);return r<n.length-1&&e.push({type:n.charAt(r),parameters:z0(n.substring(r+1,n.length))}),e}function sE(t){let e=[],r={},n={x:0,y:0},a={x:0,y:0};return t.forEach(o=>{if(o.type==="m"||o.type==="l"){r={type:o.type==="m"?"M":"L",parameters:[]};for(let s=0;s<o.parameters.length;s+=2)a.x=o.parameters[s+0]+n.x,a.y=o.parameters[s+1]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="h"){r={type:"H",parameters:[]};for(let s=0;s<o.parameters.length;s++)a.x=o.parameters[s]+n.x,r.parameters.push(a.x),n.x=a.x;e.push(r)}else if(o.type==="v"){r={type:"V",parameters:[]};for(let s=0;s<o.parameters.length;s++)a.y=o.parameters[s]+n.y,r.parameters.push(a.y),n.y=a.y;e.push(r)}else if(o.type==="c"){r={type:"C",parameters:[]};for(let s=0;s<o.parameters.length;s+=6)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),r.parameters.push(o.parameters[s+2]+n.x),r.parameters.push(o.parameters[s+3]+n.y),a.x=o.parameters[s+4]+n.x,a.y=o.parameters[s+5]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="s"){r={type:"S",parameters:[]};for(let s=0;s<o.parameters.length;s+=4)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),a.x=o.parameters[s+2]+n.x,a.y=o.parameters[s+3]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="q"){r={type:"Q",parameters:[]};for(let s=0;s<o.parameters.length;s+=4)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),a.x=o.parameters[s+2]+n.x,a.y=o.parameters[s+3]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="t"){r={type:"T",parameters:[]};for(let s=0;s<o.parameters.length;s+=2)a.x=o.parameters[s+0]+n.x,a.y=o.parameters[s+1]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="a"){r={type:"A",parameters:[]};for(let s=0;s<o.parameters.length;s+=7)r.parameters.push(o.parameters[s+0]),r.parameters.push(o.parameters[s+1]),r.parameters.push(o.parameters[s+2]),r.parameters.push(o.parameters[s+3]),r.parameters.push(o.parameters[s+4]),a.x=o.parameters[s+5]+n.x,a.y=o.parameters[s+6]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else o.type==="z"?e.push({type:"Z"}):(e.push(o),n=_a(n,o))}),e}function lE(t){let e=[];return t.forEach(r=>{if(r.type)switch(r.type){case"Z":case"z":e.push({type:"Z"});break;case"H":case"V":case"h":case"v":for(let n=0;n<r.parameters.length;n+=2)e.push({type:r.type,parameters:[r.parameters[n]]});break;case"M":for(let n=0;n<r.parameters.length;n+=2)e.push({type:n<2?"M":"L",parameters:[r.parameters[n],r.parameters[n+1]]});break;case"m":for(let n=0;n<r.parameters.length;n+=2)e.push({type:n<2?"m":"l",parameters:[r.parameters[n],r.parameters[n+1]]});break;case"L":case"T":case"l":case"t":for(let n=0;n<r.parameters.length;n+=2)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1]]});break;case"Q":case"S":case"q":case"s":for(let n=0;n<r.parameters.length;n+=4)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3]]});break;case"C":case"c":for(let n=0;n<r.parameters.length;n+=6)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3],r.parameters[n+4],r.parameters[n+5]]});break;case"A":case"a":for(let n=0;n<r.parameters.length;n+=7)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3],r.parameters[n+4],r.parameters[n+5],r.parameters[n+6]]});break}}),e}function xE(t){let e=[],r={x:0,y:0};return t.forEach(n=>{if(n.type==="H")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[n.parameters[a],r.y]});else if(n.type==="V")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[r.x,n.parameters[a]]});else e.push(n);r=_a(r,n)}),e}function EE(t){let e=[],r={x:0,y:0},n={x:0,y:0},a={x:0,y:0},o;return t.forEach(s=>{s.type==="S"||s.type==="T"?(o=e.length>1?e.at(-1):!1,o&&o.type==="C"?(n.x=o.parameters[2],n.y=o.parameters[3]):o&&o.type==="Q"?(n.x=o.parameters[0],n.y=o.parameters[1]):(n.x=r.x,n.y=r.y),a={x:r.x-n.x+r.x,y:r.y-n.y+r.y},s.type==="S"?e.push({type:"C",parameters:[a.x,a.y,s.parameters[0],s.parameters[1],s.parameters[2],s.parameters[3]]}):s.type==="T"&&e.push({type:"Q",parameters:[a.x,a.y,s.parameters[0],s.parameters[1]]})):e.push(s),r=_a(r,s)}),e}function LE(t){let e=[],r={x:0,y:0},n,a,o,s,x,L,I,c,C,R;return t.forEach(g=>{g.type==="Q"?(n=r.x,a=r.y,o=g.parameters[0],s=g.parameters[1],x=g.parameters[2],L=g.parameters[3],I=n+2/3*(o-n),c=a+2/3*(s-a),C=x+2/3*(o-x),R=L+2/3*(s-L),e.push({type:"C",parameters:[I,c,C,R,x,L]})):e.push(g),r=_a(r,g)}),e}function hE(t){let e=[],r=[],n={x:0,y:0};return t.forEach(a=>{if(a.type==="A")for(let o=0;o<a.parameters.length;o+=7){r=ts(n.x,n.y,a.parameters[o+0],a.parameters[o+1],a.parameters[o+2],a.parameters[o+3],a.parameters[o+4],a.parameters[o+5],a.parameters[o+6],!1);for(let s=0;s<r.length;s+=6)e.push({type:"C",parameters:[r[s+0],r[s+1],r[s+2],r[s+3],r[s+4],r[s+5]]});n={x:r.at(-2),y:r.at(-1)}}else e.push(a),n=_a(n,a)}),e}function _a(t,e){let r={x:t.x||0,y:t.y||0};switch(e.type){case"Z":case"z":break;case"H":r.x=e.parameters.at(-1);break;case"V":r.y=e.parameters.at(-1);break;case"M":case"L":case"C":case"S":case"A":case"Q":case"T":r.x=e.parameters.at(-2),r.y=e.parameters.at(-1);break;case"h":for(let n=0;n<e.parameters.length;n++)r.x+=e.parameters[n];break;case"v":for(let n=0;n<e.parameters.length;n++)r.y+=e.parameters[n];break;case"m":case"l":case"t":for(let n=0;n<e.parameters.length;n+=2)r.x+=e.parameters[n+0],r.y+=e.parameters[n+1];break;case"q":case"s":for(let n=0;n<e.parameters.length;n+=4)r.x+=e.parameters[n+2],r.y+=e.parameters[n+3];break;case"c":for(let n=0;n<e.parameters.length;n+=6)r.x+=e.parameters[n+4],r.y+=e.parameters[n+5];break;case"a":for(let n=0;n<e.parameters.length;n+=7)r.x+=e.parameters[n+5],r.y+=e.parameters[n+6];break}return r}function hA(t){return"MmLlCcSsZzHhVvAaQqTt".indexOf(t)>-1}function cA(t){var a;let e=[],r=(a=t==null?void 0:t.attributes)==null?void 0:a.points;r=is(r);let n=z0(r);if(n.length>4){let o=Number(n[0]),s=Number(n[1]);for(let x=0;x<n.length;x+=2){let L=Number(n[x])||0,I=Number(n[x+1])||0;e.push([{x:be(o),y:be(s)},!1,!1,{x:be(L),y:be(I)}]),o=L,s=I}}return[e]}function cE(t){let e=t.attributes||{},r=be(e.x)||0,n=be(e.y)||0,a=be(e.width)||100,o=be(e.height)||100,s=r+a,x=n+o,L={x:r,y:n},I={x:s,y:n},c={x:s,y:x},C={x:r,y:x};return[[[L,!1,!1,I],[I,!1,!1,c],[c,!1,!1,C],[C,!1,!1,L]]]}function TE(t){var o;if(!t||!(t!=null&&t.attributes))return[];const e=["matrix","translate","scale","rotate","skewx","skewy"];let r=[],n,a;return(o=t.attributes)!=null&&o.transform&&(n=t.attributes.transform.replaceAll(","," "),n=n.replaceAll("  "," "),n=n.toLowerCase(),n=n.split(")"),n.forEach(s=>{let x=s.split("(");x.length===2&&(x[0]=x[0].trim(),x[1]=x[1].trim(),e.indexOf(x[0])>-1&&(a=x[1].split(" "),a=a.map(L=>Number(L)),r.push({name:x[0],args:a})))})),t.attributes["transform-origin"]&&(n=t.attributes["transform-origin"],n=n.replaceAll(","," "),n=n.replaceAll("  "," "),a=n.split(" "),a=a.map(s=>Number(s)),r.push({name:"origin",args:a})),r}function IE(t=[],e=[]){JSON.stringify(t);const r=structuredClone(t);JSON.stringify(r);let n=e.reverse(),a=[0,0];for(let o=0;o<n.length;o++)if(n[o].name==="origin"){a=n.splice(o,1),a=a[0].args;break}return JSON.stringify(n),`${a.toString()}`,n.forEach(o=>{if(TA[o.name]){`${o.name}`;const s=TA[o.name];r.forEach((x,L)=>{x.forEach((I,c)=>{const C=s(I,o.args,a);r[L][c]=C})})}}),JSON.stringify(r),r}const TA={matrix:dE,translate:uE,scale:pE,rotate:SE,skewx:CE,skewy:gE};function dE(t=[],e=[],r=[]){const n=[];for(;e.length<6;)e.push(0);`${e.toString()}`;function a(o){if(o===!1)return!1;const s=o.x,x=o.y,L={x:0,y:0};return L.x=be(1*e[0]*s+1*e[2]*x+1*e[4]),L.y=be(1*e[1]*s+1*e[3]*x+1*e[5]),L}return n[0]=a(t[0]),n[1]=a(t[1]),n[2]=a(t[2]),n[3]=a(t[3]),n}function uE(t=[],e=[],r=[]){const n=[],a=e[0]||0,o=e[1]||0;`${t[0].x}${t[0].y}`;function s(x){if(x===!1)return!1;const L={x:0,y:0};return L.x=be(x.x+a),L.y=be(x.y+o),L}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function pE(t=[],e=[],r=[]){const n=e[0];let a=e[1];a||(a=n);const o=[];`${e.toString()}`;function s(x){if(x===!1)return!1;const L={x:0,y:0};return L.x=be(x.x*n),L.y=be(x.y*a),L}return o[0]=s(t[0]),o[1]=s(t[1]),o[2]=s(t[2]),o[3]=s(t[3]),o}function SE(t=[],e=[],r=[]){`${r.toString()}`;const n=yo(e[0]),a={x:0,y:0};e[1]||(e[1]=0),e[2]||(e[2]=0),a.x=e[1]+r[0],a.y=e[2]+r[1];const o=[];`${e.toString()}`;function s(x){if(!x)return!1;const L={x:0,y:0};return L.x=be(Math.cos(n)*(x.x-a.x)-Math.sin(n)*(x.y-a.y)+a.x),L.y=be(Math.sin(n)*(x.x-a.x)+Math.cos(n)*(x.y-a.y)+a.y),L}return o[0]=s(t[0]),o[1]=s(t[1]),o[2]=s(t[2]),o[3]=s(t[3]),o}function CE(t=[],e=[],r=[]){const n=[];`${e.toString()}`;const a=yo(e[0]),o=Math.tan(a);function s(x){if(!x)return!1;const L=x.x,I=x.y,c={x:0,y:0};return c.x=be(L+o*I),c.y=be(I),c}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function gE(t=[],e=[],r=[]){const n=[];`${e.toString()}`;const a=yo(e[0]),o=Math.tan(a);function s(x){if(!x)return!1;const L=x.x,I=x.y,c={x:0,y:0};return c.x=be(L),c.y=be(I+o*L),c}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function yo(t){return Math.PI/180*parseFloat(t)}function RE(t){let e,r;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(t,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);else throw console.warn("No XML document parser found."),r=new SyntaxError("No XML document parser found."),r;if(e.getElementsByTagName("parserError").length){const o=e.getElementsByTagName("div")[0].innerHTML;throw r=new SyntaxError(Oi(o)),r}return{name:e.documentElement.nodeName,attributes:ns(e.documentElement.attributes),content:rs(e.documentElement)}}function rs(t){const e=t.childNodes;if(e.length===0)return Oi(t.nodeValue);const r=[];let n,a,o;for(const s of e)n={},s.nodeName!=="#comment"&&(a=rs(s),o=ns(s.attributes),s.nodeName==="#text"&&JSON.stringify(o)==="{}"?n=Oi(a):(n.name=s.nodeName,n.attributes=o,n.content=a),n!==""&&r.push(n));return r}function ns(t){if(!t||!t.length)return{};const e={};for(const r of t)e[r.name]=Oi(r.value);return e}function Oi(t){try{return t=t.replace(/^\s+|\s+$/g,""),t.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}const yE=!1;function mE(t){let e=RE(t);return as(e)}function as(t){if(!(t!=null&&t.content))return[];let e=[];return t.content.forEach(r=>{const n=r.name.toLowerCase(),a=TE(r);if(IA[n]){let o=IA[n](r);a&&(o=IE(o,a)),e=e.concat(o)}}),e}const IA={circle:EA,ellipse:EA,path:LA,glyph:LA,polygon:cA,polyline:cA,rect:cE,g:as};function is(t){return t=t.replace(/\s+/g,","),t=t.replace(/e/gi,"e"),t=t.replace(/e-/g,"~~~"),t=t.replace(/-/g,",-"),t=t.replace(/~~~/g,"e-"),t=t.replace(/e\+/g,"~~~"),t=t.replace(/\+/g,","),t=t.replace(/~~~/g,"e+"),t=t.replace(/,+/g,","),t}function z0(t=""){let e=[];return t.charAt(0)===","&&(t=t.substring(1)),t.charAt(t.length-1)===","&&(t=t.substring(0,t.length-1)),t.length>0&&(t=t.split(","),t.forEach(r=>{if(r=r.split("."),r.length===1)e.push(Number(r[0]));else if(r.length===2)e.push(Number(r.join(".")));else if(r.length>2){e.push(+`${r[0]}.${r[1]}`);for(let n=2;n<r.length;n++)e.push(+`0.${r[n]}`)}})),e}function be(t){return t=NE(t),t=os(t,yE),t}function os(t,e=!1){return t?e===!1?parseFloat(t):(t=parseFloat(t),+(Math.round(`${t}e${e}`)+`e-${e}`)||0):0}function NE(t){const e=String(t);return(e.indexOf("00000")>-1||e.indexOf("99999")>-1)&&(t=os(t,5)),t}class Vr extends fr{constructor({x:e=0,y:r=0,parent:n=!1}={}){super(),this.parent=n,this.x=e,this.y=r,this.objType="Coord"}save(){return{x:nr(this.x),y:nr(this.y)}}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{`;return n+=`x: ${Tt(this._x)?this._x:"--"}  `,n+=`y: ${Tt(this._y)?this._y:"--"}`,n+="}",n}get x(){return isNaN(this._x)?(this._x=0,console.warn("Coord.x was NaN, setting to 0"),0):this._x}get y(){return isNaN(this._y)?(this._y=0,console.warn("Coord.y was NaN, setting to 0"),0):this._y}set x(e){e=nr(e),isNaN(e)?this._x=0:this._x=e,this.changed()}set y(e){e=nr(e),isNaN(e)?this._y=0:this._y=e,this.changed()}}const fE=Object.freeze(Object.defineProperty({__proto__:null,Coord:Vr},Symbol.toStringTag,{value:"Module"}));class we extends fr{constructor({coord:e={},use:r=!0,xLock:n=!1,yLock:a=!1,parent:o=!1,type:s=""}={}){super(),this.parent=o,this.coord=e,this.use=r,this.xLock=n,this.yLock=a,this.type=s,this.objType="ControlPoint"}save(e=!1){const r={coord:this.coord.save()};return this.use||(r.use=!1),this.xLock&&(r.xLock=!0),this.yLock&&(r.yLock=!0),e&&(r.objType=this.objType),this.type==="p"&&delete r.use,r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{ControlPoint
`;return r+="  ",n+=`${r}coord: ${this.coord.print(e+1)}
`,this.type!=="p"&&(n+=`${r}use: ${this.use}
`),n+=`${r.substring(2)}}`,n}get x(){return this.use?this.coord.x:this.parent.p.x}get y(){return this.use?this.coord.y:this.parent.p.y}get coord(){return(this==null?void 0:this._coord)||new Vr}get use(){return this._use!==!1}get xLock(){return this._xLock||!1}get yLock(){return this._yLock||!1}get type(){return this._type||"p"}set x(e){if(this.type==="p"){let r=e-this.x;this.parent?this.parent.updatePathPointPosition("p",r,0):this.coord.x=e}else this.coord.x=e,this.use=!0}set y(e){if(this.type==="p"){let r=e-this.y;this.parent?this.parent.updatePathPointPosition("p",0,r):this.coord.y=e}else this.coord.y=e,this.use=!0}set coord(e){this._coord=new Vr(e),this._coord.parent=this,this.use=!0}set use(e){this._use=!!e,this.changed()}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set type(e){this._type=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1)}rotate(e,r){Ni(this.coord,e,r)}}const DE=Object.freeze(Object.defineProperty({__proto__:null,ControlPoint:we},Symbol.toStringTag,{value:"Module"}));class _t extends fr{constructor({p:e,h1:r,h2:n,type:a="corner",parent:o=!1}={}){super(),this.parent=o,this.p=e,this.h1=r,this.h2=n,this.type=a,this.objType="PathPoint",this.hasOverlappingHandle("h1")&&(this.h1.use=!1),this.hasOverlappingHandle("h2")&&(this.h2.use=!1)}save(e=!1){const r={type:this.type,p:this.p.save(e)};return(this.h1.use||!this.h1.use&&!this.hasOverlappingHandle("h1"))&&(r.h1=this.h1.save(e)),(this.h2.use||!this.h2.use&&!this.hasOverlappingHandle("h2"))&&(r.h2=this.h2.save(e)),e&&(r.objType=this.objType),r}print(e=0,r=!1){let n="";for(let s=0;s<e;s++)n+="  ";let a=He(r)?` ${He(r)}`:"",o=`${n}{PathPoint${a}
`;return n+="  ",o+=`${n}type: ${this.type}
`,o+=`${n}p: ${this.p.print(e+1)}
`,o+=`${n}h1: ${this.h1.print(e+1)}
`,o+=`${n}h2: ${this.h2.print(e+1)}
`,o+=`${n.substring(2)}}/PathPoint${a}`,o}get p(){return this._p||new we}get h1(){return this._h1||new we}get h2(){return this._h2||new we}get type(){return this._type||"corner"}get xLock(){return this.p.xLock}get yLock(){return this.p.yLock}get name(){let e=this.pointNumber===!1?"-1":this.pointNumber;return`${this.parent.name}: Path Point ${e}`}get pointNumber(){if(!this.parent)return!1;const e=this.parent.pathPoints;if(!e)return!1;for(let r=0;r<e.length;r++)if(e[r]===this)return r;return!1}set p(e){e||(e=new we),e.type="p",this._p=new we(e),this._p.parent=this}set h1(e){let r=!1;e||(e=new we,r=!0),(!e.coord||r)&&(e.coord=new Vr({x:this.p.x-50,y:this.p.y}),e.use=!1),e.type="h1",this._h1=new we(e),this._h1.parent=this}set h2(e){let r=!1;e||(e=new we,r=!0),(!e.coord||r)&&(e.coord=new Vr({x:this.p.x+50,y:this.p.y}),e.use=!1),e.type="h2",this._h2=new we(e),this._h2.parent=this}set type(e){e==="symmetric"?this.makeSymmetric():e==="flat"?this.makeFlat():this._type="corner"}updatePathPointPosition(e="p",r=0,n=0){switch(r=He(r),n=He(n),r=Number.isFinite(r)?r:0,n=Number.isFinite(n)?n:0,e){case"p":this.p.coord.x+=r,this.p.coord.y+=n,this.h1.coord.x+=r,this.h1.coord.y+=n,this.h2.coord.x+=r,this.h2.coord.y+=n;break;case"h1":this.h1.coord.x+=r,this.h1.coord.y+=n,this.h1.use&&(this.type==="symmetric"?this.makeSymmetric("h1"):this.type==="flat"&&this.makeFlat("h1"));break;case"h2":this.h2.coord.x+=r,this.h2.coord.y+=n,this.h2.use&&(this.type==="symmetric"?this.makeSymmetric("h2"):this.type==="flat"&&this.makeFlat("h2"));break}}makeSymmetric(e=!1){if(this._type="symmetric",!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&St(this.p.coord,this.h1.coord)&&St(this.p.coord,this.h2.coord)))return this.h2.x-=200,this.h1.x+=200,this.h1.use=!0,this.h2.use=!0,this;this.h1.use=!0,this.h2.use=!0;let r,n,a=!1;switch(e){case"h1":r=this.p.x-this.h1.x+this.p.x,this.h2.x!==r&&(this.h2.x=r,a=!0),n=this.p.y-this.h1.y+this.p.y,this.h2.y!==n&&(this.h2.y=n,a=!0);break;case"h2":r=this.p.x-this.h2.x+this.p.x,this.h1.x!==r&&(this.h1.x=r,a=!0),n=this.p.y-this.h2.y+this.p.y,this.h1.y!==n&&(this.h1.y=n,a=!0);break}return this._type="symmetric",a&&(this.h1.use=!0,this.h2.use=!0),this}makeFlat(e=!1){if(this._type="flat",this.isFlat())return this;if(!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&St(this.p.coord,this.h1.coord)&&St(this.p.coord,this.h2.coord)))return this.h2.x-=300,this.h1.x+=100,this;this.h1.use=!0,this.h2.use=!0;const r=En(this.h1.coord,this.p.coord),n=En(this.h2.coord,this.p.coord),a=Zn(this.p.coord,this.h1.coord),o=Zn(this.p.coord,this.h2.coord);let s,x,L,I;return e==="h1"?(L=Math.cos(r)*o,I=Math.tan(r)*L,s=this.p.x+L*-1,x=this.p.y+I*-1,!isNaN(s)&&!isNaN(x)&&(this.h2.x!==s&&(this.h2.x=s),this.h2.y!==x&&(this.h2.y=x))):e==="h2"&&(L=Math.cos(n)*a,I=Math.tan(n)*L,s=this.p.x+L*-1,x=this.p.y+I*-1,!isNaN(s)&&!isNaN(x)&&(this.h1.x!==s&&(this.h1.x=s),this.h1.y!==x&&(this.h1.y=x))),this}isFlat(){if(!this.h1.use||!this.h2.use)return!1;if(this.p.x===this.h1.x&&this.p.x===this.h2.x||this.p.y===this.h1.y&&this.p.y===this.h2.y)return!0;const e=En(this.h1.coord,this.p.coord),r=En(this.h2.coord,this.p.coord);return ae(Math.abs(e)+Math.abs(r),2)===3.14}reconcileHandle(e="h1"){let r=e==="h1"?"h2":"h1";this.type==="symmetric"?this.makeSymmetric(r):this.type==="flat"&&this.makeFlat(r)}resolvePointType(){if(this.isFlat()){const e=Zn(this.p.coord,this.h1.coord),r=Zn(this.p.coord,this.h2.coord);e===r?this._type="symmetric":this._type="flat"}else this._type="corner";return this.type}makePointedTo(e,r,n=0,a="h2",o=!1){const s=this.p.x-e,x=this.p.y-r,L=x>=0?-1:1,I=-1,c=Math.sqrt(s*s+x*x),C=Math.acos(s/c);return n=n||c/3,this[a].x=this.p.x+Math.cos(C)*n*I,this[a].y=this.p.y+Math.sin(C)*n*L,o||(this.type==="corner"?this.makeFlat(a):this.makeSymmetric(a)),this}hasOverlappingHandle(e){return!this[e]||!this[e].coord?!1:St(this[e].coord,this.p.coord)}rotate(e,r){return this.p.rotate(e,r),this.h1.rotate(e,r),this.h2.rotate(e,r),this}resetHandles(){return this.type="corner",this.h1.use=!0,this.h2.use=!0,this.h2.x=this.p.x-100,this.h2.y=this.p.y,this.h1.x=this.p.x+100,this.h1.y=this.p.y,this}roundAll(e=9){this.p.x=ae(this.p.x,e),this.p.y=ae(this.p.y,e);let r=this.h1.use;this.h1.x=ae(this.h1.x,e),this.h1.y=ae(this.h1.y,e),this.h1.use=r;let n=this.h2.use;return this.h2.x=ae(this.h2.x,e),this.h2.y=ae(this.h2.y,e),this.h2.use=n,this}}const OE=Object.freeze(Object.defineProperty({__proto__:null,PathPoint:_t},Symbol.toStringTag,{value:"Module"}));class vr{constructor(e=0,r=0){e=parseFloat(""+e),this.x=isNaN(e)?0:e,r=parseFloat(""+r),this.y=isNaN(r)?0:r}}const BE=Object.freeze(Object.defineProperty({__proto__:null,XYPoint:vr},Symbol.toStringTag,{value:"Module"}));class jt extends fr{constructor({p1x:e=0,p1y:r=0,p2x:n,p2y:a,p3x:o,p3y:s,p4x:x=0,p4y:L=0,point1ID:I=!1,point2ID:c=!1}={}){super(),this.p1x=nr(e),this.p1y=nr(r),this.p4x=nr(x),this.p4y=nr(L),this.p2x=n===void 0?this.p1x:nr(n),this.p2y=a===void 0?this.p1y:nr(a),this.p3x=o===void 0?this.p4x:nr(o),this.p3y=s===void 0?this.p4y:nr(s),I&&(this.point1ID=I),c&&(this.point2ID=c),this.objType="Segment",this.recalculateMaxes()}save(e=!1){const r={p1x:this.p1x,p1y:this.p1y,p2x:this.p2x,p2y:this.p2y,p3x:this.p3x,p3y:this.p3y,p4x:this.p4x,p4y:this.p4y};return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Segment
`;return r+="  ",n+=`${r+"  "}line: ${this.lineType}
`,n+=`${r+"  "}p1: ${this.p1x}/${this.p1y}
`,n+=`${r+"  "}p2: ${this.p2x}/${this.p2y}
`,n+=`${r+"  "}p3: ${this.p3x}/${this.p3y}
`,n+=`${r+"  "}p4: ${this.p4x}/${this.p4y}
`,n+=`${r+"  "}maxes: ${this.maxes.print(e+1)}
`,n+=`${r.substring(2)}}`,n}get lineType(){return Tt(this._lineType)||this.determineLineType(),this._lineType}get length(){return this.cache.length?this.cache.length:(this.cache.length=this.calculateLength(),this.cache.length)}get baseLength(){return Sa(this.p1x,this.p1y,this.p4x,this.p4y)}get topLength(){const e=Sa(this.p1x,this.p1y,this.p2x,this.p2y),r=Sa(this.p2x,this.p2y,this.p3x,this.p3y),n=Sa(this.p3x,this.p3y,this.p4x,this.p4y);return e+r+n}get quickLength(){return Math.max(this.topLength,this.baseLength)}get maxes(){return(!this.cache.maxes||Ji(this.cache.maxes))&&this.recalculateMaxes(),new Kt(this.cache.maxes)}get valuesAsArray(){return[this.p1x,this.p1y,this.p2x,this.p2y,this.p3x,this.p3y,this.p4x,this.p4y]}set maxes(e){this.cache.maxes={},this.cache.maxes=new Kt(e)}split(e=.5){return typeof e=="object"&&Tt(e.x)&&Tt(e.y)?this.splitAtPoint(e):isNaN(e)?!1:this.splitAtTime(e)}splitAtPoint(e){if(this.containsTerminalPoint(e,.1))return!1;if(this.lineType==="horizontal"||this.lineType==="vertical"){let r,n,a=!1;return this.lineType==="horizontal"?ae(e.y,2)===ae(this.p1y,2)&&e.x>Math.min(this.p1x,this.p4x)&&e.x<Math.max(this.p1x,this.p4x)&&(r=e.x,n=this.p1y,a=!0):this.lineType==="vertical"&&ae(e.x,2)===ae(this.p1x,2)&&e.y>Math.min(this.p1y,this.p4y)&&e.y<Math.max(this.p1y,this.p4y)&&(r=this.p1x,n=e.y,a=!0),a?[new jt({p1x:this.p1x,p1y:this.p1y,p4x:r,p4y:n}),new jt({p1x:r,p1y:n,p4x:this.p4x,p4y:this.p4y})]:!1}else if(this.pointIsWithinMaxes(e)){const n=this.getSplitFromXYPoint(e,.1);if(n&&n.distance<.1)return this.splitAtTime(n.split)}return!1}splitAtTime(e=.5){const r=1-e,n=this.p1x*r+this.p2x*e,a=this.p1y*r+this.p2y*e,o=this.p2x*r+this.p3x*e,s=this.p2y*r+this.p3y*e,x=this.p3x*r+this.p4x*e,L=this.p3y*r+this.p4y*e,I=n*r+o*e,c=a*r+s*e,C=o*r+x*e,R=s*r+L*e,g=I*r+C*e,Y=c*r+R*e;return[new jt({p1x:this.p1x,p1y:this.p1y,p2x:n,p2y:a,p3x:I,p3y:c,p4x:g,p4y:Y}),new jt({p1x:g,p1y:Y,p2x:C,p2y:R,p3x:x,p3y:L,p4x:this.p4x,p4y:this.p4y})]}splitAtManyPoints(e,r=1){const n=[new jt(or(this))];let a;for(let o=0;o<e.length;o++)for(let s=0;s<n.length;s++)n[s].containsTerminalPoint(e[o],r)||(a=n[s].splitAtPoint(e[o]),a&&n.splice(s,1,a[0],a[1]));return n}pointIsWithinMaxes(e){const r=this.maxes;return e.x<=r.xMax&&e.x>=r.xMin&&e.y<=r.yMax&&e.y>=r.yMin}convertToLine(){return new jt({p1x:this.p1x,p1y:this.p1y,p4x:this.p4x,p4y:this.p4y})}getSplitFromXYPoint(e,r=1){const n=this.quickLength*1e3;let a=999999999,o={},s,x;for(let L=0;L<1;L+=1/n)if(s=this.findXYPointFromSplit(L),x=Math.sqrt((s.x-e.x)*(s.x-e.x)+(s.y-e.y)*(s.y-e.y)),x<a&&(a=x,o={split:L,distance:x,x:s.x,y:s.y},r&&o.distance<r))return o;return o}calculateLength(){if(this.lineType)return this.baseLength;let e;if(this.quickLength<10)return this.quickLength;{const n=this.split();return e=n[0].calculateLength()+n[1].calculateLength(),e}}findXYPointFromSplit(e=.5){const r=1-e,n=this.p1x*r+this.p2x*e,a=this.p1y*r+this.p2y*e,o=this.p2x*r+this.p3x*e,s=this.p2y*r+this.p3y*e,x=this.p3x*r+this.p4x*e,L=this.p3y*r+this.p4y*e,I=n*r+o*e,c=a*r+s*e,C=o*r+x*e,R=s*r+L*e,g=I*r+C*e,Y=c*r+R*e;return new vr(g,Y)}getReverse(){return new jt({p1x:this.p4x,p1y:this.p4y,p2x:this.p3x,p2y:this.p3y,p3x:this.p2x,p3y:this.p2y,p4x:this.p1x,p4y:this.p1y})}getXYPoint(e){return e===1?new vr(this.p1x,this.p1y):e===2?new vr(this.p2x,this.p2y):e===3?new vr(this.p3x,this.p3y):new vr(this.p4x,this.p4y)}getFastMaxes(){const e={xMin:Math.min(this.p1x,Math.min(this.p2x,Math.min(this.p3x,this.p4x))),yMin:Math.min(this.p1y,Math.min(this.p2y,Math.min(this.p3y,this.p4y))),xMax:Math.max(this.p1x,Math.max(this.p2x,Math.max(this.p3x,this.p4x))),yMax:Math.max(this.p1y,Math.max(this.p2y,Math.max(this.p3y,this.p4y)))};return new Kt(e)}recalculateMaxes(){function e(_,ee){_.xMin>ee?_.xMin=ee:_.xMax<ee&&(_.xMax=ee)}function r(_,ee){_.yMin>ee?_.yMin=ee:_.yMax<ee&&(_.yMax=ee)}function n(_,ee,q,ce,Te){const oe=1-_;return oe*oe*oe*ee+3*oe*oe*_*q+3*oe*_*_*ce+_*_*_*Te}const a={xMin:Math.min(this.p1x,this.p4x),yMin:Math.min(this.p1y,this.p4y),xMax:Math.max(this.p1x,this.p4x),yMax:Math.max(this.p1y,this.p4y)};if(this.lineType){this.maxes=new Kt(a);return}const o=this.p2x-this.p1x,s=this.p2y-this.p1y;let x=this.p3x-this.p2x,L=this.p3y-this.p2y;const I=this.p4x-this.p3x,c=this.p4y-this.p3y;let C,R,g,Y,w,V;(this.p2x<a.xMin||this.p2x>a.xMax||this.p3x<a.xMin||this.p3x>a.xMax)&&(o+I!==2*x&&(x+=.01),C=2*(o-x),R=2*(o-2*x+I),g=(2*x-2*o)*(2*x-2*o)-2*o*R,Y=Math.sqrt(g),w=(C+Y)/R,V=(C-Y)/R,0<w&&w<1&&e(a,n(w,this.p1x,this.p2x,this.p3x,this.p4x)),0<V&&V<1&&e(a,n(V,this.p1x,this.p2x,this.p3x,this.p4x))),(this.p2y<a.yMin||this.p2y>a.yMax||this.p3y<a.yMin||this.p3y>a.yMax)&&(s+c!==2*L&&(L+=.01),C=2*(s-L),R=2*(s-2*L+c),g=(2*L-2*s)*(2*L-2*s)-2*s*R,Y=Math.sqrt(g),w=(C+Y)/R,V=(C-Y)/R,0<w&&w<1&&r(a,n(w,this.p1y,this.p2y,this.p3y,this.p4y)),0<V&&V<1&&r(a,n(V,this.p1y,this.p2y,this.p3y,this.p4y))),this.maxes=new Kt(a)}isLineOverlappedByLine(e){if(!this.lineType||!e.lineType)return!1;const r=e.containsPointOnLine(this.getXYPoint(1)),n=e.containsPointOnLine(this.getXYPoint(4));return r&&n}containsTerminalPoint(e,r=1){return this.containsStartPoint(e,r)?"start":this.containsEndPoint(e,r)?"end":!1}containsStartPoint(e,r=1){return St(this.getXYPoint(1),e,r)}containsEndPoint(e,r=1){return St(this.getXYPoint(4),e,r)}containsPointOnCurve(e,r=.1){if(this.containsTerminalPoint(e,r))return!0;if(this.lineType)return this.containsPointOnLine(e);const n=this.getSplitFromXYPoint(e,r);return!!(n&&n.distance<r)}containsPointOnLine(e){if(!this.lineType||this.containsTerminalPoint(e))return!1;function r(n,a,o){return n<=a&&a<=o||o<=a&&a<=n}return!!(r(this.p1x,e.x,this.p4x)&&r(this.p1y,e.y,this.p4y)&&Si(this.getXYPoint(1),this.getXYPoint(4),e))}precedes(e,r=1){const n=this.getXYPoint(4),a=e.getXYPoint(1);return St(n,a,r)}determineLineType(e=1){let r=!1;const n=ae(this.p1x,e)===ae(this.p2x,e)&&ae(this.p1x,e)===ae(this.p3x,e)&&ae(this.p1x,e)===ae(this.p4x,e),a=ae(this.p1y,e)===ae(this.p2y,e)&&ae(this.p1y,e)===ae(this.p3y,e)&&ae(this.p1y,e)===ae(this.p4y,e),o=Si(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(2))&&Si(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(3));return n?r="vertical":a?r="horizontal":o&&(r="diagonal"),this._lineType=r,r}roundAll(e=3){return this.p1x=ae(this.p1x,e),this.p1y=ae(this.p1y,e),this.p2x=ae(this.p2x,e),this.p2y=ae(this.p2y,e),this.p3x=ae(this.p3x,e),this.p3y=ae(this.p3y,e),this.p4x=ae(this.p4x,e),this.p4y=ae(this.p4y,e),this}}function Sa(t,e,r,n){const a=Math.abs(t-r),o=Math.abs(e-n);return Math.sqrt(a*a+o*o)}function Si(t,e,r,n){n=Tt(n)?n:3;const a=(e.x-t.x)*(r.y-t.y),o=(r.x-t.x)*(e.y-t.y);return ae(a,n)===ae(o,n)}const HE=Object.freeze(Object.defineProperty({__proto__:null,Segment:jt,getLineLength:Sa,pointsAreCollinear:Si},Symbol.toStringTag,{value:"Module"}));class Oa extends fr{constructor({segments:e=[]}={}){super(),this.segments=e,this.objType="PolySegment"}save(e=!1){const r={segments:[]};for(let n=0;n<this._segments.length;n++)r.segments[n]=this._segments[n].save(e);return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{PolySegment
`;return r+="  ",n+=`${r}segments: [
`,this.segments.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${r}]
`,n+=`${r.substring(2)}}`,n}get segments(){return this._segments}set segments(e){this._segments=[];for(let r=0;r<e.length;r++)this._segments[r]=new jt(e[r])}get valuesAsArray(){let e=[];return this.segments.forEach(r=>e.push(r.valuesAsArray)),e}get path(){function e(x,L){const I={h1:{coord:{x:x.p3x,y:x.p3y}},p:{coord:{x:L.p1x,y:L.p1y}},h2:{coord:{x:L.p2x,y:L.p2y}}};return St(I.h1.coord,I.p.coord)&&(I.h1.use=!1),St(I.h2.coord,I.p.coord)&&(I.h2.use=!1),x.lineType&&(I.h1.use=!1),L.lineType&&(I.h2.use=!1),I}const r=[],n=or(this._segments),a=new vr(n[0].p1x,n[0].p1y),o=new vr(n.at(-1).p4x,n.at(-1).p4y);St(a,o)||n.push(new jt({p1x:o.x,p1y:o.y,p4x:a.x,p4y:a.y})),r.push(e(n.at(-1),n[0]));let s;for(let x=0;x<n.length-1;x++)s=n[x+1],r.push(e(n[x],s));return new Ar({pathPoints:r})}containsSegment(e){for(let r=0;r<this._segments.length;r++)if(J0(this._segments[r],e))return!0;return!1}roundAll(e=3){for(let r=0;r<this._segments.length;r++)this._segments[r].roundAll(e);return this}findIntersections(){let e,r,n=[];for(let a=0;a<this._segments.length;a++)for(let o=a;o<this._segments.length;o++)o!==a&&(e=new jt(this._segments[a]),r=new jt(this._segments[o]),n=n.concat(mo(e,r)));return n=n.filter(Mn),n}splitSegmentsAtIntersections(e=this.findIntersections(),r=1){let n,a;e.forEach(function(s,x){n=s.split("/")[0],a=s.split("/")[1],e[x]=new vr(n,a)});let o=[];for(let s=0;s<this._segments.length;s++)o=o.concat(this._segments[s].splitAtManyPoints(e,r));return this._segments=o,this.cache.splits=e,this}stitchSegmentsTogether(){const e=this.segments;let r=[];const n=[];function a(x){let L,I;for(let c=0;c<e.length;c++)if(L=e[c],L.objType==="Segment"&&L.containsStartPoint(x,0))return I=new jt(L),L.objType="-"+n.length+"."+r.length,I;for(let c=0;c<e.length;c++)if(L=e[c].getReverse(),e[c].objType==="Segment"&&L.containsStartPoint(x,0))return I=new jt(L),e[c].objType="R"+n.length+"."+r.length,I;return!1}function o(){for(let x=0;x<e.length;x++)if(e[x].objType==="Segment")return e[x].getXYPoint(1)}let s=o();for(let x=0;x<e.length;x++){let L=a(s);L?(r.push(L),s=L.getXYPoint(4)):r.length&&(n.push(new Oa({segments:r})),r[r.length-1].containsEndPoint(r[0].getXYPoint(1)),r=[],s=o(),x--)}return r.length&&(n.push(new Oa({segments:r})),r[r.length-1].containsEndPoint(r[0].getXYPoint(1))),n}removeZeroLengthSegments(){let e;for(let r=0;r<this._segments.length;r++)e=this._segments[r],St(e.getXYPoint(1),e.getXYPoint(4))&&(e.lineType?e.objType="LINE ZERO":St(e.getXYPoint(1),e.getXYPoint(2))&&St(e.getXYPoint(1),e.getXYPoint(3))&&(e.objType="ZERO"));return this._segments=this._segments.filter(function(r){return r.objType==="Segment"}),this}removeRedundantLineSegments(){for(let e=0;e<this._segments.length;e++)for(let r=0;r<this._segments.length;r++)if(e!==r&&this._segments[e]&&this._segments[r]){let n=this._segments[e],a=this._segments[r];n.isLineOverlappedByLine(a)&&(n.objType="REDUNDANT"),a.isLineOverlappedByLine(n)&&(a.objType="REDUNDANT"),a.objType==="Segment"&&n.objType==="Segment"&&J0(n,a)&&(n.objType="DUPLICATE")}return this._segments=this._segments.filter(function(e){return e.objType==="Segment"}),this}removeNonConnectingSegments(){let e,r;const n=[],a=[];for(let s=0;s<this._segments.length;s++){e=this._segments[s],n[s]=!1,a[s]=!1;for(let x=0;x<this._segments.length&&(r=this._segments[x],!(s!==x&&(r.containsTerminalPoint(e.getXYPoint(1),1)&&(n[s]=!0),r.containsTerminalPoint(e.getXYPoint(4),1)&&(a[s]=!0),n[s]&&a[s])));x++);}for(let s=0;s<this._segments.length;s++)n[s]&&a[s]||(this._segments[s].objType="NON CONNECTED");return this._segments=this._segments.filter(function(s){return s.objType==="Segment"}),this}combineInlineSegments(){let e,r;for(let n=0;n<this.segments.length;n++)e=this.segments[n],r=this.segments[n+1],n===this.segments.length-1&&(r=this.segments[0]),e.lineType===r.lineType&&(this.segments[n]=new jt({p1x:e.p1x,p1y:e.p1y,p4x:r.p4x,p4y:r.p4y}),this.segments.splice(n+1,1),n--)}}function mo(t,e,r=0){if(r===0){const V=As(t,e);if(V.length)return V}if(r===0){const V=ss(t,e);if(V.length)return V}let n=[];r===0&&(t.lineType||e.lineType)&&(n=ls(t,e));const a=t.getFastMaxes(),o=e.getFastMaxes();if(!Di(a,o))return[];const s=9e-4,x=3;let L=a.xMax-a.xMin,I=a.yMax-a.yMin,c=o.xMax-o.xMin,C=o.yMax-o.yMin;if(L<s&&I<s&&c<s&&C<s){L*=.5,I*=.5,c*=.5,C*=.5;let V=(a.xMin+L+(o.xMin+c))/2,_=(a.yMin+I+(o.yMin+C))/2;return V=ae(V,x),_=ae(_,x),[""+V+"/"+_]}let R=[];const g=t.splitAtTime(.5),Y=e.splitAtTime(.5);let w=[[g[0],Y[0]],[g[0],Y[1]],[g[1],Y[1]],[g[1],Y[0]]];return w=w.filter(function(V){return Di(V[0].getFastMaxes(),V[1].getFastMaxes(),"inclusive")}),w.forEach(function(V){R=R.concat(mo(V[0],V[1],r+1))}),R=R.concat(n),R=R.filter(Mn),R}function J0(t,e,r=1){if(St(t.getXYPoint(1),e.getXYPoint(1),r)&&St(t.getXYPoint(4),e.getXYPoint(4),r)){if(t.lineType&&e.lineType)return!0;if(St(t.getXYPoint(2),e.getXYPoint(2),r)&&St(t.getXYPoint(3),e.getXYPoint(3),r))return!0}return!1}function As(t,e){const r=[];return t.containsPointOnLine(e.getXYPoint(1))&&r.push(""+e.p1x+"/"+e.p1y),t.containsPointOnLine(e.getXYPoint(4))&&r.push(""+e.p4x+"/"+e.p4y),e.containsPointOnLine(t.getXYPoint(1))&&r.push(""+t.p1x+"/"+t.p1y),e.containsPointOnLine(t.getXYPoint(4))&&r.push(""+t.p4x+"/"+t.p4y),r.length,r}function ss(t,e){if(!t.lineType||!e.lineType)return[];const r=t.p4x-t.p1x,n=t.p4y-t.p1y,a=e.p4x-e.p1x,o=e.p4y-e.p1y,s=(-1*n*(t.p1x-e.p1x)+r*(t.p1y-e.p1y))/(-1*a*n+r*o),x=(a*(t.p1y-e.p1y)-o*(t.p1x-e.p1x))/(-1*a*n+r*o);if(s>=0&&s<=1&&x>=0&&x<=1){const L=nr(t.p1x+x*r),I=nr(t.p1y+x*n);return t.containsTerminalPoint({x:L,y:I})&&e.containsTerminalPoint({x:L,y:I})?[]:[""+L+"/"+I]}return[]}function ls(t,e){const r=t.getXYPoint(1),n=t.getXYPoint(4),a=e.getXYPoint(1),o=e.getXYPoint(4),s=[];return t.containsPointOnCurve(a)&&s.push(`${a.x}/${a.y}`),t.containsPointOnCurve(o)&&s.push(`${o.x}/${o.y}`),e.containsPointOnCurve(r)&&s.push(`${r.x}/${r.y}`),e.containsPointOnCurve(n)&&s.push(`${n.x}/${n.y}`),s}const FE=Object.freeze(Object.defineProperty({__proto__:null,PolySegment:Oa,findCrossingLineSegmentIntersections:ss,findEndPointSegmentIntersections:ls,findOverlappingLineSegmentIntersections:As,findSegmentIntersections:mo,segmentsAreEqual:J0},Symbol.toStringTag,{value:"Module"}));let Ar=class extends fr{constructor({name:e="Path",objType:r="Path",pathPoints:n=[],winding:a,xLock:o=!1,yLock:s=!1,wLock:x=!1,hLock:L=!1,transformOrigin:I="",ratioLock:c=!1,parent:C=!1}={}){super(),this.name=e,this.pathPoints=n,this.winding=a,this.xLock=o,this.yLock=s,this.wLock=x,this.hLock=L,this.transformOrigin=I,this.ratioLock=c,this.parent=C,this.link=!1,this.objType=r}save(e=!1){const r={name:this.name,winding:this.winding,pathPoints:[]};return this.xLock&&(r.xLock=!0),this.yLock&&(r.yLock=!0),this.wLock&&(r.wLock=!0),this.hLock&&(r.hLock=!0),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(r.transformOrigin=this.transformOrigin),this.ratioLock&&(r.ratioLock=!0),this.pathPoints.forEach(n=>{r.pathPoints.push(n.save(e))}),e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Path
`;return r+="  ",n+=`${r}winding: ${this.winding}
`,this.name!=="Path"&&(n+=`${r}name: ${this.name}
`),this.xLock&&(n+=`${r}xLock: ${this.xLock}
`),this.yLock&&(n+=`${r}yLock: ${this.yLock}
`),this.wLock&&(n+=`${r}wLock: ${this.wLock}
`),this.hLock&&(n+=`${r}hLock: ${this.hLock}
`),this.ratioLock&&(n+=`${r}ratioLock: ${this.ratioLock}
`),n+=`${r}pathPoints: [
`,this.pathPoints.forEach((a,o)=>{n+=a.print(e+2,o),n+=`
`}),n+=`${r}]
`,n+=`${r.substring(2)}}/Path`,n}get name(){return this._name||""}get pathPoints(){return this._pathPoints||[]}get winding(){return Tt(this._winding)||(this.findWinding?this.findWinding():this._winding=0),this._winding||0}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get xLock(){return!!this._xLock}get yLock(){return!!this._yLock}get wLock(){return!!this._wLock}get hLock(){return!!this._hLock}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin}get ratioLock(){return!!this._ratioLock}get maxes(){return this.cache.maxes?Ji(this.cache.maxes)?this.recalculateMaxes():go(this.cache.maxes)&&this.recalculateMaxes():this.recalculateMaxes(),new Kt(this.cache.maxes)}get svgPathData(){return this.cache.svgPathData?this.cache.svgPathData:(this.cache.svgPathData=this.makeSVGPathData(),this.cache.svgPathData)}set name(e){e=To(e),e!==""&&(this._name=e)}set pathPoints(e){if(this._pathPoints=[],e&&e.length)for(let r=0;r<e.length;r++)this._pathPoints[r]=new _t(e[r]),this._pathPoints[r].parent=this}set winding(e){Tt(e)?this._winding=e:this.findWinding()}set x(e){this.setShapePosition(e,!1)}set y(e){this.setShapePosition(!1,e)}set height(e){this.setShapeSize({height:e})}set width(e){this.setShapeSize({width:e})}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set wLock(e){this._wLock=!!e}set hLock(e){this._hLock=!!e}set transformOrigin(e){wa.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin="baseline-left"}set ratioLock(e){this._ratioLock=!!e}set maxes(e){this.cache.maxes={},this.cache.maxes=new Kt(e)}set svgPathData(e){this.cache.svgPathData=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:e==="width"?this.wLock:e==="height"?this.hLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0),e==="width"&&(this.wLock=!0),e==="height"&&(this.hLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1),e==="width"&&(this.wLock=!1),e==="height"&&(this.hLock=!1)}setShapeSize({width:e=!1,height:r=!1,ratioLock:n=!1,transformOrigin:a=!1}={}){e!==!1&&(e=He(e)),r!==!1&&(r=He(r));const o=e!==!1?e-this.width:0,s=r!==!1?r-this.height:0;return this.updateShapeSize({width:o,height:s,ratioLock:n,transformOrigin:a}),this}updateShapeSize({width:e=0,height:r=0,ratioLock:n=!1,transformOrigin:a=!1}={}){let o=He(e),s=He(r);if(!o&&!s)return;if(n&&o!==s){const V=this.width/this.height;Math.abs(o)>Math.abs(s)?s=o/V:o=s*V}let x=this.width;x===0&&(x=1);let L=this.height;L===0&&(L=1);const I=Math.max(x+o,1),c=Math.max(L+s,1),C=c/L,R=I/x;if(n&&(I<=1||c<=1))return;let g=uo(o,s,this.maxes,a),Y=this.maxes.xMin,w=this.maxes.yMin;this.pathPoints.forEach(V=>{V.p.coord.x=(V.p.coord.x-this.maxes.xMin)*R+Y,V.h1.coord.x=(V.h1.coord.x-this.maxes.xMin)*R+Y,V.h2.coord.x=(V.h2.coord.x-this.maxes.xMin)*R+Y,V.p.coord.y=(V.p.coord.y-this.maxes.yMin)*C+w,V.h1.coord.y=(V.h1.coord.y-this.maxes.yMin)*C+w,V.h2.coord.y=(V.h2.coord.y-this.maxes.yMin)*C+w}),this.updateShapePosition(g.deltaX,g.deltaY)}setShapePosition(e=!1,r=!1){e!==!1&&(e=He(e)),r!==!1&&(r=He(r));const n=e!==!1?e*1-this.maxes.xMin:0,a=r!==!1?r*1-this.maxes.yMax:0;this.updateShapePosition(n,a)}updateShapePosition(e=0,r=0){e=He(e),r=He(r);for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].updatePathPointPosition("p",e,r)}rotate(e,r=this.maxes.center){for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].rotate(e,r)}getNextPointNum(e=0){return e=He(e),e+=1,e=e%this.pathPoints.length,e}getPreviousPointNum(e=0){return e=He(e),e-=1,e<0&&(e=e+this.pathPoints.length),e}containsPoint(e,r){for(let n=0;n<this.pathPoints.length;n++)if(St(e,this.pathPoints[n].p,.01))if(r)r=!1;else return this.pathPoints[n];return!1}makeSVGPathData(e="not specified",r=8){if(!this.pathPoints||!this.pathPoints.length)return"";let n,a,o="",s="M"+ae(this.pathPoints[0].p.x,r)+","+ae(this.pathPoints[0].p.y,r);s.indexOf("NaN")>-1&&console.warn(e+" PathPoint 0 MOVE has NaN: "+s);for(let x=0;x<this.pathPoints.length;x++)n=this.pathPoints[x],a=this.pathPoints[this.getNextPointNum(x)],o=" C"+ae(n.h2.x,r)+","+ae(n.h2.y,r)+","+ae(a.h1.x,r)+","+ae(a.h1.y,r)+","+ae(a.p.x,r)+","+ae(a.p.y,r),o.indexOf("NaN")>-1&&console.warn(e+" PathPoint "+x+" has NaN: "+o),s+=o;return s+="Z",s}makePostScript(e=0,r=0){if(!this.pathPoints)return{re:"",lastX:e,lastY:r};let n,a,o,s,x,L,I,c,C="",R=`${this.pathPoints[0].p.x-e} ${this.pathPoints[0].p.y-r} rmoveto
		`;for(let g=0;g<this.pathPoints.length;g++)n=this.pathPoints[g],a=this.pathPoints[this.getNextPointNum(g)],o=n.h2.x-n.p.x,s=n.h2.y-n.p.y,x=a.h1.x-n.h2.x,L=a.h1.y-n.h2.y,I=a.p.x-a.h1.x,c=a.p.y-a.h1.y,C=`
					${o} ${s} ${x} ${L} ${I} ${c} rrcurveto
			`,R+=C;return{re:R.replaceAll("	",""),lastX:a.p.x,lastY:a.p.y}}makePolySegment(){const e=[];for(let n=0;n<this.pathPoints.length;n++)e.push(this.makeSegment(n));return new Oa({segments:e})}makeSegment(e=0){if(e=e%this.pathPoints.length,this.cache.segments||(this.cache.segments=[]),this.cache.segments[e])return this.cache.segments[e];const r=this.pathPoints[e];let n=Math.round(Math.random()*1e4);r.pointID||(r.pointID=`point-${e}-${n}`);const a=this.getNextPointNum(e),o=this.pathPoints[a];o.pointID||(o.pointID=`point-${a}-${n}`);const s=new jt({point1ID:r.pointID,p1x:r.p.x,p1y:r.p.y,p2x:r.h2.x,p2y:r.h2.y,p3x:o.h1.x,p3y:o.h1.y,p4x:o.p.x,p4y:o.p.y,point2ID:o.pointID});return this.cache.segments[e]=s,s}addPointsAtPathIntersections(){const e=this.makePolySegment();e.splitSegmentsAtIntersections();const r=e.path;this._pathPoints=r.pathPoints}calculateQuickSegmentLength(e=0){return this.makeSegment(e).quickLength}findWinding(e=!1){let r,n,a,o=-1;const s=this.pathPoints;if(s.length===2)o=s[1].p.x>s[0].p.x?-1:1;else if(s.length>2)for(let x=0;x<s.length;x++)r=(x+1)%s.length,n=(x+2)%s.length,a=(s[r].p.x-s[x].p.x)*(s[n].p.y-s[r].p.y),a-=(s[r].p.y-s[x].p.y)*(s[n].p.x-s[r].p.x),a<0?o--:a>0&&o++;return o===0&&!e&&(this.reverseWinding(),o=this.findWinding(!0)*-1,this.reverseWinding()),this._winding=o,o}reverseWinding(){let e;this.pathPoints&&(this.pathPoints.forEach(r=>{e=r.h1,r.h1=r.h2,r.h2=e}),this.pathPoints.reverse(),this.winding*=-1,(this.winding===0||!Tt(this.winding))&&this.findWinding(!0))}flipNS(e=this.maxes.center.y){this.pathPoints.forEach(r=>{r.p.coord.y+=(e-r.p.coord.y)*2,r.h1.coord.y+=(e-r.h1.coord.y)*2,r.h2.coord.y+=(e-r.h2.coord.y)*2}),this.reverseWinding()}flipEW(e=this.maxes.center.x){this.pathPoints.forEach(r=>{r.p.coord.x+=(e-r.p.coord.x)*2,r.h1.coord.x+=(e-r.h1.coord.x)*2,r.h2.coord.x+=(e-r.h2.coord.x)*2}),this.reverseWinding()}roundAll(e=0){return this.pathPoints.forEach(r=>r.roundAll(e)),this}addPathPoint(e){return e=new _t(e),e.parent=this,this.pathPoints.push(e),this.findWinding(),this.changed(),e}insertPathPoint(e=0,r=.5,n=!1){const a=this.pathPoints[e],o=this.getNextPointNum(e),s=this.pathPoints[o];let x,L,I,c;if(this.pathPoints.length>1){const C=this.makeSegment(e).split(r),R=C[0],g=C[1];x=new we({coord:{x:R.p4x,y:R.p4y}}),L=new we({coord:{x:R.p3x,y:R.p3y}}),I=new we({coord:{x:g.p2x,y:g.p2y}}),c=new _t({p:x,h1:L,h2:I}),a.type==="symmetric"&&(a.type="flat"),a.h2.x=R.p2x,a.h2.y=R.p2y,s.type==="symmetric"&&(s.type="flat"),s.h1.x=g.p3x,s.h1.y=g.p3y}else x=new we({coord:{x:a.p.x+100,y:a.p.y+100}}),L=new we({coord:{x:a.h2.x+100,y:a.h2.y+100}}),I=new we({coord:{x:a.h1.x+100,y:a.h1.y+100}}),c=new _t({p:x,h1:L,h2:I,type:a.type});return n&&c.roundAll(0),c.parent=this,this.pathPoints.splice(o,0,c),c}findClosestPointOnCurve(e=new vr,r=!1){let n=1e4,a=!1,o,s=999999999,x,L;for(let c=0;c<this.pathPoints.length;c++){n=this.makeSegment(c).quickLength*100;for(let C=0;C<1;C+=1/n)x=this.findXYPointFromSplit(C,c),L=Math.sqrt((x.x-e.x)*(x.x-e.x)+(x.y-e.y)*(x.y-e.y)),L<s&&(a&&a.point!==c&&(o=or(a)),s=L,a={point:c,split:C,distance:L,x:x.x,y:x.y})}return r?o:a}findXYPointFromSplit(e=.5,r=0){return this.pathPoints.length>1?this.makeSegment(r).findXYPointFromSplit(e):this.pathPoints[0].p}recalculateMaxes(){this.cache.maxes=new Kt,this.cache.segments||(this.cache.segments=[]);let e=this.pathPoints.map((r,n)=>this.makeSegment(n).maxes);this.cache.maxes=Da(e)}checkForNaN(){for(let e=0;e<this.pathPoints.length;e++){const r=this.pathPoints[e];if(isNaN(r.p.x)||isNaN(r.p.y)||isNaN(r.h1.x)||isNaN(r.h1.y)||isNaN(r.h2.x)||isNaN(r.h2.y))return!0}return!1}};const ME=Object.freeze(Object.defineProperty({__proto__:null,Path:Ar},Symbol.toStringTag,{value:"Module"}));let it=class extends fr{constructor({id:e="",parent:r=!1,objType:n="Glyph",name:a="",shapes:o=[],advanceWidth:s=0,transformOrigin:x="",ratioLock:L=!1,usedIn:I=[],gsub:c=[],contextCharacters:C=""}={}){if(super(),this.id=e,this.parent=r,this.objType=n,this.name=a,this.shapes=o,this.advanceWidth=s,this.transformOrigin=x,this.ratioLock=L,this.usedIn=I,this.gsub=c,this.contextCharacters=C,this.hasChangedThisSession=!1,this.wasCreatedThisSession=!0,this.id&&this.id.startsWith("liga-")&&this.gsub.length===0){let R=this.id.split("-");R.shift(),this.gsub=R.map(g=>W1(g)?Number(g):g.codePointAt(0))}}save(e=!1){const r={id:this.id};this.advanceWidth!==0&&(r.advanceWidth=this.advanceWidth),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(r.transformOrigin=this.transformOrigin),this.ratioLock!==!1&&(r.ratioLock=this.ratioLock),this.usedIn.length&&(r.usedIn=this.usedIn),this.gsub.length&&(r.gsub=this.gsub);let n=this.contextCharacters;if(n.length&&n!==this.char&&(r.contextCharacters=n),this.shapes&&this.shapes.length){r.shapes=[];for(let a=0;a<this.shapes.length;a++)r.shapes.push(this.shapes[a].save(e))}return e&&(r.objType=this.objType,r.name=this.name),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Glyph
`;return r+="  ",n+=`${r}id: ${this.id}
`,n+=`${r}name: ${this.name}
`,this.advanceWidth!==0&&(n+=`${r}advanceWidth: ${this.advanceWidth}
`),this.transformOrigin!==!1&&(n+=`${r}transformOrigin: ${this.transformOrigin}
`),this.ratioLock!==!1&&(n+=`${r}ratioLock: ${this.ratioLock}
`),this.usedIn.length&&(n+=`${r}usedIn: ${JSON.stringify(this.usedIn)}
`),this.gsub.length&&(n+=`${r}gsub: ${JSON.stringify(this.gsub)}
`),this.shapes&&this.shapes.length?(n+=`${r}shapes: [
`,this.shapes.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${r}]
`):n+=`${r}shapes: []
`,this.maxes&&(n+=`${r}maxes: ${this.maxes.print(e+1)}
`),n+=`${r.substring(2)}}/Glyph ${this.id}`,n}get shapes(){return this._shapes||[]}get advanceWidth(){return this._advanceWidth||0}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin||""}get ratioLock(){return this._ratioLock||!1}get usedIn(){return this._usedIn||[]}get gsub(){return this._gsub||[]}get contextCharacters(){return!this._contextCharacters||this._contextCharacters===this.char?this.char:this._contextCharacters}get sessionState(){return this.hasChangedThisSession===!0?"changed":this.wasCreatedThisSession===!0?"new":"old"}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get leftSideBearing(){return this.maxes.xMin}get rightSideBearing(){let e=this.maxes.xMax;return this.advanceWidth-e}get name(){let e=this._name;if(!e&&!this.id)return"[no id]";if(!e){if(this.id.startsWith("liga-")){let n=pr(this.id,"liga-").split("-");e="Ligature ",n.forEach(a=>{a.length===1?e+=a:e+=Rr(a)})}else if(this.id.startsWith("comp-"))e=`Component ${pr(this.id,"comp-")}`;else if(this.id.startsWith("glyph-")){let r=pr(this.id,"glyph-");e=la(r)}this._name=e}return e}get char(){let e;return this.gsub.length?e=this.gsub.reduce((r,n)=>`${r}${String.fromCodePoint(n)}`,""):e=Rr(pr(this.id,"glyph-")),e}get chars(){return this.char}get contentType(){if(this.cache.contentType)return this.cache.contentType;let e="unknown",r=0,n=0;return this.shapes.forEach(a=>{a.objType==="ComponentInstance"&&n++,a.objType==="Path"&&r++}),r>0&&n===0&&(e="paths"),n>0&&r===0&&(e="component instances"),r>0&&n>0&&(e="items"),this.cache.contentType=e,e}get pointCount(){let e=0;return this.shapes.forEach(r=>{r.objType==="ComponentInstance"?e+=r.pointCount:r.pathPoints.forEach(n=>{var a,o;e++,(a=n==null?void 0:n.h1)!=null&&a.use&&e++,(o=n==null?void 0:n.h2)!=null&&o.use&&e++})}),e}set shapes(e){this._shapes=[],e&&e.length&&e.forEach(r=>{this.addOneShape(r)}),this.changed()}addOneShape(e={}){if(e)return Array.isArray(this._shapes)||(this._shapes=[]),e!=null&&e.link?(e.parent=this,this._shapes.push(new Qr(e))):(e.parent=this,this._shapes.push(new Ar(e))),this.changed(),this._shapes.at(-1)}set advanceWidth(e){this._advanceWidth=He(e),isNaN(this._advanceWidth)&&(this._advanceWidth=0)}set transformOrigin(e){wa.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin=!1}set ratioLock(e){this._ratioLock=!!e}set usedIn(e){this._usedIn=e||[]}set gsub(e){this._gsub=e||[]}set contextCharacters(e){!e||e===this.char||typeof e!="string"?delete this._contextCharacters:this._contextCharacters=e}set name(e){this._name=e}set x(e){this.setGlyphPosition(e,!1)}set y(e){this.setGlyphPosition(!1,e)}set width(e){this.setGlyphSize({width:e})}set height(e){this.setGlyphSize({height:e})}set leftSideBearing(e){let r=e-this.leftSideBearing;this.setGlyphPosition(e),this.advanceWidth+=r}set rightSideBearing(e){let r=e-this.rightSideBearing;this.advanceWidth+=r}setGlyphPosition(e=!1,r=!1,n=!0){const a=this.maxes;e!==!1&&(e=He(e)),r!==!1&&(r=He(r));const o=e!==!1?e-a.xMin:0,s=r!==!1?r-a.yMax:0;this.updateGlyphPosition(o,s,n)}updateGlyphPosition(e=0,r=0,n=!0){e=He(e)||0,r=He(r)||0;for(let a=0;a<this.shapes.length;a++){const o=this.shapes[a];o.objType==="ComponentInstance"&&!n||o.updateShapePosition(e,r)}}setGlyphSize({width:e=!1,height:r=!1,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:o=""}={}){const s=this.maxes;e!==!1&&(e=He(e)),r!==!1&&(r=He(r));const x=s.yMax-s.yMin,L=s.xMax-s.xMin;let I=e!==!1?e-L:0,c=r!==!1?r-x:0;r=He(r),e=He(e),n&&(Math.abs(r)>Math.abs(e)?I=L*(r/x)-L:c=x*(e/L)-x),this.updateGlyphSize({width:I,height:c,updateComponentInstances:a,transformOrigin:o})}updateGlyphSize({width:e=0,height:r=0,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:o=""}={}){const s=this.maxes;let x=He(e)||0,L=He(r)||0;const I=s.width,c=s.height;let C=I+x,R=c+L;Math.abs(C)<1&&(C=1),Math.abs(R)<1&&(R=1);let g=R/c,Y=C/I;n&&(x!==0&&L===0?(g=Y,R=c*g,L=R-c):(Y=g,C=I*Y,x=C-I));const w=uo(x,L,this.maxes,o);this.shapes.forEach(V=>{if(V.objType==="ComponentInstance"&&!a)return;const _=V.maxes,ee=_.xMax-_.xMin,q=ee*Y;let ce=0;Y!==0&&(ce=q-ee);const Te=_.yMax-_.yMin,oe=Te*g;let Ie=0;g!==0&&(Ie=oe-Te),V.updateShapeSize({width:ce,height:Ie,transformOrigin:"bottom-left"});const de=_.xMin-s.xMin,De=de*Y;let We=0;Y!==0&&(We=De-de);const ke=_.yMin-s.yMin,At=ke*g;let st=0;g!==0&&(st=At-ke),V.updateShapePosition(We,st,!0)}),this.updateGlyphPosition(w.deltaX,w.deltaY)}flipNS(e=this.maxes.center.y){for(let r=0;r<this.shapes.length;r++)this.shapes[r].flipNS(e);return this}flipEW(e=this.maxes.center.x){for(let r=0;r<this.shapes.length;r++)this.shapes[r].flipEW(e);return this}roundAll(e=0){return this.shapes.forEach(r=>{r.roundAll&&r.roundAll(e)}),this}rotate(e,r){r=r||this.maxes.center;for(let n=0;n<this.shapes.length;n++)this.shapes[n].rotate(e,r);return this}reverseWinding(){for(let e=0;e<this.shapes.length;e++)this.shapes[e].reverseWinding();return this}get svgPathData(){var e;return(e=this==null?void 0:this.cache)!=null&&e.svgPathData||(this.cache.svgPathData=this.makeSVGPathData()),this.cache.svgPathData}makeSVGPathData(){let e="M0,0";return this.shapes.forEach(r=>{if(r.objType==="ComponentInstance"){const n=r.transformedGlyph;n&&(e+=n.svgPathData)}else e+=r.svgPathData,e+=" "}),Io(e)==="M0,0"&&(e="M0,0Z"),e}get maxes(){return this.cache.maxes?Ji(this.cache.maxes)?this.recalculateGlyphMaxes():go(this.cache.maxes)&&this.recalculateGlyphMaxes():this.recalculateGlyphMaxes(),this.cache.maxes}recalculateGlyphMaxes(){let e={xMax:0,xMin:0,yMax:0,yMin:0};return this.shapes&&this.shapes.length>0&&(e=Da(this.shapes.map(r=>r.maxes))),this.cache.maxes=new Kt(e),this.cache.maxes}};const GE=Object.freeze(Object.defineProperty({__proto__:null,Glyph:it},Symbol.toStringTag,{value:"Module"}));function Ba(t,e=!0){const r=mE(t);if(e&&r.length===0)return Er(`
			Could not find any SVG tags to import.
			Supported tags are: &lt;path&gt;, &lt;rect&gt;, &lt;polygon&gt;, &lt;polyline&gt;, and &lt;ellipse&gt;.`),new it;let n=0,a=[];r.forEach(s=>{if(s=s.filter(x=>!(x[0].x===x[3].x&&x[0].y===x[3].y&&x[1]===!1&&x[2]===!1)),s.length){n++;const x=s[0][0].x===s.at(-1)[3].x&&s[0][0].y===s.at(-1)[3].y;let L=new Ar({name:`Path ${n}`}),I;x||(I=new _t,I.p=new we({coord:new Vr({x:s[0][0].x,y:s[0][0].y})}),s[0][1]&&(I.h2=new we({coord:new Vr({x:s[0][1].x,y:s[0][1].y})})),L.addPathPoint(I));for(let c=0;c<s.length-1;c++)L.addPathPoint(dA(s[c],s[c+1]));x?L.addPathPoint(dA(s.at(-1),s[0])):(I=new _t,I.p=new we({coord:new Vr({x:s.at(-1)[3].x,y:s.at(-1)[3].y})}),s.at(-1)[2]&&(I.h1=new we({coord:new Vr({x:s.at(-1)[2].x,y:s.at(-1)[2].y})})),L.addPathPoint(I)),a.push(L)}});const o=new it({shapes:a});return o.changed(),o}function dA(t,e){t[3].x!==e[0].x||(t[3].y,e[0].y);let r=new _t;return r.p=new we({coord:{x:e[0].x,y:e[0].y}}),t[2]&&(r.h1=new we({coord:{x:t[2].x,y:t[2].y},use:!0})),e[1]&&(r.h2=new we({coord:{x:e[1].x,y:e[1].y},use:!0})),r}function Bi(t,e="SVG"){const r=Ba(t);if(r&&r.shapes.length){r.flipNS(),r.reverseWinding();const n=J(),a=kn(r,n.selectedItem);n.history.addState("Imported SVG to glyph "+n.selectedItem.name);const o=n.multiSelect.shapes;o.clear(),a.forEach(s=>o.add(s)),xe().settings.app.moveShapesOnSVGDragDrop&&o.setShapePosition(0,o.maxes.height),n.publish("currentItem",n.selectedItem),Ce(`Imported ${r.shapes.length} shapes from ${e}`)}else Ce("Could not import pasted SVG code.")}async function uA(t){var r;const e=t.clipboardData||window.clipboardData;if(e){let n=e.getData("Text");Bi(n,"<br>the operating system clipboard")}else if((r=navigator==null?void 0:navigator.clipboard)!=null&&r.readText)navigator.clipboard.readText().then(n=>{n?Bi(n,"<br>the operating system clipboard"):Ce("Could not import SVG from the operating system clipboard")});else{Ce("Could not import SVG from the operating system clipboard");return}}function PE(t){et(t);const r=t.dataTransfer.files[0];if(r!=null&&r.name){const n=r.name.split("."),a=n[n.length-1].toLowerCase(),o=new FileReader;a==="svg"?(o.onload=function(){Bi(o.result.toString(),"<br>from the dropped SVG file")},o.readAsText(r)):Ce("Only SVG files can be dropped on the canvas")}else Ce("Error reading file.")}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var t=function(){try{var r={},n=Object.defineProperty,a=n(r,r,r)&&n}catch{}return a}(),e=function(r){if(this==null)throw TypeError();var n=String(this),a=n.length,o=r?Number(r):0;if(o!=o&&(o=0),!(o<0||o>=a)){var s=n.charCodeAt(o),x;return s>=55296&&s<=56319&&a>o+1&&(x=n.charCodeAt(o+1),x>=56320&&x<=57343)?(s-55296)*1024+x-56320+65536:s}};t?t(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}();var No=0,xs=-3;function Ha(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function bE(t,e){this.source=t,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new Ha,this.dtree=new Ha}var Es=new Ha,Ls=new Ha,fo=new Uint8Array(30),Do=new Uint16Array(30),hs=new Uint8Array(30),cs=new Uint16Array(30),vE=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pA=new Ha,Hr=new Uint8Array(320);function Ts(t,e,r,n){var a,o;for(a=0;a<r;++a)t[a]=0;for(a=0;a<30-r;++a)t[a+r]=a/r|0;for(o=n,a=0;a<30;++a)e[a]=o,o+=1<<t[a]}function UE(t,e){var r;for(r=0;r<7;++r)t.table[r]=0;for(t.table[7]=24,t.table[8]=152,t.table[9]=112,r=0;r<24;++r)t.trans[r]=256+r;for(r=0;r<144;++r)t.trans[24+r]=r;for(r=0;r<8;++r)t.trans[168+r]=280+r;for(r=0;r<112;++r)t.trans[176+r]=144+r;for(r=0;r<5;++r)e.table[r]=0;for(e.table[5]=32,r=0;r<32;++r)e.trans[r]=r}var SA=new Uint16Array(16);function I0(t,e,r,n){var a,o;for(a=0;a<16;++a)t.table[a]=0;for(a=0;a<n;++a)t.table[e[r+a]]++;for(t.table[0]=0,o=0,a=0;a<16;++a)SA[a]=o,o+=t.table[a];for(a=0;a<n;++a)e[r+a]&&(t.trans[SA[e[r+a]]++]=a)}function wE(t){t.bitcount--||(t.tag=t.source[t.sourceIndex++],t.bitcount=7);var e=t.tag&1;return t.tag>>>=1,e}function br(t,e,r){if(!e)return r;for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var n=t.tag&65535>>>16-e;return t.tag>>>=e,t.bitcount-=e,n+r}function Z0(t,e){for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var r=0,n=0,a=0,o=t.tag;do n=2*n+(o&1),o>>>=1,++a,r+=e.table[a],n-=e.table[a];while(n>=0);return t.tag=o,t.bitcount-=a,e.trans[r+n]}function YE(t,e,r){var n,a,o,s,x,L;for(n=br(t,5,257),a=br(t,5,1),o=br(t,4,4),s=0;s<19;++s)Hr[s]=0;for(s=0;s<o;++s){var I=br(t,3,0);Hr[vE[s]]=I}for(I0(pA,Hr,0,19),x=0;x<n+a;){var c=Z0(t,pA);switch(c){case 16:var C=Hr[x-1];for(L=br(t,2,3);L;--L)Hr[x++]=C;break;case 17:for(L=br(t,3,3);L;--L)Hr[x++]=0;break;case 18:for(L=br(t,7,11);L;--L)Hr[x++]=0;break;default:Hr[x++]=c;break}}I0(e,Hr,0,n),I0(r,Hr,n,a)}function CA(t,e,r){for(;;){var n=Z0(t,e);if(n===256)return No;if(n<256)t.dest[t.destLen++]=n;else{var a,o,s,x;for(n-=257,a=br(t,fo[n],Do[n]),o=Z0(t,r),s=t.destLen-br(t,hs[o],cs[o]),x=s;x<s+a;++x)t.dest[t.destLen++]=t.dest[x]}}}function WE(t){for(var e,r,n;t.bitcount>8;)t.sourceIndex--,t.bitcount-=8;if(e=t.source[t.sourceIndex+1],e=256*e+t.source[t.sourceIndex],r=t.source[t.sourceIndex+3],r=256*r+t.source[t.sourceIndex+2],e!==(~r&65535))return xs;for(t.sourceIndex+=4,n=e;n;--n)t.dest[t.destLen++]=t.source[t.sourceIndex++];return t.bitcount=0,No}function kE(t,e){var r=new bE(t,e),n,a,o;do{switch(n=wE(r),a=br(r,2,0),a){case 0:o=WE(r);break;case 1:o=CA(r,Es,Ls);break;case 2:YE(r,r.ltree,r.dtree),o=CA(r,r.ltree,r.dtree);break;default:o=xs}if(o!==No)throw new Error("Data error")}while(!n);return r.destLen<r.dest.length?typeof r.dest.slice=="function"?r.dest.slice(0,r.destLen):r.dest.subarray(0,r.destLen):r.dest}UE(Es,Ls);Ts(fo,Do,4,3);Ts(hs,cs,2,1);fo[28]=0;Do[28]=258;var KE=kE;function Vn(t,e,r,n,a){return Math.pow(1-a,3)*t+3*Math.pow(1-a,2)*a*e+3*(1-a)*Math.pow(a,2)*r+Math.pow(a,3)*n}function $r(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}$r.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};$r.prototype.addPoint=function(t,e){typeof t=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};$r.prototype.addX=function(t){this.addPoint(t,null)};$r.prototype.addY=function(t){this.addPoint(null,t)};$r.prototype.addBezier=function(t,e,r,n,a,o,s,x){var L=[t,e],I=[r,n],c=[a,o],C=[s,x];this.addPoint(t,e),this.addPoint(s,x);for(var R=0;R<=1;R++){var g=6*L[R]-12*I[R]+6*c[R],Y=-3*L[R]+9*I[R]-9*c[R]+3*C[R],w=3*I[R]-3*L[R];if(Y===0){if(g===0)continue;var V=-w/g;0<V&&V<1&&(R===0&&this.addX(Vn(L[R],I[R],c[R],C[R],V)),R===1&&this.addY(Vn(L[R],I[R],c[R],C[R],V)));continue}var _=Math.pow(g,2)-4*w*Y;if(!(_<0)){var ee=(-g+Math.sqrt(_))/(2*Y);0<ee&&ee<1&&(R===0&&this.addX(Vn(L[R],I[R],c[R],C[R],ee)),R===1&&this.addY(Vn(L[R],I[R],c[R],C[R],ee)));var q=(-g-Math.sqrt(_))/(2*Y);0<q&&q<1&&(R===0&&this.addX(Vn(L[R],I[R],c[R],C[R],q)),R===1&&this.addY(Vn(L[R],I[R],c[R],C[R],q)))}}};$r.prototype.addQuad=function(t,e,r,n,a,o){var s=t+.6666666666666666*(r-t),x=e+2/3*(n-e),L=s+1/3*(a-t),I=x+1/3*(o-e);this.addBezier(t,e,s,x,L,I,a,o)};function Mt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Mt.prototype.moveTo=function(t,e){this.commands.push({type:"M",x:t,y:e})};Mt.prototype.lineTo=function(t,e){this.commands.push({type:"L",x:t,y:e})};Mt.prototype.curveTo=Mt.prototype.bezierCurveTo=function(t,e,r,n,a,o){this.commands.push({type:"C",x1:t,y1:e,x2:r,y2:n,x:a,y:o})};Mt.prototype.quadTo=Mt.prototype.quadraticCurveTo=function(t,e,r,n){this.commands.push({type:"Q",x1:t,y1:e,x:r,y:n})};Mt.prototype.close=Mt.prototype.closePath=function(){this.commands.push({type:"Z"})};Mt.prototype.extend=function(t){if(t.commands)t=t.commands;else if(t instanceof $r){var e=t;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,t)};Mt.prototype.getBoundingBox=function(){for(var t=new $r,e=0,r=0,n=0,a=0,o=0;o<this.commands.length;o++){var s=this.commands[o];switch(s.type){case"M":t.addPoint(s.x,s.y),e=n=s.x,r=a=s.y;break;case"L":t.addPoint(s.x,s.y),n=s.x,a=s.y;break;case"Q":t.addQuad(n,a,s.x1,s.y1,s.x,s.y),n=s.x,a=s.y;break;case"C":t.addBezier(n,a,s.x1,s.y1,s.x2,s.y2,s.x,s.y),n=s.x,a=s.y;break;case"Z":n=e,a=r;break;default:throw new Error("Unexpected path command "+s.type)}}return t.isEmpty()&&t.addPoint(0,0),t};Mt.prototype.draw=function(t){t.beginPath();for(var e=0;e<this.commands.length;e+=1){var r=this.commands[e];r.type==="M"?t.moveTo(r.x,r.y):r.type==="L"?t.lineTo(r.x,r.y):r.type==="C"?t.bezierCurveTo(r.x1,r.y1,r.x2,r.y2,r.x,r.y):r.type==="Q"?t.quadraticCurveTo(r.x1,r.y1,r.x,r.y):r.type==="Z"&&t.closePath()}this.fill&&(t.fillStyle=this.fill,t.fill()),this.stroke&&(t.strokeStyle=this.stroke,t.lineWidth=this.strokeWidth,t.stroke())};Mt.prototype.toPathData=function(t){t=t!==void 0?t:2;function e(s){return Math.round(s)===s?""+Math.round(s):s.toFixed(t)}function r(){for(var s=arguments,x="",L=0;L<arguments.length;L+=1){var I=s[L];I>=0&&L>0&&(x+=" "),x+=e(I)}return x}for(var n="",a=0;a<this.commands.length;a+=1){var o=this.commands[a];o.type==="M"?n+="M"+r(o.x,o.y):o.type==="L"?n+="L"+r(o.x,o.y):o.type==="C"?n+="C"+r(o.x1,o.y1,o.x2,o.y2,o.x,o.y):o.type==="Q"?n+="Q"+r(o.x1,o.y1,o.x,o.y):o.type==="Z"&&(n+="Z")}return n};Mt.prototype.toSVG=function(t){var e='<path d="';return e+=this.toPathData(t),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};Mt.prototype.toDOMElement=function(t){var e=this.toPathData(t),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",e),r};function Is(t){throw new Error(t)}function gA(t,e){t||Is(e)}var Ge={fail:Is,argument:gA,assert:gA},RA=32768,yA=2147483648,na={},Se={},Pe={};function Dr(t){return function(){return t}}Se.BYTE=function(t){return Ge.argument(t>=0&&t<=255,"Byte value should be between 0 and 255."),[t]};Pe.BYTE=Dr(1);Se.CHAR=function(t){return[t.charCodeAt(0)]};Pe.CHAR=Dr(1);Se.CHARARRAY=function(t){typeof t>"u"&&(t="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],r=0;r<t.length;r+=1)e[r]=t.charCodeAt(r);return e};Pe.CHARARRAY=function(t){return typeof t>"u"?0:t.length};Se.USHORT=function(t){return[t>>8&255,t&255]};Pe.USHORT=Dr(2);Se.SHORT=function(t){return t>=RA&&(t=-(2*RA-t)),[t>>8&255,t&255]};Pe.SHORT=Dr(2);Se.UINT24=function(t){return[t>>16&255,t>>8&255,t&255]};Pe.UINT24=Dr(3);Se.ULONG=function(t){return[t>>24&255,t>>16&255,t>>8&255,t&255]};Pe.ULONG=Dr(4);Se.LONG=function(t){return t>=yA&&(t=-(2*yA-t)),[t>>24&255,t>>16&255,t>>8&255,t&255]};Pe.LONG=Dr(4);Se.FIXED=Se.ULONG;Pe.FIXED=Pe.ULONG;Se.FWORD=Se.SHORT;Pe.FWORD=Pe.SHORT;Se.UFWORD=Se.USHORT;Pe.UFWORD=Pe.USHORT;Se.LONGDATETIME=function(t){return[0,0,0,0,t>>24&255,t>>16&255,t>>8&255,t&255]};Pe.LONGDATETIME=Dr(8);Se.TAG=function(t){return Ge.argument(t.length===4,"Tag should be exactly 4 ASCII characters."),[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]};Pe.TAG=Dr(4);Se.Card8=Se.BYTE;Pe.Card8=Pe.BYTE;Se.Card16=Se.USHORT;Pe.Card16=Pe.USHORT;Se.OffSize=Se.BYTE;Pe.OffSize=Pe.BYTE;Se.SID=Se.USHORT;Pe.SID=Pe.USHORT;Se.NUMBER=function(t){return t>=-107&&t<=107?[t+139]:t>=108&&t<=1131?(t=t-108,[(t>>8)+247,t&255]):t>=-1131&&t<=-108?(t=-t-108,[(t>>8)+251,t&255]):t>=-32768&&t<=32767?Se.NUMBER16(t):Se.NUMBER32(t)};Pe.NUMBER=function(t){return Se.NUMBER(t).length};Se.NUMBER16=function(t){return[28,t>>8&255,t&255]};Pe.NUMBER16=Dr(3);Se.NUMBER32=function(t){return[29,t>>24&255,t>>16&255,t>>8&255,t&255]};Pe.NUMBER32=Dr(5);Se.REAL=function(t){var e=t.toString(),r=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(r){var n=parseFloat("1e"+((r[2]?+r[2]:0)+r[1].length));e=(Math.round(t*n)/n).toString()}for(var a="",o=0,s=e.length;o<s;o+=1){var x=e[o];x==="e"?a+=e[++o]==="-"?"c":"b":x==="."?a+="a":x==="-"?a+="e":a+=x}a+=a.length&1?"f":"ff";for(var L=[30],I=0,c=a.length;I<c;I+=2)L.push(parseInt(a.substr(I,2),16));return L};Pe.REAL=function(t){return Se.REAL(t).length};Se.NAME=Se.CHARARRAY;Pe.NAME=Pe.CHARARRAY;Se.STRING=Se.CHARARRAY;Pe.STRING=Pe.CHARARRAY;na.UTF8=function(t,e,r){for(var n=[],a=r,o=0;o<a;o++,e+=1)n[o]=t.getUint8(e);return String.fromCharCode.apply(null,n)};na.UTF16=function(t,e,r){for(var n=[],a=r/2,o=0;o<a;o++,e+=2)n[o]=t.getUint16(e);return String.fromCharCode.apply(null,n)};Se.UTF16=function(t){for(var e=[],r=0;r<t.length;r+=1){var n=t.charCodeAt(r);e[e.length]=n>>8&255,e[e.length]=n&255}return e};Pe.UTF16=function(t){return t.length*2};var X0={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};na.MACSTRING=function(t,e,r,n){var a=X0[n];if(a!==void 0){for(var o="",s=0;s<r;s++){var x=t.getUint8(e+s);x<=127?o+=String.fromCharCode(x):o+=a[x&127]}return o}};var xi=typeof WeakMap=="function"&&new WeakMap,Ei,_E=function(t){if(!Ei){Ei={};for(var e in X0)Ei[e]=new String(e)}var r=Ei[t];if(r!==void 0){if(xi){var n=xi.get(r);if(n!==void 0)return n}var a=X0[t];if(a!==void 0){for(var o={},s=0;s<a.length;s++)o[a.charCodeAt(s)]=s+128;return xi&&xi.set(r,o),o}}};Se.MACSTRING=function(t,e){var r=_E(e);if(r!==void 0){for(var n=[],a=0;a<t.length;a++){var o=t.charCodeAt(a);if(o>=128&&(o=r[o],o===void 0))return;n[a]=o}return n}};Pe.MACSTRING=function(t,e){var r=Se.MACSTRING(t,e);return r!==void 0?r.length:0};function j0(t){return t>=-128&&t<=127}function VE(t,e,r){for(var n=0,a=t.length;e<a&&n<64&&t[e]===0;)++e,++n;return r.push(128|n-1),e}function zE(t,e,r){for(var n=0,a=t.length,o=e;o<a&&n<64;){var s=t[o];if(!j0(s)||s===0&&o+1<a&&t[o+1]===0)break;++o,++n}r.push(n-1);for(var x=e;x<o;++x)r.push(t[x]+256&255);return o}function JE(t,e,r){for(var n=0,a=t.length,o=e;o<a&&n<64;){var s=t[o];if(s===0||j0(s)&&o+1<a&&j0(t[o+1]))break;++o,++n}r.push(64|n-1);for(var x=e;x<o;++x){var L=t[x];r.push(L+65536>>8&255,L+256&255)}return o}Se.VARDELTAS=function(t){for(var e=0,r=[];e<t.length;){var n=t[e];n===0?e=VE(t,e,r):n>=-128&&n<=127?e=zE(t,e,r):e=JE(t,e,r)}return r};Se.INDEX=function(t){for(var e=1,r=[e],n=[],a=0;a<t.length;a+=1){var o=Se.OBJECT(t[a]);Array.prototype.push.apply(n,o),e+=o.length,r.push(e)}if(n.length===0)return[0,0];for(var s=[],x=1+Math.floor(Math.log(e)/Math.log(2))/8|0,L=[void 0,Se.BYTE,Se.USHORT,Se.UINT24,Se.ULONG][x],I=0;I<r.length;I+=1){var c=L(r[I]);Array.prototype.push.apply(s,c)}return Array.prototype.concat(Se.Card16(t.length),Se.OffSize(x),s,n)};Pe.INDEX=function(t){return Se.INDEX(t).length};Se.DICT=function(t){for(var e=[],r=Object.keys(t),n=r.length,a=0;a<n;a+=1){var o=parseInt(r[a],0),s=t[o];e=e.concat(Se.OPERAND(s.value,s.type)),e=e.concat(Se.OPERATOR(o))}return e};Pe.DICT=function(t){return Se.DICT(t).length};Se.OPERATOR=function(t){return t<1200?[t]:[12,t-1200]};Se.OPERAND=function(t,e){var r=[];if(Array.isArray(e))for(var n=0;n<e.length;n+=1)Ge.argument(t.length===e.length,"Not enough arguments given for type"+e),r=r.concat(Se.OPERAND(t[n],e[n]));else if(e==="SID")r=r.concat(Se.NUMBER(t));else if(e==="offset")r=r.concat(Se.NUMBER32(t));else if(e==="number")r=r.concat(Se.NUMBER(t));else if(e==="real")r=r.concat(Se.REAL(t));else throw new Error("Unknown operand type "+e);return r};Se.OP=Se.BYTE;Pe.OP=Pe.BYTE;var Li=typeof WeakMap=="function"&&new WeakMap;Se.CHARSTRING=function(t){if(Li){var e=Li.get(t);if(e!==void 0)return e}for(var r=[],n=t.length,a=0;a<n;a+=1){var o=t[a];r=r.concat(Se[o.type](o.value))}return Li&&Li.set(t,r),r};Pe.CHARSTRING=function(t){return Se.CHARSTRING(t).length};Se.OBJECT=function(t){var e=Se[t.type];return Ge.argument(e!==void 0,"No encoding function for type "+t.type),e(t.value)};Pe.OBJECT=function(t){var e=Pe[t.type];return Ge.argument(e!==void 0,"No sizeOf function for type "+t.type),e(t.value)};Se.TABLE=function(t){for(var e=[],r=t.fields.length,n=[],a=[],o=0;o<r;o+=1){var s=t.fields[o],x=Se[s.type];Ge.argument(x!==void 0,"No encoding function for field type "+s.type+" ("+s.name+")");var L=t[s.name];L===void 0&&(L=s.value);var I=x(L);s.type==="TABLE"?(a.push(e.length),e=e.concat([0,0]),n.push(I)):e=e.concat(I)}for(var c=0;c<n.length;c+=1){var C=a[c],R=e.length;Ge.argument(R<65536,"Table "+t.tableName+" too big."),e[C]=R>>8,e[C+1]=R&255,e=e.concat(n[c])}return e};Pe.TABLE=function(t){for(var e=0,r=t.fields.length,n=0;n<r;n+=1){var a=t.fields[n],o=Pe[a.type];Ge.argument(o!==void 0,"No sizeOf function for field type "+a.type+" ("+a.name+")");var s=t[a.name];s===void 0&&(s=a.value),e+=o(s),a.type==="TABLE"&&(e+=2)}return e};Se.RECORD=Se.TABLE;Pe.RECORD=Pe.TABLE;Se.LITERAL=function(t){return t};Pe.LITERAL=function(t){return t.length};function Vt(t,e,r){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var n=0;n<e.length;n+=1){var a=e[n];this[a.name]=a.value}if(this.tableName=t,this.fields=e,r)for(var o=Object.keys(r),s=0;s<o.length;s+=1){var x=o[s],L=r[x];this[x]!==void 0&&(this[x]=L)}}Vt.prototype.encode=function(){return Se.TABLE(this)};Vt.prototype.sizeOf=function(){return Pe.TABLE(this)};function Fa(t,e,r){r===void 0&&(r=e.length);var n=new Array(e.length+1);n[0]={name:t+"Count",type:"USHORT",value:r};for(var a=0;a<e.length;a++)n[a+1]={name:t+a,type:"USHORT",value:e[a]};return n}function q0(t,e,r){var n=e.length,a=new Array(n+1);a[0]={name:t+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a[o+1]={name:t+o,type:"TABLE",value:r(e[o],o)};return a}function Ma(t,e,r){var n=e.length,a=[];a[0]={name:t+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a=a.concat(r(e[o],o));return a}function Hi(t){t.format===1?Vt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(Fa("glyph",t.glyphs))):t.format===2?Vt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(Ma("rangeRecord",t.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):Ge.assert(!1,"Coverage format must be 1 or 2.")}Hi.prototype=Object.create(Vt.prototype);Hi.prototype.constructor=Hi;function Fi(t){Vt.call(this,"scriptListTable",Ma("scriptRecord",t,function(e,r){var n=e.script,a=n.defaultLangSys;return Ge.assert(!!a,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+r,type:"TAG",value:e.tag},{name:"script"+r,type:"TABLE",value:new Vt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new Vt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:a.reqFeatureIndex}].concat(Fa("featureIndex",a.featureIndexes)))}].concat(Ma("langSys",n.langSysRecords,function(o,s){var x=o.langSys;return[{name:"langSysTag"+s,type:"TAG",value:o.tag},{name:"langSys"+s,type:"TABLE",value:new Vt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:x.reqFeatureIndex}].concat(Fa("featureIndex",x.featureIndexes)))}]})))}]}))}Fi.prototype=Object.create(Vt.prototype);Fi.prototype.constructor=Fi;function Mi(t){Vt.call(this,"featureListTable",Ma("featureRecord",t,function(e,r){var n=e.feature;return[{name:"featureTag"+r,type:"TAG",value:e.tag},{name:"feature"+r,type:"TABLE",value:new Vt("featureTable",[{name:"featureParams",type:"USHORT",value:n.featureParams}].concat(Fa("lookupListIndex",n.lookupListIndexes)))}]}))}Mi.prototype=Object.create(Vt.prototype);Mi.prototype.constructor=Mi;function Gi(t,e){Vt.call(this,"lookupListTable",q0("lookup",t,function(r){var n=e[r.lookupType];return Ge.assert(!!n,"Unable to write GSUB lookup type "+r.lookupType+" tables."),new Vt("lookupTable",[{name:"lookupType",type:"USHORT",value:r.lookupType},{name:"lookupFlag",type:"USHORT",value:r.lookupFlag}].concat(q0("subtable",r.subtables,n)))}))}Gi.prototype=Object.create(Vt.prototype);Gi.prototype.constructor=Gi;var ge={Table:Vt,Record:Vt,Coverage:Hi,ScriptList:Fi,FeatureList:Mi,LookupList:Gi,ushortList:Fa,tableList:q0,recordList:Ma};function mA(t,e){return t.getUint8(e)}function Pi(t,e){return t.getUint16(e,!1)}function ZE(t,e){return t.getInt16(e,!1)}function Oo(t,e){return t.getUint32(e,!1)}function ds(t,e){var r=t.getInt16(e,!1),n=t.getUint16(e+2,!1);return r+n/65535}function XE(t,e){for(var r="",n=e;n<e+4;n+=1)r+=String.fromCharCode(t.getInt8(n));return r}function jE(t,e,r){for(var n=0,a=0;a<r;a+=1)n<<=8,n+=t.getUint8(e+a);return n}function qE(t,e,r){for(var n=[],a=e;a<r;a+=1)n.push(t.getUint8(a));return n}function QE(t){for(var e="",r=0;r<t.length;r+=1)e+=String.fromCharCode(t[r]);return e}var $E={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function te(t,e){this.data=t,this.offset=e,this.relativeOffset=0}te.prototype.parseByte=function(){var t=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};te.prototype.parseChar=function(){var t=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};te.prototype.parseCard8=te.prototype.parseByte;te.prototype.parseUShort=function(){var t=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};te.prototype.parseCard16=te.prototype.parseUShort;te.prototype.parseSID=te.prototype.parseUShort;te.prototype.parseOffset16=te.prototype.parseUShort;te.prototype.parseShort=function(){var t=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};te.prototype.parseF2Dot14=function(){var t=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,t};te.prototype.parseULong=function(){var t=Oo(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};te.prototype.parseOffset32=te.prototype.parseULong;te.prototype.parseFixed=function(){var t=ds(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};te.prototype.parseString=function(t){var e=this.data,r=this.offset+this.relativeOffset,n="";this.relativeOffset+=t;for(var a=0;a<t;a++)n+=String.fromCharCode(e.getUint8(r+a));return n};te.prototype.parseTag=function(){return this.parseString(4)};te.prototype.parseLongDateTime=function(){var t=Oo(this.data,this.offset+this.relativeOffset+4);return t-=2082844800,this.relativeOffset+=8,t};te.prototype.parseVersion=function(t){var e=Pi(this.data,this.offset+this.relativeOffset),r=Pi(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,t===void 0&&(t=4096),e+r/t/10};te.prototype.skip=function(t,e){e===void 0&&(e=1),this.relativeOffset+=$E[t]*e};te.prototype.parseULongList=function(t){t===void 0&&(t=this.parseULong());for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint32(n),n+=4;return this.relativeOffset+=t*4,e};te.prototype.parseOffset16List=te.prototype.parseUShortList=function(t){t===void 0&&(t=this.parseUShort());for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint16(n),n+=2;return this.relativeOffset+=t*2,e};te.prototype.parseShortList=function(t){for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getInt16(n),n+=2;return this.relativeOffset+=t*2,e};te.prototype.parseByteList=function(t){for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint8(n++);return this.relativeOffset+=t,e};te.prototype.parseList=function(t,e){e||(e=t,t=this.parseUShort());for(var r=new Array(t),n=0;n<t;n++)r[n]=e.call(this);return r};te.prototype.parseList32=function(t,e){e||(e=t,t=this.parseULong());for(var r=new Array(t),n=0;n<t;n++)r[n]=e.call(this);return r};te.prototype.parseRecordList=function(t,e){e||(e=t,t=this.parseUShort());for(var r=new Array(t),n=Object.keys(e),a=0;a<t;a++){for(var o={},s=0;s<n.length;s++){var x=n[s],L=e[x];o[x]=L.call(this)}r[a]=o}return r};te.prototype.parseRecordList32=function(t,e){e||(e=t,t=this.parseULong());for(var r=new Array(t),n=Object.keys(e),a=0;a<t;a++){for(var o={},s=0;s<n.length;s++){var x=n[s],L=e[x];o[x]=L.call(this)}r[a]=o}return r};te.prototype.parseStruct=function(t){if(typeof t=="function")return t.call(this);for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var a=e[n],o=t[a];r[a]=o.call(this)}return r};te.prototype.parseValueRecord=function(t){if(t===void 0&&(t=this.parseUShort()),t!==0){var e={};return t&1&&(e.xPlacement=this.parseShort()),t&2&&(e.yPlacement=this.parseShort()),t&4&&(e.xAdvance=this.parseShort()),t&8&&(e.yAdvance=this.parseShort()),t&16&&(e.xPlaDevice=void 0,this.parseShort()),t&32&&(e.yPlaDevice=void 0,this.parseShort()),t&64&&(e.xAdvDevice=void 0,this.parseShort()),t&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};te.prototype.parseValueRecordList=function(){for(var t=this.parseUShort(),e=this.parseUShort(),r=new Array(e),n=0;n<e;n++)r[n]=this.parseValueRecord(t);return r};te.prototype.parsePointer=function(t){var e=this.parseOffset16();if(e>0)return new te(this.data,this.offset+e).parseStruct(t)};te.prototype.parsePointer32=function(t){var e=this.parseOffset32();if(e>0)return new te(this.data,this.offset+e).parseStruct(t)};te.prototype.parseListOfLists=function(t){for(var e=this.parseOffset16List(),r=e.length,n=this.relativeOffset,a=new Array(r),o=0;o<r;o++){var s=e[o];if(s===0){a[o]=void 0;continue}if(this.relativeOffset=s,t){for(var x=this.parseOffset16List(),L=new Array(x.length),I=0;I<x.length;I++)this.relativeOffset=s+x[I],L[I]=t.call(this);a[o]=L}else a[o]=this.parseUShortList()}return this.relativeOffset=n,a};te.prototype.parseCoverage=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort(),r=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(r)};if(e===2){for(var n=new Array(r),a=0;a<r;a++)n[a]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:n}}throw new Error("0x"+t.toString(16)+": Coverage format must be 1 or 2.")};te.prototype.parseClassDef=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:te.uShort,end:te.uShort,classId:te.uShort})};throw new Error("0x"+t.toString(16)+": ClassDef format must be 1 or 2.")};te.list=function(t,e){return function(){return this.parseList(t,e)}};te.list32=function(t,e){return function(){return this.parseList32(t,e)}};te.recordList=function(t,e){return function(){return this.parseRecordList(t,e)}};te.recordList32=function(t,e){return function(){return this.parseRecordList32(t,e)}};te.pointer=function(t){return function(){return this.parsePointer(t)}};te.pointer32=function(t){return function(){return this.parsePointer32(t)}};te.tag=te.prototype.parseTag;te.byte=te.prototype.parseByte;te.uShort=te.offset16=te.prototype.parseUShort;te.uShortList=te.prototype.parseUShortList;te.uLong=te.offset32=te.prototype.parseULong;te.uLongList=te.prototype.parseULongList;te.struct=te.prototype.parseStruct;te.coverage=te.prototype.parseCoverage;te.classDef=te.prototype.parseClassDef;var NA={reserved:te.uShort,reqFeatureIndex:te.uShort,featureIndexes:te.uShortList};te.prototype.parseScriptList=function(){return this.parsePointer(te.recordList({tag:te.tag,script:te.pointer({defaultLangSys:te.pointer(NA),langSysRecords:te.recordList({tag:te.tag,langSys:te.pointer(NA)})})}))||[]};te.prototype.parseFeatureList=function(){return this.parsePointer(te.recordList({tag:te.tag,feature:te.pointer({featureParams:te.offset16,lookupListIndexes:te.uShortList})}))||[]};te.prototype.parseLookupList=function(t){return this.parsePointer(te.list(te.pointer(function(){var e=this.parseUShort();Ge.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var r=this.parseUShort(),n=r&16;return{lookupType:e,lookupFlag:r,subtables:this.parseList(te.pointer(t[e])),markFilteringSet:n?this.parseUShort():void 0}})))||[]};te.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var t=this.parseUShort(),e=this.parseUShort();Ge.argument(t===1&&e<1,"GPOS/GSUB feature variations table unknown.");var r=this.parseRecordList32({conditionSetOffset:te.offset32,featureTableSubstitutionOffset:te.offset32});return r})||[]};var ye={getByte:mA,getCard8:mA,getUShort:Pi,getCard16:Pi,getShort:ZE,getULong:Oo,getFixed:ds,getTag:XE,getOffset:jE,getBytes:qE,bytesToString:QE,Parser:te};function eL(t,e){e.parseUShort(),t.length=e.parseULong(),t.language=e.parseULong();var r;t.groupCount=r=e.parseULong(),t.glyphIndexMap={};for(var n=0;n<r;n+=1)for(var a=e.parseULong(),o=e.parseULong(),s=e.parseULong(),x=a;x<=o;x+=1)t.glyphIndexMap[x]=s,s++}function tL(t,e,r,n,a){t.length=e.parseUShort(),t.language=e.parseUShort();var o;t.segCount=o=e.parseUShort()>>1,e.skip("uShort",3),t.glyphIndexMap={};for(var s=new ye.Parser(r,n+a+14),x=new ye.Parser(r,n+a+16+o*2),L=new ye.Parser(r,n+a+16+o*4),I=new ye.Parser(r,n+a+16+o*6),c=n+a+16+o*8,C=0;C<o-1;C+=1)for(var R=void 0,g=s.parseUShort(),Y=x.parseUShort(),w=L.parseShort(),V=I.parseUShort(),_=Y;_<=g;_+=1)V!==0?(c=I.offset+I.relativeOffset-2,c+=V,c+=(_-Y)*2,R=ye.getUShort(r,c),R!==0&&(R=R+w&65535)):R=_+w&65535,t.glyphIndexMap[_]=R}function rL(t,e){var r={};r.version=ye.getUShort(t,e),Ge.argument(r.version===0,"cmap table version should be 0."),r.numTables=ye.getUShort(t,e+2);for(var n=-1,a=r.numTables-1;a>=0;a-=1){var o=ye.getUShort(t,e+4+a*8),s=ye.getUShort(t,e+4+a*8+2);if(o===3&&(s===0||s===1||s===10)||o===0&&(s===0||s===1||s===2||s===3||s===4)){n=ye.getULong(t,e+4+a*8+4);break}}if(n===-1)throw new Error("No valid cmap sub-tables found.");var x=new ye.Parser(t,e+n);if(r.format=x.parseUShort(),r.format===12)eL(r,x);else if(r.format===4)tL(r,x,t,e,n);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+r.format+").");return r}function nL(t,e,r){t.segments.push({end:e,start:e,delta:-(e-r),offset:0,glyphIndex:r})}function aL(t){t.segments.push({end:65535,start:65535,delta:1,offset:0})}function iL(t){var e=!0,r;for(r=t.length-1;r>0;r-=1){var n=t.get(r);if(n.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var a=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(a=a.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),a=a.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var o=new ge.Table("cmap",a);for(o.segments=[],r=0;r<t.length;r+=1){for(var s=t.get(r),x=0;x<s.unicodes.length;x+=1)nL(o,s.unicodes[x],r);o.segments=o.segments.sort(function(ee,q){return ee.start-q.start})}aL(o);var L=o.segments.length,I=0,c=[],C=[],R=[],g=[],Y=[],w=[];for(r=0;r<L;r+=1){var V=o.segments[r];V.end<=65535&&V.start<=65535?(c=c.concat({name:"end_"+r,type:"USHORT",value:V.end}),C=C.concat({name:"start_"+r,type:"USHORT",value:V.start}),R=R.concat({name:"idDelta_"+r,type:"SHORT",value:V.delta}),g=g.concat({name:"idRangeOffset_"+r,type:"USHORT",value:V.offset}),V.glyphId!==void 0&&(Y=Y.concat({name:"glyph_"+r,type:"USHORT",value:V.glyphId}))):I+=1,!e&&V.glyphIndex!==void 0&&(w=w.concat({name:"cmap12Start_"+r,type:"ULONG",value:V.start}),w=w.concat({name:"cmap12End_"+r,type:"ULONG",value:V.end}),w=w.concat({name:"cmap12Glyph_"+r,type:"ULONG",value:V.glyphIndex}))}if(o.segCountX2=(L-I)*2,o.searchRange=Math.pow(2,Math.floor(Math.log(L-I)/Math.log(2)))*2,o.entrySelector=Math.log(o.searchRange/2)/Math.log(2),o.rangeShift=o.segCountX2-o.searchRange,o.fields=o.fields.concat(c),o.fields.push({name:"reservedPad",type:"USHORT",value:0}),o.fields=o.fields.concat(C),o.fields=o.fields.concat(R),o.fields=o.fields.concat(g),o.fields=o.fields.concat(Y),o.cmap4Length=14+c.length*2+2+C.length*2+R.length*2+g.length*2+Y.length*2,!e){var _=16+w.length*4;o.cmap12Offset=12+2*2+4+o.cmap4Length,o.fields=o.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:_},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:w.length/3}]),o.fields=o.fields.concat(w)}return o}var us={parse:rL,make:iL},Ci=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],oL=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],AL=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Dn=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function ps(t){this.font=t}ps.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),r=this.font.glyphs;if(r){for(var n=0;n<r.length;n+=1)for(var a=r.get(n),o=0;o<a.unicodes.length;o+=1)if(a.unicodes[o]===e)return n}return null};function Ss(t){this.cmap=t}Ss.prototype.charToGlyphIndex=function(t){return this.cmap.glyphIndexMap[t.codePointAt(0)]||0};function bi(t,e){this.encoding=t,this.charset=e}bi.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),r=this.encoding[e];return this.charset.indexOf(r)};function Bo(t){switch(t.version){case 1:this.names=Dn.slice();break;case 2:this.names=new Array(t.numberOfGlyphs);for(var e=0;e<t.numberOfGlyphs;e++)t.glyphNameIndex[e]<Dn.length?this.names[e]=Dn[t.glyphNameIndex[e]]:this.names[e]=t.names[t.glyphNameIndex[e]-Dn.length];break;case 2.5:this.names=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)this.names[r]=Dn[r+t.glyphNameIndex[r]];break;case 3:this.names=[];break;default:this.names=[];break}}Bo.prototype.nameToGlyphIndex=function(t){return this.names.indexOf(t)};Bo.prototype.glyphIndexToName=function(t){return this.names[t]};function sL(t){for(var e,r=t.tables.cmap.glyphIndexMap,n=Object.keys(r),a=0;a<n.length;a+=1){var o=n[a],s=r[o];e=t.glyphs.get(s),e.addUnicode(parseInt(o))}for(var x=0;x<t.glyphs.length;x+=1)e=t.glyphs.get(x),t.cffEncoding?t.isCIDFont?e.name="gid"+x:e.name=t.cffEncoding.charset[x]:t.glyphNames.names&&(e.name=t.glyphNames.glyphIndexToName(x))}function lL(t){t._IndexToUnicodeMap={};for(var e=t.tables.cmap.glyphIndexMap,r=Object.keys(e),n=0;n<r.length;n+=1){var a=r[n],o=e[a];t._IndexToUnicodeMap[o]===void 0?t._IndexToUnicodeMap[o]={unicodes:[parseInt(a)]}:t._IndexToUnicodeMap[o].unicodes.push(parseInt(a))}}function xL(t,e){e.lowMemory?lL(t):sL(t)}function EL(t,e,r,n,a){t.beginPath(),t.moveTo(e,r),t.lineTo(n,a),t.stroke()}var mn={line:EL};function LL(t,e){var r=e||new Mt;return{configurable:!0,get:function(){return typeof r=="function"&&(r=r()),r},set:function(n){r=n}}}function hr(t){this.bindConstructorValues(t)}hr.prototype.bindConstructorValues=function(t){this.index=t.index||0,this.name=t.name||null,this.unicode=t.unicode||void 0,this.unicodes=t.unicodes||t.unicode!==void 0?[t.unicode]:[],"xMin"in t&&(this.xMin=t.xMin),"yMin"in t&&(this.yMin=t.yMin),"xMax"in t&&(this.xMax=t.xMax),"yMax"in t&&(this.yMax=t.yMax),"advanceWidth"in t&&(this.advanceWidth=t.advanceWidth),Object.defineProperty(this,"path",LL(this,t.path))};hr.prototype.addUnicode=function(t){this.unicodes.length===0&&(this.unicode=t),this.unicodes.push(t)};hr.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};hr.prototype.getPath=function(t,e,r,n,a){t=t!==void 0?t:0,e=e!==void 0?e:0,r=r!==void 0?r:72;var o,s;n||(n={});var x=n.xScale,L=n.yScale;if(n.hinting&&a&&a.hinting&&(s=this.path&&a.hinting.exec(this,r)),s)o=a.hinting.getCommands(s),t=Math.round(t),e=Math.round(e),x=L=1;else{o=this.path.commands;var I=1/(this.path.unitsPerEm||1e3)*r;x===void 0&&(x=I),L===void 0&&(L=I)}for(var c=new Mt,C=0;C<o.length;C+=1){var R=o[C];R.type==="M"?c.moveTo(t+R.x*x,e+-R.y*L):R.type==="L"?c.lineTo(t+R.x*x,e+-R.y*L):R.type==="Q"?c.quadraticCurveTo(t+R.x1*x,e+-R.y1*L,t+R.x*x,e+-R.y*L):R.type==="C"?c.curveTo(t+R.x1*x,e+-R.y1*L,t+R.x2*x,e+-R.y2*L,t+R.x*x,e+-R.y*L):R.type==="Z"&&c.closePath()}return c};hr.prototype.getContours=function(){if(this.points===void 0)return[];for(var t=[],e=[],r=0;r<this.points.length;r+=1){var n=this.points[r];e.push(n),n.lastPointOfContour&&(t.push(e),e=[])}return Ge.argument(e.length===0,"There are still points left in the current contour."),t};hr.prototype.getMetrics=function(){for(var t=this.path.commands,e=[],r=[],n=0;n<t.length;n+=1){var a=t[n];a.type!=="Z"&&(e.push(a.x),r.push(a.y)),(a.type==="Q"||a.type==="C")&&(e.push(a.x1),r.push(a.y1)),a.type==="C"&&(e.push(a.x2),r.push(a.y2))}var o={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,r),leftSideBearing:this.leftSideBearing};return isFinite(o.xMin)||(o.xMin=0),isFinite(o.xMax)||(o.xMax=this.advanceWidth),isFinite(o.yMin)||(o.yMin=0),isFinite(o.yMax)||(o.yMax=0),o.rightSideBearing=this.advanceWidth-o.leftSideBearing-(o.xMax-o.xMin),o};hr.prototype.draw=function(t,e,r,n,a){this.getPath(e,r,n,a).draw(t)};hr.prototype.drawPoints=function(t,e,r,n){function a(C,R,g,Y){t.beginPath();for(var w=0;w<C.length;w+=1)t.moveTo(R+C[w].x*Y,g+C[w].y*Y),t.arc(R+C[w].x*Y,g+C[w].y*Y,2,0,Math.PI*2,!1);t.closePath(),t.fill()}e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:24;for(var o=1/this.path.unitsPerEm*n,s=[],x=[],L=this.path,I=0;I<L.commands.length;I+=1){var c=L.commands[I];c.x!==void 0&&s.push({x:c.x,y:-c.y}),c.x1!==void 0&&x.push({x:c.x1,y:-c.y1}),c.x2!==void 0&&x.push({x:c.x2,y:-c.y2})}t.fillStyle="blue",a(s,e,r,o),t.fillStyle="red",a(x,e,r,o)};hr.prototype.drawMetrics=function(t,e,r,n){var a;e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:24,a=1/this.path.unitsPerEm*n,t.lineWidth=1,t.strokeStyle="black",mn.line(t,e,-1e4,e,1e4),mn.line(t,-1e4,r,1e4,r);var o=this.xMin||0,s=this.yMin||0,x=this.xMax||0,L=this.yMax||0,I=this.advanceWidth||0;t.strokeStyle="blue",mn.line(t,e+o*a,-1e4,e+o*a,1e4),mn.line(t,e+x*a,-1e4,e+x*a,1e4),mn.line(t,-1e4,r+-s*a,1e4,r+-s*a),mn.line(t,-1e4,r+-L*a,1e4,r+-L*a),t.strokeStyle="green",mn.line(t,e+I*a,-1e4,e+I*a,1e4)};function hi(t,e,r){Object.defineProperty(t,e,{get:function(){return t.path,t[r]},set:function(n){t[r]=n},enumerable:!0,configurable:!0})}function Ho(t,e){if(this.font=t,this.glyphs={},Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];n.path.unitsPerEm=t.unitsPerEm,this.glyphs[r]=n}this.length=e&&e.length||0}Ho.prototype.get=function(t){if(this.glyphs[t]===void 0){this.font._push(t),typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());var e=this.glyphs[t],r=this.font._IndexToUnicodeMap[t];if(r)for(var n=0;n<r.unicodes.length;n++)e.addUnicode(r.unicodes[n]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+t:e.name=this.font.cffEncoding.charset[t]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(t)),this.glyphs[t].advanceWidth=this.font._hmtxTableData[t].advanceWidth,this.glyphs[t].leftSideBearing=this.font._hmtxTableData[t].leftSideBearing}else typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());return this.glyphs[t]};Ho.prototype.push=function(t,e){this.glyphs[t]=e,this.length++};function hL(t,e){return new hr({index:e,font:t})}function cL(t,e,r,n,a,o){return function(){var s=new hr({index:e,font:t});return s.path=function(){r(s,n,a);var x=o(t.glyphs,s);return x.unitsPerEm=t.unitsPerEm,x},hi(s,"xMin","_xMin"),hi(s,"xMax","_xMax"),hi(s,"yMin","_yMin"),hi(s,"yMax","_yMax"),s}}function TL(t,e,r,n){return function(){var a=new hr({index:e,font:t});return a.path=function(){var o=r(t,a,n);return o.unitsPerEm=t.unitsPerEm,o},a}}var wr={GlyphSet:Ho,glyphLoader:hL,ttfGlyphLoader:cL,cffGlyphLoader:TL};function Cs(t,e){if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r+=1)if(!Cs(t[r],e[r]))return!1;return!0}else return!1}function Q0(t){var e;return t.length<1240?e=107:t.length<33900?e=1131:e=32768,e}function xn(t,e,r){var n=[],a=[],o=ye.getCard16(t,e),s,x;if(o!==0){var L=ye.getByte(t,e+2);s=e+(o+1)*L+2;for(var I=e+3,c=0;c<o+1;c+=1)n.push(ye.getOffset(t,I,L)),I+=L;x=s+n[o]}else x=e+2;for(var C=0;C<n.length-1;C+=1){var R=ye.getBytes(t,s+n[C],s+n[C+1]);r&&(R=r(R)),a.push(R)}return{objects:a,startOffset:e,endOffset:x}}function IL(t,e){var r=[],n=ye.getCard16(t,e),a,o;if(n!==0){var s=ye.getByte(t,e+2);a=e+(n+1)*s+2;for(var x=e+3,L=0;L<n+1;L+=1)r.push(ye.getOffset(t,x,s)),x+=s;o=a+r[n]}else o=e+2;return{offsets:r,startOffset:e,endOffset:o}}function dL(t,e,r,n,a){var o=ye.getCard16(r,n),s=0;if(o!==0){var x=ye.getByte(r,n+2);s=n+(o+1)*x+2}var L=ye.getBytes(r,s+e[t],s+e[t+1]);return a&&(L=a(L)),L}function uL(t){for(var e="",r=15,n=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var a=t.parseByte(),o=a>>4,s=a&15;if(o===r||(e+=n[o],s===r))break;e+=n[s]}return parseFloat(e)}function pL(t,e){var r,n,a,o;if(e===28)return r=t.parseByte(),n=t.parseByte(),r<<8|n;if(e===29)return r=t.parseByte(),n=t.parseByte(),a=t.parseByte(),o=t.parseByte(),r<<24|n<<16|a<<8|o;if(e===30)return uL(t);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return r=t.parseByte(),(e-247)*256+r+108;if(e>=251&&e<=254)return r=t.parseByte(),-(e-251)*256-r-108;throw new Error("Invalid b0 "+e)}function SL(t){for(var e={},r=0;r<t.length;r+=1){var n=t[r][0],a=t[r][1],o=void 0;if(a.length===1?o=a[0]:o=a,e.hasOwnProperty(n)&&!isNaN(e[n]))throw new Error("Object "+e+" already has key "+n);e[n]=o}return e}function gs(t,e,r){e=e!==void 0?e:0;var n=new ye.Parser(t,e),a=[],o=[];for(r=r!==void 0?r:t.length;n.relativeOffset<r;){var s=n.parseByte();s<=21?(s===12&&(s=1200+n.parseByte()),a.push([s,o]),o=[]):o.push(pL(n,s))}return SL(a)}function Ra(t,e){return e<=390?e=Ci[e]:e=t[e-391],e}function Rs(t,e,r){for(var n={},a,o=0;o<e.length;o+=1){var s=e[o];if(Array.isArray(s.type)){var x=[];x.length=s.type.length;for(var L=0;L<s.type.length;L++)a=t[s.op]!==void 0?t[s.op][L]:void 0,a===void 0&&(a=s.value!==void 0&&s.value[L]!==void 0?s.value[L]:null),s.type[L]==="SID"&&(a=Ra(r,a)),x[L]=a;n[s.name]=x}else a=t[s.op],a===void 0&&(a=s.value!==void 0?s.value:null),s.type==="SID"&&(a=Ra(r,a)),n[s.name]=a}return n}function CL(t,e){var r={};return r.formatMajor=ye.getCard8(t,e),r.formatMinor=ye.getCard8(t,e+1),r.size=ye.getCard8(t,e+2),r.offsetSize=ye.getCard8(t,e+3),r.startOffset=e,r.endOffset=e+4,r}var ys=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],ms=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function gL(t,e){var r=gs(t,0,t.byteLength);return Rs(r,ys,e)}function Ns(t,e,r,n){var a=gs(t,e,r);return Rs(a,ms,n)}function fA(t,e,r,n){for(var a=[],o=0;o<r.length;o+=1){var s=new DataView(new Uint8Array(r[o]).buffer),x=gL(s,n);x._subrs=[],x._subrsBias=0,x._defaultWidthX=0,x._nominalWidthX=0;var L=x.private[0],I=x.private[1];if(L!==0&&I!==0){var c=Ns(t,I+e,L,n);if(x._defaultWidthX=c.defaultWidthX,x._nominalWidthX=c.nominalWidthX,c.subrs!==0){var C=I+c.subrs,R=xn(t,C+e);x._subrs=R.objects,x._subrsBias=Q0(x._subrs)}x._privateDict=c}a.push(x)}return a}function RL(t,e,r,n){var a,o,s=new ye.Parser(t,e);r-=1;var x=[".notdef"],L=s.parseCard8();if(L===0)for(var I=0;I<r;I+=1)a=s.parseSID(),x.push(Ra(n,a));else if(L===1)for(;x.length<=r;){a=s.parseSID(),o=s.parseCard8();for(var c=0;c<=o;c+=1)x.push(Ra(n,a)),a+=1}else if(L===2)for(;x.length<=r;){a=s.parseSID(),o=s.parseCard16();for(var C=0;C<=o;C+=1)x.push(Ra(n,a)),a+=1}else throw new Error("Unknown charset format "+L);return x}function yL(t,e,r){var n,a={},o=new ye.Parser(t,e),s=o.parseCard8();if(s===0)for(var x=o.parseCard8(),L=0;L<x;L+=1)n=o.parseCard8(),a[n]=L;else if(s===1){var I=o.parseCard8();n=1;for(var c=0;c<I;c+=1)for(var C=o.parseCard8(),R=o.parseCard8(),g=C;g<=C+R;g+=1)a[g]=n,n+=1}else throw new Error("Unknown encoding format "+s);return new bi(a,r)}function DA(t,e,r){var n,a,o,s,x=new Mt,L=[],I=0,c=!1,C=!1,R=0,g=0,Y,w,V,_;if(t.isCIDFont){var ee=t.tables.cff.topDict._fdSelect[e.index],q=t.tables.cff.topDict._fdArray[ee];Y=q._subrs,w=q._subrsBias,V=q._defaultWidthX,_=q._nominalWidthX}else Y=t.tables.cff.topDict._subrs,w=t.tables.cff.topDict._subrsBias,V=t.tables.cff.topDict._defaultWidthX,_=t.tables.cff.topDict._nominalWidthX;var ce=V;function Te(de,De){C&&x.closePath(),x.moveTo(de,De),C=!0}function oe(){var de;de=L.length%2!==0,de&&!c&&(ce=L.shift()+_),I+=L.length>>1,L.length=0,c=!0}function Ie(de){for(var De,We,ke,At,st,ue,It,Ae,$e,lt,Oe,ht,ct=0;ct<de.length;){var Gt=de[ct];switch(ct+=1,Gt){case 1:oe();break;case 3:oe();break;case 4:L.length>1&&!c&&(ce=L.shift()+_,c=!0),g+=L.pop(),Te(R,g);break;case 5:for(;L.length>0;)R+=L.shift(),g+=L.shift(),x.lineTo(R,g);break;case 6:for(;L.length>0&&(R+=L.shift(),x.lineTo(R,g),L.length!==0);)g+=L.shift(),x.lineTo(R,g);break;case 7:for(;L.length>0&&(g+=L.shift(),x.lineTo(R,g),L.length!==0);)R+=L.shift(),x.lineTo(R,g);break;case 8:for(;L.length>0;)n=R+L.shift(),a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),R=o+L.shift(),g=s+L.shift(),x.curveTo(n,a,o,s,R,g);break;case 10:st=L.pop()+w,ue=Y[st],ue&&Ie(ue);break;case 11:return;case 12:switch(Gt=de[ct],ct+=1,Gt){case 35:n=R+L.shift(),a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),It=o+L.shift(),Ae=s+L.shift(),$e=It+L.shift(),lt=Ae+L.shift(),Oe=$e+L.shift(),ht=lt+L.shift(),R=Oe+L.shift(),g=ht+L.shift(),L.shift(),x.curveTo(n,a,o,s,It,Ae),x.curveTo($e,lt,Oe,ht,R,g);break;case 34:n=R+L.shift(),a=g,o=n+L.shift(),s=a+L.shift(),It=o+L.shift(),Ae=s,$e=It+L.shift(),lt=s,Oe=$e+L.shift(),ht=g,R=Oe+L.shift(),x.curveTo(n,a,o,s,It,Ae),x.curveTo($e,lt,Oe,ht,R,g);break;case 36:n=R+L.shift(),a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),It=o+L.shift(),Ae=s,$e=It+L.shift(),lt=s,Oe=$e+L.shift(),ht=lt+L.shift(),R=Oe+L.shift(),x.curveTo(n,a,o,s,It,Ae),x.curveTo($e,lt,Oe,ht,R,g);break;case 37:n=R+L.shift(),a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),It=o+L.shift(),Ae=s+L.shift(),$e=It+L.shift(),lt=Ae+L.shift(),Oe=$e+L.shift(),ht=lt+L.shift(),Math.abs(Oe-R)>Math.abs(ht-g)?R=Oe+L.shift():g=ht+L.shift(),x.curveTo(n,a,o,s,It,Ae),x.curveTo($e,lt,Oe,ht,R,g);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+Gt),L.length=0}break;case 14:L.length>0&&!c&&(ce=L.shift()+_,c=!0),C&&(x.closePath(),C=!1);break;case 18:oe();break;case 19:case 20:oe(),ct+=I+7>>3;break;case 21:L.length>2&&!c&&(ce=L.shift()+_,c=!0),g+=L.pop(),R+=L.pop(),Te(R,g);break;case 22:L.length>1&&!c&&(ce=L.shift()+_,c=!0),R+=L.pop(),Te(R,g);break;case 23:oe();break;case 24:for(;L.length>2;)n=R+L.shift(),a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),R=o+L.shift(),g=s+L.shift(),x.curveTo(n,a,o,s,R,g);R+=L.shift(),g+=L.shift(),x.lineTo(R,g);break;case 25:for(;L.length>6;)R+=L.shift(),g+=L.shift(),x.lineTo(R,g);n=R+L.shift(),a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),R=o+L.shift(),g=s+L.shift(),x.curveTo(n,a,o,s,R,g);break;case 26:for(L.length%2&&(R+=L.shift());L.length>0;)n=R,a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),R=o,g=s+L.shift(),x.curveTo(n,a,o,s,R,g);break;case 27:for(L.length%2&&(g+=L.shift());L.length>0;)n=R+L.shift(),a=g,o=n+L.shift(),s=a+L.shift(),R=o+L.shift(),g=s,x.curveTo(n,a,o,s,R,g);break;case 28:De=de[ct],We=de[ct+1],L.push((De<<24|We<<16)>>16),ct+=2;break;case 29:st=L.pop()+t.gsubrsBias,ue=t.gsubrs[st],ue&&Ie(ue);break;case 30:for(;L.length>0&&(n=R,a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),R=o+L.shift(),g=s+(L.length===1?L.shift():0),x.curveTo(n,a,o,s,R,g),L.length!==0);)n=R+L.shift(),a=g,o=n+L.shift(),s=a+L.shift(),g=s+L.shift(),R=o+(L.length===1?L.shift():0),x.curveTo(n,a,o,s,R,g);break;case 31:for(;L.length>0&&(n=R+L.shift(),a=g,o=n+L.shift(),s=a+L.shift(),g=s+L.shift(),R=o+(L.length===1?L.shift():0),x.curveTo(n,a,o,s,R,g),L.length!==0);)n=R,a=g+L.shift(),o=n+L.shift(),s=a+L.shift(),R=o+L.shift(),g=s+(L.length===1?L.shift():0),x.curveTo(n,a,o,s,R,g);break;default:Gt<32?console.log("Glyph "+e.index+": unknown operator "+Gt):Gt<247?L.push(Gt-139):Gt<251?(De=de[ct],ct+=1,L.push((Gt-247)*256+De+108)):Gt<255?(De=de[ct],ct+=1,L.push(-(Gt-251)*256-De-108)):(De=de[ct],We=de[ct+1],ke=de[ct+2],At=de[ct+3],ct+=4,L.push((De<<24|We<<16|ke<<8|At)/65536))}}}return Ie(r),e.advanceWidth=ce,x}function mL(t,e,r,n){var a=[],o,s=new ye.Parser(t,e),x=s.parseCard8();if(x===0)for(var L=0;L<r;L++){if(o=s.parseCard8(),o>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+o+" (FD count "+n+")");a.push(o)}else if(x===3){var I=s.parseCard16(),c=s.parseCard16();if(c!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+c);for(var C,R=0;R<I;R++){if(o=s.parseCard8(),C=s.parseCard16(),o>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+o+" (FD count "+n+")");if(C>r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+C);for(;c<C;c++)a.push(o);c=C}if(C!==r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+C)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+x);return a}function NL(t,e,r,n){r.tables.cff={};var a=CL(t,e),o=xn(t,a.endOffset,ye.bytesToString),s=xn(t,o.endOffset),x=xn(t,s.endOffset,ye.bytesToString),L=xn(t,x.endOffset);r.gsubrs=L.objects,r.gsubrsBias=Q0(r.gsubrs);var I=fA(t,e,s.objects,x.objects);if(I.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+I.length);var c=I[0];if(r.tables.cff.topDict=c,c._privateDict&&(r.defaultWidthX=c._privateDict.defaultWidthX,r.nominalWidthX=c._privateDict.nominalWidthX),c.ros[0]!==void 0&&c.ros[1]!==void 0&&(r.isCIDFont=!0),r.isCIDFont){var C=c.fdArray,R=c.fdSelect;if(C===0||R===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");C+=e;var g=xn(t,C),Y=fA(t,e,g.objects,x.objects);c._fdArray=Y,R+=e,c._fdSelect=mL(t,R,r.numGlyphs,Y.length)}var w=e+c.private[1],V=Ns(t,w,c.private[0],x.objects);if(r.defaultWidthX=V.defaultWidthX,r.nominalWidthX=V.nominalWidthX,V.subrs!==0){var _=w+V.subrs,ee=xn(t,_);r.subrs=ee.objects,r.subrsBias=Q0(r.subrs)}else r.subrs=[],r.subrsBias=0;var q;n.lowMemory?(q=IL(t,e+c.charStrings),r.nGlyphs=q.offsets.length):(q=xn(t,e+c.charStrings),r.nGlyphs=q.objects.length);var ce=RL(t,e+c.charset,r.nGlyphs,x.objects);if(c.encoding===0?r.cffEncoding=new bi(oL,ce):c.encoding===1?r.cffEncoding=new bi(AL,ce):r.cffEncoding=yL(t,e+c.encoding,ce),r.encoding=r.encoding||r.cffEncoding,r.glyphs=new wr.GlyphSet(r),n.lowMemory)r._push=function(Ie){var de=dL(Ie,q.offsets,t,e+c.charStrings);r.glyphs.push(Ie,wr.cffGlyphLoader(r,Ie,DA,de))};else for(var Te=0;Te<r.nGlyphs;Te+=1){var oe=q.objects[Te];r.glyphs.push(Te,wr.cffGlyphLoader(r,Te,DA,oe))}}function fs(t,e){var r,n=Ci.indexOf(t);return n>=0&&(r=n),n=e.indexOf(t),n>=0?r=n+Ci.length:(r=Ci.length+e.length,e.push(t)),r}function fL(){return new ge.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function DL(t){var e=new ge.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var r=0;r<t.length;r+=1)e.names.push({name:"name_"+r,type:"NAME",value:t[r]});return e}function Ds(t,e,r){for(var n={},a=0;a<t.length;a+=1){var o=t[a],s=e[o.name];s!==void 0&&!Cs(s,o.value)&&(o.type==="SID"&&(s=fs(s,r)),n[o.op]={name:o.name,type:o.type,value:s})}return n}function OA(t,e){var r=new ge.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=Ds(ys,t,e),r}function BA(t){var e=new ge.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:t}],e}function OL(t){var e=new ge.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var r=0;r<t.length;r+=1)e.strings.push({name:"string_"+r,type:"STRING",value:t[r]});return e}function BL(){return new ge.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function HL(t,e){for(var r=new ge.Record("Charsets",[{name:"format",type:"Card8",value:0}]),n=0;n<t.length;n+=1){var a=t[n],o=fs(a,e);r.fields.push({name:"glyph_"+n,type:"SID",value:o})}return r}function FL(t){var e=[],r=t.path;e.push({name:"width",type:"NUMBER",value:t.advanceWidth});for(var n=0,a=0,o=0;o<r.commands.length;o+=1){var s=void 0,x=void 0,L=r.commands[o];if(L.type==="Q"){var I=.3333333333333333,c=2/3;L={type:"C",x:L.x,y:L.y,x1:Math.round(I*n+c*L.x1),y1:Math.round(I*a+c*L.y1),x2:Math.round(I*L.x+c*L.x1),y2:Math.round(I*L.y+c*L.y1)}}if(L.type==="M")s=Math.round(L.x-n),x=Math.round(L.y-a),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rmoveto",type:"OP",value:21}),n=Math.round(L.x),a=Math.round(L.y);else if(L.type==="L")s=Math.round(L.x-n),x=Math.round(L.y-a),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rlineto",type:"OP",value:5}),n=Math.round(L.x),a=Math.round(L.y);else if(L.type==="C"){var C=Math.round(L.x1-n),R=Math.round(L.y1-a),g=Math.round(L.x2-L.x1),Y=Math.round(L.y2-L.y1);s=Math.round(L.x-L.x2),x=Math.round(L.y-L.y2),e.push({name:"dx1",type:"NUMBER",value:C}),e.push({name:"dy1",type:"NUMBER",value:R}),e.push({name:"dx2",type:"NUMBER",value:g}),e.push({name:"dy2",type:"NUMBER",value:Y}),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rrcurveto",type:"OP",value:8}),n=Math.round(L.x),a=Math.round(L.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function ML(t){for(var e=new ge.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),r=0;r<t.length;r+=1){var n=t.get(r),a=FL(n);e.charStrings.push({name:n.name,type:"CHARSTRING",value:a})}return e}function GL(t,e){var r=new ge.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=Ds(ms,t,e),r}function PL(t,e){for(var r=new ge.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),n=1/e.unitsPerEm,a={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[n,0,0,n,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},o={},s=[],x,L=1;L<t.length;L+=1)x=t.get(L),s.push(x.name);var I=[];r.header=fL(),r.nameIndex=DL([e.postScriptName]);var c=OA(a,I);r.topDictIndex=BA(c),r.globalSubrIndex=BL(),r.charsets=HL(s,I),r.charStringsIndex=ML(t),r.privateDict=GL(o,I),r.stringIndex=OL(I);var C=r.header.sizeOf()+r.nameIndex.sizeOf()+r.topDictIndex.sizeOf()+r.stringIndex.sizeOf()+r.globalSubrIndex.sizeOf();return a.charset=C,a.encoding=0,a.charStrings=a.charset+r.charsets.sizeOf(),a.private[1]=a.charStrings+r.charStringsIndex.sizeOf(),c=OA(a,I),r.topDictIndex=BA(c),r}var Os={parse:NL,make:PL};function bL(t,e){var r={},n=new ye.Parser(t,e);return r.version=n.parseVersion(),r.fontRevision=Math.round(n.parseFixed()*1e3)/1e3,r.checkSumAdjustment=n.parseULong(),r.magicNumber=n.parseULong(),Ge.argument(r.magicNumber===1594834165,"Font header has wrong magic number."),r.flags=n.parseUShort(),r.unitsPerEm=n.parseUShort(),r.created=n.parseLongDateTime(),r.modified=n.parseLongDateTime(),r.xMin=n.parseShort(),r.yMin=n.parseShort(),r.xMax=n.parseShort(),r.yMax=n.parseShort(),r.macStyle=n.parseUShort(),r.lowestRecPPEM=n.parseUShort(),r.fontDirectionHint=n.parseShort(),r.indexToLocFormat=n.parseShort(),r.glyphDataFormat=n.parseShort(),r}function vL(t){var e=Math.round(new Date().getTime()/1e3)+2082844800,r=e;return t.createdTimestamp&&(r=t.createdTimestamp+2082844800),new ge.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:r},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],t)}var Bs={parse:bL,make:vL};function UL(t,e){var r={},n=new ye.Parser(t,e);return r.version=n.parseVersion(),r.ascender=n.parseShort(),r.descender=n.parseShort(),r.lineGap=n.parseShort(),r.advanceWidthMax=n.parseUShort(),r.minLeftSideBearing=n.parseShort(),r.minRightSideBearing=n.parseShort(),r.xMaxExtent=n.parseShort(),r.caretSlopeRise=n.parseShort(),r.caretSlopeRun=n.parseShort(),r.caretOffset=n.parseShort(),n.relativeOffset+=8,r.metricDataFormat=n.parseShort(),r.numberOfHMetrics=n.parseUShort(),r}function wL(t){return new ge.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],t)}var Hs={parse:UL,make:wL};function YL(t,e,r,n,a){for(var o,s,x=new ye.Parser(t,e),L=0;L<n;L+=1){L<r&&(o=x.parseUShort(),s=x.parseShort());var I=a.get(L);I.advanceWidth=o,I.leftSideBearing=s}}function WL(t,e,r,n,a){t._hmtxTableData={};for(var o,s,x=new ye.Parser(e,r),L=0;L<a;L+=1)L<n&&(o=x.parseUShort(),s=x.parseShort()),t._hmtxTableData[L]={advanceWidth:o,leftSideBearing:s}}function kL(t,e,r,n,a,o,s){s.lowMemory?WL(t,e,r,n,a):YL(e,r,n,a,o)}function KL(t){for(var e=new ge.Table("hmtx",[]),r=0;r<t.length;r+=1){var n=t.get(r),a=n.advanceWidth||0,o=n.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+r,type:"USHORT",value:a}),e.fields.push({name:"leftSideBearing_"+r,type:"SHORT",value:o})}return e}var Fs={parse:kL,make:KL};function _L(t){for(var e=new ge.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:t.length}]),r="",n=12+t.length*4,a=0;a<t.length;++a){var o=r.indexOf(t[a]);o<0&&(o=r.length,r+=t[a]),e.fields.push({name:"offset "+a,type:"USHORT",value:n+o}),e.fields.push({name:"length "+a,type:"USHORT",value:t[a].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),e}function VL(t,e){var r=new ye.Parser(t,e),n=r.parseULong();Ge.argument(n===1,"Unsupported ltag table version."),r.skip("uLong",1);for(var a=r.parseULong(),o=[],s=0;s<a;s++){for(var x="",L=e+r.parseUShort(),I=r.parseUShort(),c=L;c<L+I;++c)x+=String.fromCharCode(t.getInt8(c));o.push(x)}return o}var Ms={make:_L,parse:VL};function zL(t,e){var r={},n=new ye.Parser(t,e);return r.version=n.parseVersion(),r.numGlyphs=n.parseUShort(),r.version===1&&(r.maxPoints=n.parseUShort(),r.maxContours=n.parseUShort(),r.maxCompositePoints=n.parseUShort(),r.maxCompositeContours=n.parseUShort(),r.maxZones=n.parseUShort(),r.maxTwilightPoints=n.parseUShort(),r.maxStorage=n.parseUShort(),r.maxFunctionDefs=n.parseUShort(),r.maxInstructionDefs=n.parseUShort(),r.maxStackElements=n.parseUShort(),r.maxSizeOfInstructions=n.parseUShort(),r.maxComponentElements=n.parseUShort(),r.maxComponentDepth=n.parseUShort()),r}function JL(t){return new ge.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:t}])}var Gs={parse:zL,make:JL},Ps=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],bs={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},ZL={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},vs={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function XL(t,e,r){switch(t){case 0:if(e===65535)return"und";if(r)return r[e];break;case 1:return bs[e];case 3:return vs[e]}}var $0="utf-16",jL={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},qL={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function Us(t,e,r){switch(t){case 0:return $0;case 1:return qL[r]||jL[e];case 3:if(e===1||e===10)return $0;break}}function QL(t,e,r){for(var n={},a=new ye.Parser(t,e),o=a.parseUShort(),s=a.parseUShort(),x=a.offset+a.parseUShort(),L=0;L<s;L++){var I=a.parseUShort(),c=a.parseUShort(),C=a.parseUShort(),R=a.parseUShort(),g=Ps[R]||R,Y=a.parseUShort(),w=a.parseUShort(),V=XL(I,C,r),_=Us(I,c,C);if(_!==void 0&&V!==void 0){var ee=void 0;if(_===$0?ee=na.UTF16(t,x+w,Y):ee=na.MACSTRING(t,x+w,Y,_),ee){var q=n[g];q===void 0&&(q=n[g]={}),q[V]=ee}}}return o===1&&a.parseUShort(),n}function d0(t){var e={};for(var r in t)e[t[r]]=parseInt(r);return e}function HA(t,e,r,n,a,o){return new ge.Record("NameRecord",[{name:"platformID",type:"USHORT",value:t},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:r},{name:"nameID",type:"USHORT",value:n},{name:"length",type:"USHORT",value:a},{name:"offset",type:"USHORT",value:o}])}function $L(t,e){var r=t.length,n=e.length-r+1;e:for(var a=0;a<n;a++)for(;a<n;a++){for(var o=0;o<r;o++)if(e[a+o]!==t[o])continue e;return a}return-1}function FA(t,e){var r=$L(t,e);if(r<0){r=e.length;for(var n=0,a=t.length;n<a;++n)e.push(t[n])}return r}function eh(t,e){var r,n=[],a={},o=d0(Ps);for(var s in t){var x=o[s];if(x===void 0&&(x=s),r=parseInt(x),isNaN(r))throw new Error('Name table entry "'+s+'" does not exist, see nameTableNames for complete list.');a[r]=t[s],n.push(r)}for(var L=d0(bs),I=d0(vs),c=[],C=[],R=0;R<n.length;R++){r=n[R];var g=a[r];for(var Y in g){var w=g[Y],V=1,_=L[Y],ee=ZL[_],q=Us(V,ee,_),ce=Se.MACSTRING(w,q);ce===void 0&&(V=0,_=e.indexOf(Y),_<0&&(_=e.length,e.push(Y)),ee=4,ce=Se.UTF16(w));var Te=FA(ce,C);c.push(HA(V,ee,_,r,ce.length,Te));var oe=I[Y];if(oe!==void 0){var Ie=Se.UTF16(w),de=FA(Ie,C);c.push(HA(3,1,oe,r,Ie.length,de))}}}c.sort(function(ke,At){return ke.platformID-At.platformID||ke.encodingID-At.encodingID||ke.languageID-At.languageID||ke.nameID-At.nameID});for(var De=new ge.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:c.length},{name:"stringOffset",type:"USHORT",value:6+c.length*12}]),We=0;We<c.length;We++)De.fields.push({name:"record_"+We,type:"RECORD",value:c[We]});return De.fields.push({name:"strings",type:"LITERAL",value:C}),De}var ws={parse:QL,make:eh},eo=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function th(t){for(var e=0;e<eo.length;e+=1){var r=eo[e];if(t>=r.begin&&t<r.end)return e}return-1}function rh(t,e){var r={},n=new ye.Parser(t,e);r.version=n.parseUShort(),r.xAvgCharWidth=n.parseShort(),r.usWeightClass=n.parseUShort(),r.usWidthClass=n.parseUShort(),r.fsType=n.parseUShort(),r.ySubscriptXSize=n.parseShort(),r.ySubscriptYSize=n.parseShort(),r.ySubscriptXOffset=n.parseShort(),r.ySubscriptYOffset=n.parseShort(),r.ySuperscriptXSize=n.parseShort(),r.ySuperscriptYSize=n.parseShort(),r.ySuperscriptXOffset=n.parseShort(),r.ySuperscriptYOffset=n.parseShort(),r.yStrikeoutSize=n.parseShort(),r.yStrikeoutPosition=n.parseShort(),r.sFamilyClass=n.parseShort(),r.panose=[];for(var a=0;a<10;a++)r.panose[a]=n.parseByte();return r.ulUnicodeRange1=n.parseULong(),r.ulUnicodeRange2=n.parseULong(),r.ulUnicodeRange3=n.parseULong(),r.ulUnicodeRange4=n.parseULong(),r.achVendID=String.fromCharCode(n.parseByte(),n.parseByte(),n.parseByte(),n.parseByte()),r.fsSelection=n.parseUShort(),r.usFirstCharIndex=n.parseUShort(),r.usLastCharIndex=n.parseUShort(),r.sTypoAscender=n.parseShort(),r.sTypoDescender=n.parseShort(),r.sTypoLineGap=n.parseShort(),r.usWinAscent=n.parseUShort(),r.usWinDescent=n.parseUShort(),r.version>=1&&(r.ulCodePageRange1=n.parseULong(),r.ulCodePageRange2=n.parseULong()),r.version>=2&&(r.sxHeight=n.parseShort(),r.sCapHeight=n.parseShort(),r.usDefaultChar=n.parseUShort(),r.usBreakChar=n.parseUShort(),r.usMaxContent=n.parseUShort()),r}function nh(t){return new ge.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],t)}var to={parse:rh,make:nh,unicodeRanges:eo,getUnicodeRange:th};function ah(t,e){var r={},n=new ye.Parser(t,e);switch(r.version=n.parseVersion(),r.italicAngle=n.parseFixed(),r.underlinePosition=n.parseShort(),r.underlineThickness=n.parseShort(),r.isFixedPitch=n.parseULong(),r.minMemType42=n.parseULong(),r.maxMemType42=n.parseULong(),r.minMemType1=n.parseULong(),r.maxMemType1=n.parseULong(),r.version){case 1:r.names=Dn.slice();break;case 2:r.numberOfGlyphs=n.parseUShort(),r.glyphNameIndex=new Array(r.numberOfGlyphs);for(var a=0;a<r.numberOfGlyphs;a++)r.glyphNameIndex[a]=n.parseUShort();r.names=[];for(var o=0;o<r.numberOfGlyphs;o++)if(r.glyphNameIndex[o]>=Dn.length){var s=n.parseChar();r.names.push(n.parseString(s))}break;case 2.5:r.numberOfGlyphs=n.parseUShort(),r.offset=new Array(r.numberOfGlyphs);for(var x=0;x<r.numberOfGlyphs;x++)r.offset[x]=n.parseChar();break}return r}function ih(){return new ge.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var Ys={parse:ah,make:ih},yr=new Array(9);yr[1]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(te.coverage),deltaGlyphId:this.parseUShort()};if(r===2)return{substFormat:2,coverage:this.parsePointer(te.coverage),substitute:this.parseOffset16List()};Ge.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};yr[2]=function(){var e=this.parseUShort();return Ge.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),sequences:this.parseListOfLists()}};yr[3]=function(){var e=this.parseUShort();return Ge.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),alternateSets:this.parseListOfLists()}};yr[4]=function(){var e=this.parseUShort();return Ge.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var qn={sequenceIndex:te.uShort,lookupListIndex:te.uShort};yr[5]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:r,coverage:this.parsePointer(te.coverage),ruleSets:this.parseListOfLists(function(){var o=this.parseUShort(),s=this.parseUShort();return{input:this.parseUShortList(o-1),lookupRecords:this.parseRecordList(s,qn)}})};if(r===2)return{substFormat:r,coverage:this.parsePointer(te.coverage),classDef:this.parsePointer(te.classDef),classSets:this.parseListOfLists(function(){var o=this.parseUShort(),s=this.parseUShort();return{classes:this.parseUShortList(o-1),lookupRecords:this.parseRecordList(s,qn)}})};if(r===3){var n=this.parseUShort(),a=this.parseUShort();return{substFormat:r,coverages:this.parseList(n,te.pointer(te.coverage)),lookupRecords:this.parseRecordList(a,qn)}}Ge.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};yr[6]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(te.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(qn)}})};if(r===2)return{substFormat:2,coverage:this.parsePointer(te.coverage),backtrackClassDef:this.parsePointer(te.classDef),inputClassDef:this.parsePointer(te.classDef),lookaheadClassDef:this.parsePointer(te.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(qn)}})};if(r===3)return{substFormat:3,backtrackCoverage:this.parseList(te.pointer(te.coverage)),inputCoverage:this.parseList(te.pointer(te.coverage)),lookaheadCoverage:this.parseList(te.pointer(te.coverage)),lookupRecords:this.parseRecordList(qn)};Ge.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};yr[7]=function(){var e=this.parseUShort();Ge.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var r=this.parseUShort(),n=new te(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:r,extension:yr[r].call(n)}};yr[8]=function(){var e=this.parseUShort();return Ge.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),backtrackCoverage:this.parseList(te.pointer(te.coverage)),lookaheadCoverage:this.parseList(te.pointer(te.coverage)),substitutes:this.parseUShortList()}};function oh(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);return Ge.argument(n===1||n===1.1,"Unsupported GSUB table version."),n===1?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(yr)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(yr),variations:r.parseFeatureVariationsList()}}var xa=new Array(9);xa[1]=function(e){return e.substFormat===1?new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.ushortList("substitute",e.substitute)))};xa[2]=function(e){return Ge.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.tableList("seqSet",e.sequences,function(r){return new ge.Table("sequenceSetTable",ge.ushortList("sequence",r))})))};xa[3]=function(e){return Ge.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.tableList("altSet",e.alternateSets,function(r){return new ge.Table("alternateSetTable",ge.ushortList("alternate",r))})))};xa[4]=function(e){return Ge.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.tableList("ligSet",e.ligatureSets,function(r){return new ge.Table("ligatureSetTable",ge.tableList("ligature",r,function(n){return new ge.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:n.ligGlyph}].concat(ge.ushortList("component",n.components,n.components.length+1)))}))})))};xa[6]=function(e){if(e.substFormat===1){var r=new ge.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.tableList("chainRuleSet",e.chainRuleSets,function(o){return new ge.Table("chainRuleSetTable",ge.tableList("chainRule",o,function(s){var x=ge.ushortList("backtrackGlyph",s.backtrack,s.backtrack.length).concat(ge.ushortList("inputGlyph",s.input,s.input.length+1)).concat(ge.ushortList("lookaheadGlyph",s.lookahead,s.lookahead.length)).concat(ge.ushortList("substitution",[],s.lookupRecords.length));return s.lookupRecords.forEach(function(L,I){x=x.concat({name:"sequenceIndex"+I,type:"USHORT",value:L.sequenceIndex}).concat({name:"lookupListIndex"+I,type:"USHORT",value:L.lookupListIndex})}),new ge.Table("chainRuleTable",x)}))})));return r}else if(e.substFormat===2)Ge.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var n=[{name:"substFormat",type:"USHORT",value:e.substFormat}];n.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(o,s){n.push({name:"backtrackCoverage"+s,type:"TABLE",value:new ge.Coverage(o)})}),n.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(o,s){n.push({name:"inputCoverage"+s,type:"TABLE",value:new ge.Coverage(o)})}),n.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(o,s){n.push({name:"lookaheadCoverage"+s,type:"TABLE",value:new ge.Coverage(o)})}),n.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(o,s){n=n.concat({name:"sequenceIndex"+s,type:"USHORT",value:o.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:o.lookupListIndex})});var a=new ge.Table("chainContextTable",n);return a}Ge.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function Ah(t){return new ge.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new ge.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new ge.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new ge.LookupList(t.lookups,xa)}])}var Ws={parse:oh,make:Ah};function sh(t,e){var r=new ye.Parser(t,e),n=r.parseULong();Ge.argument(n===1,"Unsupported META table version."),r.parseULong(),r.parseULong();for(var a=r.parseULong(),o={},s=0;s<a;s++){var x=r.parseTag(),L=r.parseULong(),I=r.parseULong(),c=na.UTF8(t,e+L,I);o[x]=c}return o}function lh(t){var e=Object.keys(t).length,r="",n=16+e*12,a=new ge.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:n},{name:"numTags",type:"ULONG",value:e}]);for(var o in t){var s=r.length;r+=t[o],a.fields.push({name:"tag "+o,type:"TAG",value:o}),a.fields.push({name:"offset "+o,type:"ULONG",value:n+s}),a.fields.push({name:"length "+o,type:"ULONG",value:t[o].length})}return a.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),a}var ks={parse:sh,make:lh};function MA(t){return Math.log(t)/Math.log(2)|0}function Fo(t){for(;t.length%4!==0;)t.push(0);for(var e=0,r=0;r<t.length;r+=4)e+=(t[r]<<24)+(t[r+1]<<16)+(t[r+2]<<8)+t[r+3];return e%=Math.pow(2,32),e}function GA(t,e,r,n){return new ge.Record("Table Record",[{name:"tag",type:"TAG",value:t!==void 0?t:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:r!==void 0?r:0},{name:"length",type:"ULONG",value:n!==void 0?n:0}])}function Ks(t){var e=new ge.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=t,e.numTables=t.length;var r=Math.pow(2,MA(e.numTables));e.searchRange=16*r,e.entrySelector=MA(r),e.rangeShift=e.numTables*16-e.searchRange;for(var n=[],a=[],o=e.sizeOf()+GA().sizeOf()*e.numTables;o%4!==0;)o+=1,a.push({name:"padding",type:"BYTE",value:0});for(var s=0;s<t.length;s+=1){var x=t[s];Ge.argument(x.tableName.length===4,"Table name"+x.tableName+" is invalid.");var L=x.sizeOf(),I=GA(x.tableName,Fo(x.encode()),o,L);for(n.push({name:I.tag+" Table Record",type:"RECORD",value:I}),a.push({name:x.tableName+" table",type:"RECORD",value:x}),o+=L,Ge.argument(!isNaN(o),"Something went wrong calculating the offset.");o%4!==0;)o+=1,a.push({name:"padding",type:"BYTE",value:0})}return n.sort(function(c,C){return c.value.tag>C.value.tag?1:-1}),e.fields=e.fields.concat(n),e.fields=e.fields.concat(a),e}function PA(t,e,r){for(var n=0;n<e.length;n+=1){var a=t.charToGlyphIndex(e[n]);if(a>0){var o=t.glyphs.get(a);return o.getMetrics()}}return r}function xh(t){for(var e=0,r=0;r<t.length;r+=1)e+=t[r];return e/t.length}function Eh(t){for(var e=[],r=[],n=[],a=[],o=[],s=[],x=[],L,I=0,c=0,C=0,R=0,g=0,Y=0;Y<t.glyphs.length;Y+=1){var w=t.glyphs.get(Y),V=w.unicode|0;if(isNaN(w.advanceWidth))throw new Error("Glyph "+w.name+" ("+Y+"): advanceWidth is not a number.");(L>V||L===void 0)&&V>0&&(L=V),I<V&&(I=V);var _=to.getUnicodeRange(V);if(_<32)c|=1<<_;else if(_<64)C|=1<<_-32;else if(_<96)R|=1<<_-64;else if(_<123)g|=1<<_-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(w.name!==".notdef"){var ee=w.getMetrics();e.push(ee.xMin),r.push(ee.yMin),n.push(ee.xMax),a.push(ee.yMax),s.push(ee.leftSideBearing),x.push(ee.rightSideBearing),o.push(w.advanceWidth)}}var q={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,n),yMax:Math.max.apply(null,a),advanceWidthMax:Math.max.apply(null,o),advanceWidthAvg:xh(o),minLeftSideBearing:Math.min.apply(null,s),maxLeftSideBearing:Math.max.apply(null,s),minRightSideBearing:Math.min.apply(null,x)};q.ascender=t.ascender,q.descender=t.descender;var ce=Bs.make({flags:3,unitsPerEm:t.unitsPerEm,xMin:q.xMin,yMin:q.yMin,xMax:q.xMax,yMax:q.yMax,lowestRecPPEM:3,createdTimestamp:t.createdTimestamp}),Te=Hs.make({ascender:q.ascender,descender:q.descender,advanceWidthMax:q.advanceWidthMax,minLeftSideBearing:q.minLeftSideBearing,minRightSideBearing:q.minRightSideBearing,xMaxExtent:q.maxLeftSideBearing+(q.xMax-q.xMin),numberOfHMetrics:t.glyphs.length}),oe=Gs.make(t.glyphs.length),Ie=to.make(Object.assign({xAvgCharWidth:Math.round(q.advanceWidthAvg),usFirstCharIndex:L,usLastCharIndex:I,ulUnicodeRange1:c,ulUnicodeRange2:C,ulUnicodeRange3:R,ulUnicodeRange4:g,sTypoAscender:q.ascender,sTypoDescender:q.descender,sTypoLineGap:0,usWinAscent:q.yMax,usWinDescent:Math.abs(q.yMin),ulCodePageRange1:1,sxHeight:PA(t,"xyvw",{yMax:Math.round(q.ascender/2)}).yMax,sCapHeight:PA(t,"HIKLEFJMNTZBDPRAGOQSUVWXY",q).yMax,usDefaultChar:t.hasChar(" ")?32:0,usBreakChar:t.hasChar(" ")?32:0},t.tables.os2)),de=Fs.make(t.glyphs),De=us.make(t.glyphs),We=t.getEnglishName("fontFamily"),ke=t.getEnglishName("fontSubfamily"),At=We+" "+ke,st=t.getEnglishName("postScriptName");st||(st=We.replace(/\s/g,"")+"-"+ke);var ue={};for(var It in t.names)ue[It]=t.names[It];ue.uniqueID||(ue.uniqueID={en:t.getEnglishName("manufacturer")+":"+At}),ue.postScriptName||(ue.postScriptName={en:st}),ue.preferredFamily||(ue.preferredFamily=t.names.fontFamily),ue.preferredSubfamily||(ue.preferredSubfamily=t.names.fontSubfamily);var Ae=[],$e=ws.make(ue,Ae),lt=Ae.length>0?Ms.make(Ae):void 0,Oe=Ys.make(),ht=Os.make(t.glyphs,{version:t.getEnglishName("version"),fullName:At,familyName:We,weightName:ke,postScriptName:st,unitsPerEm:t.unitsPerEm,fontBBox:[0,q.yMin,q.ascender,q.advanceWidthMax]}),ct=t.metas&&Object.keys(t.metas).length>0?ks.make(t.metas):void 0,Gt=[ce,Te,oe,Ie,$e,De,Oe,ht,de];lt&&Gt.push(lt),t.tables.gsub&&Gt.push(Ws.make(t.tables.gsub)),ct&&Gt.push(ct);for(var rn=Ks(Gt),h0=rn.encode(),Ht=Fo(h0),nn=rn.fields,_n=!1,an=0;an<nn.length;an+=1)if(nn[an].name==="head table"){nn[an].value.checkSumAdjustment=2981146554-Ht,_n=!0;break}if(!_n)throw new Error("Could not find head table with checkSum to adjust.");return rn}var Lh={make:Ks,fontToTable:Eh,computeCheckSum:Fo};function u0(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a].tag;if(o===e)return a;o<e?r=a+1:n=a-1}return-r-1}function bA(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a];if(o===e)return a;o<e?r=a+1:n=a-1}return-r-1}function vA(t,e){for(var r,n=0,a=t.length-1;n<=a;){var o=n+a>>>1;r=t[o];var s=r.start;if(s===e)return r;s<e?n=o+1:a=o-1}if(n>0)return r=t[n-1],e>r.end?0:r}function Va(t,e){this.font=t,this.tableName=e}Va.prototype={searchTag:u0,binSearch:bA,getTable:function(t){var e=this.font.tables[this.tableName];return!e&&t&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var t=this.getTable();return t?t.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var t=this.getTable();if(t){for(var e=!1,r=0;r<t.scripts.length;r++){var n=t.scripts[r].tag;if(n==="DFLT")return n;n==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(t,e){var r=this.getTable(e);if(r){t=t||"DFLT";var n=r.scripts,a=u0(r.scripts,t);if(a>=0)return n[a].script;if(e){var o={tag:t,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return n.splice(-1-a,0,o),o.script}}},getLangSysTable:function(t,e,r){var n=this.getScriptTable(t,r);if(n){if(!e||e==="dflt"||e==="DFLT")return n.defaultLangSys;var a=u0(n.langSysRecords,e);if(a>=0)return n.langSysRecords[a].langSys;if(r){var o={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return n.langSysRecords.splice(-1-a,0,o),o.langSys}}},getFeatureTable:function(t,e,r,n){var a=this.getLangSysTable(t,e,n);if(a){for(var o,s=a.featureIndexes,x=this.font.tables[this.tableName].features,L=0;L<s.length;L++)if(o=x[s[L]],o.tag===r)return o.feature;if(n){var I=x.length;return Ge.assert(I===0||r>=x[I-1].tag,"Features must be added in alphabetical order."),o={tag:r,feature:{params:0,lookupListIndexes:[]}},x.push(o),s.push(I),o.feature}}},getLookupTables:function(t,e,r,n,a){var o=this.getFeatureTable(t,e,r,a),s=[];if(o){for(var x,L=o.lookupListIndexes,I=this.font.tables[this.tableName].lookups,c=0;c<L.length;c++)x=I[L[c]],x.lookupType===n&&s.push(x);if(s.length===0&&a){x={lookupType:n,lookupFlag:0,subtables:[],markFilteringSet:void 0};var C=I.length;return I.push(x),L.push(C),[x]}}return s},getGlyphClass:function(t,e){switch(t.format){case 1:return t.startGlyph<=e&&e<t.startGlyph+t.classes.length?t.classes[e-t.startGlyph]:0;case 2:var r=vA(t.ranges,e);return r?r.classId:0}},getCoverageIndex:function(t,e){switch(t.format){case 1:var r=bA(t.glyphs,e);return r>=0?r:-1;case 2:var n=vA(t.ranges,e);return n?n.index+e-n.start:-1}},expandCoverage:function(t){if(t.format===1)return t.glyphs;for(var e=[],r=t.ranges,n=0;n<r.length;n++)for(var a=r[n],o=a.start,s=a.end,x=o;x<=s;x++)e.push(x);return e}};function za(t){Va.call(this,t,"gpos")}za.prototype=Va.prototype;za.prototype.init=function(){var t=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(t)};za.prototype.getKerningValue=function(t,e,r){for(var n=0;n<t.length;n++)for(var a=t[n].subtables,o=0;o<a.length;o++){var s=a[o],x=this.getCoverageIndex(s.coverage,e);if(!(x<0))switch(s.posFormat){case 1:for(var L=s.pairSets[x],I=0;I<L.length;I++){var c=L[I];if(c.secondGlyph===r)return c.value1&&c.value1.xAdvance||0}break;case 2:var C=this.getGlyphClass(s.classDef1,e),R=this.getGlyphClass(s.classDef2,r),g=s.classRecords[C][R];return g.value1&&g.value1.xAdvance||0}}return 0};za.prototype.getKerningTables=function(t,e){if(this.font.tables.gpos)return this.getLookupTables(t,e,"kern",2)};function cr(t){Va.call(this,t,"gsub")}function hh(t,e){var r=t.length;if(r!==e.length)return!1;for(var n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Mo(t,e,r){for(var n=t.subtables,a=0;a<n.length;a++){var o=n[a];if(o.substFormat===e)return o}if(r)return n.push(r),r}cr.prototype=Va.prototype;cr.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};cr.prototype.getSingle=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,1),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++){var L=s[x],I=this.expandCoverage(L.coverage),c=void 0;if(L.substFormat===1){var C=L.deltaGlyphId;for(c=0;c<I.length;c++){var R=I[c];n.push({sub:R,by:R+C})}}else{var g=L.substitute;for(c=0;c<I.length;c++)n.push({sub:I[c],by:g[c]})}}return n};cr.prototype.getMultiple=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,2),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++){var L=s[x],I=this.expandCoverage(L.coverage),c=void 0;for(c=0;c<I.length;c++){var C=I[c],R=L.sequences[c];n.push({sub:C,by:R})}}return n};cr.prototype.getAlternates=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,3),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++)for(var L=s[x],I=this.expandCoverage(L.coverage),c=L.alternateSets,C=0;C<I.length;C++)n.push({sub:I[C],by:c[C]});return n};cr.prototype.getLigatures=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,4),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++)for(var L=s[x],I=this.expandCoverage(L.coverage),c=L.ligatureSets,C=0;C<I.length;C++)for(var R=I[C],g=c[C],Y=0;Y<g.length;Y++){var w=g[Y];n.push({sub:[R].concat(w.components),by:w.ligGlyph})}return n};cr.prototype.addSingle=function(t,e,r,n){var a=this.getLookupTables(r,n,t,1,!0)[0],o=Mo(a,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Ge.assert(o.coverage.format===1,"Single: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.substitute.splice(x,0,0)),o.substitute[x]=e.by};cr.prototype.addMultiple=function(t,e,r,n){Ge.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var a=this.getLookupTables(r,n,t,2,!0)[0],o=Mo(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Ge.assert(o.coverage.format===1,"Multiple: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.sequences.splice(x,0,0)),o.sequences[x]=e.by};cr.prototype.addAlternate=function(t,e,r,n){var a=this.getLookupTables(r,n,t,3,!0)[0],o=Mo(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Ge.assert(o.coverage.format===1,"Alternate: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.alternateSets.splice(x,0,0)),o.alternateSets[x]=e.by};cr.prototype.addLigature=function(t,e,r,n){var a=this.getLookupTables(r,n,t,4,!0)[0],o=a.subtables[0];o||(o={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},a.subtables[0]=o),Ge.assert(o.coverage.format===1,"Ligature: unable to modify coverage table format "+o.coverage.format);var s=e.sub[0],x=e.sub.slice(1),L={ligGlyph:e.by,components:x},I=this.binSearch(o.coverage.glyphs,s);if(I>=0){for(var c=o.ligatureSets[I],C=0;C<c.length;C++)if(hh(c[C].components,x))return;c.push(L)}else I=-1-I,o.coverage.glyphs.splice(I,0,s),o.ligatureSets.splice(I,0,[L])};cr.prototype.getFeature=function(t,e,r){if(/ss\d\d/.test(t))return this.getSingle(t,e,r);switch(t){case"aalt":case"salt":return this.getSingle(t,e,r).concat(this.getAlternates(t,e,r));case"dlig":case"liga":case"rlig":return this.getLigatures(t,e,r);case"ccmp":return this.getMultiple(t,e,r).concat(this.getLigatures(t,e,r));case"stch":return this.getMultiple(t,e,r)}};cr.prototype.add=function(t,e,r,n){if(/ss\d\d/.test(t))return this.addSingle(t,e,r,n);switch(t){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(t,e,r,n):this.addAlternate(t,e,r,n);case"dlig":case"liga":case"rlig":return this.addLigature(t,e,r,n);case"ccmp":return e.by instanceof Array?this.addMultiple(t,e,r,n):this.addLigature(t,e,r,n)}};function ch(){return typeof window<"u"}function _s(t){for(var e=new ArrayBuffer(t.length),r=new Uint8Array(e),n=0;n<t.length;++n)r[n]=t[n];return e}function Th(t){for(var e=new Buffer(t.byteLength),r=new Uint8Array(t),n=0;n<e.length;++n)e[n]=r[n];return e}function Ia(t,e){if(!t)throw e}function UA(t,e,r,n,a){var o;return(e&n)>0?(o=t.parseByte(),e&a||(o=-o),o=r+o):(e&a)>0?o=r:o=r+t.parseShort(),o}function Vs(t,e,r){var n=new ye.Parser(e,r);t.numberOfContours=n.parseShort(),t._xMin=n.parseShort(),t._yMin=n.parseShort(),t._xMax=n.parseShort(),t._yMax=n.parseShort();var a,o;if(t.numberOfContours>0){for(var s=t.endPointIndices=[],x=0;x<t.numberOfContours;x+=1)s.push(n.parseUShort());t.instructionLength=n.parseUShort(),t.instructions=[];for(var L=0;L<t.instructionLength;L+=1)t.instructions.push(n.parseByte());var I=s[s.length-1]+1;a=[];for(var c=0;c<I;c+=1)if(o=n.parseByte(),a.push(o),(o&8)>0)for(var C=n.parseByte(),R=0;R<C;R+=1)a.push(o),c+=1;if(Ge.argument(a.length===I,"Bad flags."),s.length>0){var g=[],Y;if(I>0){for(var w=0;w<I;w+=1)o=a[w],Y={},Y.onCurve=!!(o&1),Y.lastPointOfContour=s.indexOf(w)>=0,g.push(Y);for(var V=0,_=0;_<I;_+=1)o=a[_],Y=g[_],Y.x=UA(n,o,V,2,16),V=Y.x;for(var ee=0,q=0;q<I;q+=1)o=a[q],Y=g[q],Y.y=UA(n,o,ee,4,32),ee=Y.y}t.points=g}else t.points=[]}else if(t.numberOfContours===0)t.points=[];else{t.isComposite=!0,t.points=[],t.components=[];for(var ce=!0;ce;){a=n.parseUShort();var Te={glyphIndex:n.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(a&1)>0?(a&2)>0?(Te.dx=n.parseShort(),Te.dy=n.parseShort()):Te.matchedPoints=[n.parseUShort(),n.parseUShort()]:(a&2)>0?(Te.dx=n.parseChar(),Te.dy=n.parseChar()):Te.matchedPoints=[n.parseByte(),n.parseByte()],(a&8)>0?Te.xScale=Te.yScale=n.parseF2Dot14():(a&64)>0?(Te.xScale=n.parseF2Dot14(),Te.yScale=n.parseF2Dot14()):(a&128)>0&&(Te.xScale=n.parseF2Dot14(),Te.scale01=n.parseF2Dot14(),Te.scale10=n.parseF2Dot14(),Te.yScale=n.parseF2Dot14()),t.components.push(Te),ce=!!(a&32)}if(a&256){t.instructionLength=n.parseUShort(),t.instructions=[];for(var oe=0;oe<t.instructionLength;oe+=1)t.instructions.push(n.parseByte())}}}function p0(t,e){for(var r=[],n=0;n<t.length;n+=1){var a=t[n],o={x:e.xScale*a.x+e.scale01*a.y+e.dx,y:e.scale10*a.x+e.yScale*a.y+e.dy,onCurve:a.onCurve,lastPointOfContour:a.lastPointOfContour};r.push(o)}return r}function Ih(t){for(var e=[],r=[],n=0;n<t.length;n+=1){var a=t[n];r.push(a),a.lastPointOfContour&&(e.push(r),r=[])}return Ge.argument(r.length===0,"There are still points left in the current contour."),e}function zs(t){var e=new Mt;if(!t)return e;for(var r=Ih(t),n=0;n<r.length;++n){var a=r[n],o=null,s=a[a.length-1],x=a[0];if(s.onCurve)e.moveTo(s.x,s.y);else if(x.onCurve)e.moveTo(x.x,x.y);else{var L={x:(s.x+x.x)*.5,y:(s.y+x.y)*.5};e.moveTo(L.x,L.y)}for(var I=0;I<a.length;++I)if(o=s,s=x,x=a[(I+1)%a.length],s.onCurve)e.lineTo(s.x,s.y);else{var c=x;o.onCurve||((s.x+o.x)*.5,(s.y+o.y)*.5),x.onCurve||(c={x:(s.x+x.x)*.5,y:(s.y+x.y)*.5}),e.quadraticCurveTo(s.x,s.y,c.x,c.y)}e.closePath()}return e}function Js(t,e){if(e.isComposite)for(var r=0;r<e.components.length;r+=1){var n=e.components[r],a=t.get(n.glyphIndex);if(a.getPath(),a.points){var o=void 0;if(n.matchedPoints===void 0)o=p0(a.points,n);else{if(n.matchedPoints[0]>e.points.length-1||n.matchedPoints[1]>a.points.length-1)throw Error("Matched points out of range in "+e.name);var s=e.points[n.matchedPoints[0]],x=a.points[n.matchedPoints[1]],L={xScale:n.xScale,scale01:n.scale01,scale10:n.scale10,yScale:n.yScale,dx:0,dy:0};x=p0([x],L)[0],L.dx=s.x-x.x,L.dy=s.y-x.y,o=p0(a.points,L)}e.points=e.points.concat(o)}}return zs(e.points)}function dh(t,e,r,n){for(var a=new wr.GlyphSet(n),o=0;o<r.length-1;o+=1){var s=r[o],x=r[o+1];s!==x?a.push(o,wr.ttfGlyphLoader(n,o,Vs,t,e+s,Js)):a.push(o,wr.glyphLoader(n,o))}return a}function uh(t,e,r,n){var a=new wr.GlyphSet(n);return n._push=function(o){var s=r[o],x=r[o+1];s!==x?a.push(o,wr.ttfGlyphLoader(n,o,Vs,t,e+s,Js)):a.push(o,wr.glyphLoader(n,o))},a}function ph(t,e,r,n,a){return a.lowMemory?uh(t,e,r,n):dh(t,e,r,n)}var Zs={getPath:zs,parse:ph},Xs,Gn,js,ro;function qs(t){this.font=t,this.getCommands=function(e){return Zs.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function Sh(t){return t}function Qs(t){return Math.sign(t)*Math.round(Math.abs(t))}function Ch(t){return Math.sign(t)*Math.round(Math.abs(t*2))/2}function gh(t){return Math.sign(t)*(Math.round(Math.abs(t)+.5)-.5)}function Rh(t){return Math.sign(t)*Math.ceil(Math.abs(t))}function yh(t){return Math.sign(t)*Math.floor(Math.abs(t))}var $s=function(t){var e=this.srPeriod,r=this.srPhase,n=this.srThreshold,a=1;return t<0&&(t=-t,a=-1),t+=n-r,t=Math.trunc(t/e)*e,t+=r,t<0?r*a:t*a},Ur={x:1,y:0,axis:"x",distance:function(t,e,r,n){return(r?t.xo:t.x)-(n?e.xo:e.x)},interpolate:function(t,e,r,n){var a,o,s,x,L,I,c;if(!n||n===this){if(a=t.xo-e.xo,o=t.xo-r.xo,L=e.x-e.xo,I=r.x-r.xo,s=Math.abs(a),x=Math.abs(o),c=s+x,c===0){t.x=t.xo+(L+I)/2;return}t.x=t.xo+(L*x+I*s)/c;return}if(a=n.distance(t,e,!0,!0),o=n.distance(t,r,!0,!0),L=n.distance(e,e,!1,!0),I=n.distance(r,r,!1,!0),s=Math.abs(a),x=Math.abs(o),c=s+x,c===0){Ur.setRelative(t,t,(L+I)/2,n,!0);return}Ur.setRelative(t,t,(L*x+I*s)/c,n,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(t,e,r,n,a){if(!n||n===this){t.x=(a?e.xo:e.x)+r;return}var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,L=s+r*n.y;t.x=x+(t.y-L)/n.normalSlope},slope:0,touch:function(t){t.xTouched=!0},touched:function(t){return t.xTouched},untouch:function(t){t.xTouched=!1}},zr={x:0,y:1,axis:"y",distance:function(t,e,r,n){return(r?t.yo:t.y)-(n?e.yo:e.y)},interpolate:function(t,e,r,n){var a,o,s,x,L,I,c;if(!n||n===this){if(a=t.yo-e.yo,o=t.yo-r.yo,L=e.y-e.yo,I=r.y-r.yo,s=Math.abs(a),x=Math.abs(o),c=s+x,c===0){t.y=t.yo+(L+I)/2;return}t.y=t.yo+(L*x+I*s)/c;return}if(a=n.distance(t,e,!0,!0),o=n.distance(t,r,!0,!0),L=n.distance(e,e,!1,!0),I=n.distance(r,r,!1,!0),s=Math.abs(a),x=Math.abs(o),c=s+x,c===0){zr.setRelative(t,t,(L+I)/2,n,!0);return}zr.setRelative(t,t,(L*x+I*s)/c,n,!0)},normalSlope:0,setRelative:function(t,e,r,n,a){if(!n||n===this){t.y=(a?e.yo:e.y)+r;return}var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,L=s+r*n.y;t.y=L+n.normalSlope*(t.x-x)},slope:Number.POSITIVE_INFINITY,touch:function(t){t.yTouched=!0},touched:function(t){return t.yTouched},untouch:function(t){t.yTouched=!1}};Object.freeze(Ur);Object.freeze(zr);function Ja(t,e){this.x=t,this.y=e,this.axis=void 0,this.slope=e/t,this.normalSlope=-t/e,Object.freeze(this)}Ja.prototype.distance=function(t,e,r,n){return this.x*Ur.distance(t,e,r,n)+this.y*zr.distance(t,e,r,n)};Ja.prototype.interpolate=function(t,e,r,n){var a,o,s,x,L,I,c;if(s=n.distance(t,e,!0,!0),x=n.distance(t,r,!0,!0),a=n.distance(e,e,!1,!0),o=n.distance(r,r,!1,!0),L=Math.abs(s),I=Math.abs(x),c=L+I,c===0){this.setRelative(t,t,(a+o)/2,n,!0);return}this.setRelative(t,t,(a*I+o*L)/c,n,!0)};Ja.prototype.setRelative=function(t,e,r,n,a){n=n||this;var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,L=s+r*n.y,I=n.normalSlope,c=this.slope,C=t.x,R=t.y;t.x=(c*C-I*x+L-R)/(c-I),t.y=c*(t.x-C)+R};Ja.prototype.touch=function(t){t.xTouched=!0,t.yTouched=!0};function Za(t,e){var r=Math.sqrt(t*t+e*e);return t/=r,e/=r,t===1&&e===0?Ur:t===0&&e===1?zr:new Ja(t,e)}function Zr(t,e,r,n){this.x=this.xo=Math.round(t*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=r,this.onCurve=n,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Zr.prototype.nextTouched=function(t){for(var e=this.nextPointOnContour;!t.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};Zr.prototype.prevTouched=function(t){for(var e=this.prevPointOnContour;!t.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Ga=Object.freeze(new Zr(0,0)),mh={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function hn(t,e){switch(this.env=t,this.stack=[],this.prog=e,t){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=Ur,this.round=Qs}}qs.prototype.exec=function(t,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var r=this.font,n=this._prepState;if(!n||n.ppem!==e){var a=this._fpgmState;if(!a){hn.prototype=mh,a=this._fpgmState=new hn("fpgm",r.tables.fpgm),a.funcs=[],a.font=r,ie.DEBUG&&(console.log("---EXEC FPGM---"),a.step=-1);try{Gn(a)}catch(I){console.log("Hinting error in FPGM:"+I),this._errorState=3;return}}hn.prototype=a,n=this._prepState=new hn("prep",r.tables.prep),n.ppem=e;var o=r.tables.cvt;if(o)for(var s=n.cvt=new Array(o.length),x=e/r.unitsPerEm,L=0;L<o.length;L++)s[L]=o[L]*x;else n.cvt=[];ie.DEBUG&&(console.log("---EXEC PREP---"),n.step=-1);try{Gn(n)}catch(I){this._errorState<2&&console.log("Hinting error in PREP:"+I),this._errorState=2}}if(!(this._errorState>1))try{return js(t,n)}catch(I){this._errorState<1&&(console.log("Hinting error:"+I),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};js=function(t,e){var r=e.ppem/e.font.unitsPerEm,n=r,a=t.components,o,s,x;if(hn.prototype=e,!a)x=new hn("glyf",t.instructions),ie.DEBUG&&(console.log("---EXEC GLYPH---"),x.step=-1),ro(t,x,r,n),s=x.gZone;else{var L=e.font;s=[],o=[];for(var I=0;I<a.length;I++){var c=a[I],C=L.glyphs.get(c.glyphIndex);x=new hn("glyf",C.instructions),ie.DEBUG&&(console.log("---EXEC COMP "+I+"---"),x.step=-1),ro(C,x,r,n);for(var R=Math.round(c.dx*r),g=Math.round(c.dy*n),Y=x.gZone,w=x.contours,V=0;V<Y.length;V++){var _=Y[V];_.xTouched=_.yTouched=!1,_.xo=_.x=_.x+R,_.yo=_.y=_.y+g}var ee=s.length;s.push.apply(s,Y);for(var q=0;q<w.length;q++)o.push(w[q]+ee)}t.instructions&&!x.inhibitGridFit&&(x=new hn("glyf",t.instructions),x.gZone=x.z0=x.z1=x.z2=s,x.contours=o,s.push(new Zr(0,0),new Zr(Math.round(t.advanceWidth*r),0)),ie.DEBUG&&(console.log("---EXEC COMPOSITE---"),x.step=-1),Gn(x),s.length-=2)}return s};ro=function(t,e,r,n){for(var a=t.points||[],o=a.length,s=e.gZone=e.z0=e.z1=e.z2=[],x=e.contours=[],L,I=0;I<o;I++)L=a[I],s[I]=new Zr(L.x*r,L.y*n,L.lastPointOfContour,L.onCurve);for(var c,C,R=0;R<o;R++)L=s[R],c||(c=L,x.push(R)),L.lastPointOfContour?(L.nextPointOnContour=c,c.prevPointOnContour=L,c=void 0):(C=s[R+1],L.nextPointOnContour=C,C.prevPointOnContour=L);if(!e.inhibitGridFit){if(ie.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var g=0;g<o;g++)console.log(g,s[g].x,s[g].y)}if(s.push(new Zr(0,0),new Zr(Math.round(t.advanceWidth*r),0)),Gn(e),s.length-=2,ie.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var Y=0;Y<o;Y++)console.log(Y,s[Y].x,s[Y].y)}}};Gn=function(t){var e=t.prog;if(e){var r=e.length,n;for(t.ip=0;t.ip<r;t.ip++){if(ie.DEBUG&&t.step++,n=Xs[e[t.ip]],!n)throw new Error("unknown instruction: 0x"+Number(e[t.ip]).toString(16));n(t)}}};function Qi(t){for(var e=t.tZone=new Array(t.gZone.length),r=0;r<e.length;r++)e[r]=new Zr(0,0)}function el(t,e){var r=t.prog,n=t.ip,a=1,o;do if(o=r[++n],o===88)a++;else if(o===89)a--;else if(o===64)n+=r[n+1]+1;else if(o===65)n+=2*r[n+1]+1;else if(o>=176&&o<=183)n+=o-176+1;else if(o>=184&&o<=191)n+=(o-184+1)*2;else if(e&&a===1&&o===27)break;while(a>0);t.ip=n}function wA(t,e){ie.DEBUG&&console.log(e.step,"SVTCA["+t.axis+"]"),e.fv=e.pv=e.dpv=t}function YA(t,e){ie.DEBUG&&console.log(e.step,"SPVTCA["+t.axis+"]"),e.pv=e.dpv=t}function WA(t,e){ie.DEBUG&&console.log(e.step,"SFVTCA["+t.axis+"]"),e.fv=t}function kA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log("SPVTL["+t+"]",n,a);var x,L;t?(x=o.y-s.y,L=s.x-o.x):(x=s.x-o.x,L=s.y-o.y),e.pv=e.dpv=Za(x,L)}function KA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log("SFVTL["+t+"]",n,a);var x,L;t?(x=o.y-s.y,L=s.x-o.x):(x=s.x-o.x,L=s.y-o.y),e.fv=Za(x,L)}function Nh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SPVFS[]",r,n),t.pv=t.dpv=Za(n,r)}function fh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SPVFS[]",r,n),t.fv=Za(n,r)}function Dh(t){var e=t.stack,r=t.pv;ie.DEBUG&&console.log(t.step,"GPV[]"),e.push(r.x*16384),e.push(r.y*16384)}function Oh(t){var e=t.stack,r=t.fv;ie.DEBUG&&console.log(t.step,"GFV[]"),e.push(r.x*16384),e.push(r.y*16384)}function Bh(t){t.fv=t.pv,ie.DEBUG&&console.log(t.step,"SFVTPV[]")}function Hh(t){var e=t.stack,r=e.pop(),n=e.pop(),a=e.pop(),o=e.pop(),s=e.pop(),x=t.z0,L=t.z1,I=x[r],c=x[n],C=L[a],R=L[o],g=t.z2[s];ie.DEBUG&&console.log("ISECT[], ",r,n,a,o,s);var Y=I.x,w=I.y,V=c.x,_=c.y,ee=C.x,q=C.y,ce=R.x,Te=R.y,oe=(Y-V)*(q-Te)-(w-_)*(ee-ce),Ie=Y*_-w*V,de=ee*Te-q*ce;g.x=(Ie*(ee-ce)-de*(Y-V))/oe,g.y=(Ie*(q-Te)-de*(w-_))/oe}function Fh(t){t.rp0=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP0[]",t.rp0)}function Mh(t){t.rp1=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP1[]",t.rp1)}function Gh(t){t.rp2=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP2[]",t.rp2)}function Ph(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP0[]",e),t.zp0=e,e){case 0:t.tZone||Qi(t),t.z0=t.tZone;break;case 1:t.z0=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function bh(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP1[]",e),t.zp1=e,e){case 0:t.tZone||Qi(t),t.z1=t.tZone;break;case 1:t.z1=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function vh(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP2[]",e),t.zp2=e,e){case 0:t.tZone||Qi(t),t.z2=t.tZone;break;case 1:t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function Uh(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZPS[]",e),t.zp0=t.zp1=t.zp2=e,e){case 0:t.tZone||Qi(t),t.z0=t.z1=t.z2=t.tZone;break;case 1:t.z0=t.z1=t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function wh(t){t.loop=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SLOOP[]",t.loop)}function Yh(t){ie.DEBUG&&console.log(t.step,"RTG[]"),t.round=Qs}function Wh(t){ie.DEBUG&&console.log(t.step,"RTHG[]"),t.round=gh}function kh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SMD[]",e),t.minDis=e/64}function Kh(t){ie.DEBUG&&console.log(t.step,"ELSE[]"),el(t,!1)}function _h(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"JMPR[]",e),t.ip+=e-1}function Vh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCVTCI[]",e),t.cvCutIn=e/64}function zh(t){var e=t.stack;ie.DEBUG&&console.log(t.step,"DUP[]"),e.push(e[e.length-1])}function S0(t){ie.DEBUG&&console.log(t.step,"POP[]"),t.stack.pop()}function Jh(t){ie.DEBUG&&console.log(t.step,"CLEAR[]"),t.stack.length=0}function Zh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SWAP[]"),e.push(r),e.push(n)}function Xh(t){var e=t.stack;ie.DEBUG&&console.log(t.step,"DEPTH[]"),e.push(e.length)}function jh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LOOPCALL[]",r,n);var a=t.ip,o=t.prog;t.prog=t.funcs[r];for(var s=0;s<n;s++)Gn(t),ie.DEBUG&&console.log(++t.step,s+1<n?"next loopcall":"done loopcall",s);t.ip=a,t.prog=o}function qh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"CALL[]",e);var r=t.ip,n=t.prog;t.prog=t.funcs[e],Gn(t),t.ip=r,t.prog=n,ie.DEBUG&&console.log(++t.step,"returning from",e)}function Qh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"CINDEX[]",r),e.push(e[e.length-r])}function $h(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"MINDEX[]",r),e.push(e.splice(e.length-r,1)[0])}function ec(t){if(t.env!=="fpgm")throw new Error("FDEF not allowed here");var e=t.stack,r=t.prog,n=t.ip,a=e.pop(),o=n;for(ie.DEBUG&&console.log(t.step,"FDEF[]",a);r[++n]!==45;);t.ip=n,t.funcs[a]=r.slice(o+1,n)}function _A(t,e){var r=e.stack.pop(),n=e.z0[r],a=e.fv,o=e.pv;ie.DEBUG&&console.log(e.step,"MDAP["+t+"]",r);var s=o.distance(n,Ga);t&&(s=e.round(s)),a.setRelative(n,Ga,s,o),a.touch(n),e.rp0=e.rp1=r}function VA(t,e){var r=e.z2,n=r.length-2,a,o,s;ie.DEBUG&&console.log(e.step,"IUP["+t.axis+"]");for(var x=0;x<n;x++)a=r[x],!t.touched(a)&&(o=a.prevTouched(t),o!==a&&(s=a.nextTouched(t),o===s&&t.setRelative(a,a,t.distance(o,o,!1,!0),t,!0),t.interpolate(a,o,s,t)))}function zA(t,e){for(var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=e.loop,L=e.z2;x--;){var I=r.pop(),c=L[I],C=s.distance(a,a,!1,!0);o.setRelative(c,c,C,s),o.touch(c),ie.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-x)+": ":"")+"SHP["+(t?"rp1":"rp2")+"]",I)}e.loop=1}function JA(t,e){var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=r.pop(),L=e.z2[e.contours[x]],I=L;ie.DEBUG&&console.log(e.step,"SHC["+t+"]",x);var c=s.distance(a,a,!1,!0);do I!==a&&o.setRelative(I,I,c,s),I=I.nextPointOnContour;while(I!==L)}function ZA(t,e){var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=r.pop();ie.DEBUG&&console.log(e.step,"SHZ["+t+"]",x);var L;switch(x){case 0:L=e.tZone;break;case 1:L=e.gZone;break;default:throw new Error("Invalid zone")}for(var I,c=s.distance(a,a,!1,!0),C=L.length-2,R=0;R<C;R++)I=L[R],o.setRelative(I,I,c,s)}function tc(t){for(var e=t.stack,r=t.loop,n=t.fv,a=e.pop()/64,o=t.z2;r--;){var s=e.pop(),x=o[s];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-r)+": ":"")+"SHPIX[]",s,a),n.setRelative(x,x,a),n.touch(x)}t.loop=1}function rc(t){for(var e=t.stack,r=t.rp1,n=t.rp2,a=t.loop,o=t.z0[r],s=t.z1[n],x=t.fv,L=t.dpv,I=t.z2;a--;){var c=e.pop(),C=I[c];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-a)+": ":"")+"IP[]",c,r,"<->",n),x.interpolate(C,o,s,L),x.touch(C)}t.loop=1}function XA(t,e){var r=e.stack,n=r.pop()/64,a=r.pop(),o=e.z1[a],s=e.z0[e.rp0],x=e.fv,L=e.pv;x.setRelative(o,s,n,L),x.touch(o),ie.DEBUG&&console.log(e.step,"MSIRP["+t+"]",n,a),e.rp1=e.rp0,e.rp2=a,t&&(e.rp0=a)}function nc(t){for(var e=t.stack,r=t.rp0,n=t.z0[r],a=t.loop,o=t.fv,s=t.pv,x=t.z1;a--;){var L=e.pop(),I=x[L];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-a)+": ":"")+"ALIGNRP[]",L),o.setRelative(I,n,0,s),o.touch(I)}t.loop=1}function ac(t){ie.DEBUG&&console.log(t.step,"RTDG[]"),t.round=Ch}function jA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z0[a],s=e.fv,x=e.pv,L=e.cvt[n];ie.DEBUG&&console.log(e.step,"MIAP["+t+"]",n,"(",L,")",a);var I=x.distance(o,Ga);t&&(Math.abs(I-L)<e.cvCutIn&&(I=L),I=e.round(I)),s.setRelative(o,Ga,I,x),e.zp0===0&&(o.xo=o.x,o.yo=o.y),s.touch(o),e.rp0=e.rp1=a}function ic(t){var e=t.prog,r=t.ip,n=t.stack,a=e[++r];ie.DEBUG&&console.log(t.step,"NPUSHB[]",a);for(var o=0;o<a;o++)n.push(e[++r]);t.ip=r}function oc(t){var e=t.ip,r=t.prog,n=t.stack,a=r[++e];ie.DEBUG&&console.log(t.step,"NPUSHW[]",a);for(var o=0;o<a;o++){var s=r[++e]<<8|r[++e];s&32768&&(s=-((s^65535)+1)),n.push(s)}t.ip=e}function Ac(t){var e=t.stack,r=t.store;r||(r=t.store=[]);var n=e.pop(),a=e.pop();ie.DEBUG&&console.log(t.step,"WS",n,a),r[a]=n}function sc(t){var e=t.stack,r=t.store,n=e.pop();ie.DEBUG&&console.log(t.step,"RS",n);var a=r&&r[n]||0;e.push(a)}function lc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"WCVTP",r,n),t.cvt[n]=r/64}function xc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"RCVT",r),e.push(t.cvt[r]*64)}function qA(t,e){var r=e.stack,n=r.pop(),a=e.z2[n];ie.DEBUG&&console.log(e.step,"GC["+t+"]",n),r.push(e.dpv.distance(a,Ga,t,!1)*64)}function QA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z1[n],s=e.z0[a],x=e.dpv.distance(s,o,t,t);ie.DEBUG&&console.log(e.step,"MD["+t+"]",n,a,"->",x),e.stack.push(Math.round(x*64))}function Ec(t){ie.DEBUG&&console.log(t.step,"MPPEM[]"),t.stack.push(t.ppem)}function Lc(t){ie.DEBUG&&console.log(t.step,"FLIPON[]"),t.autoFlip=!0}function hc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LT[]",r,n),e.push(n<r?1:0)}function cc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LTEQ[]",r,n),e.push(n<=r?1:0)}function Tc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"GT[]",r,n),e.push(n>r?1:0)}function Ic(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"GTEQ[]",r,n),e.push(n>=r?1:0)}function dc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"EQ[]",r,n),e.push(r===n?1:0)}function uc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"NEQ[]",r,n),e.push(r!==n?1:0)}function pc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"ODD[]",r),e.push(Math.trunc(r)%2?1:0)}function Sc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"EVEN[]",r),e.push(Math.trunc(r)%2?0:1)}function Cc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"IF[]",e),e||(el(t,!0),ie.DEBUG&&console.log(t.step,"EIF[]"))}function gc(t){ie.DEBUG&&console.log(t.step,"EIF[]")}function Rc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"AND[]",r,n),e.push(r&&n?1:0)}function yc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"OR[]",r,n),e.push(r||n?1:0)}function mc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"NOT[]",r),e.push(r?0:1)}function C0(t,e){var r=e.stack,n=r.pop(),a=e.fv,o=e.pv,s=e.ppem,x=e.deltaBase+(t-1)*16,L=e.deltaShift,I=e.z0;ie.DEBUG&&console.log(e.step,"DELTAP["+t+"]",n,r);for(var c=0;c<n;c++){var C=r.pop(),R=r.pop(),g=x+((R&240)>>4);if(g===s){var Y=(R&15)-8;Y>=0&&Y++,ie.DEBUG&&console.log(e.step,"DELTAPFIX",C,"by",Y*L);var w=I[C];a.setRelative(w,w,Y*L,o)}}}function Nc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"SDB[]",r),t.deltaBase=r}function fc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"SDS[]",r),t.deltaShift=Math.pow(.5,r)}function Dc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"ADD[]",r,n),e.push(n+r)}function Oc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SUB[]",r,n),e.push(n-r)}function Bc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"DIV[]",r,n),e.push(n*64/r)}function Hc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MUL[]",r,n),e.push(n*r/64)}function Fc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"ABS[]",r),e.push(Math.abs(r))}function Mc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"NEG[]",r),e.push(-r)}function Gc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"FLOOR[]",r),e.push(Math.floor(r/64)*64)}function Pc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"CEILING[]",r),e.push(Math.ceil(r/64)*64)}function ci(t,e){var r=e.stack,n=r.pop();ie.DEBUG&&console.log(e.step,"ROUND[]"),r.push(e.round(n/64)*64)}function bc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"WCVTF[]",r,n),t.cvt[n]=r*t.ppem/t.font.unitsPerEm}function g0(t,e){var r=e.stack,n=r.pop(),a=e.ppem,o=e.deltaBase+(t-1)*16,s=e.deltaShift;ie.DEBUG&&console.log(e.step,"DELTAC["+t+"]",n,r);for(var x=0;x<n;x++){var L=r.pop(),I=r.pop(),c=o+((I&240)>>4);if(c===a){var C=(I&15)-8;C>=0&&C++;var R=C*s;ie.DEBUG&&console.log(e.step,"DELTACFIX",L,"by",R),e.cvt[L]+=R}}}function vc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SROUND[]",e),t.round=$s;var r;switch(e&192){case 0:r=.5;break;case 64:r=1;break;case 128:r=2;break;default:throw new Error("invalid SROUND value")}switch(t.srPeriod=r,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*r}function Uc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"S45ROUND[]",e),t.round=$s;var r;switch(e&192){case 0:r=Math.sqrt(2)/2;break;case 64:r=Math.sqrt(2);break;case 128:r=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(t.srPeriod=r,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*r}function wc(t){ie.DEBUG&&console.log(t.step,"ROFF[]"),t.round=Sh}function Yc(t){ie.DEBUG&&console.log(t.step,"RUTG[]"),t.round=Rh}function Wc(t){ie.DEBUG&&console.log(t.step,"RDTG[]"),t.round=yh}function kc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCANCTRL[]",e)}function $A(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log(e.step,"SDPVTL["+t+"]",n,a);var x,L;t?(x=o.y-s.y,L=s.x-o.x):(x=s.x-o.x,L=s.y-o.y),e.dpv=Za(x,L)}function Kc(t){var e=t.stack,r=e.pop(),n=0;ie.DEBUG&&console.log(t.step,"GETINFO[]",r),r&1&&(n=35),r&32&&(n|=4096),e.push(n)}function _c(t){var e=t.stack,r=e.pop(),n=e.pop(),a=e.pop();ie.DEBUG&&console.log(t.step,"ROLL[]"),e.push(n),e.push(r),e.push(a)}function Vc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MAX[]",r,n),e.push(Math.max(n,r))}function zc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MIN[]",r,n),e.push(Math.min(n,r))}function Jc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCANTYPE[]",e)}function Zc(t){var e=t.stack.pop(),r=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"INSTCTRL[]",e,r),e){case 1:t.inhibitGridFit=!!r;return;case 2:t.ignoreCvt=!!r;return;default:throw new Error("invalid INSTCTRL[] selector")}}function sn(t,e){var r=e.stack,n=e.prog,a=e.ip;ie.DEBUG&&console.log(e.step,"PUSHB["+t+"]");for(var o=0;o<t;o++)r.push(n[++a]);e.ip=a}function ln(t,e){var r=e.ip,n=e.prog,a=e.stack;ie.DEBUG&&console.log(e.ip,"PUSHW["+t+"]");for(var o=0;o<t;o++){var s=n[++r]<<8|n[++r];s&32768&&(s=-((s^65535)+1)),a.push(s)}e.ip=r}function Re(t,e,r,n,a,o){var s=o.stack,x=t&&s.pop(),L=s.pop(),I=o.rp0,c=o.z0[I],C=o.z1[L],R=o.minDis,g=o.fv,Y=o.dpv,w,V,_,ee;V=w=Y.distance(C,c,!0,!0),_=V>=0?1:-1,V=Math.abs(V),t&&(ee=o.cvt[x],n&&Math.abs(V-ee)<o.cvCutIn&&(V=ee)),r&&V<R&&(V=R),n&&(V=o.round(V)),g.setRelative(C,c,_*V,Y),g.touch(C),ie.DEBUG&&console.log(o.step,(t?"MIRP[":"MDRP[")+(e?"M":"m")+(r?">":"_")+(n?"R":"_")+(a===0?"Gr":a===1?"Bl":a===2?"Wh":"")+"]",t?x+"("+o.cvt[x]+","+ee+")":"",L,"(d =",w,"->",_*V,")"),o.rp1=o.rp0,o.rp2=L,e&&(o.rp0=L)}Xs=[wA.bind(void 0,zr),wA.bind(void 0,Ur),YA.bind(void 0,zr),YA.bind(void 0,Ur),WA.bind(void 0,zr),WA.bind(void 0,Ur),kA.bind(void 0,0),kA.bind(void 0,1),KA.bind(void 0,0),KA.bind(void 0,1),Nh,fh,Dh,Oh,Bh,Hh,Fh,Mh,Gh,Ph,bh,vh,Uh,wh,Yh,Wh,kh,Kh,_h,Vh,void 0,void 0,zh,S0,Jh,Zh,Xh,Qh,$h,void 0,void 0,void 0,jh,qh,ec,void 0,_A.bind(void 0,0),_A.bind(void 0,1),VA.bind(void 0,zr),VA.bind(void 0,Ur),zA.bind(void 0,0),zA.bind(void 0,1),JA.bind(void 0,0),JA.bind(void 0,1),ZA.bind(void 0,0),ZA.bind(void 0,1),tc,rc,XA.bind(void 0,0),XA.bind(void 0,1),nc,ac,jA.bind(void 0,0),jA.bind(void 0,1),ic,oc,Ac,sc,lc,xc,qA.bind(void 0,0),qA.bind(void 0,1),void 0,QA.bind(void 0,0),QA.bind(void 0,1),Ec,void 0,Lc,void 0,void 0,hc,cc,Tc,Ic,dc,uc,pc,Sc,Cc,gc,Rc,yc,mc,C0.bind(void 0,1),Nc,fc,Dc,Oc,Bc,Hc,Fc,Mc,Gc,Pc,ci.bind(void 0,0),ci.bind(void 0,1),ci.bind(void 0,2),ci.bind(void 0,3),void 0,void 0,void 0,void 0,bc,C0.bind(void 0,2),C0.bind(void 0,3),g0.bind(void 0,1),g0.bind(void 0,2),g0.bind(void 0,3),vc,Uc,void 0,void 0,wc,void 0,Yc,Wc,S0,S0,void 0,void 0,void 0,void 0,void 0,kc,$A.bind(void 0,0),$A.bind(void 0,1),Kc,void 0,_c,Vc,zc,Jc,Zc,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,sn.bind(void 0,1),sn.bind(void 0,2),sn.bind(void 0,3),sn.bind(void 0,4),sn.bind(void 0,5),sn.bind(void 0,6),sn.bind(void 0,7),sn.bind(void 0,8),ln.bind(void 0,1),ln.bind(void 0,2),ln.bind(void 0,3),ln.bind(void 0,4),ln.bind(void 0,5),ln.bind(void 0,6),ln.bind(void 0,7),ln.bind(void 0,8),Re.bind(void 0,0,0,0,0,0),Re.bind(void 0,0,0,0,0,1),Re.bind(void 0,0,0,0,0,2),Re.bind(void 0,0,0,0,0,3),Re.bind(void 0,0,0,0,1,0),Re.bind(void 0,0,0,0,1,1),Re.bind(void 0,0,0,0,1,2),Re.bind(void 0,0,0,0,1,3),Re.bind(void 0,0,0,1,0,0),Re.bind(void 0,0,0,1,0,1),Re.bind(void 0,0,0,1,0,2),Re.bind(void 0,0,0,1,0,3),Re.bind(void 0,0,0,1,1,0),Re.bind(void 0,0,0,1,1,1),Re.bind(void 0,0,0,1,1,2),Re.bind(void 0,0,0,1,1,3),Re.bind(void 0,0,1,0,0,0),Re.bind(void 0,0,1,0,0,1),Re.bind(void 0,0,1,0,0,2),Re.bind(void 0,0,1,0,0,3),Re.bind(void 0,0,1,0,1,0),Re.bind(void 0,0,1,0,1,1),Re.bind(void 0,0,1,0,1,2),Re.bind(void 0,0,1,0,1,3),Re.bind(void 0,0,1,1,0,0),Re.bind(void 0,0,1,1,0,1),Re.bind(void 0,0,1,1,0,2),Re.bind(void 0,0,1,1,0,3),Re.bind(void 0,0,1,1,1,0),Re.bind(void 0,0,1,1,1,1),Re.bind(void 0,0,1,1,1,2),Re.bind(void 0,0,1,1,1,3),Re.bind(void 0,1,0,0,0,0),Re.bind(void 0,1,0,0,0,1),Re.bind(void 0,1,0,0,0,2),Re.bind(void 0,1,0,0,0,3),Re.bind(void 0,1,0,0,1,0),Re.bind(void 0,1,0,0,1,1),Re.bind(void 0,1,0,0,1,2),Re.bind(void 0,1,0,0,1,3),Re.bind(void 0,1,0,1,0,0),Re.bind(void 0,1,0,1,0,1),Re.bind(void 0,1,0,1,0,2),Re.bind(void 0,1,0,1,0,3),Re.bind(void 0,1,0,1,1,0),Re.bind(void 0,1,0,1,1,1),Re.bind(void 0,1,0,1,1,2),Re.bind(void 0,1,0,1,1,3),Re.bind(void 0,1,1,0,0,0),Re.bind(void 0,1,1,0,0,1),Re.bind(void 0,1,1,0,0,2),Re.bind(void 0,1,1,0,0,3),Re.bind(void 0,1,1,0,1,0),Re.bind(void 0,1,1,0,1,1),Re.bind(void 0,1,1,0,1,2),Re.bind(void 0,1,1,0,1,3),Re.bind(void 0,1,1,1,0,0),Re.bind(void 0,1,1,1,0,1),Re.bind(void 0,1,1,1,0,2),Re.bind(void 0,1,1,1,0,3),Re.bind(void 0,1,1,1,1,0),Re.bind(void 0,1,1,1,1,1),Re.bind(void 0,1,1,1,1,2),Re.bind(void 0,1,1,1,1,3)];function Ea(t){this.char=t,this.state={},this.activeState=null}function Go(t,e,r){this.contextName=r,this.startIndex=t,this.endOffset=e}function Xc(t,e,r){this.contextName=t,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=r}function mr(t,e){this.context=t,this.index=e,this.length=t.length,this.current=t[e],this.backtrack=t.slice(0,e),this.lookahead=t.slice(e+1)}function $i(t){this.eventId=t,this.subscribers=[]}function jc(t){var e=this,r=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];r.forEach(function(a){Object.defineProperty(e.events,a,{value:new $i(a)})}),t&&r.forEach(function(a){var o=t[a];typeof o=="function"&&e.events[a].subscribe(o)});var n=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];n.forEach(function(a){e.events[a].subscribe(e.updateContextsRanges)})}function mt(t){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],jc.call(this,t)}Ea.prototype.setState=function(t,e){return this.state[t]=e,this.activeState={key:t,value:this.state[t]},this.activeState};Ea.prototype.getState=function(t){return this.state[t]||null};mt.prototype.inboundIndex=function(t){return t>=0&&t<this.tokens.length};mt.prototype.composeRUD=function(t){var e=this,r=!0,n=t.map(function(o){return e[o[0]].apply(e,o.slice(1).concat(r))}),a=function(o){return typeof o=="object"&&o.hasOwnProperty("FAIL")};if(n.every(a))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:n.filter(a)};this.dispatch("composeRUD",[n.filter(function(o){return!a(o)})])};mt.prototype.replaceRange=function(t,e,r,n){e=e!==null?e:this.tokens.length;var a=r.every(function(s){return s instanceof Ea});if(!isNaN(t)&&this.inboundIndex(t)&&a){var o=this.tokens.splice.apply(this.tokens,[t,e].concat(r));return n||this.dispatch("replaceToken",[t,e,r]),[o,r]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};mt.prototype.replaceToken=function(t,e,r){if(!isNaN(t)&&this.inboundIndex(t)&&e instanceof Ea){var n=this.tokens.splice(t,1,e);return r||this.dispatch("replaceToken",[t,e]),[n[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};mt.prototype.removeRange=function(t,e,r){e=isNaN(e)?this.tokens.length:e;var n=this.tokens.splice(t,e);return r||this.dispatch("removeRange",[n,t,e]),n};mt.prototype.removeToken=function(t,e){if(!isNaN(t)&&this.inboundIndex(t)){var r=this.tokens.splice(t,1);return e||this.dispatch("removeToken",[r,t]),r}else return{FAIL:"removeToken: invalid token index."}};mt.prototype.insertToken=function(t,e,r){var n=t.every(function(a){return a instanceof Ea});return n?(this.tokens.splice.apply(this.tokens,[e,0].concat(t)),r||this.dispatch("insertToken",[t,e]),t):{FAIL:"insertToken: invalid token(s)."}};mt.prototype.registerModifier=function(t,e,r){this.events.newToken.subscribe(function(n,a){var o=[n,a],s=e===null||e.apply(this,o)===!0,x=[n,a];if(s){var L=r.apply(this,x);n.setState(t,L)}}),this.registeredModifiers.push(t)};$i.prototype.subscribe=function(t){return typeof t=="function"?this.subscribers.push(t)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};$i.prototype.unsubscribe=function(t){this.subscribers.splice(t,1)};mr.prototype.setCurrentIndex=function(t){this.index=t,this.current=this.context[t],this.backtrack=this.context.slice(0,t),this.lookahead=this.context.slice(t+1)};mr.prototype.get=function(t){switch(!0){case t===0:return this.current;case(t<0&&Math.abs(t)<=this.backtrack.length):return this.backtrack.slice(t)[0];case(t>0&&t<=this.lookahead.length):return this.lookahead[t-1];default:return null}};mt.prototype.rangeToText=function(t){if(t instanceof Go)return this.getRangeTokens(t).map(function(e){return e.char}).join("")};mt.prototype.getText=function(){return this.tokens.map(function(t){return t.char}).join("")};mt.prototype.getContext=function(t){var e=this.registeredContexts[t];return e||null};mt.prototype.on=function(t,e){var r=this.events[t];return r?r.subscribe(e):null};mt.prototype.dispatch=function(t,e){var r=this,n=this.events[t];n instanceof $i&&n.subscribers.forEach(function(a){a.apply(r,e||[])})};mt.prototype.registerContextChecker=function(t,e,r){if(this.getContext(t))return{FAIL:"context name '"+t+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof r!="function")return{FAIL:"missing context end check."};var n=new Xc(t,e,r);return this.registeredContexts[t]=n,this.contextCheckers.push(n),n};mt.prototype.getRangeTokens=function(t){var e=t.startIndex+t.endOffset;return[].concat(this.tokens.slice(t.startIndex,e))};mt.prototype.getContextRanges=function(t){var e=this.getContext(t);return e?e.ranges:{FAIL:"context checker '"+t+"' is not registered."}};mt.prototype.resetContextsRanges=function(){var t=this.registeredContexts;for(var e in t)if(t.hasOwnProperty(e)){var r=t[e];r.ranges=[]}};mt.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var t=this.tokens.map(function(n){return n.char}),e=0;e<t.length;e++){var r=new mr(t,e);this.runContextCheck(r)}this.dispatch("updateContextsRanges",[this.registeredContexts])};mt.prototype.setEndOffset=function(t,e){var r=this.getContext(e).openRange.startIndex,n=new Go(r,t,e),a=this.getContext(e).ranges;return n.rangeId=e+"."+a.length,a.push(n),this.getContext(e).openRange=null,n};mt.prototype.runContextCheck=function(t){var e=this,r=t.index;this.contextCheckers.forEach(function(n){var a=n.contextName,o=e.getContext(a).openRange;if(!o&&n.checkStart(t)&&(o=new Go(r,null,a),e.getContext(a).openRange=o,e.dispatch("contextStart",[a,r])),o&&n.checkEnd(t)){var s=r-o.startIndex+1,x=e.setEndOffset(s,a);e.dispatch("contextEnd",[a,x])}})};mt.prototype.tokenize=function(t){this.tokens=[],this.resetContextsRanges();var e=Array.from(t);this.dispatch("start");for(var r=0;r<e.length;r++){var n=e[r],a=new mr(e,r);this.dispatch("next",[a]),this.runContextCheck(a);var o=new Ea(n);this.tokens.push(o),this.dispatch("newToken",[o,a])}return this.dispatch("end",[this.tokens]),this.tokens};function In(t){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(t)}function tl(t){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(t)}function Sn(t){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(t)}function gi(t){return/[A-z]/.test(t)}function qc(t){return/\s/.test(t)}function Tr(t){this.font=t,this.features={}}function On(t){this.id=t.id,this.tag=t.tag,this.substitution=t.substitution}function Xa(t,e){if(!t)return-1;switch(e.format){case 1:return e.glyphs.indexOf(t);case 2:for(var r=e.ranges,n=0;n<r.length;n++){var a=r[n];if(t>=a.start&&t<=a.end){var o=t-a.start;return a.index+o}}break;default:return-1}return-1}function Qc(t,e){var r=Xa(t,e.coverage);return r===-1?null:t+e.deltaGlyphId}function $c(t,e){var r=Xa(t,e.coverage);return r===-1?null:e.substitute[r]}function R0(t,e){for(var r=[],n=0;n<t.length;n++){var a=t[n],o=e.current;o=Array.isArray(o)?o[0]:o;var s=Xa(o,a);s!==-1&&r.push(s)}return r.length!==t.length?-1:r}function eT(t,e){var r=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(t.context.length<r)return[];var n=R0(e.inputCoverage,t);if(n===-1)return[];var a=e.inputCoverage.length-1;if(t.lookahead.length<e.lookaheadCoverage.length)return[];for(var o=t.lookahead.slice(a);o.length&&Sn(o[0].char);)o.shift();var s=new mr(o,0),x=R0(e.lookaheadCoverage,s),L=[].concat(t.backtrack);for(L.reverse();L.length&&Sn(L[0].char);)L.shift();if(L.length<e.backtrackCoverage.length)return[];var I=new mr(L,0),c=R0(e.backtrackCoverage,I),C=n.length===e.inputCoverage.length&&x.length===e.lookaheadCoverage.length&&c.length===e.backtrackCoverage.length,R=[];if(C)for(var g=0;g<e.lookupRecords.length;g++)for(var Y=e.lookupRecords[g],w=Y.lookupListIndex,V=this.getLookupByIndex(w),_=0;_<V.subtables.length;_++){var ee=V.subtables[_],q=this.getLookupMethod(V,ee),ce=this.getSubstitutionType(V,ee);if(ce==="12")for(var Te=0;Te<n.length;Te++){var oe=t.get(Te),Ie=q(oe);Ie&&R.push(Ie)}}return R}function tT(t,e){var r=t.current,n=Xa(r,e.coverage);if(n===-1)return null;for(var a,o=e.ligatureSets[n],s=0;s<o.length;s++){a=o[s];for(var x=0;x<a.components.length;x++){var L=t.lookahead[x],I=a.components[x];if(L!==I)break;if(x===a.components.length-1)return a}}return null}function rT(t,e){var r=Xa(t,e.coverage);return r===-1?null:e.sequences[r]}Tr.prototype.getDefaultScriptFeaturesIndexes=function(){for(var t=this.font.tables.gsub.scripts,e=0;e<t.length;e++){var r=t[e];if(r.tag==="DFLT")return r.script.defaultLangSys.featureIndexes}return[]};Tr.prototype.getScriptFeaturesIndexes=function(t){var e=this.font.tables;if(!e.gsub)return[];if(!t)return this.getDefaultScriptFeaturesIndexes();for(var r=this.font.tables.gsub.scripts,n=0;n<r.length;n++){var a=r[n];if(a.tag===t&&a.script.defaultLangSys)return a.script.defaultLangSys.featureIndexes;var o=a.langSysRecords;if(o)for(var s=0;s<o.length;s++){var x=o[s];if(x.tag===t){var L=x.langSys;return L.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};Tr.prototype.mapTagsToFeatures=function(t,e){for(var r={},n=0;n<t.length;n++){var a=t[n].tag,o=t[n].feature;r[a]=o}this.features[e].tags=r};Tr.prototype.getScriptFeatures=function(t){var e=this.features[t];if(this.features.hasOwnProperty(t))return e;var r=this.getScriptFeaturesIndexes(t);if(!r)return null;var n=this.font.tables.gsub;return e=r.map(function(a){return n.features[a]}),this.features[t]=e,this.mapTagsToFeatures(e,t),e};Tr.prototype.getSubstitutionType=function(t,e){var r=t.lookupType.toString(),n=e.substFormat.toString();return r+n};Tr.prototype.getLookupMethod=function(t,e){var r=this,n=this.getSubstitutionType(t,e);switch(n){case"11":return function(a){return Qc.apply(r,[a,e])};case"12":return function(a){return $c.apply(r,[a,e])};case"63":return function(a){return eT.apply(r,[a,e])};case"41":return function(a){return tT.apply(r,[a,e])};case"21":return function(a){return rT.apply(r,[a,e])};default:throw new Error("lookupType: "+t.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};Tr.prototype.lookupFeature=function(t){var e=t.contextParams,r=e.index,n=this.getFeature({tag:t.tag,script:t.script});if(!n)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+t.tag+"' for script '"+t.script+"'.");for(var a=this.getFeatureLookups(n),o=[].concat(e.context),s=0;s<a.length;s++)for(var x=a[s],L=this.getLookupSubtables(x),I=0;I<L.length;I++){var c=L[I],C=this.getSubstitutionType(x,c),R=this.getLookupMethod(x,c),g=void 0;switch(C){case"11":g=R(e.current),g&&o.splice(r,1,new On({id:11,tag:t.tag,substitution:g}));break;case"12":g=R(e.current),g&&o.splice(r,1,new On({id:12,tag:t.tag,substitution:g}));break;case"63":g=R(e),Array.isArray(g)&&g.length&&o.splice(r,1,new On({id:63,tag:t.tag,substitution:g}));break;case"41":g=R(e),g&&o.splice(r,1,new On({id:41,tag:t.tag,substitution:g}));break;case"21":g=R(e.current),g&&o.splice(r,1,new On({id:21,tag:t.tag,substitution:g}));break}e=new mr(o,r),!(Array.isArray(g)&&!g.length)&&(g=null)}return o.length?o:null};Tr.prototype.supports=function(t){if(!t.script)return!1;this.getScriptFeatures(t.script);var e=this.features.hasOwnProperty(t.script);if(!t.tag)return e;var r=this.features[t.script].some(function(n){return n.tag===t.tag});return e&&r};Tr.prototype.getLookupSubtables=function(t){return t.subtables||null};Tr.prototype.getLookupByIndex=function(t){var e=this.font.tables.gsub.lookups;return e[t]||null};Tr.prototype.getFeatureLookups=function(t){return t.lookupListIndexes.map(this.getLookupByIndex.bind(this))};Tr.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var r=this.features[e.script];return r?r.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function nT(t){var e=t.current,r=t.get(-1);return r===null&&In(e)||!In(r)&&In(e)}function aT(t){var e=t.get(1);return e===null||!In(e)}var iT={startCheck:nT,endCheck:aT};function oT(t){var e=t.current,r=t.get(-1);return(In(e)||Sn(e))&&!In(r)}function AT(t){var e=t.get(1);switch(!0){case e===null:return!0;case(!In(e)&&!Sn(e)):var r=qc(e);if(!r)return!0;if(r){var n=!1;if(n=t.lookahead.some(function(a){return In(a)||Sn(a)}),!n)return!0}break;default:return!1}}var sT={startCheck:oT,endCheck:AT};function lT(t,e,r){e[r].setState(t.tag,t.substitution)}function xT(t,e,r){e[r].setState(t.tag,t.substitution)}function ET(t,e,r){t.substitution.forEach(function(n,a){var o=e[r+a];o.setState(t.tag,n)})}function LT(t,e,r){var n=e[r];n.setState(t.tag,t.substitution.ligGlyph);for(var a=t.substitution.components.length,o=0;o<a;o++)n=e[r+o+1],n.setState("deleted",!0)}var e1={11:lT,12:xT,63:ET,41:LT};function Po(t,e,r){t instanceof On&&e1[t.id]&&e1[t.id](t,e,r)}function hT(t){for(var e=[].concat(t.backtrack),r=e.length-1;r>=0;r--){var n=e[r],a=tl(n),o=Sn(n);if(!a&&!o)return!0;if(a)return!1}return!1}function cT(t){if(tl(t.current))return!1;for(var e=0;e<t.lookahead.length;e++){var r=t.lookahead[e],n=Sn(r);if(!n)return!0}return!1}function TT(t){var e=this,r="arab",n=this.featuresTags[r],a=this.tokenizer.getRangeTokens(t);if(a.length!==1){var o=new mr(a.map(function(x){return x.getState("glyphIndex")}),0),s=new mr(a.map(function(x){return x.char}),0);a.forEach(function(x,L){if(!Sn(x.char)){o.setCurrentIndex(L),s.setCurrentIndex(L);var I=0;hT(s)&&(I|=1),cT(s)&&(I|=2);var c;switch(I){case 1:c="fina";break;case 2:c="init";break;case 3:c="medi";break}if(n.indexOf(c)!==-1){var C=e.query.lookupFeature({tag:c,script:r,contextParams:o});if(C instanceof Error)return console.info(C.message);C.forEach(function(R,g){R instanceof On&&(Po(R,a,g),o.context[g]=R.substitution)})}}})}}function t1(t,e){var r=t.map(function(n){return n.activeState.value});return new mr(r,e||0)}function IT(t){var e=this,r="arab",n=this.tokenizer.getRangeTokens(t),a=t1(n);a.context.forEach(function(o,s){a.setCurrentIndex(s);var x=e.query.lookupFeature({tag:"rlig",script:r,contextParams:a});x.length&&(x.forEach(function(L){return Po(L,n,s)}),a=t1(n))})}function dT(t){var e=t.current,r=t.get(-1);return r===null&&gi(e)||!gi(r)&&gi(e)}function uT(t){var e=t.get(1);return e===null||!gi(e)}var pT={startCheck:dT,endCheck:uT};function r1(t,e){var r=t.map(function(n){return n.activeState.value});return new mr(r,e||0)}function ST(t){var e=this,r="latn",n=this.tokenizer.getRangeTokens(t),a=r1(n);a.context.forEach(function(o,s){a.setCurrentIndex(s);var x=e.query.lookupFeature({tag:"liga",script:r,contextParams:a});x.length&&(x.forEach(function(L){return Po(L,n,s)}),a=r1(n))})}function Or(t){this.baseDir=t||"ltr",this.tokenizer=new mt,this.featuresTags={}}Or.prototype.setText=function(t){this.text=t};Or.prototype.contextChecks={latinWordCheck:pT,arabicWordCheck:iT,arabicSentenceCheck:sT};function y0(t){var e=this.contextChecks[t+"Check"];return this.tokenizer.registerContextChecker(t,e.startCheck,e.endCheck)}function CT(){return y0.call(this,"latinWord"),y0.call(this,"arabicWord"),y0.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function gT(){var t=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(r){var n=t.tokenizer.getRangeTokens(r);t.tokenizer.replaceRange(r.startIndex,r.endOffset,n.reverse())})}Or.prototype.registerFeatures=function(t,e){var r=this,n=e.filter(function(a){return r.query.supports({script:t,tag:a})});this.featuresTags.hasOwnProperty(t)?this.featuresTags[t]=this.featuresTags[t].concat(n):this.featuresTags[t]=n};Or.prototype.applyFeatures=function(t,e){if(!t)throw new Error("No valid font was provided to apply features");this.query||(this.query=new Tr(t));for(var r=0;r<e.length;r++){var n=e[r];this.query.supports({script:n.script})&&this.registerFeatures(n.script,n.tags)}};Or.prototype.registerModifier=function(t,e,r){this.tokenizer.registerModifier(t,e,r)};function bo(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function RT(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){bo.call(this);var r=this.tokenizer.getContextRanges("arabicWord");r.forEach(function(n){TT.call(t,n)})}}function yT(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var r=this.featuresTags[e];if(r.indexOf("rlig")!==-1){bo.call(this);var n=this.tokenizer.getContextRanges("arabicWord");n.forEach(function(a){IT.call(t,a)})}}}function mT(){var t=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var r=this.featuresTags[e];if(r.indexOf("liga")!==-1){bo.call(this);var n=this.tokenizer.getContextRanges("latinWord");n.forEach(function(a){ST.call(t,a)})}}}Or.prototype.checkContextReady=function(t){return!!this.tokenizer.getContext(t)};Or.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(RT.call(this),yT.call(this)),this.checkContextReady("latinWord")&&mT.call(this),this.checkContextReady("arabicSentence")&&gT.call(this)};Or.prototype.processText=function(t){(!this.text||this.text!==t)&&(this.setText(t),CT.call(this),this.applyFeaturesToContexts())};Or.prototype.getBidiText=function(t){return this.processText(t),this.tokenizer.getText()};Or.prototype.getTextGlyphs=function(t){this.processText(t);for(var e=[],r=0;r<this.tokenizer.tokens.length;r++){var n=this.tokenizer.tokens[r];if(!n.state.deleted){var a=n.activeState.value;e.push(Array.isArray(a)?a[0]:a)}}return e};function Lt(t){t=t||{},t.tables=t.tables||{},t.empty||(Ia(t.familyName,"When creating a new Font object, familyName is required."),Ia(t.styleName,"When creating a new Font object, styleName is required."),Ia(t.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),Ia(t.ascender,"When creating a new Font object, ascender is required."),Ia(t.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:t.familyName||" "},fontSubfamily:{en:t.styleName||" "},fullName:{en:t.fullName||t.familyName+" "+t.styleName},postScriptName:{en:t.postScriptName||(t.familyName+t.styleName).replace(/\s/g,"")},designer:{en:t.designer||" "},designerURL:{en:t.designerURL||" "},manufacturer:{en:t.manufacturer||" "},manufacturerURL:{en:t.manufacturerURL||" "},license:{en:t.license||" "},licenseURL:{en:t.licenseURL||" "},version:{en:t.version||"Version 0.1"},description:{en:t.description||" "},copyright:{en:t.copyright||" "},trademark:{en:t.trademark||" "}},this.unitsPerEm=t.unitsPerEm||1e3,this.ascender=t.ascender,this.descender=t.descender,this.createdTimestamp=t.createdTimestamp,this.tables=Object.assign(t.tables,{os2:Object.assign({usWeightClass:t.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:t.widthClass||this.usWidthClasses.MEDIUM,fsSelection:t.fsSelection||this.fsSelectionValues.REGULAR},t.tables.os2)})),this.supported=!0,this.glyphs=new wr.GlyphSet(this,t.glyphs||[]),this.encoding=new ps(this),this.position=new za(this),this.substitution=new cr(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new qs(this)}})}Lt.prototype.hasChar=function(t){return this.encoding.charToGlyphIndex(t)!==null};Lt.prototype.charToGlyphIndex=function(t){return this.encoding.charToGlyphIndex(t)};Lt.prototype.charToGlyph=function(t){var e=this.charToGlyphIndex(t),r=this.glyphs.get(e);return r||(r=this.glyphs.get(0)),r};Lt.prototype.updateFeatures=function(t){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(r){return t[r]})}:e})};Lt.prototype.stringToGlyphs=function(t,e){var r=this,n=new Or,a=function(C){return r.charToGlyphIndex(C.char)};n.registerModifier("glyphIndex",null,a);var o=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;n.applyFeatures(this,o);for(var s=n.getTextGlyphs(t),x=s.length,L=new Array(x),I=this.glyphs.get(0),c=0;c<x;c+=1)L[c]=this.glyphs.get(s[c])||I;return L};Lt.prototype.nameToGlyphIndex=function(t){return this.glyphNames.nameToGlyphIndex(t)};Lt.prototype.nameToGlyph=function(t){var e=this.nameToGlyphIndex(t),r=this.glyphs.get(e);return r||(r=this.glyphs.get(0)),r};Lt.prototype.glyphIndexToName=function(t){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(t):""};Lt.prototype.getKerningValue=function(t,e){t=t.index||t,e=e.index||e;var r=this.position.defaultKerningTables;return r?this.position.getKerningValue(r,t,e):this.kerningPairs[t+","+e]||0};Lt.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};Lt.prototype.forEachGlyph=function(t,e,r,n,a,o){e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:72,a=Object.assign({},this.defaultRenderOptions,a);var s=1/this.unitsPerEm*n,x=this.stringToGlyphs(t,a),L;if(a.kerning){var I=a.script||this.position.getDefaultScriptName();L=this.position.getKerningTables(I,a.language)}for(var c=0;c<x.length;c+=1){var C=x[c];if(o.call(this,C,e,r,n,a),C.advanceWidth&&(e+=C.advanceWidth*s),a.kerning&&c<x.length-1){var R=L?this.position.getKerningValue(L,C.index,x[c+1].index):this.getKerningValue(C,x[c+1]);e+=R*s}a.letterSpacing?e+=a.letterSpacing*n:a.tracking&&(e+=a.tracking/1e3*n)}return e};Lt.prototype.getPath=function(t,e,r,n,a){var o=new Mt;return this.forEachGlyph(t,e,r,n,a,function(s,x,L,I){var c=s.getPath(x,L,I,a,this);o.extend(c)}),o};Lt.prototype.getPaths=function(t,e,r,n,a){var o=[];return this.forEachGlyph(t,e,r,n,a,function(s,x,L,I){var c=s.getPath(x,L,I,a,this);o.push(c)}),o};Lt.prototype.getAdvanceWidth=function(t,e,r){return this.forEachGlyph(t,0,0,e,r,function(){})};Lt.prototype.draw=function(t,e,r,n,a,o){this.getPath(e,r,n,a,o).draw(t)};Lt.prototype.drawPoints=function(t,e,r,n,a,o){this.forEachGlyph(e,r,n,a,o,function(s,x,L,I){s.drawPoints(t,x,L,I)})};Lt.prototype.drawMetrics=function(t,e,r,n,a,o){this.forEachGlyph(e,r,n,a,o,function(s,x,L,I){s.drawMetrics(t,x,L,I)})};Lt.prototype.getEnglishName=function(t){var e=this.names[t];if(e)return e.en};Lt.prototype.validate=function(){var t=this;function e(n,a){}function r(n){var a=t.getEnglishName(n);a&&a.trim().length>0}r("fontFamily"),r("weightName"),r("manufacturer"),r("copyright"),r("version"),this.unitsPerEm>0};Lt.prototype.toTables=function(){return Lh.fontToTable(this)};Lt.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};Lt.prototype.toArrayBuffer=function(){for(var t=this.toTables(),e=t.encode(),r=new ArrayBuffer(e.length),n=new Uint8Array(r),a=0;a<e.length;a++)n[a]=e[a];return r};Lt.prototype.download=function(t){var e=this.getEnglishName("fontFamily"),r=this.getEnglishName("fontSubfamily");t=t||e.replace(/\s/g,"")+"-"+r+".otf";var n=this.toArrayBuffer();if(ch())if(window.URL=window.URL||window.webkitURL,window.URL){var a=new DataView(n),o=new Blob([a],{type:"font/opentype"}),s=document.createElement("a");s.href=window.URL.createObjectURL(o),s.download=t;var x=document.createEvent("MouseEvents");x.initEvent("click",!0,!1),s.dispatchEvent(x)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var L=require("fs"),I=Th(n);L.writeFileSync(t,I)}};Lt.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};Lt.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};Lt.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function rl(t,e){var r=JSON.stringify(t),n=256;for(var a in e){var o=parseInt(a);if(!(!o||o<256)){if(JSON.stringify(e[a])===r)return o;n<=o&&(n=o+1)}}return e[n]=t,n}function NT(t,e,r){var n=rl(e.name,r);return[{name:"tag_"+t,type:"TAG",value:e.tag},{name:"minValue_"+t,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+t,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+t,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+t,type:"USHORT",value:0},{name:"nameID_"+t,type:"USHORT",value:n}]}function fT(t,e,r){var n={},a=new ye.Parser(t,e);return n.tag=a.parseTag(),n.minValue=a.parseFixed(),n.defaultValue=a.parseFixed(),n.maxValue=a.parseFixed(),a.skip("uShort",1),n.name=r[a.parseUShort()]||{},n}function DT(t,e,r,n){for(var a=rl(e.name,n),o=[{name:"nameID_"+t,type:"USHORT",value:a},{name:"flags_"+t,type:"USHORT",value:0}],s=0;s<r.length;++s){var x=r[s].tag;o.push({name:"axis_"+t+" "+x,type:"FIXED",value:e.coordinates[x]<<16})}return o}function OT(t,e,r,n){var a={},o=new ye.Parser(t,e);a.name=n[o.parseUShort()]||{},o.skip("uShort",1),a.coordinates={};for(var s=0;s<r.length;++s)a.coordinates[r[s].tag]=o.parseFixed();return a}function BT(t,e){var r=new ge.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:t.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:t.instances.length},{name:"instanceSize",type:"USHORT",value:4+t.axes.length*4}]);r.offsetToData=r.sizeOf();for(var n=0;n<t.axes.length;n++)r.fields=r.fields.concat(NT(n,t.axes[n],e));for(var a=0;a<t.instances.length;a++)r.fields=r.fields.concat(DT(a,t.instances[a],t.axes,e));return r}function HT(t,e,r){var n=new ye.Parser(t,e),a=n.parseULong();Ge.argument(a===65536,"Unsupported fvar table version.");var o=n.parseOffset16();n.skip("uShort",1);for(var s=n.parseUShort(),x=n.parseUShort(),L=n.parseUShort(),I=n.parseUShort(),c=[],C=0;C<s;C++)c.push(fT(t,e+o+C*x,r));for(var R=[],g=e+o+s*x,Y=0;Y<L;Y++)R.push(OT(t,g+Y*I,c,r));return{axes:c,instances:R}}var FT={make:BT,parse:HT},MT=function(){return{coverage:this.parsePointer(te.coverage),attachPoints:this.parseList(te.pointer(te.uShortList))}},GT=function(){var t=this.parseUShort();if(Ge.argument(t===1||t===2||t===3,"Unsupported CaretValue table version."),t===1)return{coordinate:this.parseShort()};if(t===2)return{pointindex:this.parseShort()};if(t===3)return{coordinate:this.parseShort()}},PT=function(){return this.parseList(te.pointer(GT))},bT=function(){return{coverage:this.parsePointer(te.coverage),ligGlyphs:this.parseList(te.pointer(PT))}},vT=function(){return this.parseUShort(),this.parseList(te.pointer(te.coverage))};function UT(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);Ge.argument(n===1||n===1.2||n===1.3,"Unsupported GDEF table version.");var a={version:n,classDef:r.parsePointer(te.classDef),attachList:r.parsePointer(MT),ligCaretList:r.parsePointer(bT),markAttachClassDef:r.parsePointer(te.classDef)};return n>=1.2&&(a.markGlyphSets=r.parsePointer(vT)),a}var wT={parse:UT},Nr=new Array(10);Nr[1]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{posFormat:1,coverage:this.parsePointer(te.coverage),value:this.parseValueRecord()};if(r===2)return{posFormat:2,coverage:this.parsePointer(te.coverage),values:this.parseValueRecordList()};Ge.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};Nr[2]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();Ge.assert(r===1||r===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var n=this.parsePointer(te.coverage),a=this.parseUShort(),o=this.parseUShort();if(r===1)return{posFormat:r,coverage:n,valueFormat1:a,valueFormat2:o,pairSets:this.parseList(te.pointer(te.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(a),value2:this.parseValueRecord(o)}})))};if(r===2){var s=this.parsePointer(te.classDef),x=this.parsePointer(te.classDef),L=this.parseUShort(),I=this.parseUShort();return{posFormat:r,coverage:n,valueFormat1:a,valueFormat2:o,classDef1:s,classDef2:x,class1Count:L,class2Count:I,classRecords:this.parseList(L,te.list(I,function(){return{value1:this.parseValueRecord(a),value2:this.parseValueRecord(o)}}))}}};Nr[3]=function(){return{error:"GPOS Lookup 3 not supported"}};Nr[4]=function(){return{error:"GPOS Lookup 4 not supported"}};Nr[5]=function(){return{error:"GPOS Lookup 5 not supported"}};Nr[6]=function(){return{error:"GPOS Lookup 6 not supported"}};Nr[7]=function(){return{error:"GPOS Lookup 7 not supported"}};Nr[8]=function(){return{error:"GPOS Lookup 8 not supported"}};Nr[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function YT(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);return Ge.argument(n===1||n===1.1,"Unsupported GPOS table version "+n),n===1?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Nr)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Nr),variations:r.parseFeatureVariationsList()}}var WT=new Array(10);function kT(t){return new ge.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new ge.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new ge.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new ge.LookupList(t.lookups,WT)}])}var KT={parse:YT,make:kT};function _T(t){var e={};t.skip("uShort");var r=t.parseUShort();Ge.argument(r===0,"Unsupported kern sub-table version."),t.skip("uShort",2);var n=t.parseUShort();t.skip("uShort",3);for(var a=0;a<n;a+=1){var o=t.parseUShort(),s=t.parseUShort(),x=t.parseShort();e[o+","+s]=x}return e}function VT(t){var e={};t.skip("uShort");var r=t.parseULong();r>1&&console.warn("Only the first kern subtable is supported."),t.skip("uLong");var n=t.parseUShort(),a=n&255;if(t.skip("uShort"),a===0){var o=t.parseUShort();t.skip("uShort",3);for(var s=0;s<o;s+=1){var x=t.parseUShort(),L=t.parseUShort(),I=t.parseShort();e[x+","+L]=I}}return e}function zT(t,e){var r=new ye.Parser(t,e),n=r.parseUShort();if(n===0)return _T(r);if(n===1)return VT(r);throw new Error("Unsupported kern table version ("+n+").")}var JT={parse:zT};function ZT(t,e,r,n){for(var a=new ye.Parser(t,e),o=n?a.parseUShort:a.parseULong,s=[],x=0;x<r+1;x+=1){var L=o.call(a);n&&(L*=2),s.push(L)}return s}var XT={parse:ZT};function jT(t,e){var r=require("fs");r.readFile(t,function(n,a){if(n)return e(n.message);e(null,_s(a))})}function qT(t,e){var r=new XMLHttpRequest;r.open("get",t,!0),r.responseType="arraybuffer",r.onload=function(){return r.response?e(null,r.response):e("Font could not be loaded: "+r.statusText)},r.onerror=function(){e("Font could not be loaded")},r.send()}function n1(t,e){for(var r=[],n=12,a=0;a<e;a+=1){var o=ye.getTag(t,n),s=ye.getULong(t,n+4),x=ye.getULong(t,n+8),L=ye.getULong(t,n+12);r.push({tag:o,checksum:s,offset:x,length:L,compression:!1}),n+=16}return r}function QT(t,e){for(var r=[],n=44,a=0;a<e;a+=1){var o=ye.getTag(t,n),s=ye.getULong(t,n+4),x=ye.getULong(t,n+8),L=ye.getULong(t,n+12),I=void 0;x<L?I="WOFF":I=!1,r.push({tag:o,offset:s,compression:I,compressedLength:x,length:L}),n+=20}return r}function Ot(t,e){if(e.compression==="WOFF"){var r=new Uint8Array(t.buffer,e.offset+2,e.compressedLength-2),n=new Uint8Array(e.length);if(KE(r,n),n.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var a=new DataView(n.buffer,0);return{data:a,offset:0}}else return{data:t,offset:e.offset}}function vo(t,e){e=e??{};var r,n,a=new Lt({empty:!0}),o=new DataView(t,0),s,x=[],L=ye.getTag(o,0);if(L==="\0\0\0"||L==="true"||L==="typ1")a.outlinesFormat="truetype",s=ye.getUShort(o,4),x=n1(o,s);else if(L==="OTTO")a.outlinesFormat="cff",s=ye.getUShort(o,4),x=n1(o,s);else if(L==="wOFF"){var I=ye.getTag(o,4);if(I==="\0\0\0")a.outlinesFormat="truetype";else if(I==="OTTO")a.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+L);s=ye.getUShort(o,12),x=QT(o,s)}else throw new Error("Unsupported OpenType signature "+L);for(var c,C,R,g,Y,w,V,_,ee,q,ce,Te,oe=0;oe<s;oe+=1){var Ie=x[oe],de=void 0;switch(Ie.tag){case"cmap":de=Ot(o,Ie),a.tables.cmap=us.parse(de.data,de.offset),a.encoding=new Ss(a.tables.cmap);break;case"cvt ":de=Ot(o,Ie),Te=new ye.Parser(de.data,de.offset),a.tables.cvt=Te.parseShortList(Ie.length/2);break;case"fvar":C=Ie;break;case"fpgm":de=Ot(o,Ie),Te=new ye.Parser(de.data,de.offset),a.tables.fpgm=Te.parseByteList(Ie.length);break;case"head":de=Ot(o,Ie),a.tables.head=Bs.parse(de.data,de.offset),a.unitsPerEm=a.tables.head.unitsPerEm,r=a.tables.head.indexToLocFormat;break;case"hhea":de=Ot(o,Ie),a.tables.hhea=Hs.parse(de.data,de.offset),a.ascender=a.tables.hhea.ascender,a.descender=a.tables.hhea.descender,a.numberOfHMetrics=a.tables.hhea.numberOfHMetrics;break;case"hmtx":V=Ie;break;case"ltag":de=Ot(o,Ie),n=Ms.parse(de.data,de.offset);break;case"maxp":de=Ot(o,Ie),a.tables.maxp=Gs.parse(de.data,de.offset),a.numGlyphs=a.tables.maxp.numGlyphs;break;case"name":q=Ie;break;case"OS/2":de=Ot(o,Ie),a.tables.os2=to.parse(de.data,de.offset);break;case"post":de=Ot(o,Ie),a.tables.post=Ys.parse(de.data,de.offset),a.glyphNames=new Bo(a.tables.post);break;case"prep":de=Ot(o,Ie),Te=new ye.Parser(de.data,de.offset),a.tables.prep=Te.parseByteList(Ie.length);break;case"glyf":R=Ie;break;case"loca":ee=Ie;break;case"CFF ":c=Ie;break;case"kern":_=Ie;break;case"GDEF":g=Ie;break;case"GPOS":Y=Ie;break;case"GSUB":w=Ie;break;case"meta":ce=Ie;break}}var De=Ot(o,q);if(a.tables.name=ws.parse(De.data,De.offset,n),a.names=a.tables.name,R&&ee){var We=r===0,ke=Ot(o,ee),At=XT.parse(ke.data,ke.offset,a.numGlyphs,We),st=Ot(o,R);a.glyphs=Zs.parse(st.data,st.offset,At,a,e)}else if(c){var ue=Ot(o,c);Os.parse(ue.data,ue.offset,a,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var It=Ot(o,V);if(Fs.parse(a,It.data,It.offset,a.numberOfHMetrics,a.numGlyphs,a.glyphs,e),xL(a,e),_){var Ae=Ot(o,_);a.kerningPairs=JT.parse(Ae.data,Ae.offset)}else a.kerningPairs={};if(g){var $e=Ot(o,g);a.tables.gdef=wT.parse($e.data,$e.offset)}if(Y){var lt=Ot(o,Y);a.tables.gpos=KT.parse(lt.data,lt.offset),a.position.init()}if(w){var Oe=Ot(o,w);a.tables.gsub=Ws.parse(Oe.data,Oe.offset)}if(C){var ht=Ot(o,C);a.tables.fvar=FT.parse(ht.data,ht.offset,a.names)}if(ce){var ct=Ot(o,ce);a.tables.meta=ks.parse(ct.data,ct.offset),a.metas=a.tables.meta}return a}function $T(t,e,r){r=r??{};var n=typeof window>"u",a=n&&!r.isUrl?jT:qT;return new Promise(function(o,s){a(t,function(x,L){if(x){if(e)return e(x);s(x)}var I;try{I=vo(L,r)}catch(c){if(e)return e(c,null);s(c)}if(e)return e(null,I);o(I)})})}function eI(t,e){var r=require("fs"),n=r.readFileSync(t);return vo(_s(n),e)}var Cn=Object.freeze({__proto__:null,Font:Lt,Glyph:hr,Path:Mt,BoundingBox:$r,_parse:ye,parse:vo,load:$T,loadSync:eI});function m0(t){const e=Ee,r=J();if(e.mousePosition=nl(t),t.button===3||t.button===4){et(t);return}if(t.button,t.button===1&&(t.type==="mousedown"&&Ax(t),t.type==="mouseup"&&sx(t)),t.button===0){switch(r.selectedTool){case"resize":e.currentToolHandler=r.eventHandlers.tool_resize;break;case"pathEdit":e.currentToolHandler=r.eventHandlers.tool_pathEdit;break;case"pan":e.currentToolHandler=r.eventHandlers.tool_pan;break;case"pathAddPoint":e.currentToolHandler=r.eventHandlers.tool_pathAddPoint;break;case"newPath":e.currentToolHandler=r.eventHandlers.tool_addPath;break;case"newRectangle":e.currentToolHandler=r.eventHandlers.tool_addRectOval;break;case"newOval":e.currentToolHandler=r.eventHandlers.tool_addRectOval;break;case"kern":e.currentToolHandler=r.eventHandlers.tool_kern;break;case r.selectedTool:e.currentToolHandler=r.eventHandlers.tool_resize}e.currentToolHandler[t.type](t)}}function nl(t){let e={};return t.offsetX||t.offsetY?(e.x=t.offsetX,e.y=t.offsetY):(t.layerX||t.layerY)&&(e.x=t.layerX,e.y=t.layerY),e}function no(){const t=J();t.multiSelect.points.clear(),t.multiSelect.shapes.clear()}function al(t,e,r,n,a="pathPoints"){t=pt(t),e=Ct(e),r=pt(r),n=Ct(n);const o=Math.min(t,r),s=Math.min(e,n),x=Math.max(t,r),L=Math.max(e,n),I=new Kt({xMin:o,xMax:x,yMin:s,yMax:L}),c=J();let C=!0;const R=c.multiSelect.points,g=c.multiSelect.shapes,Y=Ee.isCtrlDown;a==="pathPoints"?(R.allowPublishing=!1,Y||R.clear(),g.allowPublishing=!1,Y||g.clear(),c.selectedItem.shapes.forEach(w=>{Di(w.maxes,I)&&w.pathPoints&&w.pathPoints.forEach(V=>{I.isPointInside(V.p.x,V.p.y)&&(R.add(V),g.add(V.parent),C=!0)})})):a==="shapes"&&(R.allowPublishing=!1,Y||R.clear(),g.allowPublishing=!1,Y||g.clear(),c.selectedItem.shapes.forEach(w=>{I.isMaxesInside(w.maxes)&&(g.add(w),C=!0)})),R.allowPublishing=!0,g.allowPublishing=!0,C&&(R.publishChanges(),g.publishChanges())}function a1(){let e=J().multiSelect.shapes,r=Ee.handle,n=pt(Ee.mousePosition.x),a=Ct(Ee.mousePosition.y),o=pt(Ee.lastX),x=Ct(Ee.lastY)-a,L=o-n,I=e.ratioLock,c=e.maxes;switch(r.includes("e")&&n+L<=c.xMax&&(L=0),r.includes("w")&&(n+L>=c.xMin&&(L=0),c.width+L<0&&(L=c.width*-.9)),r.includes("n")&&a<=c.yMax-x&&(x=0),r.includes("s")&&(a+x>=c.yMin&&(x=0),c.height+x<0&&(x=c.height*-.9)),r){case"n":Bt("n")&&(Ye("n-resize"),e.updateShapeSize({width:0,height:x*-1,ratioLock:I,transformOrigin:"bottom-center"}));break;case"ne":Bt("ne")&&(Ye("ne-resize"),e.updateShapeSize({width:L*-1,height:x*-1,ratioLock:I,transformOrigin:"bottom-left"}));break;case"e":Bt("e")&&(Ye("e-resize"),e.updateShapeSize({width:L*-1,height:0,ratioLock:I,transformOrigin:"middle-left"}));break;case"be":Bt("be")&&(Ye("e-resize"),e.updateShapeSize({width:L*-1,height:0,ratioLock:I,transformOrigin:"baseline-left"}));break;case"se":Bt("se")&&(Ye("se-resize"),e.updateShapeSize({width:L*-1,height:x,ratioLock:I,transformOrigin:"top-left"}));break;case"s":Bt("s")&&(Ye("s-resize"),e.updateShapeSize({width:0,height:x,ratioLock:I,transformOrigin:"top-center"}));break;case"sw":Bt("sw")&&(Ye("sw-resize"),e.updateShapeSize({width:L,height:x,ratioLock:I,transformOrigin:"top-right"}));break;case"bw":Bt("bw")&&(Ye("ew-resize"),e.updateShapeSize({width:L,height:0,ratioLock:I,transformOrigin:"baseline-right"}));break;case"w":Bt("w")&&(Ye("w-resize"),e.updateShapeSize({width:L,height:0,ratioLock:I,transformOrigin:"middle-right"}));break;case"nw":Bt("nw")&&(Ye("nw-resize"),e.updateShapeSize({width:L,height:x*-1,ratioLock:I,transformOrigin:"bottom-right"}));break}}function il(t,e){const r=J();if(Ex(t,e)){let n=e2(t,e);Ye("pointer"),n!==Ee.canvasHotspotHovering&&r.publish("editCanvasView",r.view),Ee.canvasHotspotHovering=n}else Ee.canvasHotspotHovering&&r.publish("editCanvasView",r.view),Ee.canvasHotspotHovering=!1}function Bt(t){const e=J(),r=e.multiSelect.shapes;let n=r;r.length>1&&(n=r.virtualGlyph);let a=n.ratioLock,o=n.xLock,s=n.yLock,x=n.wLock,L=n.hLock,I=n.maxes.yMax,c=n.maxes.yMin,C=vt/2/e.view.dz,R=!0;switch(t){case"nw":R=a?!1:!s&&!L&&!o&&!x;break;case"n":R=!s&&!L;break;case"ne":R=a?!1:!s&&!L&&!x;break;case"e":R=!x;break;case"be":R=!x&&a&&c<C*-1&&I>C;break;case"se":R=a?!1:!L&&!x;break;case"s":R=!L;break;case"sw":R=a?!1:!L&&!o&&!x;break;case"bw":R=!o&&!x&&a&&c<C*-1&&I>C;break;case"w":R=!o&&!x}return R}function tI(t){let e=t.deltaY*-1;const r=J(),n=nl(t);r.nav.isOnEditCanvasPage&&(t.ctrlKey||t.metaKey)&&(et(t),va(),Ee.hoverPoint=!1,e>0?r.updateViewZoom(1.1,n):r.updateViewZoom(.9,n))}let vt=7,vi=40,Uo=xt.blue.l65,rI=xt.green.l65,ol=xt.gray.l65,nI="#000",Al="#FFF",aI=3;function iI(t){let r=J().multiSelect.shapes;if(r.length<1)return;let n=r.maxes,a=ja();sl(t,n,a.thickness,a.accent)}function oI(t){let e=ja();lI(t,e.accent,e.thickness)}function AI(t){let r=J().multiSelect.shapes;if(r.length<1)return;let n=r.maxes,a=ja();sI(t,n,a.thickness,a.accent)}function ja(){let e=J().multiSelect.shapes,r=1,n=Uo;return e.length>1?(r=aI,n=ol):e.singleton.objType==="ComponentInstance"&&(n=rI),{thickness:r,accent:n}}function sl(t,e,r,n){const a=wo(e,r);let o=a.rightX-a.leftX,s=a.topY-a.bottomY;t.fillStyle="transparent",t.strokeStyle=n||ja().accent,t.lineWidth=r||1,t.strokeRect(a.leftX,a.bottomY,o,s)}function sI(t,e,r,n){let a=wo(e,r);if(t.fillStyle=Al,t.lineWidth=1,t.strokeStyle=n,J().multiSelect.shapes.isRotatable()){const s=vt/2;t.lineWidth=r,ll(t,{x:a.midX+1,y:a.topY},{x:a.midX+1,y:a.topY-vi}),t.lineWidth=1,Yo(t,{x:a.midX+1,y:a.topY-vi+s})}Bt("nw")&&Fr(t,a.nw),Bt("n")&&Fr(t,a.n),Bt("ne")&&Fr(t,a.ne),Bt("e")&&Fr(t,a.e),Bt("be")&&Fr(t,a.be),Bt("se")&&Fr(t,a.se),Bt("s")&&Fr(t,a.s),Bt("sw")&&Fr(t,a.sw),Bt("bw")&&Fr(t,a.bw),Bt("w")&&Fr(t,a.w)}function lI(t,e=Uo,r=1){const n=Ee;let a=n.rotationStartCenter,o=n.rotationStartMaxesTopY,s=n.mousePosition.x,x=n.mousePosition.y,L=En({x:pt(s),y:Ct(x)},a);n.isShiftDown&&(L=w1(L));let c={x:a.x,y:o};Ni(c,L,a),Ni(c,Math.PI/-2,a);let C=!1;Math.abs(L)>Math.PI/2&&(C=!0);let R={x:Rt(c.x),y:Et(c.y)},g={x:Rt(a.x),y:Et(a.y)};o=Et(o);let Y=Zn(g,R);t.fillStyle=e,t.strokeStyle=e,t.globalAlpha=.3,t.beginPath(),t.moveTo(g.x,g.y),t.arc(g.x,g.y,Y,Math.PI/-2,L*-1,C),t.closePath(),t.stroke(),t.fill(),t.strokeStyle=e,t.fillStyle=Al,t.lineWidth=r,ll(t,{x:R.x,y:R.y},{x:g.x,y:g.y}),t.lineWidth=1,Yo(t,R);let w=ae(Y1(L),1);C&&(w-=360),w=ae(w,1),t.font='24px FiraGo, "Open Sans", sans-serif',t.fillStyle=e,t.globalAlpha=.8,t.fillText(""+w+"°",g.x,o-24),t.globalAlpha=1}function i1(t,e,r){if(!r)return!1;const n=J();let a="",o=vt,s=wo(r);return n.multiSelect.shapes.isRotatable()&&t>s.midX&&t<s.midX+o&&e>s.topY-vi&&e<s.topY-vi+o&&(a="rotate"),t>s.nw.x&&t<s.nw.x+o&&e>s.nw.y&&e<s.nw.y+o&&(a="nw"),t>s.n.x&&t<s.n.x+o&&e>s.n.y&&e<s.n.y+o&&(a="n"),t>s.ne.x&&t<s.ne.x+o&&e>s.ne.y&&e<s.ne.y+o&&(a="ne"),t>s.e.x&&t<s.e.x+o&&e>s.e.y&&e<s.e.y+o&&(a="e"),t>s.be.x&&t<s.be.x+o&&e>s.be.y&&e<s.be.y+o&&(a="be"),t>s.se.x&&t<s.se.x+o&&e>s.se.y&&e<s.se.y+o&&(a="se"),t>s.s.x&&t<s.s.x+o&&e>s.s.y&&e<s.s.y+o&&(a="s"),t>s.sw.x&&t<s.sw.x+o&&e>s.sw.y&&e<s.sw.y+o&&(a="sw"),t>s.bw.x&&t<s.bw.x+o&&e>s.bw.y&&e<s.bw.y+o&&(a="bw"),t>s.w.x&&t<s.w.x+o&&e>s.w.y&&e<s.w.y+o&&(a="w"),a}function wo(t,e=1){const r=vt,n=vt/2,a=1;let o=Rt(t.xMin),s=ae(Rt(t.xMin)+(Rt(t.xMax)-Rt(t.xMin))/2),x=Rt(t.xMax),L=Et(t.yMax),I=Et(0),c=ae(Et(t.yMax)+(Et(t.yMin)-Et(t.yMax))/2),C=Et(t.yMin);return e>1&&(o-=e,x+=e,L-=e,C+=e),o=gt(o,!1)-a,s=gt(s,!1),x=gt(x,!0)+a,L=gt(L,!1)-a,c=gt(c,!1),C=gt(C,!0)+a,{leftX:o,midX:s,rightX:x,topY:L,midY:c,bottomY:C,nw:{x:o-r,y:L-r},n:{x:gt(s-n)+a,y:L-r},ne:{x,y:L-r},e:{x,y:gt(c-n)+a},be:{x,y:gt(I-n)+a},se:{x,y:C},s:{x:gt(s-n)+a,y:C},sw:{x:o-r,y:C},bw:{x:o-r,y:gt(I-n)+a},w:{x:o-r,y:gt(c-n)+a}}}function N0(t,e){let n=J().multiSelect.shapes,a=n.members.length,o=ja();a>0&&(t.beginPath(),n.drawShapes(t,e),t.closePath(),t.strokeStyle=o.accent,t.lineWidth=o.thickness,t.stroke())}function xI(t,e,r){t.beginPath(),ai(e,t,r),t.closePath(),t.fillStyle=nI,t.fill(),t.strokeStyle=Uo,t.stroke(),sl(t,e.maxes)}function ll(t,e,r){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(r.x,r.y),t.closePath(),t.stroke()}function Fr(t,e){t.fillRect(e.x,e.y,vt,vt),t.strokeRect(e.x,e.y,vt,vt)}function Yo(t,e){t.beginPath(),t.arc(e.x,e.y,vt/2,0,Math.PI*2,!0),t.closePath(),t.fill(),t.stroke()}function o1(t){const e=J();e.multiSelect.shapes.members.forEach(n=>{n.objType!=="ComponentInstance"&&n.pathPoints.forEach(a=>{e.multiSelect.points.isSelected(a)&&cI(a,t)})})}function Ti(t,e=!1){const r=J();let n=r.multiSelect.shapes.members;e&&(n=r.selectedItem.shapes),n.forEach(a=>{a.objType!=="ComponentInstance"&&a.pathPoints.forEach((o,s)=>{if(s===0){let x=a.pathPoints[a.getNextPointNum(0)];hI(o,t,r.multiSelect.points.isSelected(o),x)}else LI(o,t,r.multiSelect.points.isSelected(o))})})}function EI(t,e){let r=vt;e&&(t.fillStyle=xt.blue.l85,t.fillRect(e.x,e.y,r,r))}function LI(t,e,r){let n=7,a=jr.offWhite,o=jr.accent;const s=n/2;e.fillStyle=r?a:o,e.strokeStyle=o,e.font="10px Consolas";let x=Rt(t.p.x)-s,L=Et(t.p.y)-s;e.fillRect(x,L,n,n),e.strokeRect(x,L,n,n),e.fillStyle=o}function hI(t,e,r,n){let a=jr.offWhite,o=jr.accent;e.fillStyle=r?a:o,e.strokeStyle=o,e.lineWidth=1;const s={x:t.p.x,y:t.p.y};let x={x:t.h2.x,y:t.h2.y};t.h2.use||(x={x:n.p.x,y:n.p.y});const L=vt/2,I=[[L*3,0],[L,L],[-L,L],[-L,-L],[L,-L]],c=[];let C=Math.atan2(x.y-s.y,x.x-s.x)*-1;!C&&C!==0&&(C=t.p.x>t.h2.x?Math.PI:0);for(const R of Object.keys(I))c.push([I[R][0]*Math.cos(C)-I[R][1]*Math.sin(C),I[R][0]*Math.sin(C)+I[R][1]*Math.cos(C)]);e.beginPath(),e.moveTo(c[0][0]+Rt(t.p.x),c[0][1]+Et(t.p.y)),c.forEach((R,g)=>{g>0&&e.lineTo(c[g][0]+Rt(t.p.x),c[g][1]+Et(t.p.y))}),e.lineTo(c[0][0]+Rt(t.p.x),c[0][1]+Et(t.p.y)),e.fill(),e.stroke(),e.fillStyle=o,e.fillRect(gt(Rt(t.p.x)),gt(Et(t.p.y)),1,1)}function cI(t,e,r=!0,n=!0){let a=jr.accent;e.fillStyle=a,e.strokeStyle=a,e.lineWidth=1,e.font="10px Consolas",r&&t.h1.use&&o(t.h1,"1"),n&&t.h2.use&&o(t.h2,"2");function o(s,x){const L=Rt(s.x),I=Et(s.y);Yo(e,{x:L,y:I}),e.beginPath(),e.moveTo(Rt(t.p.x),Et(t.p.y)),e.lineTo(L,I),e.closePath(),e.stroke(),e.fillText(x,L+12,I)}}function TI(t,e){let r=e.mousePosition.x,n=e.mousePosition.y;r+=r<e.firstX?1:0,n+=n<e.firstY?1:0;const a=new Kt({xMin:Math.min(e.firstX,r),xMax:Math.max(e.firstX,r),yMin:Math.min(e.firstY,n),yMax:Math.max(e.firstY,n)});t.fillStyle="hsl(200, 17%, 45%, 0.05)",t.strokeStyle=ol,t.lineWidth=1,t.setLineDash([3,3]),t.fillRect(a.xMin,a.yMin,a.width,a.height),t.strokeRect(gt(a.xMin),gt(a.yMin),a.width,a.height),t.setLineDash([])}function II(t=[],e,r){for(let n=0;n<t.length;n++){let a=Wo(t[n],e,r);if(a)return a}return!1}function f0(t,e,r,n){let a;return t!==!1&&(Array.isArray(t)?a=II(t,e,r):t.objType==="Glyph"||t.objType==="VirtualGlyph"?t.shapes&&t.shapes.length&&(a=dI(t,e,r,n)):t.objType==="Path"?a=xl(t,e,r,n):t.objType==="PathPoint"&&(a=Wo(t,e,r,n))),a}function dI(t,e,r,n){let a=!1;for(let o=0;o<t.shapes.length;o++)if(t.shapes[o].objType!=="ComponentInstance"&&(a=xl(t.shapes[o],e,r,n),a))return a;return!1}function xl(t,e,r,n){let a=t.pathPoints||[],o=!1;for(let s=a.length-1;s>=0;s--)if(o=Wo(a[s],e,r,n),o)return o;return!1}function A1(t,e,r){let n=t.pathPoints[0];return n?St({x:e,y:r},n.p.coord,vt):!1}function Wo(t,e=0,r=0,n=!1){const a=J().view.dz,o=vt/a,s={x:e,y:r};let x=!1;return St(t.p,s,o)&&(x={pathPoint:t,controlPoint:"p"}),x||(t.h1.use&&!n&&St(t.h1,s,o)&&(x={pathPoint:t,controlPoint:"h1"}),t.h2.use&&!n&&St(t.h2,s,o)&&(x={pathPoint:t,controlPoint:"h2"})),x}const uI=":root{--gray-l99: hsl(200, 90%, 99%);--gray-l97: hsl(200, 81%, 97%);--gray-l95: hsl(200, 81%, 94%);--gray-l90: hsl(200, 60%, 88%);--gray-l85: hsl(200, 52%, 82%);--gray-l80: hsl(200, 47%, 76%);--gray-l75: hsl(200, 42%, 71%);--gray-l70: hsl(200, 33%, 65%);--gray-l65: hsl(200, 27%, 60%);--gray-l60: hsl(200, 22%, 55%);--gray-l55: hsl(200, 18%, 50%);--gray-l50: hsl(200, 17%, 45%);--gray-l45: hsl(200, 17%, 40%);--gray-l40: hsl(200, 18%, 36%);--gray-l35: hsl(200, 18%, 31%);--gray-l30: hsl(200, 17%, 27%);--gray-l25: hsl(200, 18%, 23%);--gray-l20: hsl(200, 18%, 19%);--gray-l15: hsl(200, 17%, 15%);--gray-l10: hsl(200, 19%, 11%);--gray-l05: hsl(350, 17%, 7%);--blue-l98: hsl(200, 100%, 98%);--blue-l95: hsl(200, 100%, 94%);--blue-l90: hsl(200, 100%, 87%);--blue-l85: hsl(200, 100%, 80%);--blue-l80: hsl(200, 100%, 73%);--blue-l75: hsl(199, 100%, 64%);--blue-l70: hsl(200, 100%, 58%);--blue-l65: hsl(200, 100%, 49%);--blue-l60: hsl(200, 100%, 45%);--blue-l55: hsl(200, 100%, 41%);--blue-l50: hsl(200, 100%, 37%);--blue-l45: hsl(200, 100%, 33%);--blue-l40: hsl(200, 100%, 30%);--blue-l35: hsl(200, 100%, 25%);--blue-l30: hsl(200, 100%, 22%);--blue-l25: hsl(200, 100%, 19%);--blue-l20: hsl(200, 100%, 15%);--blue-l15: hsl(200, 100%, 12%);--blue-l10: hsl(200, 100%, 9%);--blue-l05: hsl(200, 100%, 6%);--orange-l98: hsl(20, 100%, 98%);--orange-l95: hsl(20, 100%, 95%);--orange-l90: hsl(20, 100%, 89%);--orange-l85: hsl(20, 100%, 84%);--orange-l80: hsl(20, 100%, 78%);--orange-d80: hsl(20, 50%, 78%);--orange-l75: hsl(20, 100%, 72%);--orange-l70: hsl(20, 100%, 66%);--orange-d70: hsl(20, 50%, 66%);--orange-l65: hsl(20, 100%, 56%);--orange-l60: hsl(20, 100%, 50%);--orange-d60: hsl(20, 50%, 50%);--orange-l55: hsl(20, 100%, 46%);--orange-l50: hsl(20, 100%, 42%);--orange-d50: hsl(20, 50%, 42%);--orange-l45: hsl(20, 100%, 37%);--orange-l40: hsl(20, 100%, 33%);--orange-d40: hsl(20, 50%, 33%);--orange-l35: hsl(20, 100%, 29%);--orange-l30: hsl(20, 100%, 25%);--orange-l25: hsl(20, 100%, 22%);--orange-l20: hsl(20, 100%, 17%);--orange-l15: hsl(20, 100%, 14%);--orange-l10: hsl(20, 100%, 10%);--orange-l05: hsl(20, 100%, 6%);--green-l98: hsl(125, 100%, 98%);--green-l95: hsl(125, 100%, 82%);--green-l90: hsl(125, 97%, 74%);--green-l85: hsl(125, 83%, 66%);--green-l80: hsl(125, 74%, 58%);--green-l75: hsl(125, 67%, 50%);--green-l70: hsl(125, 82%, 43%);--green-l65: hsl(125, 100%, 36%);--green-l60: hsl(125, 100%, 33%);--green-l55: hsl(125, 100%, 30%);--green-l50: hsl(125, 100%, 27%);--green-l45: hsl(125, 100%, 24%);--green-l40: hsl(125, 95%, 22%);--green-l35: hsl(125, 100%, 19%);--green-l30: hsl(125, 100%, 16%);--green-l25: hsl(125, 100%, 14%);--green-l20: hsl(125, 100%, 11%);--green-l15: hsl(125, 100%, 9%);--green-l10: hsl(125, 100%, 6%);--green-l05: hsl(125, 100%, 4%);--purple-l98: hsl(285, 100%, 98%);--purple-l95: hsl(285, 100%, 96%);--purple-l90: hsl(285, 100%, 92%);--purple-l85: hsl(285, 100%, 89%);--purple-l80: hsl(285, 100%, 85%);--purple-l75: hsl(285, 100%, 81%);--purple-l70: hsl(285, 100%, 77%);--purple-l65: hsl(285, 100%, 72%);--purple-l60: hsl(285, 100%, 66%);--purple-l55: hsl(285, 100%, 61%);--purple-l50: hsl(285, 100%, 50%);--purple-l45: hsl(285, 100%, 45%);--purple-l40: hsl(285, 100%, 40%);--purple-l35: hsl(285, 100%, 36%);--purple-l30: hsl(285, 100%, 31%);--purple-l25: hsl(285, 100%, 27%);--purple-l20: hsl(285, 100%, 22%);--purple-l15: hsl(285, 100%, 17%);--purple-l10: hsl(285, 100%, 13%);--purple-l05: hsl(285, 100%, 10%);--offWhite: hsl(200, 81%, 97%);--darkRed: hsl(0, 100%, 23%);--red: hsl(0, 100%, 48%);--lightRed: hsl(0, 100%, 90%);--accent-color: hsl(200, 100%, 37%);--accent-color-light: hsl(200, 100%, 49%);--enabled-resting-text: hsl(0, 0%, 5%);--enabled-resting-lightText: hsl(0, 0%, 10%);--enabled-resting-border: hsl(0, 0%, 75%);--enabled-resting-fill: hsl(0, 0%, 40%);--enabled-resting-background: hsl(0, 0%, 98%);--enabled-restingLight-text: hsl(0, 0%, 20%);--enabled-restingLight-lightText: hsl(0, 0%, 30%);--enabled-restingLight-border: hsl(0, 0%, 80%);--enabled-restingLight-fill: hsl(0, 0%, 60%);--enabled-restingLight-background: hsl(0, 0%, 98%);--enabled-focus-text: hsl(0, 0%, 0%);--enabled-focus-lightText: hsl(0, 0%, 10%);--enabled-focus-border: hsl(200, 25%, 63%);--enabled-focus-fill: hsl(200, 25%, 25%);--enabled-focus-background: white;--enabled-active-text: hsl(0, 0%, 0%);--enabled-active-lightText: hsl(0, 0%, 10%);--enabled-active-border: hsl(0, 0%, 63%);--enabled-active-fill: var(--accent-color);--enabled-active-background: white;--disabled-text: hsl(0, 0%, 40%);--disabled-text-light: hsl(0, 0%, 60%);--disabled-text-dark: hsl(0, 0%, 20%);--disabled-border: hsl(0, 0%, 82%);--disabled-fill: hsl(0, 0%, 82%);--disabled-background: hsl(0, 0%, 94%)}",pI=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">\r
  <path fill="hsl(200, 100%, 41%)" d="m491.109,170.926c-89.722,0-162.715,82.261-162.715,183.377,0,124.258,113.791,137.671,162.715,137.671s162.715-13.413,162.715-137.671c0-101.116-72.993-183.377-162.715-183.377Z"/>\r
  <path fill="hsl(200, 100%, 41%)" d="m920.448,79.552C840.896,0,719.097,0,500,0S159.104,0,79.552,79.552C0,159.104,0,280.903,0,500s0,340.896,79.552,420.448c79.552,79.552,201.351,79.552,420.448,79.552s340.896,0,420.448-79.552c79.552-79.552,79.552-201.351,79.552-420.448s0-340.896-79.552-420.448Zm-146.744,112.456c0,2.761-2.239,5-5,5h-7.034c-.038,0-.074-.01-.112-.011-.004,0-.007.001-.01.001h-45.856c-1.075,0-2.087.506-2.731,1.366l-8.66,11.546c27.074,41.021,42.88,90.25,42.88,143.144,0,70.001-27.646,127.253-79.957,165.578-44.577,32.657-105.478,49.921-176.114,49.921-55.318,0-104.663-10.591-144.875-30.869-10.283,10.57-17.335,24.213-17.335,38.766,0,34.131,21.332,54.11,94.524,54.11,90.099,0,163.146-23.565,231.294-23.565,80.615,0,85.357,57.752,85.357,99.583,0,118.551-27.271,209.05-292.825,209.05-33.161,0-97.221-1.724-132.317-9.312-3.75-.811-6.015-4.609-5.018-8.314l20.862-78.928c.909-3.377,4.229-5.502,7.667-4.855,21.23,3.999,80.354,10.479,108.806,10.479,156.167,0,209.013,8.004,209.245-98.506-.071-11.553,3.771-19.614-12.673-19.614-61.646,0-130.08,16.099-239.25,16.099-126.868,0-158.866-87.434-158.866-144.64,0-26.761,14.174-60.59,39.162-86.528-32.729-36.272-49.828-83.42-49.828-138.455,0-142.651,114.875-258.706,256.071-258.706,59.47,0,114.268,20.59,157.783,55.082l12.693-16.924c7.611-10.15,19.559-16.123,32.245-16.123h67.717c.01,0,.019.003.029.003.032,0,.062-.009.094-.009h7.034c2.761,0,5,2.239,5,5v70.632Z"/>\r
</svg>`,SI=":root{--dark-gradient-background: linear-gradient(135deg, var(--blue-l15), var(--purple-l05));--global-focus-style: 1px dashed var(--purple-l50);--global-transition: all 80ms ease;--animate-fade-in-slide-down: .18s ease-in fade-slide-in;--animate-fade-in: .18s ease-in fade-in;--animate-fade-out: .18s ease-out fade-out;--animate-fade-update: .14s ease-in fade-in-update;--l1-shadow: 0px 0px 2px rgba(0, 0, 0, .1);--l1-shadow-down: 0px 2px 2px rgba(0, 0, 0, .1);--l2-shadow: 0px 0px 4px rgba(0, 0, 0, .2);--l2-shadow-upper-left: -1px -1px 4px rgba(0, 0, 0, .2);--l2-shadow-down: 0px 4px 4px rgba(0, 0, 0, .3);--l3-shadow: 0px 0px 6px rgba(0, 0, 0, .3);--l3-shadow-down: 0px 6px 6px rgba(0, 0, 0, .3)}@font-face{font-family:FiraGo;font-style:normal;font-weight:400;src:url(/app/assets/FiraGO-Regular-aODw3bZ7.woff2)}*{margin:0;padding:0;font-family:FiraGo,Tahoma,Verdana,sans-serif;font-size:14px;font-weight:400;text-align:left;box-sizing:border-box;transition:var(--global-transition)}html,body{background-color:var(--dark-gradient-background);height:100%;width:100%;min-height:100%;min-width:100%;overflow:hidden}html[lang=en],html[lang=en] body{overflow:auto}::-webkit-scrollbar{width:8px;padding:1px;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--offWhite)}::-webkit-scrollbar-button{height:0px;background-color:transparent}::-webkit-scrollbar-track{width:8px}::-webkit-scrollbar-track-piece{background-color:transparent}::-webkit-scrollbar-thumb{margin:2px;background-color:var(--gray-l80);border-radius:4px}::-webkit-scrollbar-corner{display:none}::-webkit-resizer{display:block;border:2px outset var(--enabled-restingLight-background)}div,p,h1,h2,h3,table,td,label,button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}b,strong{font-weight:700}a,a:visited{background-color:transparent;border-radius:4px;color:var(--blue-l55);text-decoration:none}a:active{color:var(--blue-l40);background-color:#0099e61a}a:focus,a:hover{color:var(--blue-l65);text-decoration:underline;cursor:pointer}a[danger],a[danger]:visited{color:var(--darkRed)}a[danger]:hover,a[danger]:focus{color:var(--red)}p{display:block}span:disabled,span[disabled=disabled]{color:var(--disabled-text)}hr{border-style:solid;border-color:var(--gray-l85)}h1{margin-left:0;color:var(--gray-l55);font-size:2em;margin-bottom:8px;clear:right}h2{color:var(--gray-l45);font-size:1.6em}h3{color:var(--gray-l45);font-size:1.3em;margin-bottom:4px}h4{color:var(--gray-l45);font-size:1.2em;margin-bottom:4px}table{border-collapse:collapse}td{vertical-align:top}svg{overflow:visible}.number{font-family:monospace}label,label:focus,label:active{display:inline}label:hover{color:#000}input,textarea{border:none;padding:0 0 0 4px;height:24px;text-align:left;font-family:monospace;background-color:var(--enabled-restingLight-background);color:var(--enabled-restingLight-text);border:1px solid var(--enabled-restingLight-border);border-radius:4px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}input:hover,textarea:hover{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}input:focus,textarea:focus{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}textarea:hover::-webkit-resizer,textarea:focus::-webkit-resizer{display:block;border:2px outset var(--enabled-focus-background)}info-bubble{width:12px}input:focus,button:focus,textarea:focus,info-bubble:focus,glyph-tile:focus{outline:var(--global-focus-style);outline-offset:-1px}input[type=image]{height:auto;width:auto;background-color:transparent;border-width:0px}input[type=number]{text-align:right;width:70px;border:1px solid white;border:1px solid var(--gray-l90);cursor:default}input[type=text][disabled=disabled],input[type=number][disabled=disabled]{background-color:var(--gray-l90);border:1px solid var(--gray-l90);color:var(--gray-l65)}input[type=checkbox]{accent-color:var(--accent-color);opacity:.75}ul li{margin-left:20px;margin-top:10px}canvas:focus,canvas:focus-visible,edit-canvas:focus,edit-canvas:focus-visible{border:0;border-image:none;outline:0}@keyframes fade-slide-in{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-update{0%{opacity:.6}to{opacity:1}}@keyframes fade-in{0%{opacity:0;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}@keyframes fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.99)}}.span-all-columns{grid-column:-1 / 1!important}button,button:active,button:hover,button:focus{text-align:center;padding:4px 8px;margin:2px 0;cursor:pointer;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--gray-l90);color:var(--enabled-text);box-shadow:var(--l1-shadow)}button:hover{color:var(--enabled-focus-text);border-color:var(--blue-l85);box-shadow:var(--l1-shadow)}button[disabled],button[disabled]:active,button[disabled]:hover,button[disabled]:focus{background-color:var(--gray-l95);border-color:var(--gray-l95);color:var(--disabled-text);cursor:default}.button__call-to-action,.button__call-to-action:hover,.button__call-to-action:active,.button__call-to-action:focus{background-color:var(--blue-l60);color:var(--gray-l95)}.button__call-to-action:hover{color:#fff}",CI="dialog{z-index:1000}#toast,#error{display:none;width:300px;position:absolute;left:520px;top:0;margin:5px 0;background-color:var(--green-l90);color:var(--green-l10);padding:4px 8px;z-index:2010;text-align:center;border:1px solid var(--green-l60);border-radius:4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#toast[fancy]{background-color:var(--purple-l30);background:linear-gradient(135deg,var(--purple-l25),var(--purple-l10));color:var(--purple-l95);font-size:1.2em;border-color:var(--purple-l30);padding:10px}#toast a{color:var(--green-l10)}#notation{display:none;position:absolute;right:900px;top:400px;width:auto;height:auto;padding:0;z-index:2020;background-color:#e5eaef;border:5px solid rgb(229,234,239);border-radius:5px 5px 0;box-shadow:var(--l2-shadow-upper-left);animation:var(--animate-fade-in)}.notation__path-add-point{display:grid;grid-template-columns:20px min-content min-content;margin:0 5px 2px}.notation__path-add-point span{font-family:monospace}.notation__path-add-point label{font-family:monospace;color:var(--enabled-restingLight-lightText)}#error{margin-top:10px;border-color:var(--red);color:var(--darkRed);background-color:var(--lightRed);display:grid;grid-template-rows:20px 1fr;padding:10px 12px 12px;row-gap:10px}#error hr{border-color:var(--red);margin:10px 0}.error__header{display:grid;grid-template-columns:1fr 20px}.error__header h3{color:var(--darkRed)}.error__header button{background-color:var(--darkRed);border-color:var(--darkRed);color:var(--lightRed);width:20px;height:20px;line-height:20px;padding:0;margin:0}.error__header button:hover{color:#fff;border-color:var(--red)}#context-menu{display:grid;grid-template-columns:24px 1fr min-content min-content;column-gap:0px;row-gap:5px;width:fit-content;overflow-y:auto;padding:10px;position:absolute;z-index:2030;background-color:var(--enabled-resting-background);border:1px solid var(--enabled-focus-border);border-radius:0 4px 4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#context-menu:focus{outline:0}.context-menu-row{display:contents;padding:5px 10px 5px 5px;height:24px;border-radius:4px}.context-menu-row:hover>span,.context-menu-row:hover>.row-notes,.context-menu-row:hover>.row-notes span,.context-menu-row:hover>.row-notes code{background-color:var(--enabled-focus-background);color:var(--blue-l45);cursor:pointer}.context-menu-row:focus{outline:var(--global-focus-style)}.context-menu-row[disabled]{opacity:.5;color:var(--disabled-text-light)}.context-menu-row[disabled]:hover>span,.context-menu-row[disabled]:hover>.row-notes,.context-menu-row[disabled]:hover>.row-notes span,.context-menu-row[disabled]:hover>.row-notes code{color:var(--disabled-text-light);cursor:default;background-color:transparent}.context-menu-row[disabled] svg g{fill:var(--disabled-text-light)!important}#context-menu .spanAll h2{font-size:.8em;color:var(--enabled-restingLight-lightText);font-family:monospace;padding:0 20px 0 0}.context-menu-row hr,.context-menu-row hr:hover,.context-menu-row hr:active,.context-menu-row hr:focus{margin:8px 0;grid-column:1 / -1;border-width:0px 0px 1px 0px;border-color:var(--gray-l90)}.context-menu-row .row-icon{height:24px;width:24px}.context-menu-row .row-icon svg{height:20px;width:20px;margin:2px}.context-menu-row .row-name{line-height:22px;height:24px;padding:2px 20px 0 10px;display:flex}.context-menu-row .row-name svg{margin-right:10px}.context-menu-row .row-notes{background-color:transparent;width:max-content;height:24px;opacity:.8;display:contents;margin-left:20px}.context-menu-row .row-notes code{height:20px;line-height:18px;margin:2px;font-size:.8em;min-height:24px;min-width:24px}.context-menu-row .row-notes span{grid-column:span 2;font-size:.8em;line-height:24px;padding:0 0 0 4px;height:24px;margin:0}#modal-dialog{display:block;position:absolute;text-align:center;border-width:0px;padding:0px auto;left:0;top:0;width:100vw;height:100vh;z-index:2000;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background-color:#ffffffbf;animation:var(--animate-fade-in)}.modal-dialog__content{display:grid;grid-template-rows:30px 1fr;width:clamp(500px,66vw,1000px);max-height:calc(100vh - 80px);overflow-y:hidden;margin:40px auto;text-align:left;background-color:var(--enabled-focus-background);border:1px solid var(--blue-l60);border-radius:8px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}.modal-dialog__header{margin:4px;height:20px;display:grid;grid-template-columns:1fr 20px}.modal-dialog__body{display:block;max-height:calc(100vh - 120px);overflow-y:auto;padding:0 20px 20px}.modal-dialog__body h2{margin-bottom:10px}.modal-dialog__close-button{background-color:var(--blue-l95);border-color:var(--blue-l85);color:var(--blue-l50);text-align:center;width:20px;height:20px;line-height:14px;font-size:1.2em;padding:0 0 2px;margin:0}.modal-dialog__close-button:hover{background-color:var(--blue-l90);color:var(--blue-l30);border-color:var(--blue-l70);cursor:pointer;padding:0 0 2px;margin:0}.modal-dialog__close-button:active,.modal-dialog__close-button:focus{background-color:var(--blue-l90);color:var(--blue-l50);cursor:pointer;padding:0;margin:0}.modal-dialog__glyph-chooser-scroll-area{height:100%;padding:10px 5px 5px 10px;background-color:var(--offWhite);margin-bottom:10px}",gI="";class qa extends HTMLElement{constructor(e={}){super(),this.isSetUp=!1,this.initialAttributes=e,this.observedAttrs=["text","font-size","line-gap","page-padding","show-page-extras","show-line-extras","show-character-extras","show-placeholder-message","width-adjustment"]}connectedCallback(){this.constructor.name!=="DisplayCanvas"&&(this.__proto__=customElements.get("display-canvas").prototype),this.textBlockOptions=new Kr,Object.keys(this.initialAttributes).forEach(n=>{let a=this.initialAttributes[n];n!=="_text"?(n!=="width"&&n!=="height"&&this.setAttribute(v1(n),a),this.textBlockOptions[pi(n)]&&(this.textBlockOptions[pi(n)]=a)):(this.textBlockOptions.text=this.initialAttributes._text,this.setAttribute("text",this.textBlockOptions.text))}),this.observedAttrs.forEach(n=>{if(this.hasAttribute(n)){let a=this.getAttribute(n);n.startsWith("show")?a==="false"?a=!1:a=!0:n!=="text"&&(a=parseFloat(a)),this.textBlockOptions[pi(n)]=a}});const e=this.attachShadow({mode:"open"}),r=y({tag:"style",innerHTML:gI});e.appendChild(r),this.canvas=y({tag:"canvas",id:"mainDisplayCanvas"}),e.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.drawCrisp=!1,this.isSetUp=!0,this.resizeAndRedraw?this.resizeAndRedraw():console.warn(`${this.constructor.name}: Methods not available on connectedCallback`)}resizeAndRedraw(){this.isSetUp&&(this.updateTextBlock(),this.updateCanvasSize(),this.redraw())}updateCanvasSize(){var s;const e=(s=this==null?void 0:this.parentElement)==null?void 0:s.getClientRects()[0],r=this.textBlockOptions.pageHeight,n=this.textBlockOptions.pageWidth;let a=1e3,o=1e3;r==="auto"?(a=this.textBlock.pixelHeight,a+=this.textBlockOptions.pagePadding):r==="fit"?a=e.height:isNaN(parseInt(r))||(a=parseInt(r)),n==="fit"?o=e.width:isNaN(parseInt(n))||(o=parseInt(n)),this.widthAdjustment&&(o+=this.widthAdjustment),this.height=a,this.width=o,this.canvas.height=a,this.canvas.width=o}updateTextBlock(){let e=this.calculatePageMaxes(),r=!1,n=parseInt(this.getAttribute("project-editor"));isNaN(n)||(r=rt().projectEditors[n].project),this.textBlock=new K0({options:this.textBlockOptions,canvasMaxes:e,ctx:this.ctx,drawPageExtras:this.drawDisplayPageExtras,drawLineExtras:this.drawDisplayLineExtras,drawCharacterExtras:this.drawDisplayCharacterExtras,drawCharacter:this.drawDisplayCharacter,project:r})}calculatePageMaxes(){var s;const e=(s=this==null?void 0:this.parentElement)==null?void 0:s.getClientRects()[0],r=this.textBlockOptions.pagePadding,n=this.textBlockOptions.pageHeight,a=this.textBlockOptions.pageWidth,o={xMin:r,yMin:r,xMax:1e3,yMax:1e3};return n==="auto"?o.yMax=1/0:n==="fit"?o.yMax=e.height-r:isNaN(parseInt(n))||(o.yMax=parseInt(n)),a==="fit"?o.xMax=e.width-r:isNaN(parseInt(a))||(o.xMax=parseInt(a)),this.widthAdjustment&&(o.xMax+=this.widthAdjustment),o}static get observedAttributes(){return this.observedAttrs}attributeChangedCallback(e,r,n){this.constructor.name==="DisplayCanvas"&&(e==="text"&&(this.textBlockOptions.text=n,this.resizeAndRedraw()),e==="font-size"&&(this.textBlockOptions.fontSize=Math.max(parseInt(n),1),this.resizeAndRedraw()),e==="line-gap"&&(this.textBlockOptions.lineGap=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="page-padding"&&(this.textBlockOptions.pagePadding=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="show-page-extras"&&(this.textBlockOptions.showPageExtras=n==="true",this.redraw()),e==="show-line-extras"&&(this.textBlockOptions.showLineExtras=n==="true",this.redraw()),e==="show-character-extras"&&(this.textBlockOptions.showCharacterExtras=n==="true",this.redraw()),e==="show-placeholder-message"&&(this.textBlockOptions.showPlaceholderMessage=n==="true",this.redraw()),e==="width-adjustment"&&(this.widthAdjustment=parseInt(n),this.resizeAndRedraw()))}redraw(){if(this.isSetUp){if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.textBlock.hasDrawableCharacters)this.textBlock.draw({showPageExtras:this.textBlockOptions.showPageExtras,showLineExtras:this.textBlockOptions.showLineExtras,showCharacterExtras:this.textBlockOptions.showCharacterExtras,showCharacter:!0});else if(this.textBlockOptions.showPlaceholderMessage){this.ctx.fillStyle=jr.disabled.text,this.ctx.font="14px sans-serif",this.ctx.textBaseline="middle";let e=this.textBlock.canvasMaxes.xMin,r=this.height/2;this.ctx.fillText("Project preview text will be shown here.",e,r)}}}iterator(e){const r=this.textBlock.data;for(let n=0;n<r.length;n++)for(let a=0;a<r[n].length;a++)e(r[n][a],this)}drawDisplayPageExtras(e,r){const n=r.canvasMaxes,a=n.yMin||0,o=n.yMax===1/0?r.pixelHeight:n.yMax,s=n.xMin||0,L=(n.xMax||1e3)-s,I=o-a;e.fillStyle="transparent",e.strokeStyle=xt.gray.l90,e.lineWidth=1,e.strokeRect(gt(s),gt(a),ae(L),ae(I))}drawDisplayLineExtras(e,r,n){e.strokeStyle=xt.gray.l85,e.beginPath(),e.moveTo(n.canvasMaxes.xMin,r.view.dy),e.lineTo(n.canvasMaxes.xMax,r.view.dy),e.closePath(),e.stroke()}drawDisplayCharacterExtras(e,r){const n=xe(),a=n.settings.font,o=r.view.dz;let s=r.widths.advance*o,x=n.totalVertical*o,L=r.view.dy-a.ascent*o,I=r.view.dx;const c=r.widths.kern*o*-1;r.widths.kern&&(e.fillStyle="orange",e.globalAlpha=.3,e.fillRect(I+s-c,L,c,x),e.globalAlpha=1),e.fillStyle="transparent",e.strokeStyle=xt.blue.l85,e.lineWidth=1,this.drawCrisp&&(I=gt(I),L=gt(L),s=ae(s),x=ae(x)),e.strokeRect(I,L,s,x)}drawDisplayCharacter(e,r){const n=r.item,a=or(r.view);n&&(e.fillStyle=jr.enabled.resting.text,e.strokeStyle="transparent",ya(n,e,a,1))}}function RI(t){let e,r;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(t,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);else throw console.warn("No XML document parser found."),r=new SyntaxError("No XML document parser found."),r;if(e.getElementsByTagName("parsererror").length){const L=e.getElementsByTagName("div")[0].innerHTML;throw r=new SyntaxError(x(L)),r}return{name:e.documentElement.nodeName,attributes:s(e.documentElement.attributes),content:o(e.documentElement)};function o(L){const I=L.childNodes;if(I.length===0)return x(L.nodeValue);const c=[];let C,R,g;for(const Y of I)C={name:"",attributes:{},content:""},Y.nodeName!=="#comment"&&(R=o(Y),g=s(Y.attributes),Y.nodeName==="#text"&&JSON.stringify(g)==="{}"?C=x(R):(C.name=Y.nodeName,C.attributes=g,C.content=R),C!==""&&c.push(C));return c}function s(L){if(!L||!L.length)return{};const I={};for(const c of L)I[c.name]=x(c.value);return I}function x(L){try{return L=L.replace(/^\s+|\s+$/g,""),L.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}}let D0=0;async function ko(t){const e=document.querySelector("#progress-indicator__message");if(e){const r=document.querySelector("#progress-indicator__bar");r&&(D0=(D0+.95)%100,r.style.backgroundPosition=`${D0}%`,t&&(e.innerHTML=t)),await ra()}}function yI(){let t=y({id:"progress-indicator__wrapper"}),e=y({id:"progress-indicator__message",innerHTML:"Working..."}),r=y({tag:"div",id:"progress-indicator__bar"});return ne(t,[e,r]),t}function mI(t){let e=y({tag:"div",className:"panel__card",innerHTML:"<h3>Component instance</h3>"}),r=Ue("name"),n=bt(t,"name","currentComponentInstance","input"),a=NI(t),o=fI(t),s=Ue("flip vertical",`
		Flip top to bottom,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),x=Hn(t,"isFlippedNS","currentComponentInstance"),L=Ue("flip horizontal",`
		Flip left to right,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),I=Hn(t,"isFlippedEW","currentComponentInstance"),c=Ue("reverse winding",`
		Reverse all the windings,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),C=Hn(t,"reverseWinding","currentComponentInstance"),R=Ue("rotate"),g=bt(t,"rotation","currentComponentInstance","input-number"),Y=Ue("rotate first",DI());Y.querySelector("info-bubble").setAttribute("bubble-width","540px");let w=Hn(t,"rotateFirst","currentComponentInstance"),V=y({tag:"h3",innerHTML:"Component root"}),_=Q1(t.link);return ne(e,[r,n,a,o,s,x,L,I,c,C,R,g]),t.rotation!==0&&ne(e,[Y,w]),ne(e,[Wr(),V,_]),ne(e,Wr()),ne(e,y2()),e}function NI(t){let e=Ue(`Δ x${ka()}Δ y`,`
		The difference in x or y position,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),r=y({tag:"div",className:"doubleInput"}),n=bt(t,"translateX","currentComponentInstance","input-number"),a=bt(t,"translateY","currentComponentInstance","input-number");return r.appendChild(n),r.appendChild(Ka()),r.appendChild(a),[e,r]}function fI(t){let e=Ue(`Δ width${ka()}Δ height`,`
		The difference in width or height,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),r=y({tag:"div",className:"doubleInput"}),n=bt(t,"resizeWidth","currentComponentInstance","input-number"),a=bt(t,"resizeHeight","currentComponentInstance","input-number");r.appendChild(n),r.appendChild(Ka()),r.appendChild(a);let o=Ue("lock aspect ratio",`
		When either the width or height is adjusted,
		the overall size will be kept proportional.
		<br><br>
		Maintaining aspect ratio will override value
		locks if need be.
	`),s=Hn(t,"ratioLock","currentComponentInstance");return[e,r,o,s]}function DI(){return`
		<h1>Rotate First - Resize First</h1>
		<div style="width: 500px;">
		Component Instances are rotated around their center point.  But if they are resized, their center point changes.  When Component Instances are rendered, the Root Component is adjusted according to the delta values stored by the Component Instance.
		<br><br>
		This option changes how this Component Instance is rendered.  The default order is to resize, then rotate. When this option is selected to be true, the new order will be rotate, then resize. This order has an impact on the Component Instance's resulting shape.
		<br><br>
		<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAFXCAYAAABUXrzKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFkJJREFUeNrs3btz29aCwOGjTLoUyyb10m1SRC5uHapNE7mIW0ttdmdszexsK6m9jZRitxXdKoWdJq3ov8Da4t42vPUtrC2yLReHAMSH+ab4wMH3zdC2KFkPCAc/HBAEQwAAAAAAAAAAAAAAAAAAAAAA2JTbXsNC2L4vLQJqsoFpZX8eZre4oXnIbvfh5UFnysceZ+97b6HByt5k46ibjaO2RSHo8FSzhPPsdlKEfPz9Mewx3JfZhqdb3Bc/9ia7HViAsJabbDwFURd0WDfmx0WYZx36axSxP84+/uxxIwSIegWZhZBizE/GwlzOxD9kt24R8u+nztyjlwcHS37NqxAPM076v7e93oz/eTRy6D//3uNRhWZ2i/efZe+/90tlB+OoWYyRVcTx1Rp6+3ShqOdf87z4v83i3jgOfvEwmKBTz43Qx6FQvy82Jg8TPjZ+zNXEjdYyQc8fn7+b+H/H3zcr6IOP7RQ7H6+Kn+PZxO8fNjuW5q27y5od9Xxn9ipMP6p2aqY/2xcWAYkZPszezjYAL6bGML//lzU3eo3ia3bnfGS3H/rPb52hj3ldfFyM/EU/9vnPcuzXSsXlJ6LO/5hGf9yG8LzYMX5W7JSHIvbM4DF0UppRxLPYW0MBPV3g49edgcSYx6MC16E85D4t6POVZ+APb+BCGBx6hG26L3YqVxGPLp0MrcdHcx86iofUb3vPHk9Qze/rFue3HPfHR37U4H5orL0f+bz5Dvbk9wk6VMrwTPZywZiv/nzZ/BDhcTGj+G1K0A+X+IxvQ34SUZydd4oZeyg+P2xXfgSrs+LYaC0V8+GAz9vJiN/Xbe+7Yuz92J/ND5QPod0XO9lm6FBR3w39e5EN0Ys1Yt4sNh5xA3Q2I9yNx79ve8NHA34L+UMCD0Mbs3axoTovbvF9pwts5GAfLRfz6U5GYp6LR99a/XEXd4DjQ1T5TsTJ4/treN6JoJOSxsJ7+utvZMrH6l8UM4Z5Hz8e/FY/2re90Q3ey4Oz7L74uH5zbAMGmxd3VJ9mB7L7JDHPj6SVR6rORo4e3PbiDvldMY46YfDMlsu6PjNE0GH5jcxFEeTLqVebG7guZirdMHhM/McweMrcu5Cf+BPGdkbMytn2eh2D+I/sdrH253qKs9Hzx8PLh8U+H2vx7dteee7Ku+Lj7osTSmtJ0ElJd2TPfhN76fmM4XzhDUc+wx5/LC9uiP4nlCfUbep7heVifhLmnXuyve9nOObtGWPtMoxeT+Kszr9GT1sjJR+G/v16Q1/jvPj7sH/BmPI2fLb84L5FZzBeyIJ9iPm+fD9xp/mPkD9MdTnn2SonY+PnVZ1/lS4sQ0obpkaxISgH+PMnn/nmJ7a1FvrYWRenyTdaHzf2fcJqMe+GVR/uiddPeJqYlzPzeReiaYbBRaTOip3t8ryWWl5VTtBJbQN1MTSLnn+Wbb4TcJJ9zPWaX7f1OEsfvVJc/H7aIycaDQ4nHob8+fLP/OLY8VhZ37KXS14n5qM71+/7F5C67cXH0q+KcV/LqysKOinO0stYllG/DONPEcs/9iQMLjXZnnshmtWC3psw8xme4b9wjWr2ZKzsOuifwvyHnzr9IwGDnZHReI9HXtAh2Q1VZ+jfh2Mbj7hBeL7yU3amB33a45PxqMHZAmfJwzbHyuXOzhKfd97JYAzHw+sfJ+4Qjx+GX/fIm6DD3myoYkyPF9xIvNjoIbr8cGLjMeaeX85+Rv2yzk/7EnTY741VnDnHM1/j382xGXncs39rloxx8hj13wQdAKoe9dueV/YDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAglK+9DCw2XhrFq7qxIV9YBLDSxim+1vrH4nXOgdkhv8j+9Uf/Fv8t7Bvh9dBhtZifFG/F11U/Ci8P7i0YGAt5CG+y2+vsNh7wOG5+yW7X2dh5sLAEHXYd8yDqsEDI/8yGyO9Zv//ZDeGn8xC+bgq7oMOexLzTzjdQ53chfNUQdZgV8t+v83+XWifCLuiwJzH/79P8/uahqCPki4Z8nLALOuxFzEuiTn3HRhwXV0uHfNwPb/Kwf9UQdkGHHcVc1KlvyM/jmr9WyIfFsRPD/sNrYRd02FHMRR0hXz3kwi7osFcxF3WE/GkJu6DDzmIu6gj5tsLezW6X2bhq+yUJOmwm5qKOkAu7oEMiMRd1hFzY9yro+bV366aTrRAdo1rM1465qCPkwr5HQe/VcHnEFeHC6BbzJyXqCLmw70XQf71Mfyl8+30I37QEXcyfPuaiThVCXq7/cXsfr7deRcI+8xfeK6Ke/u2ni17x84p53WJeruc/32x+PWse9sLNp3Jd++SlV9lJyG97fzyu9+W6/3Uzne35V418mz4Ya73iZz5J/dfr9dAxM9/kzHxYN5uQXx6VhzLjFOJO1NlqyEO4eZyVx/X+357l635VZ+WTxPH1azY3+/dn+RGHfLw1+z974mEXdMR8GzEXdXazrrdqE3JhF3TEfOtEne2E/K6/btUt5NPC/p/P82WQSzLsgo6Y74Kos/mQt2od8nHxZ4/LIC6LRMMu6Ii5qCPkwp5A2AUdMRd1hFzYPw97S9BBzEUdIa9+2O/6y7hCYRd0xFzUEXImh71VpbALOmIu6gg5CYRd0BFzUUfISSDsgo6YizpVCPnfO0Iu7IKOmIs6lQ55XBcujoRc2AUdMRd1Kh3yv3UsI2EXdMRc1BFy6hB2QUfMRZ3tr7fNYt0V8lTCHq8V//fOTsMu6Ii5qLP9kP/xuO4KeTpjNP4O4+9yR2EXdMRc1BFynkr8Xe4o7IKOmIs6Qs72w/7k41bQEXNRR8jZftg/9teRuK4IOmJ+Wt9lIepCTgphP+mvK08UdkFHzEUdISeBsAs6Yi7qCDkJhF3QEXNRR8hJIOyCjpiLOuuEvLywiJCz47ALOmIu6qwT8tFLf8LOwi7oiLmoI+QkEHZBR8xFnc/Xw0Z2uxJy9irscWzPCLugs1+zoRCOH9/+/RfLZJ2oD/bqY9RfWShLOXkMeenXSyFnt2H/fJsY19FzQWf/vDzIpkAh2w0N/allOL8LoWliuZKfb0L4y+O+UTtbtmcWylLr4nX2ZzYVD5eP62Ncpv+VTdhbJ5YP2xXXubjuxXVwoN1fR18enAo6+7ohvX+M+lcNUV815oPotIcHPEutiw/Z7WIk7F83hZ3dhDyue+MhzydBQdARdTFn+bBf9+8Tdjbp21YIf/24cMgFHVEXc5YP+1kR9raws5GQX9yNb+/mhlzQEXUxZ7X1slssX2Hn6UP+TWvpkAs6oi7mCDsJhFzQEXUxZ9Nhjxvrb1uWERsNuaAj6mLOpsMeN9ZxXRV2NhhyQUfUxRxhJ4GQCzqiLuYIOwmEXNARdTFH2Ekg5IKOqIs5ws7mQ97Jbs83GXJBR9TFHGFnsyE/yn7XR8W2auMEHVEXc4SdzYS8s81vR9ARdTFH2FlG3L7sUcgFHVEXc/Yz7EdFHIR935QXDIovnLJHIRd0RF3M2c/1uNOPg7DvX8hHL+m7NyEXdERdzBF2Egi5oCPqYk4KYR+8XjY1DbmgI+piTgphj9GJ646w1zbkgo6oizmphD2uO8Je25ALOqIu5gi7kCcQckFH1MUcYRfyBEIu6Ij6rqMu5gj7PoS8W/WQCzqivsuoiznCvg8hjy+Y8qzqIRd0RH1XURdzhH1fQt5O6ccVdER9m1EXc4RdyAUdKh51MWd/wt5NMuxxLP90kV9rvUYhLx1Mfc9tr1fDVf4y+4VfGPk1ctuLFc9qHhrhz4dsDci2dd0NvHSxmLN/635cIc+z26Dknax3v16G8M9u9UL+w5vs9jr/9yDkl6lHXNAFnW1GXcwRdiHfadBB1MUcYd/HsAu5oMNWoy7mpBD2OBZ+/yW7Xef/FnJBh1pFXcwRdiEXdKh41MUcYRdyQYeKR13MEXYhF3SoeNTFHGEXckGHikddzBH21cM+OeTxk2SfMFxn4+nBAhd02HzUxRxhXy3sQi7osDdRF3NYPuxCLuiwV1H/eyeEvxyLOXwe9qv+OJkU9hjyn86FXNBhj6I+IOYwOk7i+MjKHV6PhP3/HoZfBEbIBR32KupiDsuEXcgFHfYw6q+yDdKZhQELhz0IOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD77MAigBlue4f9v18e3FsY1HD9b2R/xjFwn42BBwtE0KHKG7RW9ue77HYk6tRknT/J/vwxux2PvScG/X12e5uNhc7Yxzez+y4svN36wiKAueIs5e5xtg5phvwwu33M/nUzIeblODgpxsK7/uw9j/mNhbcfvrQIYKmoLzdTz2f4reKtbnbrZP+/a3GydzGP63e+noeR9TWEf2S370J+6L1ZvO947O1Vvmb5ObrZmGgP3d8sdhwmGz8SkH/8cfG9t+s8vhxypy4brLuhsK4jHnacH/U85DdTNninIxsw2O3YiOvox6GYx3X7bOSw+vz1+nKpQ+75DsTH4q24k3s09L7Zs/6XBwdzdkRqO77M0GH5mfpVP+rTN1aNYiNTznLi447/G/LHJQ/7G6vbXnfiBhO272Ys5kdTT4CL6+xt75diDKz7NadpDo2dt3M+z1Wxk/28+PumuE/QIWGrntBWnuU7/HlezPwfcWN42zvt/9+XB9dD77nI7v+j2GC9CvnhTNjl7DzOuFtDAT2aeTZ7Pnu+WvNrXhVjqhNmHzV7u8Csv1UcHegWnzvubBz3f64a7jALOvXw8uBsjQ3e3UKzl9Gv1566kQrh/HFGNPr5j8bOHo4bvjfFzOOZpw2xAa+G/n25QMzXOwEuX9/fFDH/MCXo/7LEZ4wh/34s8OX9ZujA1Bn+0RNE9cfi7w9F+OMhzOtiIxcPxT8vZviHxX2hf0RAzNmMwwV2QkvNfvQnmz8bzh+KelfsoL4YWr+nf0/5DkDo/5/J562c9T9nfuTrofi/13U9MU7QYVsxzzdOh2HwfN7BzCifWRwWs/ezoZnQtcfa2ULQ569j6z/PvHys/kWx0zrv48+LWzl+uiE/We/90Pf0vv/MkxBeF5+71iecCjrpyWe359nAfrFHMT8sZieh2Ch1hzZK5WPuH/uzlvys4/zpPNNnRFClMXkS8qeWtUeCPFl5KL7cySjPY2kWs/EXY1HvBOej9LmwDCnGfPxpLKuLsV0/5o2h2Ul74gwiP5xYxru8qMepQ+1sWLlj2dzgmIyf+6r4WmcLjLmL/lPT4lPZ8ls8g/3Z0Pd67tcm6Ij5Lr+nwyLmp3OOBpQewupn5sOi7h+DvrkrIZY7s/FrxSNQF/3b4GS2ZnHfyYzId4d2eF2xcQqH3Ek15o2hE2qWn7U8xUk1o9/T7Mf2BrP4ctYUZzX5NeRhc34LgyNCceb7YgNfoxyHx2HyJWWbxdfuhNnPH3e0StCp6cy8vG8VcSZwsbWYj85iOsVG9Y/+hvC292bsuezwlOJj0VfFunfcnyUvclJZ3AFd/OGgaeeBfF/EPu7Avu3/Pfvzvho7qsAYl34l1aCv43KtM3pHv5/7YhY0SX7d6cHze/MrXuX3HYfBU3yeu/47Gxw/5bo2f/0fHEmKs+r1ThbND7vnM/Py0q+DS8vGHY0PxfrfKGI+fG5J2y/ODJ0UxRPK8qeuDEe93OtfRWfN7+h46Ps4DNMf8+sUT925GtqQdoufKT4d533xud6F/NKWsInxE9e1GMiT4p7z7O1Xxfgpx0Jcn38cW7fvNrRexp2FN2Hy89SvxdwMnfrN1Edf8GG730ecZbQW+Mj2UPAfPju0ns+Gyo3ae6/HzobX23LGvIj84jDrXCNhME7GX22tvH/4CnAfjAFBp75Rv99Z0KHa4+c8TD55rQx5PHJ05imVgg7b2yg9zYVloI5jqBk+f7io46qFwC42SA0LAQAAAAAAAAAAAAAAAAAAAAAAAABIQHw539vep+ISylSIa7kDMIh5/nrkUXzxlSOvcCboAFQ35kHUq+cLiwBAzB9j3s3afXkUwp/9V0eNL3J05/A7AFQh5re9Xv/214+98FWjl93bC83DXrj51Cve5zF1AKhczMubqANAxWMu6gCQSMxFHQASibmoA0AiMRd1AEgk5qIOAInEXNT3mivFAaQe88kXjVlPM2v4+V3Idg7iW64oJ+gAVC7moi7oACQSc1EXdAASibmoCzoAicRc1AUdgERiLuqCDkAiMRd1QQcgkZiLuqADkEjMRV3QAUgk5qIu6AAkEnNRF3QAEom5qAs6AInEXNQFHYBEYi7qgg5AIjEXdUEHEPNEYi7qgg4g5onEXNQFHUDME4m5qAs6gJgnRtQFHUDMRR1BBxBzURd0AMRc1KsS9NveXQ2Xx9ts5WlbLZbeCGWjMFxZEMYIYi7qu/PljPe1arg8PlglVtKo6foSjBHE/ImVP38e9bhtucuWj6ivGfRcXLCp+/5VlqMTa8NTqMP6UkfGiJiLegJB/1sn/aXwjcnlk6nD+lJHxoiYi/re+8IiABDzvY56vlzKqB9aMIIOIOaiLugAiLmoCzoAYi7qgg4g5qIu6oIOsHuDiy+9PRNzURd0gIqKF2nIK/4f7/IroiHqgg5QMfnzp/Oox8uaxudXi7qoCzqAqIu6qAs6gKiLuqADIOqiLugAiLqoCzqAqCPqgg4g6qIu6ACIuqgLOgCiLuqCDiDqiLqgA4i6qCccdUEHEHVRF3QARF3UBR0AURd1QQcQdURd0AFEXdSTibqgA4i6qCcQdUEHEHVRTyDqgg4g6qKeQNQFHUDURT2BqAs6gKiTQNQFHUDUSSDqgg4g6iQQdUEHEHUSiLqgA4g6CURd0AFEnQSiLugAok4CURd0AFEngagLOoCok0DUBR1A1Ekg6oIOIOokEHVBBxB1Eoi6oAOIOglEXdABRJ0Eoi7oAKJuuSQQdUEHEHVRTyDqgg4g6qKeQNQFHUDURT2BqAs6gKiLegJRF3QAURf1BKIu6ACIegJRF3QARH2TUc+VUW8IOgCiXjU/vB5+6yxbvg+CDoCoV8nPNyG0Tsq3TrPl2t7klxN0AES94jEXdABEPYGYCzoAop5AzAUdAFFPIObRl3M/4ttW+r+Er//VivhU6rC+1JExQoz6bS9G/S6LeqMf9fiUrPjULHYe88WCHn9psCjrC4i6mLd38W3MCnqnhr+WrhG7koeari/BGEHUax71PYk5AKwmXsb0tvcpu/XCzadeaB72snvrdfv5ptf/+fPbiZUCAFEXcwAQdTEHAFEXcwCoTdTFHABRF3MAEHUxBwBRF3MAqGvUxRwAKh51MQeAikddzAGg4lEXcwCoeNTFHAAqHnUxB4CKR13MAaDiURdzAKh41MUcACoedTEHgIpHXcwBoOJRF3MAqHjUxRwAKh51MQeAikddzAGg4lEXcwCoeNTFHAAqHnUxB4CKR13MAaDiURdzAKh41MUcACoedTEPB9YQACoV9RDuslsj/PkQwuVRCD+8DqH12PDT8PKgLegAUKWoj6ptzAUdgFSiXuuYA0C1o54/pn5iYQAAAAAAAAAAAAAAAAAAAAAAAACwf/5fgAEANYw/F5fXdHUAAAAASUVORK5CYII='/>
		<br><br>
		If a Component Instance is not resized, or not rotated, this option has no effect.
		</div>
	`}function OI(t){var c,C;let e=y({tag:"div",className:"panel__card",innerHTML:`<h3>${t.displayType} ${t.ident||""}</h3>`}),r=Ue("advance width"),n=y({tag:"div",className:"doubleInput"}),a=bt(t,"advanceWidth","currentItem","input-number"),o=y({tag:"button",className:"panel-card__action-button",title:`Auto-fit advance width
The advance width will be set to the x-max of the paths in this glyph.`,innerHTML:pn({name:"command_autoFit"}),onClick:()=>{let R=J();R.selectedItem.advanceWidth=R.selectedItem.maxes.xMax,R.publish("currentItem",R.selectedItem)}});ne(n,[a,y(),o]);let s=y({tag:"label",className:"info",innerHTML:`
			<span>bearings: left${ka()}right</span>
			<info-bubble>
				<h1>Side Bearings</h1>
				Side bearings are the blank space to the left and right
				of shapes in a glyph. The open space between
				characters is very important for legibility.
				<br><br>
				These are calculated values based on shape positions and the
				Advance Width. They are not properties that are saved with the
				glyph, but it's helpful to think about them as if they were.
				<br>
				<h2>Left side bearing</h2>
				Distance from x=0 to the leftmost side of shapes in the glyph.
				Editing this will move all the shapes in the glyph, and update
				the Advance Width.
				<br>
				<h2>Right side bearing</h2>
				Distance from the rightmost side of shapes in the glyph to the
				Advance Width.
			</info-bubble>
		`}),x=y({tag:"div",className:"doubleInput"}),L=bt(t,"leftSideBearing","currentItem","input-number"),I=bt(t,"rightSideBearing","currentItem","input-number");if(x.appendChild(L),x.appendChild(Ka()),x.appendChild(I),t.displayType!=="Component"?(ne(e,[r,n]),(c=t==null?void 0:t.shapes)!=null&&c.length&&ne(e,[s,x])):ne(e,[Ue("name"),bt(t,"name","currentItem","input")]),(C=t==null?void 0:t.shapes)!=null&&C.length){const R=!!J().multiSelect.shapes.length;ne(e,Wr()),ne(e,y({tag:"h4",content:R?"Overall paths":"Bulk-edit paths"})),ne(e,Wa(t,"",[],R)),ne(e,So(t,R))}return ne(e,Wr()),ne(e,g2()),ne(e,R2()),e}function BI(t){var r;if(!((r=t==null?void 0:t.usedIn)!=null&&r.length))return"";let e=y({tag:"div",className:"panel__card full-width item-links__rows-area",innerHTML:`
		<h3>Links</h3>
		This ${t.displayType} is linked to the following items.
		It is used as a component root and will show up in these items as a component instance.
		`});return t.usedIn.forEach(n=>{e.appendChild(Q1(n))}),J().subscribe({topic:"currentItem",subscriberID:"ItemLinkRow",callback:()=>{const n=J(),a=xe();document.querySelectorAll(".item-link__thumbnail").forEach(s=>{const x=s.getAttribute("target-item-id"),L=n.project.getItem(x);s.innerHTML=a.makeItemThumbnail(L)})}}),e}function HI(t){const e=xe(),r=J();let n=y({tag:"div",className:"panel__card no-card",style:"grid-template-columns: max-content 1fr max-content;"}),a=s1(t,-1),o=r.project.getItemName(a.id,!0),s=y({tag:"fancy-button",className:"thumbnail-button button-left",attributes:{minimal:""},title:`Navigate to:
${o}
${a.id}`});s.innerHTML=e.makeItemThumbnail(a,24)+"<span>Previous&nbsp;item</span>",s.addEventListener("click",()=>{r.selectedItemID=a.id,r.history.addState(`Navigated to ${o}`)});let x=s1(t,1),L=r.project.getItemName(x.id,!0),I=y({tag:"fancy-button",className:"thumbnail-button button-right",attributes:{minimal:""},title:`Navigate to:
${L}
${x.id}`});return I.innerHTML="<span>Next&nbsp;item</span>"+e.makeItemThumbnail(x,24),I.addEventListener("click",()=>{r.selectedItemID=x.id,r.history.addState(`Navigated to ${L}`)}),ne(n,[s,se("<span></span>"),I]),n}function s1(t,e){var L,I,c,C,R;const r=xe(),n=t.id;let a={};(L=t==null?void 0:t.id)!=null&&L.startsWith("glyph-")?a=r.glyphs:(I=t==null?void 0:t.id)!=null&&I.startsWith("liga-")?a=r.ligatures:(c=t==null?void 0:t.id)!=null&&c.startsWith("comp-")?a=r.components:(C=t==null?void 0:t.id)!=null&&C.startsWith("kern-")&&(a=r.kerning);let o=Object.keys(a);o.sort(),(R=t==null?void 0:t.id)!=null&&R.startsWith("glyph-")&&(o=o.filter(FI));const s=o.indexOf(n),x=o.at((s+e)%o.length);return r.getItem(x)}function FI(t){const e=xe();let r=!1,n=e.settings.project.characterRanges.filter(a=>a.enabled);for(let a=0;a<n.length;a++)if(n[a].getMemberIDs().indexOf(t.substring(6))>-1){r=!0;break}return r}function MI(t){let e=y({tag:"div",className:"panel__card",innerHTML:`<h3>Path ${t.ident||""}</h3>`}),r=Ue("path name"),n=bt(t,"name","currentPath","input"),a=y({tag:"label",className:"info",innerHTML:`
			<span>winding</span>
			<info-bubble>
				<h1>Winding</h1>
				Ordered Path Points that make up a path outline have either a clockwise or counter-clockwise direction.
				This path direction is also known as a path&rsquo;s &ldquo;winding&rdquo;.
				Paths with the same winding will visually combine, opposite windings will cut-out.
				<br><br>
				For example, to create the glyph &lsquo;o&rsquo;, draw two overlapping oval paths.
				If the outside oval has a clockwise winding, select the inside oval and change it&rsquo;s winding to counter-clockwise.
				This will result in the inside oval appearing transparent (or cutting out) in relation to the outside oval.
				<br><br>
				<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr; width: 350px;">
					<span>Same Winding</span>
					<span>Different Winding</span>
					<img
						alt="Paths with the same winding will visually combine"
						class="winding-help-image"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAABkCAYAAACcuzIHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACutJREFUeNrsXS1YI0kQ7SAXcWNYy+hdQQw60ZzYmMWCvhNwYjVg17CI08laTsCJW0vQKwji1jLYQ5ATnM3N6+qamYQkkGRmuqd66vuGQPib6nr1qrqmu1qpWmopWRqVudPzURh/xNWMr8C8u2ney0oUX/eZz+nabUQV0DHI6NfMfKc18ZPD+LrNfN3XH3cb/Rp0qwGsHV9bZvDbyfee4vG+H6SfR7fjv/s+Y5/N+FfXAzVhHPzytX61DcTzUdvo1ppwJqV+ZPATxbf89G/69Ubsa2+Nr72JfyVsTjod69iPdRzUoJttAIzcXnx1EvbCwP99TYP+ENHrMgKj6GuLXt8lGB4YIH4txTjkTB0Dsk4CKH3dkjNpgA0X/9sbIQERurGeGyGz4qUB4WWs59Bv0JERDhKgAVjf4/H5/mcMtoIjxfvYONsf4qvDxok0+JTq5c6A56P9+OMHrScABR1/XNPrU4EYgF7QD+y/3eF3e8bJ+n6BjsIKgY2B1v+6PJOtKmCFdkyyrX0Ox2CGs5UMQw61b/QMEh3xakOgF4C3c8DhGI51YoP9GhbAdqTzGITOv87sGWGWtPcJgBSC+9owi4CPwHakAQcW+xbr2O9ReuCKgAE/HpGuFH7jm1RfXAi9+YLtfHQVXyN1fDWKQ9softftC/eIe8U90703X5x5no+O9c//fjeKDeq+juvBSH08HqnuI3R8NGlA5cEGQ3QrBbZp4Pt8w+A7NWWN5zkbjAbjwYhV0xHg+6XLOt6YiFRJwHUSQ1TB61+6dg6zjNBJQikzOIwG41VZx7CZZffpDuYwu13oG/90UX1DTDICdCKjXGgAIpRWkcFf52B3L6YVTtTacKO44e2OLENkgcdsAD2lAY6vjTDLeoeuAo7yGuQ/uGGpgIN+ABvYgD+X6mC49k8ZeF3XAHec5DVSBx/5DgCGcIrPJxNwCXnrrAu6Ubi9cSPP49kpPF864MBs03JUZgO8Sh8D68BjwEn2ch5s5DfzJkUYAx/YnspHloDnE+BeCyQfgMd5benA843hFs1/pKcbAB5y29KAR7NU2YDDoM7L4V5T5/LFKVEcL+EZquyEmcMHPHmVwjbPanmmKxt43aIAF+o6HCryUgeRwYKBzAMsCM34W5KeysxKJwpZLID4var3V2UA8yr2cpheNC+sZgH5Md9HZlz8lRwq8BQFAMk7dcBjMukTC1w8o83xeWo1l+wsGgqLYnJesyb18eB4fnecT1gFiiUDjmebRT68B6Clh1k4F+V3zVUAdyg+rHLeVfSMnMOs5DJKGmavlgVcoJNDyeURToLLmmFiZix9MsbOxQtdF548SJ/uI8cqM8nnyYr0/JhqlHfLsZwPgwPmKTvv8cWZF6rd+cRyZedYnEPWbFezXOl5pK3/7QDbrU2BHRLAQH37osQK73bHZm8bgv+LDc/tfbljzJ0bqD/Ni6A70DvSn4ZyBwSAA/Cue3YN0t5TouWbduq26XowA3RU1GuaH5Yr6Odh27HQ1wStKzZCueOMJkjUTuNgHtPtrdSSqwoCI6OBDDpD2RTu2LTdke3gFGI780DXca6hTRGhldt12RaEd+khFoyONnCZR2NrE6E1ND8kV2BkVxwLDR/T5oUyhRtaZiYUWaZriw+t64EboXUyxKJBo/wQ254Gug+Fd7+0Ldz29YdDeuJe0BFUsoDRMUE1m3iyoGvqlqSSBW1Ql+3pW3SIlc90CdutZfK5QHRo1els0y2Wg6C5NXI6yXkd53bmmIK1hOXSb8gOr5NHAFhnOuMEb70AXSsLutA5BshbmElcdCzc0zvhkwly9jALupb6J5Kt9FuHQYeqAQ4kkSx04Ew4PpF4uJetNE7PeYjcZQHp4ZVJLZ4/rCWzCun5HGp0roIO8iaQPf7p2Acp0/03VLVYEuTT0ssmqQRr3hiWa3S12HUupeLwymudnjxguuxJgrVYkzWeUdQsUEuZoKullhp0tcgHHcVV6ctranEIdKKOW3xB1n+qLW5TTC3Sn/DqwxIi14XGf8CgG4pfWuOy6NUv3lQPhgy6gXjQ4THMpsNMJ/2JUIqvYYbpNuWDbt3R55s+PC3hBQ27jSS83nqzysHFWTpYQPrTElovGGUnEgPxiwjBdHjU52IagXsSv4h2k3A2Brp0diFXsJAw3HIstBpn92F/CiJqArrdRqTzOulsh7KJazrifpiFpQrvN1aqn2U6euN9SzboeN2aSxMKMK8v+40nwivkWj7TGeO61LQG9+LDfmMAzjz9yoLuMkODcgUbf9+13AEc35NkIT2TXh4p6Civi8R3EUJe5wrToZ2Eax0HiphAUMXg8jnomO186JfG7V9dYAAfumSBzHYbg1mgO9OolAw8zBQxobDN6Og3DPD7EVrHPGscdBRiB+K7CIFdMBg2C8XcJ8/lbZF5AI7GuDcbdMx28ELJCwC437Ct7uYYW1QKpIfWnw8oZSMymwO63QZQORTdbh6CZt5oeG2jZvfxKNvyXu4Egkpwr+ya7sOJOdDNxok5tk7qcejEnFkrh7/ERhmqnUO5nojwijC7d1ou2zHL9XuyWY4i5cliv8hsJ/k05rJPJfSF5XCY8pyj1eftkQDbRdozJZdPysztfu3KZzmsmqFc7rfl/gAOEyv6mHEXcjscDvfpotj/s90ZeTOWS59snQLvSvyJfUUDoixg276QpuAEzYmzwJYBXejFseoARFFHnZd5ZLutK2zyUZs5zT7xh3wIDQBG3mzELIrXOqwuDLwL8d7KANk5zHd2jJqV/JpcDmH1OegCXez7fCN7ABEKATyEi1W9H2OFS7KjwkEprBa0SgSHnADR0j0XdaZVa5QYI/yNVcFbhciAmm6hwmWUsgqqtnKUVViKwo3sHBjOBKc6H3XLKQAy8CRX1jkfWxR4VDaQPTYp4G74kLmygHfqzeC+FngYixpwhQOvm+tsr8rA45BaA64U4FENT/LkIgu8aRMDHwCH/NQJwE3meCisSi0PIMcD6DDwPEGArjzTlQy4tCzSdQNwKfDaupwyiw2kzGrhWDx7RxVeclkE+jKLI4d3Uug57Y02hOQ8jx750CV1vSEcCQRCTxoqsD2QZ7YIPZKMAl1ogeLI6HinHUzac1Uu+1D+FqrKCIXbu1JX5hYZZsYN0cw8GuyKcTDkqimLH6tKChnlWCsBZaqYbOOeyRCPMw3BDgY98ey2apMpOAvnqlgpUil2m5/rdSsFvhRsPGsLX6HnoQYns7vr4APY0onCXVm5W6P0kKsUduB29F6BP05o76crDWSwT6K1T5uE053pJ5ObhV9kd6UOjZ6B3g+BfRguddrEznt0GKCWD5HRsVfWv29YYz6ljjT4noaBBt73P+1tPsbgo5UGbZuDB1wuDLbp4OsYPUMNOuzov+7ZcTI4EfQD2Mih+go9RkoEm13QPTcMWKGpjQHgoUlgkQyIQde7lloEONoJRkagNgjDnPUEw+8ZXYMEgGjkUyQDQkc4U9pTJDIOdbaSQ1UadM/ZD0ZB9562fg8hGN0zH+7JQGjLv2jDGQw2jivAtji0Wk37pSljgGs1pd9GgXpmdQy1Y6EBN/rmAYA4xGTRdrDczBJ6sY7jLVeZ1ZyI8e6Abjo74NrSLMiHIUPYUPNk81lv4cgY4FYbYbfRd8TRoGPL6Nce+z6DcJ5DjTc6GhodB8aZ+i4eOOgu6KYbqanDExnopdlkZK6hKx6+ABBDo+drevH2E0aryImW/wswAEGrvdgr+YXFAAAAAElFTkSuQmCC"
					>
					<img
						alt="Paths with different windings will appear transparent where they overlap"
						class="winding-help-image"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABkCAYAAAB3jIkEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAChtJREFUeNrsXS1020gQ3hQ2oCYpjXADahIc4R6IyZXauCQh5T56xFdw2DH1ATvgjtrGAXZAS63QBtgFCdXp21lZ8k8cO5G0q9md97bKe/3bmf3mm5ldaVYIJ040yIHxM+yGlejXqhrH6inUs7Llb86jMVE/43mnnhPx+WBuoJ6xjl40PirdPDW2yUTpGqzoGDjg7Q+0WjTOouFLwweRLTHu7+j5GNn5Z2TX+y22PYrW63003kb/nBet59ExPT2JW/zFYTRG0ehrAWI39JV+pOe90uf7SCx+fpiTvtvkxKfncaTXe6Ujfj6szFM6DiMdJw5464vgKbDVpdf/GNICyOcw+/8Pi/UhGidn9CSW6CgQBjnqCR3Ppa73QUXc9BM9HzLGPhxP6hnpeFoDEAOpH/Q0AIQHmgEXg60mF+HmWsjnQ4EEdFihhTk9p2eyOP0MneoiGg0Jtn+/kY73BUdCMKFfJx2PvEA52l9Gph25hdJueBmNqfh7GopPl2G0+GH0O/oH5oH5YF6YXzdsqND/slDaDXvRCMWXdhgtvBk6YpzWQvG1F8q5dcO2cg7WoGtGYyaag1D4DXMW4qnFwTwxXzjKfoAbiPYsFL83zXGqTePII6dgC0CEVDDIn+MwyjvMBtzqwHwJgFOVGjwdUrF4ZQDcdgC2XszyBgHOW3i/6Qz33MD8KQQP1pghZnIsXpkAtwmACcs3ygq6S6lAo1XuxVjNAaFPHH6x99YNx5LJTcrhskgzQBbkZJWyAK4iJwx2KFtY3Sf8UlgiIHLUEU5GBchsa4phzO47JooJc2G5TQtC+dBUVq1gBk5stynFIPZrmQq6hmQAbEdwXQTkQAir6RAU6132HHbbgGOt6m0I6FrSK7iG1tj45PntJ5ke1SxX/cH0VHiMzQBfvIXAOdwkoGs8m2YgDHO1A0aSZlT1gg4UjBBkM+iWC6uxJeCb6QFfDDquRcS+oLMXfF6RoGvKBXFMtw18vHO+BHwF5XxYCO45HVicTimar95a4lztpsFXwD4d7+oVg7YO2hnYy5f24u6kWdlra/jgvE+HQUdi2YUPHK2BPTnnwki5XpqW7GDAgTyR4Aw6nFHmkTDjhIO77egYMeNK1wavhW7ktbWcosWUfbRAMZVZvkevNs3Y53V0IN7LMT/22e8EJPlxM5sQy/UNjPUwke+2AI4WcezE2ZYopOjNHe81hqpJL+UcYjFo66Qh8pa4QEMuyb9AG7zGUFP2+1CUlwxEUQKAA+icbZrky74zUOYGehX4xuwdGoUUiOtFbMe9oCia7dKFBnenflEK49iuCPAN2LMe9NuL9WzI7SgUDIQuscG5MXZ2blSy9oQBvR+x2JPOrO2PvtlgjroYdgRrifuHZNUf5eXSEZ8ueNt6eIVfa6v7em/W9pnwh+gPMwbeOS26frlSnZz42hrNiW76BL4tjFfT0slIB+Nh0XULtUTrq/kwZr0ORdItwDuXrcK4g+6wYlLHzGvFwHyFWs9V0+H2zVqYvekzB54xYTaWPvtwC0HzyVS4TTOeL9uePjDv00dhbWjMfKgx4kR1JmXMetcUUTcA74x9mPVUb2DD+gHLcIu2uJyFWgr7mxnvx5A/8Exiu1T6zZ7x4obiajM5Dbzqsx3Gyy4fJKvcGjiziXIKG1ivmgAPKIzb23OW956ZjBfneSfcWQ/XcMg7PBaM57FnO8l4PrGLmRLIKwL4V7beCvBueStNizo3uL3+LXvg4VIcVWDEwPvI/rSCwqzJtB4I7yP/AmOlqq2wB95b4zdoA/abyFLLiawpEuBxF6oaR845NMvjfInxqrncGeZkn8p2aMWWykqodeKkGKEtO88Bz0nBOd6tA54TF2qdOOA5cZKj0F5lkADPhj0kk6X0NybuKISzBfAmNpXyhkqV/WtpG0It/+vB6SWIM4dvzaLOoxPgHTNnvEfjfctj/1paDLzPB8MYeLfsczxiPN9o4NnxhtAS4wXs3/mP2cTcJN6WN4SGy8Dj/i4YhJJ3U3MKCz498AlrC+DhgBrAc+FWjxAL838LnPbwbtOMRxTI/UsnyqFMfNvSt2IrJfWVXxp4E9u+7TRIztizHSLqkbf4pjkNvJEl33ZW9F7y+wTjfR/xtv1KB4cEeOgVByrkXmQQ69UNyu88WVhw71lD0XS0DjwS/i2zqE2HSdTOv1ESilbCVf8p4F0Lv84ceIuWWaaE27oVreFQQ6Raw60zng3hlhhGv4fZEmaJzJZawy0Djz52vhK/Me/L+983/NowYCYN2faX8xktSIyK1qungUfSEWcN3sDD1gVVt7oVvRAj5o3OicSuVjs4rAMPpxho1eozB98/f+gNtwB9MKmw/qwURQWRWGd3o7jLP/IGnrug0BlGA9u5K7uccTTc3uic+hkDjeU/4C56yxJ0l/L6dOfQW43kW3FDN4AAQOQPOrqhm/v9ZV/aG+8v29dYPfG1x9tQAAIAsXLfVg7A68lFcbbcw0tPa7wN1mjlW2jgpkju0QO60a2Yl85o2oxmofNSiB1kbby2aA5sCRPVjG03YB9iqUjLIV0hrx3LkMR/G2Ca2ddo3bApixfO0cKrxlVsLa88pSpRzX0PCsVUFiEDe6FYECwM5xSFdgVaeW8J1CwyZvvVTso5r0vs1BOFiC2eTOGj6SLD1mJiXOxH8lgQ7uBLcpeGA50JoEtXuvaA73Jn0HGvYLWCzk7ma1vNdEg/qPAam9GDBqGoG4asjX7kJQXHqtFJf/6gI/3HZjU+QrUL43Pe54PxsYlOxveWGJ/zwf8ujK8ZfFW5KFgcMATvc92Z3OsDC3BOMz5dhjKaFfH2TgYnHFR0cN3Dgl7EAJRoczyVAHEQu08NbPmxQ+hFMsqF/aAHJdczpV9Fsh5eLuDkZGA5cqxWObvRp9kPZ6BlZgbMP85z1osLcrKypxjIU6mAmGr7CCpjAPoLZihb5Yf50utSg62LQU7WWoTfMgEwCauzF53UlACADelNMQBNZUDMKwHcdM+TC0+xovkABMOlAcf+khcC4ECGLlSIplSFAAnmQyF18KpOAwkAKQSbkgPGTkUhVRvgDrRvv6CNA1p14av6YYca6hTZ/Ry9PdDNCI1lvCraLKCDzre4c2UmeS71abkQD3NP6ofuUEU26onbhJ2eJ52bSMcrXUt/YBQLChFZRviyrwlaO/wYUSPFLIEIoKEjFhoFYhHQHpXANsp9IcjR6tLRAEL0PUYnUDyzbkV74lOzHOhJTXPwH3Skrql2YQ54q8UINU88k090U7qb0OI8/BJLjao39R45SdUAMPrhOwIbbi+izvZDQd0ph7JXjB4dvSUd0fUdev2MMHF/F7fNpT/7M1h3Pq+adOmP9UJX9dixCGgTpWd/tWmOA97uTIGFwvOdSO6qqIjN91bA4PPUz7/UM8gshOax9US6VJVe6U7om6rpudIp/vlW0B0SgTZn2kP+F2AAw6cPzxGbmzkAAAAASUVORK5CYII="
					>
				</div>
			</info-bubble>
		`}),o=y({tag:"option-toggle",innerHTML:"<option>Clockwise</option><option>Counter-clockwise</option>",attributes:{"selected-name":O0(t.winding),"selected-value":O0(t.winding)},onClick:()=>{const L=J();t.reverseWinding(),L.history.addState(`Toggled path winding to ${O0(t.winding)}`),L.publish("currentPath",t)}}),s=Wa(t),x=So(t);return ne(e,[r,n,a,o,s,x]),ne(e,Wr()),ne(e,dx()),e}function O0(t){let e="Unknown";return t>0&&(e="Counter-clockwise"),t<0&&(e="Clockwise"),e}function GI(t){let e=y({tag:"div",className:"panel__card",innerHTML:`<h3>${t.shapes.length} selected shapes</h3>`});return ne(e,Wa(t)),ne(e,So(t)),ne(e,dx()),e}function PI(t){const e=J();let r=y({tag:"div",className:"panel__card",innerHTML:`<h3>Path point ${t.pointNumber+1} ${t.ident||""}</h3>`}),n=Wa(t.p,"point"),a=Ue("point type"),o=y();ne(o,[B0("symmetric",t.type==="symmetric",()=>{t.type="symmetric",t.makeSymmetric(),e.publish("currentPathPoint",t)}),B0("flat",t.type==="flat",()=>{t.type="flat",t.makeFlat(),e.publish("currentPathPoint",t)}),B0("corner",t.type==="corner",()=>{t.type="corner",e.publish("currentPathPoint",t)})]),e.subscribe({topic:"currentPathPoint",subscriberID:"pointTypeButtons",callback:L=>{document.getElementById(`pointTypeButton-${L.type}`)&&(document.getElementById("pointTypeButton-symmetric").removeAttribute("selected"),document.getElementById("pointTypeButton-flat").removeAttribute("selected"),document.getElementById("pointTypeButton-corner").removeAttribute("selected"),document.getElementById(`pointTypeButton-${L.type}`).setAttribute("selected","")),Ui("h1",L),Ui("h2",L)}});let s=y({id:"h1Group",className:"span-all-columns"});ne(s,l1("h1",t));let x=y({id:"h2Group",className:"span-all-columns"});return ne(x,l1("h2",t)),ne(r,n),ne(r,[a,o]),ne(r,[s,x]),ne(r,Wr()),ne(r,ux()),r}function l1(t="h1",e){let r=y({className:"pre-checkbox"}),n=Hn(e[t],"use","currentPathPoint");e.type!=="corner"&&n.setAttribute("disabled",""),ne(r,[n,y({tag:"h4",content:`Use handle ${t.charAt(1)}`})]);let a=y({id:`${t}InputGroup`,style:`display: ${e[t].use?"grid":"none"}`}),o=Wa(e[t],t);return ne(a,o),J().subscribe({topic:"currentPathPoint",subscriberID:`controlPointInputGroup.${t}`,callback:s=>{s.type==="symmetric"&&s.makeSymmetric(t),s.type==="flat"&&s.makeFlat(t),Ui("h1",s),Ui("h2",s)}}),[r,a]}function Ui(t="h1",e){let r=e;e.objType==="ControlPoint"&&(r=e.parent);let n=document.getElementById(`${t}Group`);if(n){let a=r[t].use,o=n.querySelector("input");if(o.removeAttribute("checked"),o.removeAttribute("disabled"),a){o.setAttribute("checked",""),r.type!=="corner"&&o.setAttribute("disabled","");let s=document.getElementById(`${t}InputGroup`);s.style.display="grid",s.querySelectorAll("input-number")[0].setAttribute("value",r[t].x),s.querySelectorAll("input-number")[1].setAttribute("value",r[t].y)}}}function bI(t){let e=y({tag:"div",className:"panel__card",innerHTML:`<h3>${t.pathPoints.length} selected path points</h3>`});return ne(e,ux()),e}function B0(t,e,r){let n=xt.gray.l40,a=y({tag:"button",className:"pointTypeButton",id:`pointTypeButton-${t}`,attributes:{title:`point type: ${t}`}});a.addEventListener("click",r),e&&a.setAttribute("selected","");let o=`
	<svg version="1.1"
		xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0" y="0" width="20" height="20" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
		<g fill="${n}">
		<rect x="8" y="8" width="1" height="4"/>
		<rect x="11" y="8" width="1" height="4"/>
		<rect x="8" y="8" width="4" height="1"/>
		<rect x="8" y="11" width="4" height="1"/>
		<rect x="4" y="4" width="1" height="1"/>
		<rect x="5" y="5" width="1" height="1"/>
		<rect x="6" y="6" width="1" height="1"/>
		<rect x="7" y="7" width="1" height="1"/>
		<circle cx="3" cy="3" r="1.5"/>
	`;switch(t){case"corner":o+=`
			<rect x="7" y="12" width="1" height="1"/>
			<rect x="6" y="13" width="1" height="1"/>
			<rect x="5" y="14" width="1" height="1"/>
			<rect x="4" y="15" width="1" height="1"/>
			<circle cx="3" cy="17" r="1.5"/>
			`;break;case"symmetric":o+=`
			<rect x="12" y="12" width="1" height="1"/>
			<rect x="13" y="13" width="1" height="1"/>
			<rect x="14" y="14" width="1" height="1"/>
			<rect x="15" y="15" width="1" height="1"/>
			<circle cx="17" cy="17" r="1.5"/>
			`;break;case"flat":o+=`
			<rect x="12" y="12" width="1" height="1"/>
			<rect x="13" y="13" width="1" height="1"/>
			<circle cx="15" cy="15" r="1.5"/>
			`;break}return o+="</g></svg>",a.innerHTML=o,a}function vI(){const t=J();let e=t.multiSelect.shapes,r=t.multiSelect.points;if(Ee.selecting)return[UI()];let n=[];if(r.length===1)n.push(PI(r.singleton));else if(r.length>1){let o=r.virtualShape;n.push(bI(o))}e.length===1?e.singleton.objType==="ComponentInstance"?n.push(mI(e.singleton)):n.push(MI(e.singleton)):e.length>1&&r.length===0&&n.push(GI(e.virtualGlyph)),n.push(OI(t.selectedItem)),n.push(HI(t.selectedItem));const a=BI(t.selectedItem);return a&&n.push(a),t.nav.page==="Ligatures"&&n.push(y({tag:"fancy-button",content:"Create a new ligature",attributes:{secondary:""},onClick:Zo,style:"margin-top: 10px;"})),t.nav.page==="Components"&&n.push(y({tag:"fancy-button",content:"Create a new component",attributes:{secondary:""},onClick:tA,style:"margin-top: 10px;"})),t.subscribe({topic:"whichShapeIsSelected",subscriberID:"attributesPanel",callback:()=>{xr()}}),t.subscribe({topic:"whichPathPointIsSelected",subscriberID:"attributesPanel",callback:()=>{xr()}}),n}function UI(){const t=J();let e=t.multiSelect.points.length,r=t.multiSelect.shapes.length,n="";if(e===0)r===0&&(n="Drag to select..."),r===1&&(n="1 selected shape"),r>1&&(n=`${r} selected shapes`);else{let o=e>1?"path points":"path point",s=r>1?"shapes":"shape";n=`${e} selected ${o} across ${r} ${s}`}return y({tag:"div",className:"panel__card",innerHTML:`<h3>${n}</h3>`})}let La,ha;function Ko(t,e="",r=J(),n=!1){La=t,ha=!0;let a=y({tag:"div",className:"item-chooser__wrapper"}),o=y({tag:"div",className:"item-chooser__header"});o.appendChild(YI(r)),a.appendChild(o);let s=e||r.nav.page;return s==="Ligatures"?a.appendChild(e0(r,!n)):s==="Components"?a.appendChild(t0(r,!n)):a.appendChild(_o(r,!n)),a}function wI(t,e){La=e,ha=!0;let r=y({tag:"div",className:"item-chooser__wrapper"});if(t==="Ligatures")r.appendChild(e0()),r.appendChild(y({tag:"fancy-button",innerHTML:"Create a new ligature",attributes:{secondary:""},onClick:Zo}));else if(t==="Components")r.appendChild(t0()),r.appendChild(y({tag:"fancy-button",innerHTML:"Create a new component",attributes:{secondary:""},onClick:tA}));else if(t==="Kerning")r.appendChild(Ll()),r.appendChild(y({tag:"fancy-button",innerHTML:"Create a new kern group",attributes:{secondary:""},onClick:()=>r0(!1),style:"margin-top: 10px;"}));else{let n=y({tag:"div",className:"item-chooser__header"});r.appendChild(n),n.appendChild(WI()),r.appendChild(_o())}return r}function YI(t=J()){let e=t.selectedCharacterRange,r=y({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}}),n,a=Ut(t.project.ligatures),o=Ut(t.project.components);return a&&(n=y({tag:"option",innerHTML:"Ligatures",attributes:{note:`${a}&nbsp;items`}}),n.addEventListener("click",()=>{t.selectedCharacterRange="Ligatures",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(e0())}),r.appendChild(n)),o&&(n=y({tag:"option",innerHTML:"Components",attributes:{note:`${o}&nbsp;items`}}),n.addEventListener("click",()=>{t.selectedCharacterRange="Components",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(t0())}),r.appendChild(n)),(a||o)&&r.appendChild(y({tag:"hr"})),El(r,t),r}function WI(t=J()){let e=t.selectedCharacterRange,r=y({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}});return El(r),r}function El(t,e=J()){let n=xe().settings.project.characterRanges,a;n.forEach(o=>{o.enabled&&(a=y({tag:"option",innerHTML:o.name,attributes:{note:o.note}}),a.addEventListener("click",()=>{e.selectedCharacterRange=o,document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(_o())}),t.appendChild(a))})}function _o(t=J(),e=!0){let r=y({tag:"div",className:"item-chooser__tile-grid"}),n=t.selectedCharacterRange.getMemberIDs(t.project.settings.app.showNonCharPoints);return n!=null&&n.length&&n.forEach(a=>{const o=`glyph-${a}`;let s=new qi({"displayed-item-id":o,project:t.project});e&&t.selectedGlyphID===o&&s.setAttribute("selected",""),s.addEventListener("click",()=>La(o)),ha&&t.subscribe({topic:"whichGlyphIsSelected",subscriberID:`glyphTile.${o}`,callback:x=>{parseInt(x)===parseInt(o)?e&&s.setAttribute("selected",""):s.removeAttribute("selected")}}),r.appendChild(s)}),r}function e0(t=J(),e=!0){const r=y({tag:"div",className:"item-chooser__tile-grid"}),n=t.project.sortedLigatures,a=Vo(n,t.chooserPage.ligatures,t);return n.length>a.length&&r.appendChild(zo("ligatures",n,t)),a.forEach(o=>{let s=new qi({"displayed-item-id":o.id});e&&t.selectedLigatureID===o.id&&s.setAttribute("selected",""),s.addEventListener("click",()=>La(o.id)),ha&&t.subscribe({topic:"whichLigatureIsSelected",subscriberID:`glyphTile.${o.id}`,callback:x=>{x===o.id?e&&s.setAttribute("selected",""):s.removeAttribute("selected")}}),r.appendChild(s)}),r}function t0(t=J(),e=!0){let r=y({tag:"div",className:"item-chooser__tile-grid"});const n=t.project.sortedComponents,a=Vo(n,t.chooserPage.components,t);return n.length>a.length&&r.appendChild(zo("components",n,t)),a.forEach(o=>{let s=new qi({"displayed-item-id":o.id});e&&t.selectedComponentID===o.id&&s.setAttribute("selected",""),s.addEventListener("click",()=>La(o.id)),ha&&t.subscribe({topic:"whichComponentIsSelected",subscriberID:`glyphTile.${o.id}`,callback:x=>{x===o.id?e&&s.setAttribute("selected",""):s.removeAttribute("selected")}}),r.appendChild(s)}),r}function Ll(t=J()){let e=y({tag:"div",className:"kern-group-chooser__list"});const r=t.project.sortedKernGroups,n=Vo(r,t.chooserPage.kerning,t);return r.length>n.length&&e.appendChild(zo("kerning",r,t)),n.forEach(a=>{let o=hl(a.id);t.selectedKernGroupID===a.id&&o.setAttribute("selected",""),o.addEventListener("click",()=>La(a.id)),ha&&t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:`kernGroupRow.${a.id}`,callback:s=>{s===a.id?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function hl(t,e=xe()){const r=e.getItem(t),n=y({className:"kern-group-chooser__row"}),a=y({className:"kern-group-chooser__left-members"});a.appendChild(aa(r.leftGroup));const o=y({className:"kern-group-chooser__right-members"});return o.appendChild(aa(r.rightGroup)),ne(n,[y({content:t}),a,y({className:"kern-group-chooser__members-divider",content:"&emsp;|&emsp;"}),o]),n}function Vo(t=[],e=0,r=J()){const n=parseInt(r.project.settings.app.itemChooserPageSize)||256;if(t.length<n)return t;const a=e*n,o=a+n;return t.slice(a,o)}function zo(t,e=[],r=J()){const n={ligatures:e0,components:t0,kerning:Ll},a=parseInt(r.project.settings.app.itemChooserPageSize)||256,o=r.chooserPage[t],s=Math.ceil(e.length/a),x=y({tag:"button",className:"editor-page__tool",content:"◁"});r.chooserPage[t]===0?x.setAttribute("disabled",""):x.addEventListener("click",()=>{r.chooserPage[t]-=1,r.chooserPage[t]=Math.max(r.chooserPage[t],0);let c;t==="kerning"?c=document.querySelector(".kern-group-chooser__list"):c=document.querySelector(".item-chooser__tile-grid"),c.innerHTML="",c.appendChild(n[t]())});const L=y({tag:"button",className:"editor-page__tool",content:"▷"});r.chooserPage[t]===s-1?L.setAttribute("disabled",""):L.addEventListener("click",()=>{r.chooserPage[t]+=1,r.chooserPage[t]=Math.min(r.chooserPage[t],s-1);let c;t==="kerning"?c=document.querySelector(".kern-group-chooser__list"):c=document.querySelector(".item-chooser__tile-grid"),c.innerHTML="",c.appendChild(n[t]())});const I=y({tag:"div",className:"item-chooser__page-control"});return ne(I,[x,y({content:`Page ${o+1} of ${s}`}),L]),I}class en extends fr{constructor({leftGroup:e=[],rightGroup:r=[],value:n=0}={}){super(),this.leftGroup=e,this.rightGroup=r,this.value=n,this.objType="KernGroup"}save(e=!1){const r={leftGroup:this.leftGroup.slice(),rightGroup:this.rightGroup.slice(),value:this._value};return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{${this.objType} 
`;return r+="  ",n+=`${r}leftGroup: ${JSON.stringify(this.leftGroup)}
`,n+=`${r}rightGroup: ${JSON.stringify(this.rightGroup)}
`,n+=`${r}value: ${this.value}
`,n+=`${r.substring(2)}}/${this.objType}`,n}get leftGroup(){return this._leftGroup||[]}get rightGroup(){return this._rightGroup||[]}get value(){return this._value||0}get name(){return`${this.leftGroupAsString} | ${this.rightGroupAsString}`}get leftGroupAsString(){let e="";return this.leftGroup&&(e=Rr(this.leftGroup.join(""))),e||""}get rightGroupAsString(){let e="";return this.rightGroup&&(e=Rr(this.rightGroup.join(""))),e||""}set leftGroup(e){e=e.map(r=>tr(r)),e=e.filter(Mn),this.changed(),this._leftGroup=e}set rightGroup(e){e=e.map(r=>tr(r)),e=e.filter(Mn),this.changed(),this._rightGroup=e}set value(e){this._value=He(e)||0,this.changed()}}const kI=Object.freeze(Object.defineProperty({__proto__:null,KernGroup:en},Symbol.toStringTag,{value:"Module"}));function KI(){const t=J(),e=t.selectedKernGroupID,a=y({tag:"div",id:"app__page",innerHTML:`
		<div class="editor__page">
			<div class="editor-page__left-area">
				<div class="editor-page__nav-area">
					${zt({level:"l1",superTitle:"PAGE",title:"Kerning"})}
				</div>
				<div id="editor-page__panel"></div>
			</div>
			${e?`
		<div class="editor-page__tools-area"></div>
		<div class="editor-page__edit-canvas-wrapper"></div>
		<div class="editor-page__zoom-area"></div>
	`:'<div class="editor-page__edit-canvas-wrapper" style="grid-column: span 2; overflow-y: scroll;"></div>'}
		</div>
	`});t.showPageTransitions&&a.classList.add("app__page-animation");let o=a.querySelector("#nav-button-l1");o.addEventListener("click",function(){Jt(o)});const s=a.querySelector(".editor-page__nav-area"),x=a.querySelector(".editor-page__edit-canvas-wrapper");if(!e)return ne(x,_I()),s.style.display="block",o.style.width="100%",o.style.borderRadius="4px",a;const L=t.selectedKernGroup,I=zt({level:"l2",superTitle:"EDITING",title:L.name}),c=zt({level:"l3",superTitle:"PANEL",title:t.nav.panel});s.appendChild(se(I)),s.appendChild(se(c));const C=y({tag:"edit-canvas",id:"editor-page__edit-canvas",attributes:{"editing-item-id":t.selectedKernGroupID}});x.appendChild(C);let R=a.querySelector("#nav-button-l2");R.addEventListener("click",function(){Jt(R)}),t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"nav.kernChooserButton",callback:()=>{var q;t.selectedKernGroup&&(R.innerHTML=Aa((q=t.selectedKernGroup)==null?void 0:q.name,"EDITING"))}});let g=a.querySelector("#nav-button-l3");g.addEventListener("click",function(){Jt(g)});const Y=a.querySelector("#editor-page__panel");Y.appendChild(Qa()),Y.addEventListener("scroll",kr),t.subscribe({topic:["whichKernGroupIsSelected"],subscriberID:"nav.panelChooserButton",callback:()=>{xr()}}),t.selectedTool="kern";let w=a.querySelector(".editor-page__tools-area");w.innerHTML="";let V=pp();V&&ne(w,V);let _=a.querySelector(".editor-page__zoom-area");_.innerHTML="";let ee=o0();return ee&&ne(_,ee),t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"editCanvas.selectedKernGroup",callback:q=>{a.querySelector("#editor-page__edit-canvas").setAttribute("editing-item-id",q)}}),a}function _I(){const t=y({className:"editor-page__first-run",innerHTML:`
			<h1>There are no kern pairs in your project</h1>
			<p>
				Kerning is an advanced feature of fonts that recognizes a pair of characters, then
				adjusts the spacing between them to some custom value. The default spacing between
				characters is zero - which is to say, the white space (side bearings) within each
				character are the only space shown.
			</p>
			<p>
				Some letter combinations, like <code>VA</code>
				as an example, if the default side bearing spacing
				is used, the letters visually look very far apart. Kerning can help the visual flow of
				character pairs look more well considered. Many character pairs may need either negative
				or positive kern values to make them "look right".
			</p>
			<h2>Class-based kerning</h2>
			<p>
				Font files encode kerning values as three pieces of information: a left character, a right
				character, and a horizontal adjustment value. Fonts with many characters can end up having
				a huge amount of kern pairs. Glyphr Studio uses a system called Class-based Kerning, where
				groups of characters with similar edges (like
					<code>V</code><code>v</code><code>W</code><code>w</code>
					)
				can be treated as a single left-hand group, and a group of right-hand characters (for example,
				<code>A</code><code>/</code>) can be treated as single group - which can be given a single value.
				When a font is exported, the permutations are saved as individual kern pairs. But, while
				editing, grouping common characters often simplifies the overall kerning process.
			</p>
		`}),e=y({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>r0(!1)});return t.appendChild(e),t}function VI(t,e,r){const n=Jo(),a=xe();return a.addItemByType(new en({leftGroup:t,rightGroup:e,value:r}),"KernGroup",n),a.kerning[n]}function Jo(t=xe().kerning){let e=Ut(t);for(;t[`kern-${e}`];)e++;return`kern-${e}`}function r0(t){const e=y({innerHTML:`
		<h2>${t?"Edit this":"Create a new"} kern group</h2>
		Specify which characters should be in the left-side group,
		the right-side group, then what distance in <code>Em</code>
		units should be used for the kern value.
		<br><br>

		<h3>Left group</h3>
		<input id="kerning__add-new-kern-group__left-group" type="text"
		value="${t?t.leftGroupAsString:""}"
		autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<h3>Right group</h3>
		<input id="kerning__add-new-kern-group__right-group" type="text"
		value="${t?t.rightGroupAsString:""}"
		autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<h3>Value</h3>
		<input id="kerning__add-new-kern-group__value" type="text"
			value="${t?t.value:""}"
			autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<fancy-button disabled id="kerning__add-new-kern-group__submit-button">
			${t?"Save changes":"Create kern group"}
		</fancy-button>
		`}),r=e.querySelector("#kerning__add-new-kern-group__submit-button"),n=e.querySelector("#kerning__add-new-kern-group__left-group"),a=e.querySelector("#kerning__add-new-kern-group__right-group"),o=e.querySelector("#kerning__add-new-kern-group__value");n.addEventListener("change",s),a.addEventListener("change",s),o.addEventListener("change",s),n.addEventListener("keyup",s),a.addEventListener("keyup",s),o.addEventListener("keyup",s),t&&(r.removeAttribute("disabled"),r.addEventListener("click",x));function s(){n.value!==""&&a.value!==""&&o.value?(r.removeAttribute("disabled"),r.addEventListener("click",x)):(r.setAttribute("disabled",""),r.removeEventListener("click",x))}function x(){const L=J();let I=fa(n.value),c=fa(a.value),C=parseInt(o.value);if(t)t.leftGroup=I,t.rightGroup=c,t.value=C,L.history.addState("Edited kern group: "+L.selectedKernGroupID),L.publish("currentKernGroup",L.selectedKernGroup),L.navigate(),Ve();else{const R=VI(I,c,C);typeof R=="string"?Er(R):(L.selectedItemID=R.id,L.navigate(),L.history.addWholeProjectChangePostState(),Ve())}}Ir(e,500)}function zI(){const t=y({innerHTML:`
		<h2>Find a letter pair</h2>
		Specify a pair of letters below, and search will return all the Kern Groups
		that contain that pair. Clicking on a search result will select that Kern Group
		behind the dialog box.
		<br><br>
		It is good to not have duplicate values for a letter pair - the value that actually
		gets used may not be the expected one.
		<br><br>

		<div class="list__two-column" style="max-width: 100px;">
			<div class="list__column-header">Left group letter</div>
			<div class="list__column-header">Right group letter</div>
			<input
				id="kerning__letter-pair__left-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
			<input
				id="kerning__letter-pair__right-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
		</div>
		<br>

		<fancy-button disabled id="kerning__letter-pair__search-button">
			Search
		</fancy-button>
		<br><br>
		<hr/>
		<br>
		<div id="kerning__letter-pair__results">
			<i>Search results...</i>
		</div>
		`}),e=t.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",cn),e.addEventListener("keyup",cn);const r=t.querySelector("#kerning__letter-pair__right-group");r.addEventListener("change",cn),r.addEventListener("keyup",cn),t.querySelector("#kerning__letter-pair__search-button").addEventListener("click",ZI),Ir(t,800)}function JI(){const t=y({innerHTML:`
		<h2>Delete letter pairs</h2>
		Specify a pair of letters below, and search will find and attempt to delete all
		the letter pairs from the applicable Kern Groups.
		<br><br>
		<b>Note</b>: This will only affect Kern Groups where either the left group or the right group has only one member. Kern Groups affect all possible permutations of left group / right group.
		Because of this, if a left group and a right group both have multiple members, including
		the specified letter pair, removing the letters from the letter pair would remove more
		than just the kern value for those two letters.
		<br><br>

		<div class="list__two-column" style="max-width: 100px;">
			<div class="list__column-header">Left group letter</div>
			<div class="list__column-header">Right group letter</div>
			<input
				id="kerning__letter-pair__left-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
			<input
				id="kerning__letter-pair__right-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
		</div>
		<br>

		<fancy-button disabled danger id="kerning__letter-pair__search-button">
			Find and delete
		</fancy-button>
		<div id="kerning__result-message"></div>
		`}),e=t.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",cn),e.addEventListener("keyup",cn);const r=t.querySelector("#kerning__letter-pair__right-group");r.addEventListener("change",cn),r.addEventListener("keyup",cn),t.querySelector("#kerning__letter-pair__search-button").addEventListener("click",XI),Ir(t,800)}function cn(){const t=document.querySelector("#kerning__letter-pair__left-group"),e=document.querySelector("#kerning__letter-pair__right-group"),r=document.querySelector("#kerning__letter-pair__search-button");t.value.length&&e.value.length?r.removeAttribute("disabled"):r.setAttribute("disabled","")}function ZI(){const e=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),n=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),a=xe().kerning,o=[];Object.keys(a).forEach(x=>{a[x].leftGroup.includes(Yr(e))&&a[x].rightGroup.includes(Yr(n))&&o.push(x)});const s=document.querySelector("#kerning__letter-pair__results");if(s.innerHTML="",o.length){const x=J().selectedKernGroupID;o.forEach(L=>{let I=hl(L);I.addEventListener("click",()=>{const c=J();c.selectedItemID=L,c.history.addState(`Navigated to ${c.project.getItemName(L,!0)}`),document.querySelectorAll(".kern-group-chooser__row").forEach(R=>R.removeAttribute("selected")),I.setAttribute("selected","")}),L===x&&I.setAttribute("selected",""),s.appendChild(I)})}else s.innerHTML="<i>No Kern Groups exist with that letter pair</i>"}function XI(){const e=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),n=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),a=document.querySelector("#kerning__result-message");a.innerHTML="";const o=xe().kerning;let s,x=[],L=[];Object.keys(o).forEach(I=>{o[I].leftGroup.includes(Yr(e))&&o[I].rightGroup.includes(Yr(n))&&(s=jI(e,n,I),s?L.push(I):x.push(I))}),x.length&&(a.innerHTML=`
			<br><br>
			<b>Warning</b><br>
			The following Kern Groups contain the specified letter pair, but
			the letters could not be removed because both the left group and
			the right group contain multiple members.
			<br><br>
			${x.join(", ")}
			<br><br>
			<hr>
		`),L.length>0?(a.innerHTML+=`
			<br>
			Successfully removed letter pair from Kern Group${L.length>1?"s:":":"}
			<br><br>
			${L.join(", ")}
		`,J().navigate()):x.length||(a.innerHTML+=`
				<br>
				<i>No Kern Groups with the specified letter pair was found.</i>
			`)}function jI(t="",e="",r=""){let n={},a=Yr(t),o=Yr(e);const s=J();let x=!1;if(r){let L=s.project.getItem(r);L&&(n[r]=L)}else n=s.project.kerning;return Object.keys(n).forEach(L=>{let I=n[L].leftGroup,c=n[L].rightGroup;I.includes(a)&&c.includes(o)&&(I.length===1&&c.length===1?(s.deleteItem(L,s.project.kerning),x=!0):I.length===1?(c.splice(c.indexOf(o),1),x=!0):c.length===1&&(I.splice(I.indexOf(a),1),x=!0))}),x}function aa(t){const e=y();return t.forEach(r=>{e.appendChild(qI(r))}),e}function qI(t){let e=Rr(t)||"",r=la(t),n=t;return r&&(n=`${r}
${t}`),y({tag:"code",innerHTML:e,attributes:{title:n}})}function QI(t){let e=y({tag:"div",className:"panel__card",innerHTML:"<h3>Kern Group</h3>"}),r=Ue("Value"),n=bt(t,"value","currentKernGroup","input-number"),a=Ue("Left group"),o=aa(t.leftGroup),s=Ue("Right group"),x=aa(t.rightGroup);return ne(e,[r,n,a,o,s,x]),ne(e,Wr()),ne(e,m2()),e}function $I(){let t=y({tag:"div",className:"panel__card",innerHTML:"<h3>Other kern group actions</h3>"}),e=y({tag:"div",className:"panel__actions-area"});return er(e,ir("otherKernGroupActions")),t.appendChild(e),t}function ed(){const t=J();if(Ut(t.project.kerning)<=0)return[];const e=y({tag:"fancy-button",content:"Create a new kern group",attributes:{secondary:""},onClick:()=>r0(!1)});return[QI(t.selectedKernGroup),$I(),e]}function wi(t=50,e,r=0,n=100,a=1){let o=y({className:"fancy-slider__wrapper"}),s=y({className:"fancy-slider__slider-readout",innerHTML:""+t});const x=t/(n-r)*100;let L=y({tag:"input",attributes:{type:"range",value:t,style:`accent-color: hsl(${x+200}, 100%, 40%);`,min:r,max:n,step:a},className:"fancy-slider__bar"});return L.addEventListener("input",I=>{const c=parseInt(I.target.value);s.innerHTML=""+c;const C=c/(n-r)*100;L.setAttribute("style",`accent-color: hsl(${C+200}, 100%, 40%);`),e&&e(c)}),ne(o,[L,s]),o}function td(){const t=J(),e=xe();let r=y({tag:"div",className:"panel__card",innerHTML:"<h3>Characters</h3>"}),n=y({tag:"p",className:"spanAll",content:`Context characters are a small set of letters that are shown around
		the character you are currently editing.`});const a=e.settings.app.contextCharacters;let o=Ue("Show&nbsp;context&nbsp;characters&nbsp;&nbsp;"),s=ar(a,"showCharacters",()=>{J().autoFitView(),x1()}),x=bt(t.selectedItem,"contextCharacters","editCanvasView","input",["input"]);x.addEventListener("input",()=>J().autoFitView());let L=Ue("Transparency"),I=wi(a.characterTransparency,w=>{a.characterTransparency=w,J().editCanvas.redraw()});x.classList.add("spanAll"),ne(r,[n,x,Wr(),o,s,L,I]);let c=y({tag:"div",className:"panel__card",innerHTML:`<h3>Guides and labels</h3>
	`}),C=Ue("Show guides and labels"),R=ar(a,"showGuides",x1),g=Ue("Transparency"),Y=wi(a.guidesTransparency,w=>{a.guidesTransparency=w,J().editCanvas.redraw()});return ne(c,[C,R,g,Y]),[r,c,Zl(!0)]}function x1(){J().editCanvas.redraw()}function cl({iconName:t="default",iconOptions:e=!1,title:r="",disabled:n=!1,onClick:a=()=>{},id:o=!1}={}){let s=y({tag:"button",innerHTML:Ke[t](e),attributes:{title:r}});return a&&s.addEventListener("click",a),n&&s.setAttribute("disabled","disabled"),typeof o=="string"&&s.setAttribute("id",o),s}let Ke={};function Ze(t,e="30"){return`
		<svg
			version="1.1" viewBox="0 0 ${e} ${e}"
			height="100%" width="100%"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			${t}
			`}let Le={darkFill:xt.gray.l25,lightFill:xt.gray.l85,blueOutline:xt.blue.l70,greenOutline:xt.green.l70,grayOutline:xt.gray.l70,purpleOutline:xt.purple.l40,redX:jr.red};Ke.copy=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline,n=Le.darkFill;return t+=`
		<polygon fill="${n}" points="1,22 1,10.4 10.4,1 18,1 18,22"/>
		<path fill="${r}" d="M17,2v19H2V10.8L10.8,2H17 M19,0h-9L0,10v13h19V0L19,0z"/>
		<polygon fill="${n}" points="12,29 12,17.4 21.4,8 29,8 29,29"/>
		<path fill="${e}" d="M28,9v19H13V17.8L21.8,9H28 M30,7h-9L11,17v13h19V7L30,7z"/>
	`,Ze(t)};Ke.paste=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
	`,Ze(t)};Ke.clearClipboard=()=>{let t="",e=Le.blueOutline,r=Le.darkFill,n=Le.redX;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${n}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${n}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,Ze(t)};Ke.pastePathsFromAnotherGlyph=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${e}" d="M17.4,20.6h-4.8l-1,3h1.6v1.7H8v-1.7h1.6l3.6-10.2h-1.6V12h6.8v1.5h-1.7l3.7,10.2H22v1.7h-5.2v-1.7h1.7L17.4,20.6z M16.9,19.1l-1.8-5.6H15l-1.8,5.6H16.9z"/>
	`,Ze(t)};Ke.pastePathsFromAnotherProject=()=>{let t=Le.lightFill,e=Le.purpleOutline;const r=`
		<path fill="${t}" d="m11.5,1c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m11.5,23c-5.084,0-7.886,0-9.692-1.808-1.808-1.808-1.808-4.608-1.808-9.692S0,3.615,1.808,1.808C3.614,0,6.416,0,11.5,0s7.886,0,9.692,1.808c1.808,1.808,1.808,4.608,1.808,9.692s0,7.885-1.808,9.692c-1.807,1.808-4.608,1.808-9.692,1.808Zm0-21c-4.55,0-7.057,0-8.278,1.222s-1.222,3.729-1.222,8.278,0,7.057,1.222,8.278,3.728,1.222,8.278,1.222,7.057,0,8.278-1.222,1.222-3.729,1.222-8.278,0-7.057-1.222-8.278-3.728-1.222-8.278-1.222Z"/>
		<rect fill="${e}" x="5" y="5" width="3" height="3"/>
		<path fill="${t}" d="m18.5,8c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m28.192,8.808c-1.807-1.808-4.608-1.808-9.692-1.808-.176,0-.329,0-.5,0v-2.001h-3v2.033c-.735.022-1.389.068-2,.133v-2.166h-3v2.961c-.437.228-.841.495-1.192.847-.352.352-.618.756-.847,1.192h-2.961v3h2.166c-.065.611-.111,1.265-.133,2h-2.033v3h2.001c0,.171,0,.324,0,.5,0,5.084,0,7.885,1.808,9.692,1.807,1.808,4.608,1.808,9.692,1.808s7.886,0,9.692-1.808c1.808-1.808,1.808-4.608,1.808-9.692s0-7.885-1.808-9.692Zm-1.414,17.971c-1.222,1.222-3.728,1.222-8.278,1.222s-7.057,0-8.278-1.222-1.222-3.729-1.222-8.278,0-7.057,1.222-8.278,3.728-1.222,8.278-1.222,7.057,0,8.278,1.222,1.222,3.729,1.222,8.278,0,7.057-1.222,8.278Z"/>
		<path fill="${e}" d="m20.233,20h-3.467l-1.092,3h1.525v2h-5.2v-2h1.733l3.467-9h-1.733v-2h6.067v2h-1.733l3.467,9h1.733v2h-5.2v-2h1.517l-1.083-3Zm-.433-1l-1.3-4-1.3,4h2.6Z"/>
	`;return Ze(r)};Ke.addPath=function(t=!1){let e="",r=Le.blueOutline,n=Le.darkFill;return t&&(r=Le.greenOutline,n=Le.lightFill),e+=`
		<rect fill="${n}" x="1" y="1"	width="16" height="16"/>
		<path fill="${r}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<rect x="21" y="15" fill="${r}" width="3" height="15"/>
		<rect x="15" y="21" fill="${r}" width="15" height="3"/>
	`,Ze(e)};Ke.undo=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path fill="${r}" d="M20.1,23c4.6-5,6.6-9.6,5.5-12.8C24.9,8.2,22.9,7,20,7c-5.9,0-8.8,5.3-8.9,5.5L10.9,13l2.4,4.1l-12,0.8l4-14.4l2.5,4.2l0.9-1.1c0,0,4-4.6,11.2-4.6c4.1,0,7.9,2.8,8.8,6.5C29.4,10.8,29.3,16.3,20.1,23z"/>
		<path fill="${e}" d="M20,3c3.1,0,6.9,2,7.8,5.7c0.5,2.1-0.1,4.4-1.6,6.7c0.7-2,0.9-3.9,0.3-5.5C25.7,7.4,23.3,6,20,6c-6.5,0-9.6,5.8-9.8,6.1l-0.5,1l0.6,1l1.3,2.2l-8.9,0.6L5.7,6l0.6,1l1.4,2.4l1.8-2.2C9.6,7.2,13.2,3,20,3 M20,1C12.2,1,8,6,8,6L5,1L0,19l15-1l-3-5c0,0,2.6-5,8-5c7.7,0,7.2,9.2-8,21C39.8,15,29.5,1,20,1L20,1z"/>
	`,Ze(t)};Ke.linkToGlyph=()=>{let t="",e=Le.greenOutline;return t+=`
		<path fill="${e}" d="M18,8.8L8.8,18c-0.5,0.5-1.3,0.5-1.8,0s-0.5-1.3,0-1.8L16.2,7c0.5-0.5,1.3-0.5,1.8,0S18.5,8.3,18,8.8z"/>
		<path fill="${e}" d="M7.5,21.2c-1.1,1.1-2.8,1.8-4.1,0.5s-0.6-3,0.5-4.1l5.9-5.9c-1.8-0.5-3.8,0.1-5.5,1.8L2,15.7c-2.4,2.4-2.6,5.7-0.5,7.8s5.4,2,7.8-0.5l2.3-2.3c1.7-1.7,2.3-3.7,1.8-5.5L7.5,21.2z"/>
		<path fill="${e}" d="M21.2,7.5c1.1-1.1,1.8-2.8,0.5-4.1s-3-0.6-4.1,0.5l-5.9,5.9c-0.5-1.8,0.1-3.8,1.8-5.5L15.7,2c2.4-2.4,5.7-2.6,7.8-0.5s2,5.4-0.5,7.8l-2.3,2.3c-1.7,1.7-3.7,2.3-5.5,1.8L21.2,7.5z"/>
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>
	`,Ze(t)};Ke.round=()=>{let t=Le.redX,e=Le.darkFill,r=`
		<path fill="${t}" d="M17.4,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3C11.1,12.2,10,13,10,13S14.4,17.5,17.4,21.9z"/>
		<path fill="${t}" d="M12.2,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S14.9,16.7,12.2,21.6z"/>
		<path fill="${t}" d="M28,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3c-1.2-1-2.3-0.3-2.3-0.3S24.9,17.5,28,21.9z"/>
		<path fill="${t}" d="M22.7,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S25.5,16.7,22.7,21.6z"/>
		<path fill="${e}" d="M2,20V9H0V7h4v13h2v2H0v-2H2z"/>
		<path fill="${e}" d="M7,22v-2h2v2H7z"/>
	`;return Ze(r)};Ke.flipVertical=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline,n=Le.darkFill;return t+=`
		<polygon fill="${n}" points="6.4,13 1,7.6 1,1 14.7,1 29,9.6 29,13"/>
		<path fill="${r}" d="M14.2,2L28,10.1V12H6.8L2,7.2V2h12 M15,0H0v8l6,6h24V9L15,0L15,0z"/>
		<polygon fill="${n}" points="1,29 1,22.4 6.4,17 29,17 29,20.4 14.7,29"/>
		<path fill="${e}" d="M28,18v1.9L14.4,28H2v-5.2L6.8,18H28 M30,16H6l-6,6v8h15l15-9V16L30,16z"/>
	`,Ze(t)};Ke.flipHorizontal=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline,n=Le.darkFill;return t+=`
		<polygon fill="${n}" points="1,29 1,15.3 9.6,1 13,1 13,23.6 7.6,29"/>
		<path fill="${r}" d="M12,2v21.2L7.2,28H2V15.6L10.1,2H12 M14,0H9L0,15v15h8l6-6V0L14,0z"/>
		<polygon fill="${n}" points="22.4,29 17,23.6 17,1 20.4,1 29,15.3 29,29"/>
		<path fill="${e}" d="M19.9,2L28,15.6V28h-5.2L18,23.2V2H19.9 M21,0h-5v24l6,6h8V15L21,0L21,0z"/>
	`,Ze(t)};Ke.exportGlyphSVG=()=>{let t=Le.blueOutline,e=Le.darkFill,r=`
      <rect x="7" y="1" width="16" height="2" fill="${t}"/>
      <polygon points="20 9 15 4 10 9 13.778 9 13.778 14 16.222 14 16.222 9 20 9" fill="${t}"/>
      <path d="M4.811,24.279c.448,0,.809-.071,1.083-.213s.413-.354.413-.638c0-.192-.054-.354-.162-.484-.108-.13-.314-.255-.621-.374-.306-.119-.759-.261-1.36-.425-.55-.147-1.036-.334-1.458-.561-.422-.227-.75-.519-.986-.876-.235-.356-.353-.802-.353-1.334,0-.539.15-1.018.45-1.437.3-.42.743-.75,1.326-.99.583-.241,1.297-.361,2.142-.361.805,0,1.506.104,2.104.31.598.207,1.115.47,1.551.787l-1.071,1.58c-.374-.231-.776-.417-1.207-.557-.431-.139-.864-.208-1.301-.208s-.761.059-.973.175-.319.29-.319.522c0,.153.056.284.166.396.11.11.319.224.625.34.306.116.754.259,1.343.429.583.165,1.092.354,1.526.569.433.216.769.503,1.007.863.238.359.357.834.357,1.424,0,.657-.196,1.208-.587,1.653-.391.444-.909.777-1.555.998-.646.222-1.354.332-2.125.332-.873,0-1.644-.125-2.312-.374-.669-.249-1.238-.578-1.708-.986l1.352-1.513c.351.272.749.499,1.194.68.445.182.931.272,1.458.272Z" fill="${e}"/>
      <path d="M19.214,16.884l-3.009,9.027h-3.162l-3.043-9.027h2.898l1.759,6.971,1.836-6.971h2.72Z" fill="${e}"/>
      <path d="M28.371,15.439l.629,1.972c-.317.125-.688.216-1.113.272-.425.057-.921.085-1.488.085.567.243.999.545,1.296.905.297.359.446.831.446,1.415s-.156,1.104-.468,1.56c-.312.456-.753.814-1.326,1.075-.573.261-1.25.391-2.032.391-.192,0-.374-.008-.544-.025-.17-.017-.337-.042-.501-.076-.096.051-.17.125-.221.221-.051.097-.076.195-.076.298,0,.142.058.27.174.383.116.113.389.17.82.17h1.479c.702,0,1.31.113,1.823.34.513.227.911.535,1.194.927.284.391.425.838.425,1.343,0,.924-.405,1.651-1.216,2.185-.81.532-2.014.799-3.612.799-1.156,0-2.05-.118-2.682-.353-.632-.235-1.071-.57-1.317-1.003-.247-.434-.37-.948-.37-1.543h2.38c0,.261.052.475.157.642.104.167.306.29.604.37.297.079.729.118,1.296.118.572,0,1.009-.045,1.309-.136s.506-.214.616-.369c.11-.156.166-.331.166-.523,0-.267-.105-.481-.314-.646-.21-.165-.542-.247-.995-.247h-1.437c-.975,0-1.683-.18-2.125-.539-.442-.36-.663-.781-.663-1.263,0-.334.089-.651.268-.952.179-.3.429-.553.752-.756-.578-.307-.992-.668-1.241-1.084-.249-.417-.374-.917-.374-1.5,0-.681.173-1.266.519-1.756s.823-.868,1.433-1.135c.609-.266,1.305-.399,2.086-.399.674.012,1.261-.035,1.76-.14.499-.105.946-.25,1.343-.434.396-.185.776-.382,1.139-.591ZM24.198,18.346c-.425,0-.762.135-1.012.404s-.374.639-.374,1.109c0,.498.127.881.382,1.147.255.267.589.399,1.003.399.447,0,.789-.133,1.024-.399s.353-.66.353-1.182c0-.504-.116-.877-.349-1.118-.232-.24-.575-.361-1.028-.361Z" fill="${e}"/>
	`;return Ze(r)};Ke.importGlyphSVG=()=>{let t=Le.blueOutline,e=Le.darkFill,r=`
    <path d="M28,4l-2-2-5,5-3-3c0-.143,0,8,0,8h8l-3-3,5-5Z" fill="${t}"/>
    <path d="M4.811,24.279c.448,0,.809-.071,1.083-.213s.413-.354.413-.638c0-.192-.054-.354-.162-.484-.108-.13-.314-.255-.621-.374-.306-.119-.759-.261-1.36-.425-.55-.147-1.036-.334-1.458-.561-.422-.227-.75-.519-.986-.876-.235-.356-.353-.802-.353-1.334,0-.539.15-1.018.45-1.437.3-.42.743-.75,1.326-.99.583-.241,1.297-.361,2.142-.361.805,0,1.506.104,2.104.31.598.207,1.115.47,1.551.787l-1.071,1.58c-.374-.231-.776-.417-1.207-.557-.431-.139-.864-.208-1.301-.208s-.761.059-.973.175-.319.29-.319.522c0,.153.056.284.166.396.11.11.319.224.625.34.306.116.754.259,1.343.429.583.165,1.092.354,1.526.569.433.216.769.503,1.007.863.238.359.357.834.357,1.424,0,.657-.196,1.208-.587,1.653-.391.444-.909.777-1.555.998-.646.222-1.354.332-2.125.332-.873,0-1.644-.125-2.312-.374-.669-.249-1.238-.578-1.708-.986l1.352-1.513c.351.272.749.499,1.194.68.445.182.931.272,1.458.272Z" fill="${e}"/>
    <path d="M19.214,16.884l-3.009,9.027h-3.162l-3.043-9.027h2.898l1.759,6.971,1.836-6.971h2.72Z" fill="${e}"/>
    <path d="M28.371,15.439l.629,1.972c-.317.125-.688.216-1.113.272-.425.057-.921.085-1.488.085.567.243.999.545,1.296.905.297.359.446.831.446,1.415s-.156,1.104-.468,1.56c-.312.456-.753.814-1.326,1.075-.573.261-1.25.391-2.032.391-.192,0-.374-.008-.544-.025-.17-.017-.337-.042-.501-.076-.096.051-.17.125-.221.221-.051.097-.076.195-.076.298,0,.142.058.27.174.383.116.113.389.17.82.17h1.479c.702,0,1.31.113,1.823.34.513.227.911.535,1.194.927.284.391.425.838.425,1.343,0,.924-.405,1.651-1.216,2.185-.81.532-2.014.799-3.612.799-1.156,0-2.05-.118-2.682-.353-.632-.235-1.071-.57-1.317-1.003-.247-.434-.37-.948-.37-1.543h2.38c0,.261.052.475.157.642.104.167.306.29.604.37.297.079.729.118,1.296.118.572,0,1.009-.045,1.309-.136s.506-.214.616-.369c.11-.156.166-.331.166-.523,0-.267-.105-.481-.314-.646-.21-.165-.542-.247-.995-.247h-1.437c-.975,0-1.683-.18-2.125-.539-.442-.36-.663-.781-.663-1.263,0-.334.089-.651.268-.952.179-.3.429-.553.752-.756-.578-.307-.992-.668-1.241-1.084-.249-.417-.374-.917-.374-1.5,0-.681.173-1.266.519-1.756s.823-.868,1.433-1.135c.609-.266,1.305-.399,2.086-.399.674.012,1.261-.035,1.76-.14.499-.105.946-.25,1.343-.434.396-.185.776-.382,1.139-.591ZM24.198,18.346c-.425,0-.762.135-1.012.404s-.374.639-.374,1.109c0,.498.127.881.382,1.147.255.267.589.399,1.003.399.447,0,.789-.133,1.024-.399s.353-.66.353-1.182c0-.504-.116-.877-.349-1.118-.232-.24-.575-.361-1.028-.361Z" fill="${e}"/>
	`;return Ze(r)};Ke.deleteGlyph=()=>{let t=Le.redX,r=`
		<path fill="${Le.darkFill}" d="M20.2,18.5H10L7.8,25h3.5v3.6H0V25h3.5l7.8-21.8H7.8V0h14.6v3.2h-3.6l8,21.8H30v3.6H18.8V25h3.5L20.2,18.5zM19.2,15.2L15.4,3.2H15l-4,11.9H19.2z"/>
		<path fill="${t}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${t}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`;return Ze(r)};Ke.reverseWinding=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline;return t+=`
		<path fill="${r}" d="M3.7,7.8V5L0,8.7l3.7,3.7V9.6c6.2,0,11.2,5,11.2,11.2h1.9C16.8,13.6,10.9,7.8,3.7,7.8z"/>
		<path fill="${e}" d="M25.2,22.3C25.2,10,15.2,0,3,0v3.2c10.5,0,19.1,8.6,19.1,19.1h-4.8l6.4,6.4l6.4-6.4H25.2z"/>
	`,Ze(t)};Ke.switchPathComponent=function(t=!1){let e="",r=Le.blueOutline,n=Le.greenOutline,a=Le.darkFill,o=Le.lightFill;return t&&(r=Le.greenOutline,n=Le.blueOutline,a=Le.lightFill,o=Le.darkFill),e+=`
	<polygon fill="${a}" points="5.1,21 1,17.2 1,1 3.4,1 10,11.3 10,21"/>
	<path fill="${r}" d="M2.9,2L9,11.6V20H5.5L2,16.7V2H2.9 M3.9,0H0v17.6L4.7,22H11V11L3.9,0L3.9,0z"/>
	<polygon fill="${o}" points="21.8,29 16,23.6 16,1 19.8,1 29,15.3 29,29"/>
	<path fill="${n}" d="M19.1,2L28,15.6V28h-5.8L17,23.1V2h2 M20.4,0H15v24l6.4,6H30V15L20.4,0L20.4,0z"/>
	`,Ze(e)};Ke.deletePath=function(t=!1){let e="",r=Le.redX,n=Le.blueOutline,a=Le.darkFill;return t&&(n=Le.greenOutline,a=Le.lightFill),e+=`
		<rect fill="${a}" x="1" y="1"	width="16" height="16"/>
		<path fill="${n}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,Ze(e)};Ke.combine_unite=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15.164,6.4c-.8-3.104-3.61-5.4-6.964-5.4-3.976,0-7.2,3.223-7.2,7.2,0,3.354,2.296,6.164,5.4,6.964v3.836h12.6V6.4h-3.836Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM18,18h-10v-4c-.702,0-1.373-.127-2-.35-2.327-.826-4-3.044-4-5.65,0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4,.223.627.35,1.298.35,2h4v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.combine_divide=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15.164,6.4c-.8-3.104-3.61-5.4-6.964-5.4C4.224,1,1,4.223,1,8.2c0,3.354,2.296,6.164,5.4,6.964v3.836h12.6V6.4h-3.836Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.combine_subtract=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15,6.337c-.791-3.068-3.568-5.337-6.883-5.337C4.186,1,1,4.186,1,8.117c0,3.315,2.27,6.092,5.337,6.883V6.337h8.663Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM18,18h-10v-10h10v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.combine_exclude=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15.347,7c0,5-3.347,8.347-8.347,8.347v3.653h12V7h-3.653Z" style="fill: ${r};"/>
		<path d="M15,6.337c-.791-3.068-3.568-5.337-6.883-5.337-3.93,0-7.117,3.186-7.117,7.117,0,3.315,2.27,6.092,5.337,6.883V6.337h8.663Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.combine_intersect=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="M15,8.6c0-.554-.078-1.088-.21-1.6h-7.79v7.79c.512.132,1.046.21,1.6.21,3.535,0,6.4-2.865,6.4-6.4Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.edit=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path fill="${e}" d="m28.643,1.357c-1.577-1.577-4.109-1.891-5.651-.349L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651Z"/>
		<path fill="${r}" d="m28.643,1.357C27.771.486,26.608,0,25.482,0,24.57,0,23.682.318,22.992,1.008L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651ZM6.268,20.561l15.793-15.793,3.172,3.172-15.793,15.793-3.172-3.172Zm-.662.752l3.082,3.082-5.548,2.466,2.466-5.548ZM27.577,5.594l-1.638,1.638-3.172-3.172,1.638-1.638c.281-.28.643-.423,1.076-.423.611,0,1.264.288,1.747.771.44.44.719,1.018.765,1.586.028.346-.021.842-.416,1.237Z"/>
	`,Ze(t)};Ke.delete=()=>{let t="",e=Le.redX;return t+=`
		<path fill="${e}" d="m23.597,28.681c1.121,1.472,6.349-1.368,4.386-3.98C23.74,19.055,12.613,7.416,7.367,3.301,3.535.295,0,2.518,0,2.518c0,0,13.846,13.354,23.597,26.164Z"/>
		<path fill="${e}" d="m6.893,28.339c-1.703,2.813-6.56-.4-4.174-3.566C7.551,18.364,16.797,6.057,23.298,1.396c4.182-2.998,6.702-.235,6.702-.235,0,0-14.277,12.59-23.107,27.178Z"/>
	`,Ze(t)};Ke.createNewKernGroup=()=>{let t="",e=Le.greenOutline,r=Le.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<polygon points="13 20.5 13 22.5 0 22.5 0 23.5 13 23.5 13 25.5 14 25.5 14 20.5 13 20.5" fill="${r}"/>
		<polygon points="24 2 10 2 10 0 9 0 9 5 10 5 10 3 24 3 24 2" fill="${r}"/>
		<rect x="21" y="15" width="3" height="15" fill="${e}"/>
		<rect x="21" y="15" width="3" height="15" transform="translate(45 0) rotate(90)" fill="${e}"/>
	`,Ze(t)};Ke.deleteSingleLetterPair=()=>{let t="",e=Le.redX,r=Le.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<path d="m26.428,29.033c.625.821,3.542-.763,2.447-2.22-2.367-3.149-8.574-9.642-11.5-11.938-2.138-1.677-4.11-.437-4.11-.437,0,0,7.723,7.449,13.163,14.595Z" fill="${e}"/>
		<path d="m17.111,28.842c-.95,1.569-3.659-.223-2.328-1.989,2.695-3.575,7.853-10.44,11.479-13.04,2.333-1.673,3.739-.131,3.739-.131,0,0-7.964,7.023-12.889,15.16Z" fill="${e}"/>
	`,Ze(t)};Ke.findSingleLetterPair=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<path d="m30,28l-5.154-5.154c.728-1.104,1.154-2.425,1.154-3.846,0-3.866-3.134-7-7-7s-7,3.134-7,7,3.134,7,7,7c1.421,0,2.742-.426,3.846-1.154l5.154,5.154,2-2Zm-15.5-9c0-2.481,2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5-4.5-2.019-4.5-4.5Z" fill="${e}"/>
	`,Ze(t)};Ke.moveLayerDown=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<rect fill="${e}" x="23" y="21" width="2" height="7"/>
		<path fill="${e}" d="M20,26h8l-4,4C24,30,19.9,25.9,20,26z"/>
		<polygon fill="${e}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${r}" points="15,14 0,7 15,0 30,7"/>
	`,Ze(t)};Ke.moveLayerUp=()=>{let t="",e=Le.blueOutline,r=Le.darkFill;return t+=`
		<rect fill="${e}" x="23" y="23" width="2" height="7"/>
		<path fill="${e}" d="M20,25h8l-4-4C24,21,19.9,25.1,20,25z"/>
		<polygon fill="${r}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${e}" points="15,14 0,7 15,0 30,7"/>
	`,Ze(t)};Ke.align=function(t){let e="",r=Le.blueOutline,n=Le.darkFill;switch(t){case"bottom":e+=`
				<rect x="0" y="18" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="11" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="1" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="5" width="4" height="12" style="fill: ${n};"/>
			`;break;case"middle":e+=`
				<rect x="0" y="9" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="7" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="2" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="4" width="4" height="12" style="fill: ${n};"/>
			`;break;case"top":e+=`
				<rect x="0" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="3" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="3" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="3" width="4" height="12" style="fill: ${n};"/>
			`;break;case"left":e+=`
				<rect x="0" width="2" height="20" style="fill: ${r};"/>
				<rect x="3" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="3" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="3" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break;case"center":e+=`
				<rect x="9.016" width="2" height="20" style="fill: ${r};"/>
				<rect x="7" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="2" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="4" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break;case"right":e+=`
				<rect x="18" width="2" height="20" style="fill: ${r};"/>
				<rect x="11" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="1" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="5" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break}return Ze(e,"20")};Ke.resetPathPoint=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline;return t+=`
		<circle display="inline" fill="${r}" cx="20" cy="27" r="3"/>
		<circle display="inline" fill="${r}" cx="27" cy="13" r="3"/>
		<line display="inline" fill="none" stroke="${r}" stroke-miterlimit="10" x1="20" y1="27" x2="13" y2="13"/>
		<line display="inline" fill="none" stroke="${r}" stroke-miterlimit="10" x1="13" y1="13" x2="27" y2="13"/>
	`,t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,Ze(t)};Ke.deletePathPoint=()=>{let t="",e=Le.blueOutline,r=Le.redX;return t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,t+=`
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>';
	`,Ze(t)};Ke.insertPathPoint=()=>{let t="",e=Le.blueOutline;return t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,t+=`
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>';
	`,Ze(t)};Ke.selectNextPathPoint=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline;return t+=`
		<rect x="22.5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m29,12v6h-6v-6h6m1-1h-8v8h8v-8h0Z" fill="${e}"/>
		<path d="m19,15s-7-7-7-7v5h-6v4h6v5s7-7,7-7Z" fill="${r}"/>
		<rect y="13" width="3" height="4" fill="${r}"/>
	`,Ze(t)};Ke.selectPreviousPathPoint=()=>{let t="",e=Le.blueOutline,r=Le.grayOutline;return t+=`
		<rect x=".5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m7,12v6H1v-6h6m1-1H0v8h8v-8h0Z" fill="${e}"/>
		<path d="m11,15s7-7,7-7v5h6v4h-6s0,5,0,5l-7-7Z" fill="${r}"/>
		<rect x="27" y="13" width="3" height="4" fill="${r}"/>
	`,Ze(t)};Ke.default=()=>{let t=`<rect width="30" height="30" fill="${Le.greenOutline}"/>`;return Ze(t)};Ke.test=()=>{let t=`
		<path d="M28.05,23.82c-1.65-1.79-9.55-13.02-9.55-17.82V3h1c.28,0,.5-.72,.5-1s-.22-1-.5-1H10.5c-.28,0-.5,.72-.5,1s.22,1,.5,1h1v3c0,4.8-7.9,16.03-9.55,17.82-.58,.55-.95,1.32-.95,2.18,0,1.66,1.34,3,3,3H26c1.66,0,3-1.34,3-3,0-.86-.37-1.63-.95-2.18ZM13.5,6V3h3v3c0,2.76,2.01,6.95,4.25,10.72-3.27,1.69-5.6-.72-7.75-.72-.34,0-1.86-.31-4,1.15,2.34-3.88,4.5-8.28,4.5-11.15Zm3.5,20c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm-6-7.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Z" fill="${Le.redX}"/>
		<circle cx="15" cy="14" r="1" fill="${Le.redX}"/>
	`;return Ze(t)};function rd(){let t=y({className:"panel__card guides-card__view-options",innerHTML:"<h3>View options</h3>"});const e=xe().settings.app.guides,r=e.systemShowGuides,n=e.customShowGuides;ne(t,[ar(e,"drawGuidesOnTop",Qn),y({tag:"label",style:"grid-column: 2 / -1;",content:"Draw guides over shapes"})]);const a=ar(e,"systemShowGuides");a.addEventListener("change",()=>{J().navigate()}),ne(t,[a,y({tag:"h4",content:"Key metrics guides"})]),r&&ne(t,[y(),Ue("Transparency"),wi(e.systemTransparency,x=>{e.systemTransparency=x,J().editCanvas.redraw()}),y(),Ue("Show labels"),ar(e,"systemShowLabels",Qn),Wr()]);const o=ar(e,"customShowGuides");o.addEventListener("change",()=>{J().navigate()}),ne(t,[o,y({tag:"h4",content:"Custom guides"})]),n&&ne(t,[y(),Ue("Transparency"),wi(e.customTransparency,x=>{e.customTransparency=x,J().editCanvas.redraw()}),y(),Ue("Show labels"),ar(e,"customShowLabels",Qn)]);let s=[t];return r&&s.push(nd()),n&&s.push(ad()),s}function Qn(){xr(),J().editCanvas.redraw()}function nd(){let t=y({className:"panel__card guides-card__system",innerHTML:"<h3>Key metrics guides</h3>"});const e=xe().settings.font,r=J().selectedItem.advanceWidth;return ne(t,[Nn("ascent","Ascent",e.ascent,V0),Nn("capHeight","Cap height",e.capHeight,_0),Nn("xHeight","X height",e.xHeight,_0),Nn("baseline","Baseline","0",ga),Nn("descent","Descent",e.descent,V0),Nn("leftSide","Left side","0",ga),Nn("rightSide","Right side",r,ga)]),t}function Nn(t,e,r="0000",n){const a=J().systemGuides,o=ar(a,t,L=>{const I=J();let c=I.project.settings.app.guides.systemGuides;L?c.includes(t)||c.push(t):c.includes(t)&&(c=c.filter(C=>C!==t)),I.editCanvas.redraw()});o.setAttribute("title","Show / hide guide"),o.setAttribute("style",`accent-color: ${n};`);let s=y({className:"guide-system-angle",innerHTML:pn({name:"command_horizontalBar",color:n})});s.setAttribute("title","Horizontal guideline"),(t==="leftSide"||t==="rightSide")&&(s.innerHTML=pn({name:"command_verticalBar",color:n}),s.setAttribute("title","Vertical guideline"));const x=y({className:"guide-system-value",content:r});return x.setAttribute("title",`Guide line position
These are based on this font's key metrics,
which you can edit on the Font Settings page.`),[o,Ue(e),s,x]}function ad(){let t=y({className:"panel__card guides-card__custom",innerHTML:"<h3>Custom guides</h3>"});const e=xe().settings.app.guides.custom;e.length&&(e.forEach((n,a)=>{ne(t,id(n,a))}),t.appendChild(Wr()));const r=y({tag:"fancy-button",attributes:{secondary:""},innerHTML:"Add a custom guide"});return r.addEventListener("click",()=>{xe().settings.app.guides.custom.push(new Ro({visible:!0,color:q1()})),Qn()}),t.appendChild(r),t}function id(t,e){const r=ar(t,"visible",()=>{J().editCanvas.redraw()});r.setAttribute("style",`accent-color: ${t.color}`),r.setAttribute("title","Show / hide guide");const n=bt(t,"name","editCanvasView","input"),a=cl({iconName:"delete",title:"Delete guide"});a.setAttribute("class","guide-delete-button"),a.addEventListener("click",()=>{xe().settings.app.guides.custom.splice(e,1),Qn()});const o=y({tag:"input",className:"guide-color-button",title:"Change guide color",attributes:{type:"color",style:`background-color: ${t.color};`,value:k0(t.color)}});o.addEventListener("input",L=>{let I=Ya(L.target.value),c=`rgb(${I.r},${I.g},${I.b})`;o.setAttribute("value",k0(c)),o.style.backgroundColor=c,r.style.accentColor=c,s.querySelector("g").setAttribute("fill",c);const C=xe().settings.app.guides.custom[e];C.color=c,J().editCanvas.redraw()});const s=y({tag:"button",title:"Toggle vertical / horizontal",className:"guide-angle-button",innerHTML:pn({name:"command_verticalBar",color:t.color})});t.angle===90&&(s.innerHTML=pn({name:"command_horizontalBar",color:t.color})),s.addEventListener("click",()=>{const L=xe().settings.app.guides.custom[e];L.angle===90?(L.angle=0,L.name=L.name.replace("Horizontal","Vertical")):(L.angle=90,L.name=L.name.replace("Vertical","Horizontal")),Qn()});const x=bt(t,"location","editCanvasView","input-number");return x.setAttribute("title","Guide line position"),[r,n,a,o,s,x]}function od(){const t=J();let e=y({className:"panel__card history-list"}),r=t.history.length,n=y({tag:"button",className:r>0?"button__call-to-action number":"number",innerHTML:`undo ${r}`,style:"max-width: 30%; grid-column: 1 / -1;"});e.appendChild(n),r>0?n.addEventListener("click",()=>{t.history.restoreState()}):(n.setAttribute("disabled",""),e.appendChild(y({tag:"h3",innerHTML:t.project.getItemName(t.selectedItemID,!0)||""})));let a="initial";return t.history.queue.forEach(o=>{if(o.title!=="_whole_project_change_post_state_"){o.itemID&&o.itemID!==a&&(e.appendChild(y({tag:"h3",innerHTML:t.project.getItemName(o.itemID,!0)||""})),a=o.itemID);let s=o.title;o.wholeProjectSave&&(s=`<strong>${o.title}</strong>`),e.appendChild(y({className:"history-list__title",innerHTML:s})),e.appendChild(y({className:"history-list__date number",innerHTML:new Date(o.timeStamp).toLocaleTimeString(),title:new Date(o.timeStamp).toLocaleString()}))}}),e.appendChild(y({className:"history-list__title history-list__initial-entry",innerHTML:"Initial state"})),e.appendChild(y({className:"history-list__date number history-list__initial-entry",innerHTML:new Date(t.history.initialTimeStamp).toLocaleTimeString()})),e}const Tl={isCtrlDown:!1,isSpaceDown:!1,isShiftDown:!1,isAltDown:!1};function E1(t){const e=A0(t);Il(e,"down")}function L1(t){let e=A0(t);Il(e,"up")}function Il(t,e){const r=Tl;e==="down"&&(t==="Control"&&(r.isCtrlDown=!0),t==="Space"&&(r.isSpaceDown=!0),t==="Shift"&&(r.isShiftDown=!0),t==="Alt"&&(r.isAltDown=!0)),e==="up"&&(t==="Control"&&(r.isCtrlDown=!1),t==="Space"&&(r.isSpaceDown=!1),t==="Shift"&&(r.isShiftDown=!1),t==="Alt"&&(r.isAltDown=!1))}function Ad(){var o;let t=y({className:"panel__card full-width item-links__rows-area"});const e=J(),r=xe();let a=e.selectedItem.shapes;if((o=Ee==null?void 0:Ee.newBasicPath)!=null&&o.objType){let s=Ee.newBasicPath,x=y();x.setAttribute("class","item-link__row layer-panel__new-path"),x.classList.add("layer-panel__selected"),x.appendChild(y({className:"item-link__thumbnail",innerHTML:r.makeItemThumbnail(s)})),x.appendChild(y({className:"item-link__title",innerHTML:s.name})),t.appendChild(x)}if(a.length>0)for(let s=a.length-1;s>=0;s--){let x=a[s],L=y({attributes:{"target-path-index":s}});x.objType==="ComponentInstance"?L.setAttribute("class","item-link__row layer-panel__component-row"):L.setAttribute("class","item-link__row layer-panel__path-row"),e.multiSelect.shapes.isSelected(x)&&L.classList.add("layer-panel__selected"),e.subscribe({topic:"whichShapeIsSelected",subscriberID:`layersPanel.item-link-row-${s}`,callback:()=>{let C=e.multiSelect.shapes.isSelected(x);L.classList.toggle("layer-panel__selected",C)}}),L.addEventListener("click",()=>{Tl.isCtrlDown?e.multiSelect.shapes.toggle(x):e.multiSelect.shapes.select(x),e.publish("whichShapeIsSelected",x)});const I=y({className:"item-link__thumbnail",attributes:{"target-path-index":s},innerHTML:r.makeItemThumbnail(x)});L.appendChild(I),L.appendChild(y({className:"item-link__title",innerHTML:`${x.name}`}));let c="Path";x.link&&(c=`Component instance&emsp;|&emsp;${r.getItem(x.link).name}`),L.appendChild(y({className:"item-link__subtitle",innerHTML:c})),t.appendChild(L)}else t.appendChild(y({content:'No paths exist yet.  You can create one with the New Path tools on the canvas, or by pressing "add new path" below.'}));return e.subscribe({topic:["currentPath","currentItem"],subscriberID:"layersPanel",callback:()=>{const s=J(),x=xe();document.querySelectorAll(".item-link__thumbnail").forEach(I=>{const c=I.getAttribute("target-path-index");I.innerHTML=x.makeItemThumbnail(s.selectedItem.shapes[c])})}}),[t,sd()]}function sd(){const t=J();let e=y({className:"panel__card full-width",content:"<h3>Actions</h3>"}),r=y({tag:"div",className:"panel__actions-area"});er(r,ir("addShapeActions"));let n=t.multiSelect.shapes.members;return t.selectedItem.shapes.length>1&&n.length===1&&er(r,ir("layerActions")),ne(e,r),e}function Qa(){const t=J();let e=y(),r=t.nav.panel;return r!=="Layers"&&(document.removeEventListener("keydown",E1,!1),document.removeEventListener("keyup",L1,!1)),t.nav.page==="Components"&&Ut(t.project.components)<=0||t.nav.page==="Ligatures"&&Ut(t.project.ligatures)<=0||t.nav.page==="Kerning"&&Ut(t.project.kerning)<=0||(r==="Attributes"?(t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),t.nav.page==="Kerning"?ne(e,ed()):ne(e,vI())):r==="Layers"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,Ad()),document.addEventListener("keydown",E1,!1),document.addEventListener("keyup",L1,!1)):r==="Context characters"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),ne(e,td())):r==="History"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,od())):r==="Guides"&&(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,rd()))),e}function xr(){let t=document.querySelector("#editor-page__panel");if(t){let e=Qa();t.innerHTML="",t.appendChild(e)}}function ld(){const t=J(),e=t.selectedLigatureID,a=y({tag:"div",id:"app__page",innerHTML:`
		<div class="editor__page">
			<div class="editor-page__left-area">
				<div class="editor-page__nav-area">
					${zt({level:"l1",superTitle:"PAGE",title:"Ligatures"})}
				</div>
				<div id="editor-page__panel"></div>
			</div>
			${e?`
		<div class="editor-page__tools-area"></div>
		<div class="editor-page__edit-canvas-wrapper"></div>
		<div class="editor-page__zoom-area"></div>
	`:'<div class="editor-page__edit-canvas-wrapper" style="grid-column: span 2; overflow-y: scroll;"></div>'}
		</div>
	`});t.showPageTransitions&&a.classList.add("app__page-animation");let o=a.querySelector("#nav-button-l1");o.addEventListener("click",function(){Jt(o)});const s=a.querySelector(".editor-page__nav-area"),x=a.querySelector(".editor-page__edit-canvas-wrapper");if(!e)return ne(x,xd()),s.style.display="block",o.style.width="100%",o.style.borderRadius="4px",a;const L=t.selectedLigature,I=zt({level:"l2",superTitle:"EDITING",title:L.name}),c=zt({level:"l3",superTitle:"PANEL",title:t.nav.panel});s.appendChild(se(I)),s.appendChild(se(c));const C=y({tag:"edit-canvas",id:"editor-page__edit-canvas",attributes:{"editing-item-id":t.selectedLigatureID}});x.appendChild(C);let R=a.querySelector("#nav-button-l2");R.addEventListener("click",function(){Jt(R)}),t.subscribe({topic:"whichLigatureIsSelected",subscriberID:"nav.ligatureChooserButton",callback:()=>{var q;t.selectedLigature&&(R.innerHTML=Aa((q=t.selectedLigature)==null?void 0:q.name,"EDITING"))}});let g=a.querySelector("#nav-button-l3");g.addEventListener("click",function(){Jt(g)});const Y=a.querySelector("#editor-page__panel");Y.appendChild(Qa()),Y.addEventListener("scroll",kr),t.subscribe({topic:["whichLigatureIsSelected","whichShapeIsSelected"],subscriberID:"nav.panelChooserButton",callback:()=>{xr()}}),t.selectedTool==="kern"&&(t.selectedTool="resize");let w=a.querySelector(".editor-page__tools-area");w.innerHTML="";let V=eA();V&&ne(w,V);let _=a.querySelector(".editor-page__zoom-area");_.innerHTML="";let ee=o0();return ee&&ne(_,ee),t.subscribe({topic:"whichLigatureIsSelected",subscriberID:"editCanvas.selectedLigature",callback:q=>{vn(),a.querySelector("#editor-page__edit-canvas").setAttribute("editing-item-id",q)}}),t.subscribe({topic:"whichShapeIsSelected",subscriberID:"editCanvas.selectedPath",callback:()=>{vn(),t.editCanvas.redraw()}}),t.subscribe({topic:"whichPathPointIsSelected",subscriberID:"editCanvas.selectedPathPoint",callback:()=>{t.editCanvas.redraw()}}),a}function xd(){let t="";dl.forEach(a=>{t+=`
			<span class="first-run__example-wrapper">
					<pre>${a.display}</pre>
					<span> ➞ </span>
					<pre>&#${parseInt(a.point)};</pre>
			</span>
		`});const e=y({className:"editor-page__first-run",innerHTML:`
			<h1>There are no ligatures in your project</h1>
			<p>
				Ligatures are a feature of fonts where a specified sequence of characters
				is recognized and replaced with a single new character that you design.
				In Latin, there are some common ligatures:
				<div class="first-run__examples-table">
				${t}
				</div>
			</p>
			<p>
				These are just some examples. <strong>Ligatures can have any sequence of two
				or more characters.</strong> In a text editing program that has ligatures enabled,
				this sequence of characters is recognized, then replaced with the custom ligature
				character that you design.
			</p>
		`}),r=y({tag:"fancy-button",innerHTML:"Create a new ligature",onClick:Zo}),n=y({tag:"fancy-button",innerHTML:"Add the common Latin ligatures to your project",attributes:{secondary:""},onClick:Ed});return e.appendChild(r),e.appendChild(n),e}const dl=[{chars:"ae",display:"ae",point:"0xE6"},{chars:"AE",display:"AE",point:"0xC6"},{chars:"ff",display:"f‌f",point:"0xFB00"},{chars:"fi",display:"f‌i",point:"0xFB01"},{chars:"fl",display:"f‌l",point:"0xFB02"},{chars:"oe",display:"oe",point:"0x153"},{chars:"OE",display:"OE",point:"0x152"},{chars:"st",display:"st",point:"0xFB06"},{chars:"ffi",display:"f‌f‌i",point:"0xFB03"},{chars:"ffl",display:"f‌f‌l",point:"0xFB04"}];function Ed(){dl.forEach(e=>ao(e.chars));const t=J();t.nav.page="Ligatures",t.navigate(),t.history.addWholeProjectChangePostState()}function ao(t){if(t.length<2)return"Ligature sequences need to be two or more characters.";let e="";const r=Xi(t);let n=[];if(r.startsWith("U+")?(n=r.split("U+"),n=n.slice(1),e="U+"):r.startsWith("0x")&&(n=r.split("0x"),n=n.slice(1),e="0x"),e&&n.length>1){t="";for(let s=0;s<n.length;s++){let x=n[s],L=ji(x);if(L)t+=Rr(`0x${L}`);else return`Invalid Hex or Unicode format: ${e}${x}.`}}const a=$a(t),o=xe();return o.ligatures[a]?"Ligature already exists.":a===!1?"Characters could not be read for the ligature sequence.":(o.addItemByType(new it({id:a,parent:o,objType:"Ligature",gsub:t.split("").map(s=>s.codePointAt(0))}),"Ligature",a),o.ligatures[a])}function $a(t=""){if(t==="")return!1;let e="liga";return t.split("").forEach(n=>{let a=n.charCodeAt(0);a>=65&&a<=90||a>=97&&a<=122?e+="-"+n:e+="-"+Yr(n)}),e}function Zo(){const t=y({innerHTML:`
			<h2 id="ligatures__new-ligature-title">Create a new ligature</h2>
			Create a new ligature by specifying two or more individual characters.
			<br>
			<div class="panel__card no-card">
				<input type="checkbox" id="ligatures__multi-input-checkbox" style="margin: 0 0 15px 0;"/>
				<label for="ligatures__multi-input-checkbox" style="grid-column-start: 2;">Create many ligatures at once with a comma separated list.<br>Ligatures cannot contain commas or spaces if you use this option.</label>
			</div>
			<input id="ligatures__new-ligature-input" type="text" style="width: 90%;"
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
			/>
			<info-bubble style="display: inline-block; margin-left: 10px;">
				Ligature characters can be specified in three different formats:
				<ul>
					<li>By just typing characters: <code>ff</code></li>
					<li>Specifying Unicode code points: <code>U+66U+66</code></li>
					<li>Specifying Hexadecimal format: <code>0x660x66</code></li>
				</ul>
				<br><br>
				Hexadecimal, Unicode, and regular character formats cannot be mixed - choose one type!
				<br><br>
				<b>Warning!</b><br>
				Specifying ligature characters beyond the Basic Multilingual Plane
				(above Unicode <code>U+FFFF</code>) will cause errors!
			</info-bubble>
			<br><br>
			<fancy-button disabled id="ligatures__add-new-ligature-button">Create ligature</fancy-button>
		`}),e=t.querySelector("#ligatures__add-new-ligature-button"),r=t.querySelector("#ligatures__new-ligature-input"),n=t.querySelector("#ligatures__multi-input-checkbox"),a=t.querySelector("#ligatures__new-ligature-title");r.addEventListener("keyup",()=>{r.value.length<2?e.setAttribute("disabled",""):e.removeAttribute("disabled")}),n.addEventListener("change",()=>{n.checked?(a.innerHTML="Create new ligatures",e.innerHTML="Create ligatures"):(a.innerHTML="Create a new ligature",e.innerHTML="Create ligature")}),e.addEventListener("click",()=>{let o,s;if(n.checked?r.value.replaceAll(" ","").split(",").forEach(I=>{let c=ao(I);typeof c=="string"?(typeof o!="string"&&(o="One or more ligature could not be created:<br><br>"),o=""+o+c+"<br><br>"):(c.hasChangedThisSession=!1,c.wasCreatedThisSession=!0,s=c.id)}):(o=ao(r.value),typeof o!="string"&&(o.hasChangedThisSession=!1,o.wasCreatedThisSession=!0,s=o.id)),typeof o=="string")Er(o);else{const x=J();x.selectedLigatureID=s,x.navigate(),x.history.addWholeProjectChangePostState(),Ve()}}),Ir(t,500)}let dr=[],Jn=[];async function Ld(t,e=!1){const r=e?new l0:oi(),n=r.project;await ko("Reading font data..."),dr=Ri(t,"glyph");const a={},o={};let s=0;for(await da("character",1);s<dr.length;)await x(dr[s]);async function x(w){if(w&&w.attributes){const V=w.attributes,_=V["glyph-name"];let ee=Ln(V.unicode);if((V.unicode===" "||_.toLowerCase()==="space")&&(ee=["0x20"]),!V.unicode&&_.startsWith("uni")){const q=tr(`0x${_.substring(3)}`);q&&(ee=[q],n.settings.app.showNonCharPoints=!0)}if(ee[0]==="0x0")dr.splice(s,1);else{const q=`<svg><glyph d="${dr[s].attributes.d}"/></svg>`,ce=Ba(q,!1),Te=parseInt(V["horiz-adv-x"]);if(ce.advanceWidth=Te,ee.length===1){await da("character",s);const oe=ee[0];isNaN(Number(oe))||n.incrementRangeCountFor(Number(oe)),ce.id=`glyph-${oe}`,a[`glyph-${oe}`]=ce,la(oe)==="[name not found]"&&(n.settings.app.showNonCharPoints=!0)}else{await da("ligature",s);const oe=ee.join(""),Ie=Rr(oe);if(Ie){const de=$a(Ie);de&&(ce.id=de,ce.gsub=K1(oe),o[de]=ce)}}}s++}else dr.splice(s,1)}let L=Ri(t,"missing-glyph");if(L.length){const w=L[0].attributes,V=`<svg><glyph d="${w.d}"/></svg>`,_=Ba(V,!1),ee=parseInt(w["horiz-adv-x"]);_.advanceWidth=ee,n.incrementRangeCountFor(0),_.id="glyph-0x0",a["glyph-0x0"]=_}Jn=Ri(t,"hkern");const I={};let c=0;for(await da("kern pair",1);c<Jn.length;)await C(Jn[c]);async function C(w){await da("kern pair",c+dr.length);let V=[],_=[];if(w)if(V=h1(w.attributes.g1,dr,V),_=h1(w.attributes.g2,dr,_),V=c1(w.attributes.u1,dr,V),_=c1(w.attributes.u2,dr,_),V.length&&_.length){const ee=G1(I,"kern-"),q=w.attributes.k||0;I[ee]=new en({leftGroup:V,rightGroup:_,value:q}),I[ee].id=ee,c++}else Jn.splice(c,1);else Jn.splice(c,1)}n.glyphs=a,n.ligatures=o,n.kerning=I;const R=Xo(t,"font-face").attributes,g=n.settings.font,Y=R["font-family"]||"My Font";if(g.family=Y,g.style=R["font-style"]||"Regular",g.panose=R["panose-1"]||"0 0 0 0 0 0 0 0 0 0",g.upm=1*R["units-per-em"]||g.upm,g.ascent=1*R.ascent||g.ascent,g.capHeight=1*R["cap-height"]||g.capHeight,g.xHeight=1*R["x-height"]||g.xHeight,g.descent=1*R.descent||g.descent,g.variant=R["font-variant"]||"normal",g.weight=1*R["font-weight"]||400,g.stretch=R["font-stretch"]||"normal",g.underlinePosition=1*R["underline-position"]||-100,g.underlineThickness=1*R["underline-thickness"]||20,g.strikethroughPosition=1*R["strikethrough-position"]||g.xHeight/2,g.strikethroughThickness=1*R["strikethrough-thickness"]||20,g.overlinePosition=1*R["overline-position"]||g.ascent+50,g.overlineThickness=1*R["overline-thickness"]||20,g.overshoot=g.upm>2e3?30:20,n.settings.project.name=Y,e)return r.project.save();L0(r),r.project.resetSessionStateForAllItems(),r.nav.page="Overview",r.navigate()}async function da(t,e){const r=dr.length+Jn.length;await ko(`
			Importing ${t}:
			<span class="progress-indicator__counter">${e}</span>
			 of
			<span class="progress-indicator__counter">${r}</span>
		`)}function Ri(t,e){typeof e=="string"&&(e=[e]);let r=[];if(t.content)for(let n=0;n<t.content.length;n++)r=r.concat(Ri(t.content[n],e));else e.indexOf(t.name)>-1&&(r=[t]);return r}function Xo(t,e){if(e===t.name)return t;if(t.content)for(let r=0;r<t.content.length;r++){const n=Xo(t.content[r],e);if(n)return n}else return!1}function h1(t,e,r,n){n=n||65535;let a;if(t){const o=t.split(",");for(let s=0;s<o.length;s++)for(let x=0;x<e.length;x++)e[x].attributes.unicode&&o[s]===e[x].attributes["glyph-name"]&&(a=Ln(e[x].attributes.unicode),1*a[0]<n&&(r=r.concat(a)))}return r}function c1(t,e,r,n){n=n||65535;let a;if(t){const o=t.split(",");for(let s=0;s<o.length;s++)for(let x=0;x<e.length;x++)e[x].attributes.unicode&&o[s]===e[x].attributes.unicode&&(a=Ln(e[x].attributes.unicode),1*a[0]<n&&(r=r.concat(a)))}return r}const yt={fileName:"",fileSuffix:"",fileType:"",fileHandle:!1,errorMessage:"",content:!1};let ei;async function hd(t,e){ei=e;let r;window.showOpenFilePicker&&window.showSaveFilePicker?(yt.fileHandle=t,r=await t.getFile()):r=t,yt.fileName=r.name;let n=r.name.split(".");n=n[n.length-1].toLowerCase(),yt.fileSuffix=n;const a=new FileReader;if(a.onerror=()=>{ur("A file reader error occurred. [FR0]")},yt.fileSuffix==="otf"||yt.fileSuffix==="ttf"||yt.fileSuffix==="woff")yt.fileType="font",a.onload=cd,a.readAsArrayBuffer(r);else if(yt.fileSuffix==="svg")yt.fileType="svg",a.onload=Td,a.readAsText(r);else if(yt.fileSuffix==="txt")yt.fileType="project",a.onload=T1,a.readAsText(r);else if(yt.fileSuffix==="gs2")yt.fileType="project",a.onload=T1,a.readAsText(r);else return ur(`
			Unrecognized file type (.${yt.fileSuffix}).
			Try loading a Glyphr Studio Project file, or a font file.
			[FR1]
		`)}function cd(){var r;const t=this.result;let e=!1;try{e=Cn.parse(t)}catch(n){return ur(`
			Font file could not be read. [FF0]
			<hr>
			${n.message}
		`)}if(e)if((r=e==null?void 0:e.glyphs)!=null&&r.length)yt.content=e;else return ur("Font file does not have any glyph data. [FF1]");ei(yt)}function Td(){let t=this.result,e;try{t=t.replace(/&#x/g,"0x"),e=RI(t)}catch(n){return ur(`
			SVG file could not be read. [SVG0]
			<hr>
			${n.message}
		`)}let r=Xo(e,"font");if(r)yt.content=r;else return ur(`
			The SVG file you tried to load was not a SVG Font file.
			See Glyphr Studio help for more information. [SVG1]`);ei(yt)}function T1(){var a,o,s;const t=this.result;let e;try{e=JSON.parse(t)}catch(x){return ur(`
			The file could not be read. Expecting a Glyphr Studio Project file
			in JSON format. [PF0]
			<hr>
			${x.message}
		`)}if(!e.settings&&!e.projectsettings)return ur(`
		The provided text file is missing project settings.
		It may not be a Glyphr Studio Project file. [PF1]
		`);if(!((o=(a=e==null?void 0:e.settings)==null?void 0:a.project)!=null&&o.latestVersion)&&!((s=e==null?void 0:e.projectsettings)!=null&&s.versionnum))return ur(`
			The provided text file has no version information associated with it.
			It may not be a Glyphr Studio Project file. [PF2]
		`);let r=ul(e);if(!r)return ur(`
			The version information could not be read for the provided project file. [PF3]
		`);let n=Yi(rt().version);if(I1(n,r))return ur(`
			This Glyphr Studio project file was created with a future version of
			Glyphr Studio (0_o) As with most software, Glyphr Studio is not forwards-compatible. [PF4]
		`);if(I1(r,[1,13,2]))return ur(`
			Only Glyphr Studio Project files with version 1.13.2 and above can be
			imported into Glyphr Studio v2. For versions 1.13.1 and below, open and re-save
			the project file with Glyphr Studio v1 App (which will update it). [PF5]
		`);yt.content=e,ei(yt)}function ul(t){var r,n,a;let e=Yi((r=t==null?void 0:t.projectsettings)==null?void 0:r.versionnum);return e||(e=Yi((a=(n=t==null?void 0:t.settings)==null?void 0:n.project)==null?void 0:a.latestVersion)),e}function ur(t){return yt.errorMessage=t,console.warn(t.replace(/\s\s+/g," ")),ei(yt),!1}function I1(t,e){Array.isArray(e)&&(e={major:e[0],minor:e[1],patch:e[2]});let r="";return t.major<e.major?r="major":t.major===e.major&&(t.minor<e.minor?r="minor":t.minor===e.minor&&t.patch<e.patch&&(r="patch")),r}function Yi(t){if(!t)return!1;const e=t.split("-"),r=e[0].split(".");if(r.length!==3)return!1;const n={major:parseInt(r[0]),minor:parseInt(r[1]),patch:parseInt(r[2])};return e[1]&&(n.preRelease=e[1]||!1),n}function Id(t){const e=(t==null?void 0:t.major)||"0",r=(t==null?void 0:t.minor)||"0",n=(t==null?void 0:t.patch)||"0",a=t==null?void 0:t.preRelease;let o=`${e}.${r}.${n}`;return a&&(o=`${o}-${a}`),o}function Ca(t){var o,s,x;typeof t=="string"&&(t=JSON.parse(t)),t||(t=new Un({}));const e=ul(t);e.major===1&&(t=dd(t));const r=rt();t.settings.project.latestVersion=r.version,t.settings.project.initialVersion||(t.settings.project.initialVersion=Id(e));const n=new Un(t),a=(x=(s=(o=n==null?void 0:n.settings)==null?void 0:o.app)==null?void 0:s.guides)==null?void 0:x.systemGuides;if(a){const L=J();L.systemGuides={ascent:a.includes("ascent"),capHeight:a.includes("capHeight"),xHeight:a.includes("xHeight"),baseline:a.includes("baseline"),descent:a.includes("descent"),leftSide:a.includes("leftSide"),rightSide:a.includes("rightSide")}}return n}function dd(t){const e=new Un({}),r=t.projectsettings.defaultlsb,n=t.projectsettings.defaultrsb;Object.keys(t.glyphs).forEach(Y=>{const w=Xn(Y);e.glyphs[w]=H0(t.glyphs[Y],w,r,n)}),Object.keys(t.ligatures).forEach(Y=>{const w=Xn(Y),V=Rr(Y);if(V!==!1){let _=V.split("").map(Yr);e.ligatures[w]=H0(t.ligatures[Y],w,r,n),e.ligatures[w].objType="Ligature",e.ligatures[w].gsub=_}}),Object.keys(t.components).forEach(Y=>{const w=Xn(Y);e.components[w]=H0(t.components[Y],w,r,n),e.components[w].objType="Component",e.components[w].advanceWidth=!1}),Object.keys(t.kerning).forEach(Y=>{const w=Xn(Y),V=t.kerning[Y];e.kerning[w]=new en({value:V.value,leftGroup:V.leftgroup.map(_=>tr(_)),rightGroup:V.rightgroup.map(_=>tr(_))})});const a=e.settings.app,o=e.settings.project.characterRanges,s=e.settings.app.guides,x=e.settings.font,L=t.projectsettings,I=t.projectsettings.glyphrange,c=t.projectsettings.guides,C=t.projectsettings.colors,R=t.metadata;e.settings.project.name=L.name||"My Font";const g={basicLatin:{begin:32,end:127,name:"Basic Latin"},latinSupplementControls:{begin:128,end:159,name:"Latin Supplement Controls"},latinSupplement:{begin:160,end:255,name:"Latin Supplement"},latinExtendedA:{begin:256,end:383,name:"Latin Extended A"},latinExtendedB:{begin:384,end:591,name:"Latin Extended B"}};return I.basiclatin&&o.push(g.basicLatin),I.latinsupplement&&o.push(g.latinSupplement),I.latinextendeda&&o.push(g.latinExtendedA),I.latinextendedb&&o.push(g.latinExtendedB),I.custom.length&&I.custom.forEach(Y=>o.push(Y)),a.stopPageNavigation=L.stoppagenavigation||!0,a.formatSaveFile=L.formatsavefile||!0,a.contextCharacters.showGuides=L.showcontextglyphguides||!0,a.contextCharacters.transparency=C.contextglyphtransparency||90,s.systemTransparency=C.systemguidetransparency||70,s.customTransparency=C.systemguidetransparency||70,Object.keys(c).forEach(Y=>{let w=c[Y];w.editable&&s.custom.push(new Ro({angle:w.type==="horizontal"?90:0,location:w.location,name:w.name,color:w.color,visible:w.visible}))}),x.family=R.font_family||"My Font",x.style=R.font_style||"normal",x.panose=R.panose_1||"2 0 0 0 0 0 0 0 0 0",x.upm=L.upm||1e3,x.ascent=L.ascent||700,x.descent=L.descent||-300,x.capHeight=L.capHeight||675,x.xHeight=L.xHeight||400,x.lineGap=L.lineGap||250,x.italicAngle=L.italicAngle||0,x.overshoot=L.overshoot||10,x.designer=R.designer||"",x.designerURL=R.designerURL||"",x.manufacturer=R.manufacturer||"",x.manufacturerURL=R.manufacturerURL||"",x.license=R.license||"",x.licenseURL=R.licenseURL||"",x.version=R.version||"",x.description=R.description||"",x.copyright=R.copyright||"",x.trademark=R.trademark||"",x.variant=R.font_variant||"normal",x.weight=R.font_weight||400,x.stretch=R.font_stretch||"normal",x.stemv=R.stemv||0,x.stemh=R.stemh||0,x.slope=R.slope||0,x.underlinePosition=R.underline_position||-50,x.underlineThickness=R.underline_thickness||10,x.strikethroughPosition=R.strikethrough_position||300,x.strikethrough_thickness=R.strikethrough_thickness||10,x.overlinePosition=R.overline_position||750,x.overlineThickness=R.overline_thickness||10,e}function H0(t,e,r=0,n=0){const a=new it({id:e,parent:xe(),advanceWidth:t.glyphwidth,ratioLock:t.ratiolock,usedIn:t.usedin.map(Xn),contextCharacters:t.contextglyphs});let o;if(t.shapes.forEach(s=>{s.path?(o=ud(s,a),a.addOneShape(o)):(o=Sd(s),a.addOneShape(o))}),t.isautowide){const s=t.leftsidebearing||r,x=t.rightsidebearing||n;a.leftSideBearing=s,a.rightSideBearing=x}return a}function ud(t,e){const r=new Ar;return r.parent=e,r.name=t.name,r.xLock=t.xlock,r.yLock=t.ylock,r.wLock=t.wlock,r.hLock=t.hlock,r.ratioLock=t.ratiolock,t.path&&t.path.pathpoints.forEach(n=>{r.pathPoints.push(pd(n,r))}),r}function pd(t,e){const r=new _t;return r.parent=e,r.p=new we({coord:t.P,type:"p",parent:r}),r.h1=new we({coord:t.H1,type:"h1",use:t.useh1,parent:r}),r.h2=new we({coord:t.H2,type:"h2",use:t.useh2,parent:r}),r}function Sd(t){const e=new Qr;return e.link=Xn(t.link),e.translateX=t.translatex,e.translateY=t.translatey,e.resizeWidth=t.scalew,e.resizeHeight=t.scaleh,e.isFlippedNS=t.flipns,e.isFlippedEW=t.flipew,e.reverseWinding=t.reversewinding,e.rotation=t.rotation,e.rotateFirst=t.rotatefirst,e}function Xn(t){let e="";t.startsWith("com")&&(e=`comp-${t.split("com")[1]}`),t.startsWith("kern")&&(e=`kern-${t.split("kern")[1]}`),t.startsWith("id")&&(e=`kern-${t.split("id")[1]}`);const r=Rr(t);return r!==!1&&r.length>1&&(e=$a(r)||""),r!==!1&&r.length===1&&(e=`glyph-${tr(t)}`),e}const Cd=`{\r
  "settings": {\r
    "project": {\r
      "name": "Boolean Test Project",\r
      "latestVersion": "2.1.4",\r
      "initialVersion": "2.1.4",\r
      "id": "g2_BOOLTEST",\r
      "characterRanges": [\r
        {\r
          "name": "Test Range",\r
          "begin": "0x41",\r
          "end": "0x7A"\r
        },\r
        {\r
          "name": "Basic Latin",\r
          "begin": "0x20",\r
          "end": "0x7F"\r
        }\r
      ]\r
    },\r
    "app": {\r
      "stopPageNavigation": true,\r
      "formatSaveFile": true,\r
      "saveLivePreviews": true,\r
      "autoSave": true,\r
      "savePreferences": false,\r
      "unlinkComponentInstances": true,\r
      "showNonCharPoints": false,\r
      "itemChooserPageSize": 256,\r
      "previewText": false,\r
      "exportLigatures": true,\r
      "exportKerning": true,\r
      "moveShapesOnSVGDragDrop": false,\r
      "guides": {\r
        "drawGuidesOnTop": false,\r
        "systemShowGuides": true,\r
        "systemShowLabels": false,\r
        "systemTransparency": 70,\r
        "systemGuides": [\r
          "baseline",\r
          "leftSide",\r
          "rightSide"\r
        ],\r
        "customShowGuides": true,\r
        "customShowLabels": false,\r
        "customTransparency": 70,\r
        "custom": []\r
      },\r
      "contextCharacters": {\r
        "showCharacters": false,\r
        "characterTransparency": 20,\r
        "showGuides": true,\r
        "guidesTransparency": 70\r
      },\r
      "livePreviews": [\r
        {\r
          "fontSize": 118,\r
          "text": "the quick brown fox jumps over a lazy dog"\r
        }\r
      ]\r
    },\r
    "font": {\r
      "family": "Boolean Test Project",\r
      "style": "Regular",\r
      "version": "1.0",\r
      "description": "",\r
      "panose": "0 0 0 0 0 0 0 0 0 0",\r
      "upm": 2048,\r
      "ascent": 1550,\r
      "descent": -440,\r
      "capHeight": 1480,\r
      "xHeight": 1100,\r
      "overshoot": 30,\r
      "lineGap": 58,\r
      "italicAngle": 0,\r
      "designer": "",\r
      "designerURL": "",\r
      "manufacturer": "",\r
      "manufacturerURL": "",\r
      "license": "",\r
      "licenseURL": "",\r
      "copyright": "",\r
      "trademark": "",\r
      "variant": "normal",\r
      "weight": 400,\r
      "stretch": "normal",\r
      "stemv": 0,\r
      "stemh": 0,\r
      "slope": 0,\r
      "underlinePosition": -50,\r
      "underlineThickness": 10,\r
      "strikethroughPosition": 300,\r
      "strikethroughThickness": 10,\r
      "overlinePosition": 750,\r
      "overlineThickness": 10\r
    }\r
  },\r
  "glyphs": {\r
    "glyph-0x41": {\r
      "id": "glyph-0x41",\r
      "advanceWidth": 900,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 800}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 800}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 800}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 800}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 800}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 800}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 300}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 300}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 300}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 300}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 300}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 300}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x20": {\r
      "id": "glyph-0x20",\r
      "advanceWidth": 200\r
    },\r
    "glyph-0x42": {\r
      "id": "glyph-0x42",\r
      "advanceWidth": 1300,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 400,"y": 900}},\r
              "h1": {"coord": {"x": 367.381974248927,"y": 900}, "use": false},\r
              "h2": {"coord": {"x": 432.618025751073,"y": 900}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 900,"y": 900}},\r
              "h1": {"coord": {"x": 867.3819742489271,"y": 900}, "use": false},\r
              "h2": {"coord": {"x": 932.618025751073,"y": 900}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 900,"y": 400}},\r
              "h1": {"coord": {"x": 867.3819742489271,"y": 400}, "use": false},\r
              "h2": {"coord": {"x": 932.618025751073,"y": 400}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 400,"y": 400}},\r
              "h1": {"coord": {"x": 367.381974248927,"y": 400}, "use": false},\r
              "h2": {"coord": {"x": 432.618025751073,"y": 400}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy 2)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 1200}},\r
              "h1": {"coord": {"x": 667.381974248927,"y": 1200}, "use": false},\r
              "h2": {"coord": {"x": 732.618025751073,"y": 1200}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1200,"y": 1200}},\r
              "h1": {"coord": {"x": 1167.381974248928,"y": 1200}, "use": false},\r
              "h2": {"coord": {"x": 1232.6180257510737,"y": 1200}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1200,"y": 700}},\r
              "h1": {"coord": {"x": 1167.381974248928,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 1232.6180257510737,"y": 700}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 700}},\r
              "h1": {"coord": {"x": 667.381974248927,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 732.618025751073,"y": 700}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x43": {\r
      "id": "glyph-0x43",\r
      "advanceWidth": 1050,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 750}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 750}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 750}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 750}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 750}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 750}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 250}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 250}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 250}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 950}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 950}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 950}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 950}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 950}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 950}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 450}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 450}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 450}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 450}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy 2)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 600}},\r
              "h1": {"coord": {"x": 417.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 482.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 950,"y": 600}},\r
              "h1": {"coord": {"x": 917.3819742489262,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 982.6180257510722,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 950,"y": 100}},\r
              "h1": {"coord": {"x": 917.3819742489262,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 982.6180257510722,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 100}},\r
              "h1": {"coord": {"x": 417.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 482.6180257510729,"y": 100}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x44": {\r
      "id": "glyph-0x44",\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 600}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 600}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 100}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 100}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 100}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x45": {\r
      "id": "glyph-0x45",\r
      "shapes": [\r
        {\r
          "name": "Oval 1",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.7510373443983,"y": 650}},\r
              "h1": {"coord": {"x": 184.13858921161824,"y": 650}},\r
              "h2": {"coord": {"x": 515.3634854771783,"y": 650}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 650,"y": 350.2746987951807}},\r
              "h1": {"coord": {"x": 650,"y": 515.8192771084338}},\r
              "h2": {"coord": {"x": 650,"y": 184.73012048192766}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.7510373443983,"y": 50}},\r
              "h1": {"coord": {"x": 515.8614107883817,"y": 50}},\r
              "h2": {"coord": {"x": 183.6406639004149,"y": 50}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 50,"y": 350.2746987951807}},\r
              "h1": {"coord": {"x": 50,"y": 184.1807228915663}},\r
              "h2": {"coord": {"x": 50,"y": 516.3686746987951}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Oval 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 899.8147208121827,"y": 600}},\r
              "h1": {"coord": {"x": 761.5380710659898,"y": 600}},\r
              "h2": {"coord": {"x": 1038.0913705583757,"y": 600}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 1150,"y": 349.9}},\r
              "h1": {"coord": {"x": 1150,"y": 488}},\r
              "h2": {"coord": {"x": 1150,"y": 211.8}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 899.8147208121827,"y": 100}},\r
              "h1": {"coord": {"x": 1038.46192893401,"y": 100}},\r
              "h2": {"coord": {"x": 761.1675126903554,"y": 100}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 650,"y": 349.9}},\r
              "h1": {"coord": {"x": 650,"y": 212}},\r
              "h2": {"coord": {"x": 650,"y": 487.8}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x46": {\r
      "id": "glyph-0x46",\r
      "advanceWidth": 700,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 250}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 250}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 450}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 450}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 450}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 450}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x47": {\r
      "id": "glyph-0x47",\r
      "advanceWidth": 1100,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 250}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 250}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 450}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 450}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 450}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 450}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 500,"y": 1000}},\r
              "h1": {"coord": {"x": 467.3820598006646,"y": 1000}, "use": false},\r
              "h2": {"coord": {"x": 532.6179401993357,"y": 1000}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1000,"y": 1000}},\r
              "h1": {"coord": {"x": 967.3820598006632,"y": 1000}, "use": false},\r
              "h2": {"coord": {"x": 1032.6179401993352,"y": 1000}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1000,"y": 500}},\r
              "h1": {"coord": {"x": 967.3820598006632,"y": 500}, "use": false},\r
              "h2": {"coord": {"x": 1032.6179401993352,"y": 500}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 500,"y": 500}},\r
              "h1": {"coord": {"x": 467.3820598006646,"y": 500}, "use": false},\r
              "h2": {"coord": {"x": 532.6179401993357,"y": 500}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy 2)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 650}},\r
              "h1": {"coord": {"x": 663.0469102990019,"y": 650}, "use": false},\r
              "h2": {"coord": {"x": 636.9527906976746,"y": 650}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 650}},\r
              "h1": {"coord": {"x": 863.0469102990018,"y": 650}, "use": false},\r
              "h2": {"coord": {"x": 836.9521594684384,"y": 650}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 850}},\r
              "h1": {"coord": {"x": 863.0469102990018,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 836.9521594684384,"y": 850}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 850}},\r
              "h1": {"coord": {"x": 663.0469102990019,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 636.9527906976746,"y": 850}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x48": {\r
      "id": "glyph-0x48",\r
      "advanceWidth": 950,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 250}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 250}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 450}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 450}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 450}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 450}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 850}},\r
              "h1": {"coord": {"x": 317.3820598006646,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 382.61794019933575,"y": 850}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 850}},\r
              "h1": {"coord": {"x": 817.3820598006625,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 882.6179401993343,"y": 850}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 350}},\r
              "h1": {"coord": {"x": 817.3820598006625,"y": 350}, "use": false},\r
              "h2": {"coord": {"x": 882.6179401993343,"y": 350}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 350}},\r
              "h1": {"coord": {"x": 317.3820598006646,"y": 350}, "use": false},\r
              "h2": {"coord": {"x": 382.61794019933575,"y": 350}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy 2)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 500,"y": 500}},\r
              "h1": {"coord": {"x": 513.0469102990012,"y": 500}, "use": false},\r
              "h2": {"coord": {"x": 486.952790697674,"y": 500}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 500}},\r
              "h1": {"coord": {"x": 713.046910299001,"y": 500}, "use": false},\r
              "h2": {"coord": {"x": 686.9521594684377,"y": 500}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 700}},\r
              "h1": {"coord": {"x": 713.046910299001,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 686.9521594684377,"y": 700}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 500,"y": 700}},\r
              "h1": {"coord": {"x": 513.0469102990012,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 486.952790697674,"y": 700}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x49": {\r
      "id": "glyph-0x49",\r
      "advanceWidth": 1046.1516604685944,\r
      "shapes": [\r
        {\r
          "name": "Oval 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.8147208121827,"y": 600}},\r
              "h1": {"coord": {"x": 211.5380710659898,"y": 600}},\r
              "h2": {"coord": {"x": 488.0913705583756,"y": 600}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 600,"y": 349.9}},\r
              "h1": {"coord": {"x": 600,"y": 488}},\r
              "h2": {"coord": {"x": 600,"y": 211.8}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.8147208121827,"y": 100}},\r
              "h1": {"coord": {"x": 488.46192893401013,"y": 100}},\r
              "h2": {"coord": {"x": 211.1675126903553,"y": 100}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 100,"y": 349.9}},\r
              "h1": {"coord": {"x": 100,"y": 212}},\r
              "h2": {"coord": {"x": 100,"y": 487.8}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 492.51162790697674,"y": 651.8272425249173}},\r
              "h1": {"coord": {"x": 196.83056478405263,"y": 226.57807308970018}},\r
              "h2": {"coord": {"x": 788.1926910299009,"y": 1077.0764119601345}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 695.1694352159468,"y": 286.3787375415282}},\r
              "h1": {"coord": {"x": 1230.0531561461796,"y": 312.95681063122925}},\r
              "h2": {"coord": {"x": 160.285714285714,"y": 259.8006644518272}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 721.747508305648,"y": 555.4817275747511}},\r
              "h1": {"coord": {"x": 794.8372093023256,"y": 469.10299003322325}},\r
              "h2": {"coord": {"x": 648.6578073089704,"y": 641.8604651162789}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4A": {\r
      "id": "glyph-0x4A",\r
      "advanceWidth": 1009.8512753082377,\r
      "shapes": [\r
        {\r
          "name": "Oval 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480.29703204063384,"y": 600}},\r
              "h1": {"coord": {"x": 342.02038229444094,"y": 600}},\r
              "h2": {"coord": {"x": 618.5736817868267,"y": 600}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 730.4823112284512,"y": 349.9}},\r
              "h1": {"coord": {"x": 730.4823112284512,"y": 488}},\r
              "h2": {"coord": {"x": 730.4823112284512,"y": 211.8}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480.29703204063384,"y": 100}},\r
              "h1": {"coord": {"x": 618.9442401624613,"y": 100}},\r
              "h2": {"coord": {"x": 341.6498239188064,"y": 100}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 230.48231122845112,"y": 349.9}},\r
              "h1": {"coord": {"x": 230.48231122845112,"y": 212}},\r
              "h2": {"coord": {"x": 230.48231122845112,"y": 487.8}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 249.00961223921098,"y": 456.257362994337}},\r
              "h1": {"coord": {"x": -376.5604085008617,"y": 284.80123931528044}},\r
              "h2": {"coord": {"x": 888.7830427088813,"y": 624.3717836576856}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 443.62941708584185,"y": 248.6604326209002}},\r
              "h1": {"coord": {"x": 1370.650893521688,"y": 50.99549041624297}},\r
              "h2": {"coord": {"x": -483.1573382248501,"y": 447.3200572437637}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 778.6209306829899,"y": 336.0498216025141}},\r
              "h1": {"coord": {"x": 885.2025229186208,"y": 246.26987211946928}},\r
              "h2": {"coord": {"x": 662.0642385057556,"y": 428.6907057837829}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4B": {\r
      "id": "glyph-0x4B",\r
      "advanceWidth": 1482.790697645294,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 3,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 229.56810631229249,"y": 728.2392026578071}},\r
              "h1": {"coord": {"x": 179.56810631229246,"y": 728.2392026578071}, "use": false},\r
              "h2": {"coord": {"x": 279.56810631229246,"y": 728.2392026578071}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 628.5714285714288}},\r
              "h1": {"coord": {"x": 50,"y": 628.5714285714288}, "use": false},\r
              "h2": {"coord": {"x": 150,"y": 628.5714285714288}, "use": false}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 913.9534883720931,"y": 63.78737541528254}},\r
              "h1": {"coord": {"x": 448.83720930232573,"y": 60.46511627906992}},\r
              "h2": {"coord": {"x": 1379.0697674418607,"y": 67.10963455149516}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 1382.392026578073,"y": 449.16943521594703}},\r
              "h1": {"coord": {"x": 1385.7142857142856,"y": 246.51162790697663}},\r
              "h2": {"coord": {"x": 1379.0697674418604,"y": 651.8272425249174}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 997.0099667774085,"y": 834.5514950166114}},\r
              "h1": {"coord": {"x": 1262.7906976744182,"y": 834.5514950166115}},\r
              "h2": {"coord": {"x": 731.2292358803988,"y": 834.5514950166113}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119.9335548172757,"y": 209.9667774086379}},\r
              "h1": {"coord": {"x": 69.9335548172757,"y": 209.9667774086379}, "use": false},\r
              "h2": {"coord": {"x": 169.93355481727568,"y": 209.9667774086379}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262.79069767441865,"y": 50.49833887043204}},\r
              "h1": {"coord": {"x": 212.79069767441862,"y": 50.49833887043204}, "use": false},\r
              "h2": {"coord": {"x": 312.79069767441865,"y": 50.49833887043204}, "use": false}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 997.0099667774087,"y": 651.8272425249171}},\r
              "h1": {"coord": {"x": 787.7076411960135,"y": 658.4717607973423}},\r
              "h2": {"coord": {"x": 1206.312292358804,"y": 645.1827242524919}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 1236.2126245847173,"y": 429.2358803986712}},\r
              "h1": {"coord": {"x": 1239.53488372093,"y": 528.9036544850501}},\r
              "h2": {"coord": {"x": 1232.8903654485046,"y": 329.56810631229234}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 894.0199335548174,"y": 200}},\r
              "h1": {"coord": {"x": 1149.8338870431894,"y": 206.6445182724251}},\r
              "h2": {"coord": {"x": 638.2059800664454,"y": 193.3554817275749}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 1",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 400}},\r
              "h1": {"coord": {"x": 814.1666666666666,"y": 400}, "use": false},\r
              "h2": {"coord": {"x": 885.8333333333334,"y": 400}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 950,"y": 400}},\r
              "h1": {"coord": {"x": 914.1666666666666,"y": 400}, "use": false},\r
              "h2": {"coord": {"x": 985.8333333333333,"y": 400}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 950,"y": 300}},\r
              "h1": {"coord": {"x": 914.1666666666666,"y": 300}, "use": false},\r
              "h2": {"coord": {"x": 985.8333333333333,"y": 300}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 300}},\r
              "h1": {"coord": {"x": 814.1666666666666,"y": 300}, "use": false},\r
              "h2": {"coord": {"x": 885.8333333333334,"y": 300}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4C": {\r
      "id": "glyph-0x4C",\r
      "advanceWidth": 700,\r
      "shapes": [\r
        {\r
          "name": "Oval 1",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.7510373443983,"y": 650}},\r
              "h1": {"coord": {"x": 184.13858921161824,"y": 650}},\r
              "h2": {"coord": {"x": 515.3634854771783,"y": 650}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 650,"y": 350.2746987951807}},\r
              "h1": {"coord": {"x": 650,"y": 515.8192771084338}},\r
              "h2": {"coord": {"x": 650,"y": 184.73012048192766}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.7510373443983,"y": 50}},\r
              "h1": {"coord": {"x": 515.8614107883817,"y": 50}},\r
              "h2": {"coord": {"x": 183.6406639004149,"y": 50}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 50,"y": 350.2746987951807}},\r
              "h1": {"coord": {"x": 50,"y": 184.1807228915663}},\r
              "h2": {"coord": {"x": 50,"y": 516.3686746987951}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Oval 0",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 150,"y": 349.92}},\r
              "h1": {"coord": {"x": 150,"y": 460.24}},\r
              "h2": {"coord": {"x": 150,"y": 239.6}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.85177664974606,"y": 150}},\r
              "h1": {"coord": {"x": 238.93401015228432,"y": 150}},\r
              "h2": {"coord": {"x": 460.7695431472078,"y": 150}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 550,"y": 349.92}},\r
              "h1": {"coord": {"x": 550,"y": 239.44}},\r
              "h2": {"coord": {"x": 550,"y": 460.4}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.85177664974606,"y": 550}},\r
              "h1": {"coord": {"x": 460.4730964467003,"y": 550}},\r
              "h2": {"coord": {"x": 239.2304568527918,"y": 550}}\r
            }\r
          ],\r
          "transformOrigin": "middle-center"\r
        },\r
        {\r
          "name": "Rectangle 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 700}},\r
              "h1": {"coord": {"x": 249.5921693898437,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 350.4078306101563,"y": 700}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 400,"y": 700}},\r
              "h1": {"coord": {"x": 349.5921693898437,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 450.40783061015634,"y": 700}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 400,"y": 0}},\r
              "h1": {"coord": {"x": 349.5921693898437,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 450.40783061015634,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 0}},\r
              "h1": {"coord": {"x": 249.5921693898437,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 350.4078306101563,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4D": {\r
      "id": "glyph-0x4D",\r
      "advanceWidth": 1293.7111040495865,\r
      "shapes": [\r
        {\r
          "name": "Oval 0",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 426.498769569797,"y": 369.13910391925504}},\r
              "h1": {"coord": {"x": 426.498769569797,"y": 517.6556402556512}},\r
              "h2": {"coord": {"x": 426.498769569797,"y": 220.6225675828594}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 676.3134903819797,"y": 100}},\r
              "h1": {"coord": {"x": 537.6662822601522,"y": 100}},\r
              "h2": {"coord": {"x": 814.9606985038072,"y": 100}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 926.498769569797,"y": 369.13910391925504}},\r
              "h1": {"coord": {"x": 926.498769569797,"y": 220.40717014074713}},\r
              "h2": {"coord": {"x": 926.498769569797,"y": 517.8710376977633}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 676.3134903819797,"y": 638.4936052806227}},\r
              "h1": {"coord": {"x": 814.5901401281726,"y": 638.4936052806227}},\r
              "h2": {"coord": {"x": 538.0368406357868,"y": 638.4936052806227}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 280.7738858488668,"y": 496.8951039199978}},\r
              "h1": {"coord": {"x": -468.36201388153097,"y": 179.05473751658434}},\r
              "h2": {"coord": {"x": 1057.3545873438309,"y": 814.7354703234118}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 616.4986769334952,"y": 335.49202893012404}},\r
              "h1": {"coord": {"x": 1819.5122629684727,"y": 355.8325000152958}},\r
              "h2": {"coord": {"x": -586.5155958787078,"y": 316.1024019248308}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 1005.0496488205681,"y": 501.35268950272155}},\r
              "h1": {"coord": {"x": 1159.8596082215054,"y": 436.8068372670515}},\r
              "h2": {"coord": {"x": 831.085708932448,"y": 566.3463066024372}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Oval 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 484.3204494618038,"y": 779.4019933554814}},\r
              "h1": {"coord": {"x": 336.4628195208687,"y": 779.4019933554814}},\r
              "h2": {"coord": {"x": 632.1780794027391,"y": 779.4019933554814}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 751.8406887409622,"y": 529.3019933554821}},\r
              "h1": {"coord": {"x": 751.8406887409622,"y": 667.4019933554814}},\r
              "h2": {"coord": {"x": 751.8406887409622,"y": 391.2019933554827}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 484.3204494618038,"y": 279.4019933554817}},\r
              "h1": {"coord": {"x": 632.5743132084958,"y": 279.4019933554817}},\r
              "h2": {"coord": {"x": 336.06658571511275,"y": 279.4019933554817}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 217.1964439884016,"y": 529.3019933554821}},\r
              "h1": {"coord": {"x": 217.1964439884016,"y": 391.4019933554819}},\r
              "h2": {"coord": {"x": 217.1964439884016,"y": 667.2019933554823}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 832.2994340216236,"y": 734.8837209302325}},\r
              "h1": {"coord": {"x": 759.2097330249464,"y": 821.2624584717603}},\r
              "h2": {"coord": {"x": 905.3891350183007,"y": 648.5049833887047}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 805.7213609319226,"y": 465.7807308970102}},\r
              "h1": {"coord": {"x": 270.8376400016903,"y": 439.2026578073091}},\r
              "h2": {"coord": {"x": 1340.605081862155,"y": 492.3588039867113}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 603.0635536229532,"y": 831.2292358803987}},\r
              "h1": {"coord": {"x": 898.7446167458766,"y": 1256.4784053156172}},\r
              "h2": {"coord": {"x": 307.3824905000299,"y": 405.9800664451802}}\r
            }\r
          ]\r
        }\r
      ]\r
    }\r
  },\r
  "ligatures": {},\r
  "components": {},\r
  "kerning": {}\r
}`,io=`{\r
  "settings": {\r
    "project": {\r
      "name": "Oblegg",\r
      "latestVersion": "2.1.2",\r
      "initialVersion": "2.1.2",\r
      "id": "g2_OBLEGG2",\r
      "characterRanges": [\r
        {\r
          "name": "Basic Latin",\r
          "begin": "0x20",\r
          "end": "0x7F"\r
        },\r
        {\r
          "name": "General Punctuation",\r
          "begin": "0x2000",\r
          "end": "0x206F"\r
        }\r
      ]\r
    },\r
    "app": {\r
      "savePreferences": false,\r
      "stopPageNavigation": true,\r
      "autoSave": true,\r
      "showNonCharPoints": false,\r
      "itemChooserPageSize": 256,\r
      "formatSaveFile": true,\r
      "moveShapesOnSVGDragDrop": true,\r
      "guides": {\r
        "drawGuidesOnTop": false,\r
        "systemShowGuides": true,\r
        "systemShowLabels": false,\r
        "systemTransparency": 70,\r
        "systemGuides": [\r
          "baseline",\r
          "leftSide",\r
          "rightSide"\r
        ],\r
        "customShowGuides": true,\r
        "customShowLabels": false,\r
        "customTransparency": 70,\r
        "custom": []\r
      },\r
      "contextCharacters": {\r
        "showCharacters": true,\r
        "characterTransparency": 20,\r
        "showGuides": true,\r
        "guidesTransparency": 70\r
      },\r
      "saveLivePreviews": true,\r
      "livePreviews": [\r
        {\r
          "text": "the five boxing wizards jump quickly"\r
        },\r
        {\r
          "fontSize": 128,\r
          "text": "pack my box with five dozen liquor waffle coffins."\r
        },\r
        {\r
          "fontSize": 28,\r
          "text": "{{scowl_10_short}}"\r
        }\r
      ],\r
      "previewText": false\r
    },\r
    "font": {\r
      "family": "Oblegg",\r
      "style": "Regular",\r
      "version": "1.0",\r
      "description": "Test font for Glyphr Studio v2",\r
      "panose": "0 0 0 0 0 0 0 0 0 0",\r
      "upm": 2048,\r
      "ascent": 1490,\r
      "descent": -430,\r
      "capHeight": 1490,\r
      "xHeight": 1020,\r
      "overshoot": 20,\r
      "lineGap": 250,\r
      "italicAngle": 0,\r
      "designer": "Matt LaGrandeur",\r
      "designerURL": "mattlag.com",\r
      "manufacturer": "Matt LaGrandeur",\r
      "manufacturerURL": "mattlag.com",\r
      "license": "OFL",\r
      "licenseURL": "",\r
      "copyright": "2023",\r
      "trademark": "",\r
      "variant": "normal",\r
      "weight": 400,\r
      "stretch": "normal",\r
      "stemv": 0,\r
      "stemh": 0,\r
      "slope": 0,\r
      "underlinePosition": -50,\r
      "underlineThickness": 10,\r
      "strikethroughPosition": 300,\r
      "strikethroughThickness": 10,\r
      "overlinePosition": 750,\r
      "overlineThickness": 10\r
    }\r
  },\r
  "glyphs": {\r
    "glyph-0x41": {\r
      "id": "glyph-0x41",\r
      "advanceWidth": 1252,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 15,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1207,"y": 174}},\r
              "h1": {"coord": {"x": 1210,"y": 174}},\r
              "h2": {"coord": {"x": 1257,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1113,"y": 174}},\r
              "h1": {"coord": {"x": 1063,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1163,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 1316}},\r
              "h1": {"coord": {"x": 705,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1316}},\r
              "h1": {"coord": {"x": 750,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 803,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 805,"y": 1321}},\r
              "h1": {"coord": {"x": 805,"y": 1318}},\r
              "h2": {"coord": {"x": 855,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 805,"y": 1485}},\r
              "h1": {"coord": {"x": 755,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1490}},\r
              "h1": {"coord": {"x": 803,"y": 1490}},\r
              "h2": {"coord": {"x": 850,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 439,"y": 1490}},\r
              "h1": {"coord": {"x": 389,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 436,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 434,"y": 1485}},\r
              "h1": {"coord": {"x": 434,"y": 1488}},\r
              "h2": {"coord": {"x": 484,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 434,"y": 1321}},\r
              "h1": {"coord": {"x": 384,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 434,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 439,"y": 1316}},\r
              "h1": {"coord": {"x": 436,"y": 1316}},\r
              "h2": {"coord": {"x": 489,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 1316}},\r
              "h1": {"coord": {"x": 434,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 174}},\r
              "h1": {"coord": {"x": 76,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 176,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 289,"y": 174}},\r
              "h1": {"coord": {"x": 239,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 339,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 378,"y": 456}},\r
              "h1": {"coord": {"x": 328,"y": 456}, "use": false},\r
              "h2": {"coord": {"x": 428,"y": 456}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 851,"y": 456}},\r
              "h1": {"coord": {"x": 801,"y": 456}, "use": false},\r
              "h2": {"coord": {"x": 901,"y": 456}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 940,"y": 174}},\r
              "h1": {"coord": {"x": 890,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 990,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 174}},\r
              "h1": {"coord": {"x": 822,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 867,"y": 169}},\r
              "h1": {"coord": {"x": 867,"y": 172}},\r
              "h2": {"coord": {"x": 917,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 867,"y": 5}},\r
              "h1": {"coord": {"x": 817,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 867,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 0}},\r
              "h1": {"coord": {"x": 869,"y": 0}},\r
              "h2": {"coord": {"x": 922,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1207,"y": 0}},\r
              "h1": {"coord": {"x": 1157,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1210,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1212,"y": 5}},\r
              "h1": {"coord": {"x": 1212,"y": 2}},\r
              "h2": {"coord": {"x": 1262,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1212,"y": 169}},\r
              "h1": {"coord": {"x": 1162,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1212,"y": 172}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -4,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 432,"y": 630}},\r
              "h1": {"coord": {"x": 382,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 482,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 614,"y": 1211}},\r
              "h1": {"coord": {"x": 564,"y": 1211}, "use": false},\r
              "h2": {"coord": {"x": 664,"y": 1211}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 797,"y": 630}},\r
              "h1": {"coord": {"x": 747,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 630}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x42": {\r
      "id": "glyph-0x42",\r
      "advanceWidth": 1052,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 783}},\r
              "h1": {"coord": {"x": 978,"y": 686}},\r
              "h2": {"coord": {"x": 906,"y": 862}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 940,"y": 1058}},\r
              "h1": {"coord": {"x": 940,"y": 969}},\r
              "h2": {"coord": {"x": 940,"y": 1180}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 1490}},\r
              "h1": {"coord": {"x": 907,"y": 1483}},\r
              "h2": {"coord": {"x": 628,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 1490}},\r
              "h1": {"coord": {"x": 528,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 628,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1323}},\r
              "h1": {"coord": {"x": -10,"y": 1323}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1318}},\r
              "h1": {"coord": {"x": 42,"y": 1318}},\r
              "h2": {"coord": {"x": 95,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 1318}},\r
              "h1": {"coord": {"x": 100,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 172}},\r
              "h1": {"coord": {"x": 100,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 172}},\r
              "h1": {"coord": {"x": -5,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 167}},\r
              "h1": {"coord": {"x": 40,"y": 170}},\r
              "h2": {"coord": {"x": 90,"y": 167}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 628,"y": 0}},\r
              "h1": {"coord": {"x": 578,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 938,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1012,"y": 396}},\r
              "h1": {"coord": {"x": 1012,"y": 230}},\r
              "h2": {"coord": {"x": 1012,"y": 489}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 565,"y": 1318}},\r
              "h1": {"coord": {"x": 515,"y": 1318}},\r
              "h2": {"coord": {"x": 732,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 796,"y": 1058}},\r
              "h1": {"coord": {"x": 796,"y": 1225}},\r
              "h2": {"coord": {"x": 796,"y": 938}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 566,"y": 840}},\r
              "h1": {"coord": {"x": 708,"y": 840}},\r
              "h2": {"coord": {"x": 616,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 840}},\r
              "h1": {"coord": {"x": 272,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 1318}},\r
              "h1": {"coord": {"x": 272,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 1318}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 3",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 628,"y": 172}},\r
              "h1": {"coord": {"x": 774,"y": 172}},\r
              "h2": {"coord": {"x": 578,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 172}},\r
              "h1": {"coord": {"x": 272,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 665}},\r
              "h1": {"coord": {"x": 272,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 628,"y": 665}},\r
              "h1": {"coord": {"x": 578,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 799,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 864,"y": 396}},\r
              "h1": {"coord": {"x": 864,"y": 568}},\r
              "h2": {"coord": {"x": 864,"y": 273}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x43": {\r
      "id": "glyph-0x43",\r
      "advanceWidth": 1062,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 852,"y": 1256}},\r
              "h1": {"coord": {"x": 849,"y": 1256}},\r
              "h2": {"coord": {"x": 902,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1017,"y": 1256}},\r
              "h1": {"coord": {"x": 967,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 1020,"y": 1256}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 1261}},\r
              "h1": {"coord": {"x": 1022,"y": 1258}},\r
              "h2": {"coord": {"x": 1072,"y": 1261}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 1407}},\r
              "h1": {"coord": {"x": 972,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 1022,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 939,"y": 1490}},\r
              "h1": {"coord": {"x": 985,"y": 1490}},\r
              "h2": {"coord": {"x": 989,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 1490}},\r
              "h1": {"coord": {"x": 654,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 490,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 196,"y": 1230}},\r
              "h1": {"coord": {"x": 314,"y": 1400}},\r
              "h2": {"coord": {"x": 144,"y": 1155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 78,"y": 965}},\r
              "h1": {"coord": {"x": 104,"y": 1066}},\r
              "h2": {"coord": {"x": 53,"y": 870}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 657}},\r
              "h1": {"coord": {"x": 40,"y": 766}},\r
              "h2": {"coord": {"x": 40,"y": 431}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 207,"y": 159}},\r
              "h1": {"coord": {"x": 95,"y": 268}},\r
              "h2": {"coord": {"x": 317,"y": 52}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 0}},\r
              "h1": {"coord": {"x": 479,"y": 0}},\r
              "h2": {"coord": {"x": 754,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 939,"y": 0}},\r
              "h1": {"coord": {"x": 889,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 985,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 83}},\r
              "h1": {"coord": {"x": 1022,"y": 37}},\r
              "h2": {"coord": {"x": 1072,"y": 83}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 224}},\r
              "h1": {"coord": {"x": 972,"y": 224}, "use": false},\r
              "h2": {"coord": {"x": 1022,"y": 227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1017,"y": 229}},\r
              "h1": {"coord": {"x": 1020,"y": 229}},\r
              "h2": {"coord": {"x": 1067,"y": 229}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 852,"y": 229}},\r
              "h1": {"coord": {"x": 802,"y": 229}, "use": false},\r
              "h2": {"coord": {"x": 849,"y": 229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 224}},\r
              "h1": {"coord": {"x": 847,"y": 227}},\r
              "h2": {"coord": {"x": 897,"y": 224}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 172}},\r
              "h1": {"coord": {"x": 797,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 897,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 172}},\r
              "h1": {"coord": {"x": 654,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 350,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 657}},\r
              "h1": {"coord": {"x": 212,"y": 308}},\r
              "h2": {"coord": {"x": 212,"y": 847}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 337,"y": 1132}},\r
              "h1": {"coord": {"x": 256,"y": 1016}},\r
              "h2": {"coord": {"x": 423,"y": 1255}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 1318}},\r
              "h1": {"coord": {"x": 547,"y": 1318}},\r
              "h2": {"coord": {"x": 754,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 1318}},\r
              "h1": {"coord": {"x": 797,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 897,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 1261}},\r
              "h1": {"coord": {"x": 797,"y": 1261}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1258}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x44": {\r
      "id": "glyph-0x44",\r
      "advanceWidth": 1167,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 0}},\r
              "h1": {"coord": {"x": 413,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 688,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 960,"y": 159}},\r
              "h1": {"coord": {"x": 850,"y": 52}},\r
              "h2": {"coord": {"x": 1072,"y": 268}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1127,"y": 657}},\r
              "h1": {"coord": {"x": 1127,"y": 431}},\r
              "h2": {"coord": {"x": 1127,"y": 766}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1090,"y": 965}},\r
              "h1": {"coord": {"x": 1115,"y": 870}},\r
              "h2": {"coord": {"x": 1064,"y": 1066}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 971,"y": 1230}},\r
              "h1": {"coord": {"x": 1023,"y": 1155}},\r
              "h2": {"coord": {"x": 853,"y": 1400}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 1490}},\r
              "h1": {"coord": {"x": 677,"y": 1490}},\r
              "h2": {"coord": {"x": 513,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1323}},\r
              "h1": {"coord": {"x": -10,"y": 1323}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1318}},\r
              "h1": {"coord": {"x": 42,"y": 1318}},\r
              "h2": {"coord": {"x": 95,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 148,"y": 1318}},\r
              "h1": {"coord": {"x": 98,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 198,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 148,"y": 172}},\r
              "h1": {"coord": {"x": 98,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 198,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 172}},\r
              "h1": {"coord": {"x": -5,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 167}},\r
              "h1": {"coord": {"x": 40,"y": 170}},\r
              "h2": {"coord": {"x": 90,"y": 167}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 1318}},\r
              "h1": {"coord": {"x": 270,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 1318}},\r
              "h1": {"coord": {"x": 413,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 620,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 830,"y": 1132}},\r
              "h1": {"coord": {"x": 744,"y": 1255}},\r
              "h2": {"coord": {"x": 911,"y": 1016}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 955,"y": 657}},\r
              "h1": {"coord": {"x": 955,"y": 847}},\r
              "h2": {"coord": {"x": 955,"y": 308}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 172}},\r
              "h1": {"coord": {"x": 817,"y": 172}},\r
              "h2": {"coord": {"x": 513,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 172}},\r
              "h1": {"coord": {"x": 270,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 1318}},\r
              "h1": {"coord": {"x": 270,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x45": {\r
      "id": "glyph-0x45",\r
      "advanceWidth": 1001,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1232}},\r
              "h1": {"coord": {"x": 737,"y": 1232}, "use": false},\r
              "h2": {"coord": {"x": 787,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 792,"y": 1227}},\r
              "h1": {"coord": {"x": 789,"y": 1227}},\r
              "h2": {"coord": {"x": 842,"y": 1227}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": 1227}},\r
              "h1": {"coord": {"x": 906,"y": 1227}, "use": false},\r
              "h2": {"coord": {"x": 959,"y": 1227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 1232}},\r
              "h1": {"coord": {"x": 961,"y": 1229}},\r
              "h2": {"coord": {"x": 1011,"y": 1232}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 1490}},\r
              "h1": {"coord": {"x": 911,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1011,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 101,"y": 1316}},\r
              "h1": {"coord": {"x": 51,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 151,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 101,"y": 174}},\r
              "h1": {"coord": {"x": 51,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 151,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 0}},\r
              "h1": {"coord": {"x": 911,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1011,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 258}},\r
              "h1": {"coord": {"x": 911,"y": 258}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": 263}},\r
              "h1": {"coord": {"x": 959,"y": 263}},\r
              "h2": {"coord": {"x": 1006,"y": 263}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 792,"y": 263}},\r
              "h1": {"coord": {"x": 742,"y": 263}, "use": false},\r
              "h2": {"coord": {"x": 789,"y": 263}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 258}},\r
              "h1": {"coord": {"x": 787,"y": 261}},\r
              "h2": {"coord": {"x": 837,"y": 258}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 174}},\r
              "h1": {"coord": {"x": 737,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 837,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 174}},\r
              "h1": {"coord": {"x": 224,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 665}},\r
              "h1": {"coord": {"x": 224,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 583,"y": 665}},\r
              "h1": {"coord": {"x": 533,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 586,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 588,"y": 670}},\r
              "h1": {"coord": {"x": 588,"y": 667}},\r
              "h2": {"coord": {"x": 638,"y": 670}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 588,"y": 835}},\r
              "h1": {"coord": {"x": 538,"y": 835}, "use": false},\r
              "h2": {"coord": {"x": 588,"y": 838}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 583,"y": 840}},\r
              "h1": {"coord": {"x": 586,"y": 840}},\r
              "h2": {"coord": {"x": 633,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 840}},\r
              "h1": {"coord": {"x": 224,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 1316}},\r
              "h1": {"coord": {"x": 224,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1316}},\r
              "h1": {"coord": {"x": 737,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 837,"y": 1316}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x46": {\r
      "id": "glyph-0x46",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 174}},\r
              "h1": {"coord": {"x": 226,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 665}},\r
              "h1": {"coord": {"x": 226,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 665}},\r
              "h1": {"coord": {"x": 550,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 603,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 605,"y": 670}},\r
              "h1": {"coord": {"x": 605,"y": 667}},\r
              "h2": {"coord": {"x": 655,"y": 670}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 605,"y": 835}},\r
              "h1": {"coord": {"x": 555,"y": 835}, "use": false},\r
              "h2": {"coord": {"x": 605,"y": 838}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 840}},\r
              "h1": {"coord": {"x": 603,"y": 840}},\r
              "h2": {"coord": {"x": 650,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 840}},\r
              "h1": {"coord": {"x": 226,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 1316}},\r
              "h1": {"coord": {"x": 226,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 1316}},\r
              "h1": {"coord": {"x": 739,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 839,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 1232}},\r
              "h1": {"coord": {"x": 739,"y": 1232}, "use": false},\r
              "h2": {"coord": {"x": 789,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 1227}},\r
              "h1": {"coord": {"x": 791,"y": 1227}},\r
              "h2": {"coord": {"x": 844,"y": 1227}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 1227}},\r
              "h1": {"coord": {"x": 908,"y": 1227}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 1227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 1232}},\r
              "h1": {"coord": {"x": 963,"y": 1229}},\r
              "h2": {"coord": {"x": 1013,"y": 1232}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 1490}},\r
              "h1": {"coord": {"x": 913,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1013,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 1316}},\r
              "h1": {"coord": {"x": 53,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 174}},\r
              "h1": {"coord": {"x": 53,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 174}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x47": {\r
      "id": "glyph-0x47",\r
      "advanceWidth": 1299,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 830,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1084,"y": 128}},\r
              "h1": {"coord": {"x": 978,"y": 23}},\r
              "h2": {"coord": {"x": 1134,"y": 128}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1084,"y": 4}},\r
              "h1": {"coord": {"x": 1034,"y": 4}, "use": false},\r
              "h2": {"coord": {"x": 1084,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1089,"y": -1}},\r
              "h1": {"coord": {"x": 1086,"y": -1}},\r
              "h2": {"coord": {"x": 1139,"y": -1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1254,"y": -1}},\r
              "h1": {"coord": {"x": 1204,"y": -1}, "use": false},\r
              "h2": {"coord": {"x": 1257,"y": -1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1259,"y": 4}},\r
              "h1": {"coord": {"x": 1259,"y": 1}},\r
              "h2": {"coord": {"x": 1309,"y": 4}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1259,"y": 625}},\r
              "h1": {"coord": {"x": 1209,"y": 625}, "use": false},\r
              "h2": {"coord": {"x": 1259,"y": 628}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1254,"y": 630}},\r
              "h1": {"coord": {"x": 1257,"y": 630}},\r
              "h2": {"coord": {"x": 1304,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 630}},\r
              "h1": {"coord": {"x": 664,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 711,"y": 630}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 625}},\r
              "h1": {"coord": {"x": 709,"y": 628}},\r
              "h2": {"coord": {"x": 759,"y": 625}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 460}},\r
              "h1": {"coord": {"x": 659,"y": 460}, "use": false},\r
              "h2": {"coord": {"x": 709,"y": 457}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 455}},\r
              "h1": {"coord": {"x": 711,"y": 455}},\r
              "h2": {"coord": {"x": 764,"y": 455}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 455}},\r
              "h1": {"coord": {"x": 1008,"y": 455}, "use": false},\r
              "h2": {"coord": {"x": 1017,"y": 291}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 911,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 859,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1029,"y": 1054}},\r
              "h1": {"coord": {"x": 972,"y": 1215}},\r
              "h2": {"coord": {"x": 1079,"y": 1054}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1202,"y": 1095}},\r
              "h1": {"coord": {"x": 1152,"y": 1095}, "use": false},\r
              "h2": {"coord": {"x": 1130,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 975,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x48": {\r
      "id": "glyph-0x48",\r
      "advanceWidth": 1221,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 19,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 665}},\r
              "h1": {"coord": {"x": 242,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 665}},\r
              "h1": {"coord": {"x": 879,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 174}},\r
              "h1": {"coord": {"x": 879,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 174}},\r
              "h1": {"coord": {"x": 800,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 169}},\r
              "h1": {"coord": {"x": 845,"y": 172}},\r
              "h2": {"coord": {"x": 895,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 5}},\r
              "h1": {"coord": {"x": 795,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 0}},\r
              "h1": {"coord": {"x": 847,"y": 0}},\r
              "h2": {"coord": {"x": 900,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 0}},\r
              "h1": {"coord": {"x": 1126,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 5}},\r
              "h1": {"coord": {"x": 1181,"y": 2}},\r
              "h2": {"coord": {"x": 1231,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 169}},\r
              "h1": {"coord": {"x": 1131,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 174}},\r
              "h1": {"coord": {"x": 1179,"y": 174}},\r
              "h2": {"coord": {"x": 1226,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 174}},\r
              "h1": {"coord": {"x": 1052,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 1316}},\r
              "h1": {"coord": {"x": 1052,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1316}},\r
              "h1": {"coord": {"x": 1126,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1321}},\r
              "h1": {"coord": {"x": 1181,"y": 1318}},\r
              "h2": {"coord": {"x": 1231,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1485}},\r
              "h1": {"coord": {"x": 1131,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1490}},\r
              "h1": {"coord": {"x": 1179,"y": 1490}},\r
              "h2": {"coord": {"x": 1226,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1490}},\r
              "h1": {"coord": {"x": 800,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1485}},\r
              "h1": {"coord": {"x": 845,"y": 1488}},\r
              "h2": {"coord": {"x": 895,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1321}},\r
              "h1": {"coord": {"x": 795,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1316}},\r
              "h1": {"coord": {"x": 847,"y": 1316}},\r
              "h2": {"coord": {"x": 900,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 1316}},\r
              "h1": {"coord": {"x": 879,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 840}},\r
              "h1": {"coord": {"x": 879,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 840}},\r
              "h1": {"coord": {"x": 242,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1316}},\r
              "h1": {"coord": {"x": 242,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1316}},\r
              "h1": {"coord": {"x": 69,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x49": {\r
      "id": "glyph-0x49",\r
      "advanceWidth": 1096,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 0}},\r
              "h1": {"coord": {"x": 1006,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 231}},\r
              "h1": {"coord": {"x": 1006,"y": 231}, "use": false},\r
              "h2": {"coord": {"x": 1056,"y": 234}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1051,"y": 236}},\r
              "h1": {"coord": {"x": 1054,"y": 236}},\r
              "h2": {"coord": {"x": 1101,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 236}},\r
              "h1": {"coord": {"x": 837,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 884,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 231}},\r
              "h1": {"coord": {"x": 882,"y": 234}},\r
              "h2": {"coord": {"x": 932,"y": 231}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 174}},\r
              "h1": {"coord": {"x": 832,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 932,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 629,"y": 174}},\r
              "h1": {"coord": {"x": 579,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 679,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 629,"y": 1316}},\r
              "h1": {"coord": {"x": 579,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 679,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 1316}},\r
              "h1": {"coord": {"x": 832,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 932,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 1256}},\r
              "h1": {"coord": {"x": 832,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 1253}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1251}},\r
              "h1": {"coord": {"x": 884,"y": 1251}},\r
              "h2": {"coord": {"x": 937,"y": 1251}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1051,"y": 1251}},\r
              "h1": {"coord": {"x": 1001,"y": 1251}, "use": false},\r
              "h2": {"coord": {"x": 1054,"y": 1251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 1256}},\r
              "h1": {"coord": {"x": 1056,"y": 1253}},\r
              "h2": {"coord": {"x": 1106,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 1490}},\r
              "h1": {"coord": {"x": 1006,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1490}},\r
              "h1": {"coord": {"x": -10,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1256}},\r
              "h1": {"coord": {"x": -10,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1253}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1251}},\r
              "h1": {"coord": {"x": 42,"y": 1251}},\r
              "h2": {"coord": {"x": 95,"y": 1251}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 1251}},\r
              "h1": {"coord": {"x": 159,"y": 1251}, "use": false},\r
              "h2": {"coord": {"x": 212,"y": 1251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1256}},\r
              "h1": {"coord": {"x": 214,"y": 1253}},\r
              "h2": {"coord": {"x": 264,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1316}},\r
              "h1": {"coord": {"x": 164,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 455,"y": 1316}},\r
              "h1": {"coord": {"x": 405,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 455,"y": 174}},\r
              "h1": {"coord": {"x": 405,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 174}},\r
              "h1": {"coord": {"x": 164,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 231}},\r
              "h1": {"coord": {"x": 164,"y": 231}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 234}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 236}},\r
              "h1": {"coord": {"x": 212,"y": 236}},\r
              "h2": {"coord": {"x": 259,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 236}},\r
              "h1": {"coord": {"x": -5,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 231}},\r
              "h1": {"coord": {"x": 40,"y": 234}},\r
              "h2": {"coord": {"x": 90,"y": 231}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4A": {\r
      "id": "glyph-0x4A",\r
      "advanceWidth": 1009,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 1490}},\r
              "h1": {"coord": {"x": 967,"y": 1490}},\r
              "h2": {"coord": {"x": 1014,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1490}},\r
              "h1": {"coord": {"x": 166,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 213,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 211,"y": 1485}},\r
              "h1": {"coord": {"x": 211,"y": 1488}},\r
              "h2": {"coord": {"x": 261,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 211,"y": 1321}},\r
              "h1": {"coord": {"x": 161,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 211,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1316}},\r
              "h1": {"coord": {"x": 213,"y": 1316}},\r
              "h2": {"coord": {"x": 266,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 1316}},\r
              "h1": {"coord": {"x": 697,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 797,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 710}},\r
              "h1": {"coord": {"x": 697,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 797,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 710}},\r
              "h1": {"coord": {"x": 697,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 747,"y": 701}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 748,"y": 684}},\r
              "h1": {"coord": {"x": 748,"y": 693}},\r
              "h2": {"coord": {"x": 748,"y": 438}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": 154}},\r
              "h1": {"coord": {"x": 688,"y": 156}},\r
              "h2": {"coord": {"x": 364,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": 154}},\r
              "h1": {"coord": {"x": 264,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 364,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 154}},\r
              "h1": {"coord": {"x": 164,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 233}},\r
              "h1": {"coord": {"x": 164,"y": 233}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 238}},\r
              "h1": {"coord": {"x": 212,"y": 238}},\r
              "h2": {"coord": {"x": 259,"y": 238}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 238}},\r
              "h1": {"coord": {"x": -5,"y": 238}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 238}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 233}},\r
              "h1": {"coord": {"x": 40,"y": 236}},\r
              "h2": {"coord": {"x": 90,"y": 233}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 63}},\r
              "h1": {"coord": {"x": -10,"y": 63}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 123,"y": -20}},\r
              "h1": {"coord": {"x": 77,"y": -20}},\r
              "h2": {"coord": {"x": 173,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": -20}},\r
              "h1": {"coord": {"x": 264,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 364,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": -20}},\r
              "h1": {"coord": {"x": 264,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 681,"y": -19}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 684}},\r
              "h1": {"coord": {"x": 920,"y": 166}},\r
              "h2": {"coord": {"x": 920,"y": 693}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 710}},\r
              "h1": {"coord": {"x": 920,"y": 701}},\r
              "h2": {"coord": {"x": 970,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 710}},\r
              "h1": {"coord": {"x": 870,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 970,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 1316}},\r
              "h1": {"coord": {"x": 870,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 970,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 1316}},\r
              "h1": {"coord": {"x": 914,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 967,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1321}},\r
              "h1": {"coord": {"x": 969,"y": 1318}},\r
              "h2": {"coord": {"x": 1019,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1485}},\r
              "h1": {"coord": {"x": 919,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4B": {\r
      "id": "glyph-0x4B",\r
      "advanceWidth": 1100,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 18,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 665}},\r
              "h1": {"coord": {"x": 242,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 361,"y": 665}},\r
              "h1": {"coord": {"x": 311,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 411,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 778,"y": 174}},\r
              "h1": {"coord": {"x": 728,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 828,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 174}},\r
              "h1": {"coord": {"x": 679,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 724,"y": 169}},\r
              "h1": {"coord": {"x": 724,"y": 172}},\r
              "h2": {"coord": {"x": 774,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 724,"y": 5}},\r
              "h1": {"coord": {"x": 674,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 724,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 0}},\r
              "h1": {"coord": {"x": 726,"y": 0}},\r
              "h2": {"coord": {"x": 779,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1055,"y": 0}},\r
              "h1": {"coord": {"x": 1005,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1058,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1060,"y": 5}},\r
              "h1": {"coord": {"x": 1060,"y": 2}},\r
              "h2": {"coord": {"x": 1110,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1060,"y": 169}},\r
              "h1": {"coord": {"x": 1010,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1060,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1055,"y": 174}},\r
              "h1": {"coord": {"x": 1058,"y": 174}},\r
              "h2": {"coord": {"x": 1105,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1004,"y": 174}},\r
              "h1": {"coord": {"x": 954,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1054,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 475,"y": 796}},\r
              "h1": {"coord": {"x": 425,"y": 796}, "use": false},\r
              "h2": {"coord": {"x": 525,"y": 796}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 1316}},\r
              "h1": {"coord": {"x": 841,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 941,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 1316}},\r
              "h1": {"coord": {"x": 935,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 988,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 990,"y": 1321}},\r
              "h1": {"coord": {"x": 990,"y": 1318}},\r
              "h2": {"coord": {"x": 1040,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 990,"y": 1485}},\r
              "h1": {"coord": {"x": 940,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 990,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 1490}},\r
              "h1": {"coord": {"x": 988,"y": 1490}},\r
              "h2": {"coord": {"x": 1035,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 659,"y": 1490}},\r
              "h1": {"coord": {"x": 609,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 656,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 1485}},\r
              "h1": {"coord": {"x": 654,"y": 1488}},\r
              "h2": {"coord": {"x": 704,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 1321}},\r
              "h1": {"coord": {"x": 604,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 654,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 659,"y": 1316}},\r
              "h1": {"coord": {"x": 656,"y": 1316}},\r
              "h2": {"coord": {"x": 709,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 1316}},\r
              "h1": {"coord": {"x": 664,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 764,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 840}},\r
              "h1": {"coord": {"x": 270,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 840}},\r
              "h1": {"coord": {"x": 242,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1316}},\r
              "h1": {"coord": {"x": 242,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1316}},\r
              "h1": {"coord": {"x": 69,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4C": {\r
      "id": "glyph-0x4C",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 256}},\r
              "h1": {"coord": {"x": 913,"y": 256}, "use": false},\r
              "h2": {"coord": {"x": 963,"y": 259}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 261}},\r
              "h1": {"coord": {"x": 961,"y": 261}},\r
              "h2": {"coord": {"x": 1008,"y": 261}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 261}},\r
              "h1": {"coord": {"x": 744,"y": 261}, "use": false},\r
              "h2": {"coord": {"x": 791,"y": 261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 256}},\r
              "h1": {"coord": {"x": 789,"y": 259}},\r
              "h2": {"coord": {"x": 839,"y": 256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 174}},\r
              "h1": {"coord": {"x": 739,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 839,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 174}},\r
              "h1": {"coord": {"x": 226,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 1316}},\r
              "h1": {"coord": {"x": 226,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 1316}},\r
              "h1": {"coord": {"x": 53,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 174}},\r
              "h1": {"coord": {"x": 53,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 0}},\r
              "h1": {"coord": {"x": 913,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1013,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4F": {\r
      "id": "glyph-0x4F",\r
      "advanceWidth": 1300,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 3,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 1187,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 1019,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1260,"y": 684}},\r
              "h1": {"coord": {"x": 1260,"y": 164}},\r
              "h2": {"coord": {"x": 1260,"y": 979}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 1028,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 1003,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1081,"y": 684}},\r
              "h1": {"coord": {"x": 1081,"y": 997}},\r
              "h2": {"coord": {"x": 1081,"y": 437}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4E": {\r
      "id": "glyph-0x4E",\r
      "advanceWidth": 1221,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 0}},\r
              "h1": {"coord": {"x": 879,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 0}},\r
              "h1": {"coord": {"x": 1052,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 1315}},\r
              "h1": {"coord": {"x": 1052,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1315}},\r
              "h1": {"coord": {"x": 1126,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1320}},\r
              "h1": {"coord": {"x": 1181,"y": 1317}},\r
              "h2": {"coord": {"x": 1231,"y": 1320}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1484}},\r
              "h1": {"coord": {"x": 1131,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1489}},\r
              "h1": {"coord": {"x": 1179,"y": 1489}},\r
              "h2": {"coord": {"x": 1226,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1489}},\r
              "h1": {"coord": {"x": 800,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1484}},\r
              "h1": {"coord": {"x": 845,"y": 1487}},\r
              "h2": {"coord": {"x": 895,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1320}},\r
              "h1": {"coord": {"x": 795,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1315}},\r
              "h1": {"coord": {"x": 847,"y": 1315}},\r
              "h2": {"coord": {"x": 900,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 1315}},\r
              "h1": {"coord": {"x": 879,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 366}},\r
              "h1": {"coord": {"x": 879,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 366}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 1481}},\r
              "h1": {"coord": {"x": 247,"y": 1481}, "use": false},\r
              "h2": {"coord": {"x": 347,"y": 1481}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 1484}},\r
              "h1": {"coord": {"x": 247,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 297,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1489}},\r
              "h1": {"coord": {"x": 295,"y": 1489}},\r
              "h2": {"coord": {"x": 343,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1490}},\r
              "h1": {"coord": {"x": 242,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 291,"y": 1489}},\r
              "h1": {"coord": {"x": 241,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 341,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1489}},\r
              "h1": {"coord": {"x": -5,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1484}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1320}},\r
              "h1": {"coord": {"x": -10,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1315}},\r
              "h1": {"coord": {"x": 42,"y": 1315}},\r
              "h2": {"coord": {"x": 95,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1315}},\r
              "h1": {"coord": {"x": 69,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1114}},\r
              "h1": {"coord": {"x": 242,"y": 1114}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1114}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4D": {\r
      "id": "glyph-0x4D",\r
      "advanceWidth": 1336,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 15,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1489}},\r
              "h1": {"coord": {"x": 1294,"y": 1489}},\r
              "h2": {"coord": {"x": 1341,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 1489}},\r
              "h1": {"coord": {"x": 998,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1098,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 1489}},\r
              "h1": {"coord": {"x": 998,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1098,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1047,"y": 1490}},\r
              "h1": {"coord": {"x": 997,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1097,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1046,"y": 1489}},\r
              "h1": {"coord": {"x": 996,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1044,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1484}},\r
              "h1": {"coord": {"x": 1043,"y": 1486}},\r
              "h2": {"coord": {"x": 1093,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1483}},\r
              "h1": {"coord": {"x": 993,"y": 1483}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 1483}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 682,"y": 811}},\r
              "h1": {"coord": {"x": 632,"y": 811}, "use": false},\r
              "h2": {"coord": {"x": 732,"y": 811}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1483}},\r
              "h1": {"coord": {"x": 243,"y": 1483}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 1483}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1484}},\r
              "h1": {"coord": {"x": 243,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1486}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 1489}},\r
              "h1": {"coord": {"x": 292,"y": 1488}},\r
              "h2": {"coord": {"x": 340,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 289,"y": 1490}},\r
              "h1": {"coord": {"x": 239,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 339,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 1489}},\r
              "h1": {"coord": {"x": 238,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 1489}},\r
              "h1": {"coord": {"x": 238,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1489}},\r
              "h1": {"coord": {"x": -5,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1484}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1320}},\r
              "h1": {"coord": {"x": -10,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1315}},\r
              "h1": {"coord": {"x": 42,"y": 1315}},\r
              "h2": {"coord": {"x": 95,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 120,"y": 1315}},\r
              "h1": {"coord": {"x": 70,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 170,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 120,"y": 174}},\r
              "h1": {"coord": {"x": 70,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 170,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": 174}},\r
              "h1": {"coord": {"x": -4,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 169}},\r
              "h1": {"coord": {"x": 41,"y": 172}},\r
              "h2": {"coord": {"x": 91,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 5}},\r
              "h1": {"coord": {"x": -9,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": 0}},\r
              "h1": {"coord": {"x": 43,"y": 0}},\r
              "h2": {"coord": {"x": 96,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 0}},\r
              "h1": {"coord": {"x": 322,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 375,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 5}},\r
              "h1": {"coord": {"x": 377,"y": 2}},\r
              "h2": {"coord": {"x": 427,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 169}},\r
              "h1": {"coord": {"x": 327,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 377,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 174}},\r
              "h1": {"coord": {"x": 375,"y": 174}},\r
              "h2": {"coord": {"x": 422,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 174}},\r
              "h1": {"coord": {"x": 243,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1110}},\r
              "h1": {"coord": {"x": 243,"y": 1110}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 1110}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 678,"y": 451}},\r
              "h1": {"coord": {"x": 628,"y": 451}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 451}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1103}},\r
              "h1": {"coord": {"x": 993,"y": 1103}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 1103}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 174}},\r
              "h1": {"coord": {"x": 993,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 174}},\r
              "h1": {"coord": {"x": 914,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 959,"y": 169}},\r
              "h1": {"coord": {"x": 959,"y": 172}},\r
              "h2": {"coord": {"x": 1009,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 959,"y": 5}},\r
              "h1": {"coord": {"x": 909,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 959,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 0}},\r
              "h1": {"coord": {"x": 961,"y": 0}},\r
              "h2": {"coord": {"x": 1014,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1290,"y": 0}},\r
              "h1": {"coord": {"x": 1240,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1293,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1295,"y": 5}},\r
              "h1": {"coord": {"x": 1295,"y": 2}},\r
              "h2": {"coord": {"x": 1345,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1295,"y": 169}},\r
              "h1": {"coord": {"x": 1245,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1295,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1290,"y": 174}},\r
              "h1": {"coord": {"x": 1293,"y": 174}},\r
              "h2": {"coord": {"x": 1340,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1216,"y": 174}},\r
              "h1": {"coord": {"x": 1166,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1266,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1216,"y": 1315}},\r
              "h1": {"coord": {"x": 1166,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1266,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1315}},\r
              "h1": {"coord": {"x": 1241,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1294,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1296,"y": 1320}},\r
              "h1": {"coord": {"x": 1296,"y": 1317}},\r
              "h2": {"coord": {"x": 1346,"y": 1320}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1296,"y": 1484}},\r
              "h1": {"coord": {"x": 1246,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 1296,"y": 1487}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x50": {\r
      "id": "glyph-0x50",\r
      "advanceWidth": 994,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 666}},\r
              "h1": {"coord": {"x": 523,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 834,"y": 666}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 954,"y": 1059}},\r
              "h1": {"coord": {"x": 954,"y": 897}},\r
              "h2": {"coord": {"x": 954,"y": 1181}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 585,"y": 1490}},\r
              "h1": {"coord": {"x": 914,"y": 1483}},\r
              "h2": {"coord": {"x": 635,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 585,"y": 1490}},\r
              "h1": {"coord": {"x": 535,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 635,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 1316}},\r
              "h1": {"coord": {"x": 107,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 174}},\r
              "h1": {"coord": {"x": 107,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 0}},\r
              "h1": {"coord": {"x": 372,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 472,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 1}},\r
              "h1": {"coord": {"x": 375,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 1}},\r
              "h1": {"coord": {"x": 376,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 2}},\r
              "h1": {"coord": {"x": 376,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 5}},\r
              "h1": {"coord": {"x": 377,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 477,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 169}},\r
              "h1": {"coord": {"x": 377,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 477,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 172}},\r
              "h1": {"coord": {"x": 376,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 173}},\r
              "h1": {"coord": {"x": 376,"y": 173}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 173}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 173}},\r
              "h1": {"coord": {"x": 375,"y": 173}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 173}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 174}},\r
              "h1": {"coord": {"x": 372,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 472,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 174}},\r
              "h1": {"coord": {"x": 279,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 666}},\r
              "h1": {"coord": {"x": 279,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 666}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 1318}},\r
              "h1": {"coord": {"x": 522,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 739,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 803,"y": 1059}},\r
              "h1": {"coord": {"x": 803,"y": 1226}},\r
              "h2": {"coord": {"x": 803,"y": 939}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 841}},\r
              "h1": {"coord": {"x": 715,"y": 841}},\r
              "h2": {"coord": {"x": 623,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 840}},\r
              "h1": {"coord": {"x": 279,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 1318}},\r
              "h1": {"coord": {"x": 279,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 1318}},\r
              "h1": {"coord": {"x": 522,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x51": {\r
      "id": "glyph-0x51",\r
      "advanceWidth": 1318,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1119,"y": 167}},\r
              "h1": {"coord": {"x": 1069,"y": 167}, "use": false},\r
              "h2": {"coord": {"x": 1209,"y": 279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1260,"y": 684}},\r
              "h1": {"coord": {"x": 1260,"y": 446}},\r
              "h2": {"coord": {"x": 1260,"y": 979}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 1187,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 779,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 54}},\r
              "h1": {"coord": {"x": 892,"y": 2}},\r
              "h2": {"coord": {"x": 1035,"y": 54}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1155,"y": -116}},\r
              "h1": {"coord": {"x": 1105,"y": -116}, "use": false},\r
              "h2": {"coord": {"x": 1157,"y": -118}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1162,"y": -116}},\r
              "h1": {"coord": {"x": 1160,"y": -118}},\r
              "h2": {"coord": {"x": 1212,"y": -116}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1278,"y": 0}},\r
              "h1": {"coord": {"x": 1228,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1280,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1278,"y": 7}},\r
              "h1": {"coord": {"x": 1280,"y": 5}},\r
              "h2": {"coord": {"x": 1328,"y": 7}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -3,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 729,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 1003,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1081,"y": 684}},\r
              "h1": {"coord": {"x": 1081,"y": 997}},\r
              "h2": {"coord": {"x": 1081,"y": 548}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 987,"y": 299}},\r
              "h1": {"coord": {"x": 1065,"y": 402}},\r
              "h2": {"coord": {"x": 1037,"y": 299}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 848,"y": 437}},\r
              "h1": {"coord": {"x": 798,"y": 437}, "use": false},\r
              "h2": {"coord": {"x": 846,"y": 439}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 841,"y": 437}},\r
              "h1": {"coord": {"x": 843,"y": 439}},\r
              "h2": {"coord": {"x": 891,"y": 437}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 322}},\r
              "h1": {"coord": {"x": 675,"y": 322}, "use": false},\r
              "h2": {"coord": {"x": 723,"y": 320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 314}},\r
              "h1": {"coord": {"x": 723,"y": 316}},\r
              "h2": {"coord": {"x": 775,"y": 314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 192}},\r
              "h1": {"coord": {"x": 797,"y": 192}, "use": false},\r
              "h2": {"coord": {"x": 794,"y": 170}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x52": {\r
      "id": "glyph-0x52",\r
      "advanceWidth": 1103,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 175}},\r
              "h1": {"coord": {"x": 1061,"y": 175}},\r
              "h2": {"coord": {"x": 1108,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 175}},\r
              "h1": {"coord": {"x": 880,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": 674}},\r
              "h1": {"coord": {"x": 592,"y": 674}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 716}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 942,"y": 1059}},\r
              "h1": {"coord": {"x": 942,"y": 915}},\r
              "h2": {"coord": {"x": 942,"y": 1181}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 1490}},\r
              "h1": {"coord": {"x": 902,"y": 1483}},\r
              "h2": {"coord": {"x": 623,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 1490}},\r
              "h1": {"coord": {"x": 523,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 623,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1490}},\r
              "h1": {"coord": {"x": -6,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 94,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1490}},\r
              "h1": {"coord": {"x": -6,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 1316}},\r
              "h1": {"coord": {"x": 95,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 174}},\r
              "h1": {"coord": {"x": 95,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 0}},\r
              "h1": {"coord": {"x": 372,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 425,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 5}},\r
              "h1": {"coord": {"x": 427,"y": 2}},\r
              "h2": {"coord": {"x": 477,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 169}},\r
              "h1": {"coord": {"x": 377,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 427,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 174}},\r
              "h1": {"coord": {"x": 425,"y": 174}},\r
              "h2": {"coord": {"x": 472,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 174}},\r
              "h1": {"coord": {"x": 267,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 666}},\r
              "h1": {"coord": {"x": 267,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 666}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 445,"y": 666}},\r
              "h1": {"coord": {"x": 395,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 495,"y": 666}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 1}},\r
              "h1": {"coord": {"x": 756,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 856,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 809,"y": 1}},\r
              "h1": {"coord": {"x": 759,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 859,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 809,"y": 1}},\r
              "h1": {"coord": {"x": 759,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 859,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 1}},\r
              "h1": {"coord": {"x": 1008,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 1061,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 6}},\r
              "h1": {"coord": {"x": 1063,"y": 3}},\r
              "h2": {"coord": {"x": 1113,"y": 6}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 170}},\r
              "h1": {"coord": {"x": 1013,"y": 170}, "use": false},\r
              "h2": {"coord": {"x": 1063,"y": 173}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -3,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 1318}},\r
              "h1": {"coord": {"x": 267,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 1318}},\r
              "h1": {"coord": {"x": 510,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 727,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 791,"y": 1059}},\r
              "h1": {"coord": {"x": 791,"y": 1226}},\r
              "h2": {"coord": {"x": 791,"y": 939}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 561,"y": 841}},\r
              "h1": {"coord": {"x": 703,"y": 841}},\r
              "h2": {"coord": {"x": 611,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 503,"y": 841}},\r
              "h1": {"coord": {"x": 453,"y": 841}, "use": false},\r
              "h2": {"coord": {"x": 553,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 503,"y": 840}},\r
              "h1": {"coord": {"x": 453,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 553,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 840}},\r
              "h1": {"coord": {"x": 267,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 1318}},\r
              "h1": {"coord": {"x": 267,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x53": {\r
      "id": "glyph-0x53",\r
      "advanceWidth": 981,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 849}},\r
              "h1": {"coord": {"x": 910,"y": 849}},\r
              "h2": {"coord": {"x": 540,"y": 849}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 850}},\r
              "h1": {"coord": {"x": 440,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": 850}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 228,"y": 1054}},\r
              "h1": {"coord": {"x": 228,"y": 988}},\r
              "h2": {"coord": {"x": 228,"y": 1201}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 1316}},\r
              "h1": {"coord": {"x": 296,"y": 1316}},\r
              "h2": {"coord": {"x": 553,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 684,"y": 1316}},\r
              "h1": {"coord": {"x": 624,"y": 1316}},\r
              "h2": {"coord": {"x": 734,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 684,"y": 1234}},\r
              "h1": {"coord": {"x": 634,"y": 1234}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 1231}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 689,"y": 1229}},\r
              "h1": {"coord": {"x": 686,"y": 1229}},\r
              "h2": {"coord": {"x": 739,"y": 1229}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 853,"y": 1229}},\r
              "h1": {"coord": {"x": 803,"y": 1229}, "use": false},\r
              "h2": {"coord": {"x": 856,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 1234}},\r
              "h1": {"coord": {"x": 858,"y": 1231}},\r
              "h2": {"coord": {"x": 908,"y": 1234}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 1407}},\r
              "h1": {"coord": {"x": 808,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 858,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 775,"y": 1490}},\r
              "h1": {"coord": {"x": 821,"y": 1490}},\r
              "h2": {"coord": {"x": 825,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 1490}},\r
              "h1": {"coord": {"x": 440,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 310,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 54,"y": 1054}},\r
              "h1": {"coord": {"x": 54,"y": 1395}},\r
              "h2": {"coord": {"x": 54,"y": 880}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 676}},\r
              "h1": {"coord": {"x": 207,"y": 676}},\r
              "h2": {"coord": {"x": 741,"y": 676}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 767,"y": 394}},\r
              "h1": {"coord": {"x": 767,"y": 552}},\r
              "h2": {"coord": {"x": 767,"y": 324}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 174}},\r
              "h1": {"coord": {"x": 762,"y": 174}},\r
              "h2": {"coord": {"x": 536,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 174}},\r
              "h1": {"coord": {"x": 164,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 254}},\r
              "h1": {"coord": {"x": 164,"y": 254}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 257}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 259}},\r
              "h1": {"coord": {"x": 212,"y": 259}},\r
              "h2": {"coord": {"x": 259,"y": 259}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 259}},\r
              "h1": {"coord": {"x": -5,"y": 259}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 259}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 254}},\r
              "h1": {"coord": {"x": 40,"y": 257}},\r
              "h2": {"coord": {"x": 90,"y": 254}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 83}},\r
              "h1": {"coord": {"x": -10,"y": 83}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 38}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 121,"y": 0}},\r
              "h1": {"coord": {"x": 76,"y": 1}},\r
              "h2": {"coord": {"x": 171,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 121,"y": 0}},\r
              "h1": {"coord": {"x": 71,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 171,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 0}},\r
              "h1": {"coord": {"x": 436,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 956,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 941,"y": 394}},\r
              "h1": {"coord": {"x": 941,"y": 331}},\r
              "h2": {"coord": {"x": 941,"y": 517}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x54": {\r
      "id": "glyph-0x54",\r
      "advanceWidth": 1104,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1064,"y": 1490}},\r
              "h1": {"coord": {"x": 1014,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1114,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1490}},\r
              "h1": {"coord": {"x": -10,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1215}},\r
              "h1": {"coord": {"x": -10,"y": 1215}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1212}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1210}},\r
              "h1": {"coord": {"x": 42,"y": 1210}},\r
              "h2": {"coord": {"x": 95,"y": 1210}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 210,"y": 1210}},\r
              "h1": {"coord": {"x": 160,"y": 1210}, "use": false},\r
              "h2": {"coord": {"x": 213,"y": 1210}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1215}},\r
              "h1": {"coord": {"x": 215,"y": 1212}},\r
              "h2": {"coord": {"x": 265,"y": 1215}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1315}},\r
              "h1": {"coord": {"x": 165,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 265,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 458,"y": 1315}},\r
              "h1": {"coord": {"x": 408,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 508,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 458,"y": 176}},\r
              "h1": {"coord": {"x": 408,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 508,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 359,"y": 176}},\r
              "h1": {"coord": {"x": 309,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 176}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 354,"y": 171}},\r
              "h1": {"coord": {"x": 354,"y": 174}},\r
              "h2": {"coord": {"x": 404,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 354,"y": 5}},\r
              "h1": {"coord": {"x": 304,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 354,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 359,"y": 0}},\r
              "h1": {"coord": {"x": 356,"y": 0}},\r
              "h2": {"coord": {"x": 409,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 723,"y": 0}},\r
              "h1": {"coord": {"x": 673,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 728,"y": 5}},\r
              "h1": {"coord": {"x": 728,"y": 2}},\r
              "h2": {"coord": {"x": 778,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 728,"y": 171}},\r
              "h1": {"coord": {"x": 678,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 723,"y": 176}},\r
              "h1": {"coord": {"x": 726,"y": 176}},\r
              "h2": {"coord": {"x": 773,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 176}},\r
              "h1": {"coord": {"x": 584,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 1315}},\r
              "h1": {"coord": {"x": 584,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 888,"y": 1315}},\r
              "h1": {"coord": {"x": 838,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 938,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 888,"y": 1215}},\r
              "h1": {"coord": {"x": 838,"y": 1215}, "use": false},\r
              "h2": {"coord": {"x": 888,"y": 1212}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 893,"y": 1210}},\r
              "h1": {"coord": {"x": 890,"y": 1210}},\r
              "h2": {"coord": {"x": 943,"y": 1210}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 1210}},\r
              "h1": {"coord": {"x": 1008,"y": 1210}, "use": false},\r
              "h2": {"coord": {"x": 1061,"y": 1210}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 1215}},\r
              "h1": {"coord": {"x": 1063,"y": 1212}},\r
              "h2": {"coord": {"x": 1113,"y": 1215}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x55": {\r
      "id": "glyph-0x55",\r
      "advanceWidth": 1301,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1256,"y": 1490}},\r
              "h1": {"coord": {"x": 1259,"y": 1490}},\r
              "h2": {"coord": {"x": 1306,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 1490}},\r
              "h1": {"coord": {"x": 842,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 889,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1485}},\r
              "h1": {"coord": {"x": 887,"y": 1488}},\r
              "h2": {"coord": {"x": 937,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1319}},\r
              "h1": {"coord": {"x": 837,"y": 1319}, "use": false},\r
              "h2": {"coord": {"x": 887,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 1314}},\r
              "h1": {"coord": {"x": 889,"y": 1314}},\r
              "h2": {"coord": {"x": 942,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 984,"y": 1314}},\r
              "h1": {"coord": {"x": 934,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1034,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 984,"y": 506}},\r
              "h1": {"coord": {"x": 934,"y": 506}, "use": false},\r
              "h2": {"coord": {"x": 984,"y": 379}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 907,"y": 237}},\r
              "h1": {"coord": {"x": 959,"y": 291}},\r
              "h2": {"coord": {"x": 854,"y": 182}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": 155}},\r
              "h1": {"coord": {"x": 768,"y": 155}},\r
              "h2": {"coord": {"x": 518,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 235}},\r
              "h1": {"coord": {"x": 434,"y": 181}},\r
              "h2": {"coord": {"x": 336,"y": 288}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 506}},\r
              "h1": {"coord": {"x": 312,"y": 377}},\r
              "h2": {"coord": {"x": 362,"y": 506}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 1314}},\r
              "h1": {"coord": {"x": 262,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 1314}},\r
              "h1": {"coord": {"x": 359,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 412,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 414,"y": 1319}},\r
              "h1": {"coord": {"x": 414,"y": 1316}},\r
              "h2": {"coord": {"x": 464,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 414,"y": 1485}},\r
              "h1": {"coord": {"x": 364,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 414,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 1490}},\r
              "h1": {"coord": {"x": 412,"y": 1490}},\r
              "h2": {"coord": {"x": 459,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1319}},\r
              "h1": {"coord": {"x": -10,"y": 1319}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1314}},\r
              "h1": {"coord": {"x": 42,"y": 1314}},\r
              "h2": {"coord": {"x": 95,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 138,"y": 1314}},\r
              "h1": {"coord": {"x": 88,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 188,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 138,"y": 506}},\r
              "h1": {"coord": {"x": 88,"y": 506}, "use": false},\r
              "h2": {"coord": {"x": 138,"y": 332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 256,"y": 118}},\r
              "h1": {"coord": {"x": 176,"y": 205}},\r
              "h2": {"coord": {"x": 340,"y": 25}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": -20}},\r
              "h1": {"coord": {"x": 466,"y": -20}},\r
              "h2": {"coord": {"x": 728,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 864,"y": 12}},\r
              "h1": {"coord": {"x": 800,"y": -9}},\r
              "h2": {"coord": {"x": 931,"y": 35}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1033,"y": 116}},\r
              "h1": {"coord": {"x": 988,"y": 69}},\r
              "h2": {"coord": {"x": 1117,"y": 205}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1159,"y": 506}},\r
              "h1": {"coord": {"x": 1159,"y": 332}},\r
              "h2": {"coord": {"x": 1209,"y": 506}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1159,"y": 1314}},\r
              "h1": {"coord": {"x": 1109,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1209,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1256,"y": 1314}},\r
              "h1": {"coord": {"x": 1206,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1259,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1261,"y": 1319}},\r
              "h1": {"coord": {"x": 1261,"y": 1316}},\r
              "h2": {"coord": {"x": 1311,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1261,"y": 1485}},\r
              "h1": {"coord": {"x": 1211,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1261,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x56": {\r
      "id": "glyph-0x56",\r
      "advanceWidth": 1276,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1490}},\r
              "h1": {"coord": {"x": 1234,"y": 1490}},\r
              "h2": {"coord": {"x": 1281,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1018,"y": 1490}},\r
              "h1": {"coord": {"x": 968,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1016,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1013,"y": 1486}},\r
              "h1": {"coord": {"x": 1013,"y": 1488}},\r
              "h2": {"coord": {"x": 1063,"y": 1486}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 395}},\r
              "h1": {"coord": {"x": 600,"y": 395}, "use": false},\r
              "h2": {"coord": {"x": 700,"y": 395}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 1486}},\r
              "h1": {"coord": {"x": 213,"y": 1486}, "use": false},\r
              "h2": {"coord": {"x": 263,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 260,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1316}},\r
              "h1": {"coord": {"x": 81,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 597,"y": 0}},\r
              "h1": {"coord": {"x": 547,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 647,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 705,"y": 0}},\r
              "h1": {"coord": {"x": 655,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1141,"y": 1316}},\r
              "h1": {"coord": {"x": 1091,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1191,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1316}},\r
              "h1": {"coord": {"x": 1181,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1234,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1321}},\r
              "h1": {"coord": {"x": 1236,"y": 1318}},\r
              "h2": {"coord": {"x": 1286,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1485}},\r
              "h1": {"coord": {"x": 1186,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1236,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x57": {\r
      "id": "glyph-0x57",\r
      "advanceWidth": 1549,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1504,"y": 1490}},\r
              "h1": {"coord": {"x": 1507,"y": 1490}},\r
              "h2": {"coord": {"x": 1554,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1490}},\r
              "h1": {"coord": {"x": 1241,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1288,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1286,"y": 1485}},\r
              "h1": {"coord": {"x": 1286,"y": 1488}},\r
              "h2": {"coord": {"x": 1336,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1067,"y": 385}},\r
              "h1": {"coord": {"x": 1017,"y": 385}, "use": false},\r
              "h2": {"coord": {"x": 1117,"y": 385}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 803,"y": 897}},\r
              "h1": {"coord": {"x": 753,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 853,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 897}},\r
              "h1": {"coord": {"x": 691,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 791,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 392}},\r
              "h1": {"coord": {"x": 434,"y": 392}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 1485}},\r
              "h1": {"coord": {"x": 213,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 263,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 261,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 123,"y": 1316}},\r
              "h1": {"coord": {"x": 73,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 173,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 366,"y": 0}},\r
              "h1": {"coord": {"x": 316,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 416,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 515,"y": 0}},\r
              "h1": {"coord": {"x": 465,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 565,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 771,"y": 523}},\r
              "h1": {"coord": {"x": 721,"y": 523}, "use": false},\r
              "h2": {"coord": {"x": 821,"y": 523}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 0}},\r
              "h1": {"coord": {"x": 984,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1084,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1183,"y": 0}},\r
              "h1": {"coord": {"x": 1133,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1233,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1428,"y": 1316}},\r
              "h1": {"coord": {"x": 1378,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1478,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1504,"y": 1316}},\r
              "h1": {"coord": {"x": 1454,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1507,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1509,"y": 1321}},\r
              "h1": {"coord": {"x": 1509,"y": 1318}},\r
              "h2": {"coord": {"x": 1559,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1509,"y": 1485}},\r
              "h1": {"coord": {"x": 1459,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1509,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x58": {\r
      "id": "glyph-0x58",\r
      "advanceWidth": 1180,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 19,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1135,"y": 174}},\r
              "h1": {"coord": {"x": 1138,"y": 174}},\r
              "h2": {"coord": {"x": 1185,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 174}},\r
              "h1": {"coord": {"x": 972,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1072,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 702,"y": 759}},\r
              "h1": {"coord": {"x": 652,"y": 759}, "use": false},\r
              "h2": {"coord": {"x": 752,"y": 759}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1010,"y": 1316}},\r
              "h1": {"coord": {"x": 960,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1060,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 1316}},\r
              "h1": {"coord": {"x": 1065,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1118,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 1321}},\r
              "h1": {"coord": {"x": 1120,"y": 1318}},\r
              "h2": {"coord": {"x": 1170,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 1485}},\r
              "h1": {"coord": {"x": 1070,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1120,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 1490}},\r
              "h1": {"coord": {"x": 1118,"y": 1490}},\r
              "h2": {"coord": {"x": 1165,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 902,"y": 1490}},\r
              "h1": {"coord": {"x": 852,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 900,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 898,"y": 1488}},\r
              "h1": {"coord": {"x": 848,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 948,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 897,"y": 1487}},\r
              "h1": {"coord": {"x": 847,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 947,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 945}},\r
              "h1": {"coord": {"x": 550,"y": 945}, "use": false},\r
              "h2": {"coord": {"x": 650,"y": 945}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 303,"y": 1487}},\r
              "h1": {"coord": {"x": 253,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 353,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 302,"y": 1488}},\r
              "h1": {"coord": {"x": 252,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 352,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 298,"y": 1490}},\r
              "h1": {"coord": {"x": 300,"y": 1490}},\r
              "h2": {"coord": {"x": 348,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 85,"y": 1490}},\r
              "h1": {"coord": {"x": 35,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 82,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 80,"y": 1485}},\r
              "h1": {"coord": {"x": 80,"y": 1488}},\r
              "h2": {"coord": {"x": 130,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 80,"y": 1321}},\r
              "h1": {"coord": {"x": 30,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 80,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 85,"y": 1316}},\r
              "h1": {"coord": {"x": 82,"y": 1316}},\r
              "h2": {"coord": {"x": 135,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 190,"y": 1316}},\r
              "h1": {"coord": {"x": 140,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 240,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 777}},\r
              "h1": {"coord": {"x": 438,"y": 777}, "use": false},\r
              "h2": {"coord": {"x": 538,"y": 777}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 174}},\r
              "h1": {"coord": {"x": 107,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 0}},\r
              "h1": {"coord": {"x": 208,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 260,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 2}},\r
              "h1": {"coord": {"x": 212,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 3}},\r
              "h1": {"coord": {"x": 213,"y": 3}, "use": false},\r
              "h2": {"coord": {"x": 313,"y": 3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 593}},\r
              "h1": {"coord": {"x": 540,"y": 593}, "use": false},\r
              "h2": {"coord": {"x": 640,"y": 593}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 917,"y": 3}},\r
              "h1": {"coord": {"x": 867,"y": 3}, "use": false},\r
              "h2": {"coord": {"x": 967,"y": 3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 918,"y": 2}},\r
              "h1": {"coord": {"x": 868,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 968,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 0}},\r
              "h1": {"coord": {"x": 920,"y": 0}},\r
              "h2": {"coord": {"x": 972,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1135,"y": 0}},\r
              "h1": {"coord": {"x": 1085,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1138,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1140,"y": 5}},\r
              "h1": {"coord": {"x": 1140,"y": 2}},\r
              "h2": {"coord": {"x": 1190,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1140,"y": 169}},\r
              "h1": {"coord": {"x": 1090,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1140,"y": 172}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x59": {\r
      "id": "glyph-0x59",\r
      "advanceWidth": 1276,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 14,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1490}},\r
              "h1": {"coord": {"x": 1234,"y": 1490}},\r
              "h2": {"coord": {"x": 1281,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1018,"y": 1490}},\r
              "h1": {"coord": {"x": 968,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1016,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1014,"y": 1488}},\r
              "h1": {"coord": {"x": 964,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 1064,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1014,"y": 1487}},\r
              "h1": {"coord": {"x": 964,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 1064,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 891}},\r
              "h1": {"coord": {"x": 604,"y": 891}, "use": false},\r
              "h2": {"coord": {"x": 704,"y": 891}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 1488}},\r
              "h1": {"coord": {"x": 212,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 1488}},\r
              "h1": {"coord": {"x": 212,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 260,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 1316}},\r
              "h1": {"coord": {"x": 95,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 657}},\r
              "h1": {"coord": {"x": 522,"y": 657}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 657}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 171}},\r
              "h1": {"coord": {"x": 522,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 171}},\r
              "h1": {"coord": {"x": 443,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 490,"y": 171}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 166}},\r
              "h1": {"coord": {"x": 488,"y": 169}},\r
              "h2": {"coord": {"x": 538,"y": 166}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 2}},\r
              "h1": {"coord": {"x": 438,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 488,"y": -1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": -3}},\r
              "h1": {"coord": {"x": 490,"y": -3}},\r
              "h2": {"coord": {"x": 543,"y": -3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": -3}},\r
              "h1": {"coord": {"x": 769,"y": -3}, "use": false},\r
              "h2": {"coord": {"x": 822,"y": -3}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 2}},\r
              "h1": {"coord": {"x": 824,"y": -1}},\r
              "h2": {"coord": {"x": 874,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 166}},\r
              "h1": {"coord": {"x": 774,"y": 166}, "use": false},\r
              "h2": {"coord": {"x": 824,"y": 169}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 171}},\r
              "h1": {"coord": {"x": 822,"y": 171}},\r
              "h2": {"coord": {"x": 869,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 745,"y": 171}},\r
              "h1": {"coord": {"x": 695,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 795,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 745,"y": 687}},\r
              "h1": {"coord": {"x": 695,"y": 687}, "use": false},\r
              "h2": {"coord": {"x": 795,"y": 687}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1124,"y": 1316}},\r
              "h1": {"coord": {"x": 1074,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1174,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1316}},\r
              "h1": {"coord": {"x": 1181,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1234,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1321}},\r
              "h1": {"coord": {"x": 1236,"y": 1318}},\r
              "h2": {"coord": {"x": 1286,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1485}},\r
              "h1": {"coord": {"x": 1186,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1236,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x5A": {\r
      "id": "glyph-0x5A",\r
      "advanceWidth": 1146,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1101,"y": 242}},\r
              "h1": {"coord": {"x": 1104,"y": 242}},\r
              "h2": {"coord": {"x": 1151,"y": 242}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 933,"y": 242}},\r
              "h1": {"coord": {"x": 883,"y": 242}, "use": false},\r
              "h2": {"coord": {"x": 930,"y": 242}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 928,"y": 237}},\r
              "h1": {"coord": {"x": 928,"y": 240}},\r
              "h2": {"coord": {"x": 978,"y": 237}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 928,"y": 175}},\r
              "h1": {"coord": {"x": 878,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 978,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 334,"y": 175}},\r
              "h1": {"coord": {"x": 284,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1086,"y": 1460}},\r
              "h1": {"coord": {"x": 1036,"y": 1460}, "use": false},\r
              "h2": {"coord": {"x": 1136,"y": 1460}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1086,"y": 1490}},\r
              "h1": {"coord": {"x": 1036,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1136,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 86,"y": 1490}},\r
              "h1": {"coord": {"x": 36,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 83,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 81,"y": 1485}},\r
              "h1": {"coord": {"x": 81,"y": 1488}},\r
              "h2": {"coord": {"x": 131,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 81,"y": 1253}},\r
              "h1": {"coord": {"x": 31,"y": 1253}, "use": false},\r
              "h2": {"coord": {"x": 81,"y": 1250}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 86,"y": 1248}},\r
              "h1": {"coord": {"x": 83,"y": 1248}},\r
              "h2": {"coord": {"x": 136,"y": 1248}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 255,"y": 1248}},\r
              "h1": {"coord": {"x": 205,"y": 1248}, "use": false},\r
              "h2": {"coord": {"x": 258,"y": 1248}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 1253}},\r
              "h1": {"coord": {"x": 260,"y": 1250}},\r
              "h2": {"coord": {"x": 310,"y": 1253}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 1315}},\r
              "h1": {"coord": {"x": 210,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 310,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 793,"y": 1315}},\r
              "h1": {"coord": {"x": 743,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 843,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 30}},\r
              "h1": {"coord": {"x": -9,"y": 30}, "use": false},\r
              "h2": {"coord": {"x": 91,"y": 30}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1101,"y": 0}},\r
              "h1": {"coord": {"x": 1051,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1104,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1106,"y": 5}},\r
              "h1": {"coord": {"x": 1106,"y": 2}},\r
              "h2": {"coord": {"x": 1156,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1106,"y": 237}},\r
              "h1": {"coord": {"x": 1056,"y": 237}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 240}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x61": {\r
      "id": "glyph-0x61",\r
      "advanceWidth": 949,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 165}},\r
              "h1": {"coord": {"x": 854,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 954,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 165}},\r
              "h1": {"coord": {"x": 769,"y": 165}},\r
              "h2": {"coord": {"x": 869,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 820,"y": 605}},\r
              "h1": {"coord": {"x": 820,"y": 571}},\r
              "h2": {"coord": {"x": 820,"y": 755}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 356,"y": 1040}},\r
              "h1": {"coord": {"x": 858,"y": 1040}},\r
              "h2": {"coord": {"x": 232,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 67,"y": 992}},\r
              "h1": {"coord": {"x": 100,"y": 1005}},\r
              "h2": {"coord": {"x": 50,"y": 985}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 51,"y": 965}},\r
              "h1": {"coord": {"x": 48,"y": 979}},\r
              "h2": {"coord": {"x": 101,"y": 965}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 134,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 134,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 88,"y": 825}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 109,"y": 826}},\r
              "h1": {"coord": {"x": 96,"y": 823}},\r
              "h2": {"coord": {"x": 144,"y": 834}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 356,"y": 879}},\r
              "h1": {"coord": {"x": 240,"y": 879}},\r
              "h2": {"coord": {"x": 645,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 647,"y": 651}},\r
              "h1": {"coord": {"x": 647,"y": 827}},\r
              "h2": {"coord": {"x": 647,"y": 645}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 647,"y": 589}},\r
              "h1": {"coord": {"x": 647,"y": 619}},\r
              "h2": {"coord": {"x": 585,"y": 639}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 415,"y": 671}},\r
              "h1": {"coord": {"x": 505,"y": 671}},\r
              "h2": {"coord": {"x": 197,"y": 671}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 292}},\r
              "h1": {"coord": {"x": 40,"y": 512}},\r
              "h2": {"coord": {"x": 40,"y": 184}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -20}},\r
              "h1": {"coord": {"x": 125,"y": -20}},\r
              "h2": {"coord": {"x": 522,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 669,"y": 37}},\r
              "h1": {"coord": {"x": 606,"y": 7}},\r
              "h2": {"coord": {"x": 684,"y": 15}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 737,"y": 1}},\r
              "h1": {"coord": {"x": 709,"y": 1}},\r
              "h2": {"coord": {"x": 787,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 1}},\r
              "h1": {"coord": {"x": 854,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 907,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 909,"y": 6}},\r
              "h1": {"coord": {"x": 909,"y": 3}},\r
              "h2": {"coord": {"x": 959,"y": 6}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 909,"y": 160}},\r
              "h1": {"coord": {"x": 859,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 909,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 165}},\r
              "h1": {"coord": {"x": 907,"y": 165}},\r
              "h2": {"coord": {"x": 954,"y": 165}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 212}},\r
              "h1": {"coord": {"x": 604,"y": 212}, "use": false},\r
              "h2": {"coord": {"x": 654,"y": 164}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 117}},\r
              "h1": {"coord": {"x": 593,"y": 117}},\r
              "h2": {"coord": {"x": 355,"y": 117}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 203,"y": 293}},\r
              "h1": {"coord": {"x": 203,"y": 116}},\r
              "h2": {"coord": {"x": 203,"y": 437}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 415,"y": 534}},\r
              "h1": {"coord": {"x": 287,"y": 534}},\r
              "h2": {"coord": {"x": 543,"y": 534}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 340}},\r
              "h1": {"coord": {"x": 654,"y": 458}},\r
              "h2": {"coord": {"x": 654,"y": 271}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x62": {\r
      "id": "glyph-0x62",\r
      "advanceWidth": 1085,\r
      "usedIn": [\r
        "glyph-0x64"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": -5,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 0}},\r
              "h1": {"coord": {"x": 162,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 82}},\r
              "h1": {"coord": {"x": 293,"y": 37}},\r
              "h2": {"coord": {"x": 343,"y": 82}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 93}},\r
              "h1": {"coord": {"x": 243,"y": 93}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 25}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": -20}},\r
              "h1": {"coord": {"x": 451,"y": -20}},\r
              "h2": {"coord": {"x": 893,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 384}},\r
              "h1": {"coord": {"x": 1045,"y": 159}},\r
              "h2": {"coord": {"x": 1095,"y": 384}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 589}},\r
              "h1": {"coord": {"x": 995,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1095,"y": 589}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 589}},\r
              "h1": {"coord": {"x": 995,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1044,"y": 851}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 593,"y": 1040}},\r
              "h1": {"coord": {"x": 840,"y": 1040}},\r
              "h2": {"coord": {"x": 477,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 915}},\r
              "h1": {"coord": {"x": 373,"y": 992}},\r
              "h2": {"coord": {"x": 344,"y": 915}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1408}},\r
              "h1": {"coord": {"x": 243,"y": 1408}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1490}},\r
              "h1": {"coord": {"x": 257,"y": 1490}},\r
              "h2": {"coord": {"x": 262,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1332}},\r
              "h1": {"coord": {"x": -10,"y": 1332}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1329}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1327}},\r
              "h1": {"coord": {"x": 42,"y": 1327}},\r
              "h2": {"coord": {"x": 95,"y": 1327}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1327}},\r
              "h1": {"coord": {"x": 80,"y": 1327}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1327}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 164}},\r
              "h1": {"coord": {"x": 80,"y": 164}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 164}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 164}},\r
              "h1": {"coord": {"x": -5,"y": 164}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 164}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 159}},\r
              "h1": {"coord": {"x": 40,"y": 162}},\r
              "h2": {"coord": {"x": 90,"y": 159}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 605}},\r
              "h1": {"coord": {"x": 243,"y": 605}, "use": false},\r
              "h2": {"coord": {"x": 299,"y": 776}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 593,"y": 896}},\r
              "h1": {"coord": {"x": 439,"y": 896}},\r
              "h2": {"coord": {"x": 750,"y": 896}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 576}},\r
              "h1": {"coord": {"x": 880,"y": 766}},\r
              "h2": {"coord": {"x": 930,"y": 576}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 396}},\r
              "h1": {"coord": {"x": 830,"y": 396}, "use": false},\r
              "h2": {"coord": {"x": 880,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 133}},\r
              "h1": {"coord": {"x": 663,"y": 133}},\r
              "h2": {"coord": {"x": 484,"y": 133}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 403}},\r
              "h1": {"coord": {"x": 300,"y": 179}},\r
              "h2": {"coord": {"x": 343,"y": 403}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x70": {\r
      "id": "glyph-0x70",\r
      "advanceWidth": 1090,\r
      "usedIn": [\r
        "glyph-0x71"\r
      ],\r
      "contextCharacters": "gpgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1016}},\r
              "h1": {"coord": {"x": -10,"y": 1016}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1016}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 863}},\r
              "h1": {"coord": {"x": -10,"y": 863}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 858}},\r
              "h1": {"coord": {"x": 42,"y": 858}},\r
              "h2": {"coord": {"x": 95,"y": 858}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 858}},\r
              "h1": {"coord": {"x": 80,"y": 858}},\r
              "h2": {"coord": {"x": 130,"y": 507}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": -265}},\r
              "h1": {"coord": {"x": 80,"y": -265}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": -265}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": -265}},\r
              "h1": {"coord": {"x": -4,"y": -265}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": -270}},\r
              "h1": {"coord": {"x": 41,"y": -267}},\r
              "h2": {"coord": {"x": 91,"y": -270}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": -424}},\r
              "h1": {"coord": {"x": -9,"y": -424}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": -427}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": -429}},\r
              "h1": {"coord": {"x": 43,"y": -429}},\r
              "h2": {"coord": {"x": 96,"y": -429}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": -429}},\r
              "h1": {"coord": {"x": 162,"y": -429}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": -429}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": -347}},\r
              "h1": {"coord": {"x": 294,"y": -392}},\r
              "h2": {"coord": {"x": 344,"y": -347}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 99}},\r
              "h1": {"coord": {"x": 244,"y": 99}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 28}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 595,"y": -19}},\r
              "h1": {"coord": {"x": 453,"y": -19}},\r
              "h2": {"coord": {"x": 898,"y": -19}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1050,"y": 385}},\r
              "h1": {"coord": {"x": 1050,"y": 160}},\r
              "h2": {"coord": {"x": 1100,"y": 385}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1050,"y": 589}},\r
              "h1": {"coord": {"x": 1000,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1049,"y": 851}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 598,"y": 1041}},\r
              "h1": {"coord": {"x": 845,"y": 1041}},\r
              "h2": {"coord": {"x": 480,"y": 1041}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 910}},\r
              "h1": {"coord": {"x": 372,"y": 990}},\r
              "h2": {"coord": {"x": 343,"y": 910}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 940}},\r
              "h1": {"coord": {"x": 243,"y": 940}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 985}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1021}},\r
              "h1": {"coord": {"x": 257,"y": 1021}},\r
              "h2": {"coord": {"x": 262,"y": 1021}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1021}},\r
              "h1": {"coord": {"x": -5,"y": 1021}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1021}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1016}},\r
              "h1": {"coord": {"x": 40,"y": 1019}},\r
              "h2": {"coord": {"x": 90,"y": 1016}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -7,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 298,"y": 417}},\r
              "h1": {"coord": {"x": 298,"y": 182}},\r
              "h2": {"coord": {"x": 298,"y": 422}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 298,"y": 595}},\r
              "h1": {"coord": {"x": 298,"y": 550}},\r
              "h2": {"coord": {"x": 298,"y": 772}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 598,"y": 897}},\r
              "h1": {"coord": {"x": 441,"y": 897}},\r
              "h2": {"coord": {"x": 755,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 577}},\r
              "h1": {"coord": {"x": 885,"y": 767}},\r
              "h2": {"coord": {"x": 935,"y": 577}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 397}},\r
              "h1": {"coord": {"x": 835,"y": 397}, "use": false},\r
              "h2": {"coord": {"x": 885,"y": 156}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 595,"y": 134}},\r
              "h1": {"coord": {"x": 668,"y": 134}},\r
              "h2": {"coord": {"x": 487,"y": 134}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x64": {\r
      "id": "glyph-0x64",\r
      "advanceWidth": 1085,\r
      "shapes": [\r
        {\r
          "link": "glyph-0x62",\r
          "isFlippedEW": true\r
        }\r
      ]\r
    },\r
    "glyph-0x63": {\r
      "id": "glyph-0x63",\r
      "advanceWidth": 898,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 849,"y": 272}},\r
              "h1": {"coord": {"x": 854,"y": 270}},\r
              "h2": {"coord": {"x": 824,"y": 282}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 720,"y": 331}},\r
              "h1": {"coord": {"x": 753,"y": 316}},\r
              "h2": {"coord": {"x": 717,"y": 332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 327}},\r
              "h1": {"coord": {"x": 714,"y": 330}},\r
              "h2": {"coord": {"x": 714,"y": 173}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 585,"y": 142}},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 592}},\r
              "h1": {"coord": {"x": 154,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 592}},\r
              "h1": {"coord": {"x": 154,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 205,"y": 767}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 324,"y": 897}},\r
              "h2": {"coord": {"x": 529,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 429,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 429,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 590,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 739}},\r
              "h1": {"coord": {"x": 670,"y": 847}},\r
              "h2": {"coord": {"x": 698,"y": 729}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 736}},\r
              "h1": {"coord": {"x": 705,"y": 733}},\r
              "h2": {"coord": {"x": 742,"y": 750}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 837,"y": 799}},\r
              "h1": {"coord": {"x": 801,"y": 783}},\r
              "h2": {"coord": {"x": 840,"y": 800}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 842,"y": 808}},\r
              "h1": {"coord": {"x": 844,"y": 801}},\r
              "h2": {"coord": {"x": 801,"y": 949}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 670,"y": 1040}},\r
              "h2": {"coord": {"x": 529,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 429,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 429,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 233,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 590}},\r
              "h1": {"coord": {"x": 40,"y": 838}},\r
              "h2": {"coord": {"x": 90,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 590}},\r
              "h1": {"coord": {"x": -10,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 169,"y": -20}},\r
              "h2": {"coord": {"x": 785,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 262}},\r
              "h1": {"coord": {"x": 858,"y": 205}},\r
              "h2": {"coord": {"x": 858,"y": 267}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x71": {\r
      "id": "glyph-0x71",\r
      "advanceWidth": 1090,\r
      "contextCharacters": "gqpgy",\r
      "shapes": [\r
        {\r
          "link": "glyph-0x70",\r
          "isFlippedEW": true\r
        }\r
      ]\r
    },\r
    "glyph-0x6F": {\r
      "id": "glyph-0x6F",\r
      "advanceWidth": 959,\r
      "contextCharacters": "bgo",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 592}},\r
              "h1": {"coord": {"x": 869,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 918,"y": 839}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480,"y": 1040}},\r
              "h1": {"coord": {"x": 725,"y": 1040}},\r
              "h2": {"coord": {"x": 235,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 592}},\r
              "h1": {"coord": {"x": 42,"y": 839}},\r
              "h2": {"coord": {"x": 91,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": -10,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 170,"y": -20}},\r
              "h2": {"coord": {"x": 530,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 790,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 390}},\r
              "h1": {"coord": {"x": 918,"y": 175}},\r
              "h2": {"coord": {"x": 969,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 390}},\r
              "h1": {"coord": {"x": 869,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 592}},\r
              "h1": {"coord": {"x": 869,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 592}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 480,"y": 142}},\r
              "h1": {"coord": {"x": 587,"y": 142}},\r
              "h2": {"coord": {"x": 430,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 590}},\r
              "h1": {"coord": {"x": 154,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 205,"y": 590}},\r
              "h1": {"coord": {"x": 155,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 205,"y": 766}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480,"y": 897}},\r
              "h1": {"coord": {"x": 324,"y": 897}},\r
              "h2": {"coord": {"x": 636,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 590}},\r
              "h1": {"coord": {"x": 755,"y": 766}},\r
              "h2": {"coord": {"x": 805,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 590}},\r
              "h1": {"coord": {"x": 705,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 392}},\r
              "h1": {"coord": {"x": 705,"y": 392}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 158}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x65": {\r
      "id": "glyph-0x65",\r
      "advanceWidth": 932,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -1,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 429,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 530,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 714,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 877,"y": 155}},\r
              "h1": {"coord": {"x": 843,"y": 106}},\r
              "h2": {"coord": {"x": 886,"y": 168}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 734,"y": 244}},\r
              "h1": {"coord": {"x": 745,"y": 255}},\r
              "h2": {"coord": {"x": 680,"y": 187}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": 142}},\r
              "h1": {"coord": {"x": 564,"y": 142}},\r
              "h2": {"coord": {"x": 530,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 462}},\r
              "h1": {"coord": {"x": 154,"y": 462}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 462}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 489}},\r
              "h1": {"coord": {"x": 830,"y": 489}, "use": false},\r
              "h2": {"coord": {"x": 887,"y": 489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 502}},\r
              "h1": {"coord": {"x": 892,"y": 495}},\r
              "h2": {"coord": {"x": 942,"y": 502}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 573}},\r
              "h1": {"coord": {"x": 841,"y": 573}, "use": false},\r
              "h2": {"coord": {"x": 941,"y": 573}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 573}},\r
              "h1": {"coord": {"x": 841,"y": 573}, "use": false},\r
              "h2": {"coord": {"x": 886,"y": 887}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 482,"y": 1040}},\r
              "h1": {"coord": {"x": 724,"y": 1040}},\r
              "h2": {"coord": {"x": 532,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 1040}},\r
              "h1": {"coord": {"x": 431,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 531,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 1040}},\r
              "h1": {"coord": {"x": 431,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 236,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": 41,"y": 839}},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": -10,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 169,"y": -20}},\r
              "h2": {"coord": {"x": 529,"y": -20}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 481,"y": 897}},\r
              "h1": {"coord": {"x": 335,"y": 897}},\r
              "h2": {"coord": {"x": 531,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 897}},\r
              "h1": {"coord": {"x": 431,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 531,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 482,"y": 897}},\r
              "h1": {"coord": {"x": 432,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 624,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 636}},\r
              "h1": {"coord": {"x": 711,"y": 788}},\r
              "h2": {"coord": {"x": 775,"y": 636}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 207,"y": 622}},\r
              "h1": {"coord": {"x": 157,"y": 622}, "use": false},\r
              "h2": {"coord": {"x": 221,"y": 781}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x66": {\r
      "id": "glyph-0x66",\r
      "advanceWidth": 771,\r
      "usedIn": [\r
        "liga-f-i",\r
        "liga-f-f-i",\r
        "liga-f-f",\r
        "liga-f-f",\r
        "liga-f-l"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 855}},\r
              "h1": {"coord": {"x": 246,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 855}},\r
              "h1": {"coord": {"x": 451,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 504,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 860}},\r
              "h1": {"coord": {"x": 506,"y": 857}},\r
              "h2": {"coord": {"x": 556,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 1015}},\r
              "h1": {"coord": {"x": 456,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 506,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 1020}},\r
              "h1": {"coord": {"x": 504,"y": 1020}},\r
              "h2": {"coord": {"x": 551,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1020}},\r
              "h1": {"coord": {"x": 246,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1111}},\r
              "h1": {"coord": {"x": 246,"y": 1111}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1287}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 514,"y": 1339}},\r
              "h1": {"coord": {"x": 368,"y": 1339}},\r
              "h2": {"coord": {"x": 568,"y": 1339}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 671,"y": 1327}},\r
              "h1": {"coord": {"x": 627,"y": 1333}},\r
              "h2": {"coord": {"x": 684,"y": 1325}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 692,"y": 1326}},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 646,"y": 1343}, "use": false},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 646,"y": 1343}, "use": false},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 730,"y": 1466}},\r
              "h1": {"coord": {"x": 680,"y": 1466}, "use": false},\r
              "h2": {"coord": {"x": 733,"y": 1480}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 713,"y": 1493}},\r
              "h1": {"coord": {"x": 731,"y": 1489}},\r
              "h2": {"coord": {"x": 646,"y": 1508}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 514,"y": 1510}},\r
              "h1": {"coord": {"x": 541,"y": 1510}},\r
              "h2": {"coord": {"x": 136,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1076}},\r
              "h1": {"coord": {"x": 131,"y": 1226}},\r
              "h2": {"coord": {"x": 181,"y": 1076}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1020}},\r
              "h1": {"coord": {"x": 81,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 855}},\r
              "h1": {"coord": {"x": 81,"y": 855}},\r
              "h2": {"coord": {"x": 181,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 165}},\r
              "h1": {"coord": {"x": 81,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x67": {\r
      "id": "glyph-0x67",\r
      "advanceWidth": 1048,\r
      "contextCharacters": "bgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 1020}},\r
              "h1": {"coord": {"x": 953,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 1053,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 1020}},\r
              "h1": {"coord": {"x": 822,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 849,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 991}},\r
              "h1": {"coord": {"x": 828,"y": 1009}},\r
              "h2": {"coord": {"x": 864,"y": 991}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 781,"y": 947}},\r
              "h1": {"coord": {"x": 731,"y": 947}, "use": false},\r
              "h2": {"coord": {"x": 704,"y": 1005}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1040}},\r
              "h1": {"coord": {"x": 609,"y": 1040}},\r
              "h2": {"coord": {"x": 249,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 571}},\r
              "h1": {"coord": {"x": 40,"y": 830}},\r
              "h2": {"coord": {"x": 40,"y": 471}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 319}},\r
              "h1": {"coord": {"x": 71,"y": 385}},\r
              "h2": {"coord": {"x": 85,"y": 272}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 59,"y": 162}},\r
              "h1": {"coord": {"x": 59,"y": 211}},\r
              "h2": {"coord": {"x": 59,"y": 58}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 348,"y": -100}},\r
              "h1": {"coord": {"x": 118,"y": -100}},\r
              "h2": {"coord": {"x": 546,"y": -100}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 773,"y": -44}},\r
              "h1": {"coord": {"x": 661,"y": -44}},\r
              "h2": {"coord": {"x": 803,"y": -44}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 796,"y": -79}},\r
              "h1": {"coord": {"x": 796,"y": -58}},\r
              "h2": {"coord": {"x": 796,"y": -272}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -287}},\r
              "h1": {"coord": {"x": 708,"y": -287}},\r
              "h2": {"coord": {"x": 373,"y": -287}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 228,"y": -271}},\r
              "h1": {"coord": {"x": 267,"y": -278}},\r
              "h2": {"coord": {"x": 222,"y": -270}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": -279}},\r
              "h1": {"coord": {"x": 216,"y": -273}},\r
              "h2": {"coord": {"x": 264,"y": -279}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 176,"y": -418}},\r
              "h1": {"coord": {"x": 126,"y": -418}, "use": false},\r
              "h2": {"coord": {"x": 174,"y": -425}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": -433}},\r
              "h1": {"coord": {"x": 178,"y": -432}},\r
              "h2": {"coord": {"x": 249,"y": -447}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -450}},\r
              "h1": {"coord": {"x": 365,"y": -450}},\r
              "h2": {"coord": {"x": 907,"y": -450}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": -44}},\r
              "h1": {"coord": {"x": 956,"y": -259}},\r
              "h2": {"coord": {"x": 956,"y": 32}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 137}},\r
              "h1": {"coord": {"x": 947,"y": 137}},\r
              "h2": {"coord": {"x": 677,"y": 137}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 382,"y": 67}},\r
              "h1": {"coord": {"x": 545,"y": 67}},\r
              "h2": {"coord": {"x": 249,"y": 67}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 210,"y": 165}},\r
              "h1": {"coord": {"x": 210,"y": 103}},\r
              "h2": {"coord": {"x": 210,"y": 191}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 242,"y": 236}},\r
              "h1": {"coord": {"x": 223,"y": 217}},\r
              "h2": {"coord": {"x": 315,"y": 199}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 180}},\r
              "h1": {"coord": {"x": 405,"y": 180}},\r
              "h2": {"coord": {"x": 633,"y": 180}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 270}},\r
              "h1": {"coord": {"x": 743,"y": 211}},\r
              "h2": {"coord": {"x": 919,"y": 340}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 571}},\r
              "h1": {"coord": {"x": 969,"y": 444}},\r
              "h2": {"coord": {"x": 969,"y": 670}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 838}},\r
              "h1": {"coord": {"x": 939,"y": 762}},\r
              "h2": {"coord": {"x": 937,"y": 838}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 899,"y": 857}},\r
              "h1": {"coord": {"x": 849,"y": 857}, "use": false},\r
              "h2": {"coord": {"x": 949,"y": 857}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 857}},\r
              "h1": {"coord": {"x": 953,"y": 857}, "use": false},\r
              "h2": {"coord": {"x": 1006,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1008,"y": 862}},\r
              "h1": {"coord": {"x": 1008,"y": 859}},\r
              "h2": {"coord": {"x": 1058,"y": 862}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1008,"y": 1015}},\r
              "h1": {"coord": {"x": 958,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1008,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 1020}},\r
              "h1": {"coord": {"x": 1006,"y": 1020}},\r
              "h2": {"coord": {"x": 1053,"y": 1020}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 568}},\r
              "h1": {"coord": {"x": 209,"y": 343}},\r
              "h2": {"coord": {"x": 209,"y": 751}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 901}},\r
              "h1": {"coord": {"x": 342,"y": 901}},\r
              "h2": {"coord": {"x": 668,"y": 901}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 568}},\r
              "h1": {"coord": {"x": 800,"y": 751}},\r
              "h2": {"coord": {"x": 800,"y": 343}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 319}},\r
              "h1": {"coord": {"x": 594,"y": 319}},\r
              "h2": {"coord": {"x": 416,"y": 319}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x68": {\r
      "id": "glyph-0x68",\r
      "advanceWidth": 1088,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 14,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 165}},\r
              "h1": {"coord": {"x": 1046,"y": 165}},\r
              "h2": {"coord": {"x": 1093,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 165}},\r
              "h1": {"coord": {"x": 933,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 983,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 1039}},\r
              "h1": {"coord": {"x": 839,"y": 1039}},\r
              "h2": {"coord": {"x": 434,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 975}},\r
              "h1": {"coord": {"x": 355,"y": 1015}},\r
              "h2": {"coord": {"x": 345,"y": 975}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 1408}},\r
              "h1": {"coord": {"x": 245,"y": 1408}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 258,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 791}},\r
              "h1": {"coord": {"x": 245,"y": 791}, "use": false},\r
              "h2": {"coord": {"x": 366,"y": 875}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 894}},\r
              "h1": {"coord": {"x": 482,"y": 894}},\r
              "h2": {"coord": {"x": 574,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 816,"y": 876}},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 766,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 165}},\r
              "h1": {"coord": {"x": 766,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 165}},\r
              "h1": {"coord": {"x": 681,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 160}},\r
              "h1": {"coord": {"x": 726,"y": 163}},\r
              "h2": {"coord": {"x": 776,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 5}},\r
              "h1": {"coord": {"x": 676,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 0}},\r
              "h1": {"coord": {"x": 728,"y": 0}},\r
              "h2": {"coord": {"x": 781,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 0}},\r
              "h1": {"coord": {"x": 993,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1046,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 5}},\r
              "h1": {"coord": {"x": 1048,"y": 2}},\r
              "h2": {"coord": {"x": 1098,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 160}},\r
              "h1": {"coord": {"x": 998,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1048,"y": 163}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x69": {\r
      "id": "glyph-0x69",\r
      "advanceWidth": 412,\r
      "usedIn": [\r
        "liga-f-i"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 55,"y": 165}},\r
              "h1": {"coord": {"x": 5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 52,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 160}},\r
              "h1": {"coord": {"x": 50,"y": 163}},\r
              "h2": {"coord": {"x": 100,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 5}},\r
              "h1": {"coord": {"x": 0,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 50,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 55,"y": 0}},\r
              "h1": {"coord": {"x": 52,"y": 0}},\r
              "h2": {"coord": {"x": 105,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 367,"y": 0}},\r
              "h1": {"coord": {"x": 317,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 5}},\r
              "h1": {"coord": {"x": 372,"y": 2}},\r
              "h2": {"coord": {"x": 422,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 160}},\r
              "h1": {"coord": {"x": 322,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 367,"y": 165}},\r
              "h1": {"coord": {"x": 370,"y": 165}},\r
              "h2": {"coord": {"x": 417,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 938}},\r
              "h1": {"coord": {"x": 245,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1020}},\r
              "h1": {"coord": {"x": 259,"y": 1020}},\r
              "h2": {"coord": {"x": 263,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 92,"y": 1187}},\r
              "h1": {"coord": {"x": 69,"y": 1204}},\r
              "h2": {"coord": {"x": 112.10440353665814,"y": 1172.1402234729048}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 171,"y": 1164}},\r
              "h1": {"coord": {"x": 139,"y": 1164}},\r
              "h2": {"coord": {"x": 203,"y": 1164}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 1187}},\r
              "h1": {"coord": {"x": 230,"y": 1172}},\r
              "h2": {"coord": {"x": 273,"y": 1204}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 286,"y": 1261}},\r
              "h1": {"coord": {"x": 286,"y": 1230}},\r
              "h2": {"coord": {"x": 286,"y": 1325}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 171,"y": 1377}},\r
              "h1": {"coord": {"x": 234,"y": 1377}},\r
              "h2": {"coord": {"x": 108,"y": 1377}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 56,"y": 1261}},\r
              "h1": {"coord": {"x": 56,"y": 1325}},\r
              "h2": {"coord": {"x": 56,"y": 1230}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6A": {\r
      "id": "glyph-0x6A",\r
      "advanceWidth": 300,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 57,"y": 1187}},\r
              "h1": {"coord": {"x": 34,"y": 1204}},\r
              "h2": {"coord": {"x": 77.10440353665814,"y": 1172.1402234729048}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 136,"y": 1165}},\r
              "h1": {"coord": {"x": 104,"y": 1165}},\r
              "h2": {"coord": {"x": 168,"y": 1165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1187}},\r
              "h1": {"coord": {"x": 195,"y": 1172}},\r
              "h2": {"coord": {"x": 238,"y": 1204}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 251,"y": 1261}},\r
              "h1": {"coord": {"x": 251,"y": 1230}},\r
              "h2": {"coord": {"x": 251,"y": 1325}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 136,"y": 1378}},\r
              "h1": {"coord": {"x": 199,"y": 1378}},\r
              "h2": {"coord": {"x": 73,"y": 1378}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 21,"y": 1261}},\r
              "h1": {"coord": {"x": 21,"y": 1325}},\r
              "h2": {"coord": {"x": 21,"y": 1230}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": -322,"y": -419}},\r
              "h1": {"coord": {"x": -340,"y": -415}},\r
              "h2": {"coord": {"x": -255,"y": -434}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -123,"y": -436}},\r
              "h1": {"coord": {"x": -150,"y": -436}},\r
              "h2": {"coord": {"x": 255,"y": -436}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": -1}},\r
              "h1": {"coord": {"x": 260,"y": -151}},\r
              "h2": {"coord": {"x": 310,"y": -1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 938}},\r
              "h1": {"coord": {"x": 210,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 260,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 178,"y": 1020}},\r
              "h1": {"coord": {"x": 224,"y": 1020}},\r
              "h2": {"coord": {"x": 228,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 10,"y": 1020}},\r
              "h1": {"coord": {"x": -40,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 7,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 5,"y": 1015}},\r
              "h1": {"coord": {"x": 5,"y": 1018}},\r
              "h2": {"coord": {"x": 55,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 5,"y": 861}},\r
              "h1": {"coord": {"x": -45,"y": 861}, "use": false},\r
              "h2": {"coord": {"x": 5,"y": 858}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 10,"y": 856}},\r
              "h1": {"coord": {"x": 7,"y": 856}},\r
              "h2": {"coord": {"x": 60,"y": 856}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 95,"y": 856}},\r
              "h1": {"coord": {"x": 45,"y": 856}, "use": false},\r
              "h2": {"coord": {"x": 145,"y": 856}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 95,"y": -37}},\r
              "h1": {"coord": {"x": 45,"y": -37}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": -213}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -123,"y": -265}},\r
              "h1": {"coord": {"x": 23,"y": -265}},\r
              "h2": {"coord": {"x": -177,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -280,"y": -253}},\r
              "h1": {"coord": {"x": -236,"y": -259}},\r
              "h2": {"coord": {"x": -293,"y": -251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -301,"y": -252}},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -355,"y": -269}, "use": false},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -355,"y": -269}, "use": false},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -339,"y": -392}},\r
              "h1": {"coord": {"x": -389,"y": -392}, "use": false},\r
              "h2": {"coord": {"x": -342,"y": -406}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6B": {\r
      "id": "glyph-0x6B",\r
      "advanceWidth": 846,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 524}},\r
              "h1": {"coord": {"x": 246,"y": 524}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 524}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 540}},\r
              "h1": {"coord": {"x": 262,"y": 540}, "use": false},\r
              "h2": {"coord": {"x": 400,"y": 394}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 623,"y": 26}},\r
              "h1": {"coord": {"x": 613,"y": 40}},\r
              "h2": {"coord": {"x": 636,"y": 8}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 685,"y": 0}},\r
              "h1": {"coord": {"x": 662,"y": 0}},\r
              "h2": {"coord": {"x": 735,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 0}},\r
              "h1": {"coord": {"x": 751,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 804,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 5}},\r
              "h1": {"coord": {"x": 806,"y": 2}},\r
              "h2": {"coord": {"x": 856,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 160}},\r
              "h1": {"coord": {"x": 756,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 806,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 165}},\r
              "h1": {"coord": {"x": 804,"y": 165}},\r
              "h2": {"coord": {"x": 851,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 165}},\r
              "h1": {"coord": {"x": 676,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 776,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 650}},\r
              "h1": {"coord": {"x": 375,"y": 650}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 650}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 854}},\r
              "h1": {"coord": {"x": 584,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 854}},\r
              "h1": {"coord": {"x": 751,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 804,"y": 854}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 859}},\r
              "h1": {"coord": {"x": 806,"y": 856}},\r
              "h2": {"coord": {"x": 856,"y": 859}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 1014}},\r
              "h1": {"coord": {"x": 756,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 806,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 1019}},\r
              "h1": {"coord": {"x": 804,"y": 1019}},\r
              "h2": {"coord": {"x": 851,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 632,"y": 1019}},\r
              "h1": {"coord": {"x": 582,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 609,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 574,"y": 995}},\r
              "h1": {"coord": {"x": 589,"y": 1010}},\r
              "h2": {"coord": {"x": 562,"y": 983}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 724}},\r
              "h1": {"coord": {"x": 376,"y": 802}},\r
              "h2": {"coord": {"x": 346,"y": 724}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1407}},\r
              "h1": {"coord": {"x": 246,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 259,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6C": {\r
      "id": "glyph-0x6C",\r
      "advanceWidth": 426,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1407}},\r
              "h1": {"coord": {"x": 246,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 259,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6D": {\r
      "id": "glyph-0x6D",\r
      "advanceWidth": 1556,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 165}},\r
              "h1": {"coord": {"x": 1461,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1561,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 165}},\r
              "h1": {"coord": {"x": 1401,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1501,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 635}},\r
              "h1": {"coord": {"x": 1401,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1501,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 635}},\r
              "h1": {"coord": {"x": 1401,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1451,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 1039}},\r
              "h1": {"coord": {"x": 1337,"y": 1039}},\r
              "h2": {"coord": {"x": 920,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 773,"y": 960}},\r
              "h1": {"coord": {"x": 835,"y": 1009}},\r
              "h2": {"coord": {"x": 707,"y": 1010}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 1039}},\r
              "h1": {"coord": {"x": 616,"y": 1039}},\r
              "h2": {"coord": {"x": 403,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 275,"y": 989}},\r
              "h1": {"coord": {"x": 332,"y": 1021}},\r
              "h2": {"coord": {"x": 260,"y": 1007}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1019}},\r
              "h1": {"coord": {"x": 238,"y": 1019}},\r
              "h2": {"coord": {"x": 262,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1019}},\r
              "h1": {"coord": {"x": -5,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1014}},\r
              "h1": {"coord": {"x": 40,"y": 1017}},\r
              "h2": {"coord": {"x": 90,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 859}},\r
              "h1": {"coord": {"x": -10,"y": 859}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 856}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 854}},\r
              "h1": {"coord": {"x": 42,"y": 854}},\r
              "h2": {"coord": {"x": 95,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 854}},\r
              "h1": {"coord": {"x": 79,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 165}},\r
              "h1": {"coord": {"x": 79,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 165}},\r
              "h1": {"coord": {"x": 244,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 344,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 830}},\r
              "h1": {"coord": {"x": 244,"y": 830}, "use": false},\r
              "h2": {"coord": {"x": 363,"y": 881}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 894}},\r
              "h1": {"coord": {"x": 449,"y": 894}},\r
              "h2": {"coord": {"x": 531,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 635}},\r
              "h1": {"coord": {"x": 743,"y": 876}},\r
              "h2": {"coord": {"x": 793,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 635}},\r
              "h1": {"coord": {"x": 693,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 793,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 165}},\r
              "h1": {"coord": {"x": 693,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 793,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 165}},\r
              "h1": {"coord": {"x": 651,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 698,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 160}},\r
              "h1": {"coord": {"x": 696,"y": 163}},\r
              "h2": {"coord": {"x": 746,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 5}},\r
              "h1": {"coord": {"x": 646,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 696,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 0}},\r
              "h1": {"coord": {"x": 698,"y": 0}},\r
              "h2": {"coord": {"x": 751,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 0}},\r
              "h1": {"coord": {"x": 903,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 956,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 5}},\r
              "h1": {"coord": {"x": 958,"y": 2}},\r
              "h2": {"coord": {"x": 1008,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 160}},\r
              "h1": {"coord": {"x": 908,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 958,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 165}},\r
              "h1": {"coord": {"x": 956,"y": 165}},\r
              "h2": {"coord": {"x": 1003,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 165}},\r
              "h1": {"coord": {"x": 860,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 960,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 635}},\r
              "h1": {"coord": {"x": 860,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 960,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 635}},\r
              "h1": {"coord": {"x": 860,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 910,"y": 714}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 865,"y": 849}},\r
              "h1": {"coord": {"x": 896,"y": 787}},\r
              "h2": {"coord": {"x": 927,"y": 884}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 894}},\r
              "h1": {"coord": {"x": 996,"y": 894}},\r
              "h2": {"coord": {"x": 1072,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 635}},\r
              "h1": {"coord": {"x": 1284,"y": 876}},\r
              "h2": {"coord": {"x": 1334,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 635}},\r
              "h1": {"coord": {"x": 1234,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 165}},\r
              "h1": {"coord": {"x": 1234,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1199,"y": 165}},\r
              "h1": {"coord": {"x": 1149,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1196,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1194,"y": 160}},\r
              "h1": {"coord": {"x": 1194,"y": 163}},\r
              "h2": {"coord": {"x": 1244,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1194,"y": 5}},\r
              "h1": {"coord": {"x": 1144,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 1194,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1199,"y": 0}},\r
              "h1": {"coord": {"x": 1196,"y": 0}},\r
              "h2": {"coord": {"x": 1249,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 0}},\r
              "h1": {"coord": {"x": 1461,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1514,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1516,"y": 5}},\r
              "h1": {"coord": {"x": 1516,"y": 2}},\r
              "h2": {"coord": {"x": 1566,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1516,"y": 160}},\r
              "h1": {"coord": {"x": 1466,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1516,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 165}},\r
              "h1": {"coord": {"x": 1514,"y": 165}},\r
              "h2": {"coord": {"x": 1561,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6E": {\r
      "id": "glyph-0x6E",\r
      "advanceWidth": 1088,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 165}},\r
              "h1": {"coord": {"x": 1046,"y": 165}},\r
              "h2": {"coord": {"x": 1093,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 165}},\r
              "h1": {"coord": {"x": 933,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 983,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 1039}},\r
              "h1": {"coord": {"x": 839,"y": 1039}},\r
              "h2": {"coord": {"x": 429,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 287,"y": 969}},\r
              "h1": {"coord": {"x": 348,"y": 1012}},\r
              "h2": {"coord": {"x": 274,"y": 998}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1019}},\r
              "h1": {"coord": {"x": 246,"y": 1019}},\r
              "h2": {"coord": {"x": 262,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1019}},\r
              "h1": {"coord": {"x": -5,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1014}},\r
              "h1": {"coord": {"x": 40,"y": 1017}},\r
              "h2": {"coord": {"x": 90,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 859}},\r
              "h1": {"coord": {"x": -10,"y": 859}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 856}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 854}},\r
              "h1": {"coord": {"x": 42,"y": 854}},\r
              "h2": {"coord": {"x": 95,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 854}},\r
              "h1": {"coord": {"x": 79,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 165}},\r
              "h1": {"coord": {"x": 79,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 165}},\r
              "h1": {"coord": {"x": 244,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 344,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 790}},\r
              "h1": {"coord": {"x": 244,"y": 790}, "use": false},\r
              "h2": {"coord": {"x": 365,"y": 874}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 894}},\r
              "h1": {"coord": {"x": 482,"y": 894}},\r
              "h2": {"coord": {"x": 574,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 816,"y": 876}},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 165}},\r
              "h1": {"coord": {"x": 766,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 165}},\r
              "h1": {"coord": {"x": 681,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 160}},\r
              "h1": {"coord": {"x": 726,"y": 163}},\r
              "h2": {"coord": {"x": 776,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 5}},\r
              "h1": {"coord": {"x": 676,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 0}},\r
              "h1": {"coord": {"x": 728,"y": 0}},\r
              "h2": {"coord": {"x": 781,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 0}},\r
              "h1": {"coord": {"x": 993,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1046,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 5}},\r
              "h1": {"coord": {"x": 1048,"y": 2}},\r
              "h2": {"coord": {"x": 1098,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 160}},\r
              "h1": {"coord": {"x": 998,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1048,"y": 163}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x72": {\r
      "id": "glyph-0x72",\r
      "advanceWidth": 866,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 69,"y": 165}},\r
              "h1": {"coord": {"x": 19,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 66,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 64,"y": 160}},\r
              "h1": {"coord": {"x": 64,"y": 163}},\r
              "h2": {"coord": {"x": 114,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 64,"y": 5}},\r
              "h1": {"coord": {"x": 14,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 64,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 69,"y": 0}},\r
              "h1": {"coord": {"x": 66,"y": 0}},\r
              "h2": {"coord": {"x": 119,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 380,"y": 0}},\r
              "h1": {"coord": {"x": 330,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 383,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 5}},\r
              "h1": {"coord": {"x": 385,"y": 2}},\r
              "h2": {"coord": {"x": 435,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 160}},\r
              "h1": {"coord": {"x": 335,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 385,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 380,"y": 165}},\r
              "h1": {"coord": {"x": 383,"y": 165}},\r
              "h2": {"coord": {"x": 430,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 698}},\r
              "h1": {"coord": {"x": 245,"y": 698}, "use": false},\r
              "h2": {"coord": {"x": 340,"y": 814}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 596,"y": 864}},\r
              "h1": {"coord": {"x": 464,"y": 864}},\r
              "h2": {"coord": {"x": 613,"y": 864}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 737,"y": 844}},\r
              "h1": {"coord": {"x": 675,"y": 864}},\r
              "h2": {"coord": {"x": 751,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 852}},\r
              "h1": {"coord": {"x": 756,"y": 838}},\r
              "h2": {"coord": {"x": 814,"y": 852}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 823,"y": 979}},\r
              "h1": {"coord": {"x": 773,"y": 979}, "use": false},\r
              "h2": {"coord": {"x": 829,"y": 991}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1001}},\r
              "h1": {"coord": {"x": 827,"y": 997}},\r
              "h2": {"coord": {"x": 869,"y": 1001}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 1002}},\r
              "h1": {"coord": {"x": 764,"y": 1002}, "use": false},\r
              "h2": {"coord": {"x": 864,"y": 1002}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 1002}},\r
              "h1": {"coord": {"x": 764,"y": 1002}, "use": false},\r
              "h2": {"coord": {"x": 752,"y": 1026}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 596,"y": 1040}},\r
              "h1": {"coord": {"x": 679,"y": 1040}},\r
              "h2": {"coord": {"x": 455,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 922}},\r
              "h1": {"coord": {"x": 359,"y": 991}},\r
              "h2": {"coord": {"x": 345,"y": 922}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 938}},\r
              "h1": {"coord": {"x": 245,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1020}},\r
              "h1": {"coord": {"x": 259,"y": 1020}},\r
              "h2": {"coord": {"x": 263,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x73": {\r
      "id": "glyph-0x73",\r
      "advanceWidth": 925,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 307,"y": 390}},\r
              "h1": {"coord": {"x": 257,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 416}},\r
              "h1": {"coord": {"x": 600,"y": 416}},\r
              "h2": {"coord": {"x": 742,"y": 416}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 735,"y": 381}},\r
              "h1": {"coord": {"x": 735,"y": 402}},\r
              "h2": {"coord": {"x": 735,"y": 188}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 374,"y": 143}},\r
              "h1": {"coord": {"x": 631,"y": 143}},\r
              "h2": {"coord": {"x": 322,"y": 143}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 97,"y": 159}},\r
              "h1": {"coord": {"x": 136,"y": 152}},\r
              "h2": {"coord": {"x": 91,"y": 160}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 83,"y": 151}},\r
              "h1": {"coord": {"x": 85,"y": 157}},\r
              "h2": {"coord": {"x": 133,"y": 151}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 12}},\r
              "h1": {"coord": {"x": -5,"y": 12}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": 5}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 54,"y": -3}},\r
              "h1": {"coord": {"x": 47,"y": -2}},\r
              "h2": {"coord": {"x": 118,"y": -17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 374,"y": -20}},\r
              "h1": {"coord": {"x": 314,"y": -20}},\r
              "h2": {"coord": {"x": 814,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 406}},\r
              "h1": {"coord": {"x": 885,"y": 191}},\r
              "h2": {"coord": {"x": 885,"y": 482}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 730,"y": 587}},\r
              "h1": {"coord": {"x": 876,"y": 587}},\r
              "h2": {"coord": {"x": 606,"y": 587}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 351,"y": 547}},\r
              "h1": {"coord": {"x": 514,"y": 547}},\r
              "h2": {"coord": {"x": 218,"y": 547}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 199,"y": 645}},\r
              "h1": {"coord": {"x": 199,"y": 583}},\r
              "h2": {"coord": {"x": 199,"y": 695}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 879}},\r
              "h1": {"coord": {"x": 186,"y": 879}},\r
              "h2": {"coord": {"x": 676,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 807,"y": 826}},\r
              "h1": {"coord": {"x": 772,"y": 834}},\r
              "h2": {"coord": {"x": 820,"y": 823}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 828,"y": 825}},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 782,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 782,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 865,"y": 965}},\r
              "h1": {"coord": {"x": 815,"y": 965}, "use": false},\r
              "h2": {"coord": {"x": 868,"y": 979}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 849,"y": 992}},\r
              "h1": {"coord": {"x": 866,"y": 985}},\r
              "h2": {"coord": {"x": 816,"y": 1005}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 1040}},\r
              "h1": {"coord": {"x": 684,"y": 1040}},\r
              "h2": {"coord": {"x": 55,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 612}},\r
              "h1": {"coord": {"x": 40,"y": 666}},\r
              "h2": {"coord": {"x": 40,"y": 510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 307,"y": 390}},\r
              "h1": {"coord": {"x": 99,"y": 390}},\r
              "h2": {"coord": {"x": 357,"y": 390}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x74": {\r
      "id": "glyph-0x74",\r
      "advanceWidth": 546,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 855}},\r
              "h1": {"coord": {"x": 451,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 504,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 860}},\r
              "h1": {"coord": {"x": 506,"y": 857}},\r
              "h2": {"coord": {"x": 556,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 1015}},\r
              "h1": {"coord": {"x": 456,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 506,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 1020}},\r
              "h1": {"coord": {"x": 504,"y": 1020}},\r
              "h2": {"coord": {"x": 551,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 1020}},\r
              "h1": {"coord": {"x": 268,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 368,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 1382}},\r
              "h1": {"coord": {"x": 268,"y": 1382}, "use": false},\r
              "h2": {"coord": {"x": 318,"y": 1387}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 310,"y": 1390}},\r
              "h1": {"coord": {"x": 315,"y": 1390}},\r
              "h2": {"coord": {"x": 360,"y": 1390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 162,"y": 1390}},\r
              "h1": {"coord": {"x": 112,"y": 1390}, "use": false},\r
              "h2": {"coord": {"x": 157,"y": 1390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 1382}},\r
              "h1": {"coord": {"x": 153,"y": 1387}},\r
              "h2": {"coord": {"x": 203,"y": 1382}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 1020}},\r
              "h1": {"coord": {"x": 103,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 203,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 855}},\r
              "h1": {"coord": {"x": 103,"y": 855}},\r
              "h2": {"coord": {"x": 203,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 91}},\r
              "h1": {"coord": {"x": 103,"y": 91}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 41}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 244,"y": 0}},\r
              "h1": {"coord": {"x": 194,"y": 0}},\r
              "h2": {"coord": {"x": 294,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 446,"y": 0}},\r
              "h1": {"coord": {"x": 396,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 449,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 5}},\r
              "h1": {"coord": {"x": 451,"y": 2}},\r
              "h2": {"coord": {"x": 501,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 160}},\r
              "h1": {"coord": {"x": 401,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 451,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 446,"y": 165}},\r
              "h1": {"coord": {"x": 449,"y": 165}},\r
              "h2": {"coord": {"x": 496,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 327,"y": 165}},\r
              "h1": {"coord": {"x": 277,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 322,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 174}},\r
              "h1": {"coord": {"x": 318,"y": 169}},\r
              "h2": {"coord": {"x": 368,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 855}},\r
              "h1": {"coord": {"x": 268,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 368,"y": 855}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x75": {\r
      "id": "glyph-0x75",\r
      "advanceWidth": 1022,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 366}},\r
              "h1": {"coord": {"x": -10,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 47,"y": 149}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 487,"y": -20}},\r
              "h1": {"coord": {"x": 192,"y": -20}},\r
              "h2": {"coord": {"x": 594,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 735,"y": 50}},\r
              "h1": {"coord": {"x": 674,"y": 7}},\r
              "h2": {"coord": {"x": 748,"y": 21}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 811,"y": 0}},\r
              "h1": {"coord": {"x": 777,"y": 0}},\r
              "h2": {"coord": {"x": 861,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 0}},\r
              "h1": {"coord": {"x": 927,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 5}},\r
              "h1": {"coord": {"x": 982,"y": 2}},\r
              "h2": {"coord": {"x": 1032,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 160}},\r
              "h1": {"coord": {"x": 932,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 165}},\r
              "h1": {"coord": {"x": 980,"y": 165}},\r
              "h2": {"coord": {"x": 1027,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 893,"y": 165}},\r
              "h1": {"coord": {"x": 843,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 943,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 855}},\r
              "h1": {"coord": {"x": 842,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 942,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 855}},\r
              "h1": {"coord": {"x": 927,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 860}},\r
              "h1": {"coord": {"x": 982,"y": 857}},\r
              "h2": {"coord": {"x": 1032,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 1014}},\r
              "h1": {"coord": {"x": 932,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 1019}},\r
              "h1": {"coord": {"x": 980,"y": 1019}},\r
              "h2": {"coord": {"x": 1027,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 810,"y": 1019}},\r
              "h1": {"coord": {"x": 760,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 765,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 937}},\r
              "h1": {"coord": {"x": 729,"y": 982}},\r
              "h2": {"coord": {"x": 779,"y": 937}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 229}},\r
              "h1": {"coord": {"x": 679,"y": 229}, "use": false},\r
              "h2": {"coord": {"x": 658,"y": 145}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 487,"y": 125}},\r
              "h1": {"coord": {"x": 541,"y": 125}},\r
              "h2": {"coord": {"x": 449,"y": 125}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 384}},\r
              "h1": {"coord": {"x": 206,"y": 143}},\r
              "h2": {"coord": {"x": 256,"y": 384}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 205,"y": 855}},\r
              "h1": {"coord": {"x": 155,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 255,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 855}},\r
              "h1": {"coord": {"x": 240,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 860}},\r
              "h1": {"coord": {"x": 295,"y": 857}},\r
              "h2": {"coord": {"x": 345,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 1015}},\r
              "h1": {"coord": {"x": 245,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 1020}},\r
              "h1": {"coord": {"x": 293,"y": 1020}},\r
              "h2": {"coord": {"x": 340,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 122,"y": 1020}},\r
              "h1": {"coord": {"x": 72,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 76,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 937}},\r
              "h1": {"coord": {"x": 40,"y": 983}},\r
              "h2": {"coord": {"x": 90,"y": 937}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 366}},\r
              "h1": {"coord": {"x": -10,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 366}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x76": {\r
      "id": "glyph-0x76",\r
      "advanceWidth": 1089,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1044,"y": 1020}},\r
              "h1": {"coord": {"x": 1047,"y": 1020}},\r
              "h2": {"coord": {"x": 1094,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 906,"y": 1020}},\r
              "h1": {"coord": {"x": 856,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 831,"y": 972}},\r
              "h1": {"coord": {"x": 844,"y": 1000}},\r
              "h2": {"coord": {"x": 881,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 831,"y": 972}},\r
              "h1": {"coord": {"x": 781,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 881,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 571,"y": 292}},\r
              "h1": {"coord": {"x": 521,"y": 292}, "use": false},\r
              "h2": {"coord": {"x": 621,"y": 292}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 224,"y": 1020}},\r
              "h1": {"coord": {"x": 174,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 274,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1020}},\r
              "h1": {"coord": {"x": -10,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 521,"y": 0}},\r
              "h1": {"coord": {"x": 471,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 571,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 632,"y": 0}},\r
              "h1": {"coord": {"x": 582,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 682,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 855}},\r
              "h1": {"coord": {"x": 903,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1003,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1044,"y": 855}},\r
              "h1": {"coord": {"x": 994,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1047,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1049,"y": 860}},\r
              "h1": {"coord": {"x": 1049,"y": 857}},\r
              "h2": {"coord": {"x": 1099,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1049,"y": 1015}},\r
              "h1": {"coord": {"x": 999,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1049,"y": 1018}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x77": {\r
      "id": "glyph-0x77",\r
      "advanceWidth": 1374,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1329,"y": 1020}},\r
              "h1": {"coord": {"x": 1332,"y": 1020}},\r
              "h2": {"coord": {"x": 1379,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1191,"y": 1020}},\r
              "h1": {"coord": {"x": 1141,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 1158,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1116,"y": 972}},\r
              "h1": {"coord": {"x": 1129,"y": 1000}},\r
              "h2": {"coord": {"x": 1166,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1116,"y": 972}},\r
              "h1": {"coord": {"x": 1066,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 1166,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 970}},\r
              "h1": {"coord": {"x": 1065,"y": 970}, "use": false},\r
              "h2": {"coord": {"x": 1112,"y": 962}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1109,"y": 946}},\r
              "h1": {"coord": {"x": 1110,"y": 955}},\r
              "h2": {"coord": {"x": 1159,"y": 946}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 944,"y": 312}},\r
              "h1": {"coord": {"x": 894,"y": 312}, "use": false},\r
              "h2": {"coord": {"x": 994,"y": 312}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 820}},\r
              "h1": {"coord": {"x": 676,"y": 820}, "use": false},\r
              "h2": {"coord": {"x": 776,"y": 820}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 680,"y": 820}},\r
              "h1": {"coord": {"x": 630,"y": 820}, "use": false},\r
              "h2": {"coord": {"x": 730,"y": 820}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 334}},\r
              "h1": {"coord": {"x": 401,"y": 334}, "use": false},\r
              "h2": {"coord": {"x": 501,"y": 334}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1020}},\r
              "h1": {"coord": {"x": 164,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1020}},\r
              "h1": {"coord": {"x": -10,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 391,"y": 0}},\r
              "h1": {"coord": {"x": 341,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 441,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 502,"y": 0}},\r
              "h1": {"coord": {"x": 452,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 552,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 458}},\r
              "h1": {"coord": {"x": 650,"y": 458}, "use": false},\r
              "h2": {"coord": {"x": 750,"y": 458}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 926,"y": 0}},\r
              "h1": {"coord": {"x": 876,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 976,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1037,"y": 0}},\r
              "h1": {"coord": {"x": 987,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1087,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1245,"y": 855}},\r
              "h1": {"coord": {"x": 1195,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1295,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1329,"y": 855}},\r
              "h1": {"coord": {"x": 1279,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1332,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1334,"y": 860}},\r
              "h1": {"coord": {"x": 1334,"y": 857}},\r
              "h2": {"coord": {"x": 1384,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1334,"y": 1015}},\r
              "h1": {"coord": {"x": 1284,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 1018}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x78": {\r
      "id": "glyph-0x78",\r
      "advanceWidth": 977,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": -5,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 183,"y": 0}},\r
              "h1": {"coord": {"x": 133,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 217,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 259,"y": 50}},\r
              "h1": {"coord": {"x": 246,"y": 21}},\r
              "h2": {"coord": {"x": 309,"y": 50}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 485,"y": 387}},\r
              "h1": {"coord": {"x": 435,"y": 387}, "use": false},\r
              "h2": {"coord": {"x": 535,"y": 387}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 711,"y": 43}},\r
              "h1": {"coord": {"x": 661,"y": 43}, "use": false},\r
              "h2": {"coord": {"x": 761,"y": 43}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 43}},\r
              "h1": {"coord": {"x": 662,"y": 43}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 784,"y": 0}},\r
              "h1": {"coord": {"x": 753,"y": 0}},\r
              "h2": {"coord": {"x": 834,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 0}},\r
              "h1": {"coord": {"x": 872,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 925,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 927,"y": 5}},\r
              "h1": {"coord": {"x": 927,"y": 2}},\r
              "h2": {"coord": {"x": 977,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 927,"y": 160}},\r
              "h1": {"coord": {"x": 877,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 927,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 165}},\r
              "h1": {"coord": {"x": 925,"y": 165}},\r
              "h2": {"coord": {"x": 972,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 823,"y": 165}},\r
              "h1": {"coord": {"x": 773,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 516}},\r
              "h1": {"coord": {"x": 540,"y": 516}, "use": false},\r
              "h2": {"coord": {"x": 640,"y": 516}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 825,"y": 855}},\r
              "h1": {"coord": {"x": 775,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 875,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 855}},\r
              "h1": {"coord": {"x": 882,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 935,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 937,"y": 860}},\r
              "h1": {"coord": {"x": 937,"y": 857}},\r
              "h2": {"coord": {"x": 987,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 937,"y": 1014}},\r
              "h1": {"coord": {"x": 887,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 937,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 1019}},\r
              "h1": {"coord": {"x": 935,"y": 1019}},\r
              "h2": {"coord": {"x": 982,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 1019}},\r
              "h1": {"coord": {"x": 744,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 761,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 719,"y": 972}},\r
              "h1": {"coord": {"x": 732,"y": 1000}},\r
              "h2": {"coord": {"x": 769,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 719,"y": 972}},\r
              "h1": {"coord": {"x": 669,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 769,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 495,"y": 659}},\r
              "h1": {"coord": {"x": 445,"y": 659}, "use": false},\r
              "h2": {"coord": {"x": 545,"y": 659}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 972}},\r
              "h1": {"coord": {"x": 238,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 972}},\r
              "h1": {"coord": {"x": 238,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 275,"y": 1000}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1019}},\r
              "h1": {"coord": {"x": 246,"y": 1019}},\r
              "h2": {"coord": {"x": 263,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 75,"y": 1019}},\r
              "h1": {"coord": {"x": 25,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 72,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 70,"y": 1014}},\r
              "h1": {"coord": {"x": 70,"y": 1017}},\r
              "h2": {"coord": {"x": 120,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 70,"y": 860}},\r
              "h1": {"coord": {"x": 20,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 75,"y": 855}},\r
              "h1": {"coord": {"x": 72,"y": 855}},\r
              "h2": {"coord": {"x": 125,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 178,"y": 855}},\r
              "h1": {"coord": {"x": 128,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 228,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 391,"y": 531}},\r
              "h1": {"coord": {"x": 341,"y": 531}, "use": false},\r
              "h2": {"coord": {"x": 441,"y": 531}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 140,"y": 165}},\r
              "h1": {"coord": {"x": 90,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 190,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x79": {\r
      "id": "glyph-0x79",\r
      "advanceWidth": 1067,\r
      "contextCharacters": "bgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 474,"y": -279}},\r
              "h1": {"coord": {"x": 763,"y": -279}},\r
              "h2": {"coord": {"x": 420,"y": -279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 277,"y": -267}},\r
              "h1": {"coord": {"x": 321,"y": -273}},\r
              "h2": {"coord": {"x": 264,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 256,"y": -266}},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 202,"y": -283}, "use": false},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 202,"y": -283}, "use": false},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": -406}},\r
              "h1": {"coord": {"x": 168,"y": -406}, "use": false},\r
              "h2": {"coord": {"x": 215,"y": -420}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 235,"y": -433}},\r
              "h1": {"coord": {"x": 217,"y": -429}},\r
              "h2": {"coord": {"x": 302,"y": -448}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 478,"y": -450}},\r
              "h1": {"coord": {"x": 451,"y": -450}},\r
              "h2": {"coord": {"x": 969,"y": -450}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": -57}},\r
              "h1": {"coord": {"x": 1021,"y": -212}},\r
              "h2": {"coord": {"x": 1077,"y": -57}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": -57}},\r
              "h1": {"coord": {"x": 977,"y": -57}, "use": false},\r
              "h2": {"coord": {"x": 1077,"y": -57}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": 938}},\r
              "h1": {"coord": {"x": 977,"y": 938}, "use": false},\r
            },\r
            {\r
        }\r