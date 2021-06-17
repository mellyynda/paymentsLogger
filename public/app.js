//interfaces
// interface isPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(b: number): number;
// }
// const me: isPerson = {
//   name:'Mely', 
//   age: 8,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log('i have spent:', amount);
//     return amount    
//   },
// };
// const greetPerson = (person: isPerson) => {
//   console.log('Hello', person.name)
// }
// greetPerson(me);
// console.log(me);
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormater;
// let docTwo: HasFormater;
// docOne = new Invoice('mely', 'web work', 250);
// docTwo = new Payment('mely', 'cool app', 5000);
let docs = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
//dom interaction
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    docs.push(doc);
    console.log(docs);
});
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('louigi', 'work on louigi website', 300);
// console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invTwo.amount = 200;
// invOne.client = 'yoshi';
invoices.forEach(inv => console.log(inv.client, inv.amount, inv.format()));
//console.log(invoices);
