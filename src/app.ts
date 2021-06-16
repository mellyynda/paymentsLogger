import { Invoice } from './classes/Invoice.js';

//dom interaction
//const anchor = document.querySelector('a')!;

//do a runtime check before accessing dom elements properties, it will only log if the element exists
//typescript does not know if element exists
// if(anchor){
//   console.log(anchor.href);
// }

//console.log(anchor.href);

// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  // form.children.forEach(child => {  
  // })
  
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
  
})



const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('louigi', 'work on louigi website', 300);

// console.log(invOne, invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invTwo.amount = 200;
// invOne.client = 'yoshi';

invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()));

console.log(invoices);

