const e=document.querySelector(".form"),t={};let n=null;function o(){return t.delay=Number(event.currentTarget.elements.delay.value),t.step=Number(event.currentTarget.elements.step.value),t.amount=Number(event.currentTarget.elements.amount.value),t}function r(e,t){return new Promise(((o,r)=>{const l=Math.random()>.3;n=setTimeout((()=>{l?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault(),o();let{delay:n,step:l,amount:u}=t;for(let t=1;t<=u;t+=1)r(t,n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),n+=l,e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.87c5d92a.js.map
