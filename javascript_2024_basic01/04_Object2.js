
const myObj = new Object()// singleton object

const tinderuser = {
    greet(){
        //console.log("dhanywaad");
    }
} // non-singleton object Or Literal Object

tinderuser.id = "abc123";
tinderuser.name = "sameer";
tinderuser.gmail = "sameergour93360@gmail.com";
tinderuser.isLoggedIn = false;

//console.log(tinderuser);

//console.log(tinderuser.greet());


// Nested Object : object in object
const regularUser = {
    email: "sameergour93360@gmail.com",
    fullName: {
        UserFullName:{
            firstName: "Mohd",
            LastName: "Sameer"
        }
    }
}

// console.log(regularUser.fullName);


const obj1 = {
        1: "a",
        2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = {obj1, obj2};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj1);
console.log(obj3);

console.log(obj1 === obj3); 