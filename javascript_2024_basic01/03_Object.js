let  mySym = Symbol("kye1");



let MYJS = {
    name: "sameer",
    Fnmae: "saeed Ahmad",
    [mySym]: "myKey1",
    rollNO: 22,
    "age": "twenty",
    play: ["cricket"]
}

console.log(MYJS[mySym]);
// first way to access the value

//console.log(MYJS.rollNO);
// Output: 22

//console.log(MYJS.play);
// Output: [ 'cricket' ]

//console.log(MYJS["play"])
//console.log(MYJS["age"]);
//console.log(MYJS["Fnmae"])
