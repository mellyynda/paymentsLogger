let character = 'melly';
let age = 32;
let isBlackBelt = false;

//variables are locked to their type cannot be reassigned to new types
character = 'amelie';
age = 25;
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5));

//arrays
let names = ['luigi', 'mario', 'yoshi'];
//names = "andrew" nono

names.push('toad');
//names.push(3) nono
//names[0] = 3 nono

let mixed = ['lal', 2]

mixed.push(4);
mixed.push('sdd')
//mixed[0] = {} nono

//objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30
}

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
}

/*=========================
explicit types
=========================*/
let persona: string;
let years: number;
let isLoggedIn: boolean;

//age = "dhd" nono
age = 39;

//isLoggedIn = 50 nono
isLoggedIn = true;

//arrays
//let ninjas: string[];
// ninjas.push('push firstNinja does not work because array is not initialized')
// for the above to work we declare:
 let ninjas: string[] = [];

 ninjas.push("sjdnh");
 console.log(ninjas);
 
 //union type
 let combined: (string|number|boolean)[] = [];

 combined.push('ddd');
 combined.push(5);
 combined.push(false);
 console.log(combined);
 
let uid: string|number;
uid = "123";
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = { name:"yoshi", age:30 }

let ninjaTwo: {
  name: string,
  age: number,
  belt: string,
}

ninjaTwo = {name:"lala", age:45, belt: "lulu"} /*must have same format*/

//type any, reverts typescript
let no: any = 25;

no = true;
console.log(no);
no = 'hello';
console.log(no);
no = {name: "lassie"}
console.log(no);

let any: any[] = [];

any.push('sds');
any.push(3);
any.push(true);
console.log(any);
 //any = { }does not work

let obj: {
  name: any,
  age: any,
};

obj = {name: "lala", age: 90};
obj.name = 33;
obj.age = "ss";
console.log(obj);


/*==========================
functions
===========================*/
let greet: Function;

// greet = "hello";

greet = () => {
  console.log('from function!'); 
}

//use c?: number for optional parameters
//use c: number = 10 for a default value of 10 if not specified
//always use optional or default parameters at the end
//void is a complete lack of any kind of value not like null or undefined
const add = (a: number, b: number, c: number | string = 10): void => {
console.log(a + b);
console.log(c);
}
add(5, 3, "ssj");

//the colon number after paranthesis specifies the return type
const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10, 7);

/*==========================
video #9 Type Aliases
==========================*/
// defines a specific type, even a nested one, like a model
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};
type arrOfObj = [{name: string, age: number}, {name: string, age: number}, {name: string, age: number}];

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

// const salute = (user: {name: string, uid: string | number}) => {
//   console.log(`${user.name} says hello`);  
// }
const salute = (user: objWithName) => {
  console.log(`${user.name} says hello`);  
}

const logUsers = (arr: arrOfObj) => {
  arr.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`)
  })  
}

const myArr: arrOfObj = [{name: "Mely", age: 32}, {name: "John", age: 35}, {name: "Tudor", age: 5}]
logUsers(myArr);


/*============================
video #10 Function Signatures
describes the general 
structure of a function 
============================*/
let greetAgain: Function;

//ex 1
let gree: (a: string, b: string) => void;

gree = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)  
}

//ex 2
let calc: (a:number, b:number, c:string) => number;

calc = (numOne:number, numTwo:number, action:string) => {
  if (action === 'add') {
    return (numOne + numTwo);
  } else {
    return (numOne - numTwo);
  }
}

//ex 3
let details: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

details = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);  
}
details({name:"lola", age: 22});
