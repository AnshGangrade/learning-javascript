// Super keyword -> keyword used to call the parent class constructor and methods
// this = this object , super = parent class object

class Animal{
    constructor(name){
        this.name = name;
    }
    move(speed){
        console.log(`${this.name} is moving at ${speed} speed`  );
    }
}
class Rabbit extends Animal{
    constructor(name,runSpeed){
        super(name); // calling the parent class constructor
        this.runSpeed = runSpeed;
    }
    run(){
        console.log("hop hop hop");
        super.move(this.runSpeed); // calling the parent class method
    }
}
class Fish extends Animal{
    constructor(name,swimSpeed){
        super(name);
        this.swimSpeed = swimSpeed;
    }

}
class Bird extends Animal{
    constructor(name,flySpeed){
        super(name);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Bunny", 20);
const fish = new Fish("Nemo", 10);
const bird = new Bird("Pigeon", 30);
console.log(rabbit);
rabbit.run();

// Getters and Setters -> used to get and set the values of an object properties
class rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }   
    set width(value){
        if(value > 0){
            this._width = value;
        }else{
            console.error("Width must be greater than 0");
        }
    }
    set height(value){
        if(value > 0){
            this._height = value;
        }else{
            console.error("Height must be greater than 0");
        }           
    }
    get height(){
        return this._height;  // _width and _height are private properties
    }
    get width(){
        return this._width;
    }
    get area(){
        return this._width * this._height;
    }
}
const rect = new rectangle(10,20);
console.log(rect.width);
console.log(rect.height);
console.log(rect.area);
// rect.width = -5;

// destructuring -> extract data from arrays and objects and assign them to variables 
//                  [] for arrays and {} for objects

// EXAMPLE 1 -> swapping variables
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a);

// EXAMPLE 2 -> swap 2 var in array
const colors = ["red","green","blue","yellow"];
[colors[0],colors[3]] = [colors[3],colors[0]];
console.log(colors);

// EXAMPLE 3 -> assigning variables from an array
const numbers = [1,2,3,4,5];
const [x,y,z,...rest] = numbers;  // can use rest operator
console.log(x,y,z);
console.log(rest);

// EXAMPLE 4 -> extract values from an object
const person = {
    name: "Bluff",
    age: 21,
    city: "Monacco"
};
const {name, age, job="Unemployed"} = person;
console.log(name, age, job);

// EXAMPLE 5 -> destructuring in function parameters
function printPerson({name, age}){
    console.log(`Name: ${name}, Age: ${age}`);
}
printPerson(person);

