import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
//dom interaction
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
    console.log(doc);
});
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 500);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'meli', age: 32 });
const docThree = {
    uid: 3,
    resourceName: 'lala',
    data: { name: 'mel' },
};
const docFour = {
    uid: 50,
    resourceName: 'shopping list',
    data: ['bread', 'milk'],
};
// console.log(docThree, docFour);
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["PERSON"] = 1] = "PERSON";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
})(ResourceType || (ResourceType = {}));
const ResOne = {
    uid: 5,
    resType: ResourceType.BOOK,
    data: { title: 'revenge of the weak' }
};
const ResTwo = {
    uid: 10,
    resType: ResourceType.PERSON,
    data: { name: 'mel' }
};
console.log(ResOne, ResTwo);
