interface ICar {
    price: number;
}

class Product {
    price: number;
}

//Birbirleri ile herhangi bir bagi olmamalarına ragmen yapısal olarak benzerlik gosterdikleri için 
//birbirleri yerine atama yapılabilirler. (ikisi de aynı property e sahip)

let abc: ICar;
abc = new Product();


//Sample 2
//Birebir uyum aranmıyor kapsaması da yeterlidir. 

interface ICar2 {
    price: number;
}

class Product2 {
    stock: number;
    price: number;
}

let abc2: ICar2;
abc2 = new Product2();


//yukarıdaki gibi bir durumda esitlik kontrolu yaptıgımızı var sayalım
let mycar2: ICar2 = { price: 23 };
let myProduct2: Product2 = { price: 15, stock: 23 };

mycar2 = myProduct2; //mycar2 için gecerli tum propertyler myproduct2 tarafından saglanır ve gecerli bir atamadır.
//myProduct2 = mycar2; // mycar2 içerisinde stock propertysi olmadıgı için hata alınır. 


// ---------------FUNCTIONS----------------------------------------------
/// benzer durum functionlarda da gecerlidir. 
let x = (a: number) => true;
let y = (b: number, c: string) => true;

y = x; 
//x = y;  Atama hatasi alinir.