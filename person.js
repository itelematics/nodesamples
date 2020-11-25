class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greetings(){
        console.log(`welcome to our platform Mr. ${this.name}, we know that you are ${this.age} years old`);
    }
}

module.exports = Person;

/*
const Person=require('./person');
//import Person from "./person.js";

let p1=new Person('Amjed Salameh', 43);
p1.greetings();
*/