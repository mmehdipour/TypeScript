export { }

let name: string = "naresh";
let marks: number = 90;
let actives: boolean = true;

name.length;
marks.toFixed(1);
// string interpolation
let sentence = `hi ${name}`;

//two ways of diclaring an array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//tuple in typescript
let person1: [string, number] = ['Naresh', 80];

//enum
enum Color { RED, BLUE, GREEN };
let c: Color = Color.RED;
console.log(c);
enum Color1 { RED = 5, BLUE, GREEN };

//when variable is coming from the outside source and it allows you to reasign any data type

let randmValue: unknown = 10;
randmValue = true;
randmValue = "Adam";

console.log(randmValue.name);
randmValue();
(randmValue as string).length;//type casting/type Assertion

//type inference
let a;
a = 10;
a = true;

let b = 10;
b = true;// type error

let multiType: number | boolean;
multiType = 10;
multiType = false;

let anyType: any;
anyType = 10;
anyType = "Naresh";
anyType = true;

/*
javascript function
function add(num1,num2){
    return num1+num2;
}
*/

function add(num1: number, num2: number):number {
    return num1 + num2;
}
add(2, 3);
add(2, '3');//must have number data type

function addition(num1: number, num2?: number): number{
    if (num2) return num1 + num2;
    else return num1;
}
//optional parameter with ?

addition(1, 2);
addition(3);

//default parameters(without using undefined)
function add2(num1: number, num2: number = 0): number{
    return num1 + num2;
}
add2(2);
add2(2, 3);

function fullName(person: { firstName: string, lastName: string }) {
    console.log(`${person.firstName} - ${person.lastName}`);
}

let person = {
    firstName: "Naresh";
    lastName: "Kumar";

};
fullName(person);

interface person{
    firstName: string;
    lastName: string;
}

class Employee{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        console.log(`Good morning ${this.name}`);
    }
}

class Manager extends Employee{
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log('Manager deligating tasks')
    }
}

const mgr1 = new Manager('Adam');
mgr1.greet();
mgr1.delegateWork();
console.log(mgr1.name);

const employee1 = new Employee("Narash");
console.log(employee1.name);
employee1.greet();


let x = 10;
const y = 10;

let total;
total = 100;
//cannot redeclare a variable
let x = 30;
//should be initialized
const title;