import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormater } from './interfaces/HasFormater.js';

//dom interaction
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;

const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  let doc: HasFormater;

  if (type.value === 'invoice'){
    doc = new Invoice(tofrom.value,
      details.value,
      amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value,
      details.value,
      amount.valueAsNumber)
  }

  list.render(doc, type.value , 'start');
  
  console.log(
    doc
  )
  
})
