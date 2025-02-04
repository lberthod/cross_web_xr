(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $u(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Ys=[],In=()=>{},w0=()=>!1,ul=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ku=n=>n.startsWith("onUpdate:"),Pt=Object.assign,Yu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},E0=Object.prototype.hasOwnProperty,nt=(n,e)=>E0.call(n,e),ke=Array.isArray,oo=n=>hl(n)==="[object Map]",T0=n=>hl(n)==="[object Set]",Fe=n=>typeof n=="function",Dt=n=>typeof n=="string",Cr=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Hm=n=>(vt(n)||Fe(n))&&Fe(n.then)&&Fe(n.catch),C0=Object.prototype.toString,hl=n=>C0.call(n),A0=n=>hl(n).slice(8,-1),R0=n=>hl(n)==="[object Object]",Zu=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ao=$u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},I0=/-(\w)/g,Sn=fl(n=>n.replace(I0,(e,t)=>t?t.toUpperCase():"")),L0=/\B([A-Z])/g,Es=fl(n=>n.replace(L0,"-$1").toLowerCase()),dl=fl(n=>n.charAt(0).toUpperCase()+n.slice(1)),ql=fl(n=>n?`on${dl(n)}`:""),Ni=(n,e)=>!Object.is(n,e),Xl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Gm=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},P0=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let xf;const pl=()=>xf||(xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ju(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Dt(i)?F0(i):Ju(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(n)||vt(n))return n}const D0=/;(?![^(]*\))/g,N0=/:([^]+)/,O0=/\/\*[^]*?\*\//g;function F0(n){const e={};return n.replace(O0,"").split(D0).forEach(t=>{if(t){const i=t.split(N0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Qu(n){let e="";if(Dt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=Qu(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const k0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",U0=$u(k0);function Wm(n){return!!n||n===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hn;class B0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function z0(){return hn}let at;const $l=new WeakSet;class jm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$l.has(this)&&($l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yf(this),$m(this);const e=at,t=Ln;at=this,Ln=!0;try{return this.fn()}finally{Km(this),at=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nh(e);this.deps=this.depsTail=void 0,yf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jc(this)&&this.run()}get dirty(){return Jc(this)}}let qm=0,lo,co;function Xm(n,e=!1){if(n.flags|=8,e){n.next=co,co=n;return}n.next=lo,lo=n}function eh(){qm++}function th(){if(--qm>0)return;if(co){let e=co;for(co=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;lo;){let e=lo;for(lo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $m(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Km(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),nh(i),V0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Jc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ym(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ym(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Mo))return;n.globalVersion=Mo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Jc(n)){n.flags&=-3;return}const t=at,i=Ln;at=n,Ln=!0;try{$m(n);const s=n.fn(n._value);(e.version===0||Ni(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{at=t,Ln=i,Km(n),n.flags&=-3}}function nh(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)nh(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function V0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const Zm=[];function Vi(){Zm.push(Ln),Ln=!1}function Hi(){const n=Zm.pop();Ln=n===void 0?!0:n}function yf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=at;at=void 0;try{e()}finally{at=t}}}let Mo=0;class H0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ih{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!at||!Ln||at===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==at)t=this.activeLink=new H0(at,this),at.deps?(t.prevDep=at.depsTail,at.depsTail.nextDep=t,at.depsTail=t):at.deps=at.depsTail=t,Jm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=at.depsTail,t.nextDep=void 0,at.depsTail.nextDep=t,at.depsTail=t,at.deps===t&&(at.deps=i)}return t}trigger(e){this.version++,Mo++,this.notify(e)}notify(e){eh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{th()}}}function Jm(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jm(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Qc=new WeakMap,us=Symbol(""),eu=Symbol(""),wo=Symbol("");function Bt(n,e,t){if(Ln&&at){let i=Qc.get(n);i||Qc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ih),s.map=i,s.key=t),s.track()}}function li(n,e,t,i,s,r){const o=Qc.get(n);if(!o){Mo++;return}const a=l=>{l&&l.trigger()};if(eh(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&Zu(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===wo||!Cr(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(wo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(us)),oo(n)&&a(o.get(eu)));break;case"delete":l||(a(o.get(us)),oo(n)&&a(o.get(eu)));break;case"set":oo(n)&&a(o.get(us));break}}th()}function Is(n){const e=tt(n);return e===n?e:(Bt(e,"iterate",wo),Pn(n)?e:e.map(Kt))}function sh(n){return Bt(n=tt(n),"iterate",wo),n}const G0={__proto__:null,[Symbol.iterator](){return Kl(this,Symbol.iterator,Kt)},concat(...n){return Is(this).concat(...n.map(e=>ke(e)?Is(e):e))},entries(){return Kl(this,"entries",n=>(n[1]=Kt(n[1]),n))},every(n,e){return Jn(this,"every",n,e,void 0,arguments)},filter(n,e){return Jn(this,"filter",n,e,t=>t.map(Kt),arguments)},find(n,e){return Jn(this,"find",n,e,Kt,arguments)},findIndex(n,e){return Jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Jn(this,"findLast",n,e,Kt,arguments)},findLastIndex(n,e){return Jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Yl(this,"includes",n)},indexOf(...n){return Yl(this,"indexOf",n)},join(n){return Is(this).join(n)},lastIndexOf(...n){return Yl(this,"lastIndexOf",n)},map(n,e){return Jn(this,"map",n,e,void 0,arguments)},pop(){return Br(this,"pop")},push(...n){return Br(this,"push",n)},reduce(n,...e){return bf(this,"reduce",n,e)},reduceRight(n,...e){return bf(this,"reduceRight",n,e)},shift(){return Br(this,"shift")},some(n,e){return Jn(this,"some",n,e,void 0,arguments)},splice(...n){return Br(this,"splice",n)},toReversed(){return Is(this).toReversed()},toSorted(n){return Is(this).toSorted(n)},toSpliced(...n){return Is(this).toSpliced(...n)},unshift(...n){return Br(this,"unshift",n)},values(){return Kl(this,"values",Kt)}};function Kl(n,e,t){const i=sh(n),s=i[e]();return i!==n&&!Pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const W0=Array.prototype;function Jn(n,e,t,i,s,r){const o=sh(n),a=o!==n&&!Pn(n),l=o[e];if(l!==W0[e]){const h=l.apply(n,r);return a?Kt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Kt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function bf(n,e,t,i){const s=sh(n);let r=t;return s!==n&&(Pn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Kt(a),l,n)}),s[e](r,...i)}function Yl(n,e,t){const i=tt(n);Bt(i,"iterate",wo);const s=i[e](...t);return(s===-1||s===!1)&&ah(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function Br(n,e,t=[]){Vi(),eh();const i=tt(n)[e].apply(n,t);return th(),Hi(),i}const j0=$u("__proto__,__v_isRef,__isVue"),Qm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cr));function q0(n){Cr(n)||(n=String(n));const e=tt(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class eg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?nx:sg:r?ig:ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!s){let l;if(o&&(l=G0[t]))return l;if(t==="hasOwnProperty")return q0}const a=Reflect.get(e,t,Ht(e)?e:i);return(Cr(t)?Qm.has(t):j0(t))||(s||Bt(e,"get",t),r)?a:Ht(a)?o&&Zu(t)?a:a.value:vt(a)?s?og(a):ml(a):a}}class tg extends eg{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=ds(r);if(!Pn(i)&&!ds(i)&&(r=tt(r),i=tt(i)),!ke(e)&&Ht(r)&&!Ht(i))return l?!1:(r.value=i,!0)}const o=ke(e)&&Zu(t)?Number(t)<e.length:nt(e,t),a=Reflect.set(e,t,i,Ht(e)?e:s);return e===tt(s)&&(o?Ni(i,r)&&li(e,"set",t,i):li(e,"add",t,i)),a}deleteProperty(e,t){const i=nt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&li(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Cr(t)||!Qm.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",ke(e)?"length":us),Reflect.ownKeys(e)}}class X0 extends eg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $0=new tg,K0=new X0,Y0=new tg(!0);const tu=n=>n,sa=n=>Reflect.getPrototypeOf(n);function Z0(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=oo(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?tu:e?nu:Kt;return!e&&Bt(r,"iterate",l?eu:us),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ra(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function J0(n,e){const t={get(s){const r=this.__v_raw,o=tt(r),a=tt(s);n||(Ni(s,a)&&Bt(o,"get",s),Bt(o,"get",a));const{has:l}=sa(o),c=e?tu:n?nu:Kt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Bt(tt(s),"iterate",us),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=tt(r),a=tt(s);return n||(Ni(s,a)&&Bt(o,"has",s),Bt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=tt(a),c=e?tu:n?nu:Kt;return!n&&Bt(l,"iterate",us),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Pt(t,n?{add:ra("add"),set:ra("set"),delete:ra("delete"),clear:ra("clear")}:{add(s){!e&&!Pn(s)&&!ds(s)&&(s=tt(s));const r=tt(this);return sa(r).has.call(r,s)||(r.add(s),li(r,"add",s,s)),this},set(s,r){!e&&!Pn(r)&&!ds(r)&&(r=tt(r));const o=tt(this),{has:a,get:l}=sa(o);let c=a.call(o,s);c||(s=tt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ni(r,u)&&li(o,"set",s,r):li(o,"add",s,r),this},delete(s){const r=tt(this),{has:o,get:a}=sa(r);let l=o.call(r,s);l||(s=tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&li(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,o=s.clear();return r&&li(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Z0(s,n,e)}),t}function rh(n,e){const t=J0(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(nt(t,s)&&s in i?t:i,s,r)}const Q0={get:rh(!1,!1)},ex={get:rh(!1,!0)},tx={get:rh(!0,!1)};const ng=new WeakMap,ig=new WeakMap,sg=new WeakMap,nx=new WeakMap;function ix(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sx(n){return n.__v_skip||!Object.isExtensible(n)?0:ix(A0(n))}function ml(n){return ds(n)?n:oh(n,!1,$0,Q0,ng)}function rg(n){return oh(n,!1,Y0,ex,ig)}function og(n){return oh(n,!0,K0,tx,sg)}function oh(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=sx(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function uo(n){return ds(n)?uo(n.__v_raw):!!(n&&n.__v_isReactive)}function ds(n){return!!(n&&n.__v_isReadonly)}function Pn(n){return!!(n&&n.__v_isShallow)}function ah(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function rx(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Gm(n,"__v_skip",!0),n}const Kt=n=>vt(n)?ml(n):n,nu=n=>vt(n)?og(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function lh(n){return ag(n,!1)}function ox(n){return ag(n,!0)}function ag(n,e){return Ht(n)?n:new ax(n,e)}class ax{constructor(e,t){this.dep=new ih,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Pn(e)||ds(e);e=i?e:tt(e),Ni(e,t)&&(this._rawValue=e,this._value=i?e:Kt(e),this.dep.trigger())}}function Zs(n){return Ht(n)?n.value:n}const lx={get:(n,e,t)=>e==="__v_raw"?n:Zs(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ht(s)&&!Ht(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function lg(n){return uo(n)?n:new Proxy(n,lx)}class cx{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ih(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&at!==this)return Xm(this,!0),!0}get value(){const e=this.dep.track();return Ym(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ux(n,e,t=!1){let i,s;return Fe(n)?i=n:(i=n.get,s=n.set),new cx(i,s,t)}const oa={},Ua=new WeakMap;let es;function hx(n,e=!1,t=es){if(t){let i=Ua.get(t);i||Ua.set(t,i=[]),i.push(n)}}function fx(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:Pn(y)||s===!1||s===0?Ii(y,1):Ii(y);let u,h,f,d,g=!1,p=!1;if(Ht(n)?(h=()=>n.value,g=Pn(n)):uo(n)?(h=()=>c(n),g=!0):ke(n)?(p=!0,g=n.some(y=>uo(y)||Pn(y)),h=()=>n.map(y=>{if(Ht(y))return y.value;if(uo(y))return c(y);if(Fe(y))return l?l(y,2):y()})):Fe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Vi();try{f()}finally{Hi()}}const y=es;es=u;try{return l?l(n,3,[d]):n(d)}finally{es=y}}:h=In,e&&s){const y=h,T=s===!0?1/0:s;h=()=>Ii(y(),T)}const m=z0(),_=()=>{u.stop(),m&&m.active&&Yu(m.effects,u)};if(r&&e){const y=e;e=(...T)=>{y(...T),_()}}let S=p?new Array(n.length).fill(oa):oa;const v=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const T=u.run();if(s||g||(p?T.some((R,I)=>Ni(R,S[I])):Ni(T,S))){f&&f();const R=es;es=u;try{const I=[T,S===oa?void 0:p&&S[0]===oa?[]:S,d];l?l(e,3,I):e(...I),S=T}finally{es=R}}}else u.run()};return a&&a(v),u=new jm(h),u.scheduler=o?()=>o(v,!1):v,d=y=>hx(y,!1,u),f=u.onStop=()=>{const y=Ua.get(u);if(y){if(l)l(y,4);else for(const T of y)T();Ua.delete(u)}},e?i?v(!0):S=u.run():o?o(v.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Ii(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ht(n))Ii(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)Ii(n[i],e,t);else if(T0(n)||oo(n))n.forEach(i=>{Ii(i,e,t)});else if(R0(n)){for(const i in n)Ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ii(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $o(n,e,t,i){try{return i?n(...i):n()}catch(s){gl(s,e,t)}}function $n(n,e,t,i){if(Fe(n)){const s=$o(n,e,t,i);return s&&Hm(s)&&s.catch(r=>{gl(r,e,t)}),s}if(ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push($n(n[r],e,t,i));return s}}function gl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Vi(),$o(r,null,10,[n,l,c]),Hi();return}}dx(n,t,s,i,o)}function dx(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Yt=[];let Hn=-1;const Js=[];let Ti=null,js=0;const cg=Promise.resolve();let Ba=null;function ug(n){const e=Ba||cg;return n?e.then(this?n.bind(this):n):e}function px(n){let e=Hn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,s=Yt[i],r=Eo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ch(n){if(!(n.flags&1)){const e=Eo(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=Eo(t)?Yt.push(n):Yt.splice(px(e),0,n),n.flags|=1,hg()}}function hg(){Ba||(Ba=cg.then(dg))}function mx(n){ke(n)?Js.push(...n):Ti&&n.id===-1?Ti.splice(js+1,0,n):n.flags&1||(Js.push(n),n.flags|=1),hg()}function Sf(n,e,t=Hn+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function fg(n){if(Js.length){const e=[...new Set(Js)].sort((t,i)=>Eo(t)-Eo(i));if(Js.length=0,Ti){Ti.push(...e);return}for(Ti=e,js=0;js<Ti.length;js++){const t=Ti[js];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ti=null,js=0}}const Eo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function dg(n){const e=In;try{for(Hn=0;Hn<Yt.length;Hn++){const t=Yt[Hn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),$o(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Hn<Yt.length;Hn++){const t=Yt[Hn];t&&(t.flags&=-2)}Hn=-1,Yt.length=0,fg(),Ba=null,(Yt.length||Js.length)&&dg()}}let An=null,pg=null;function za(n){const e=An;return An=n,pg=n&&n.type.__scopeId||null,e}function gx(n,e=An,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Lf(-1);const r=za(e);let o;try{o=n(...s)}finally{za(r),i._d&&Lf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ki(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Vi(),$n(l,t,8,[n.el,a,n,e]),Hi())}}const _x=Symbol("_vte"),vx=n=>n.__isTeleport;function uh(n,e){n.shapeFlag&6&&n.component?(n.transition=e,uh(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function mg(n,e){return Fe(n)?(()=>Pt({name:n.name},e,{setup:n}))():n}function gg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Va(n,e,t,i,s=!1){if(ke(n)){n.forEach((g,p)=>Va(g,e&&(ke(e)?e[p]:e),t,i,s));return}if(ho(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Va(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?gh(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,h=a.setupState,f=tt(h),d=h===ut?()=>!1:g=>nt(f,g);if(c!=null&&c!==l&&(Dt(c)?(u[c]=null,d(c)&&(h[c]=null)):Ht(c)&&(c.value=null)),Fe(l))$o(l,a,12,[o,u]);else{const g=Dt(l),p=Ht(l);if(g||p){const m=()=>{if(n.f){const _=g?d(l)?h[l]:u[l]:l.value;s?ke(_)&&Yu(_,r):ke(_)?_.includes(r)||_.push(r):g?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,un(m,t)):m()}}}pl().requestIdleCallback;pl().cancelIdleCallback;const ho=n=>!!n.type.__asyncLoader,_g=n=>n.type.__isKeepAlive;function xx(n,e){vg(n,"a",e)}function yx(n,e){vg(n,"da",e)}function vg(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(_l(e,i,t),t){let s=t.parent;for(;s&&s.parent;)_g(s.parent.vnode)&&bx(i,e,t,s),s=s.parent}}function bx(n,e,t,i){const s=_l(e,n,i,!0);xg(()=>{Yu(i[e],s)},t)}function _l(n,e,t=Vt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Vi();const a=Ko(t),l=$n(e,t,n,o);return a(),Hi(),l});return i?s.unshift(r):s.push(r),r}}const _i=n=>(e,t=Vt)=>{(!Ao||n==="sp")&&_l(n,(...i)=>e(...i),t)},Sx=_i("bm"),vl=_i("m"),Mx=_i("bu"),wx=_i("u"),hh=_i("bum"),xg=_i("um"),Ex=_i("sp"),Tx=_i("rtg"),Cx=_i("rtc");function Ax(n,e=Vt){_l("ec",n,e)}const yg="components";function Rx(n,e){return Lx(yg,n,!0,e)||n}const Ix=Symbol.for("v-ndc");function Lx(n,e,t=!0,i=!1){const s=An||Vt;if(s){const r=s.type;if(n===yg){const a=xy(r,!1);if(a&&(a===e||a===Sn(e)||a===dl(Sn(e))))return r}const o=Mf(s[n]||r[n],e)||Mf(s.appContext[n],e);return!o&&i?r:o}}function Mf(n,e){return n&&(n[e]||n[Sn(e)]||n[dl(Sn(e))])}const iu=n=>n?Hg(n)?gh(n):iu(n.parent):null,fo=Pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>iu(n.parent),$root:n=>iu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fh(n),$forceUpdate:n=>n.f||(n.f=()=>{ch(n.update)}),$nextTick:n=>n.n||(n.n=ug.bind(n.proxy)),$watch:n=>Jx.bind(n)}),Zl=(n,e)=>n!==ut&&!n.__isScriptSetup&&nt(n,e),Px={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Zl(i,e))return o[e]=1,i[e];if(s!==ut&&nt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&nt(c,e))return o[e]=3,r[e];if(t!==ut&&nt(t,e))return o[e]=4,t[e];su&&(o[e]=0)}}const u=fo[e];let h,f;if(u)return e==="$attrs"&&Bt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ut&&nt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Zl(s,e)?(s[e]=t,!0):i!==ut&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ut&&nt(n,o)||Zl(e,o)||(a=r[0])&&nt(a,o)||nt(i,o)||nt(fo,o)||nt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wf(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let su=!0;function Dx(n){const e=fh(n),t=n.proxy,i=n.ctx;su=!1,e.beforeCreate&&Ef(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:p,deactivated:m,beforeDestroy:_,beforeUnmount:S,destroyed:v,unmounted:y,render:T,renderTracked:R,renderTriggered:I,errorCaptured:M,serverPrefetch:A,expose:O,inheritAttrs:se,components:re,directives:B,filters:F}=e;if(c&&Nx(c,i,null),o)for(const te in o){const G=o[te];Fe(G)&&(i[te]=G.bind(t))}if(s){const te=s.call(t,t);vt(te)&&(n.data=ml(te))}if(su=!0,r)for(const te in r){const G=r[te],fe=Fe(G)?G.bind(t,t):Fe(G.get)?G.get.bind(t,t):In,le=!Fe(G)&&Fe(G.set)?G.set.bind(t):In,Ee=Tn({get:fe,set:le});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:z=>Ee.value=z})}if(a)for(const te in a)bg(a[te],i,t,te);if(l){const te=Fe(l)?l.call(t):l;Reflect.ownKeys(te).forEach(G=>{Pa(G,te[G])})}u&&Ef(u,n,"c");function ie(te,G){ke(G)?G.forEach(fe=>te(fe.bind(t))):G&&te(G.bind(t))}if(ie(Sx,h),ie(vl,f),ie(Mx,d),ie(wx,g),ie(xx,p),ie(yx,m),ie(Ax,M),ie(Cx,R),ie(Tx,I),ie(hh,S),ie(xg,y),ie(Ex,A),ke(O))if(O.length){const te=n.exposed||(n.exposed={});O.forEach(G=>{Object.defineProperty(te,G,{get:()=>t[G],set:fe=>t[G]=fe})})}else n.exposed||(n.exposed={});T&&n.render===In&&(n.render=T),se!=null&&(n.inheritAttrs=se),re&&(n.components=re),B&&(n.directives=B),A&&gg(n)}function Nx(n,e,t=In){ke(n)&&(n=ru(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=qn(s.from||i,s.default,!0):r=qn(s.from||i):r=qn(s),Ht(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ef(n,e,t){$n(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function bg(n,e,t,i){let s=i.includes(".")?Og(t,i):()=>t[i];if(Dt(n)){const r=e[n];Fe(r)&&Da(s,r)}else if(Fe(n))Da(s,n.bind(t));else if(vt(n))if(ke(n))n.forEach(r=>bg(r,e,t,i));else{const r=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(r)&&Da(s,r,n)}}function fh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ha(l,c,o,!0)),Ha(l,e,o)),vt(e)&&r.set(e,l),l}function Ha(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ha(n,r,t,!0),s&&s.forEach(o=>Ha(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ox[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ox={data:Tf,props:Cf,emits:Cf,methods:io,computed:io,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:io,directives:io,watch:kx,provide:Tf,inject:Fx};function Tf(n,e){return e?n?function(){return Pt(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Fx(n,e){return io(ru(n),ru(e))}function ru(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function io(n,e){return n?Pt(Object.create(null),n,e):e}function Cf(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:Pt(Object.create(null),wf(n),wf(e??{})):e}function kx(n,e){if(!n)return e;if(!e)return n;const t=Pt(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function Sg(){return{app:null,config:{isNativeTag:w0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ux=0;function Bx(n,e){return function(i,s=null){Fe(i)||(i=Pt({},i)),s!=null&&!vt(s)&&(s=null);const r=Sg(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ux++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:by,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Fe(u.install)?(o.add(u),u.install(c,...h)):Fe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||xn(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,gh(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&($n(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Qs;Qs=c;try{return u()}finally{Qs=h}}};return c}}let Qs=null;function Pa(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function qn(n,e,t=!1){const i=Vt||An;if(i||Qs){const s=Qs?Qs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Fe(e)?e.call(i&&i.proxy):e}}const Mg={},wg=()=>Object.create(Mg),Eg=n=>Object.getPrototypeOf(n)===Mg;function zx(n,e,t,i=!1){const s={},r=wg();n.propsDefaults=Object.create(null),Tg(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:rg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Vx(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(xl(n.emitsOptions,f))continue;const d=e[f];if(l)if(nt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Sn(f);s[g]=ou(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Tg(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!nt(e,h)&&((u=Es(h))===h||!nt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=ou(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!nt(e,h))&&(delete r[h],c=!0)}c&&li(n.attrs,"set","")}function Tg(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ao(l))continue;const c=e[l];let u;s&&nt(s,u=Sn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:xl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||ut;for(let u=0;u<r.length;u++){const h=r[u];t[h]=ou(s,l,h,c[h],n,!nt(c,h))}}return o}function ou(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ko(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Es(t))&&(i=!0))}return i}const Hx=new WeakMap;function Cg(n,e,t=!1){const i=t?Hx:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Fe(n)){const u=h=>{l=!0;const[f,d]=Cg(h,e,!0);Pt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,Ys),Ys;if(ke(r))for(let u=0;u<r.length;u++){const h=Sn(r[u]);Af(h)&&(o[h]=ut)}else if(r)for(const u in r){const h=Sn(u);if(Af(h)){const f=r[u],d=o[h]=ke(f)||Fe(f)?{type:f}:Pt({},f),g=d.type;let p=!1,m=!0;if(ke(g))for(let _=0;_<g.length;++_){const S=g[_],v=Fe(S)&&S.name;if(v==="Boolean"){p=!0;break}else v==="String"&&(m=!1)}else p=Fe(g)&&g.name==="Boolean";d[0]=p,d[1]=m,(p||nt(d,"default"))&&a.push(h)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function Af(n){return n[0]!=="$"&&!ao(n)}const Ag=n=>n[0]==="_"||n==="$stable",dh=n=>ke(n)?n.map(Wn):[Wn(n)],Gx=(n,e,t)=>{if(e._n)return e;const i=gx((...s)=>dh(e(...s)),t);return i._c=!1,i},Rg=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Ag(s))continue;const r=n[s];if(Fe(r))e[s]=Gx(s,r,i);else if(r!=null){const o=dh(r);e[s]=()=>o}}},Ig=(n,e)=>{const t=dh(e);n.slots.default=()=>t},Lg=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Wx=(n,e,t)=>{const i=n.slots=wg();if(n.vnode.shapeFlag&32){const s=e._;s?(Lg(i,e,t),t&&Gm(i,"_",s,!0)):Rg(e,i)}else e&&Ig(n,e)},jx=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Lg(s,e,t):(r=!e.$stable,Rg(e,s)),o=e}else e&&(Ig(n,e),o={default:1});if(r)for(const a in s)!Ag(a)&&o[a]==null&&delete s[a]},un=ry;function qx(n){return Xx(n)}function Xx(n,e){const t=pl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=In,insertStaticContent:g}=n,p=(w,C,k,ne=null,q=null,Q=null,ce=void 0,me=null,de=!!C.dynamicChildren)=>{if(w===C)return;w&&!zr(w,C)&&(ne=N(w),z(w,q,Q,!0),w=null),C.patchFlag===-2&&(de=!1,C.dynamicChildren=null);const{type:b,ref:x,shapeFlag:L}=C;switch(b){case yl:m(w,C,k,ne);break;case To:_(w,C,k,ne);break;case ec:w==null&&S(C,k,ne,ce);break;case ai:re(w,C,k,ne,q,Q,ce,me,de);break;default:L&1?T(w,C,k,ne,q,Q,ce,me,de):L&6?B(w,C,k,ne,q,Q,ce,me,de):(L&64||L&128)&&b.process(w,C,k,ne,q,Q,ce,me,de,oe)}x!=null&&q&&Va(x,w&&w.ref,Q,C||w,!C)},m=(w,C,k,ne)=>{if(w==null)i(C.el=a(C.children),k,ne);else{const q=C.el=w.el;C.children!==w.children&&c(q,C.children)}},_=(w,C,k,ne)=>{w==null?i(C.el=l(C.children||""),k,ne):C.el=w.el},S=(w,C,k,ne)=>{[w.el,w.anchor]=g(w.children,C,k,ne,w.el,w.anchor)},v=({el:w,anchor:C},k,ne)=>{let q;for(;w&&w!==C;)q=f(w),i(w,k,ne),w=q;i(C,k,ne)},y=({el:w,anchor:C})=>{let k;for(;w&&w!==C;)k=f(w),s(w),w=k;s(C)},T=(w,C,k,ne,q,Q,ce,me,de)=>{C.type==="svg"?ce="svg":C.type==="math"&&(ce="mathml"),w==null?R(C,k,ne,q,Q,ce,me,de):A(w,C,q,Q,ce,me,de)},R=(w,C,k,ne,q,Q,ce,me)=>{let de,b;const{props:x,shapeFlag:L,transition:W,dirs:K}=w;if(de=w.el=o(w.type,Q,x&&x.is,x),L&8?u(de,w.children):L&16&&M(w.children,de,null,ne,q,Jl(w,Q),ce,me),K&&Ki(w,null,ne,"created"),I(de,w,w.scopeId,ce,ne),x){for(const ve in x)ve!=="value"&&!ao(ve)&&r(de,ve,null,x[ve],Q,ne);"value"in x&&r(de,"value",null,x.value,Q),(b=x.onVnodeBeforeMount)&&zn(b,ne,w)}K&&Ki(w,null,ne,"beforeMount");const ae=$x(q,W);ae&&W.beforeEnter(de),i(de,C,k),((b=x&&x.onVnodeMounted)||ae||K)&&un(()=>{b&&zn(b,ne,w),ae&&W.enter(de),K&&Ki(w,null,ne,"mounted")},q)},I=(w,C,k,ne,q)=>{if(k&&d(w,k),ne)for(let Q=0;Q<ne.length;Q++)d(w,ne[Q]);if(q){let Q=q.subTree;if(C===Q||kg(Q.type)&&(Q.ssContent===C||Q.ssFallback===C)){const ce=q.vnode;I(w,ce,ce.scopeId,ce.slotScopeIds,q.parent)}}},M=(w,C,k,ne,q,Q,ce,me,de=0)=>{for(let b=de;b<w.length;b++){const x=w[b]=me?Ci(w[b]):Wn(w[b]);p(null,x,C,k,ne,q,Q,ce,me)}},A=(w,C,k,ne,q,Q,ce)=>{const me=C.el=w.el;let{patchFlag:de,dynamicChildren:b,dirs:x}=C;de|=w.patchFlag&16;const L=w.props||ut,W=C.props||ut;let K;if(k&&Yi(k,!1),(K=W.onVnodeBeforeUpdate)&&zn(K,k,C,w),x&&Ki(C,w,k,"beforeUpdate"),k&&Yi(k,!0),(L.innerHTML&&W.innerHTML==null||L.textContent&&W.textContent==null)&&u(me,""),b?O(w.dynamicChildren,b,me,k,ne,Jl(C,q),Q):ce||G(w,C,me,null,k,ne,Jl(C,q),Q,!1),de>0){if(de&16)se(me,L,W,k,q);else if(de&2&&L.class!==W.class&&r(me,"class",null,W.class,q),de&4&&r(me,"style",L.style,W.style,q),de&8){const ae=C.dynamicProps;for(let ve=0;ve<ae.length;ve++){const he=ae[ve],Y=L[he],we=W[he];(we!==Y||he==="value")&&r(me,he,Y,we,q,k)}}de&1&&w.children!==C.children&&u(me,C.children)}else!ce&&b==null&&se(me,L,W,k,q);((K=W.onVnodeUpdated)||x)&&un(()=>{K&&zn(K,k,C,w),x&&Ki(C,w,k,"updated")},ne)},O=(w,C,k,ne,q,Q,ce)=>{for(let me=0;me<C.length;me++){const de=w[me],b=C[me],x=de.el&&(de.type===ai||!zr(de,b)||de.shapeFlag&70)?h(de.el):k;p(de,b,x,null,ne,q,Q,ce,!0)}},se=(w,C,k,ne,q)=>{if(C!==k){if(C!==ut)for(const Q in C)!ao(Q)&&!(Q in k)&&r(w,Q,C[Q],null,q,ne);for(const Q in k){if(ao(Q))continue;const ce=k[Q],me=C[Q];ce!==me&&Q!=="value"&&r(w,Q,me,ce,q,ne)}"value"in k&&r(w,"value",C.value,k.value,q)}},re=(w,C,k,ne,q,Q,ce,me,de)=>{const b=C.el=w?w.el:a(""),x=C.anchor=w?w.anchor:a("");let{patchFlag:L,dynamicChildren:W,slotScopeIds:K}=C;K&&(me=me?me.concat(K):K),w==null?(i(b,k,ne),i(x,k,ne),M(C.children||[],k,x,q,Q,ce,me,de)):L>0&&L&64&&W&&w.dynamicChildren?(O(w.dynamicChildren,W,k,q,Q,ce,me),(C.key!=null||q&&C===q.subTree)&&Pg(w,C,!0)):G(w,C,k,x,q,Q,ce,me,de)},B=(w,C,k,ne,q,Q,ce,me,de)=>{C.slotScopeIds=me,w==null?C.shapeFlag&512?q.ctx.activate(C,k,ne,ce,de):F(C,k,ne,q,Q,ce,de):X(w,C,de)},F=(w,C,k,ne,q,Q,ce)=>{const me=w.component=py(w,ne,q);if(_g(w)&&(me.ctx.renderer=oe),my(me,!1,ce),me.asyncDep){if(q&&q.registerDep(me,ie,ce),!w.el){const de=me.subTree=xn(To);_(null,de,C,k)}}else ie(me,w,C,k,q,Q,ce)},X=(w,C,k)=>{const ne=C.component=w.component;if(iy(w,C,k))if(ne.asyncDep&&!ne.asyncResolved){te(ne,C,k);return}else ne.next=C,ne.update();else C.el=w.el,ne.vnode=C},ie=(w,C,k,ne,q,Q,ce)=>{const me=()=>{if(w.isMounted){let{next:L,bu:W,u:K,parent:ae,vnode:ve}=w;{const Ce=Dg(w);if(Ce){L&&(L.el=ve.el,te(w,L,ce)),Ce.asyncDep.then(()=>{w.isUnmounted||me()});return}}let he=L,Y;Yi(w,!1),L?(L.el=ve.el,te(w,L,ce)):L=ve,W&&Xl(W),(Y=L.props&&L.props.onVnodeBeforeUpdate)&&zn(Y,ae,L,ve),Yi(w,!0);const we=Ql(w),be=w.subTree;w.subTree=we,p(be,we,h(be.el),N(be),w,q,Q),L.el=we.el,he===null&&sy(w,we.el),K&&un(K,q),(Y=L.props&&L.props.onVnodeUpdated)&&un(()=>zn(Y,ae,L,ve),q)}else{let L;const{el:W,props:K}=C,{bm:ae,m:ve,parent:he,root:Y,type:we}=w,be=ho(C);if(Yi(w,!1),ae&&Xl(ae),!be&&(L=K&&K.onVnodeBeforeMount)&&zn(L,he,C),Yi(w,!0),W&&Te){const Ce=()=>{w.subTree=Ql(w),Te(W,w.subTree,w,q,null)};be&&we.__asyncHydrate?we.__asyncHydrate(W,w,Ce):Ce()}else{Y.ce&&Y.ce._injectChildStyle(we);const Ce=w.subTree=Ql(w);p(null,Ce,k,ne,w,q,Q),C.el=Ce.el}if(ve&&un(ve,q),!be&&(L=K&&K.onVnodeMounted)){const Ce=C;un(()=>zn(L,he,Ce),q)}(C.shapeFlag&256||he&&ho(he.vnode)&&he.vnode.shapeFlag&256)&&w.a&&un(w.a,q),w.isMounted=!0,C=k=ne=null}};w.scope.on();const de=w.effect=new jm(me);w.scope.off();const b=w.update=de.run.bind(de),x=w.job=de.runIfDirty.bind(de);x.i=w,x.id=w.uid,de.scheduler=()=>ch(x),Yi(w,!0),b()},te=(w,C,k)=>{C.component=w;const ne=w.vnode.props;w.vnode=C,w.next=null,Vx(w,C.props,ne,k),jx(w,C.children,k),Vi(),Sf(w),Hi()},G=(w,C,k,ne,q,Q,ce,me,de=!1)=>{const b=w&&w.children,x=w?w.shapeFlag:0,L=C.children,{patchFlag:W,shapeFlag:K}=C;if(W>0){if(W&128){le(b,L,k,ne,q,Q,ce,me,de);return}else if(W&256){fe(b,L,k,ne,q,Q,ce,me,de);return}}K&8?(x&16&&ye(b,q,Q),L!==b&&u(k,L)):x&16?K&16?le(b,L,k,ne,q,Q,ce,me,de):ye(b,q,Q,!0):(x&8&&u(k,""),K&16&&M(L,k,ne,q,Q,ce,me,de))},fe=(w,C,k,ne,q,Q,ce,me,de)=>{w=w||Ys,C=C||Ys;const b=w.length,x=C.length,L=Math.min(b,x);let W;for(W=0;W<L;W++){const K=C[W]=de?Ci(C[W]):Wn(C[W]);p(w[W],K,k,null,q,Q,ce,me,de)}b>x?ye(w,q,Q,!0,!1,L):M(C,k,ne,q,Q,ce,me,de,L)},le=(w,C,k,ne,q,Q,ce,me,de)=>{let b=0;const x=C.length;let L=w.length-1,W=x-1;for(;b<=L&&b<=W;){const K=w[b],ae=C[b]=de?Ci(C[b]):Wn(C[b]);if(zr(K,ae))p(K,ae,k,null,q,Q,ce,me,de);else break;b++}for(;b<=L&&b<=W;){const K=w[L],ae=C[W]=de?Ci(C[W]):Wn(C[W]);if(zr(K,ae))p(K,ae,k,null,q,Q,ce,me,de);else break;L--,W--}if(b>L){if(b<=W){const K=W+1,ae=K<x?C[K].el:ne;for(;b<=W;)p(null,C[b]=de?Ci(C[b]):Wn(C[b]),k,ae,q,Q,ce,me,de),b++}}else if(b>W)for(;b<=L;)z(w[b],q,Q,!0),b++;else{const K=b,ae=b,ve=new Map;for(b=ae;b<=W;b++){const De=C[b]=de?Ci(C[b]):Wn(C[b]);De.key!=null&&ve.set(De.key,b)}let he,Y=0;const we=W-ae+1;let be=!1,Ce=0;const Re=new Array(we);for(b=0;b<we;b++)Re[b]=0;for(b=K;b<=L;b++){const De=w[b];if(Y>=we){z(De,q,Q,!0);continue}let je;if(De.key!=null)je=ve.get(De.key);else for(he=ae;he<=W;he++)if(Re[he-ae]===0&&zr(De,C[he])){je=he;break}je===void 0?z(De,q,Q,!0):(Re[je-ae]=b+1,je>=Ce?Ce=je:be=!0,p(De,C[je],k,null,q,Q,ce,me,de),Y++)}const Ie=be?Kx(Re):Ys;for(he=Ie.length-1,b=we-1;b>=0;b--){const De=ae+b,je=C[De],gt=De+1<x?C[De+1].el:ne;Re[b]===0?p(null,je,k,gt,q,Q,ce,me,de):be&&(he<0||b!==Ie[he]?Ee(je,k,gt,2):he--)}}},Ee=(w,C,k,ne,q=null)=>{const{el:Q,type:ce,transition:me,children:de,shapeFlag:b}=w;if(b&6){Ee(w.component.subTree,C,k,ne);return}if(b&128){w.suspense.move(C,k,ne);return}if(b&64){ce.move(w,C,k,oe);return}if(ce===ai){i(Q,C,k);for(let L=0;L<de.length;L++)Ee(de[L],C,k,ne);i(w.anchor,C,k);return}if(ce===ec){v(w,C,k);return}if(ne!==2&&b&1&&me)if(ne===0)me.beforeEnter(Q),i(Q,C,k),un(()=>me.enter(Q),q);else{const{leave:L,delayLeave:W,afterLeave:K}=me,ae=()=>i(Q,C,k),ve=()=>{L(Q,()=>{ae(),K&&K()})};W?W(Q,ae,ve):ve()}else i(Q,C,k)},z=(w,C,k,ne=!1,q=!1)=>{const{type:Q,props:ce,ref:me,children:de,dynamicChildren:b,shapeFlag:x,patchFlag:L,dirs:W,cacheIndex:K}=w;if(L===-2&&(q=!1),me!=null&&Va(me,null,k,w,!0),K!=null&&(C.renderCache[K]=void 0),x&256){C.ctx.deactivate(w);return}const ae=x&1&&W,ve=!ho(w);let he;if(ve&&(he=ce&&ce.onVnodeBeforeUnmount)&&zn(he,C,w),x&6)V(w.component,k,ne);else{if(x&128){w.suspense.unmount(k,ne);return}ae&&Ki(w,null,C,"beforeUnmount"),x&64?w.type.remove(w,C,k,oe,ne):b&&!b.hasOnce&&(Q!==ai||L>0&&L&64)?ye(b,C,k,!1,!0):(Q===ai&&L&384||!q&&x&16)&&ye(de,C,k),ne&&ue(w)}(ve&&(he=ce&&ce.onVnodeUnmounted)||ae)&&un(()=>{he&&zn(he,C,w),ae&&Ki(w,null,C,"unmounted")},k)},ue=w=>{const{type:C,el:k,anchor:ne,transition:q}=w;if(C===ai){_e(k,ne);return}if(C===ec){y(w);return}const Q=()=>{s(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:ce,delayLeave:me}=q,de=()=>ce(k,Q);me?me(w.el,Q,de):de()}else Q()},_e=(w,C)=>{let k;for(;w!==C;)k=f(w),s(w),w=k;s(C)},V=(w,C,k)=>{const{bum:ne,scope:q,job:Q,subTree:ce,um:me,m:de,a:b}=w;Rf(de),Rf(b),ne&&Xl(ne),q.stop(),Q&&(Q.flags|=8,z(ce,w,C,k)),me&&un(me,C),un(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},ye=(w,C,k,ne=!1,q=!1,Q=0)=>{for(let ce=Q;ce<w.length;ce++)z(w[ce],C,k,ne,q)},N=w=>{if(w.shapeFlag&6)return N(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=f(w.anchor||w.el),k=C&&C[_x];return k?f(k):C};let $=!1;const j=(w,C,k)=>{w==null?C._vnode&&z(C._vnode,null,null,!0):p(C._vnode||null,w,C,null,null,null,k),C._vnode=w,$||($=!0,Sf(),fg(),$=!1)},oe={p,um:z,m:Ee,r:ue,mt:F,mc:M,pc:G,pbc:O,n:N,o:n};let Se,Te;return e&&([Se,Te]=e(oe)),{render:j,hydrate:Se,createApp:Bx(j,Se)}}function Jl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function $x(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Pg(n,e,t=!1){const i=n.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ci(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Pg(o,a)),a.type===yl&&(a.el=o.el)}}function Kx(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Dg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dg(e)}function Rf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Yx=Symbol.for("v-scx"),Zx=()=>qn(Yx);function Da(n,e,t){return Ng(n,e,t)}function Ng(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=Pt({},t),l=e&&i||!e&&r!=="post";let c;if(Ao){if(r==="sync"){const d=Zx();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=In,d.resume=In,d.pause=In,d}}const u=Vt;a.call=(d,g,p)=>$n(d,u,g,p);let h=!1;r==="post"?a.scheduler=d=>{un(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():ch(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=fx(n,e,a);return Ao&&(c?c.push(f):l&&f()),f}function Jx(n,e,t){const i=this.proxy,s=Dt(n)?n.includes(".")?Og(i,n):()=>i[n]:n.bind(i,i);let r;Fe(e)?r=e:(r=e.handler,t=e);const o=Ko(this),a=Ng(s,r.bind(i),t);return o(),a}function Og(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Qx=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Sn(e)}Modifiers`]||n[`${Es(e)}Modifiers`];function ey(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),o=r&&Qx(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Dt(u)?u.trim():u)),o.number&&(s=t.map(P0)));let a,l=i[a=ql(e)]||i[a=ql(Sn(e))];!l&&r&&(l=i[a=ql(Es(e))]),l&&$n(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,$n(c,n,6,s)}}function Fg(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Fe(n)){const l=c=>{const u=Fg(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(ke(r)?r.forEach(l=>o[l]=null):Pt(o,r),vt(n)&&i.set(n,o),o)}function xl(n,e){return!n||!ul(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Es(e))||nt(n,e))}function Ql(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:p}=n,m=za(n);let _,S;try{if(t.shapeFlag&4){const y=s||i,T=y;_=Wn(c.call(T,y,u,h,d,f,g)),S=a}else{const y=e;_=Wn(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),S=e.props?a:ty(a)}}catch(y){po.length=0,gl(y,n,1),_=xn(To)}let v=_;if(S&&p!==!1){const y=Object.keys(S),{shapeFlag:T}=v;y.length&&T&7&&(r&&y.some(Ku)&&(S=ny(S,r)),v=cr(v,S,!1,!0))}return t.dirs&&(v=cr(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&uh(v,t.transition),_=v,za(m),_}const ty=n=>{let e;for(const t in n)(t==="class"||t==="style"||ul(t))&&((e||(e={}))[t]=n[t]);return e},ny=(n,e)=>{const t={};for(const i in n)(!Ku(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function iy(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?If(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!xl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?If(i,o,c):!0:!!o;return!1}function If(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!xl(t,r))return!0}return!1}function sy({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const kg=n=>n.__isSuspense;function ry(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):mx(n)}const ai=Symbol.for("v-fgt"),yl=Symbol.for("v-txt"),To=Symbol.for("v-cmt"),ec=Symbol.for("v-stc"),po=[];let fn=null;function ph(n=!1){po.push(fn=n?null:[])}function oy(){po.pop(),fn=po[po.length-1]||null}let Co=1;function Lf(n,e=!1){Co+=n,n<0&&fn&&e&&(fn.hasOnce=!0)}function Ug(n){return n.dynamicChildren=Co>0?fn||Ys:null,oy(),Co>0&&fn&&fn.push(n),n}function Bg(n,e,t,i,s,r){return Ug(Vg(n,e,t,i,s,r,!0))}function ay(n,e,t,i,s){return Ug(xn(n,e,t,i,s,!0))}function Ga(n){return n?n.__v_isVNode===!0:!1}function zr(n,e){return n.type===e.type&&n.key===e.key}const zg=({key:n})=>n??null,Na=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||Ht(n)||Fe(n)?{i:An,r:n,k:e,f:!!t}:n:null);function Vg(n,e=null,t=null,i=0,s=null,r=n===ai?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&zg(e),ref:e&&Na(e),scopeId:pg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return a?(mh(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),Co>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const xn=ly;function ly(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Ix)&&(n=To),Ga(n)){const a=cr(n,e,!0);return t&&mh(a,t),Co>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(yy(n)&&(n=n.__vccOpts),e){e=cy(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=Qu(a)),vt(l)&&(ah(l)&&!ke(l)&&(l=Pt({},l)),e.style=Ju(l))}const o=Dt(n)?1:kg(n)?128:vx(n)?64:vt(n)?4:Fe(n)?2:0;return Vg(n,e,t,i,s,o,r,!0)}function cy(n){return n?ah(n)||Eg(n)?Pt({},n):n:null}function cr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?hy(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&zg(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(Na(e)):[r,Na(e)]:Na(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ai?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cr(n.ssContent),ssFallback:n.ssFallback&&cr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&uh(u,l.clone(u)),u}function uy(n=" ",e=0){return xn(yl,null,n,e)}function Wn(n){return n==null||typeof n=="boolean"?xn(To):ke(n)?xn(ai,null,n.slice()):Ga(n)?Ci(n):xn(yl,null,String(n))}function Ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cr(n)}function mh(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mh(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Eg(e)?e._ctx=An:s===3&&An&&(An.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:An},t=32):(e=String(e),i&64?(t=16,e=[uy(e)]):t=8);n.children=e,n.shapeFlag|=t}function hy(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Qu([e.class,i.class]));else if(s==="style")e.style=Ju([e.style,i.style]);else if(ul(s)){const r=e[s],o=i[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function zn(n,e,t,i=null){$n(n,e,7,[t,i])}const fy=Sg();let dy=0;function py(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||fy,r={uid:dy++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new B0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cg(i,s),emitsOptions:Fg(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ey.bind(null,r),n.ce&&n.ce(r),r}let Vt=null,Wa,au;{const n=pl(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Wa=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),au=e("__VUE_SSR_SETTERS__",t=>Ao=t)}const Ko=n=>{const e=Vt;return Wa(n),n.scope.on(),()=>{n.scope.off(),Wa(e)}},Pf=()=>{Vt&&Vt.scope.off(),Wa(null)};function Hg(n){return n.vnode.shapeFlag&4}let Ao=!1;function my(n,e=!1,t=!1){e&&au(e);const{props:i,children:s}=n.vnode,r=Hg(n);zx(n,i,r,e),Wx(n,s,t);const o=r?gy(n,e):void 0;return e&&au(!1),o}function gy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Px);const{setup:i}=t;if(i){Vi();const s=n.setupContext=i.length>1?vy(n):null,r=Ko(n),o=$o(i,n,0,[n.props,s]),a=Hm(o);if(Hi(),r(),(a||n.sp)&&!ho(n)&&gg(n),a){if(o.then(Pf,Pf),e)return o.then(l=>{Df(n,l,e)}).catch(l=>{gl(l,n,0)});n.asyncDep=o}else Df(n,o,e)}else Gg(n,e)}function Df(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=lg(e)),Gg(n,t)}let Nf;function Gg(n,e,t){const i=n.type;if(!n.render){if(!e&&Nf&&!i.render){const s=i.template||fh(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Pt(Pt({isCustomElement:r,delimiters:a},o),l);i.render=Nf(s,c)}}n.render=i.render||In}{const s=Ko(n);Vi();try{Dx(n)}finally{Hi(),s()}}}const _y={get(n,e){return Bt(n,"get",""),n[e]}};function vy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,_y),slots:n.slots,emit:n.emit,expose:e}}function gh(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(lg(rx(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fo)return fo[t](n)},has(e,t){return t in e||t in fo}})):n.proxy}function xy(n,e=!0){return Fe(n)?n.displayName||n.name:n.name||e&&n.__name}function yy(n){return Fe(n)&&"__vccOpts"in n}const Tn=(n,e)=>ux(n,e,Ao);function Wg(n,e,t){const i=arguments.length;return i===2?vt(e)&&!ke(e)?Ga(e)?xn(n,null,[e]):xn(n,e):xn(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ga(t)&&(t=[t]),xn(n,e,t))}const by="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lu;const Of=typeof window<"u"&&window.trustedTypes;if(Of)try{lu=Of.createPolicy("vue",{createHTML:n=>n})}catch{}const jg=lu?n=>lu.createHTML(n):n=>n,Sy="http://www.w3.org/2000/svg",My="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Ff=oi&&oi.createElement("template"),wy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?oi.createElementNS(Sy,n):e==="mathml"?oi.createElementNS(My,n):t?oi.createElement(n,{is:t}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ff.innerHTML=jg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ff.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ey=Symbol("_vtc");function Ty(n,e,t){const i=n[Ey];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const kf=Symbol("_vod"),Cy=Symbol("_vsh"),Ay=Symbol(""),Ry=/(^|;)\s*display\s*:/;function Iy(n,e,t){const i=n.style,s=Dt(t);let r=!1;if(t&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Oa(i,a,"")}else for(const o in e)t[o]==null&&Oa(i,o,"");for(const o in t)o==="display"&&(r=!0),Oa(i,o,t[o])}else if(s){if(e!==t){const o=i[Ay];o&&(t+=";"+o),i.cssText=t,r=Ry.test(t)}}else e&&n.removeAttribute("style");kf in n&&(n[kf]=r?i.display:"",n[Cy]&&(i.display="none"))}const Uf=/\s*!important$/;function Oa(n,e,t){if(ke(t))t.forEach(i=>Oa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ly(n,e);Uf.test(t)?n.setProperty(Es(i),t.replace(Uf,""),"important"):n[i]=t}}const Bf=["Webkit","Moz","ms"],tc={};function Ly(n,e){const t=tc[e];if(t)return t;let i=Sn(e);if(i!=="filter"&&i in n)return tc[e]=i;i=dl(i);for(let s=0;s<Bf.length;s++){const r=Bf[s]+i;if(r in n)return tc[e]=r}return e}const zf="http://www.w3.org/1999/xlink";function Vf(n,e,t,i,s,r=U0(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zf,e.slice(6,e.length)):n.setAttributeNS(zf,e,t):t==null||r&&!Wm(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Cr(t)?String(t):t)}function Hf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jg(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Wm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Py(n,e,t,i){n.addEventListener(e,t,i)}function Dy(n,e,t,i){n.removeEventListener(e,t,i)}const Gf=Symbol("_vei");function Ny(n,e,t,i,s=null){const r=n[Gf]||(n[Gf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Oy(e);if(i){const c=r[e]=Uy(i,s);Py(n,a,c,l)}else o&&(Dy(n,a,o,l),r[e]=void 0)}}const Wf=/(?:Once|Passive|Capture)$/;function Oy(n){let e;if(Wf.test(n)){e={};let i;for(;i=n.match(Wf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Es(n.slice(2)),e]}let nc=0;const Fy=Promise.resolve(),ky=()=>nc||(Fy.then(()=>nc=0),nc=Date.now());function Uy(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;$n(By(i,t.value),e,5,[i])};return t.value=n,t.attached=ky(),t}function By(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const jf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,zy=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Ty(n,i,o):e==="style"?Iy(n,t,i):ul(e)?Ku(e)||Ny(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vy(n,e,i,o))?(Hf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vf(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Dt(i))?Hf(n,Sn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vf(n,e,i,o))};function Vy(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&jf(e)&&Fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jf(e)&&Dt(t)?!1:e in n}const Hy=Pt({patchProp:zy},wy);let qf;function Gy(){return qf||(qf=qx(Hy))}const Wy=(...n)=>{const e=Gy().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=qy(i);if(!s)return;const r=e._component;!Fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,jy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function qy(n){return Dt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const qs=typeof document<"u";function qg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Xy(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&qg(n.default)}const et=Object.assign;function ic(n,e){const t={};for(const i in e){const s=e[i];t[i]=On(s)?s.map(n):n(s)}return t}const mo=()=>{},On=Array.isArray,Xg=/#/g,$y=/&/g,Ky=/\//g,Yy=/=/g,Zy=/\?/g,$g=/\+/g,Jy=/%5B/g,Qy=/%5D/g,Kg=/%5E/g,eb=/%60/g,Yg=/%7B/g,tb=/%7C/g,Zg=/%7D/g,nb=/%20/g;function _h(n){return encodeURI(""+n).replace(tb,"|").replace(Jy,"[").replace(Qy,"]")}function ib(n){return _h(n).replace(Yg,"{").replace(Zg,"}").replace(Kg,"^")}function cu(n){return _h(n).replace($g,"%2B").replace(nb,"+").replace(Xg,"%23").replace($y,"%26").replace(eb,"`").replace(Yg,"{").replace(Zg,"}").replace(Kg,"^")}function sb(n){return cu(n).replace(Yy,"%3D")}function rb(n){return _h(n).replace(Xg,"%23").replace(Zy,"%3F")}function ob(n){return n==null?"":rb(n).replace(Ky,"%2F")}function Ro(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const ab=/\/$/,lb=n=>n.replace(ab,"");function sc(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=fb(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Ro(o)}}function cb(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Xf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function ub(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&ur(e.matched[i],t.matched[s])&&Jg(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ur(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Jg(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!hb(n[t],e[t]))return!1;return!0}function hb(n,e){return On(n)?$f(n,e):On(e)?$f(e,n):n===e}function $f(n,e){return On(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function fb(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Io;(function(n){n.pop="pop",n.push="push"})(Io||(Io={}));var go;(function(n){n.back="back",n.forward="forward",n.unknown=""})(go||(go={}));function db(n){if(!n)if(qs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),lb(n)}const pb=/^[^#]+#/;function mb(n,e){return n.replace(pb,"#")+e}function gb(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const bl=()=>({left:window.scrollX,top:window.scrollY});function _b(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=gb(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kf(n,e){return(history.state?history.state.position-e:-1)+n}const uu=new Map;function vb(n,e){uu.set(n,e)}function xb(n){const e=uu.get(n);return uu.delete(n),e}let yb=()=>location.protocol+"//"+location.host;function Qg(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Xf(l,"")}return Xf(t,n)+i+s}function bb(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=Qg(n,location),g=t.value,p=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=p?f.position-p.position:0}else i(d);s.forEach(_=>{_(t.value,g,{delta:m,type:Io.pop,direction:m?m>0?go.forward:go.back:go.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(et({},f.state,{scroll:bl()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Yf(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?bl():null}}function Sb(n){const{history:e,location:t}=window,i={value:Qg(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:yb()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=et({},e.state,Yf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=et({},s.value,e.state,{forward:l,scroll:bl()});r(u.current,u,!0);const h=et({},Yf(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Mb(n){n=db(n);const e=Sb(n),t=bb(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=et({location:"",base:n,go:i,createHref:mb.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wb(n){return typeof n=="string"||n&&typeof n=="object"}function e_(n){return typeof n=="string"||typeof n=="symbol"}const t_=Symbol("");var Zf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Zf||(Zf={}));function hr(n,e){return et(new Error,{type:n,[t_]:!0},e)}function Qn(n,e){return n instanceof Error&&t_ in n&&(e==null||!!(n.type&e))}const Jf="[^/]+?",Eb={sensitive:!1,strict:!1,start:!0,end:!0},Tb=/[.+*?^${}()[\]/\\]/g;function Cb(n,e){const t=et({},Eb,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Tb,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:p,optional:m,regexp:_}=f;r.push({name:g,repeatable:p,optional:m});const S=_||Jf;if(S!==Jf){d+=10;try{new RegExp(`(${S})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+y.message)}}let v=p?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),s+=v,d+=20,m&&(d+=-8),p&&(d+=-20),S===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:p,optional:m}=d,_=g in c?c[g]:"";if(On(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=On(_)?_.join("/"):_;if(!S)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Ab(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function n_(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Ab(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Qf(i))return 1;if(Qf(s))return-1}return s.length-i.length}function Qf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Rb={type:0,value:""},Ib=/[a-zA-Z0-9_]/;function Lb(n){if(!n)return[[]];if(n==="/")return[[Rb]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:Ib.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Pb(n,e,t){const i=Cb(Lb(n.path),t),s=et(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Db(n,e){const t=[],i=new Map;e=id({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,f,d){const g=!d,p=td(h);p.aliasOf=d&&d.record;const m=id(e,h),_=[p];if("alias"in h){const y=typeof h.alias=="string"?[h.alias]:h.alias;for(const T of y)_.push(td(et({},p,{components:d?d.record.components:p.components,path:T,aliasOf:d?d.record:p})))}let S,v;for(const y of _){const{path:T}=y;if(f&&T[0]!=="/"){const R=f.record.path,I=R[R.length-1]==="/"?"":"/";y.path=f.record.path+(T&&I+T)}if(S=Pb(y,f,m),d?d.alias.push(S):(v=v||S,v!==S&&v.alias.push(S),g&&h.name&&!nd(S)&&o(h.name)),i_(S)&&l(S),p.children){const R=p.children;for(let I=0;I<R.length;I++)r(R[I],S,d&&d.children[I])}d=d||S}return v?()=>{o(v)}:mo}function o(h){if(e_(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=Fb(h,t);t.splice(f,0,h),h.record.name&&!nd(h)&&i.set(h.record.name,h)}function c(h,f){let d,g={},p,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw hr(1,{location:h});m=d.record.name,g=et(ed(f.params,d.keys.filter(v=>!v.optional).concat(d.parent?d.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),h.params&&ed(h.params,d.keys.map(v=>v.name))),p=d.stringify(g)}else if(h.path!=null)p=h.path,d=t.find(v=>v.re.test(p)),d&&(g=d.parse(p),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(v=>v.re.test(f.path)),!d)throw hr(1,{location:h,currentLocation:f});m=d.record.name,g=et({},f.params,h.params),p=d.stringify(g)}const _=[];let S=d;for(;S;)_.unshift(S.record),S=S.parent;return{name:m,path:p,params:g,matched:_,meta:Ob(_)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function ed(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function td(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Nb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Nb(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function nd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ob(n){return n.reduce((e,t)=>et(e,t.meta),{})}function id(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Fb(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;n_(n,e[r])<0?i=r:t=r+1}const s=kb(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function kb(n){let e=n;for(;e=e.parent;)if(i_(e)&&n_(n,e)===0)return e}function i_({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Ub(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace($g," "),o=r.indexOf("="),a=Ro(o<0?r:r.slice(0,o)),l=o<0?null:Ro(r.slice(o+1));if(a in e){let c=e[a];On(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function sd(n){let e="";for(let t in n){const i=n[t];if(t=sb(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(On(i)?i.map(r=>r&&cu(r)):[i&&cu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Bb(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=On(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const zb=Symbol(""),rd=Symbol(""),Sl=Symbol(""),s_=Symbol(""),hu=Symbol("");function Vr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ai(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(hr(4,{from:t,to:e})):f instanceof Error?l(f):wb(f)?l(hr(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function rc(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(qg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Ai(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Xy(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&Ai(d,t,i,o,a,s)()}))}}return r}function od(n){const e=qn(Sl),t=qn(s_),i=Tn(()=>{const l=Zs(n.to);return e.resolve(l)}),s=Tn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(ur.bind(null,u));if(f>-1)return f;const d=ad(l[c-2]);return c>1&&ad(u)===d&&h[h.length-1].path!==d?h.findIndex(ur.bind(null,l[c-2])):f}),r=Tn(()=>s.value>-1&&jb(t.params,i.value.params)),o=Tn(()=>s.value>-1&&s.value===t.matched.length-1&&Jg(t.params,i.value.params));function a(l={}){if(Wb(l)){const c=e[Zs(n.replace)?"replace":"push"](Zs(n.to)).catch(mo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Tn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Vb(n){return n.length===1?n[0]:n}const Hb=mg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:od,setup(n,{slots:e}){const t=ml(od(n)),{options:i}=qn(Sl),s=Tn(()=>({[ld(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ld(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&Vb(e.default(t));return n.custom?r:Wg("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Gb=Hb;function Wb(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function jb(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!On(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ad(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ld=(n,e,t)=>n??e??t,qb=mg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=qn(hu),s=Tn(()=>n.route||i.value),r=qn(rd,0),o=Tn(()=>{let c=Zs(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Tn(()=>s.value.matched[o.value]);Pa(rd,Tn(()=>o.value+1)),Pa(zb,a),Pa(hu,s);const l=lh();return Da(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ur(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return cd(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Wg(f,et({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return cd(t.default,{Component:m,route:c})||m}}});function cd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Xb=qb;function $b(n){const e=Db(n.routes,n),t=n.parseQuery||Ub,i=n.stringifyQuery||sd,s=n.history,r=Vr(),o=Vr(),a=Vr(),l=ox(xi);let c=xi;qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ic.bind(null,N=>""+N),h=ic.bind(null,ob),f=ic.bind(null,Ro);function d(N,$){let j,oe;return e_(N)?(j=e.getRecordMatcher(N),oe=$):oe=N,e.addRoute(oe,j)}function g(N){const $=e.getRecordMatcher(N);$&&e.removeRoute($)}function p(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function _(N,$){if($=et({},$||l.value),typeof N=="string"){const C=sc(t,N,$.path),k=e.resolve({path:C.path},$),ne=s.createHref(C.fullPath);return et(C,k,{params:f(k.params),hash:Ro(C.hash),redirectedFrom:void 0,href:ne})}let j;if(N.path!=null)j=et({},N,{path:sc(t,N.path,$.path).path});else{const C=et({},N.params);for(const k in C)C[k]==null&&delete C[k];j=et({},N,{params:h(C)}),$.params=h($.params)}const oe=e.resolve(j,$),Se=N.hash||"";oe.params=u(f(oe.params));const Te=cb(i,et({},N,{hash:ib(Se),path:oe.path})),w=s.createHref(Te);return et({fullPath:Te,hash:Se,query:i===sd?Bb(N.query):N.query||{}},oe,{redirectedFrom:void 0,href:w})}function S(N){return typeof N=="string"?sc(t,N,l.value.path):et({},N)}function v(N,$){if(c!==N)return hr(8,{from:$,to:N})}function y(N){return I(N)}function T(N){return y(et(S(N),{replace:!0}))}function R(N){const $=N.matched[N.matched.length-1];if($&&$.redirect){const{redirect:j}=$;let oe=typeof j=="function"?j(N):j;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=S(oe):{path:oe},oe.params={}),et({query:N.query,hash:N.hash,params:oe.path!=null?{}:N.params},oe)}}function I(N,$){const j=c=_(N),oe=l.value,Se=N.state,Te=N.force,w=N.replace===!0,C=R(j);if(C)return I(et(S(C),{state:typeof C=="object"?et({},Se,C.state):Se,force:Te,replace:w}),$||j);const k=j;k.redirectedFrom=$;let ne;return!Te&&ub(i,oe,j)&&(ne=hr(16,{to:k,from:oe}),Ee(oe,oe,!0,!1)),(ne?Promise.resolve(ne):O(k,oe)).catch(q=>Qn(q)?Qn(q,2)?q:le(q):G(q,k,oe)).then(q=>{if(q){if(Qn(q,2))return I(et({replace:w},S(q.to),{state:typeof q.to=="object"?et({},Se,q.to.state):Se,force:Te}),$||k)}else q=re(k,oe,!0,w,Se);return se(k,oe,q),q})}function M(N,$){const j=v(N,$);return j?Promise.reject(j):Promise.resolve()}function A(N){const $=_e.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(N):N()}function O(N,$){let j;const[oe,Se,Te]=Kb(N,$);j=rc(oe.reverse(),"beforeRouteLeave",N,$);for(const C of oe)C.leaveGuards.forEach(k=>{j.push(Ai(k,N,$))});const w=M.bind(null,N,$);return j.push(w),ye(j).then(()=>{j=[];for(const C of r.list())j.push(Ai(C,N,$));return j.push(w),ye(j)}).then(()=>{j=rc(Se,"beforeRouteUpdate",N,$);for(const C of Se)C.updateGuards.forEach(k=>{j.push(Ai(k,N,$))});return j.push(w),ye(j)}).then(()=>{j=[];for(const C of Te)if(C.beforeEnter)if(On(C.beforeEnter))for(const k of C.beforeEnter)j.push(Ai(k,N,$));else j.push(Ai(C.beforeEnter,N,$));return j.push(w),ye(j)}).then(()=>(N.matched.forEach(C=>C.enterCallbacks={}),j=rc(Te,"beforeRouteEnter",N,$,A),j.push(w),ye(j))).then(()=>{j=[];for(const C of o.list())j.push(Ai(C,N,$));return j.push(w),ye(j)}).catch(C=>Qn(C,8)?C:Promise.reject(C))}function se(N,$,j){a.list().forEach(oe=>A(()=>oe(N,$,j)))}function re(N,$,j,oe,Se){const Te=v(N,$);if(Te)return Te;const w=$===xi,C=qs?history.state:{};j&&(oe||w?s.replace(N.fullPath,et({scroll:w&&C&&C.scroll},Se)):s.push(N.fullPath,Se)),l.value=N,Ee(N,$,j,w),le()}let B;function F(){B||(B=s.listen((N,$,j)=>{if(!V.listening)return;const oe=_(N),Se=R(oe);if(Se){I(et(Se,{replace:!0,force:!0}),oe).catch(mo);return}c=oe;const Te=l.value;qs&&vb(Kf(Te.fullPath,j.delta),bl()),O(oe,Te).catch(w=>Qn(w,12)?w:Qn(w,2)?(I(et(S(w.to),{force:!0}),oe).then(C=>{Qn(C,20)&&!j.delta&&j.type===Io.pop&&s.go(-1,!1)}).catch(mo),Promise.reject()):(j.delta&&s.go(-j.delta,!1),G(w,oe,Te))).then(w=>{w=w||re(oe,Te,!1),w&&(j.delta&&!Qn(w,8)?s.go(-j.delta,!1):j.type===Io.pop&&Qn(w,20)&&s.go(-1,!1)),se(oe,Te,w)}).catch(mo)}))}let X=Vr(),ie=Vr(),te;function G(N,$,j){le(N);const oe=ie.list();return oe.length?oe.forEach(Se=>Se(N,$,j)):console.error(N),Promise.reject(N)}function fe(){return te&&l.value!==xi?Promise.resolve():new Promise((N,$)=>{X.add([N,$])})}function le(N){return te||(te=!N,F(),X.list().forEach(([$,j])=>N?j(N):$()),X.reset()),N}function Ee(N,$,j,oe){const{scrollBehavior:Se}=n;if(!qs||!Se)return Promise.resolve();const Te=!j&&xb(Kf(N.fullPath,0))||(oe||!j)&&history.state&&history.state.scroll||null;return ug().then(()=>Se(N,$,Te)).then(w=>w&&_b(w)).catch(w=>G(w,N,$))}const z=N=>s.go(N);let ue;const _e=new Set,V={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:p,resolve:_,options:n,push:y,replace:T,go:z,back:()=>z(-1),forward:()=>z(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:fe,install(N){const $=this;N.component("RouterLink",Gb),N.component("RouterView",Xb),N.config.globalProperties.$router=$,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Zs(l)}),qs&&!ue&&l.value===xi&&(ue=!0,y(s.location).catch(Se=>{}));const j={};for(const Se in xi)Object.defineProperty(j,Se,{get:()=>l.value[Se],enumerable:!0});N.provide(Sl,$),N.provide(s_,rg(j)),N.provide(hu,l);const oe=N.unmount;_e.add(N),N.unmount=function(){_e.delete(N),_e.size<1&&(c=xi,B&&B(),B=null,l.value=xi,ue=!1,te=!1),oe()}}};function ye(N){return N.reduce(($,j)=>$.then(()=>A(j)),Promise.resolve())}return V}function Kb(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>ur(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ur(c,l))||s.push(l))}return[t,i,s]}function Yb(){return qn(Sl)}const Zb={__name:"App",setup(n){const e=Yb();return vl(async()=>{navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr")?e.replace("/vr"):e.replace("/normal")}),(t,i)=>{const s=Rx("router-view");return ph(),ay(s)}}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="150",Jb=0,ud=1,Qb=2,r_=1,eS=2,so=3,mi=0,dn=1,ui=2,Oi=0,er=1,hd=2,fd=3,dd=4,tS=5,Xs=100,nS=101,iS=102,pd=103,md=104,sS=200,rS=201,oS=202,aS=203,o_=204,a_=205,lS=206,cS=207,uS=208,hS=209,fS=210,dS=0,pS=1,mS=2,fu=3,gS=4,_S=5,vS=6,xS=7,l_=0,yS=1,bS=2,di=0,SS=1,MS=2,wS=3,ES=4,TS=5,c_=300,fr=301,dr=302,du=303,pu=304,Ml=306,pr=1e3,_n=1001,ja=1002,Rt=1003,mu=1004,Fa=1005,tn=1006,u_=1007,ps=1008,ms=1009,CS=1010,AS=1011,h_=1012,RS=1013,os=1014,Li=1015,Lo=1016,IS=1017,LS=1018,tr=1020,PS=1021,vn=1023,DS=1024,NS=1025,hs=1026,mr=1027,OS=1028,FS=1029,kS=1030,US=1031,BS=1033,oc=33776,ac=33777,lc=33778,cc=33779,gd=35840,_d=35841,vd=35842,xd=35843,zS=36196,yd=37492,bd=37496,Sd=37808,Md=37809,wd=37810,Ed=37811,Td=37812,Cd=37813,Ad=37814,Rd=37815,Id=37816,Ld=37817,Pd=37818,Dd=37819,Nd=37820,Od=37821,uc=36492,VS=36283,Fd=36284,kd=36285,Ud=36286,Po=2300,gr=2301,hc=2302,Bd=2400,zd=2401,Vd=2402,HS=2500,GS=0,f_=1,gu=2,gs=3e3,Qe=3001,WS=3200,jS=3201,d_=0,qS=1,Gn="srgb",Do="srgb-linear",p_="display-p3",fc=7680,XS=519,_u=35044,$S=35048,Hd="300 es",vu=1035;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gd=1234567;const _o=Math.PI/180,No=180/Math.PI;function Dn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function xh(n,e){return(n%e+e)%e}function KS(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function YS(n,e,t){return n!==e?(t-n)/(e-n):0}function vo(n,e,t){return(1-t)*n+t*e}function ZS(n,e,t,i){return vo(n,e,1-Math.exp(-t*i))}function JS(n,e=1){return e-Math.abs(xh(n,e*2)-e)}function QS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function eM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function nM(n,e){return n+Math.random()*(e-n)}function iM(n){return n*(.5-Math.random())}function sM(n){n!==void 0&&(Gd=n);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rM(n){return n*_o}function oM(n){return n*No}function xu(n){return(n&n-1)===0&&n!==0}function m_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function g_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function aM(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lM={DEG2RAD:_o,RAD2DEG:No,generateUUID:Dn,clamp:Zt,euclideanModulo:xh,mapLinear:KS,inverseLerp:YS,lerp:vo,damp:ZS,pingpong:JS,smoothstep:QS,smootherstep:eM,randInt:tM,randFloat:nM,randFloatSpread:iM,seededRandom:sM,degToRad:rM,radToDeg:oM,isPowerOfTwo:xu,ceilPowerOfTwo:m_,floorPowerOfTwo:g_,setQuaternionFromProperEuler:aM,normalize:rt,denormalize:hi};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],p=s[0],m=s[3],_=s[6],S=s[1],v=s[4],y=s[7],T=s[2],R=s[5],I=s[8];return r[0]=o*p+a*S+l*T,r[3]=o*m+a*v+l*R,r[6]=o*_+a*y+l*I,r[1]=c*p+u*S+h*T,r[4]=c*m+u*v+h*R,r[7]=c*_+u*y+h*I,r[2]=f*p+d*S+g*T,r[5]=f*m+d*v+g*R,r[8]=f*_+d*y+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(s*c-u*i)*p,e[2]=(a*i-s*o)*p,e[3]=f*p,e[4]=(u*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=d*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dc.makeScale(e,t)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dc=new Jt;function __(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class Gi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-a;const _=l*f+c*d+u*g+h*p,S=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const T=Math.sqrt(v),R=Math.atan2(T,_*S);m=Math.sin(m*R)/T,a=Math.sin(a*R)/T}const y=a*S;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+p*y,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,h=l*s+r*i-o*t,f=-r*t-o*i-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new D,Wd=new Gi;function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const cM=new Jt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),uM=new Jt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Pi=new D;function hM(n){return n.convertSRGBToLinear(),Pi.set(n.r,n.g,n.b).applyMatrix3(uM),n.setRGB(Pi.x,Pi.y,Pi.z)}function fM(n){return Pi.set(n.r,n.g,n.b).applyMatrix3(cM),n.setRGB(Pi.x,Pi.y,Pi.z).convertLinearToSRGB()}const dM={[Do]:n=>n,[Gn]:n=>n.convertSRGBToLinear(),[p_]:hM},pM={[Do]:n=>n,[Gn]:n=>n.convertLinearToSRGB(),[p_]:fM},jt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Do},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=dM[e],s=pM[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ls;class v_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=Oo("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=nr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class x_{constructor(e=null){this.isSource=!0,this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?v_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mM=0;class Ot extends Ar{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=_n,s=_n,r=tn,o=ps,a=vn,l=ms,c=Ot.DEFAULT_ANISOTROPY,u=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Dn(),this.name="",this.source=new x_(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=c_;Ot.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,T=(_+1)/2,R=(u+f)/4,I=(h+p)/4,M=(g+m)/4;return v>y&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=R/i,r=I/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=M/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=I/r,s=M/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-p)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _s extends Ar{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Ot(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:tn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new x_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class y_ extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gM extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<i&&(i=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Zi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zi)}else i.boundingBox===null&&i.computeBoundingBox(),_c.copy(i.boundingBox),_c.applyMatrix4(e.matrixWorld),this.union(_c);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),aa.subVectors(this.max,Hr),Ps.subVectors(e.a,Hr),Ds.subVectors(e.b,Hr),Ns.subVectors(e.c,Hr),yi.subVectors(Ds,Ps),bi.subVectors(Ns,Ds),Ji.subVectors(Ps,Ns);let t=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Ji.z,Ji.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Ji.z,0,-Ji.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Ji.y,Ji.x,0];return!vc(t,Ps,Ds,Ns,aa)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,Ps,Ds,Ns,aa))?!1:(la.crossVectors(yi,bi),t=[la.x,la.y,la.z],vc(t,Ps,Ds,Ns,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new D,new D,new D,new D,new D,new D,new D,new D],Zi=new D,_c=new Wi,Ps=new D,Ds=new D,Ns=new D,yi=new D,bi=new D,Ji=new D,Hr=new D,aa=new D,la=new D,Qi=new D;function vc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _M=new Wi,Gr=new D,xc=new D;class Ts{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_M.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(xc)),this.expandByPoint(Gr.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new D,yc=new D,ca=new D,Si=new D,bc=new D,ua=new D,Sc=new D;class wl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yc.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(yc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=Si.dot(this.direction),l=-Si.dot(ca),c=Si.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yc).addScaledVector(ca,f),d}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){bc.subVectors(t,e),ua.subVectors(i,e),Sc.crossVectors(bc,ua);let o=this.direction.dot(Sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(Si,ua));if(l<0)return null;const c=a*this.direction.dot(bc.cross(Si));if(c<0||l+c>o)return null;const u=-a*Si.dot(Sc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vM,e,xM)}lookAt(e,t,i){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(i,ln),Mi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(i,ln)),Mi.normalize(),ha.crossVectors(ln,Mi),s[0]=Mi.x,s[4]=ha.x,s[8]=ln.x,s[1]=Mi.y,s[5]=ha.y,s[9]=ln.y,s[2]=Mi.z,s[6]=ha.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],p=i[6],m=i[10],_=i[14],S=i[3],v=i[7],y=i[11],T=i[15],R=s[0],I=s[4],M=s[8],A=s[12],O=s[1],se=s[5],re=s[9],B=s[13],F=s[2],X=s[6],ie=s[10],te=s[14],G=s[3],fe=s[7],le=s[11],Ee=s[15];return r[0]=o*R+a*O+l*F+c*G,r[4]=o*I+a*se+l*X+c*fe,r[8]=o*M+a*re+l*ie+c*le,r[12]=o*A+a*B+l*te+c*Ee,r[1]=u*R+h*O+f*F+d*G,r[5]=u*I+h*se+f*X+d*fe,r[9]=u*M+h*re+f*ie+d*le,r[13]=u*A+h*B+f*te+d*Ee,r[2]=g*R+p*O+m*F+_*G,r[6]=g*I+p*se+m*X+_*fe,r[10]=g*M+p*re+m*ie+_*le,r[14]=g*A+p*B+m*te+_*Ee,r[3]=S*R+v*O+y*F+T*G,r[7]=S*I+v*se+y*X+T*fe,r[11]=S*M+v*re+y*ie+T*le,r[15]=S*A+v*B+y*te+T*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+p*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],S=h*m*c-p*f*c+p*l*d-a*m*d-h*l*_+a*f*_,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*_-o*f*_,y=u*p*c-g*h*c+g*a*d-o*p*d-u*a*_+o*h*_,T=g*h*l-u*p*l-g*a*f+o*p*f+u*a*m-o*h*m,R=t*S+i*v+s*y+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=S*I,e[1]=(p*f*r-h*m*r-p*s*d+i*m*d+h*s*_-i*f*_)*I,e[2]=(a*m*r-p*l*r+p*s*c-i*m*c-a*s*_+i*l*_)*I,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*I,e[4]=v*I,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*_+t*f*_)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*_-t*l*_)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=y*I,e[9]=(g*h*r-u*p*r-g*i*d+t*p*d+u*i*_-t*h*_)*I,e[10]=(o*p*r-g*a*r+g*i*c-t*p*c-o*i*_+t*a*_)*I,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*I,e[12]=T*I,e[13]=(u*p*s-g*h*s+g*i*f-t*p*f-u*i*m+t*h*m)*I,e[14]=(g*a*s-o*p*s-g*i*l+t*p*l+o*i*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,p=o*u,m=o*h,_=a*h,S=l*c,v=l*u,y=l*h,T=i.x,R=i.y,I=i.z;return s[0]=(1-(p+_))*T,s[1]=(d+y)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(d-y)*R,s[5]=(1-(f+_))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+v)*I,s[9]=(m-S)*I,s[10]=(1-(f+p))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Os.set(s[0],s[1],s[2]).length();const o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);const c=1/r,u=1/o,h=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),h=(i+s)/(i-s),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,l=1/(t-e),c=1/(i-s),u=1/(o-r),h=(t+e)*l,f=(i+s)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Os=new D,Mn=new He,vM=new D(0,0,0),xM=new D(1,1,1),Mi=new D,ha=new D,ln=new D,jd=new He,qd=new Gi;class El{constructor(e=0,t=0,i=0,s=El.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}El.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yM=0;const Xd=new D,Fs=new Gi,ni=new He,fa=new D,Wr=new D,bM=new D,SM=new Gi,$d=new D(1,0,0),Kd=new D(0,1,0),Yd=new D(0,0,1),MM={type:"added"},Zd={type:"removed"};class dt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new D,t=new El,i=new Gi,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Jt}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Wr,fa,this.up):ni.lookAt(fa,Wr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(ni),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,SM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}dt.DEFAULT_UP=new D(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new D,ii=new D,Mc=new D,si=new D,ks=new D,Us=new D,Jd=new D,wc=new D,Ec=new D,Tc=new D;class ci{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),ii.subVectors(i,t),Mc.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(ii),l=wn.dot(Mc),c=ii.dot(ii),u=ii.dot(Mc),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si),si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,si),l.set(0,0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),ii.subVectors(e,t),wn.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),wn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ci.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ks.subVectors(s,i),Us.subVectors(r,i),wc.subVectors(e,i);const l=ks.dot(wc),c=Us.dot(wc);if(l<=0&&c<=0)return t.copy(i);Ec.subVectors(e,s);const u=ks.dot(Ec),h=Us.dot(Ec);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ks,o);Tc.subVectors(e,r);const d=ks.dot(Tc),g=Us.dot(Tc);if(g>=0&&d<=g)return t.copy(r);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Us,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Jd.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Jd,a);const _=1/(m+p+f);return o=p*_,a=f*_,t.copy(i).addScaledVector(ks,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wM=0;class Xn extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=er,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=o_,this.blendDst=a_,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fc,this.stencilZFail=fc,this.stencilZPass=fc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},da={h:0,s:0,l:0};function Cc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=jt.workingColorSpace){return this.r=e,this.g=t,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=jt.workingColorSpace){if(e=xh(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Cc(o,r,e+1/3),this.g=Cc(o,r,e),this.b=Cc(o,r,e-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(e,t=Gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,jt.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,jt.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const i=b_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return jt.fromWorkingColorSpace(Ut.copy(this),e),Zt(Ut.r*255,0,255)<<16^Zt(Ut.g*255,0,255)<<8^Zt(Ut.b*255,0,255)<<0}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Gn){jt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,s=Ut.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${s*255|0})`}offsetHSL(e,t,i){return this.getHSL(En),En.h+=e,En.s+=t,En.l+=i,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(da);const i=vo(En.h,da.h,t),s=vo(En.s,da.s,t),r=vo(En.l,da.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Oe;Oe.NAMES=b_;class as extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=l_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,pa=new Ye;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_u,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class S_ extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class M_ extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bn extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let EM=0;const mn=new He,Ac=new dt,Bs=new D,cn=new Wi,jr=new Wi,Tt=new D;class kn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?M_:S_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(cn.min,jr.min),cn.expandByPoint(Tt),Tt.addVectors(cn.max,jr.max),cn.expandByPoint(Tt)):(cn.expandByPoint(jr.min),cn.expandByPoint(jr.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Tt.add(Bs)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let O=0;O<a;O++)c[O]=new D,u[O]=new D;const h=new D,f=new D,d=new D,g=new Ye,p=new Ye,m=new Ye,_=new D,S=new D;function v(O,se,re){h.fromArray(s,O*3),f.fromArray(s,se*3),d.fromArray(s,re*3),g.fromArray(o,O*2),p.fromArray(o,se*2),m.fromArray(o,re*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const B=1/(p.x*m.y-m.x*p.y);isFinite(B)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(B),S.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(B),c[O].add(_),c[se].add(_),c[re].add(_),u[O].add(S),u[se].add(S),u[re].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let O=0,se=y.length;O<se;++O){const re=y[O],B=re.start,F=re.count;for(let X=B,ie=B+F;X<ie;X+=3)v(i[X+0],i[X+1],i[X+2])}const T=new D,R=new D,I=new D,M=new D;function A(O){I.fromArray(r,O*3),M.copy(I);const se=c[O];T.copy(se),T.sub(I.multiplyScalar(I.dot(se))).normalize(),R.crossVectors(M,se);const B=R.dot(u[O])<0?-1:1;l[O*4]=T.x,l[O*4+1]=T.y,l[O*4+2]=T.z,l[O*4+3]=B}for(let O=0,se=y.length;O<se;++O){const re=y[O],B=re.start,F=re.count;for(let X=B,ie=B+F;X<ie;X+=3)A(i[X+0]),A(i[X+1]),A(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new Qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qd=new He,Vn=new wl,ma=new Ts,ep=new D,qr=new D,Xr=new D,$r=new D,Rc=new D,ga=new D,_a=new Ye,va=new Ye,xa=new Ye,Ic=new D,ya=new D;class nn extends dt{constructor(e=new kn,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Rc.fromBufferAttribute(h,e),o?ga.addScaledVector(Rc,u):ga.addScaledVector(Rc.sub(t),u))}t.add(ga)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),ma.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ma,ep)===null||Vn.origin.distanceToSquared(ep)>(e.far-e.near)**2))||(Qd.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(Qd),i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,h=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=s[p.materialIndex],_=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,y=S;v<y;v+=3){const T=a.getX(v),R=a.getX(v+1),I=a.getX(v+2);o=ba(this,m,e,Vn,c,u,T,R,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);o=ba(this,s,e,Vn,c,u,_,S,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=s[p.materialIndex],_=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,y=S;v<y;v+=3){const T=v,R=v+1,I=v+2;o=ba(this,m,e,Vn,c,u,T,R,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=p,S=p+1,v=p+2;o=ba(this,s,e,Vn,c,u,_,S,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function TM(n,e,t,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===mi,a),l===null)return null;ya.copy(a),ya.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:n}}function ba(n,e,t,i,s,r,o,a,l){n.getVertexPosition(o,qr),n.getVertexPosition(a,Xr),n.getVertexPosition(l,$r);const c=TM(n,e,t,i,qr,Xr,$r,Ic);if(c){s&&(_a.fromBufferAttribute(s,o),va.fromBufferAttribute(s,a),xa.fromBufferAttribute(s,l),c.uv=ci.getUV(Ic,qr,Xr,$r,_a,va,xa,new Ye)),r&&(_a.fromBufferAttribute(r,o),va.fromBufferAttribute(r,a),xa.fromBufferAttribute(r,l),c.uv2=ci.getUV(Ic,qr,Xr,$r,_a,va,xa,new Ye));const u={a:o,b:a,c:l,normal:new D,materialIndex:0};ci.getNormal(qr,Xr,$r,u.normal),c.face=u}return c}class ji extends kn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(h,2));function g(p,m,_,S,v,y,T,R,I,M,A){const O=y/I,se=T/M,re=y/2,B=T/2,F=R/2,X=I+1,ie=M+1;let te=0,G=0;const fe=new D;for(let le=0;le<ie;le++){const Ee=le*se-B;for(let z=0;z<X;z++){const ue=z*O-re;fe[p]=ue*S,fe[m]=Ee*v,fe[_]=F,c.push(fe.x,fe.y,fe.z),fe[p]=0,fe[m]=0,fe[_]=R>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(z/I),h.push(1-le/M),te+=1}}for(let le=0;le<M;le++)for(let Ee=0;Ee<I;Ee++){const z=f+Ee+X*le,ue=f+Ee+X*(le+1),_e=f+(Ee+1)+X*(le+1),V=f+(Ee+1)+X*le;l.push(z,ue,V),l.push(ue,_e,V),G+=6}a.addGroup(d,G,A),d+=G,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const s in i)e[s]=i[s]}return e}function CM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function w_(n){return n.getRenderTarget()===null&&n.outputEncoding===Qe?Gn:Do}const AM={clone:_r,merge:$t};var RM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vs extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class E_ extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends E_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Vs=1;class LM extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new zt(zs,Vs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new zt(zs,Vs,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new zt(zs,Vs,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new zt(zs,Vs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new zt(zs,Vs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new zt(zs,Vs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=di,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class T_ extends Ot{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PM extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new T_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ji(5,5,5),r=new vs({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Oi});r.uniforms.tEquirect.value=t;const o=new nn(s,r),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=tn),new LM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Lc=new D,DM=new D,NM=new Jt;class ts{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Lc.subVectors(i,t).cross(DM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||NM.getNormalMatrix(e),s=this.coplanarPoint(Lc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new Ts,Sa=new D;class bh{constructor(e=new ts,t=new ts,i=new ts,s=new ts,r=new ts,o=new ts){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],d=i[9],g=i[10],p=i[11],m=i[12],_=i[13],S=i[14],v=i[15];return t[0].setComponents(a-s,h-l,p-f,v-m).normalize(),t[1].setComponents(a+s,h+l,p+f,v+m).normalize(),t[2].setComponents(a+r,h+c,p+d,v+_).normalize(),t[3].setComponents(a-r,h-c,p-d,v-_).normalize(),t[4].setComponents(a-o,h-u,p-g,v-S).normalize(),t[5].setComponents(a+o,h+u,p+g,v+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C_(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function OM(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,c),d.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Sh extends kn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const S=_*f-o;for(let v=0;v<c;v++){const y=v*h-r;g.push(y,-S,0),p.push(0,0,1),m.push(v/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const v=S+c*_,y=S+c*(_+1),T=S+1+c*(_+1),R=S+1+c*_;d.push(v,y,R),d.push(y,T,R)}this.setIndex(d),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(p,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.width,e.height,e.widthSegments,e.heightSegments)}}var FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM="vec3 transformed = vec3( position );",GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,jM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,nw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",cw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_w=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ew=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Lw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ow=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$w=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Yw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,TE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,CE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,AE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,RE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,IE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,LE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,PE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,DE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,HE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$E=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:FM,alphamap_pars_fragment:kM,alphatest_fragment:UM,alphatest_pars_fragment:BM,aomap_fragment:zM,aomap_pars_fragment:VM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:WM,iridescence_fragment:jM,bumpmap_pars_fragment:qM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:KM,clipping_planes_vertex:YM,color_fragment:ZM,color_pars_fragment:JM,color_pars_vertex:QM,color_vertex:ew,common:tw,cube_uv_reflection_fragment:nw,defaultnormal_vertex:iw,displacementmap_pars_vertex:sw,displacementmap_vertex:rw,emissivemap_fragment:ow,emissivemap_pars_fragment:aw,encodings_fragment:lw,encodings_pars_fragment:cw,envmap_fragment:uw,envmap_common_pars_fragment:hw,envmap_pars_fragment:fw,envmap_pars_vertex:dw,envmap_physical_pars_fragment:Ew,envmap_vertex:pw,fog_vertex:mw,fog_pars_vertex:gw,fog_fragment:_w,fog_pars_fragment:vw,gradientmap_pars_fragment:xw,lightmap_fragment:yw,lightmap_pars_fragment:bw,lights_lambert_fragment:Sw,lights_lambert_pars_fragment:Mw,lights_pars_begin:ww,lights_toon_fragment:Tw,lights_toon_pars_fragment:Cw,lights_phong_fragment:Aw,lights_phong_pars_fragment:Rw,lights_physical_fragment:Iw,lights_physical_pars_fragment:Lw,lights_fragment_begin:Pw,lights_fragment_maps:Dw,lights_fragment_end:Nw,logdepthbuf_fragment:Ow,logdepthbuf_pars_fragment:Fw,logdepthbuf_pars_vertex:kw,logdepthbuf_vertex:Uw,map_fragment:Bw,map_pars_fragment:zw,map_particle_fragment:Vw,map_particle_pars_fragment:Hw,metalnessmap_fragment:Gw,metalnessmap_pars_fragment:Ww,morphcolor_vertex:jw,morphnormal_vertex:qw,morphtarget_pars_vertex:Xw,morphtarget_vertex:$w,normal_fragment_begin:Kw,normal_fragment_maps:Yw,normal_pars_fragment:Zw,normal_pars_vertex:Jw,normal_vertex:Qw,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:sE,output_fragment:rE,packing:oE,premultiplied_alpha_fragment:aE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:_E,skinning_pars_vertex:vE,skinning_vertex:xE,skinnormal_vertex:yE,specularmap_fragment:bE,specularmap_pars_fragment:SE,tonemapping_fragment:ME,tonemapping_pars_fragment:wE,transmission_fragment:EE,transmission_pars_fragment:TE,uv_pars_fragment:CE,uv_pars_vertex:AE,uv_vertex:RE,uv2_pars_fragment:IE,uv2_pars_vertex:LE,uv2_vertex:PE,worldpos_vertex:DE,background_vert:NE,background_frag:OE,backgroundCube_vert:FE,backgroundCube_frag:kE,cube_vert:UE,cube_frag:BE,depth_vert:zE,depth_frag:VE,distanceRGBA_vert:HE,distanceRGBA_frag:GE,equirect_vert:WE,equirect_frag:jE,linedashed_vert:qE,linedashed_frag:XE,meshbasic_vert:$E,meshbasic_frag:KE,meshlambert_vert:YE,meshlambert_frag:ZE,meshmatcap_vert:JE,meshmatcap_frag:QE,meshnormal_vert:eT,meshnormal_frag:tT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:sT,meshphysical_frag:rT,meshtoon_vert:oT,meshtoon_frag:aT,points_vert:lT,points_frag:cT,shadow_vert:uT,shadow_frag:hT,sprite_vert:fT,sprite_frag:dT},xe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Jt},uv2Transform:{value:new Jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}}},jn={basic:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:$t([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:$t([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:$t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:$t([xe.points,xe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:$t([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:$t([xe.common,xe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:$t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:$t([xe.sprite,xe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:$t([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:$t([xe.lights,xe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};jn.physical={uniforms:$t([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ma={r:0,b:0,g:0};function pT(n,e,t,i,s,r,o){const a=new Oe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,_){let S=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=n.xr,T=y.getSession&&y.getSession();T&&T.environmentBlendMode==="additive"&&(v=null),v===null?p(a,l):v&&v.isColor&&(p(v,1),S=!0),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ml)?(u===void 0&&(u=new nn(new ji(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:_r(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==Qe,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new nn(new Sh(2,2),new vs({name:"BackgroundMaterial",uniforms:_r(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(Ma,w_(n)),i.buffers.color.setClear(Ma.r,Ma.g,Ma.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function mT(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(F,X,ie,te,G){let fe=!1;if(o){const le=p(te,ie,X);c!==le&&(c=le,d(c.object)),fe=_(F,te,ie,G),fe&&S(F,te,ie,G)}else{const le=X.wireframe===!0;(c.geometry!==te.id||c.program!==ie.id||c.wireframe!==le)&&(c.geometry=te.id,c.program=ie.id,c.wireframe=le,fe=!0)}G!==null&&t.update(G,34963),(fe||u)&&(u=!1,M(F,X,ie,te),G!==null&&n.bindBuffer(34963,t.get(G).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function p(F,X,ie){const te=ie.wireframe===!0;let G=a[F.id];G===void 0&&(G={},a[F.id]=G);let fe=G[X.id];fe===void 0&&(fe={},G[X.id]=fe);let le=fe[te];return le===void 0&&(le=m(f()),fe[te]=le),le}function m(F){const X=[],ie=[],te=[];for(let G=0;G<s;G++)X[G]=0,ie[G]=0,te[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ie,attributeDivisors:te,object:F,attributes:{},index:null}}function _(F,X,ie,te){const G=c.attributes,fe=X.attributes;let le=0;const Ee=ie.getAttributes();for(const z in Ee)if(Ee[z].location>=0){const _e=G[z];let V=fe[z];if(V===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),_e===void 0||_e.attribute!==V||V&&_e.data!==V.data)return!0;le++}return c.attributesNum!==le||c.index!==te}function S(F,X,ie,te){const G={},fe=X.attributes;let le=0;const Ee=ie.getAttributes();for(const z in Ee)if(Ee[z].location>=0){let _e=fe[z];_e===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(_e=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(_e=F.instanceColor));const V={};V.attribute=_e,_e&&_e.data&&(V.data=_e.data),G[z]=V,le++}c.attributes=G,c.attributesNum=le,c.index=te}function v(){const F=c.newAttributes;for(let X=0,ie=F.length;X<ie;X++)F[X]=0}function y(F){T(F,0)}function T(F,X){const ie=c.newAttributes,te=c.enabledAttributes,G=c.attributeDivisors;ie[F]=1,te[F]===0&&(n.enableVertexAttribArray(F),te[F]=1),G[F]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),G[F]=X)}function R(){const F=c.newAttributes,X=c.enabledAttributes;for(let ie=0,te=X.length;ie<te;ie++)X[ie]!==F[ie]&&(n.disableVertexAttribArray(ie),X[ie]=0)}function I(F,X,ie,te,G,fe){i.isWebGL2===!0&&(ie===5124||ie===5125)?n.vertexAttribIPointer(F,X,ie,G,fe):n.vertexAttribPointer(F,X,ie,te,G,fe)}function M(F,X,ie,te){if(i.isWebGL2===!1&&(F.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=te.attributes,fe=ie.getAttributes(),le=X.defaultAttributeValues;for(const Ee in fe){const z=fe[Ee];if(z.location>=0){let ue=G[Ee];if(ue===void 0&&(Ee==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),Ee==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),ue!==void 0){const _e=ue.normalized,V=ue.itemSize,ye=t.get(ue);if(ye===void 0)continue;const N=ye.buffer,$=ye.type,j=ye.bytesPerElement;if(ue.isInterleavedBufferAttribute){const oe=ue.data,Se=oe.stride,Te=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let w=0;w<z.locationSize;w++)T(z.location+w,oe.meshPerAttribute);F.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let w=0;w<z.locationSize;w++)y(z.location+w);n.bindBuffer(34962,N);for(let w=0;w<z.locationSize;w++)I(z.location+w,V/z.locationSize,$,_e,Se*j,(Te+V/z.locationSize*w)*j)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<z.locationSize;oe++)T(z.location+oe,ue.meshPerAttribute);F.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<z.locationSize;oe++)y(z.location+oe);n.bindBuffer(34962,N);for(let oe=0;oe<z.locationSize;oe++)I(z.location+oe,V/z.locationSize,$,_e,V*j,V/z.locationSize*oe*j)}}else if(le!==void 0){const _e=le[Ee];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(z.location,_e);break;case 3:n.vertexAttrib3fv(z.location,_e);break;case 4:n.vertexAttrib4fv(z.location,_e);break;default:n.vertexAttrib1fv(z.location,_e)}}}}R()}function A(){re();for(const F in a){const X=a[F];for(const ie in X){const te=X[ie];for(const G in te)g(te[G].object),delete te[G];delete X[ie]}delete a[F]}}function O(F){if(a[F.id]===void 0)return;const X=a[F.id];for(const ie in X){const te=X[ie];for(const G in te)g(te[G].object),delete te[G];delete X[ie]}delete a[F.id]}function se(F){for(const X in a){const ie=a[X];if(ie[F.id]===void 0)continue;const te=ie[F.id];for(const G in te)g(te[G].object),delete te[G];delete ie[F.id]}}function re(){B(),u=!0,c!==l&&(c=l,d(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:re,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:O,releaseStatesOfProgram:se,initAttributes:v,enableAttribute:y,disableUnusedAttributes:R}}function gT(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(s)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function _T(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),m=n.getParameter(36347),_=n.getParameter(36348),S=n.getParameter(36349),v=f>0,y=o||e.has("OES_texture_float"),T=v&&y,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:R}}function vT(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ts,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,v=S*4;let y=_.clippingState||null;l.value=y,y=u(g,f,v,d);for(let T=0;T!==v;++T)y[T]=t[T];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,y=d;v!==p;++v,y+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function xT(n){let e=new WeakMap;function t(o,a){return a===du?o.mapping=fr:a===pu&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===du||a===pu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new PM(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Mh extends E_{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=4,tp=[.125,.215,.35,.446,.526,.582],rs=20,Pc=new Mh,np=new Oe;let Dc=null;const ns=(1+Math.sqrt(5))/2,Gs=1/ns,ip=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ns,Gs),new D(0,ns,-Gs),new D(Gs,0,ns),new D(-Gs,0,ns),new D(ns,Gs,0),new D(-ns,Gs,0)];class sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Dc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Lo,format:vn,encoding:gs,depthBuffer:!1},s=rp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yT(r)),this._blurMaterial=bT(r,e,t)}return s}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,i,s){const a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(np),u.toneMapping=di,u.autoClear=!1;const d=new as({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new nn(new ji,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(np),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;wa(s,S*v,_>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fr||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ip[(s-1)%ip.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nn(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rs-1),p=r/g,m=isFinite(r)?1+Math.floor(u*p):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const _=[];let S=0;for(let I=0;I<rs;++I){const M=I/p,A=Math.exp(-M*M/2);_.push(A),I===0?S+=A:I<m&&(S+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const y=this._sizeLods[s],T=3*y*(s>v-$s?s-v+$s:0),R=4*(this._cubeSize-y);wa(t,T,R,3*y,2*y),l.setRenderTarget(t),l.render(h,Pc)}}function yT(n){const e=[],t=[],i=[];let s=n;const r=n-$s+1+tp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-$s?l=tp[o-n+$s-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,_=1,S=new Float32Array(p*g*d),v=new Float32Array(m*g*d),y=new Float32Array(_*g*d);for(let R=0;R<d;R++){const I=R%3*2/3-1,M=R>2?0:-1,A=[I,M,0,I+2/3,M,0,I+2/3,M+1,0,I,M,0,I+2/3,M+1,0,I,M+1,0];S.set(A,p*g*R),v.set(f,m*g*R);const O=[R,R,R,R,R,R];y.set(O,_*g*R)}const T=new kn;T.setAttribute("position",new Qt(S,p)),T.setAttribute("uv",new Qt(v,m)),T.setAttribute("faceIndex",new Qt(y,_)),e.push(T),s>$s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rp(n,e,t){const i=new _s(n,e,t);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function bT(n,e,t){const i=new Float32Array(rs),s=new D(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function op(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ap(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ST(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===du||l===pu,u=l===fr||l===dr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new sp(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new sp(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function MT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function wT(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const S=d.array;p=d.version;for(let v=0,y=S.length;v<y;v+=3){const T=S[v+0],R=S[v+1],I=S[v+2];f.push(T,R,R,I,I,T)}}else{const S=g.array;p=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const T=v+0,R=v+1,I=v+2;f.push(T,R,R,I,I,T)}}const m=new(__(f)?M_:S_)(f,1);m.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ET(n,e,t,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){n.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function TT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function CT(n,e){return n[0]-e[0]}function AT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function RT(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==p){let X=function(){B.dispose(),r.delete(u),u.removeEventListener("dispose",X)};var d=X;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let A=0;v===!0&&(A=1),y===!0&&(A=2),T===!0&&(A=3);let O=u.attributes.position.count*A,se=1;O>e.maxTextureSize&&(se=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const re=new Float32Array(O*se*4*p),B=new y_(re,O,se,p);B.type=Li,B.needsUpdate=!0;const F=A*4;for(let ie=0;ie<p;ie++){const te=R[ie],G=I[ie],fe=M[ie],le=O*se*4*ie;for(let Ee=0;Ee<te.count;Ee++){const z=Ee*F;v===!0&&(o.fromBufferAttribute(te,Ee),re[le+z+0]=o.x,re[le+z+1]=o.y,re[le+z+2]=o.z,re[le+z+3]=0),y===!0&&(o.fromBufferAttribute(G,Ee),re[le+z+4]=o.x,re[le+z+5]=o.y,re[le+z+6]=o.z,re[le+z+7]=0),T===!0&&(o.fromBufferAttribute(fe,Ee),re[le+z+8]=o.x,re[le+z+9]=o.y,re[le+z+10]=o.z,re[le+z+11]=fe.itemSize===4?o.w:1)}}m={count:p,texture:B,size:new Ye(O,se)},r.set(u,m),u.addEventListener("dispose",X)}let _=0;for(let v=0;v<f.length;v++)_+=f[v];const S=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];i[u.id]=p}for(let y=0;y<g;y++){const T=p[y];T[0]=y,T[1]=f[y]}p.sort(AT);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(CT);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const T=a[y],R=T[0],I=T[1];R!==Number.MAX_SAFE_INTEGER&&I?(m&&u.getAttribute("morphTarget"+y)!==m[R]&&u.setAttribute("morphTarget"+y,m[R]),_&&u.getAttribute("morphNormal"+y)!==_[R]&&u.setAttribute("morphNormal"+y,_[R]),s[y]=I,S+=I):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const v=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function IT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const A_=new Ot,R_=new y_,I_=new gM,L_=new T_,lp=[],cp=[],up=new Float32Array(16),hp=new Float32Array(9),fp=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=lp[s];if(r===void 0&&(r=new Float32Array(s),lp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tl(n,e){let t=cp[e];t===void 0&&(t=new Int32Array(e),cp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function LT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function NT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function OT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;fp.set(i),n.uniformMatrix2fv(this.addr,!1,fp),Mt(t,i)}}function FT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;hp.set(i),n.uniformMatrix3fv(this.addr,!1,hp),Mt(t,i)}}function kT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;up.set(i),n.uniformMatrix4fv(this.addr,!1,up),Mt(t,i)}}function UT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function zT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function VT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function HT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function WT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function jT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function qT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||A_,s)}function XT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||I_,s)}function $T(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||L_,s)}function KT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||R_,s)}function YT(n){switch(n){case 5126:return LT;case 35664:return PT;case 35665:return DT;case 35666:return NT;case 35674:return OT;case 35675:return FT;case 35676:return kT;case 5124:case 35670:return UT;case 35667:case 35671:return BT;case 35668:case 35672:return zT;case 35669:case 35673:return VT;case 5125:return HT;case 36294:return GT;case 36295:return WT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return KT}}function ZT(n,e){n.uniform1fv(this.addr,e)}function JT(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function QT(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function eC(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function tC(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nC(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iC(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sC(n,e){n.uniform1iv(this.addr,e)}function rC(n,e){n.uniform2iv(this.addr,e)}function oC(n,e){n.uniform3iv(this.addr,e)}function aC(n,e){n.uniform4iv(this.addr,e)}function lC(n,e){n.uniform1uiv(this.addr,e)}function cC(n,e){n.uniform2uiv(this.addr,e)}function uC(n,e){n.uniform3uiv(this.addr,e)}function hC(n,e){n.uniform4uiv(this.addr,e)}function fC(n,e,t){const i=this.cache,s=e.length,r=Tl(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||A_,r[o])}function dC(n,e,t){const i=this.cache,s=e.length,r=Tl(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||I_,r[o])}function pC(n,e,t){const i=this.cache,s=e.length,r=Tl(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||L_,r[o])}function mC(n,e,t){const i=this.cache,s=e.length,r=Tl(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||R_,r[o])}function gC(n){switch(n){case 5126:return ZT;case 35664:return JT;case 35665:return QT;case 35666:return eC;case 35674:return tC;case 35675:return nC;case 35676:return iC;case 5124:case 35670:return sC;case 35667:case 35671:return rC;case 35668:case 35672:return oC;case 35669:case 35673:return aC;case 5125:return lC;case 36294:return cC;case 36295:return uC;case 36296:return hC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return pC;case 36289:case 36303:case 36311:case 36292:return mC}}class _C{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=YT(t.type)}}class vC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=gC(t.type)}}class xC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Nc=/(\w+)(\])?(\[|\.)?/g;function dp(n,e){n.seq.push(e),n.map[e.id]=e}function yC(n,e,t){const i=n.name,s=i.length;for(Nc.lastIndex=0;;){const r=Nc.exec(i),o=Nc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dp(t,c===void 0?new _C(a,n,e):new vC(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new xC(a),dp(t,h)),t=h}}}class ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yC(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function pp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let bC=0;function SC(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function MC(n){switch(n){case gs:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function mp(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+SC(n.getShaderSource(e),o)}else return s}function wC(n,e){const t=MC(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function EC(n,e){let t;switch(e){case SS:t="Linear";break;case MS:t="Reinhard";break;case wS:t="OptimizedCineon";break;case ES:t="ACESFilmic";break;case TS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function TC(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ro).join(`
`)}function CC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AC(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ro(n){return n!==""}function gp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _p(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RC=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(n){return n.replace(RC,IC)}function IC(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yu(t)}const LC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vp(n){return n.replace(LC,PC)}function PC(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===r_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===eS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===so&&(e="SHADOWMAP_TYPE_VSM"),e}function NC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function FC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case l_:e="ENVMAP_BLENDING_MULTIPLY";break;case yS:e="ENVMAP_BLENDING_MIX";break;case bS:e="ENVMAP_BLENDING_ADD";break}return e}function kC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function UC(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=DC(t),c=NC(t),u=OC(t),h=FC(t),f=kC(t),d=t.isWebGL2?"":TC(t),g=CC(r),p=s.createProgram();let m,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(ro).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(ro).join(`
`),_.length>0&&(_+=`
`)):(m=[xp(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),_=[d,xp(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ue.tonemapping_pars_fragment:"",t.toneMapping!==di?EC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,wC("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),o=yu(o),o=gp(o,t),o=_p(o,t),a=yu(a),a=gp(a,t),a=_p(a,t),o=vp(o),a=vp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=S+m+o,y=S+_+a,T=pp(s,35633,v),R=pp(s,35632,y);if(s.attachShader(p,T),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),n.debug.checkShaderErrors){const A=s.getProgramInfoLog(p).trim(),O=s.getShaderInfoLog(T).trim(),se=s.getShaderInfoLog(R).trim();let re=!0,B=!0;if(s.getProgramParameter(p,35714)===!1){re=!1;const F=mp(s,T,"vertex"),X=mp(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+F+`
`+X)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(O===""||se==="")&&(B=!1);B&&(this.diagnostics={runnable:re,programLog:A,vertexShader:{log:O,prefix:m},fragmentShader:{log:se,prefix:_}})}s.deleteShader(T),s.deleteShader(R);let I;this.getUniforms=function(){return I===void 0&&(I=new ka(s,p)),I};let M;return this.getAttributes=function(){return M===void 0&&(M=AC(s,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=bC++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=R,this}let BC=0;class zC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VC(e),t.set(e,i)),i}}class VC{constructor(e){this.id=BC++,this.code=e,this.usedTimes=0}}function HC(n,e,t,i,s,r,o){const a=new yh,l=new zC,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,A,O,se,re){const B=se.fog,F=re.geometry,X=M.isMeshStandardMaterial?se.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),te=ie&&ie.mapping===Ml?ie.image.height:null,G=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const fe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,le=fe!==void 0?fe.length:0;let Ee=0;F.morphAttributes.position!==void 0&&(Ee=1),F.morphAttributes.normal!==void 0&&(Ee=2),F.morphAttributes.color!==void 0&&(Ee=3);let z,ue,_e,V;if(G){const Se=jn[G];z=Se.vertexShader,ue=Se.fragmentShader}else z=M.vertexShader,ue=M.fragmentShader,l.update(M),_e=l.getVertexShaderID(M),V=l.getFragmentShaderID(M);const ye=n.getRenderTarget(),N=M.alphaTest>0,$=M.clearcoat>0,j=M.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:M.type,vertexShader:z,fragmentShader:ue,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:V,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ye===null?n.outputEncoding:ye.isXRRenderTarget===!0?ye.texture.encoding:gs,map:!!M.map,matcap:!!M.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:te,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===qS,tangentSpaceNormalMap:M.normalMapType===d_,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Qe,clearcoat:$,clearcoatMap:$&&!!M.clearcoatMap,clearcoatRoughnessMap:$&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:$&&!!M.clearcoatNormalMap,iridescence:j,iridescenceMap:j&&!!M.iridescenceMap,iridescenceThicknessMap:j&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===er,alphaMap:!!M.alphaMap,alphaTest:N,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!F.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:re.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:di,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ui,flipSided:M.side===dn,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)A.push(O),A.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(_(A,M),S(A,M),A.push(n.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),M.push(a.mask)}function v(M){const A=g[M.type];let O;if(A){const se=jn[A];O=AM.clone(se.uniforms)}else O=M.uniforms;return O}function y(M,A){let O;for(let se=0,re=c.length;se<re;se++){const B=c[se];if(B.cacheKey===A){O=B,++O.usedTimes;break}}return O===void 0&&(O=new UC(n,A,M,r),c.push(O)),O}function T(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:y,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:I}}function GC(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function WC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bp(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,p,m){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},n[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function a(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?i.push(_):d.transparent===!0?s.push(_):t.push(_)}function l(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?i.unshift(_):d.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||WC),i.length>1&&i.sort(f||yp),s.length>1&&s.sort(f||yp)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function jC(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new bp,n.set(i,[o])):s>=r.length?(o=new bp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function XC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $C=0;function KC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YC(n,e){const t=new qC,i=XC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new He,a=new He;function l(u,h){let f=0,d=0,g=0;for(let se=0;se<9;se++)s.probe[se].set(0,0,0);let p=0,m=0,_=0,S=0,v=0,y=0,T=0,R=0,I=0,M=0;u.sort(KC);const A=h===!0?Math.PI:1;for(let se=0,re=u.length;se<re;se++){const B=u[se],F=B.color,X=B.intensity,ie=B.distance,te=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=F.r*X*A,d+=F.g*X*A,g+=F.b*X*A;else if(B.isLightProbe)for(let G=0;G<9;G++)s.probe[G].addScaledVector(B.sh.coefficients[G],X);else if(B.isDirectionalLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const fe=B.shadow,le=i.get(B);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,s.directionalShadow[p]=le,s.directionalShadowMap[p]=te,s.directionalShadowMatrix[p]=B.shadow.matrix,y++}s.directional[p]=G,p++}else if(B.isSpotLight){const G=t.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(F).multiplyScalar(X*A),G.distance=ie,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,s.spot[_]=G;const fe=B.shadow;if(B.map&&(s.spotLightMap[I]=B.map,I++,fe.updateMatrices(B),B.castShadow&&M++),s.spotLightMatrix[_]=fe.matrix,B.castShadow){const le=i.get(B);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,s.spotShadow[_]=le,s.spotShadowMap[_]=te,R++}_++}else if(B.isRectAreaLight){const G=t.get(B);G.color.copy(F).multiplyScalar(X),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=G,S++}else if(B.isPointLight){const G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*A),G.distance=B.distance,G.decay=B.decay,B.castShadow){const fe=B.shadow,le=i.get(B);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,le.shadowCameraNear=fe.camera.near,le.shadowCameraFar=fe.camera.far,s.pointShadow[m]=le,s.pointShadowMap[m]=te,s.pointShadowMatrix[m]=B.shadow.matrix,T++}s.point[m]=G,m++}else if(B.isHemisphereLight){const G=t.get(B);G.skyColor.copy(B.color).multiplyScalar(X*A),G.groundColor.copy(B.groundColor).multiplyScalar(X*A),s.hemi[v]=G,v++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const O=s.hash;(O.directionalLength!==p||O.pointLength!==m||O.spotLength!==_||O.rectAreaLength!==S||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==T||O.numSpotShadows!==R||O.numSpotMaps!==I)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=S,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=R+I-M,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=M,O.directionalLength=p,O.pointLength=m,O.spotLength=_,O.rectAreaLength=S,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=T,O.numSpotShadows=R,O.numSpotMaps=I,s.version=$C++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const _=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const y=u[S];if(y.isDirectionalLight){const T=s.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),f++}else if(y.isSpotLight){const T=s.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const T=s.rectArea[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const T=s.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){const T=s.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:s}}function Sp(n,e){const t=new YC(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ZC(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Sp(n,e),t.set(r,[l])):o>=a.length?(l=new Sp(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class JC extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QC extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nA(n,e,t){let i=new bh;const s=new Ye,r=new Ye,o=new ot,a=new JC({depthPacking:jS}),l=new QC,c={},u=t.maxTextureSize,h={[mi]:dn,[dn]:mi,[ui]:ui},f=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:eA,fragmentShader:tA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new nn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r_,this.render=function(y,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const I=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Oi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let se=0,re=y.length;se<re;se++){const B=y[se],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const X=F.getFrameExtents();if(s.multiply(X),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,F.mapSize.y=r.y)),F.map===null){const te=this.type!==so?{minFilter:Rt,magFilter:Rt}:{};F.map=new _s(s.x,s.y,te),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const ie=F.getViewportCount();for(let te=0;te<ie;te++){const G=F.getViewport(te);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),O.viewport(o),F.updateMatrices(B,te),i=F.getFrustum(),v(T,R,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===so&&_(F,R),F.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(I,M,A)};function _(y,T){const R=e.update(p);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new _s(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(T,null,R,f,p,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(T,null,R,d,p,null)}function S(y,T,R,I,M,A){let O=null;const se=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(se!==void 0)O=se;else if(O=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const re=O.uuid,B=T.uuid;let F=c[re];F===void 0&&(F={},c[re]=F);let X=F[B];X===void 0&&(X=O.clone(),F[B]=X),O=X}return O.visible=T.visible,O.wireframe=T.wireframe,A===so?O.side=T.shadowSide!==null?T.shadowSide:T.side:O.side=T.shadowSide!==null?T.shadowSide:h[T.side],O.alphaMap=T.alphaMap,O.alphaTest=T.alphaTest,O.map=T.map,O.clipShadows=T.clipShadows,O.clippingPlanes=T.clippingPlanes,O.clipIntersection=T.clipIntersection,O.displacementMap=T.displacementMap,O.displacementScale=T.displacementScale,O.displacementBias=T.displacementBias,O.wireframeLinewidth=T.wireframeLinewidth,O.linewidth=T.linewidth,R.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(R.matrixWorld),O.nearDistance=I,O.farDistance=M),O}function v(y,T,R,I,M){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===so)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const se=e.update(y),re=y.material;if(Array.isArray(re)){const B=se.groups;for(let F=0,X=B.length;F<X;F++){const ie=B[F],te=re[ie.materialIndex];if(te&&te.visible){const G=S(y,te,I,R.near,R.far,M);n.renderBufferDirect(R,null,se,G,y,ie)}}}else if(re.visible){const B=S(y,re,I,R.near,R.far,M);n.renderBufferDirect(R,null,se,B,y,null)}}const O=y.children;for(let se=0,re=O.length;se<re;se++)v(O[se],T,R,I,M)}}function iA(n,e,t){const i=t.isWebGL2;function s(){let P=!1;const J=new ot;let pe=null;const Me=new ot(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!P&&(n.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){P=Ae},setClear:function(Ae,ft,wt,Gt,Un){Un===!0&&(Ae*=Gt,ft*=Gt,wt*=Gt),J.set(Ae,ft,wt,Gt),Me.equals(J)===!1&&(n.clearColor(Ae,ft,wt,Gt),Me.copy(J))},reset:function(){P=!1,pe=null,Me.set(-1,0,0,0)}}}function r(){let P=!1,J=null,pe=null,Me=null;return{setTest:function(Ae){Ae?N(2929):$(2929)},setMask:function(Ae){J!==Ae&&!P&&(n.depthMask(Ae),J=Ae)},setFunc:function(Ae){if(pe!==Ae){switch(Ae){case dS:n.depthFunc(512);break;case pS:n.depthFunc(519);break;case mS:n.depthFunc(513);break;case fu:n.depthFunc(515);break;case gS:n.depthFunc(514);break;case _S:n.depthFunc(518);break;case vS:n.depthFunc(516);break;case xS:n.depthFunc(517);break;default:n.depthFunc(515)}pe=Ae}},setLocked:function(Ae){P=Ae},setClear:function(Ae){Me!==Ae&&(n.clearDepth(Ae),Me=Ae)},reset:function(){P=!1,J=null,pe=null,Me=null}}}function o(){let P=!1,J=null,pe=null,Me=null,Ae=null,ft=null,wt=null,Gt=null,Un=null;return{setTest:function(_t){P||(_t?N(2960):$(2960))},setMask:function(_t){J!==_t&&!P&&(n.stencilMask(_t),J=_t)},setFunc:function(_t,pn,Bn){(pe!==_t||Me!==pn||Ae!==Bn)&&(n.stencilFunc(_t,pn,Bn),pe=_t,Me=pn,Ae=Bn)},setOp:function(_t,pn,Bn){(ft!==_t||wt!==pn||Gt!==Bn)&&(n.stencilOp(_t,pn,Bn),ft=_t,wt=pn,Gt=Bn)},setLocked:function(_t){P=_t},setClear:function(_t){Un!==_t&&(n.clearStencil(_t),Un=_t)},reset:function(){P=!1,J=null,pe=null,Me=null,Ae=null,ft=null,wt=null,Gt=null,Un=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,_=!1,S=null,v=null,y=null,T=null,R=null,I=null,M=null,A=!1,O=null,se=null,re=null,B=null,F=null;const X=n.getParameter(35661);let ie=!1,te=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),ie=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ie=te>=2);let fe=null,le={};const Ee=n.getParameter(3088),z=n.getParameter(2978),ue=new ot().fromArray(Ee),_e=new ot().fromArray(z);function V(P,J,pe){const Me=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(P,Ae),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let ft=0;ft<pe;ft++)n.texImage2D(J+ft,0,6408,1,1,0,6408,5121,Me);return Ae}const ye={};ye[3553]=V(3553,3553,1),ye[34067]=V(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(2929),l.setFunc(fu),ne(!1),q(ud),N(2884),C(Oi);function N(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function $(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function j(P,J){return d[P]!==J?(n.bindFramebuffer(P,J),d[P]=J,i&&(P===36009&&(d[36160]=J),P===36160&&(d[36009]=J)),!0):!1}function oe(P,J){let pe=p,Me=!1;if(P)if(pe=g.get(J),pe===void 0&&(pe=[],g.set(J,pe)),P.isWebGLMultipleRenderTargets){const Ae=P.texture;if(pe.length!==Ae.length||pe[0]!==36064){for(let ft=0,wt=Ae.length;ft<wt;ft++)pe[ft]=36064+ft;pe.length=Ae.length,Me=!0}}else pe[0]!==36064&&(pe[0]=36064,Me=!0);else pe[0]!==1029&&(pe[0]=1029,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Se(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const Te={[Xs]:32774,[nS]:32778,[iS]:32779};if(i)Te[pd]=32775,Te[md]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Te[pd]=P.MIN_EXT,Te[md]=P.MAX_EXT)}const w={[sS]:0,[rS]:1,[oS]:768,[o_]:770,[fS]:776,[uS]:774,[lS]:772,[aS]:769,[a_]:771,[hS]:775,[cS]:773};function C(P,J,pe,Me,Ae,ft,wt,Gt){if(P===Oi){_===!0&&($(3042),_=!1);return}if(_===!1&&(N(3042),_=!0),P!==tS){if(P!==S||Gt!==A){if((v!==Xs||R!==Xs)&&(n.blendEquation(32774),v=Xs,R=Xs),Gt)switch(P){case er:n.blendFuncSeparate(1,771,1,771);break;case hd:n.blendFunc(1,1);break;case fd:n.blendFuncSeparate(0,769,0,1);break;case dd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case er:n.blendFuncSeparate(770,771,1,771);break;case hd:n.blendFunc(770,1);break;case fd:n.blendFuncSeparate(0,769,0,1);break;case dd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,T=null,I=null,M=null,S=P,A=Gt}return}Ae=Ae||J,ft=ft||pe,wt=wt||Me,(J!==v||Ae!==R)&&(n.blendEquationSeparate(Te[J],Te[Ae]),v=J,R=Ae),(pe!==y||Me!==T||ft!==I||wt!==M)&&(n.blendFuncSeparate(w[pe],w[Me],w[ft],w[wt]),y=pe,T=Me,I=ft,M=wt),S=P,A=!1}function k(P,J){P.side===ui?$(2884):N(2884);let pe=P.side===dn;J&&(pe=!pe),ne(pe),P.blending===er&&P.transparent===!1?C(Oi):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Me=P.stencilWrite;c.setTest(Me),Me&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ce(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?N(32926):$(32926)}function ne(P){O!==P&&(P?n.frontFace(2304):n.frontFace(2305),O=P)}function q(P){P!==Jb?(N(2884),P!==se&&(P===ud?n.cullFace(1029):P===Qb?n.cullFace(1028):n.cullFace(1032))):$(2884),se=P}function Q(P){P!==re&&(ie&&n.lineWidth(P),re=P)}function ce(P,J,pe){P?(N(32823),(B!==J||F!==pe)&&(n.polygonOffset(J,pe),B=J,F=pe)):$(32823)}function me(P){P?N(3089):$(3089)}function de(P){P===void 0&&(P=33984+X-1),fe!==P&&(n.activeTexture(P),fe=P)}function b(P,J,pe){pe===void 0&&(fe===null?pe=33984+X-1:pe=fe);let Me=le[pe];Me===void 0&&(Me={type:void 0,texture:void 0},le[pe]=Me),(Me.type!==P||Me.texture!==J)&&(fe!==pe&&(n.activeTexture(pe),fe=pe),n.bindTexture(P,J||ye[P]),Me.type=P,Me.texture=J)}function x(){const P=le[fe];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function L(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){ue.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ue.copy(P))}function Ie(P){_e.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function De(P,J){let pe=h.get(J);pe===void 0&&(pe=new WeakMap,h.set(J,pe));let Me=pe.get(P);Me===void 0&&(Me=n.getUniformBlockIndex(J,P.name),pe.set(P,Me))}function je(P,J){const Me=h.get(J).get(P);u.get(J)!==Me&&(n.uniformBlockBinding(J,Me,P.__bindingPointIndex),u.set(J,Me))}function gt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},fe=null,le={},d={},g=new WeakMap,p=[],m=null,_=!1,S=null,v=null,y=null,T=null,R=null,I=null,M=null,A=!1,O=null,se=null,re=null,B=null,F=null,ue.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:N,disable:$,bindFramebuffer:j,drawBuffers:oe,useProgram:Se,setBlending:C,setMaterial:k,setFlipSided:ne,setCullFace:q,setLineWidth:Q,setPolygonOffset:ce,setScissorTest:me,activeTexture:de,bindTexture:b,unbindTexture:x,compressedTexImage2D:L,compressedTexImage3D:W,texImage2D:be,texImage3D:Ce,updateUBOMapping:De,uniformBlockBinding:je,texStorage2D:Y,texStorage3D:we,texSubImage2D:K,texSubImage3D:ae,compressedTexSubImage2D:ve,compressedTexSubImage3D:he,scissor:Re,viewport:Ie,reset:gt}}function sA(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,x){return _?new OffscreenCanvas(b,x):Oo("canvas")}function v(b,x,L,W){let K=1;if((b.width>W||b.height>W)&&(K=W/Math.max(b.width,b.height)),K<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ae=x?g_:Math.floor,ve=ae(K*b.width),he=ae(K*b.height);p===void 0&&(p=S(ve,he));const Y=L?S(ve,he):p;return Y.width=ve,Y.height=he,Y.getContext("2d").drawImage(b,0,0,ve,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+he+")."),Y}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return xu(b.width)&&xu(b.height)}function T(b){return a?!1:b.wrapS!==_n||b.wrapT!==_n||b.minFilter!==Rt&&b.minFilter!==tn}function R(b,x){return b.generateMipmaps&&x&&b.minFilter!==Rt&&b.minFilter!==tn}function I(b){n.generateMipmap(b)}function M(b,x,L,W,K=!1){if(a===!1)return x;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ae=x;return x===6403&&(L===5126&&(ae=33326),L===5131&&(ae=33325),L===5121&&(ae=33321)),x===33319&&(L===5126&&(ae=33328),L===5131&&(ae=33327),L===5121&&(ae=33323)),x===6408&&(L===5126&&(ae=34836),L===5131&&(ae=34842),L===5121&&(ae=W===Qe&&K===!1?35907:32856),L===32819&&(ae=32854),L===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(b,x,L){return R(b,L)===!0||b.isFramebufferTexture&&b.minFilter!==Rt&&b.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function O(b){return b===Rt||b===mu||b===Fa?9728:9729}function se(b){const x=b.target;x.removeEventListener("dispose",se),B(x),x.isVideoTexture&&g.delete(x)}function re(b){const x=b.target;x.removeEventListener("dispose",re),X(x)}function B(b){const x=i.get(b);if(x.__webglInit===void 0)return;const L=b.source,W=m.get(L);if(W){const K=W[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&F(b),Object.keys(W).length===0&&m.delete(L)}i.remove(b)}function F(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const L=b.source,W=m.get(L);delete W[x.__cacheKey],o.memory.textures--}function X(b){const x=b.texture,L=i.get(b),W=i.get(x);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)n.deleteFramebuffer(L.__webglFramebuffer[K]),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[K]);else{if(n.deleteFramebuffer(L.__webglFramebuffer),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let K=0;K<L.__webglColorRenderbuffer.length;K++)L.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[K]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let K=0,ae=x.length;K<ae;K++){const ve=i.get(x[K]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(x[K])}i.remove(x),i.remove(b)}let ie=0;function te(){ie=0}function G(){const b=ie;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),ie+=1,b}function fe(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function le(b,x){const L=i.get(b);if(b.isVideoTexture&&me(b),b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(L,b,x);return}}t.bindTexture(3553,L.__webglTexture,33984+x)}function Ee(b,x){const L=i.get(b);if(b.version>0&&L.__version!==b.version){$(L,b,x);return}t.bindTexture(35866,L.__webglTexture,33984+x)}function z(b,x){const L=i.get(b);if(b.version>0&&L.__version!==b.version){$(L,b,x);return}t.bindTexture(32879,L.__webglTexture,33984+x)}function ue(b,x){const L=i.get(b);if(b.version>0&&L.__version!==b.version){j(L,b,x);return}t.bindTexture(34067,L.__webglTexture,33984+x)}const _e={[pr]:10497,[_n]:33071,[ja]:33648},V={[Rt]:9728,[mu]:9984,[Fa]:9986,[tn]:9729,[u_]:9985,[ps]:9987};function ye(b,x,L){if(L?(n.texParameteri(b,10242,_e[x.wrapS]),n.texParameteri(b,10243,_e[x.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,_e[x.wrapR]),n.texParameteri(b,10240,V[x.magFilter]),n.texParameteri(b,10241,V[x.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(x.wrapS!==_n||x.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,O(x.magFilter)),n.texParameteri(b,10241,O(x.minFilter)),x.minFilter!==Rt&&x.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Rt||x.minFilter!==Fa&&x.minFilter!==ps||x.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Lo&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function N(b,x){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",se));const W=x.source;let K=m.get(W);K===void 0&&(K={},m.set(W,K));const ae=fe(x);if(ae!==b.__cacheKey){K[ae]===void 0&&(K[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[ae].usedTimes++;const ve=K[b.__cacheKey];ve!==void 0&&(K[b.__cacheKey].usedTimes--,ve.usedTimes===0&&F(x)),b.__cacheKey=ae,b.__webglTexture=K[ae].texture}return L}function $(b,x,L){let W=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=35866),x.isData3DTexture&&(W=32879);const K=N(b,x),ae=x.source;t.bindTexture(W,b.__webglTexture,33984+L);const ve=i.get(ae);if(ae.version!==ve.__version||K===!0){t.activeTexture(33984+L),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const he=T(x)&&y(x.image)===!1;let Y=v(x.image,he,!1,u);Y=de(x,Y);const we=y(Y)||a,be=r.convert(x.format,x.encoding);let Ce=r.convert(x.type),Re=M(x.internalFormat,be,Ce,x.encoding,x.isVideoTexture);ye(W,x,we);let Ie;const De=x.mipmaps,je=a&&x.isVideoTexture!==!0,gt=ve.__version===void 0||K===!0,P=A(x,Y,we);if(x.isDepthTexture)Re=6402,a?x.type===Li?Re=36012:x.type===os?Re=33190:x.type===tr?Re=35056:Re=33189:x.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===hs&&Re===6402&&x.type!==h_&&x.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=os,Ce=r.convert(x.type)),x.format===mr&&Re===6402&&(Re=34041,x.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=tr,Ce=r.convert(x.type))),gt&&(je?t.texStorage2D(3553,1,Re,Y.width,Y.height):t.texImage2D(3553,0,Re,Y.width,Y.height,0,be,Ce,null));else if(x.isDataTexture)if(De.length>0&&we){je&&gt&&t.texStorage2D(3553,P,Re,De[0].width,De[0].height);for(let J=0,pe=De.length;J<pe;J++)Ie=De[J],je?t.texSubImage2D(3553,J,0,0,Ie.width,Ie.height,be,Ce,Ie.data):t.texImage2D(3553,J,Re,Ie.width,Ie.height,0,be,Ce,Ie.data);x.generateMipmaps=!1}else je?(gt&&t.texStorage2D(3553,P,Re,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,be,Ce,Y.data)):t.texImage2D(3553,0,Re,Y.width,Y.height,0,be,Ce,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){je&&gt&&t.texStorage3D(35866,P,Re,De[0].width,De[0].height,Y.depth);for(let J=0,pe=De.length;J<pe;J++)Ie=De[J],x.format!==vn?be!==null?je?t.compressedTexSubImage3D(35866,J,0,0,0,Ie.width,Ie.height,Y.depth,be,Ie.data,0,0):t.compressedTexImage3D(35866,J,Re,Ie.width,Ie.height,Y.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(35866,J,0,0,0,Ie.width,Ie.height,Y.depth,be,Ce,Ie.data):t.texImage3D(35866,J,Re,Ie.width,Ie.height,Y.depth,0,be,Ce,Ie.data)}else{je&&gt&&t.texStorage2D(3553,P,Re,De[0].width,De[0].height);for(let J=0,pe=De.length;J<pe;J++)Ie=De[J],x.format!==vn?be!==null?je?t.compressedTexSubImage2D(3553,J,0,0,Ie.width,Ie.height,be,Ie.data):t.compressedTexImage2D(3553,J,Re,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,J,0,0,Ie.width,Ie.height,be,Ce,Ie.data):t.texImage2D(3553,J,Re,Ie.width,Ie.height,0,be,Ce,Ie.data)}else if(x.isDataArrayTexture)je?(gt&&t.texStorage3D(35866,P,Re,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,be,Ce,Y.data)):t.texImage3D(35866,0,Re,Y.width,Y.height,Y.depth,0,be,Ce,Y.data);else if(x.isData3DTexture)je?(gt&&t.texStorage3D(32879,P,Re,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,be,Ce,Y.data)):t.texImage3D(32879,0,Re,Y.width,Y.height,Y.depth,0,be,Ce,Y.data);else if(x.isFramebufferTexture){if(gt)if(je)t.texStorage2D(3553,P,Re,Y.width,Y.height);else{let J=Y.width,pe=Y.height;for(let Me=0;Me<P;Me++)t.texImage2D(3553,Me,Re,J,pe,0,be,Ce,null),J>>=1,pe>>=1}}else if(De.length>0&&we){je&&gt&&t.texStorage2D(3553,P,Re,De[0].width,De[0].height);for(let J=0,pe=De.length;J<pe;J++)Ie=De[J],je?t.texSubImage2D(3553,J,0,0,be,Ce,Ie):t.texImage2D(3553,J,Re,be,Ce,Ie);x.generateMipmaps=!1}else je?(gt&&t.texStorage2D(3553,P,Re,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,be,Ce,Y)):t.texImage2D(3553,0,Re,be,Ce,Y);R(x,we)&&I(W),ve.__version=ae.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function j(b,x,L){if(x.image.length!==6)return;const W=N(b,x),K=x.source;t.bindTexture(34067,b.__webglTexture,33984+L);const ae=i.get(K);if(K.version!==ae.__version||W===!0){t.activeTexture(33984+L),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let J=0;J<6;J++)!ve&&!he?Y[J]=v(x.image[J],!1,!0,c):Y[J]=he?x.image[J].image:x.image[J],Y[J]=de(x,Y[J]);const we=Y[0],be=y(we)||a,Ce=r.convert(x.format,x.encoding),Re=r.convert(x.type),Ie=M(x.internalFormat,Ce,Re,x.encoding),De=a&&x.isVideoTexture!==!0,je=ae.__version===void 0||W===!0;let gt=A(x,we,be);ye(34067,x,be);let P;if(ve){De&&je&&t.texStorage2D(34067,gt,Ie,we.width,we.height);for(let J=0;J<6;J++){P=Y[J].mipmaps;for(let pe=0;pe<P.length;pe++){const Me=P[pe];x.format!==vn?Ce!==null?De?t.compressedTexSubImage2D(34069+J,pe,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(34069+J,pe,Ie,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+J,pe,0,0,Me.width,Me.height,Ce,Re,Me.data):t.texImage2D(34069+J,pe,Ie,Me.width,Me.height,0,Ce,Re,Me.data)}}}else{P=x.mipmaps,De&&je&&(P.length>0&&gt++,t.texStorage2D(34067,gt,Ie,Y[0].width,Y[0].height));for(let J=0;J<6;J++)if(he){De?t.texSubImage2D(34069+J,0,0,0,Y[J].width,Y[J].height,Ce,Re,Y[J].data):t.texImage2D(34069+J,0,Ie,Y[J].width,Y[J].height,0,Ce,Re,Y[J].data);for(let pe=0;pe<P.length;pe++){const Ae=P[pe].image[J].image;De?t.texSubImage2D(34069+J,pe+1,0,0,Ae.width,Ae.height,Ce,Re,Ae.data):t.texImage2D(34069+J,pe+1,Ie,Ae.width,Ae.height,0,Ce,Re,Ae.data)}}else{De?t.texSubImage2D(34069+J,0,0,0,Ce,Re,Y[J]):t.texImage2D(34069+J,0,Ie,Ce,Re,Y[J]);for(let pe=0;pe<P.length;pe++){const Me=P[pe];De?t.texSubImage2D(34069+J,pe+1,0,0,Ce,Re,Me.image[J]):t.texImage2D(34069+J,pe+1,Ie,Ce,Re,Me.image[J])}}}R(x,be)&&I(34067),ae.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function oe(b,x,L,W,K){const ae=r.convert(L.format,L.encoding),ve=r.convert(L.type),he=M(L.internalFormat,ae,ve,L.encoding);i.get(x).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,he,x.width,x.height,x.depth,0,ae,ve,null):t.texImage2D(K,0,he,x.width,x.height,0,ae,ve,null)),t.bindFramebuffer(36160,b),ce(x)?f.framebufferTexture2DMultisampleEXT(36160,W,K,i.get(L).__webglTexture,0,Q(x)):(K===3553||K>=34069&&K<=34074)&&n.framebufferTexture2D(36160,W,K,i.get(L).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(b,x,L){if(n.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let W=33189;if(L||ce(x)){const K=x.depthTexture;K&&K.isDepthTexture&&(K.type===Li?W=36012:K.type===os&&(W=33190));const ae=Q(x);ce(x)?f.renderbufferStorageMultisampleEXT(36161,ae,W,x.width,x.height):n.renderbufferStorageMultisample(36161,ae,W,x.width,x.height)}else n.renderbufferStorage(36161,W,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){const W=Q(x);L&&ce(x)===!1?n.renderbufferStorageMultisample(36161,W,35056,x.width,x.height):ce(x)?f.renderbufferStorageMultisampleEXT(36161,W,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const W=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<W.length;K++){const ae=W[K],ve=r.convert(ae.format,ae.encoding),he=r.convert(ae.type),Y=M(ae.internalFormat,ve,he,ae.encoding),we=Q(x);L&&ce(x)===!1?n.renderbufferStorageMultisample(36161,we,Y,x.width,x.height):ce(x)?f.renderbufferStorageMultisampleEXT(36161,we,Y,x.width,x.height):n.renderbufferStorage(36161,Y,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function Te(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),le(x.depthTexture,0);const W=i.get(x.depthTexture).__webglTexture,K=Q(x);if(x.depthTexture.format===hs)ce(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,W,0,K):n.framebufferTexture2D(36160,36096,3553,W,0);else if(x.depthTexture.format===mr)ce(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,W,0,K):n.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function w(b){const x=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,b)}else if(L){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]=n.createRenderbuffer(),Se(x.__webglDepthbuffer[W],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Se(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function C(b,x,L){const W=i.get(b);x!==void 0&&oe(W.__webglFramebuffer,b,b.texture,36064,3553),L!==void 0&&w(b)}function k(b){const x=b.texture,L=i.get(b),W=i.get(x);b.addEventListener("dispose",re),b.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++);const K=b.isWebGLCubeRenderTarget===!0,ae=b.isWebGLMultipleRenderTargets===!0,ve=y(b)||a;if(K){L.__webglFramebuffer=[];for(let he=0;he<6;he++)L.__webglFramebuffer[he]=n.createFramebuffer()}else{if(L.__webglFramebuffer=n.createFramebuffer(),ae)if(s.drawBuffers){const he=b.texture;for(let Y=0,we=he.length;Y<we;Y++){const be=i.get(he[Y]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ce(b)===!1){const he=ae?x:[x];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer);for(let Y=0;Y<he.length;Y++){const we=he[Y];L.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(36161,L.__webglColorRenderbuffer[Y]);const be=r.convert(we.format,we.encoding),Ce=r.convert(we.type),Re=M(we.internalFormat,be,Ce,we.encoding,b.isXRRenderTarget===!0),Ie=Q(b);n.renderbufferStorageMultisample(36161,Ie,Re,b.width,b.height),n.framebufferRenderbuffer(36160,36064+Y,36161,L.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,W.__webglTexture),ye(34067,x,ve);for(let he=0;he<6;he++)oe(L.__webglFramebuffer[he],b,x,36064,34069+he);R(x,ve)&&I(34067),t.unbindTexture()}else if(ae){const he=b.texture;for(let Y=0,we=he.length;Y<we;Y++){const be=he[Y],Ce=i.get(be);t.bindTexture(3553,Ce.__webglTexture),ye(3553,be,ve),oe(L.__webglFramebuffer,b,be,36064+Y,3553),R(be,ve)&&I(3553)}t.unbindTexture()}else{let he=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,W.__webglTexture),ye(he,x,ve),oe(L.__webglFramebuffer,b,x,36064,he),R(x,ve)&&I(he),t.unbindTexture()}b.depthBuffer&&w(b)}function ne(b){const x=y(b)||a,L=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let W=0,K=L.length;W<K;W++){const ae=L[W];if(R(ae,x)){const ve=b.isWebGLCubeRenderTarget?34067:3553,he=i.get(ae).__webglTexture;t.bindTexture(ve,he),I(ve),t.unbindTexture()}}}function q(b){if(a&&b.samples>0&&ce(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],L=b.width,W=b.height;let K=16384;const ae=[],ve=b.stencilBuffer?33306:36096,he=i.get(b),Y=b.isWebGLMultipleRenderTargets===!0;if(Y)for(let we=0;we<x.length;we++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let we=0;we<x.length;we++){ae.push(36064+we),b.depthBuffer&&ae.push(ve);const be=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(be===!1&&(b.depthBuffer&&(K|=256),b.stencilBuffer&&(K|=1024)),Y&&n.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[we]),be===!0&&(n.invalidateFramebuffer(36008,[ve]),n.invalidateFramebuffer(36009,[ve])),Y){const Ce=i.get(x[we]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ce,0)}n.blitFramebuffer(0,0,L,W,0,0,L,W,K,9728),d&&n.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let we=0;we<x.length;we++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+we,36161,he.__webglColorRenderbuffer[we]);const be=i.get(x[we]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+we,3553,be,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function Q(b){return Math.min(h,b.samples)}function ce(b){const x=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(b){const x=o.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function de(b,x){const L=b.encoding,W=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===vu||L!==gs&&(L===Qe?a===!1?e.has("EXT_sRGB")===!0&&W===vn?(b.format=vu,b.minFilter=tn,b.generateMipmaps=!1):x=v_.sRGBToLinear(x):(W!==vn||K!==ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",L)),x}this.allocateTextureUnit=G,this.resetTextureUnits=te,this.setTexture2D=le,this.setTexture2DArray=Ee,this.setTexture3D=z,this.setTextureCube=ue,this.rebindTextures=C,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ce}function rA(n,e,t){const i=t.isWebGL2;function s(r,o=null){let a;if(r===ms)return 5121;if(r===IS)return 32819;if(r===LS)return 32820;if(r===CS)return 5120;if(r===AS)return 5122;if(r===h_)return 5123;if(r===RS)return 5124;if(r===os)return 5125;if(r===Li)return 5126;if(r===Lo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===PS)return 6406;if(r===vn)return 6408;if(r===DS)return 6409;if(r===NS)return 6410;if(r===hs)return 6402;if(r===mr)return 34041;if(r===vu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===OS)return 6403;if(r===FS)return 36244;if(r===kS)return 33319;if(r===US)return 33320;if(r===BS)return 36249;if(r===oc||r===ac||r===lc||r===cc)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gd||r===_d||r===vd||r===xd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yd||r===bd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yd)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===bd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sd||r===Md||r===wd||r===Ed||r===Td||r===Cd||r===Ad||r===Rd||r===Id||r===Ld||r===Pd||r===Dd||r===Nd||r===Od)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Sd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Md)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ed)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Td)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ad)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Id)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ld)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nd)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===uc)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===VS||r===Fd||r===kd||r===Ud)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Fd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ud)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class oA extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ls extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aA={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class lA extends Ot{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:hs,u!==hs&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hs&&(i=os),i===void 0&&u===mr&&(i=tr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class cA extends Ar{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const p=t.getContextAttributes();let m=null,_=null;const S=[],v=[],y=new Set,T=new Map,R=new zt;R.layers.enable(1),R.viewport=new ot;const I=new zt;I.layers.enable(2),I.viewport=new ot;const M=[R,I],A=new oA;A.layers.enable(1),A.layers.enable(2);let O=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ue=S[z];return ue===void 0&&(ue=new Oc,S[z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(z){let ue=S[z];return ue===void 0&&(ue=new Oc,S[z]=ue),ue.getGripSpace()},this.getHand=function(z){let ue=S[z];return ue===void 0&&(ue=new Oc,S[z]=ue),ue.getHandSpace()};function re(z){const ue=v.indexOf(z.inputSource);if(ue===-1)return;const _e=S[ue];_e!==void 0&&_e.dispatchEvent({type:z.type,data:z.inputSource})}function B(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",F);for(let z=0;z<S.length;z++){const ue=v[z];ue!==null&&(v[z]=null,S[z].disconnect(ue))}O=null,se=null,e.setRenderTarget(m),d=null,f=null,h=null,s=null,_=null,Ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",B),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),_=new _s(d.framebufferWidth,d.framebufferHeight,{format:vn,type:ms,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ue=null,_e=null,V=null;p.depth&&(V=p.stencil?35056:33190,ue=p.stencil?mr:hs,_e=p.stencil?tr:os);const ye={colorFormat:32856,depthFormat:V,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ye),s.updateRenderState({layers:[f]}),_=new _s(f.textureWidth,f.textureHeight,{format:vn,type:ms,depthTexture:new lA(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const N=e.properties.get(_);N.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(z){for(let ue=0;ue<z.removed.length;ue++){const _e=z.removed[ue],V=v.indexOf(_e);V>=0&&(v[V]=null,S[V].disconnect(_e))}for(let ue=0;ue<z.added.length;ue++){const _e=z.added[ue];let V=v.indexOf(_e);if(V===-1){for(let N=0;N<S.length;N++)if(N>=v.length){v.push(_e),V=N;break}else if(v[N]===null){v[N]=_e,V=N;break}if(V===-1)break}const ye=S[V];ye&&ye.connect(_e)}}const X=new D,ie=new D;function te(z,ue,_e){X.setFromMatrixPosition(ue.matrixWorld),ie.setFromMatrixPosition(_e.matrixWorld);const V=X.distanceTo(ie),ye=ue.projectionMatrix.elements,N=_e.projectionMatrix.elements,$=ye[14]/(ye[10]-1),j=ye[14]/(ye[10]+1),oe=(ye[9]+1)/ye[5],Se=(ye[9]-1)/ye[5],Te=(ye[8]-1)/ye[0],w=(N[8]+1)/N[0],C=$*Te,k=$*w,ne=V/(-Te+w),q=ne*-Te;ue.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(q),z.translateZ(ne),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Q=$+ne,ce=j+ne,me=C-q,de=k+(V-q),b=oe*j/ce*Q,x=Se*j/ce*Q;z.projectionMatrix.makePerspective(me,de,b,x,Q,ce)}function G(z,ue){ue===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ue.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;A.near=I.near=R.near=z.near,A.far=I.far=R.far=z.far,(O!==A.near||se!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,se=A.far);const ue=z.parent,_e=A.cameras;G(A,ue);for(let ye=0;ye<_e.length;ye++)G(_e[ye],ue);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),z.matrix.copy(A.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const V=z.children;for(let ye=0,N=V.length;ye<N;ye++)V[ye].updateMatrixWorld(!0);_e.length===2?te(A,R,I):A.projectionMatrix.copy(R.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.getPlanes=function(){return y};let fe=null;function le(z,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let V=!1;_e.length!==A.cameras.length&&(A.cameras.length=0,V=!0);for(let ye=0;ye<_e.length;ye++){const N=_e[ye];let $=null;if(d!==null)$=d.getViewport(N);else{const oe=h.getViewSubImage(f,N);$=oe.viewport,ye===0&&(e.setRenderTargetTextures(_,oe.colorTexture,f.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(_))}let j=M[ye];j===void 0&&(j=new zt,j.layers.enable(ye),j.viewport=new ot,M[ye]=j),j.matrix.fromArray(N.transform.matrix),j.projectionMatrix.fromArray(N.projectionMatrix),j.viewport.set($.x,$.y,$.width,$.height),ye===0&&A.matrix.copy(j.matrix),V===!0&&A.cameras.push(j)}}for(let _e=0;_e<S.length;_e++){const V=v[_e],ye=S[_e];V!==null&&ye!==void 0&&ye.update(V,ue,c||o)}if(fe&&fe(z,ue),ue.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let _e=null;for(const V of y)ue.detectedPlanes.has(V)||(_e===null&&(_e=[]),_e.push(V));if(_e!==null)for(const V of _e)y.delete(V),T.delete(V),i.dispatchEvent({type:"planeremoved",data:V});for(const V of ue.detectedPlanes)if(!y.has(V))y.add(V),T.set(V,ue.lastChangedTime),i.dispatchEvent({type:"planeadded",data:V});else{const ye=T.get(V);V.lastChangedTime>ye&&(T.set(V,V.lastChangedTime),i.dispatchEvent({type:"planechanged",data:V}))}}g=null}const Ee=new C_;Ee.setAnimationLoop(le),this.setAnimationLoop=function(z){fe=z},this.dispose=function(){}}}function uA(n,e){function t(p,m){m.color.getRGB(p.fogColor.value,w_(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,_,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),d(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let S;m.map?S=m.map:m.specularMap?S=m.specularMap:m.displacementMap?S=m.displacementMap:m.normalMap?S=m.normalMap:m.bumpMap?S=m.bumpMap:m.roughnessMap?S=m.roughnessMap:m.metalnessMap?S=m.metalnessMap:m.alphaMap?S=m.alphaMap:m.emissiveMap?S=m.emissiveMap:m.clearcoatMap?S=m.clearcoatMap:m.clearcoatNormalMap?S=m.clearcoatNormalMap:m.clearcoatRoughnessMap?S=m.clearcoatRoughnessMap:m.iridescenceMap?S=m.iridescenceMap:m.iridescenceThicknessMap?S=m.iridescenceThicknessMap:m.specularIntensityMap?S=m.specularIntensityMap:m.specularColorMap?S=m.specularColorMap:m.transmissionMap?S=m.transmissionMap:m.thicknessMap?S=m.thicknessMap:m.sheenColorMap?S=m.sheenColorMap:m.sheenRoughnessMap&&(S=m.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=S*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===dn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function hA(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(S,v){const y=v.program;i.uniformBlockBinding(S,y)}function c(S,v){let y=s[S.id];y===void 0&&(g(S),y=u(S),s[S.id]=y,S.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(S,T);const R=e.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function u(S){const v=h();S.__bindingPointIndex=v;const y=n.createBuffer(),T=S.__size,R=S.usage;return n.bindBuffer(35345,y),n.bufferData(35345,T,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=s[S.id],y=S.uniforms,T=S.__cache;n.bindBuffer(35345,v);for(let R=0,I=y.length;R<I;R++){const M=y[R];if(d(M,R,T)===!0){const A=M.__offset,O=Array.isArray(M.value)?M.value:[M.value];let se=0;for(let re=0;re<O.length;re++){const B=O[re],F=p(B);typeof B=="number"?(M.__data[0]=B,n.bufferSubData(35345,A+se,M.__data)):B.isMatrix3?(M.__data[0]=B.elements[0],M.__data[1]=B.elements[1],M.__data[2]=B.elements[2],M.__data[3]=B.elements[0],M.__data[4]=B.elements[3],M.__data[5]=B.elements[4],M.__data[6]=B.elements[5],M.__data[7]=B.elements[0],M.__data[8]=B.elements[6],M.__data[9]=B.elements[7],M.__data[10]=B.elements[8],M.__data[11]=B.elements[0]):(B.toArray(M.__data,se),se+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,A,M.__data)}}n.bindBuffer(35345,null)}function d(S,v,y){const T=S.value;if(y[v]===void 0){if(typeof T=="number")y[v]=T;else{const R=Array.isArray(T)?T:[T],I=[];for(let M=0;M<R.length;M++)I.push(R[M].clone());y[v]=I}return!0}else if(typeof T=="number"){if(y[v]!==T)return y[v]=T,!0}else{const R=Array.isArray(y[v])?y[v]:[y[v]],I=Array.isArray(T)?T:[T];for(let M=0;M<R.length;M++){const A=R[M];if(A.equals(I[M])===!1)return A.copy(I[M]),!0}}return!1}function g(S){const v=S.uniforms;let y=0;const T=16;let R=0;for(let I=0,M=v.length;I<M;I++){const A=v[I],O={boundary:0,storage:0},se=Array.isArray(A.value)?A.value:[A.value];for(let re=0,B=se.length;re<B;re++){const F=se[re],X=p(F);O.boundary+=X.boundary,O.storage+=X.storage}if(A.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,I>0){R=y%T;const re=T-R;R!==0&&re-O.boundary<0&&(y+=T-R,A.__offset=y)}y+=O.storage}return R=y%T,R>0&&(y+=T-R),S.__size=y,S.__cache={},this}function p(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function _(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function fA(){const n=Oo("canvas");return n.style.display="block",n}function Cl(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:fA(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gs,this.useLegacyLights=!0,this.toneMapping=di,this.toneMappingExposure=1;const p=this;let m=!1,_=0,S=0,v=null,y=-1,T=null;const R=new ot,I=new ot;let M=null,A=e.width,O=e.height,se=1,re=null,B=null;const F=new ot(0,0,A,O),X=new ot(0,0,A,O);let ie=!1;const te=new bh;let G=!1,fe=!1,le=null;const Ee=new He,z=new D,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return v===null?se:1}let V=t;function ye(E,H){for(let Z=0;Z<E.length;Z++){const U=E[Z],ee=e.getContext(U,H);if(ee!==null)return ee}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vh}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),V===null){const H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),V=ye(H,E),V===null)throw ye(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let N,$,j,oe,Se,Te,w,C,k,ne,q,Q,ce,me,de,b,x,L,W,K,ae,ve,he,Y;function we(){N=new MT(V),$=new _T(V,N,n),N.init($),ve=new rA(V,N,$),j=new iA(V,N,$),oe=new TT,Se=new GC,Te=new sA(V,N,j,Se,$,ve,oe),w=new xT(p),C=new ST(p),k=new OM(V,$),he=new mT(V,N,k,$),ne=new wT(V,k,oe,he),q=new IT(V,ne,k,oe),W=new RT(V,$,Te),b=new vT(Se),Q=new HC(p,w,C,N,$,he,b),ce=new uA(p,Se),me=new jC,de=new ZC(N,$),L=new pT(p,w,C,j,q,u,o),x=new nA(p,q,$),Y=new hA(V,oe,$,j),K=new gT(V,N,oe,$),ae=new ET(V,N,oe,$),oe.programs=Q.programs,p.capabilities=$,p.extensions=N,p.properties=Se,p.renderLists=me,p.shadowMap=x,p.state=j,p.info=oe}we();const be=new cA(p,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const E=N.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=N.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(A,O,!1))},this.getSize=function(E){return E.set(A,O)},this.setSize=function(E,H,Z=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=E,O=H,e.width=Math.floor(E*se),e.height=Math.floor(H*se),Z===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(A*se,O*se).floor()},this.setDrawingBufferSize=function(E,H,Z){A=E,O=H,se=Z,e.width=Math.floor(E*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,H,Z,U){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,H,Z,U),j.viewport(R.copy(F).multiplyScalar(se).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,H,Z,U){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,H,Z,U),j.scissor(I.copy(X).multiplyScalar(se).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){j.setScissorTest(ie=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor.apply(L,arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha.apply(L,arguments)},this.clear=function(E=!0,H=!0,Z=!0){let U=0;E&&(U|=16384),H&&(U|=256),Z&&(U|=1024),V.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),me.dispose(),de.dispose(),Se.dispose(),w.dispose(),C.dispose(),q.dispose(),he.dispose(),Y.dispose(),Q.dispose(),be.dispose(),be.removeEventListener("sessionstart",pe),be.removeEventListener("sessionend",Me),le&&(le.dispose(),le=null),Ae.stop()};function Ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=oe.autoReset,H=x.enabled,Z=x.autoUpdate,U=x.needsUpdate,ee=x.type;we(),oe.autoReset=E,x.enabled=H,x.autoUpdate=Z,x.needsUpdate=U,x.type=ee}function Ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const H=E.target;H.removeEventListener("dispose",De),je(H)}function je(E){gt(E),Se.remove(E)}function gt(E){const H=Se.get(E).programs;H!==void 0&&(H.forEach(function(Z){Q.releaseProgram(Z)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Z,U,ee,Le){H===null&&(H=ue);const Ne=ee.isMesh&&ee.matrixWorld.determinant()<0,Be=y0(E,H,Z,U,ee);j.setMaterial(U,Ne);let Ge=Z.index,Ze=1;U.wireframe===!0&&(Ge=ne.getWireframeAttribute(Z),Ze=2);const qe=Z.drawRange,Xe=Z.attributes.position;let xt=qe.start*Ze,on=(qe.start+qe.count)*Ze;Le!==null&&(xt=Math.max(xt,Le.start*Ze),on=Math.min(on,(Le.start+Le.count)*Ze)),Ge!==null?(xt=Math.max(xt,0),on=Math.min(on,Ge.count)):Xe!=null&&(xt=Math.max(xt,0),on=Math.min(on,Xe.count));const Zn=on-xt;if(Zn<0||Zn===1/0)return;he.setup(ee,U,Be,Z,Ge);let qi,yt=K;if(Ge!==null&&(qi=k.get(Ge),yt=ae,yt.setIndex(qi)),ee.isMesh)U.wireframe===!0?(j.setLineWidth(U.wireframeLinewidth*_e()),yt.setMode(1)):yt.setMode(4);else if(ee.isLine){let $e=U.linewidth;$e===void 0&&($e=1),j.setLineWidth($e*_e()),ee.isLineSegments?yt.setMode(1):ee.isLineLoop?yt.setMode(2):yt.setMode(3)}else ee.isPoints?yt.setMode(0):ee.isSprite&&yt.setMode(4);if(ee.isInstancedMesh)yt.renderInstances(xt,Zn,ee.count);else if(Z.isInstancedBufferGeometry){const $e=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Hl=Math.min(Z.instanceCount,$e);yt.renderInstances(xt,Zn,Hl)}else yt.render(xt,Zn)},this.compile=function(E,H){function Z(U,ee,Le){U.transparent===!0&&U.side===ui&&U.forceSinglePass===!1?(U.side=dn,U.needsUpdate=!0,pn(U,ee,Le),U.side=mi,U.needsUpdate=!0,pn(U,ee,Le),U.side=ui):pn(U,ee,Le)}f=de.get(E),f.init(),g.push(f),E.traverseVisible(function(U){U.isLight&&U.layers.test(H.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(p.useLegacyLights),E.traverse(function(U){const ee=U.material;if(ee)if(Array.isArray(ee))for(let Le=0;Le<ee.length;Le++){const Ne=ee[Le];Z(Ne,E,U)}else Z(ee,E,U)}),g.pop(),f=null};let P=null;function J(E){P&&P(E)}function pe(){Ae.stop()}function Me(){Ae.start()}const Ae=new C_;Ae.setAnimationLoop(J),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(E){P=E,be.setAnimationLoop(E),E===null?Ae.stop():Ae.start()},be.addEventListener("sessionstart",pe),be.addEventListener("sessionend",Me),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(H),H=be.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,H,v),f=de.get(E,g.length),f.init(),g.push(f),Ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),te.setFromProjectionMatrix(Ee),fe=this.localClippingEnabled,G=b.init(this.clippingPlanes,fe),h=me.get(E,d.length),h.init(),d.push(h),ft(E,H,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(re,B),G===!0&&b.beginShadows();const Z=f.state.shadowsArray;if(x.render(Z,E,H),G===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),L.render(h,E),f.setupLights(p.useLegacyLights),H.isArrayCamera){const U=H.cameras;for(let ee=0,Le=U.length;ee<Le;ee++){const Ne=U[ee];wt(h,E,Ne,Ne.viewport)}}else wt(h,E,H);v!==null&&(Te.updateMultisampleRenderTarget(v),Te.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(p,E,H),he.resetDefaultState(),y=-1,T=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function ft(E,H,Z,U){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){U&&z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const Ne=q.update(E),Be=E.material;Be.visible&&h.push(E,Ne,Be,Z,z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==oe.render.frame&&(E.skeleton.update(),E.skeleton.frame=oe.render.frame),!E.frustumCulled||te.intersectsObject(E))){U&&z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const Ne=q.update(E),Be=E.material;if(Array.isArray(Be)){const Ge=Ne.groups;for(let Ze=0,qe=Ge.length;Ze<qe;Ze++){const Xe=Ge[Ze],xt=Be[Xe.materialIndex];xt&&xt.visible&&h.push(E,Ne,xt,Z,z.z,Xe)}}else Be.visible&&h.push(E,Ne,Be,Z,z.z,null)}}const Le=E.children;for(let Ne=0,Be=Le.length;Ne<Be;Ne++)ft(Le[Ne],H,Z,U)}function wt(E,H,Z,U){const ee=E.opaque,Le=E.transmissive,Ne=E.transparent;f.setupLightsView(Z),G===!0&&b.setGlobalState(p.clippingPlanes,Z),Le.length>0&&Gt(ee,H,Z),U&&j.viewport(R.copy(U)),ee.length>0&&Un(ee,H,Z),Le.length>0&&Un(Le,H,Z),Ne.length>0&&Un(Ne,H,Z),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Gt(E,H,Z){const U=$.isWebGL2;le===null&&(le=new _s(1024,1024,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?Lo:ms,minFilter:ps,samples:U&&r===!0?4:0}));const ee=p.getRenderTarget();p.setRenderTarget(le),p.clear();const Le=p.toneMapping;p.toneMapping=di,Un(E,H,Z),p.toneMapping=Le,Te.updateMultisampleRenderTarget(le),Te.updateRenderTargetMipmap(le),p.setRenderTarget(ee)}function Un(E,H,Z){const U=H.isScene===!0?H.overrideMaterial:null;for(let ee=0,Le=E.length;ee<Le;ee++){const Ne=E[ee],Be=Ne.object,Ge=Ne.geometry,Ze=U===null?Ne.material:U,qe=Ne.group;Be.layers.test(Z.layers)&&_t(Be,H,Z,Ge,Ze,qe)}}function _t(E,H,Z,U,ee,Le){E.onBeforeRender(p,H,Z,U,ee,Le),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(p,H,Z,U,E,Le),ee.transparent===!0&&ee.side===ui&&ee.forceSinglePass===!1?(ee.side=dn,ee.needsUpdate=!0,p.renderBufferDirect(Z,H,U,ee,E,Le),ee.side=mi,ee.needsUpdate=!0,p.renderBufferDirect(Z,H,U,ee,E,Le),ee.side=ui):p.renderBufferDirect(Z,H,U,ee,E,Le),E.onAfterRender(p,H,Z,U,ee,Le)}function pn(E,H,Z){H.isScene!==!0&&(H=ue);const U=Se.get(E),ee=f.state.lights,Le=f.state.shadowsArray,Ne=ee.state.version,Be=Q.getParameters(E,ee.state,Le,H,Z),Ge=Q.getProgramCacheKey(Be);let Ze=U.programs;U.environment=E.isMeshStandardMaterial?H.environment:null,U.fog=H.fog,U.envMap=(E.isMeshStandardMaterial?C:w).get(E.envMap||U.environment),Ze===void 0&&(E.addEventListener("dispose",De),Ze=new Map,U.programs=Ze);let qe=Ze.get(Ge);if(qe!==void 0){if(U.currentProgram===qe&&U.lightsStateVersion===Ne)return Bn(E,Be),qe}else Be.uniforms=Q.getUniforms(E),E.onBuild(Z,Be,p),E.onBeforeCompile(Be,p),qe=Q.acquireProgram(Be,Ge),Ze.set(Ge,qe),U.uniforms=Be.uniforms;const Xe=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=b.uniform),Bn(E,Be),U.needsLights=S0(E),U.lightsStateVersion=Ne,U.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMap.value=ee.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotShadowMap.value=ee.state.spotShadowMap,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMap.value=ee.state.pointShadowMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const xt=qe.getUniforms(),on=ka.seqWithValue(xt.seq,Xe);return U.currentProgram=qe,U.uniformsList=on,qe}function Bn(E,H){const Z=Se.get(E);Z.outputEncoding=H.outputEncoding,Z.instancing=H.instancing,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function y0(E,H,Z,U,ee){H.isScene!==!0&&(H=ue),Te.resetTextureUnits();const Le=H.fog,Ne=U.isMeshStandardMaterial?H.environment:null,Be=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:gs,Ge=(U.isMeshStandardMaterial?C:w).get(U.envMap||Ne),Ze=U.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!U.normalMap&&!!Z.attributes.tangent,Xe=!!Z.morphAttributes.position,xt=!!Z.morphAttributes.normal,on=!!Z.morphAttributes.color,Zn=U.toneMapped?p.toneMapping:di,qi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=qi!==void 0?qi.length:0,$e=Se.get(U),Hl=f.state.lights;if(G===!0&&(fe===!0||E!==T)){const an=E===T&&U.id===y;b.setState(U,E,an)}let Et=!1;U.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Hl.state.version||$e.outputEncoding!==Be||ee.isInstancedMesh&&$e.instancing===!1||!ee.isInstancedMesh&&$e.instancing===!0||ee.isSkinnedMesh&&$e.skinning===!1||!ee.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Ge||U.fog===!0&&$e.fog!==Le||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==b.numPlanes||$e.numIntersection!==b.numIntersection)||$e.vertexAlphas!==Ze||$e.vertexTangents!==qe||$e.morphTargets!==Xe||$e.morphNormals!==xt||$e.morphColors!==on||$e.toneMapping!==Zn||$.isWebGL2===!0&&$e.morphTargetsCount!==yt)&&(Et=!0):(Et=!0,$e.__version=U.version);let Xi=$e.currentProgram;Et===!0&&(Xi=pn(U,H,ee));let _f=!1,Ur=!1,Gl=!1;const Wt=Xi.getUniforms(),$i=$e.uniforms;if(j.useProgram(Xi.program)&&(_f=!0,Ur=!0,Gl=!0),U.id!==y&&(y=U.id,Ur=!0),_f||T!==E){if(Wt.setValue(V,"projectionMatrix",E.projectionMatrix),$.logarithmicDepthBuffer&&Wt.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),T!==E&&(T=E,Ur=!0,Gl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const an=Wt.map.cameraPosition;an!==void 0&&an.setValue(V,z.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Wt.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||ee.isSkinnedMesh)&&Wt.setValue(V,"viewMatrix",E.matrixWorldInverse)}if(ee.isSkinnedMesh){Wt.setOptional(V,ee,"bindMatrix"),Wt.setOptional(V,ee,"bindMatrixInverse");const an=ee.skeleton;an&&($.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Wt.setValue(V,"boneTexture",an.boneTexture,Te),Wt.setValue(V,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wl=Z.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0&&$.isWebGL2===!0)&&W.update(ee,Z,Xi),(Ur||$e.receiveShadow!==ee.receiveShadow)&&($e.receiveShadow=ee.receiveShadow,Wt.setValue(V,"receiveShadow",ee.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&($i.envMap.value=Ge,$i.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Ur&&(Wt.setValue(V,"toneMappingExposure",p.toneMappingExposure),$e.needsLights&&b0($i,Gl),Le&&U.fog===!0&&ce.refreshFogUniforms($i,Le),ce.refreshMaterialUniforms($i,U,se,O,le),ka.upload(V,$e.uniformsList,$i,Te)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ka.upload(V,$e.uniformsList,$i,Te),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Wt.setValue(V,"center",ee.center),Wt.setValue(V,"modelViewMatrix",ee.modelViewMatrix),Wt.setValue(V,"normalMatrix",ee.normalMatrix),Wt.setValue(V,"modelMatrix",ee.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const an=U.uniformsGroups;for(let jl=0,M0=an.length;jl<M0;jl++)if($.isWebGL2){const vf=an[jl];Y.update(vf,Xi),Y.bind(vf,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function b0(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function S0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,H,Z){Se.get(E.texture).__webglTexture=H,Se.get(E.depthTexture).__webglTexture=Z;const U=Se.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=Z===void 0,U.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){const Z=Se.get(E);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,Z=0){v=E,_=H,S=Z;let U=!0,ee=null,Le=!1,Ne=!1;if(E){const Ge=Se.get(E);Ge.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(36160,null),U=!1):Ge.__webglFramebuffer===void 0?Te.setupRenderTarget(E):Ge.__hasExternalTextures&&Te.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);const Ze=E.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ne=!0);const qe=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ee=qe[H],Le=!0):$.isWebGL2&&E.samples>0&&Te.useMultisampledRTT(E)===!1?ee=Se.get(E).__webglMultisampledFramebuffer:ee=qe,R.copy(E.viewport),I.copy(E.scissor),M=E.scissorTest}else R.copy(F).multiplyScalar(se).floor(),I.copy(X).multiplyScalar(se).floor(),M=ie;if(j.bindFramebuffer(36160,ee)&&$.drawBuffers&&U&&j.drawBuffers(E,ee),j.viewport(R),j.scissor(I),j.setScissorTest(M),Le){const Ge=Se.get(E.texture);V.framebufferTexture2D(36160,36064,34069+H,Ge.__webglTexture,Z)}else if(Ne){const Ge=Se.get(E.texture),Ze=H||0;V.framebufferTextureLayer(36160,36064,Ge.__webglTexture,Z||0,Ze)}y=-1},this.readRenderTargetPixels=function(E,H,Z,U,ee,Le,Ne){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){j.bindFramebuffer(36160,Be);try{const Ge=E.texture,Ze=Ge.format,qe=Ge.type;if(Ze!==vn&&ve.convert(Ze)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=qe===Lo&&(N.has("EXT_color_buffer_half_float")||$.isWebGL2&&N.has("EXT_color_buffer_float"));if(qe!==ms&&ve.convert(qe)!==V.getParameter(35738)&&!(qe===Li&&($.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-U&&Z>=0&&Z<=E.height-ee&&V.readPixels(H,Z,U,ee,ve.convert(Ze),ve.convert(qe),Le)}finally{const Ge=v!==null?Se.get(v).__webglFramebuffer:null;j.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(E,H,Z=0){const U=Math.pow(2,-Z),ee=Math.floor(H.image.width*U),Le=Math.floor(H.image.height*U);Te.setTexture2D(H,0),V.copyTexSubImage2D(3553,Z,0,0,E.x,E.y,ee,Le),j.unbindTexture()},this.copyTextureToTexture=function(E,H,Z,U=0){const ee=H.image.width,Le=H.image.height,Ne=ve.convert(Z.format),Be=ve.convert(Z.type);Te.setTexture2D(Z,0),V.pixelStorei(37440,Z.flipY),V.pixelStorei(37441,Z.premultiplyAlpha),V.pixelStorei(3317,Z.unpackAlignment),H.isDataTexture?V.texSubImage2D(3553,U,E.x,E.y,ee,Le,Ne,Be,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(3553,U,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,Ne,H.mipmaps[0].data):V.texSubImage2D(3553,U,E.x,E.y,Ne,Be,H.image),U===0&&Z.generateMipmaps&&V.generateMipmap(3553),j.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Z,U,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=E.max.x-E.min.x+1,Ne=E.max.y-E.min.y+1,Be=E.max.z-E.min.z+1,Ge=ve.convert(U.format),Ze=ve.convert(U.type);let qe;if(U.isData3DTexture)Te.setTexture3D(U,0),qe=32879;else if(U.isDataArrayTexture)Te.setTexture2DArray(U,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,U.flipY),V.pixelStorei(37441,U.premultiplyAlpha),V.pixelStorei(3317,U.unpackAlignment);const Xe=V.getParameter(3314),xt=V.getParameter(32878),on=V.getParameter(3316),Zn=V.getParameter(3315),qi=V.getParameter(32877),yt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;V.pixelStorei(3314,yt.width),V.pixelStorei(32878,yt.height),V.pixelStorei(3316,E.min.x),V.pixelStorei(3315,E.min.y),V.pixelStorei(32877,E.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(qe,ee,H.x,H.y,H.z,Le,Ne,Be,Ge,Ze,yt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(qe,ee,H.x,H.y,H.z,Le,Ne,Be,Ge,yt.data)):V.texSubImage3D(qe,ee,H.x,H.y,H.z,Le,Ne,Be,Ge,Ze,yt),V.pixelStorei(3314,Xe),V.pixelStorei(32878,xt),V.pixelStorei(3316,on),V.pixelStorei(3315,Zn),V.pixelStorei(32877,qi),ee===0&&U.generateMipmaps&&V.generateMipmap(qe),j.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Te.setTextureCube(E,0):E.isData3DTexture?Te.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Te.setTexture2DArray(E,0):Te.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){_=0,S=0,v=null,j.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Cl.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class dA extends Cl{}dA.prototype.isWebGL1Renderer=!0;class P_ extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_u,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new D;class Eh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mp=new D,wp=new ot,Ep=new ot,mA=new D,Tp=new He;class gA extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,s=this.geometry;wp.fromBufferAttribute(s.attributes.skinIndex,e),Ep.fromBufferAttribute(s.attributes.skinWeight,e),Mp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ep.getComponent(r);if(o!==0){const a=wp.getComponent(r);Tp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(mA.copy(Mp).applyMatrix4(Tp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class D_ extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _A extends Ot{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Rt,u=Rt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cp=new He,vA=new He;class Th{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:vA;Cp.multiplyMatrices(a,t[r]),Cp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Th(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=m_(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new _A(t,e,e,vn,Li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new D_),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Ap extends Qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rp=new He,Ip=new He,Ea=[],xA=new He,Kr=new nn;class N_ extends nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ap(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let s=0;s<i;s++)this.setMatrixAt(s,xA)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Rp),Ip.multiplyMatrices(i,Rp),Kr.matrixWorld=Ip,Kr.raycast(e,Ea);for(let o=0,a=Ea.length;o<a;o++){const l=Ea[o];l.instanceId=r,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ap(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class O_ extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lp=new D,Pp=new D,Dp=new He,Fc=new wl,Ta=new Ts;class Ch extends dt{constructor(e=new kn,t=new O_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Lp.fromBufferAttribute(t,s-1),Pp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Lp.distanceTo(Pp);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;Dp.copy(s).invert(),Fc.copy(e.ray).applyMatrix4(Dp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=_,y=S-1;v<y;v+=d){const T=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(m,T),u.fromBufferAttribute(m,R),Fc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let v=_,y=S-1;v<y;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Fc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Np=new D,Op=new D;class yA extends Ch{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Np.fromBufferAttribute(t,s),Op.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Np.distanceTo(Op);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bA extends Ch{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class F_ extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fp=new He,bu=new wl,Ca=new Ts,Aa=new D;class SA extends dt{constructor(e=new kn,t=new F_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Fp.copy(s).invert(),bu.copy(e.ray).applyMatrix4(Fp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);Aa.fromBufferAttribute(h,m),kp(Aa,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,p=d;g<p;g++)Aa.fromBufferAttribute(h,g),kp(Aa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kp(n,e,t,i,s,r,o){const a=bu.distanceSqToPoint(n);if(a<t){const l=new D;bu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ah extends kn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],g=[],p=[],m=[];for(let _=0;_<=i;_++){const S=[],v=_/i;let y=0;_==0&&o==0?y=.5/t:_==i&&l==Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const R=T/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),m.push(R+y,1-v),S.push(c++)}u.push(S)}for(let _=0;_<i;_++)for(let S=0;S<t;S++){const v=u[_][S+1],y=u[_][S],T=u[_+1][S],R=u[_+1][S+1];(_!==0||o>0)&&d.push(v,y,R),(_!==i-1||l<Math.PI)&&d.push(y,T,R)}this.setIndex(d),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(p,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ir extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d_,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cs extends Ir{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function wi(n,e,t){return k_(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function Ra(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function k_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function MA(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Up(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function U_(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Yo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wA extends Yo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bd,endingEnd:Bd}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zd:r=e,a=2*t-i;break;case Vd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zd:o=e,l=2*i-t;break;case Vd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,S=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*p+.5*g,y=d*m-d*p;for(let T=0;T!==a;++T)r[T]=_*o[u+T]+S*o[c+T]+v*o[l+T]+y*o[h+T];return r}}class EA extends Yo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class TA extends Yo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new TA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new EA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case gr:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=wi(i,r,o),this.values=wi(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&k_(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=wi(this.times),t=wi(this.values),i=this.getValueSize(),s=this.getInterpolation()===hc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=wi(e,0,o),this.values=wi(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=wi(this.times,0),t=wi(this.values,0),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=gr;class Lr extends Kn{}Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Po;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class B_ extends Kn{}B_.prototype.ValueTypeName="color";class Fo extends Kn{}Fo.prototype.ValueTypeName="number";class CA extends Yo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class xs extends Kn{InterpolantFactoryMethodLinear(e){return new CA(this.times,this.values,this.getValueSize(),e)}}xs.prototype.ValueTypeName="quaternion";xs.prototype.DefaultInterpolation=gr;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends Kn{}Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=Po;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class ko extends Kn{}ko.prototype.ValueTypeName="vector";class AA{constructor(e,t=-1,i,s=HS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(IA(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Kn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=MA(l);l=Up(l,1,u),c=Up(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Fo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,p){if(d.length!==0){const m=[],_=[];U_(d,m,_,g),m.length!==0&&p.push(new h(f,m,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let S=0;S!==f[g].morphTargets.length;++S){const v=f[g];m.push(v.time),_.push(v.morphTarget===p?1:0)}s.push(new Fo(".morphTargetInfluence["+p+"]",m,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(ko,d+".position",f,"pos",s),i(xs,d+".quaternion",f,"rot",s),i(ko,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function RA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fo;case"vector":case"vector2":case"vector3":case"vector4":return ko;case"color":return B_;case"quaternion":return xs;case"bool":case"boolean":return Lr;case"string":return Pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function IA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=RA(n.type);if(n.times===void 0){const t=[],i=[];U_(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const vr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class LA{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const PA=new LA;class Zo{constructor(e){this.manager=e!==void 0?e:PA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ri={};class DA extends Error{constructor(e,t){super(e),this.response=t}}class z_ extends Zo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:i,onError:s});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ri[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){S();function S(){h.read().then(({done:v,value:y})=>{if(v)_.close();else{p+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let R=0,I=u.length;R<I;R++){const M=u[R];M.onProgress&&M.onProgress(T)}_.enqueue(y),S()}})}}});return new Response(m)}else throw new DA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{vr.add(e,c);const u=ri[e];delete ri[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete ri[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class NA extends Zo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Oo("img");function l(){u(),vr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class OA extends Zo{constructor(e){super(e)}load(e,t,i,s){const r=new Ot,o=new NA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Al extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class V_ extends Al{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const kc=new He,Bp=new D,zp=new D;class Rh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class FA extends Rh{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=No*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kA extends Al{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new FA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vp=new He,Yr=new D,Uc=new D;class UA extends Rh{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Yr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Yr),Uc.copy(i.position),Uc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uc),i.updateMatrixWorld(),s.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Vp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vp)}}class BA extends Al{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new UA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zA extends Rh{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VA extends Al{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new zA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Su{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class HA extends Zo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){vr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Ih="\\[\\]\\.:\\/",GA=new RegExp("["+Ih+"]","g"),Lh="[^"+Ih+"]",WA="[^"+Ih.replace("\\.","")+"]",jA=/((?:WC+[\/:])*)/.source.replace("WC",Lh),qA=/(WCOD+)?/.source.replace("WCOD",WA),XA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),$A=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),KA=new RegExp("^"+jA+qA+XA+$A+"$"),YA=["material","materials","bones","map"];class ZA{constructor(e,t,i){const s=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class it{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GA,"")}static parseTrackName(e){const t=KA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);YA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=ZA;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class JA{constructor(e,t,i=0,s=1/0){this.ray=new wl(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Mu(e,this,i,t),i.sort(Hp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mu(e[s],this,i,t);return i.sort(Hp),i}}function Hp(n,e){return n.distance-e.distance}function Mu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Mu(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);class xr{static createButton(e){const t=document.createElement("button");function i(){let l=null;async function c(h){h.addEventListener("end",u),await e.xr.setSession(h),t.textContent="EXIT VR",l=h}function u(){l.removeEventListener("end",u),t.textContent="ENTER VR",l=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(l===null){const h={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",h).then(c)}else l.end()}}function s(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function r(){s(),t.textContent="VR NOT SUPPORTED"}function o(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),t.textContent="VR NOT ALLOWED"}function a(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",a(t),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?i():r(),l&&xr.xrSessionIsGranted&&t.click()}).catch(o),t;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",a(l),l}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{xr.xrSessionIsGranted=!0})}}}xr.xrSessionIsGranted=!1;xr.registerSessionGrantedListener();const Gp=new He,Wp=new D;class jp{constructor(e,t,i,s,r){this.controller=t,this.handModel=e,this.envMap=null;let o;!r||!r.primitive||r.primitive==="sphere"?o=new Ah(1,10,10):r.primitive==="box"&&(o=new ji(1,1,1));const a=new Ir;this.handMesh=new N_(o,a,30),this.handMesh.instanceMatrix.setUsage($S),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const t=this.controller.joints;let i=0;for(let s=0;s<this.joints.length;s++){const r=t[this.joints[s]];r.visible&&(Wp.setScalar(r.jointRadius||.008),Gp.compose(r.position,r.quaternion,Wp),this.handMesh.setMatrixAt(s,Gp),i++)}this.handMesh.count=i,this.handMesh.instanceMatrix.needsUpdate=!0}}function qp(n,e){if(e===GS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===gu||e===f_){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===gu)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class QA extends Zo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new m1(t)})}load(e,t,i,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Su.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new z_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===H_){try{o[Ke.KHR_BINARY_GLTF]=new g1(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new R1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:o[h]=new n1;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[h]=new _1(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[h]=new v1;break;case Ke.KHR_MESH_QUANTIZATION:o[h]=new x1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function e1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class t1{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new VA(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new BA(u),c.distance=h;break;case"spot":c=new kA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class n1{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return as}extendParams(e,t,i){const s=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Qe))}return Promise.all(s)}}class i1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class s1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(a,a)}return Promise.all(r)}}class r1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class o1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Qe)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class a1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class l1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(a[0],a[1],a[2]),Promise.all(r)}}class c1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cs}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class u1{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cs}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Qe)),Promise.all(r)}}class h1{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class f1{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class d1{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class p1{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class m1{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const p=new He,m=new D,_=new Gi,S=new D(1,1,1),v=new N_(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,p.compose(m,_,S));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);dt.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const H_="glTF",Zr=12,Xp={JSON:1313821514,BIN:5130562};class g1{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==H_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Zr,r=new DataView(e,Zr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Xp.JSON){const c=new Uint8Array(e,Zr+o,a);this.content=i.decode(c)}else if(l===Xp.BIN){const c=Zr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=wu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=wu[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=ir[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],p=l[d];p!==void 0&&(g.normalized=p)}h(f)},a,c)})})}}class v1{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class x1{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class G_ extends Yo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,p=g-c,m=-2*d+3*f,_=d-f,S=1-m,v=_-f+h;for(let y=0;y!==a;y++){const T=o[p+y+a],R=o[p+y+l]*u,I=o[g+y+a],M=o[g+y]*u;r[y]=S*T+v*R+m*I+_*M}return r}}const y1=new Gi;class b1 extends G_{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return y1.fromArray(r).normalize().toArray(r),r}}const gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$p={9728:Rt,9729:tn,9984:mu,9985:u_,9986:Fa,9987:ps},Kp={33071:_n,33648:ja,10497:pr},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},S1={CUBICSPLINE:void 0,LINEAR:gr,STEP:Po},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function M1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ir({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),n.DefaultMaterial}function Jr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ri(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w1(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function E1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function T1(n){const e=n.extensions&&n.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Yp(e.attributes):t=n.indices+":"+Yp(n.attributes)+":"+n.mode,t}function Yp(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Eu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const A1=new He;class R1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new OA(this.options.manager):this.textureLoader=new HA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new z_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};Jr(r,a,s),Ri(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Su.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Bc[s.type],a=ir[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Qt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Bc[s.type],c=ir[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let p,m;if(d&&d!==h){const _=Math.floor(f/d),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let v=t.cache.get(S);v||(p=new c(a,_*d,s.count*d/u),v=new pA(p,d/u),t.cache.add(S,v)),m=new Eh(v,l,f%d/u,g)}else a===null?p=new c(s.count*l):p=new c(a,f,s.count*l),m=new Qt(p,l,g);if(s.sparse!==void 0){const _=Bc.SCALAR,S=ir[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new S(o[1],v,s.sparse.count*_),R=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized));for(let I=0,M=T.length;I<M;I++){const A=T[I];if(m.setX(A,R[I*l]),l>=2&&m.setY(A,R[I*l+1]),l>=3&&m.setZ(A,R[I*l+2]),l>=4&&m.setW(A,R[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=$p[f.magFilter]||tn,u.minFilter=$p[f.minFilter]||ps,u.wrapS=Kp[f.wrapS]||pr,u.wrapT=Kp[f.wrapT]||pr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Ot(p);m.needsUpdate=!0,f(m)}),t.load(Su.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||C1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new F_,Xn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new O_,Xn.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return Ir}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const h=s[Ke.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Qe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ui);const u=r.alphaMode||zc.OPAQUE;if(u===zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==as&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==as&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==as&&(a.emissive=new Oe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==as&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Qe)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&Jr(s,h,r),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");let i=t;for(let s=1;this.nodeNamesUsed[i];++s)i=t+"_"+s;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Zp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=T1(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Zp(new kn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?M1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const p=u[d],m=o[d];let _;const S=c[d];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new gA(p,S):new nn(p,S),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?_.geometry=qp(_.geometry,f_):m.mode===gn.TRIANGLE_FAN&&(_.geometry=qp(_.geometry,gu));else if(m.mode===gn.LINES)_=new yA(p,S);else if(m.mode===gn.LINE_STRIP)_=new Ch(p,S);else if(m.mode===gn.LINE_LOOP)_=new bA(p,S);else if(m.mode===gn.POINTS)_=new SA(p,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&E1(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Ri(_,r),m.extensions&&Jr(s,_,m),t.assignFinalMaterial(_),h.push(_)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new ls;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new zt(lM.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Mh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ri(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new He;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Th(a,l)})}loadAnimation(e){const i=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=i.channels.length;c<u;c++){const h=i.channels[c],f=i.samplers[h.sampler],d=h.target,g=d.node,p=i.parameters!==void 0?i.parameters[f.input]:f.input,m=i.parameters!==void 0?i.parameters[f.output]:f.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",m)),a.push(f),l.push(d)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],p=[];for(let _=0,S=u.length;_<S;_++){const v=u[_],y=h[_],T=f[_],R=d[_],I=g[_];if(v===void 0)continue;v.updateMatrix();let M;switch(Ei[I.path]){case Ei.weights:M=Fo;break;case Ei.rotation:M=xs;break;case Ei.position:case Ei.scale:default:M=ko;break}const A=v.name?v.name:v.uuid,O=R.interpolation!==void 0?S1[R.interpolation]:gr,se=[];Ei[I.path]===Ei.weights?v.traverse(function(B){B.morphTargetInfluences&&se.push(B.name?B.name:B.uuid)}):se.push(A);let re=T.array;if(T.normalized){const B=Eu(re.constructor),F=new Float32Array(re.length);for(let X=0,ie=re.length;X<ie;X++)F[X]=re[X]*B;re=F}for(let B=0,F=se.length;B<F;B++){const X=new M(se[B]+"."+Ei[I.path],y.array,re,O);R.interpolation==="CUBICSPLINE"&&(X.createInterpolant=function(te){const G=this instanceof xs?b1:G_;return new G(this.times,this.values,this.getValueSize()/3,te)},X.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(X)}}const m=i.name?i.name:"animation_"+e;return new AA(m,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,A1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new D_:c.length>1?u=new ls:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ri(u,r),r.extensions&&Jr(i,u,r),r.matrix!==void 0){const h=new He;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ls;i.name&&(r.name=s.createUniqueName(i.name)),Ri(r,i),i.extensions&&Jr(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof Xn||f instanceof Ot)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}}function I1(n,e,t){const i=e.attributes,s=new Wi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=Eu(ir[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const p=Eu(ir[f.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Ts;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Zp(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=wu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ri(n,e),I1(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?w1(n,e.targets,t):n})}const L1="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";class P1{constructor(e,t,i,s,r=null){this.controller=t,this.handModel=e,this.bones=[],r===null&&(r=new QA,r.setPath(i||L1)),r.load(`${s}.glb`,o=>{const a=o.scene.children[0];this.handModel.add(a);const l=a.getObjectByProperty("type","SkinnedMesh");l.frustumCulled=!1,l.castShadow=!0,l.receiveShadow=!0,["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach(u=>{const h=a.getObjectByName(u);h!==void 0?h.jointName=u:console.warn(`Couldn't find ${u} in ${s} hand mesh`),this.bones.push(h)})})}updateMesh(){const e=this.controller.joints;for(let t=0;t<this.bones.length;t++){const i=this.bones[t];if(i){const s=e[i.jointName];if(s.visible){const r=s.position;i.position.copy(r),i.quaternion.copy(s.quaternion)}}}}}class D1 extends dt{constructor(e){super(),this.controller=e,this.motionController=null,this.envMap=null,this.mesh=null}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}}class N1{constructor(){this.path=null}setPath(e){return this.path=e,this}createHandModel(e,t){const i=new D1(e);return e.addEventListener("connected",s=>{const r=s.data;r.hand&&!i.motionController&&(i.xrInputSource=r,t===void 0||t==="spheres"?i.motionController=new jp(i,e,this.path,r.handedness,{primitive:"sphere"}):t==="boxes"?i.motionController=new jp(i,e,this.path,r.handedness,{primitive:"box"}):t==="mesh"&&(i.motionController=new P1(i,e,this.path,r.handedness))),e.visible=!0}),e.addEventListener("disconnected",()=>{e.visible=!1}),i}}/**
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
 */const W_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ge=function(n,e){if(!n)throw Dr(e)},Dr=function(n){return new Error("Firebase Database ("+W_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const j_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},O1=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(t[u],t[h],t[f],t[d])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(j_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):O1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new F1;const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const g=c<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class F1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q_=function(n){const e=j_(n);return Ph.encodeByteArray(e,!0)},qa=function(n){return q_(n).replace(/\./g,"")},Tu=function(n){try{return Ph.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function k1(n){return X_(void 0,n)}function X_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!U1(t)||(n[t]=X_(n[t],e[t]));return n}function U1(n){return n!=="__proto__"}/**
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
 */function B1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const z1=()=>B1().__FIREBASE_DEFAULTS__,V1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},H1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tu(n[1]);return e&&JSON.parse(e)},$_=()=>{try{return z1()||V1()||H1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},G1=n=>{var e,t;return(t=(e=$_())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},W1=n=>{const e=G1(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},K_=()=>{var n;return(n=$_())===null||n===void 0?void 0:n.config};/**
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
 */class Jo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function j1(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[qa(JSON.stringify(t)),qa(JSON.stringify(o)),a].join(".")}/**
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
 */function q1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q1())}function X1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Z_(){return W_.NODE_ADMIN===!0}function $1(){try{return typeof indexedDB=="object"}catch{return!1}}function K1(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Y1="FirebaseError";class Qo extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Y1,Object.setPrototypeOf(this,Qo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J_.prototype.create)}}class J_{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Z1(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qo(s,a,i)}}function Z1(n,e){return n.replace(J1,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const J1=/\{\$([^}]+)}/g;/**
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
 */function Uo(n){return JSON.parse(n)}function Lt(n){return JSON.stringify(n)}/**
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
 */const Q_=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Uo(Tu(r[0])||""),t=Uo(Tu(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Q1=function(n){const e=Q_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},eR=function(n){const e=Q_(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function yr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Jp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xa(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Cu(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Qp(r)&&Qp(o)){if(!Cu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Qp(n){return n!==null&&typeof n=="object"}/**
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
 */function tR(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class nR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Rl(n,e){return`${n} failed: ${e} argument `}/**
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
 */const iR=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,ge(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Il=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Nr(n){return n&&n._delegate?n._delegate:n}class Bo{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class sR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Jo;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oR(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rR(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rR(n){return n===is?void 0:n}function oR(n){return n.instantiationMode==="EAGER"}/**
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
 */class aR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ct;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ct||(ct={}));const lR={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},cR=ct.INFO,uR={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},hR=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=uR[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ev{constructor(e){this.name=e,this._logLevel=cR,this._logHandler=hR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ct))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...e),this._logHandler(this,ct.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...e),this._logHandler(this,ct.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...e),this._logHandler(this,ct.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...e),this._logHandler(this,ct.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...e),this._logHandler(this,ct.ERROR,...e)}}const fR=(n,e)=>e.some(t=>n instanceof t);let em,tm;function dR(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pR(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,Au=new WeakMap,nv=new WeakMap,Vc=new WeakMap,Dh=new WeakMap;function mR(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Fi(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&tv.set(t,n)}).catch(()=>{}),Dh.set(e,n),e}function gR(n){if(Au.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Au.set(n,e)}let Ru={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Au.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _R(n){Ru=n(Ru)}function vR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Hc(this),e,...t);return nv.set(i,e.sort?e.sort():[e]),Fi(i)}:pR().includes(n)?function(...e){return n.apply(Hc(this),e),Fi(tv.get(this))}:function(...e){return Fi(n.apply(Hc(this),e))}}function xR(n){return typeof n=="function"?vR(n):(n instanceof IDBTransaction&&gR(n),fR(n,dR())?new Proxy(n,Ru):n)}function Fi(n){if(n instanceof IDBRequest)return mR(n);if(Vc.has(n))return Vc.get(n);const e=xR(n);return e!==n&&(Vc.set(n,e),Dh.set(e,n)),e}const Hc=n=>Dh.get(n);function yR(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Fi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Fi(o.result),l.oldVersion,l.newVersion,Fi(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bR=["get","getKey","getAll","getAllKeys","count"],SR=["put","add","delete","clear"],Gc=new Map;function nm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Gc.get(e))return Gc.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=SR.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||bR.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Gc.set(e,r),r}_R(n=>({...n,get:(e,t,i)=>nm(e,t)||n.get(e,t,i),has:(e,t)=>!!nm(e,t)||n.has(e,t)}));/**
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
 */class MR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wR(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function wR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Iu="@firebase/app",im="0.9.13";/**
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
 */const ys=new ev("@firebase/app"),ER="@firebase/app-compat",TR="@firebase/analytics-compat",CR="@firebase/analytics",AR="@firebase/app-check-compat",RR="@firebase/app-check",IR="@firebase/auth",LR="@firebase/auth-compat",PR="@firebase/database",DR="@firebase/database-compat",NR="@firebase/functions",OR="@firebase/functions-compat",FR="@firebase/installations",kR="@firebase/installations-compat",UR="@firebase/messaging",BR="@firebase/messaging-compat",zR="@firebase/performance",VR="@firebase/performance-compat",HR="@firebase/remote-config",GR="@firebase/remote-config-compat",WR="@firebase/storage",jR="@firebase/storage-compat",qR="@firebase/firestore",XR="@firebase/firestore-compat",$R="firebase",KR="9.23.0";/**
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
 */const Lu="[DEFAULT]",YR={[Iu]:"fire-core",[ER]:"fire-core-compat",[CR]:"fire-analytics",[TR]:"fire-analytics-compat",[RR]:"fire-app-check",[AR]:"fire-app-check-compat",[IR]:"fire-auth",[LR]:"fire-auth-compat",[PR]:"fire-rtdb",[DR]:"fire-rtdb-compat",[NR]:"fire-fn",[OR]:"fire-fn-compat",[FR]:"fire-iid",[kR]:"fire-iid-compat",[UR]:"fire-fcm",[BR]:"fire-fcm-compat",[zR]:"fire-perf",[VR]:"fire-perf-compat",[HR]:"fire-rc",[GR]:"fire-rc-compat",[WR]:"fire-gcs",[jR]:"fire-gcs-compat",[qR]:"fire-fst",[XR]:"fire-fst-compat","fire-js":"fire-js",[$R]:"fire-js-all"};/**
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
 */const $a=new Map,Pu=new Map;function ZR(n,e){try{n.container.addComponent(e)}catch(t){ys.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ka(n){const e=n.name;if(Pu.has(e))return ys.debug(`There were multiple attempts to register component ${e}.`),!1;Pu.set(e,n);for(const t of $a.values())ZR(t,n);return!0}function JR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const QR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ki=new J_("app","Firebase",QR);/**
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
 */class eI{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
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
 */const tI=KR;function iv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Lu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ki.create("bad-app-name",{appName:String(s)});if(t||(t=K_()),!t)throw ki.create("no-options");const r=$a.get(s);if(r){if(Cu(t,r.options)&&Cu(i,r.config))return r;throw ki.create("duplicate-app",{appName:s})}const o=new aR(s);for(const l of Pu.values())o.addComponent(l);const a=new eI(t,i,o);return $a.set(s,a),a}function nI(n=Lu){const e=$a.get(n);if(!e&&n===Lu&&K_())return iv();if(!e)throw ki.create("no-app",{appName:n});return e}function sr(n,e,t){var i;let s=(i=YR[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ys.warn(a.join(" "));return}Ka(new Bo(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const iI="firebase-heartbeat-database",sI=1,zo="firebase-heartbeat-store";let Wc=null;function sv(){return Wc||(Wc=yR(iI,sI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(zo)}}}).catch(n=>{throw ki.create("idb-open",{originalErrorMessage:n.message})})),Wc}async function rI(n){try{return await(await sv()).transaction(zo).objectStore(zo).get(rv(n))}catch(e){if(e instanceof Qo)ys.warn(e.message);else{const t=ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ys.warn(t.message)}}}async function sm(n,e){try{const i=(await sv()).transaction(zo,"readwrite");await i.objectStore(zo).put(e,rv(n)),await i.done}catch(t){if(t instanceof Qo)ys.warn(t.message);else{const i=ki.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ys.warn(i.message)}}}function rv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const oI=1024,aI=30*24*60*60*1e3;class lI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=aI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rm(),{heartbeatsToSend:t,unsentEntries:i}=cI(this._heartbeatsCache.heartbeats),s=qa(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function rm(){return new Date().toISOString().substring(0,10)}function cI(n,e=oI){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),om(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),om(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class uI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $1()?K1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function om(n){return qa(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function hI(n){Ka(new Bo("platform-logger",e=>new MR(e),"PRIVATE")),Ka(new Bo("heartbeat",e=>new lI(e),"PRIVATE")),sr(Iu,im,n),sr(Iu,im,"esm2017"),sr("fire-js","")}hI("");var fI="firebase",dI="9.23.0";/**
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
 */sr(fI,dI,"app");const am="@firebase/database",lm="0.14.4";/**
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
 */let ov="";function pI(n){ov=n}/**
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
 */class mI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Lt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Uo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const av=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mI(e)}}catch{}return new gI},cs=av("localStorage"),Du=av("sessionStorage");/**
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
 */const rr=new ev("@firebase/database"),_I=function(){let n=1;return function(){return n++}}(),lv=function(n){const e=iR(n),t=new nR;t.update(e);const i=t.digest();return Ph.encodeByteArray(i)},ea=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ea.apply(null,i):typeof i=="object"?e+=Lt(i):e+=i,e+=" "}return e};let fs=null,cm=!0;const vI=function(n,e){ge(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(rr.logLevel=ct.VERBOSE,fs=rr.log.bind(rr),e&&Du.set("logging_enabled",!0)):typeof n=="function"?fs=n:(fs=null,Du.remove("logging_enabled"))},Nt=function(...n){if(cm===!0&&(cm=!1,fs===null&&Du.get("logging_enabled")===!0&&vI(!0)),fs){const e=ea.apply(null,n);fs(e)}},ta=function(n){return function(...e){Nt(n,...e)}},Nu=function(...n){const e="FIREBASE INTERNAL ERROR: "+ea(...n);rr.error(e)},gi=function(...n){const e=`FIREBASE FATAL ERROR: ${ea(...n)}`;throw rr.error(e),new Error(e)},en=function(...n){const e="FIREBASE WARNING: "+ea(...n);rr.warn(e)},xI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nh=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},yI=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},br="[MIN_NAME]",bs="[MAX_NAME]",As=function(n,e){if(n===e)return 0;if(n===br||e===bs)return-1;if(e===br||n===bs)return 1;{const t=um(n),i=um(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},bI=function(n,e){return n===e?0:n<e?-1:1},Qr=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Lt(e))},Oh=function(n){if(typeof n!="object"||n===null)return Lt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Lt(e[i]),t+=":",t+=Oh(n[e[i]]);return t+="}",t},cv=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ft(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const uv=function(n){ge(!Nh(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},SI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wI(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const EI=new RegExp("^-?(0*)\\d{1,10}$"),TI=-2147483648,CI=2147483647,um=function(n){if(EI.test(n)){const e=Number(n);if(e>=TI&&e<=CI)return e}return null},Or=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw en("Exception was thrown by user callback.",t),e},Math.floor(0))}},AI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class RI{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class II{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}class or{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}or.OWNER="owner";/**
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
 */const Fh="5",hv="v",fv="s",dv="r",pv="f",mv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gv="ls",_v="p",Ou="ac",vv="websocket",xv="long_polling";/**
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
 */class yv{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function LI(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function bv(n,e,t){ge(typeof e=="string","typeof type must == string"),ge(typeof t=="object","typeof params must == object");let i;if(e===vv)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===xv)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LI(n)&&(t.ns=n.namespace);const s=[];return Ft(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class PI{constructor(){this.counters_={}}incrementCounter(e,t=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return k1(this.counters_)}}/**
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
 */const jc={},qc={};function kh(n){const e=n.toString();return jc[e]||(jc[e]=new PI),jc[e]}function DI(n,e){const t=n.toString();return qc[t]||(qc[t]=e()),qc[t]}/**
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
 */class NI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Or(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hm="start",OI="close",FI="pLPCommand",kI="pRTLPCB",Sv="id",Mv="pw",wv="ser",UI="cb",BI="seg",zI="ts",VI="d",HI="dframe",Ev=1870,Tv=30,GI=Ev-Tv,WI=25e3,jI=3e4;class Ks{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ta(e),this.stats_=kh(t),this.urlFn=l=>(this.appCheckToken&&(l[Ou]=this.appCheckToken),bv(t,xv,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new NI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jI)),yI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uh((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hm)this.id=a,this.password=l;else if(o===OI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[hm]="t",i[wv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[UI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[hv]=Fh,this.transportSessionId&&(i[fv]=this.transportSessionId),this.lastSessionId&&(i[gv]=this.lastSessionId),this.applicationId&&(i[_v]=this.applicationId),this.appCheckToken&&(i[Ou]=this.appCheckToken),typeof location<"u"&&location.hostname&&mv.test(location.hostname)&&(i[dv]=pv);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ks.forceAllow_=!0}static forceDisallow(){Ks.forceDisallow_=!0}static isAvailable(){return Ks.forceAllow_?!0:!Ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SI()&&!MI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Lt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=q_(t),s=cv(i,GI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[HI]="t",i[Sv]=e,i[Mv]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Lt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Uh{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_I(),window[FI+this.uniqueCallbackIdentifier]=e,window[kI+this.uniqueCallbackIdentifier]=t,this.myIFrame=Uh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Nt("frame writing exception"),a.stack&&Nt(a.stack),Nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sv]=this.myID,e[Mv]=this.myPW,e[wv]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tv+i.length<=Ev;){const o=this.pendingSegs.shift();i=i+"&"+BI+s+"="+o.seg+"&"+zI+s+"="+o.ts+"&"+VI+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(WI)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const qI=16384,XI=45e3;let Ya=null;typeof MozWebSocket<"u"?Ya=MozWebSocket:typeof WebSocket<"u"&&(Ya=WebSocket);class Cn{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ta(this.connId),this.stats_=kh(t),this.connURL=Cn.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[hv]=Fh,typeof location<"u"&&location.hostname&&mv.test(location.hostname)&&(o[dv]=pv),t&&(o[fv]=t),i&&(o[gv]=i),s&&(o[Ou]=s),r&&(o[_v]=r),bv(e,vv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cs.set("previous_websocket_failure",!0);try{let i;Z_(),this.mySock=new Ya(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ya!==null&&!Cn.forceDisallow_}static previouslyFailed(){return cs.isInMemoryStorage||cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Uo(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ge(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Lt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=cv(t,qI);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XI))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cn.responsesRequiredToBeHealthy=2;Cn.healthyTimeout=3e4;/**
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
 */class Vo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ks,Cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Cn&&Cn.isAvailable();let i=t&&!Cn.previouslyFailed();if(e.webSocketOnly&&(t||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Cn];else{const s=this.transports_=[];for(const r of Vo.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Vo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vo.globalTransportInitialized_=!1;/**
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
 */const $I=6e4,KI=5e3,YI=10*1024,ZI=100*1024,Xc="t",fm="d",JI="s",dm="r",QI="e",pm="o",mm="a",gm="n",_m="p",eL="h";class tL{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ta("c:"+this.id+":"),this.transportManager_=new Vo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=xo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ZI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xc in e){const t=e[Xc];t===mm?this.upgradeIfSecondaryHealthy_():t===dm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===pm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Qr("t",e),i=Qr("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_m,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Qr("t",e),i=Qr("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Qr(Xc,e);if(fm in e){const i=e[fm];if(t===eL){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===gm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===JI?this.onConnectionShutdown_(i):t===dm?this.onReset_(i):t===QI?Nu("Server Error: "+i):t===pm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Fh!==i&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),xo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($I))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_m,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Cv{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Av{constructor(e){this.allowedEvents_=e,this.listeners_={},ge(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){ge(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Za extends Av{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Y_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Za}getInitialEvent(e){return ge(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vm=32,xm=768;class st{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Je(){return new st("")}function ze(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Bi(n){return n.pieces_.length-n.pieceNum_}function ht(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new st(n.pieces_,e)}function Bh(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function nL(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ho(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Rv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new st(e,0)}function pt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof st)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new st(t,0)}function We(n){return n.pieceNum_>=n.pieces_.length}function sn(n,e){const t=ze(n),i=ze(e);if(t===null)return e;if(t===i)return sn(ht(n),ht(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function iL(n,e){const t=Ho(n,0),i=Ho(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=As(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function zh(n,e){if(Bi(n)!==Bi(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function yn(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Bi(n)>Bi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class sL{constructor(e,t){this.errorPrefix_=t,this.parts_=Ho(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Il(this.parts_[i]);Iv(this)}}function rL(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Il(e),Iv(n)}function oL(n){const e=n.parts_.pop();n.byteLength_-=Il(e),n.parts_.length>0&&(n.byteLength_-=1)}function Iv(n){if(n.byteLength_>xm)throw new Error(n.errorPrefix_+"has a key path longer than "+xm+" bytes ("+n.byteLength_+").");if(n.parts_.length>vm)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vm+") or object contains a cycle "+ss(n))}function ss(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Vh extends Av{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Vh}getInitialEvent(e){return ge(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const eo=1e3,aL=60*5*1e3,ym=30*1e3,lL=1.3,cL=3e4,uL="server_kill",bm=3;class pi extends Cv{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pi.nextPersistentConnectionId_++,this.log_=ta("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=eo,this.maxReconnectDelay_=aL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Z_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Za.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Lt(r)),ge(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Jo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),ge(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ge(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;pi.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Yn(e,"w")){const i=yr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||eR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ym)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Q1(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),ge(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Lt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Nu("Unrecognized action received from server: "+Lt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ge(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cL&&(this.reconnectDelay_=eo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+pi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){ge(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new tL(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,d=>{en(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(uL)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&en(h),l())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jp(this.interruptReasons_)&&(this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Oh(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new st(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Nt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bm&&(this.reconnectDelay_=ym,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Nt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ov.replace(/\./g,"-")]=1,Y_()?e["framework.cordova"]=1:X1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Za.getInstance().currentlyOnline();return Jp(this.interruptReasons_)&&e}}pi.nextPersistentConnectionId_=0;pi.nextConnectionId_=0;/**
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
 */class Ve{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ve(e,t)}}/**
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
 */class Ll{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Ve(br,e),s=new Ve(br,t);return this.compare(i,s)!==0}minPost(){return Ve.MIN}}/**
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
 */let Ia;class Lv extends Ll{static get __EMPTY_NODE(){return Ia}static set __EMPTY_NODE(e){Ia=e}compare(e,t){return As(e.name,t.name)}isDefinedOn(e){throw Dr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(bs,Ia)}makePost(e,t){return ge(typeof e=="string","KeyIndex indexValue must always be a string."),new Ve(e,Ia)}toString(){return".key"}}const ar=new Lv;/**
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
 */class La{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class At{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??At.RED,this.left=s??rn.EMPTY_NODE,this.right=r??rn.EMPTY_NODE}copy(e,t,i,s,r){return new At(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return rn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}At.RED=!0;At.BLACK=!1;class hL{copy(e,t,i,s,r){return this}insert(e,t,i){return new At(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rn{constructor(e,t=rn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new rn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,At.BLACK,null,null))}remove(e){return new rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,At.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new La(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new La(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new La(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new La(this.root_,null,this.comparator_,!0,e)}}rn.EMPTY_NODE=new hL;/**
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
 */function fL(n,e){return As(n.name,e.name)}function Hh(n,e){return As(n,e)}/**
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
 */let Fu;function dL(n){Fu=n}const Pv=function(n){return typeof n=="number"?"number:"+uv(n):"string:"+n},Dv=function(n){if(n.isLeafNode()){const e=n.val();ge(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else ge(n===Fu||n.isEmpty(),"priority of unexpected type.");ge(n===Fu||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sm;class Ct{constructor(e,t=Ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ge(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dv(this.priorityNode_)}static set __childrenNodeConstructor(e){Sm=e}static get __childrenNodeConstructor(){return Sm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return We(e)?this:ze(e)===".priority"?this.priorityNode_:Ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ze(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ge(i!==".priority"||Bi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=uv(this.value_):e+=this.value_,this.lazyHash_=lv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ct.__childrenNodeConstructor?-1:(ge(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Ct.VALUE_TYPE_ORDER.indexOf(t),r=Ct.VALUE_TYPE_ORDER.indexOf(i);return ge(s>=0,"Unknown leaf type: "+t),ge(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nv,Ov;function pL(n){Nv=n}function mL(n){Ov=n}class gL extends Ll{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?As(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(bs,new Ct("[PRIORITY-POST]",Ov))}makePost(e,t){const i=Nv(e);return new Ve(t,new Ct("[PRIORITY-POST]",i))}toString(){return".priority"}}const mt=new gL;/**
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
 */const _L=Math.log(2);class vL{constructor(e){const t=r=>parseInt(Math.log(r)/_L,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ja=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=n[l],f=t?t(h):h,new At(f,h.node,At.BLACK,null,null);{const d=parseInt(u/2,10)+l,g=s(l,d),p=s(d+1,c);return h=n[d],f=t?t(h):h,new At(f,h.node,At.BLACK,g,p)}},r=function(l){let c=null,u=null,h=n.length;const f=function(g,p){const m=h-g,_=h;h-=g;const S=s(m+1,_),v=n[m],y=t?t(v):v;d(new At(y,v.node,p,null,S))},d=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const p=l.nextBitIsOne(),m=Math.pow(2,l.count-(g+1));p?f(m,At.BLACK):(f(m,At.BLACK),f(m,At.RED))}return u},o=new vL(n.length),a=r(o);return new rn(i||e,a)};/**
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
 */let $c;const Ws={};class fi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ge(Ws&&mt,"ChildrenNode.ts has not been loaded"),$c=$c||new fi({".priority":Ws},{".priority":mt}),$c}get(e){const t=yr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof rn?t:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,t){ge(e!==ar,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(Ve.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ja(i,e.getCompare()):a=Ws;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new fi(u,c)}addToIndexes(e,t){const i=Xa(this.indexes_,(s,r)=>{const o=yr(this.indexSet_,r);if(ge(o,"Missing index implementation for "+r),s===Ws)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Ve.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ja(a,o.getCompare())}else return Ws;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new Ve(e.name,a))),l.insert(e,e.node)}});return new fi(i,this.indexSet_)}removeFromIndexes(e,t){const i=Xa(this.indexes_,s=>{if(s===Ws)return s;{const r=t.get(e.name);return r?s.remove(new Ve(e.name,r)):s}});return new fi(i,this.indexSet_)}}/**
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
 */let to;class Pe{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Dv(this.priorityNode_),this.children_.isEmpty()&&ge(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return to||(to=new Pe(new rn(Hh),null,fi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||to}updatePriority(e){return this.children_.isEmpty()?this:new Pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?to:t}}getChild(e){const t=ze(e);return t===null?this:this.getImmediateChild(t).getChild(ht(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ge(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Ve(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?to:this.priorityNode_;return new Pe(s,o,r)}}updateChild(e,t){const i=ze(e);if(i===null)return t;{ge(ze(e)!==".priority"||Bi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ht(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(mt,(o,a)=>{t[o]=a.val(e),i++,r&&Pe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pv(this.getPriority().val())+":"),this.forEachChild(mt,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":lv(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Ve(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ve(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ve(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ve.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ve.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===na?-1:0}withIndex(e){if(e===ar||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Pe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ar||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(mt),s=t.getIterator(mt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ar?null:this.indexMap_.get(e.toString())}}Pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xL extends Pe{constructor(){super(new rn(Hh),Pe.EMPTY_NODE,fi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Pe.EMPTY_NODE}isEmpty(){return!1}}const na=new xL;Object.defineProperties(Ve,{MIN:{value:new Ve(br,Pe.EMPTY_NODE)},MAX:{value:new Ve(bs,na)}});Lv.__EMPTY_NODE=Pe.EMPTY_NODE;Ct.__childrenNodeConstructor=Pe;dL(na);mL(na);/**
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
 */const yL=!0;function It(n,e=null){if(n===null)return Pe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ge(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ct(t,It(e))}if(!(n instanceof Array)&&yL){const t=[];let i=!1;if(Ft(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=It(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new Ve(o,l)))}}),t.length===0)return Pe.EMPTY_NODE;const r=Ja(t,fL,o=>o.name,Hh);if(i){const o=Ja(t,mt.getCompare());return new Pe(r,It(e),new fi({".priority":o},{".priority":mt}))}else return new Pe(r,It(e),fi.Default)}else{let t=Pe.EMPTY_NODE;return Ft(n,(i,s)=>{if(Yn(n,i)&&i.substring(0,1)!=="."){const r=It(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(It(e))}}pL(It);/**
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
 */class bL extends Ll{constructor(e){super(),this.indexPath_=e,ge(!We(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?As(e.name,t.name):r}makePost(e,t){const i=It(e),s=Pe.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ve(t,s)}maxPost(){const e=Pe.EMPTY_NODE.updateChild(this.indexPath_,na);return new Ve(bs,e)}toString(){return Ho(this.indexPath_,0).join("/")}}/**
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
 */class SL extends Ll{compare(e,t){const i=e.node.compareTo(t.node);return i===0?As(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(e,t){const i=It(e);return new Ve(t,i)}toString(){return".value"}}const ML=new SL;/**
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
 */function Fv(n){return{type:"value",snapshotNode:n}}function Sr(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Go(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Wo(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function wL(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Gh{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){ge(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Go(t,a)):ge(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Sr(t,i)):o.trackChildChange(Wo(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(mt,(s,r)=>{t.hasChild(s)||i.trackChildChange(Go(s,r))}),t.isLeafNode()||t.forEachChild(mt,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Wo(s,r,o))}else i.trackChildChange(Sr(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Pe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class jo{constructor(e){this.indexedFilter_=new Gh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=jo.getStartPost_(e),this.endPost_=jo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new Ve(t,i))||(i=Pe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=Pe.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Pe.EMPTY_NODE);const r=this;return t.forEachChild(mt,(o,a)=>{r.matches(new Ve(o,a))||(s=s.updateImmediateChild(o,Pe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class EL{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new jo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new Ve(t,i))||(i=Pe.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=Pe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Pe.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Pe.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Pe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const a=e;ge(a.numChildren()===this.limit_,"");const l=new Ve(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,l);if(u&&!i.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(Wo(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Go(t,h));const p=a.updateImmediateChild(t,Pe.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Sr(f.name,f.node)),p.updateImmediateChild(f.name,f.node)):p}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Go(c.name,c.node)),r.trackChildChange(Sr(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,Pe.EMPTY_NODE)):e}}/**
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
 */class Wh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ge(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ge(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:br}hasEnd(){return this.endSet_}getIndexEndValue(){return ge(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ge(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ge(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new Wh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TL(n){return n.loadsAllData()?new Gh(n.getIndex()):n.hasLimit()?new EL(n):new jo(n)}function Mm(n){const e={};if(n.isDefault())return e;let t;if(n.index_===mt?t="$priority":n.index_===ML?t="$value":n.index_===ar?t="$key":(ge(n.index_ instanceof bL,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Lt(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Lt(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Lt(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Lt(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Lt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function wm(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==mt&&(e.i=n.index_.toString()),e}/**
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
 */class Qa extends Cv{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ta("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ge(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qa.getListenId_(e,i),a={};this.listens_[o]=a;const l=Mm(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),yr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const i=Qa.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Mm(e._queryParams),i=e._path.toString(),s=new Jo;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tR(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Uo(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class CL{constructor(){this.rootNode_=Pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function el(){return{value:null,children:new Map}}function kv(n,e,t){if(We(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=ze(e);n.children.has(i)||n.children.set(i,el());const s=n.children.get(i);e=ht(e),kv(s,e,t)}}function ku(n,e,t){n.value!==null?t(e,n.value):AL(n,(i,s)=>{const r=new st(e.toString()+"/"+i);ku(s,r,t)})}function AL(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class RL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ft(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const Em=10*1e3,IL=30*1e3,LL=5*60*1e3;class PL{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new RL(e);const i=Em+(IL-Em)*Math.random();xo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ft(e,(s,r)=>{r>0&&Yn(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),xo(this.reportStats_.bind(this),Math.floor(Math.random()*2*LL))}}/**
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
 */var Rn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function jh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xh(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class tl{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Rn.ACK_USER_WRITE,this.source=jh()}operationForChild(e){if(We(this.path)){if(this.affectedTree.value!=null)return ge(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new st(e));return new tl(Je(),t,this.revert)}}else return ge(ze(this.path)===e,"operationForChild called for unrelated child."),new tl(ht(this.path),this.affectedTree,this.revert)}}/**
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
 */class qo{constructor(e,t){this.source=e,this.path=t,this.type=Rn.LISTEN_COMPLETE}operationForChild(e){return We(this.path)?new qo(this.source,Je()):new qo(this.source,ht(this.path))}}/**
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
 */class Ss{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Rn.OVERWRITE}operationForChild(e){return We(this.path)?new Ss(this.source,Je(),this.snap.getImmediateChild(e)):new Ss(this.source,ht(this.path),this.snap)}}/**
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
 */class Mr{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Rn.MERGE}operationForChild(e){if(We(this.path)){const t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new Ss(this.source,Je(),t.value):new Mr(this.source,Je(),t)}else return ge(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mr(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ms{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(We(e))return this.isFullyInitialized()&&!this.filtered_;const t=ze(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class DL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NL(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wL(o.childName,o.snapshotNode))}),no(n,s,"child_removed",e,i,t),no(n,s,"child_added",e,i,t),no(n,s,"child_moved",r,i,t),no(n,s,"child_changed",e,i,t),no(n,s,"value",e,i,t),s}function no(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>FL(n,a,l)),o.forEach(a=>{const l=OL(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function OL(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function FL(n,e,t){if(e.childName==null||t.childName==null)throw Dr("Should only compare child_ events.");const i=new Ve(e.childName,e.snapshotNode),s=new Ve(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Pl(n,e){return{eventCache:n,serverCache:e}}function yo(n,e,t,i){return Pl(new Ms(e,t,i),n.serverCache)}function Uv(n,e,t,i){return Pl(n.eventCache,new Ms(e,t,i))}function Uu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ws(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Kc;const kL=()=>(Kc||(Kc=new rn(bI)),Kc);class lt{constructor(e,t=kL()){this.value=e,this.children=t}static fromObject(e){let t=new lt(null);return Ft(e,(i,s)=>{t=t.set(new st(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Je(),value:this.value};if(We(e))return null;{const i=ze(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ht(e),t);return r!=null?{path:pt(new st(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(We(e))return this;{const t=ze(e),i=this.children.get(t);return i!==null?i.subtree(ht(e)):new lt(null)}}set(e,t){if(We(e))return new lt(t,this.children);{const i=ze(e),r=(this.children.get(i)||new lt(null)).set(ht(e),t),o=this.children.insert(i,r);return new lt(this.value,o)}}remove(e){if(We(e))return this.children.isEmpty()?new lt(null):new lt(null,this.children);{const t=ze(e),i=this.children.get(t);if(i){const s=i.remove(ht(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new lt(null):new lt(this.value,r)}else return this}}get(e){if(We(e))return this.value;{const t=ze(e),i=this.children.get(t);return i?i.get(ht(e)):null}}setTree(e,t){if(We(e))return t;{const i=ze(e),r=(this.children.get(i)||new lt(null)).setTree(ht(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new lt(this.value,o)}}fold(e){return this.fold_(Je(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(pt(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Je(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(We(e))return null;{const r=ze(e),o=this.children.get(r);return o?o.findOnPath_(ht(e),pt(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Je(),t)}foreachOnPath_(e,t,i){if(We(e))return this;{this.value&&i(t,this.value);const s=ze(e),r=this.children.get(s);return r?r.foreachOnPath_(ht(e),pt(t,s),i):new lt(null)}}foreach(e){this.foreach_(Je(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(pt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Nn{constructor(e){this.writeTree_=e}static empty(){return new Nn(new lt(null))}}function bo(n,e,t){if(We(e))return new Nn(new lt(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=sn(s,e);return r=r.updateChild(o,t),new Nn(n.writeTree_.set(s,r))}else{const s=new lt(t),r=n.writeTree_.setTree(e,s);return new Nn(r)}}}function Bu(n,e,t){let i=n;return Ft(t,(s,r)=>{i=bo(i,pt(e,s),r)}),i}function Tm(n,e){if(We(e))return Nn.empty();{const t=n.writeTree_.setTree(e,new lt(null));return new Nn(t)}}function zu(n,e){return Rs(n,e)!=null}function Rs(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(sn(t.path,e)):null}function Cm(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(mt,(i,s)=>{e.push(new Ve(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Ve(i,s.value))}),e}function Ui(n,e){if(We(e))return n;{const t=Rs(n,e);return t!=null?new Nn(new lt(t)):new Nn(n.writeTree_.subtree(e))}}function Vu(n){return n.writeTree_.isEmpty()}function wr(n,e){return Bv(Je(),n.writeTree_,e)}function Bv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(ge(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Bv(pt(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(pt(n,".priority"),i)),t}}/**
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
 */function $h(n,e){return Gv(e,n)}function UL(n,e,t,i,s){ge(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=bo(n.visibleWrites,e,t)),n.lastWriteId=i}function BL(n,e,t,i){ge(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Bu(n.visibleWrites,e,t),n.lastWriteId=i}function zL(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function VL(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);ge(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&HL(a,i.path)?s=!1:yn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return GL(n),!0;if(i.snap)n.visibleWrites=Tm(n.visibleWrites,i.path);else{const a=i.children;Ft(a,l=>{n.visibleWrites=Tm(n.visibleWrites,pt(i.path,l))})}return!0}else return!1}function HL(n,e){if(n.snap)return yn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&yn(pt(n.path,t),e))return!0;return!1}function GL(n){n.visibleWrites=zv(n.allWrites,WL,Je()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function WL(n){return n.visible}function zv(n,e,t){let i=Nn.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)yn(t,o)?(a=sn(t,o),i=bo(i,a,r.snap)):yn(o,t)&&(a=sn(o,t),i=bo(i,Je(),r.snap.getChild(a)));else if(r.children){if(yn(t,o))a=sn(t,o),i=Bu(i,a,r.children);else if(yn(o,t))if(a=sn(o,t),We(a))i=Bu(i,Je(),r.children);else{const l=yr(r.children,ze(a));if(l){const c=l.getChild(ht(a));i=bo(i,Je(),c)}}}else throw Dr("WriteRecord should have .snap or .children")}}return i}function Vv(n,e,t,i,s){if(!i&&!s){const r=Rs(n.visibleWrites,e);if(r!=null)return r;{const o=Ui(n.visibleWrites,e);if(Vu(o))return t;if(t==null&&!zu(o,Je()))return null;{const a=t||Pe.EMPTY_NODE;return wr(o,a)}}}else{const r=Ui(n.visibleWrites,e);if(!s&&Vu(r))return t;if(!s&&t==null&&!zu(r,Je()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(yn(c.path,e)||yn(e,c.path))},a=zv(n.allWrites,o,e),l=t||Pe.EMPTY_NODE;return wr(a,l)}}}function jL(n,e,t){let i=Pe.EMPTY_NODE;const s=Rs(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(mt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ui(n.visibleWrites,e);return t.forEachChild(mt,(o,a)=>{const l=wr(Ui(r,new st(o)),a);i=i.updateImmediateChild(o,l)}),Cm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ui(n.visibleWrites,e);return Cm(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function qL(n,e,t,i,s){ge(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=pt(e,t);if(zu(n.visibleWrites,r))return null;{const o=Ui(n.visibleWrites,r);return Vu(o)?s.getChild(t):wr(o,s.getChild(t))}}function XL(n,e,t,i){const s=pt(e,t),r=Rs(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ui(n.visibleWrites,s);return wr(o,i.getNode().getImmediateChild(t))}else return null}function $L(n,e){return Rs(n.visibleWrites,e)}function KL(n,e,t,i,s,r,o){let a;const l=Ui(n.visibleWrites,e),c=Rs(l,Je());if(c!=null)a=c;else if(t!=null)a=wr(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function YL(){return{visibleWrites:Nn.empty(),allWrites:[],lastWriteId:-1}}function nl(n,e,t,i){return Vv(n.writeTree,n.treePath,e,t,i)}function Kh(n,e){return jL(n.writeTree,n.treePath,e)}function Am(n,e,t,i){return qL(n.writeTree,n.treePath,e,t,i)}function il(n,e){return $L(n.writeTree,pt(n.treePath,e))}function ZL(n,e,t,i,s,r){return KL(n.writeTree,n.treePath,e,t,i,s,r)}function Yh(n,e,t){return XL(n.writeTree,n.treePath,e,t)}function Hv(n,e){return Gv(pt(n.treePath,e),n.writeTree)}function Gv(n,e){return{treePath:n,writeTree:e}}/**
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
 */class JL{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ge(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ge(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Wo(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Go(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Sr(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Wo(i,e.snapshotNode,s.oldSnap));else throw Dr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class QL{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Wv=new QL;class Zh{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ms(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yh(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ws(this.viewCache_),r=ZL(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function eP(n){return{filter:n}}function tP(n,e){ge(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ge(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function nP(n,e,t,i,s){const r=new JL;let o,a;if(t.type===Rn.OVERWRITE){const c=t;c.source.fromUser?o=Hu(n,e,c.path,c.snap,i,s,r):(ge(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!We(c.path),o=sl(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Rn.MERGE){const c=t;c.source.fromUser?o=sP(n,e,c.path,c.children,i,s,r):(ge(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Gu(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Rn.ACK_USER_WRITE){const c=t;c.revert?o=aP(n,e,c.path,i,s,r):o=rP(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Rn.LISTEN_COMPLETE)o=oP(n,e,t.path,i,r);else throw Dr("Unknown operation type: "+t.type);const l=r.getChanges();return iP(e,o,l),{viewCache:o,changes:l}}function iP(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Uu(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Fv(Uu(e)))}}function jv(n,e,t,i,s,r){const o=e.eventCache;if(il(i,t)!=null)return e;{let a,l;if(We(t))if(ge(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ws(e),u=c instanceof Pe?c:Pe.EMPTY_NODE,h=Kh(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=nl(i,ws(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ze(t);if(c===".priority"){ge(Bi(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Am(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=ht(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Am(i,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Yh(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return yo(e,a,o.isFullyInitialized()||We(t),n.filter.filtersNodes())}}function sl(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(We(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ze(t);if(!l.isCompleteForPath(t)&&Bi(t)>1)return e;const g=ht(t),m=l.getNode().getImmediateChild(d).updateChild(g,i);d===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),d,m,g,Wv,null)}const h=Uv(e,c,l.isFullyInitialized()||We(t),u.filtersNodes()),f=new Zh(s,h,r);return jv(n,h,t,s,f,a)}function Hu(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Zh(s,e,r);if(We(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=yo(e,c,!0,n.filter.filtersNodes());else{const h=ze(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=yo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ht(t),d=a.getNode().getImmediateChild(h);let g;if(We(f))g=i;else{const p=u.getCompleteChild(h);p!=null?Bh(f)===".priority"&&p.getChild(Rv(f)).isEmpty()?g=p:g=p.updateChild(f,i):g=Pe.EMPTY_NODE}if(d.equals(g))l=e;else{const p=n.filter.updateChild(a.getNode(),h,g,f,u,o);l=yo(e,p,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Rm(n,e){return n.eventCache.isCompleteForChild(e)}function sP(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=pt(t,l);Rm(e,ze(u))&&(a=Hu(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=pt(t,l);Rm(e,ze(u))||(a=Hu(n,a,u,c,s,r,o))}),a}function Im(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Gu(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;We(t)?c=i:c=new lt(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=Im(n,d,f);l=sl(n,l,new st(h),g,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),p=Im(n,g,f);l=sl(n,l,new st(h),p,s,r,o,a)}}),l}function rP(n,e,t,i,s,r,o){if(il(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(We(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return sl(n,e,t,l.getNode().getChild(t),s,r,a,o);if(We(t)){let c=new lt(null);return l.getNode().forEachChild(ar,(u,h)=>{c=c.set(new st(u),h)}),Gu(n,e,t,c,s,r,a,o)}else return e}else{let c=new lt(null);return i.foreach((u,h)=>{const f=pt(t,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Gu(n,e,t,c,s,r,a,o)}}function oP(n,e,t,i,s){const r=e.serverCache,o=Uv(e,r.getNode(),r.isFullyInitialized()||We(t),r.isFiltered());return jv(n,o,t,i,Wv,s)}function aP(n,e,t,i,s,r){let o;if(il(i,t)!=null)return e;{const a=new Zh(i,e,s),l=e.eventCache.getNode();let c;if(We(t)||ze(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=nl(i,ws(e));else{const h=e.serverCache.getNode();ge(h instanceof Pe,"serverChildren would be complete if leaf node"),u=Kh(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=ze(t);let h=Yh(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,ht(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,Pe.EMPTY_NODE,ht(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nl(i,ws(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||il(i,Je())!=null,yo(e,c,o,n.filter.filtersNodes())}}/**
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
 */class lP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Gh(i.getIndex()),r=TL(i);this.processor_=eP(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Pe.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Pe.EMPTY_NODE,a.getNode(),null),u=new Ms(l,o.isFullyInitialized(),s.filtersNodes()),h=new Ms(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Pl(h,u),this.eventGenerator_=new DL(this.query_)}get query(){return this.query_}}function cP(n){return n.viewCache_.serverCache.getNode()}function uP(n,e){const t=ws(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!We(e)&&!t.getImmediateChild(ze(e)).isEmpty())?t.getChild(e):null}function Lm(n){return n.eventRegistrations_.length===0}function hP(n,e){n.eventRegistrations_.push(e)}function Pm(n,e,t){const i=[];if(t){ge(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Dm(n,e,t,i){e.type===Rn.MERGE&&e.source.queryId!==null&&(ge(ws(n.viewCache_),"We should always have a full cache before handling merges"),ge(Uu(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=nP(n.processor_,s,e,t,i);return tP(n.processor_,r.viewCache),ge(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,qv(n,r.changes,r.viewCache.eventCache.getNode(),null)}function fP(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(mt,(r,o)=>{i.push(Sr(r,o))}),t.isFullyInitialized()&&i.push(Fv(t.getNode())),qv(n,i,t.getNode(),e)}function qv(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return NL(n.eventGenerator_,e,t,s)}/**
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
 */let rl;class dP{constructor(){this.views=new Map}}function pP(n){ge(!rl,"__referenceConstructor has already been defined"),rl=n}function mP(){return ge(rl,"Reference.ts has not been loaded"),rl}function gP(n){return n.views.size===0}function Jh(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return ge(r!=null,"SyncTree gave us an op for an invalid query."),Dm(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Dm(o,e,t,i));return r}}function _P(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=nl(t,s?i:null),l=!1;a?l=!0:i instanceof Pe?(a=Kh(t,i),l=!1):(a=Pe.EMPTY_NODE,l=!1);const c=Pl(new Ms(a,l,!1),new Ms(i,s,!1));return new lP(e,c)}return o}function vP(n,e,t,i,s,r){const o=_P(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),hP(o,t),fP(o,t)}function xP(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=zi(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Pm(c,t,i)),Lm(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Pm(l,t,i)),Lm(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!zi(n)&&r.push(new(mP())(e._repo,e._path)),{removed:r,events:o}}function Xv(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function lr(n,e){let t=null;for(const i of n.views.values())t=t||uP(i,e);return t}function $v(n,e){if(e._queryParams.loadsAllData())return Dl(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Kv(n,e){return $v(n,e)!=null}function zi(n){return Dl(n)!=null}function Dl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ol;function yP(n){ge(!ol,"__referenceConstructor has already been defined"),ol=n}function bP(){return ge(ol,"Reference.ts has not been loaded"),ol}let SP=1;class Nm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new lt(null),this.pendingWriteTree_=YL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yv(n,e,t,i,s){return UL(n.pendingWriteTree_,e,t,i,s),s?Fr(n,new Ss(jh(),e,t)):[]}function MP(n,e,t,i){BL(n.pendingWriteTree_,e,t,i);const s=lt.fromObject(t);return Fr(n,new Mr(jh(),e,s))}function Di(n,e,t=!1){const i=zL(n.pendingWriteTree_,e);if(VL(n.pendingWriteTree_,e)){let r=new lt(null);return i.snap!=null?r=r.set(Je(),!0):Ft(i.children,o=>{r=r.set(new st(o),!0)}),Fr(n,new tl(i.path,r,t))}else return[]}function Nl(n,e,t){return Fr(n,new Ss(qh(),e,t))}function wP(n,e,t){const i=lt.fromObject(t);return Fr(n,new Mr(qh(),e,i))}function EP(n,e){return Fr(n,new qo(qh(),e))}function TP(n,e,t){const i=ef(n,t);if(i){const s=tf(i),r=s.path,o=s.queryId,a=sn(r,e),l=new qo(Xh(o),a);return nf(n,r,l)}else return[]}function Wu(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Kv(o,e))){const l=xP(o,e,t,i);gP(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,d)=>zi(d));if(u&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const d=RP(f);for(let g=0;g<d.length;++g){const p=d[g],m=p.query,_=Qv(n,p);n.listenProvider_.startListening(So(m),al(n,m),_.hashFn,_.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(So(e),null):c.forEach(f=>{const d=n.queryToTagMap.get(Ol(f));n.listenProvider_.stopListening(So(f),d)}))}IP(n,c)}return a}function CP(n,e,t,i){const s=ef(n,i);if(s!=null){const r=tf(s),o=r.path,a=r.queryId,l=sn(o,e),c=new Ss(Xh(a),l,t);return nf(n,o,c)}else return[]}function AP(n,e,t,i){const s=ef(n,i);if(s){const r=tf(s),o=r.path,a=r.queryId,l=sn(o,e),c=lt.fromObject(t),u=new Mr(Xh(a),l,c);return nf(n,o,u)}else return[]}function Om(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,d)=>{const g=sn(f,s);r=r||lr(d,g),o=o||zi(d)});let a=n.syncPointTree_.get(s);a?(o=o||zi(a),r=r||lr(a,Je())):(a=new dP,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=Pe.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((d,g)=>{const p=lr(g,Je());p&&(r=r.updateImmediateChild(d,p))}));const c=Kv(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ol(e);ge(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const d=LP();n.queryToTagMap.set(f,d),n.tagToQueryMap.set(d,f)}const u=$h(n.pendingWriteTree_,s);let h=vP(a,e,t,u,r,l);if(!c&&!o&&!i){const f=$v(a,e);h=h.concat(PP(n,e,f))}return h}function Qh(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=sn(o,e),c=lr(a,l);if(c)return c});return Vv(s,e,r,t,!0)}function Fr(n,e){return Zv(e,n.syncPointTree_,null,$h(n.pendingWriteTree_,Je()))}function Zv(n,e,t,i){if(We(n.path))return Jv(n,e,t,i);{const s=e.get(Je());t==null&&s!=null&&(t=lr(s,Je()));let r=[];const o=ze(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Hv(i,o);r=r.concat(Zv(a,l,c,u))}return s&&(r=r.concat(Jh(s,n,i,t))),r}}function Jv(n,e,t,i){const s=e.get(Je());t==null&&s!=null&&(t=lr(s,Je()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Hv(i,o),u=n.operationForChild(o);u&&(r=r.concat(Jv(u,a,l,c)))}),s&&(r=r.concat(Jh(s,n,i,t))),r}function Qv(n,e){const t=e.query,i=al(n,t);return{hashFn:()=>(cP(e)||Pe.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?TP(n,t._path,i):EP(n,t._path);{const r=wI(s,t);return Wu(n,t,null,r)}}}}function al(n,e){const t=Ol(e);return n.queryToTagMap.get(t)}function Ol(n){return n._path.toString()+"$"+n._queryIdentifier}function ef(n,e){return n.tagToQueryMap.get(e)}function tf(n){const e=n.indexOf("$");return ge(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new st(n.substr(0,e))}}function nf(n,e,t){const i=n.syncPointTree_.get(e);ge(i,"Missing sync point for query tag that we're tracking");const s=$h(n.pendingWriteTree_,e);return Jh(i,t,s,null)}function RP(n){return n.fold((e,t,i)=>{if(t&&zi(t))return[Dl(t)];{let s=[];return t&&(s=Xv(t)),Ft(i,(r,o)=>{s=s.concat(o)}),s}})}function So(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(bP())(n._repo,n._path):n}function IP(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Ol(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function LP(){return SP++}function PP(n,e,t){const i=e._path,s=al(n,e),r=Qv(n,t),o=n.listenProvider_.startListening(So(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)ge(!zi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!We(c)&&u&&zi(u))return[Dl(u).query];{let f=[];return u&&(f=f.concat(Xv(u).map(d=>d.query))),Ft(h,(d,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(So(u),al(n,u))}}return o}/**
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
 */class sf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new sf(t)}node(){return this.node_}}class rf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=pt(this.path_,e);return new rf(this.syncTree_,t)}node(){return Qh(this.syncTree_,this.path_)}}const DP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fm=function(n,e,t){if(!n||typeof n!="object")return n;if(ge(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return NP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return OP(n[".sv"],e);ge(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},NP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ge(!1,"Unexpected server value: "+n)}},OP=function(n,e,t){n.hasOwnProperty("increment")||ge(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ge(!1,"Unexpected increment value: "+i);const s=e.node();if(ge(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},e0=function(n,e,t,i){return of(e,new rf(t,n),i)},t0=function(n,e,t){return of(n,new sf(e),t)};function of(n,e,t){const i=n.getPriority().val(),s=Fm(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Fm(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Ct(a,It(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ct(s))),o.forEachChild(mt,(a,l)=>{const c=of(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class af{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function lf(n,e){let t=e instanceof st?e:new st(e),i=n,s=ze(t);for(;s!==null;){const r=yr(i.node.children,s)||{children:{},childCount:0};i=new af(s,i,r),t=ht(t),s=ze(t)}return i}function kr(n){return n.node.value}function n0(n,e){n.node.value=e,ju(n)}function i0(n){return n.node.childCount>0}function FP(n){return kr(n)===void 0&&!i0(n)}function Fl(n,e){Ft(n.node.children,(t,i)=>{e(new af(t,n,i))})}function s0(n,e,t,i){t&&!i&&e(n),Fl(n,s=>{s0(s,e,!0,i)}),t&&i&&e(n)}function kP(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ia(n){return new st(n.parent===null?n.name:ia(n.parent)+"/"+n.name)}function ju(n){n.parent!==null&&UP(n.parent,n.name,n)}function UP(n,e,t){const i=FP(t),s=Yn(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ju(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ju(n))}/**
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
 */const BP=/[\[\].#$\/\u0000-\u001F\u007F]/,zP=/[\[\].#$\u0000-\u001F\u007F]/,Yc=10*1024*1024,cf=function(n){return typeof n=="string"&&n.length!==0&&!BP.test(n)},r0=function(n){return typeof n=="string"&&n.length!==0&&!zP.test(n)},VP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),r0(n)},HP=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Nh(n)||n&&typeof n=="object"&&Yn(n,".sv")},o0=function(n,e,t,i){i&&e===void 0||kl(Rl(n,"value"),e,t)},kl=function(n,e,t){const i=t instanceof st?new sL(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ss(i));if(typeof e=="function")throw new Error(n+"contains a function "+ss(i)+" with contents = "+e.toString());if(Nh(e))throw new Error(n+"contains "+e.toString()+" "+ss(i));if(typeof e=="string"&&e.length>Yc/3&&Il(e)>Yc)throw new Error(n+"contains a string greater than "+Yc+" utf8 bytes "+ss(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ft(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!cf(o)))throw new Error(n+" contains an invalid key ("+o+") "+ss(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rL(i,o),kl(n,a,i),oL(i)}),s&&r)throw new Error(n+' contains ".value" child '+ss(i)+" in addition to actual children.")}},GP=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Ho(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!cf(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iL);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&yn(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},WP=function(n,e,t,i){if(i&&e===void 0)return;const s=Rl(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Ft(e,(o,a)=>{const l=new st(o);if(kl(s,a,pt(t,l)),Bh(l)===".priority"&&!HP(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),GP(s,r)},a0=function(n,e,t,i){if(!(i&&t===void 0)&&!r0(t))throw new Error(Rl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jP=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),a0(n,e,t,i)},l0=function(n,e){if(ze(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},qP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!VP(t))throw new Error(Rl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class XP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ul(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!zh(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function c0(n,e,t){Ul(n,t),u0(n,i=>zh(i,e))}function Fn(n,e,t){Ul(n,t),u0(n,i=>yn(i,e)||yn(e,i))}function u0(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?($P(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function $P(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();fs&&Nt("event: "+t.toString()),Or(i)}}}/**
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
 */const KP="repo_interrupt",YP=25;class ZP{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new XP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=el(),this.transactionQueueTree_=new af,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JP(n,e,t){if(n.stats_=kh(n.repoInfo_),n.forceRestClient_||AI())n.server_=new Qa(n.repoInfo_,(i,s,r,o)=>{km(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Um(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Lt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new pi(n.repoInfo_,e,(i,s,r,o)=>{km(n,i,s,r,o)},i=>{Um(n,i)},i=>{QP(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=DI(n.repoInfo_,()=>new PL(n.stats_,n.server_)),n.infoData_=new CL,n.infoSyncTree_=new Nm({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Nl(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),uf(n,"connected",!1),n.serverSyncTree_=new Nm({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Fn(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function h0(n){const t=n.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Bl(n){return DP({timestamp:h0(n)})}function km(n,e,t,i,s){n.dataUpdateCount++;const r=new st(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Xa(t,c=>It(c));o=AP(n.serverSyncTree_,r,l,s)}else{const l=It(t);o=CP(n.serverSyncTree_,r,l,s)}else if(i){const l=Xa(t,c=>It(c));o=wP(n.serverSyncTree_,r,l)}else{const l=It(t);o=Nl(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Er(n,r)),Fn(n.eventQueue_,a,o)}function Um(n,e){uf(n,"connected",e),e===!1&&nD(n)}function QP(n,e){Ft(e,(t,i)=>{uf(n,t,i)})}function uf(n,e,t){const i=new st("/.info/"+e),s=It(t);n.infoData_.updateSnapshot(i,s);const r=Nl(n.infoSyncTree_,i,s);Fn(n.eventQueue_,i,r)}function hf(n){return n.nextWriteId_++}function eD(n,e,t,i,s){zl(n,"set",{path:e.toString(),value:t,priority:i});const r=Bl(n),o=It(t,i),a=Qh(n.serverSyncTree_,e),l=t0(o,a,r),c=hf(n),u=Yv(n.serverSyncTree_,e,l,c,!0);Ul(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,d)=>{const g=f==="ok";g||en("set at "+e+" failed: "+f);const p=Di(n.serverSyncTree_,c,!g);Fn(n.eventQueue_,e,p),qu(n,s,f,d)});const h=df(n,e);Er(n,h),Fn(n.eventQueue_,h,[])}function tD(n,e,t,i){zl(n,"update",{path:e.toString(),value:t});let s=!0;const r=Bl(n),o={};if(Ft(t,(a,l)=>{s=!1,o[a]=e0(pt(e,a),It(l),n.serverSyncTree_,r)}),s)Nt("update() called with empty data.  Don't do anything."),qu(n,i,"ok",void 0);else{const a=hf(n),l=MP(n.serverSyncTree_,e,o,a);Ul(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const h=c==="ok";h||en("update at "+e+" failed: "+c);const f=Di(n.serverSyncTree_,a,!h),d=f.length>0?Er(n,e):e;Fn(n.eventQueue_,d,f),qu(n,i,c,u)}),Ft(t,c=>{const u=df(n,pt(e,c));Er(n,u)}),Fn(n.eventQueue_,e,[])}}function nD(n){zl(n,"onDisconnectEvents");const e=Bl(n),t=el();ku(n.onDisconnect_,Je(),(s,r)=>{const o=e0(s,r,n.serverSyncTree_,e);kv(t,s,o)});let i=[];ku(t,Je(),(s,r)=>{i=i.concat(Nl(n.serverSyncTree_,s,r));const o=df(n,s);Er(n,o)}),n.onDisconnect_=el(),Fn(n.eventQueue_,Je(),i)}function iD(n,e,t){let i;ze(e._path)===".info"?i=Om(n.infoSyncTree_,e,t):i=Om(n.serverSyncTree_,e,t),c0(n.eventQueue_,e._path,i)}function Bm(n,e,t){let i;ze(e._path)===".info"?i=Wu(n.infoSyncTree_,e,t):i=Wu(n.serverSyncTree_,e,t),c0(n.eventQueue_,e._path,i)}function sD(n){n.persistentConnection_&&n.persistentConnection_.interrupt(KP)}function zl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Nt(t,...e)}function qu(n,e,t,i){e&&Or(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function f0(n,e,t){return Qh(n.serverSyncTree_,e,t)||Pe.EMPTY_NODE}function ff(n,e=n.transactionQueueTree_){if(e||Vl(n,e),kr(e)){const t=p0(n,e);ge(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&rD(n,ia(e),t)}else i0(e)&&Fl(e,t=>{ff(n,t)})}function rD(n,e,t){const i=t.map(c=>c.currentWriteId),s=f0(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];ge(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=sn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{zl(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Di(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Vl(n,lf(n.transactionQueueTree_,e)),ff(n,n.transactionQueueTree_),Fn(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)Or(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{en("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Er(n,e)}},o)}function Er(n,e){const t=d0(n,e),i=ia(t),s=p0(n,t);return oD(n,s,i),i}function oD(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=sn(t,l.path);let u=!1,h;if(ge(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Di(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YP)u=!0,h="maxretry",s=s.concat(Di(n.serverSyncTree_,l.currentWriteId,!0));else{const f=f0(n,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){kl("transaction failed: Data returned ",d,l.path);let g=It(d);typeof d=="object"&&d!=null&&Yn(d,".priority")||(g=g.updatePriority(f.getPriority()));const m=l.currentWriteId,_=Bl(n),S=t0(g,f,_);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=S,l.currentWriteId=hf(n),o.splice(o.indexOf(m),1),s=s.concat(Yv(n.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(Di(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(Di(n.serverSyncTree_,l.currentWriteId,!0))}Fn(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Vl(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Or(i[a]);ff(n,n.transactionQueueTree_)}function d0(n,e){let t,i=n.transactionQueueTree_;for(t=ze(e);t!==null&&kr(i)===void 0;)i=lf(i,t),e=ht(e),t=ze(e);return i}function p0(n,e){const t=[];return m0(n,e,t),t.sort((i,s)=>i.order-s.order),t}function m0(n,e,t){const i=kr(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Fl(e,s=>{m0(n,s,t)})}function Vl(n,e){const t=kr(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,n0(e,t.length>0?t:void 0)}Fl(e,i=>{Vl(n,i)})}function df(n,e){const t=ia(d0(n,e)),i=lf(n.transactionQueueTree_,e);return kP(i,s=>{Zc(n,s)}),Zc(n,i),s0(i,s=>{Zc(n,s)}),t}function Zc(n,e){const t=kr(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ge(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(ge(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Di(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?n0(e,void 0):t.length=r+1,Fn(n.eventQueue_,ia(e),s);for(let o=0;o<i.length;o++)Or(i[o])}}/**
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
 */function aD(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function lD(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):en(`Invalid query segment '${t}' in query '${n}'`)}return e}const zm=function(n,e){const t=cD(n),i=t.namespace;t.domain==="firebase.com"&&gi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&gi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||xI();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yv(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new st(t.pathString)}},cD=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=aD(n.substring(u,h)));const f=lD(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const Vm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uD=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Vm.charAt(t%64),t=Math.floor(t/64);ge(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Vm.charAt(e[s]);return ge(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class g0{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Lt(this.snapshot.exportVal())}}class _0{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class hD{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ge(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class pf{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return We(this._path)?null:Bh(this._path)}get ref(){return new vi(this._repo,this._path)}get _queryIdentifier(){const e=wm(this._queryParams),t=Oh(e);return t==="{}"?"default":t}get _queryObject(){return wm(this._queryParams)}isEqual(e){if(e=Nr(e),!(e instanceof pf))return!1;const t=this._repo===e._repo,i=zh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+nL(this._path)}}class vi extends pf{constructor(e,t){super(e,t,new Wh,!1)}get parent(){const e=Rv(this._path);return e===null?null:new vi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xo{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new st(e),i=Tr(this.ref,e);return new Xo(this._node.getChild(t),i,mt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Xo(s,Tr(this.ref,i),mt)))}hasChild(e){const t=new st(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ll(n,e){return n=Nr(n),n._checkNotDeleted("ref"),e!==void 0?Tr(n._root,e):n._root}function Tr(n,e){return n=Nr(n),ze(n._path)===null?jP("child","path",e,!1):a0("child","path",e,!1),new vi(n._repo,pt(n._path,e))}function fD(n,e){n=Nr(n),l0("push",n._path),o0("push",e,n._path,!0);const t=h0(n._repo),i=uD(t),s=Tr(n,i),r=Tr(n,i);let o;return e!=null?o=dD(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function dD(n,e){n=Nr(n),l0("set",n._path),o0("set",e,n._path,!1);const t=new Jo;return eD(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function v0(n,e){WP("update",e,n._path,!1);const t=new Jo;return tD(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class mf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new g0("value",this,new Xo(e.snapshotNode,new vi(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new _0(this,e,t):null}matches(e){return e instanceof mf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class gf{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new _0(this,e,t):null}createEvent(e,t){ge(e.childName!=null,"Child events should have a childName.");const i=Tr(new vi(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new g0(e.type,this,new Xo(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof gf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function pD(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{Bm(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new hD(t,r||void 0),a=e==="value"?new mf(o):new gf(e,o);return iD(n._repo,n,a),()=>Bm(n._repo,n,a)}function x0(n,e,t,i){return pD(n,"value",e,t,i)}pP(vi);yP(vi);/**
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
 */const mD="FIREBASE_DATABASE_EMULATOR_HOST",Xu={};let gD=!1;function _D(n,e,t,i){n.repoInfo_=new yv(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function vD(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||gi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=zm(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[mD]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=zm(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new or(or.OWNER):new II(n.name,n.options,e);qP("Invalid Firebase Database URL",o),We(o.path)||gi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yD(a,n,u,new RI(n.name,t));return new bD(h,n)}function xD(n,e){const t=Xu[e];(!t||t[n.key]!==n)&&gi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sD(n),delete t[n.key]}function yD(n,e,t,i){let s=Xu[e.name];s||(s={},Xu[e.name]=s);let r=s[n.toURLString()];return r&&gi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ZP(n,gD,t,i),s[n.toURLString()]=r,r}class bD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vi(this._repo,Je())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gi("Cannot call "+e+" on a deleted database.")}}function SD(n=nI(),e){const t=JR(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=W1("database");i&&MD(t,...i)}return t}function MD(n,e,t,i={}){n=Nr(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&gi("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&gi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new or(or.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:j1(i.mockUserToken,n.app.options.projectId);r=new or(o)}_D(s,e,t,r)}/**
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
 */function wD(n){pI(tI),Ka(new Bo("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vD(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),sr(am,lm,n),sr(am,lm,"esm2017")}pi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};pi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};wD();const ED={apiKey:"AIzaSyCWnzPp6ZZoa4cef1ux7pB0IXTnTEM0xCs",authDomain:"dinane-fae32.firebaseapp.com",databaseURL:"https://dinane-fae32-default-rtdb.europe-west1.firebasedatabase.app",projectId:"dinane-fae32",storageBucket:"dinane-fae32.firebasestorage.app",messagingSenderId:"67005604569",appId:"1:67005604569:web:39ed8dcb0ec310006d54c8",measurementId:"G-RFENDTH9KK"},TD=iv(ED),cl=SD(TD);const CD={__name:"VRScene",setup(n){const e=lh(null);let t,i,s,r,o,a,l;const c=ll(cl,"cube"),u=ll(cl,"interactions");return vl(()=>{i=new P_,i.background=new Oe(5263440),s=new zt(70,window.innerWidth/window.innerHeight,.1,1e3),s.position.set(0,1.6,3),t=new Cl({antialias:!0}),t.setSize(window.innerWidth,window.innerHeight),t.xr.enabled=!0,e.value.appendChild(t.domElement),a=xr.createButton(t),e.value.appendChild(a);const h=new V_(16777215,12303359,1);h.position.set(0,1,0),i.add(h);const f=.2,d=new ji(f,f,f),g=new Ir({color:65280});r=new nn(d,g),r.position.set(0,1.5,-1),i.add(r),o=new Wi().setFromObject(r),x0(c,T=>{const R=T.val();if(R&&R.color){const I=parseInt(R.color,16);r.material.color.set(I),console.log("Cube color updated to:",R.color)}});const p=new N1,m=t.xr.getHand(0);m.add(p.createHandModel(m,"mesh")),i.add(m);const _=t.xr.getHand(1);_.add(p.createHandModel(_,"mesh")),i.add(_);let S=!1;const v=.02;t.setAnimationLoop(()=>{o.setFromObject(r);let T=!1;if(T=T||y(m),T=T||y(_),T&&!S){const R="0x"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");console.log("Collision detected – updating cube color to:",R),v0(c,{color:R}),fD(u,{timestamp:Date.now(),type:"touch",source:"vr"}),S=!0}T||(S=!1),t.render(i,s)});function y(T){let R=!1;return T.traverse(I=>{if(I.isMesh){const M=new D;I.getWorldPosition(M);const A=new Ts(M,v);o.intersectsSphere(A)&&(R=!0)}}),R}l=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",l)}),hh(()=>{t&&t.setAnimationLoop(null),l&&window.removeEventListener("resize",l),r&&(r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(h=>h.dispose()):r.material.dispose())),t&&(t.dispose(),t.domElement&&t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement)),a&&a.parentNode&&a.parentNode.removeChild(a)}),(h,f)=>(ph(),Bg("div",{ref_key:"sceneContainer",ref:e,style:{width:"100vw",height:"100vh"}},null,512))}};const AD={__name:"NormalScene",setup(n){const e=lh(null);let t,i,s,r,o,a,l,c,u;const h=ll(cl,"cube");return ll(cl,"interactions"),vl(()=>{i=new P_,i.background=new Oe(5263440),s=new zt(70,window.innerWidth/window.innerHeight,.1,1e3),s.position.set(0,1.6,3),t=new Cl({antialias:!0}),t.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(t.domElement);const f=new V_(16777215,12303359,1);f.position.set(0,1,0),i.add(f);const d=.2,g=new ji(d,d,d),p=new Ir({color:65280});r=new nn(g,p),r.position.set(0,1.5,-1),i.add(r),o=new Wi().setFromObject(r),x0(h,_=>{const S=_.val();if(S&&S.color){const v=parseInt(S.color,16);r.material.color.set(v),console.log("Cube color updated to:",S.color)}}),a=new JA,l=new Ye,u=_=>{const S=t.domElement.getBoundingClientRect();l.x=(_.clientX-S.left)/S.width*2-1,l.y=-((_.clientY-S.top)/S.height)*2+1,a.setFromCamera(l,s);const v=a.intersectObject(r);if(console.log("Intersects:",v),v.length>0){console.log("Cube clicked!");const y="0x"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");console.log("Random color generated:",y),v0(h,{color:y})}},t.domElement.addEventListener("click",u);const m=()=>{o.setFromObject(r),t.render(i,s),requestAnimationFrame(m)};m(),c=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",c)}),hh(()=>{t&&t.domElement&&t.domElement.removeEventListener("click",u),c&&window.removeEventListener("resize",c),t&&t.dispose(),r&&(r.geometry&&r.geometry.dispose(),r.material&&(Array.isArray(r.material)?r.material.forEach(f=>f.dispose()):r.material.dispose())),t&&t.domElement&&t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement)}),(f,d)=>(ph(),Bg("div",{ref_key:"sceneContainer",ref:e,style:{width:"100vw",height:"100vh"}},null,512))}},RD=[{path:"/vr",name:"VRScene",component:CD},{path:"/normal",name:"NormalScene",component:AD},{path:"/:pathMatch(.*)*",redirect:"/normal"}],ID=$b({history:Mb(),routes:RD});Wy(Zb).use(ID).mount("#app");
