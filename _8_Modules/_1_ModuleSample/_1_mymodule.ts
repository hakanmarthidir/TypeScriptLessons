//MODULE
// Moduller Kodlarınızı ayrıstırmak için kullanılırlar.
// Farklı işlere yarayan kodlar seperate edilmis olur
// Test edilebilirlilik için daha uygundur
// Bakımı daha kolaydır. 
// Tekrar kullanılabilirlilik acısından daha iyidir. 

//Seperation of Concerns : her moduleun kendi gorevi olabilir. data access, loggig vs. 
//Diger modulleri import ederek daha duzenli kullanımlar saglanabilir. 

//her dosya bir modul oldugu için bu dosya uzerindeki herhangi bir tanımlamayı kullandırtmak istiyorsak export anahtar kelimesini kullanırız.
//cok fazla export anahtar kelimesi ile bu işlemi yapmak takip acısından zor olabilir. buyuk bir dosya ise bunu gozle tarayıp hangileri export edilmis diye bakmak zorunda kalabiliriz. bunun yerine ilgili dosyanın sonunda toplu export işlemi daha uygun olabilir. 

// export interface IInterface {}
// class A { }
// export function moduleFunction() { }


interface IInterface {}
class A { }
function moduleFunction() { }

//guzel ozelliklerden bir tanesi de aynı adla export etmek zorunda olmayısımızdır. 
export { IInterface as MyInterface, A, moduleFunction }


//*** kullanılmak istenen yerde ise import anahtar kelimesi ile cagırım yapılabilir. 