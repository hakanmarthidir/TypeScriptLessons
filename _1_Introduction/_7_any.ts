//ANY-----------------------------------------------
//dinamik contentler ile calistigimizda terch edebiliriz, ne gelecegini bilmedigimiz durumlarda kullanabiliriz.
let score: any = 23;
score = "string value";
score = true;
score = 4.5;

let myJob = function (arg) { return arg; } // arg any tipindedir. herhangi bir tip parametre olarak gelebilir.

let text1 : any = "Deneme";
let value1 : number = (<string>text1).length;
let value2 : number = (text1 as string).length;


//any in function
function anyFunc(arg):any{

    if(typeof arg === "string"){ return "this is string";}
    else if(typeof arg === "number"){return arg + 23;}
    else{ throw new Error('Nothing'); }
}
