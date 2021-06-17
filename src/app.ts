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


//GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 500);
  return {...obj, uid}
}
let docOne = addUID({name: 'meli', age:32});
// console.log(docOne);

//with interfaces

interface Resource<T> {
  uid: number,
  resourceName: string,
  data: T,
}

const docThree: Resource<object> = {
  uid: 3,
  resourceName: 'lala',
  data: {name: 'mel'},
} 

const docFour: Resource<string[]> = {
uid: 50,
resourceName: 'shopping list',
data: ['bread', 'milk'],
} 

// console.log(docThree, docFour);

//ENUMS

enum ResourceType { BOOK, PERSON, FILM}

interface Res<T> {
  uid: number;
  resType: ResourceType;
  data: T;
}

const ResOne: Res<object> = {
  uid: 5,
  resType: ResourceType.BOOK,
  data: {title: 'revenge of the weak'}
}

const ResTwo: Res<object> = {
  uid: 10,
  resType: ResourceType.PERSON,
  data: {name: 'mel'}
}

console.log(ResOne, ResTwo);
