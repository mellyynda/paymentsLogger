"use strict";
var character = 'melly';
var age = 32;
var isBlackBelt = false;
//variables are locked to their type cannot be reassigned to new types
character = 'amelie';
age = 25;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//arrays
var names = ['luigi', 'mario', 'yoshi'];
//names = "andrew" nono
names.push('toad');
//names.push(3) nono
//names[0] = 3 nono
var mixed = ['lal', 2];
mixed.push(4);
mixed.push('sdd');
//mixed[0] = {} nono
//objects
var ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
//ninja.name = 24; nono
ninja.name = "someOtherString";
//ninja.age = []; nono
//ninja.strength = 100; nono
//ninja = [] nono
// ninja = {
//   ninja: true,
// } nono
ninja = {
    name: "lulu",
    belt: "yellow",
    age: 33,
    //strength: 100, nono
};
/*=========================
explicit types
=========================*/
var persona;
var years;
var isLoggedIn;
//age = "dhd" nono
age = 39;
//isLoggedIn = 50 nono
isLoggedIn = true;
//arrays
//let ninjas: string[];
// ninjas.push('push firstNinja does not work because array is not initialized')
// for the above to work we declare:
var ninjas = [];
ninjas.push("sjdnh");
console.log(ninjas);
//union type
var combined = [];
combined.push('ddd');
combined.push(5);
combined.push(false);
console.log(combined);
var uid;
uid = "123";
uid = 123;
//objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
var ninjaTwo;
ninjaTwo = { name: "lala", age: 45, belt: "lulu" }; /*must have same format*/
//type any, reverts typescript
var no = 25;
no = true;
console.log(no);
no = 'hello';
console.log(no);
no = { name: "lassie" };
console.log(no);
var any = [];
any.push('sds');
any.push(3);
any.push(true);
console.log(any);
//any = { }does not work
var obj;
obj = { name: "lala", age: 90 };
obj.name = 33;
obj.age = "ss";
console.log(obj);
/*==========================
functions
===========================*/
var greet;
// greet = "hello";
greet = function () {
    console.log('from function!');
};
//use c?: number for optional parameters
//use c: number = 10 for a default value of 10 if not specified
//always use optional or default parameters at the end
//void is a complete lack of any kind of value not like null or undefined
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 3, "ssj");
//the colon number after paranthesis specifies the return type
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
// const salute = (user: {name: string, uid: string | number}) => {
//   console.log(`${user.name} says hello`);  
// }
var salute = function (user) {
    console.log(user.name + " says hello");
};
var logUsers = function (arr) {
    arr.forEach(function (user) {
        console.log(user.name + " is " + user.age + " years old.");
    });
};
var myArr = [{ name: "Mely", age: 32 }, { name: "John", age: 35 }, { name: "Tudor", age: 5 }];
logUsers(myArr);
/*============================
video #10 Function Signatures
describes the general
structure of a function
============================*/
var greetAgain;
//ex 1
var gree;
gree = function (name, greeting) {
    console.log(name + " says " + greeting);
};
//ex 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return (numOne + numTwo);
    }
    else {
        return (numOne - numTwo);
    }
};
//ex 3
var details;
details = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
details({ name: "lola", age: 22 });
