let  mySym = Symbol("kye1");



let MYJS = {
    name: "sameer",
    Fname: "saeed Ahmad",
    // RIGHT SYNTAX OF DECLARING SYMBOL
    [mySym]: "myKey1",
    rollNO: 22,
    "age": "twenty",
    play: ["cricket"]
}

// FOR SYMBOL
//console.log(MYJS[mySym]);

// first way to access the value
//console.log(MYJS.rollNO);
// Output: 22

//console.log(MYJS.play);
// Output: [ 'cricket' ]

//console.log(MYJS["play"])
//console.log(MYJS["age"]);
//console.log(MYJS["Fnmae"])

//MYJS.name = "Gour";

//console.log(MYJS.name);

// if we use freeze method than we cannot change in the Object 
//Object.freeze(MYJS);
//MYJS.Fname = "Saeed"
//console.log(MYJS)

// MYJS.Greetings = function(){
//     console.log("hello JS user");
// }

// console.log(MYJS.Greetings());



// MYJS.GreetingsTwo = function(){
//     console.log(`hello JS user ${this.name}`);
// }

// console.log(MYJS.Greetings());

// console.log(MYJS.GreetingsTwo());

// MYJS.myGreetingThree = function(){

//     console.log(`my user is ${this.Fname}`);
// }

// console.log(MYJS.myGreetingThree());


const obj = new Object();
obj.name = "Sameer";
obj.age = 22;

console.log(obj.name);

