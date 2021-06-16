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
