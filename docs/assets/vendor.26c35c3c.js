var Wt=Object.defineProperty,Gt=Object.defineProperties;var Kt=Object.getOwnPropertyDescriptors;var Oe=Object.getOwnPropertySymbols;var Yt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable;var Re=(e,t,n)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))Yt.call(t,n)&&Re(e,n,t[n]);if(Oe)for(var n of Oe(t))Jt.call(t,n)&&Re(e,n,t[n]);return e},Me=(e,t)=>Gt(e,Kt(t));function w(){}const et=e=>e;function tt(e){return e()}function ke(){return Object.create(null)}function N(e){e.forEach(tt)}function Ee(e){return typeof e=="function"}function Xt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let U;function us(e,t){return U||(U=document.createElement("a")),U.href=t,e===U.href}function Zt(e){return Object.keys(e).length===0}function Qt(e,...t){if(e==null)return w;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function fs(e,t,n){e.$$.on_destroy.push(Qt(t,n))}function ds(e,t,n){return e.set(n),t}const nt=typeof window!="undefined";let rt=nt?()=>window.performance.now():()=>Date.now(),ve=nt?e=>requestAnimationFrame(e):w;const k=new Set;function it(e){k.forEach(t=>{t.c(e)||(k.delete(t),t.f())}),k.size!==0&&ve(it)}function st(e){let t;return k.size===0&&ve(it),{promise:new Promise(n=>{k.add(t={c:e,f:n})}),abort(){k.delete(t)}}}function en(e,t){e.appendChild(t)}function at(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function tn(e){const t=sn("style");return nn(at(e),t),t.sheet}function nn(e,t){en(e.head||e,t)}function hs(e,t,n){e.insertBefore(t,n||null)}function rn(e){e.parentNode.removeChild(e)}function sn(e){return document.createElement(e)}function an(e){return document.createTextNode(e)}function ps(){return an(" ")}function ms(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function gs(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function on(e){return Array.from(e.childNodes)}function bs(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ys(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function cn(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}const K=new Map;let Y=0;function ln(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function un(e,t){const n={stylesheet:tn(t),rules:{}};return K.set(e,n),n}function ot(e,t,n,r,i,s,a,o=0){const l=16.666/r;let c=`{
`;for(let y=0;y<=1;y+=l){const z=t+(n-t)*s(y);c+=y*100+`%{${a(z,1-z)}}
`}const f=c+`100% {${a(n,1-n)}}
}`,u=`__svelte_${ln(f)}_${o}`,d=at(e),{stylesheet:h,rules:m}=K.get(d)||un(d,e);m[u]||(m[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const _=e.style.animation||"";return e.style.animation=`${_?`${_}, `:""}${u} ${r}ms linear ${i}ms 1 both`,Y+=1,u}function pe(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),i=n.length-r.length;i&&(e.style.animation=r.join(", "),Y-=i,Y||fn())}function fn(){ve(()=>{Y||(K.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),K.clear())})}let j;function F(e){j=e}function dn(){if(!j)throw new Error("Function called outside component initialization");return j}function _s(e){dn().$$.on_mount.push(e)}const P=[],Ne=[],W=[],xe=[],hn=Promise.resolve();let me=!1;function pn(){me||(me=!0,hn.then(ct))}function H(e){W.push(e)}const ae=new Set;let q=0;function ct(){const e=j;do{for(;q<P.length;){const t=P[q];q++,F(t),mn(t.$$)}for(F(null),P.length=0,q=0;Ne.length;)Ne.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];ae.has(n)||(ae.add(n),n())}W.length=0}while(P.length);for(;xe.length;)xe.pop()();me=!1,ae.clear(),F(e)}function mn(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}let x;function lt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function J(e,t,n){e.dispatchEvent(cn(`${t?"intro":"outro"}${n}`))}const G=new Set;let I;function ws(){I={r:0,c:[],p:I}}function Is(){I.r||N(I.c),I=I.p}function gn(e,t){e&&e.i&&(G.delete(e),e.i(t))}function Es(e,t,n,r){if(e&&e.o){if(G.has(e))return;G.add(e),I.c.push(()=>{G.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const ut={duration:0};function vs(e,t,n){let r=t(e,n),i=!1,s,a,o=0;function l(){s&&pe(e,s)}function c(){const{delay:u=0,duration:d=300,easing:h=et,tick:m=w,css:_}=r||ut;_&&(s=ot(e,0,1,d,u,h,_,o++)),m(0,1);const y=rt()+u,z=y+d;a&&a.abort(),i=!0,H(()=>J(e,!0,"start")),a=st(se=>{if(i){if(se>=z)return m(1,0),J(e,!0,"end"),l(),i=!1;if(se>=y){const $e=h((se-y)/d);m($e,1-$e)}}return i})}let f=!1;return{start(){f||(f=!0,pe(e),Ee(r)?(r=r(),lt().then(c)):c())},invalidate(){f=!1},end(){i&&(l(),i=!1)}}}function As(e,t,n){let r=t(e,n),i=!0,s;const a=I;a.r+=1;function o(){const{delay:l=0,duration:c=300,easing:f=et,tick:u=w,css:d}=r||ut;d&&(s=ot(e,1,0,c,l,f,d));const h=rt()+l,m=h+c;H(()=>J(e,!1,"start")),st(_=>{if(i){if(_>=m)return u(0,1),J(e,!1,"end"),--a.r||N(a.c),!1;if(_>=h){const y=f((_-h)/c);u(1-y,y)}}return i})}return Ee(r)?lt().then(()=>{r=r(),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),i&&(s&&pe(e,s),i=!1)}}}const Ss=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ts(e){e&&e.c()}function bn(e,t,n,r){const{fragment:i,on_mount:s,on_destroy:a,after_update:o}=e.$$;i&&i.m(t,n),r||H(()=>{const l=s.map(tt).filter(Ee);a?a.push(...l):N(l),e.$$.on_mount=[]}),o.forEach(H)}function yn(e,t){const n=e.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _n(e,t){e.$$.dirty[0]===-1&&(P.push(e),pn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ds(e,t,n,r,i,s,a,o=[-1]){const l=j;F(e);const c=e.$$={fragment:null,ctx:null,props:s,update:w,not_equal:i,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:ke(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};a&&a(c.root);let f=!1;if(c.ctx=n?n(e,t.props||{},(u,d,...h)=>{const m=h.length?h[0]:d;return c.ctx&&i(c.ctx[u],c.ctx[u]=m)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](m),f&&_n(e,u)),d}):[],c.update(),f=!0,N(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const u=on(t.target);c.fragment&&c.fragment.l(u),u.forEach(rn)}else c.fragment&&c.fragment.c();t.intro&&gn(e.$$.fragment),bn(e,t.target,t.anchor,t.customElement),ct()}F(l)}class Cs{$destroy(){yn(this,1),this.$destroy=w}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Zt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const M=[];function $s(e,t=w){let n;const r=new Set;function i(o){if(Xt(e,o)&&(e=o,n)){const l=!M.length;for(const c of r)c[1](),M.push(c,e);if(l){for(let c=0;c<M.length;c+=2)M[c][0](M[c+1]);M.length=0}}}function s(o){i(o(e))}function a(o,l=w){const c=[o,l];return r.add(c),r.size===1&&(n=t(i)||w),o(e),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:a}}function wn(e){const t=e-1;return t*t*t+1}function Os(e,{delay:t=0,duration:n=400,easing:r=wn,x:i=0,y:s=0,opacity:a=0}={}){const o=getComputedStyle(e),l=+o.opacity,c=o.transform==="none"?"":o.transform,f=l*(1-a);return{delay:t,duration:n,easing:r,css:(u,d)=>`
			transform: ${c} translate(${(1-u)*i}px, ${(1-u)*s}px);
			opacity: ${l-f*d}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},In=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},dt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,f=s>>2,u=(s&3)<<4|o>>4;let d=(o&15)<<2|c>>6,h=c&63;l||(h=64,a||(d=64)),r.push(n[f],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ft(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):In(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const u=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||c==null||u==null)throw Error();const d=s<<2|o>>4;if(r.push(d),c!==64){const h=o<<4&240|c>>2;if(r.push(h),u!==64){const m=c<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},En=function(e){const t=ft(e);return dt.encodeByteArray(t,!0)},ht=function(e){return En(e).replace(/\./g,"")},vn=function(e){try{return dt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function An(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function pt(){return typeof indexedDB=="object"}function mt(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Sn(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}function Tn(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=()=>Tn().__FIREBASE_DEFAULTS__,Cn=()=>{if(typeof process=="undefined")return;const e={}.__FIREBASE_DEFAULTS__,t={}.__FIREBASE_DEFAULTS_PATH__;if(e)return t&&console.warn("Values were provided for both __FIREBASE_DEFAULTS__ and __FIREBASE_DEFAULTS_PATH__. __FIREBASE_DEFAULTS_PATH__ will be ignored."),JSON.parse(e);if(t&&typeof require!="undefined")try{return require(t)}catch{console.warn(`Unable to read defaults from file provided to __FIREBASE_DEFAULTS_PATH__: ${t}`)}},$n=()=>{if(typeof document=="undefined")return;const e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),t=e&&vn(e[1]);return t&&JSON.parse(t)},On=()=>Dn()||Cn()||$n(),Rn=()=>{var e;return(e=On())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="FirebaseError";class B extends Error{constructor(t,n,r){super(n);this.code=t,this.customData=r,this.name=Mn,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,te.prototype.create)}}class te{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?kn(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new B(i,o,r)}}function kn(e,t){return e.replace(Nn,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nn=/\{\$([^}]+)}/g;function X(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Pe(s)&&Pe(a)){if(!X(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pe(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=1e3,Pn=2,Fn=4*60*60*1e3,Ln=.5;function Fe(e,t=xn,n=Pn){const r=t*Math.pow(n,e),i=Math.round(Ln*r*(Math.random()-.5)*2);return Math.min(Fn,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){return e&&e._delegate?e._delegate:e}class S{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Bn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vn(t))try{this.getOrInitializeService({instanceIdentifier:T})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=T){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=T){return this.instances.has(t)}getOptions(t=T){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=T){return this.component?this.component.multipleInstances?t:T:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hn(e){return e===T?void 0:e}function Vn(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(p||(p={}));const Un={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},qn=p.INFO,Wn={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},Gn=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Wn[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bt{constructor(t){this.name=t,this._logLevel=qn,this._logHandler=Gn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in p))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Un[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...t),this._logHandler(this,p.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...t),this._logHandler(this,p.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,p.INFO,...t),this._logHandler(this,p.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,p.WARN,...t),this._logHandler(this,p.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...t),this._logHandler(this,p.ERROR,...t)}}const Kn=(e,t)=>t.some(n=>e instanceof n);let Le,je;function Yn(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jn(){return je||(je=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yt=new WeakMap,ge=new WeakMap,_t=new WeakMap,oe=new WeakMap,Ae=new WeakMap;function Xn(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(E(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&yt.set(n,e)}).catch(()=>{}),Ae.set(t,e),t}function Zn(e){if(ge.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});ge.set(e,t)}let be={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ge.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_t.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qn(e){be=e(be)}function er(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ce(this),t,...n);return _t.set(r,t.sort?t.sort():[t]),E(r)}:Jn().includes(e)?function(...t){return e.apply(ce(this),t),E(yt.get(this))}:function(...t){return E(e.apply(ce(this),t))}}function tr(e){return typeof e=="function"?er(e):(e instanceof IDBTransaction&&Zn(e),Kn(e,Yn())?new Proxy(e,be):e)}function E(e){if(e instanceof IDBRequest)return Xn(e);if(oe.has(e))return oe.get(e);const t=tr(e);return t!==e&&(oe.set(e,t),Ae.set(t,e)),t}const ce=e=>Ae.get(e);function wt(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=E(a);return r&&a.addEventListener("upgradeneeded",l=>{r(E(a.result),l.oldVersion,l.newVersion,E(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const nr=["get","getKey","getAll","getAllKeys","count"],rr=["put","add","delete","clear"],le=new Map;function He(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(le.get(t))return le.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=rr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nr.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),i&&l.done]))[0]};return le.set(t,s),s}Qn(e=>Me(Be({},e),{get:(t,n,r)=>He(t,n)||e.get(t,n,r),has:(t,n)=>!!He(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ye="@firebase/app",Ve="0.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new bt("@firebase/app"),ar="@firebase/app-compat",or="@firebase/analytics-compat",cr="@firebase/analytics",lr="@firebase/app-check-compat",ur="@firebase/app-check",fr="@firebase/auth",dr="@firebase/auth-compat",hr="@firebase/database",pr="@firebase/database-compat",mr="@firebase/functions",gr="@firebase/functions-compat",br="@firebase/installations",yr="@firebase/installations-compat",_r="@firebase/messaging",wr="@firebase/messaging-compat",Ir="@firebase/performance",Er="@firebase/performance-compat",vr="@firebase/remote-config",Ar="@firebase/remote-config-compat",Sr="@firebase/storage",Tr="@firebase/storage-compat",Dr="@firebase/firestore",Cr="@firebase/firestore-compat",$r="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="[DEFAULT]",Or={[ye]:"fire-core",[ar]:"fire-core-compat",[cr]:"fire-analytics",[or]:"fire-analytics-compat",[ur]:"fire-app-check",[lr]:"fire-app-check-compat",[fr]:"fire-auth",[dr]:"fire-auth-compat",[hr]:"fire-rtdb",[pr]:"fire-rtdb-compat",[mr]:"fire-fn",[gr]:"fire-fn-compat",[br]:"fire-iid",[yr]:"fire-iid-compat",[_r]:"fire-fcm",[wr]:"fire-fcm-compat",[Ir]:"fire-perf",[Er]:"fire-perf-compat",[vr]:"fire-rc",[Ar]:"fire-rc-compat",[Sr]:"fire-gcs",[Tr]:"fire-gcs-compat",[Dr]:"fire-fst",[Cr]:"fire-fst-compat","fire-js":"fire-js",[$r]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new Map,we=new Map;function Rr(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(we.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;we.set(t,e);for(const n of Z.values())Rr(n,e);return!0}function ne(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},v=new te("app","Firebase",Br);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new S("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}}function kr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:_e,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw v.create("bad-app-name",{appName:String(i)});if(n||(n=Rn()),!n)throw v.create("no-options");const s=Z.get(i);if(s){if(X(n,s.options)&&X(r,s.config))return s;throw v.create("duplicate-app",{appName:i})}const a=new zn(i);for(const l of we.values())a.addComponent(l);const o=new Mr(n,r,a);return Z.set(i,o),o}function Nr(e=_e){const t=Z.get(e);if(!t&&e===_e)return kr();if(!t)throw v.create("no-app",{appName:e});return t}function A(e,t,n){var r;let i=(r=Or[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),C.warn(o.join(" "));return}$(new S(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="firebase-heartbeat-database",Pr=1,V="firebase-heartbeat-store";let ue=null;function It(){return ue||(ue=wt(xr,Pr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(V)}}}).catch(e=>{throw v.create("idb-open",{originalErrorMessage:e.message})})),ue}async function Fr(e){var t;try{return(await It()).transaction(V).objectStore(V).get(Et(e))}catch(n){if(n instanceof B)C.warn(n.message);else{const r=v.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});C.warn(r.message)}}}async function ze(e,t){var n;try{const i=(await It()).transaction(V,"readwrite");return await i.objectStore(V).put(t,Et(e)),i.done}catch(r){if(r instanceof B)C.warn(r.message);else{const i=v.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});C.warn(i.message)}}}function Et(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=1024,jr=30*24*60*60*1e3;class Hr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ue();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=jr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ue(),{heartbeatsToSend:n,unsentEntries:r}=Vr(this._heartbeatsCache.heartbeats),i=ht(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ue(){return new Date().toISOString().substring(0,10)}function Vr(e,t=Lr){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),qe(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pt()?mt().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ze(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ze(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qe(e){return ht(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){$(new S("platform-logger",t=>new ir(t),"PRIVATE")),$(new S("heartbeat",t=>new Hr(t),"PRIVATE")),A(ye,Ve,e),A(ye,Ve,"esm2017"),A("fire-js","")}Ur("");var qr="firebase",Wr="9.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A(qr,Wr,"app");const vt="@firebase/installations",Se="0.5.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1e4,St=`w:${Se}`,Tt="FIS_v2",Gr="https://firebaseinstallations.googleapis.com/v1",Kr=60*60*1e3,Yr="installations",Jr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},O=new te(Yr,Jr,Xr);function Dt(e){return e instanceof B&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct({projectId:e}){return`${Gr}/projects/${e}/installations`}function $t(e){return{token:e.token,requestStatus:2,expiresIn:Qr(e.expiresIn),creationTime:Date.now()}}async function Ot(e,t){const r=(await t.json()).error;return O.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Rt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Zr(e,{refreshToken:t}){const n=Rt(e);return n.append("Authorization",ei(t)),n}async function Bt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Qr(e){return Number(e.replace("s","000"))}function ei(e){return`${Tt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ct(e),i=Rt(e),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const a={fid:n,authVersion:Tt,appId:e.appId,sdkVersion:St},o={method:"POST",headers:i,body:JSON.stringify(a)},l=await Bt(()=>fetch(r,o));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:$t(c.authToken)}}else throw await Ot("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=/^[cdef][\w-]{21}$/,Ie="";function ii(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=si(e);return ri.test(n)?n:Ie}catch{return Ie}}function si(e){return ni(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Map;function Nt(e,t){const n=re(e);xt(n,t),ai(n,t)}function xt(e,t){const n=kt.get(e);if(!!n)for(const r of n)r(t)}function ai(e,t){const n=oi();n&&n.postMessage({key:e,fid:t}),ci()}let D=null;function oi(){return!D&&"BroadcastChannel"in self&&(D=new BroadcastChannel("[Firebase] FID Change"),D.onmessage=e=>{xt(e.data.key,e.data.fid)}),D}function ci(){kt.size===0&&D&&(D.close(),D=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="firebase-installations-database",ui=1,R="firebase-installations-store";let fe=null;function Te(){return fe||(fe=wt(li,ui,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(R)}}})),fe}async function Q(e,t){const n=re(e),i=(await Te()).transaction(R,"readwrite"),s=i.objectStore(R),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&Nt(e,t.fid),t}async function Pt(e){const t=re(e),r=(await Te()).transaction(R,"readwrite");await r.objectStore(R).delete(t),await r.done}async function ie(e,t){const n=re(e),i=(await Te()).transaction(R,"readwrite"),s=i.objectStore(R),a=await s.get(n),o=t(a);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!a||a.fid!==o.fid)&&Nt(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e){let t;const n=await ie(e.appConfig,r=>{const i=fi(r),s=di(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ie?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function fi(e){const t=e||{fid:ii(),registrationStatus:0};return Ft(t)}function di(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(O.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=hi(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:pi(e)}:{installationEntry:t}}async function hi(e,t){try{const n=await ti(e,t);return Q(e.appConfig,n)}catch(n){throw Dt(n)&&n.customData.serverCode===409?await Pt(e.appConfig):await Q(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function pi(e){let t=await We(e.appConfig);for(;t.registrationStatus===1;)await Mt(100),t=await We(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await De(e);return r||n}return t}function We(e){return ie(e,t=>{if(!t)throw O.create("installation-not-found");return Ft(t)})}function Ft(e){return mi(e)?{fid:e.fid,registrationStatus:0}:e}function mi(e){return e.registrationStatus===1&&e.registrationTime+At<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi({appConfig:e,heartbeatServiceProvider:t},n){const r=bi(e,n),i=Zr(e,n),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const a={installation:{sdkVersion:St,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},l=await Bt(()=>fetch(r,o));if(l.ok){const c=await l.json();return $t(c)}else throw await Ot("Generate Auth Token",l)}function bi(e,{fid:t}){return`${Ct(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(e,t=!1){let n;const r=await ie(e.appConfig,s=>{if(!Lt(s))throw O.create("not-registered");const a=s.authToken;if(!t&&wi(a))return s;if(a.requestStatus===1)return n=yi(e,t),s;{if(!navigator.onLine)throw O.create("app-offline");const o=Ei(s);return n=_i(e,o),o}});return n?await n:r.authToken}async function yi(e,t){let n=await Ge(e.appConfig);for(;n.authToken.requestStatus===1;)await Mt(100),n=await Ge(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ce(e,t):r}function Ge(e){return ie(e,t=>{if(!Lt(t))throw O.create("not-registered");const n=t.authToken;return vi(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function _i(e,t){try{const n=await gi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Q(e.appConfig,r),n}catch(n){if(Dt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Q(e.appConfig,r)}throw n}}function Lt(e){return e!==void 0&&e.registrationStatus===2}function wi(e){return e.requestStatus===2&&!Ii(e)}function Ii(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Kr}function Ei(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function vi(e){return e.requestStatus===1&&e.requestTime+At<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e){const t=e,{installationEntry:n,registrationPromise:r}=await De(t);return r?r.catch(console.error):Ce(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(e,t=!1){const n=e;return await Ti(n),(await Ce(n,t)).token}async function Ti(e){const{registrationPromise:t}=await De(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){if(!e||!e.options)throw de("App Configuration");if(!e.name)throw de("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw de(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function de(e){return O.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="installations",Ci="installations-internal",$i=e=>{const t=e.getProvider("app").getImmediate(),n=Di(t),r=ne(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Oi=e=>{const t=e.getProvider("app").getImmediate(),n=ne(t,jt).getImmediate();return{getId:()=>Ai(n),getToken:i=>Si(n,i)}};function Ri(){$(new S(jt,$i,"PUBLIC")),$(new S(Ci,Oi,"PRIVATE"))}Ri();A(vt,Se);A(vt,Se,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="analytics",Bi="firebase_id",Mi="origin",ki=60*1e3,Ni="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ht="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=new bt("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function xi(e,t){const n=document.createElement("script");n.src=`${Ht}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Pi(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fi(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const l=(await Vt(n)).find(c=>c.measurementId===i);l&&await t[l.appId]}}catch(o){g.error(o)}e("config",i,s)}async function Li(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const o=await Vt(n);for(const l of a){const c=o.find(u=>u.measurementId===l),f=c&&t[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){g.error(s)}}function ji(e,t,n,r){async function i(s,a,o){try{s==="event"?await Li(e,t,n,a,o):s==="config"?await Fi(e,t,n,r,a,o):s==="consent"?e("consent","update",o):e("set",a)}catch(l){g.error(l)}}return i}function Hi(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ji(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Vi(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ht))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},b=new te("analytics","Analytics",zi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=30,qi=1e3;class Wi{constructor(t={},n=qi){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zt=new Wi;function Gi(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ki(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Gi(r)},s=Ni.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let o="";try{const l=await a.json();!((t=l.error)===null||t===void 0)&&t.message&&(o=l.error.message)}catch{}throw b.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function Yi(e,t=zt,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw b.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw b.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Zi;return setTimeout(async()=>{o.abort()},n!==void 0?n:ki),Ut({appId:r,apiKey:i,measurementId:s},a,o,t)}async function Ut(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=zt){var s,a;const{appId:o,measurementId:l}=e;try{await Ji(r,t)}catch(c){if(l)return g.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=c)===null||s===void 0?void 0:s.message}]`),{appId:o,measurementId:l};throw c}try{const c=await Ki(e);return i.deleteThrottleMetadata(o),c}catch(c){const f=c;if(!Xi(f)){if(i.deleteThrottleMetadata(o),l)return g.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:l};throw c}const u=Number((a=f==null?void 0:f.customData)===null||a===void 0?void 0:a.httpStatus)===503?Fe(n,i.intervalMillis,Ui):Fe(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),g.debug(`Calling attemptFetch again in ${u} millis`),Ut(e,d,r,i)}}function Ji(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(b.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Xi(e){if(!(e instanceof B)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Zi{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Qi(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(){var e;if(pt())try{await mt()}catch(t){return g.warn(b.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return g.warn(b.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ts(e,t,n,r,i,s,a){var o;const l=Yi(e);l.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&g.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>g.error(h)),t.push(l);const c=es().then(h=>{if(h)return r.getId()}),[f,u]=await Promise.all([l,c]);Vi()||xi(s,f.measurementId),i("js",new Date);const d=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return d[Mi]="firebase",d.update=!0,u!=null&&(d[Bi]=u),i("config",f.measurementId,d),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this.app=t}_delete(){return delete L[this.app.options.appId],Promise.resolve()}}let L={},Ke=[];const Ye={};let he="dataLayer",rs="gtag",Je,qt,Xe=!1;function is(){const e=[];if(An()&&e.push("This is a browser extension environment."),Sn()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=b.create("invalid-analytics-context",{errorInfo:t});g.warn(n.message)}}function ss(e,t,n){is();const r=e.options.appId;if(!r)throw b.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)g.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw b.create("no-api-key");if(L[r]!=null)throw b.create("already-exists",{id:r});if(!Xe){Pi(he);const{wrappedGtag:s,gtagCore:a}=Hi(L,Ke,Ye,he,rs);qt=s,Je=a,Xe=!0}return L[r]=ts(e,Ke,Ye,t,Je,he,n),new ns(e)}function Rs(e=Nr()){e=gt(e);const t=ne(e,ee);return t.isInitialized()?t.getImmediate():as(e)}function as(e,t={}){const n=ne(e,ee);if(n.isInitialized()){const i=n.getImmediate();if(X(t,n.getOptions()))return i;throw b.create("already-initialized")}return n.initialize({options:t})}function os(e,t,n,r){e=gt(e),Qi(qt,L[e.app.options.appId],t,n,r).catch(i=>g.error(i))}const Ze="@firebase/analytics",Qe="0.8.1";function cs(){$(new S(ee,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return ss(r,i,n)},"PUBLIC")),$(new S("analytics-internal",e,"PRIVATE")),A(Ze,Qe),A(Ze,Qe,"esm2017");function e(t){try{const n=t.getProvider(ee).getImmediate();return{logEvent:(r,i,s)=>os(n,r,i,s)}}catch(n){throw b.create("interop-component-reg-failed",{reason:n})}}}cs();export{Ss as A,ws as B,Ts as C,bn as D,yn as E,kr as F,Rs as G,Cs as S,ps as a,gs as b,ys as c,hs as d,sn as e,en as f,H as g,vs as h,Ds as i,Os as j,rn as k,ms as l,fs as m,w as n,ds as o,us as p,_s as q,N as r,Xt as s,As as t,an as u,gn as v,$s as w,Es as x,Is as y,bs as z};
