const formEl = document.querySelector('.form');

const promiseObj = {};

let timeoutId = null;

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler (event) {
  event.preventDefault();

  formValuesPicker();

  let { delay, step, amount } = promiseObj;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);      
      }) 

      delay += step;

      event.currentTarget.reset()
  }     
}

function formValuesPicker () {
  promiseObj.delay = Number(event.currentTarget.elements.delay.value);
  promiseObj.step = Number(event.currentTarget.elements.step.value);
  promiseObj.amount = Number(event.currentTarget.elements.amount.value);

  return promiseObj;
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;

  timeoutId = setTimeout(() => {
      if (shouldResolve) {
      resolve ({ position, delay });
      } else {
      reject ({ position, delay });
      }}, delay)        
  }) 
}