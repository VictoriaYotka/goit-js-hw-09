var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");const i=document.querySelector(".form"),l={};let u=null;function a(){return l.delay=Number(event.currentTarget.elements.delay.value),l.step=Number(event.currentTarget.elements.step.value),l.amount=Number(event.currentTarget.elements.amount.value),l}function s(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;u=setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault(),a();let{delay:t,step:n,amount:r}=l;for(let i=1;i<=r;i+=1)s(i,t).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=n,e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.c13b56b5.js.map
