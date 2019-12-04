"use strict";
// 
// Introduction to typeScript
// 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//
// 1. First, lets set up and get going with typescript.
//
// Install -
//  First install nodeJS, then npm install -g typescript. `tsc -v` will then check its working.
// Typescript is just javascript, with some extra properties
var message = "Hello world, this is the world of typescript.";
console.log(message);
// but.. you need to transpile typescript into javascript. use `tsc main.ts`.
// you can then run the compiles javascript with node. `node main.js`.
// having to compile over and over is a pain. Instead, use `tsc main.ts --watch` do to it automatically.
//
// 2. Variables and typing
//
// javascript only has glolab scope and function scope. 
var x = 10;
var y = 20;
// Const can never be changed. let x again wont work, but you can reasign x
// let x = 20;   // This wont work, but the following will.
x = 20;
// y = 10; this wont work, because y is a const.
// In typescript, variables are also given types. You then get static type checking as you go, in your IDE. error messages are then also more helpfull. You can also then get intellisence in your
// IDE as well. 
// core types
var flagSwitch = true;
var total = 0;
var name = "Toby";
// subtypes you can also use
var n = null;
var u = undefined;
// you can also do embeded expressions
var sentance = "My name is " + name + "\nand were trying out typescript";
console.log(sentance);
// arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuples
var person1 = ['alice', 22];
// enums
var colour;
(function (colour) {
    colour[colour["red"] = 0] = "red";
    colour[colour["green"] = 1] = "green";
    colour[colour["blue"] = 2] = "blue";
})(colour || (colour = {}));
;
var c = colour.green;
console.log(c); // this outputes the index value
// Can you still make a variable hold any type, like in traditional javascript
var randomeValue = 10;
randomeValue = true;
randomeValue = "changed it again";
// you can call variables of the any types, just like objects - even if there not. so, Typescript 3 introduced the unknown
// type.
var myVariable = 10;
// you can then cast variables
myVariable.toUpperCase;
// you can also specify the allowed types
var multiType;
multiType = 10;
multiType = "foo";
//
// 3. Functions. We now get type checking for them and intellisence. 
//
function add(number1, number2) {
    return number1 + number2;
}
add(2, 2);
// all paramaters are required. We can make them optional by adding a `?` at the end of it.
function addB(number1, number2) {
    if (number2) {
        return number1 + number2;
    }
    else {
        return number1;
    }
}
// we can also define default paramaters
function addC(number1, number2) {
    if (number2 === void 0) { number2 = 10; }
    if (number2) {
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
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'alice',
    lastName: 'iggins'
};
fullName(p);
function interFullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
interFullName(p);
//
// 5. Classes
//
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee('Toby');
console.log(employee1.employeeName);
employee1.greet();
// You can also do class inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("I'm a manager, delegating tasks");
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Alice");
manager1.delegateWork(); // now we can see the new method
manager1.greet(); // we also can access the inherited class methods
// Access modifiers allows us to set how/if we can access properties and methods of a class
// Defailt is piblic. options are:  public, private and protected.
// derived classes cant access private, but they can access protected.
