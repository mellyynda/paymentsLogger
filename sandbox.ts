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




