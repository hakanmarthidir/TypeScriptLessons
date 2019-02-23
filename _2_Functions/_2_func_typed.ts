//FUNCTION TYPE

//Sample 1
//let myAdd = function(x, y) { return x + y; };
let getMyFullName1 = function (fname: string, lname: string) { return fname + ' ' + lname };
let nameresult = getMyFullName1("a", "b");
console.log(nameresult);



//Sample 2
//getMyFullName 2 degiskenine "(fname: string, lname: string) => string" seklinde belirtilen tipte bir function atayabilirsiniz. 
//bu tanıma uymayan bir func atanamaz. 
let getMyFullName2: (fname: string, lname: string) => string 
= function (fn: string, ln: string): string { return fn + ln; };



//Sample 3
//1- fonksiyon tanımlanır.
function getMessage(message: string): string { return message + " removed"; }
//2- fonksiyon tipinde degisken tanımlanır.
let getMessage2: (message: string) => string;
//3- atama yapılır.
getMessage2 = getMessage;
//function atama yapılabilecegi gibi su sekilde de yazabilirsiniz. veya
//getMessage2 = (message: string) => { return message + " removed"; }
//4- fonskiyon cagrilir. 
let message: string = getMessage2("GS");