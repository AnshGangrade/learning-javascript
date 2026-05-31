// inheritance -> allows a new class to inherit properties and methods from an existing class
class Animal {
    alive = true;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} Eating...`);
    }
    sleep() {
        console.log(`${this.name} Sleeping...`);
    }
}
class fish extends Animal {
name = "Fish";
swim() {
    console.log(`${this.name} Swimming...`);
}
}
// each class can have its own properties and methods, but it can also use the properties and methods of the parent class 

console.log(fish);
const nemo = new fish("Nemo");
console.log(nemo);
nemo.eat();
nemo.sleep();
nemo.swim();