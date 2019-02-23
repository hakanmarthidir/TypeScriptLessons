//NUMBER----------------------------------------
// hexadecimal, binary, octal, int, float destekler.
let decimalNumber : number = 3.1447;
let intNumber : number = 23;
let hexNumber : number= 0xf00d;
let binaryNumber : number = 0b1010;
let octalNumber:number = 0o744;

let 
 aNumber = 1,
 bNumber=2, 
 cNumber=3;


//BOOLEAN----------------------------------------
let isActive : boolean = true;


//STRING-----------------------------------------
// tek tırnak veya cift tırnak 
let studentName : string = "Hakan";
let studentSurname: string = 'Hidir';


//NULL----------------------------------------------
//null tipi tum primitive tiplerin alt tipidir. undefined haric.
let luckyNo: number = null;
let student: {} = null;
let player: any = null;


//UNDEFINED---------------------------------------------
//undefined ise tum tiplerin alt tipidir. 
let undefinedCountry = undefined; //degisken any tipindedir.


//DATE--------------------------------------------
let todayValue:Date = new Date();
console.log("Date : " + todayValue.toDateString());


//NEVER---------------------------------------------
//asla gerceklesmeyecek degerlerin türünü temsil eder. 
function throwSample(message: string): never {throw new Error(message);}
function listenEveryTime(): never { while (true) {}}


//VOID -----------------------------------------
//any nin karsıt tipi gibidir. herhangi bir type içermez. herhangi bir value donmez anlamındadır ve genellikle functionlarda kullanıldıgını gozlemleriz
function voidSample(name :string): void{ console.log("void function sample");}
let voidVariable : void = undefined;



//UNION TYPES
let a : string|number = "hakan";
a= 23;
//a=true; tanımlı tiplerden birini atayabilirsiniz. 
//a=[];
a=undefined;
a=null;


//SYMBOLS 
//ES2015 ile gelmistir ve number ve string gibi primitive tiplerden biridir. 
//Symbol constructorunu cagırarak yaratabilirsiniz. 








