// 
// Introduction to typeScript
// 

export {}

//
// 1. First, lets set up and get going with typescript.
//

// Install -
//  First install nodeJS, then npm install -g typescript. `tsc -v` will then check its working.

// Typescript is just javascript, with some extra properties

let message = "Hello world, this is the world of typescript.";
console.log(message);

// but.. you need to transpile typescript into javascript. use `tsc main.ts`.
// you can then run the compiles javascript with node. `node main.js`.

// having to compile over and over is a pain. Instead, use `tsc main.ts --watch` do to it automatically.

//
// 2. Variables and typing
//

// javascript only has glolab scope and function scope. 
let x = 10;
const y = 20;

// Const can never be changed. let x again wont work, but you can reasign x
// let x = 20;   // This wont work, but the following will.
x = 20;

// y = 10; this wont work, because y is a const.

// In typescript, variables are also given types. You then get static type checking as you go, in your IDE. error messages are then also more helpfull. You can also then get intellisence in your
// IDE as well. 

// core types
let flagSwitch: boolean = true;
let total: number = 0;
let name: string = "Toby";

// subtypes you can also use
let n: null = null;
let u: undefined = undefined;

// you can also do embeded expressions

let sentance: string = `My name is ${name}
and were trying out typescript`;
console.log(sentance);

// arrays
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// tuples
let person1:  [string, number] = ['alice', 22];

// enums
enum colour {red, green, blue};
let c: colour = colour.green;
console.log(c) // this outputes the index value

// Can you still make a variable hold any type, like in traditional javascript
let randomeValue: any = 10;
randomeValue = true;
randomeValue = "changed it again";

// you can call variables of the any types, just like objects - even if there not. so, Typescript 3 introduced the unknown
// type.

let myVariable: unknown = 10;
// you can then cast variables
(myVariable as string).toUpperCase; 

// you can also specify the allowed types

let multiType: number | string; 
multiType = 10;
multiType = "foo";



//
// 3. Functions. We now get type checking for them and intellisence. 
//

function add(number1: number, number2: number): number {
    return number1 + number2;
}

add(2,2);

// all paramaters are required. We can make them optional by adding a `?` at the end of it.

function addB(number1: number, number2? :number): number {
    if(number2){
        return number1 + number2;
    }
    else {
        return number1;
    }
}

// we can also define default paramaters

function addC(number1: number, number2 :number = 10): number {
    if(number2){
        return number1 + number2;
    }
    else {
        return number1;
    }
}

//
// 4. Interfaces
//

//
// When you create a function, you specify the types. 
//

function fullName(person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'alice',
    lastName: 'iggins'
};

fullName(p);

// Writting functions and objects like this is fine if there are only a small number of them, but imagin
// if there were loads of properties inside an object type. It would be long and messy. We may also need to
// use the same object over and over again, repeating things.  The solution is interfaces.

interface InterPerson {   // starts with a caps, like classes
    firstName: string;
    lastName?: string;  // you can make properties optional with a ?
}

function interFullName(person: InterPerson){
    console.log(`${person.firstName} ${person.lastName}`);
}

interFullName(p);

//
// 5. Classes
//

class Employee  {
    public employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Hello, ${this.employeeName}`);
    }
}

let employee1 = new Employee('Toby');
console.log(employee1.employeeName);
employee1.greet();

// You can also do class inheritance

class Manager extends Employee {
    constructor( managerName: string ){
        super(managerName);
    }

    delegateWork(){
        console.log(`I'm a manager, delegating tasks`);
    }
}

let manager1 = new Manager(`Alice`);
manager1.delegateWork(); // now we can see the new method
manager1.greet(); // we also can access the inherited class methods

// Access modifiers allows us to set how/if we can access properties and methods of a class
// Defailt is piblic. options are:  public, private and protected.
// derived classes cant access private, but they can access protected.


