//Tekrar kullanımları yaygınlastırmak ve ortak bir imza uzerinde anlasarak ilerleyebilmek amacı ile OOP nin interface yapısı TypeScript tarafından da desteklenmektedir. functionların veya propertylerin kalıplarını olusturabilirsiniz ve type olarak kullanabilirsiniz. 

//parametre olarak bir number alan ve geriye number donen bir fonksiyonun interface ornegi 
interface IMathInterface { 
    (x: number): number; 
}

var mathFunc: IMathInterface = (number) => number * 3.14;
console.log(mathFunc(5));    