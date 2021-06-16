"use strict";
//dom interaction
//const anchor = document.querySelector('a')!;
//do a runtime check before accessing dom elements properties, it will only log if the element exists
//typescript does not know if element exists
// if(anchor){
//   console.log(anchor.href);
// }
//console.log(anchor.href);
// const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // form.children.forEach(child => {  
    // })
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " ows $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on mario website', 250);
var invTwo = new Invoice('louigi', 'work on louigi website', 300);
// console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invTwo.amount = 200;
invOne.client = 'yoshi';
console.log(invoices);
