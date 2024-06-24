// about memory declaration

// stack (premitive) heap(non-premitive)
// stack
let first = "sameer";
let second = first;

second = "gour";

//console.log(first);
//console.log(second)

// heap

let firstob ={
    name: "sameer",
    age: 23,
    gmail: "sameer@gamil.com"

}

let secondOb = firstob;

secondOb.gmail = "gour@gmail.com" ;

console.log(firstob);
console.log(secondOb);