//ARROW TYPE

//Sample 1
var getNameArrow = (firstname: string, lastname: string) => firstname + ' ' + lastname;
console.log(getNameArrow('Deneme', 'Dene'));



//Sample 2
let arr = function (x) { return x.name === "Galatasaray"; }
let err = x => x.name === "Galatasaray";


//Sample 3
var calculate: (numbers: { n1: number; n2?: number }) => number;
var number1 = { n1: 5 };
var number2 = { n1: 3, n2: 5 };

calculate = function (numbers) {

    if (numbers.n2 === undefined) {
        return numbers.n1 * numbers.n1;
    }
    return numbers.n1 * numbers.n2;
};

console.log(calculate(number1));
console.log(calculate(number2));



//Sample 4 :  Fonksiyon Tipini Belirleme 
let myAdd: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number { return x + y; };

let myAdd2: (baseValue: number, increment: number) => number =
    function (x, y): number { return x + y; };