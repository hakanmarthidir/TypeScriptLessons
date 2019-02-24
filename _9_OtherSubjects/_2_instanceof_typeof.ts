// TYPEOF
// Primitive tipleri kontrol etmek için kullanılan bir keydir.

class Mytype{}

class TypeOfClass{

    typeCheck(x: any) : string {
        if (typeof x === "number") {
            return "type is number";
        }
        else if(typeof x === "string")
        {
            return "type is string";
        }
        // kendi yarattıgınız classları typeof ile kontrol edemezsiniz.
        // else if (typeof x === "Mytype") {
        //     return "type is mytype";
        // }
        else
        {
            return "type";
        }
    }
}

let typeControl = new TypeOfClass();
let typeObject= "deneme";
console.log(typeControl.typeCheck(typeObject));


// INSTANCEOF
// typeof key ine benzer bir anahtar kelimedir. 
class InstanceChecker{

    instanceCheck(x: any) : string {
        if (x instanceof Mytype) {
            return "type is mytype";
        }     
        else
        {
            return "instanceof";
        }
    }

    checkAndReturnDefault(sn: string | null): string {
        return sn || " my default";
    }
}
let instanceControl = new InstanceChecker();
let instanceObject = new Mytype();
console.log(instanceControl.instanceCheck(instanceObject));
console.log(instanceControl.checkAndReturnDefault(null));