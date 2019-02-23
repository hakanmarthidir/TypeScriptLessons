//OBJECT-------------------------------------------
//primitive olmayan tipler için kullanılır. 
function sayHelloAgain(objectVariable : object | null):void { console.log("sayHelloAgain " + objectVariable);}
sayHelloAgain({name:"asdasfgdf"});
//sayHelloAgain(23); atama yapamazsınız
//sayHelloAgain("gdfgdf"); atama yapamazsınız.
sayHelloAgain(undefined);
sayHelloAgain(null);


let objectPoint = { x: 5, y: 5 };
let objectFullname: object = { 'name': 'Hakan', 'surname': 'Hidir' };
let objectValue2 = {};
objectValue2 = { z: 3, t: 5 };


var mathObject = {
    n1: 5,
    n2: 6,
    sumNumbers: function () { return this.n1 + this.n2; }
};
console.log(mathObject.sumNumbers());


//Object Destructuring 

let myObject = {
    firstname: "abcdef",
    latname: "ahgdha",
    age: 23
};
let { firstname, age } = myObject;
console.log(firstname);