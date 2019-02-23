class Laptop {

    readonly laptopSize: number = 15;
    readonly laptopBrand: string;

    //readonly propretylere ilk atama ya propertyi yaratırken 
    // yada constructor içerisinde verilebilir. 

    constructor(lBrand: string) {
        this.laptopBrand = lBrand;        
    }
}


let l = new Laptop("dell");
// l.laptopBrand = "asdas";  readonly oldukları için hata verir. 
// l.laptopSize = 21;        readonly oldukları için hata verir. 