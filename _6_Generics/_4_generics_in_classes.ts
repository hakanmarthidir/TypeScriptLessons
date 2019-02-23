class GenericA {
    walk() { console.log("A") }
}

abstract class GenericB {
    walk() { console.log("B") }
}

class GenericC extends GenericA {
    walk() { console.log("C"); }
}

class ClassMaker<T>{
    // T nin newlenebilen bir nesne oldugunu formatladık. 
    create(T: new () => T): T {
        return new T();
    }
}

let classMaker = new ClassMaker<GenericA>();
classMaker.create(GenericA);
//classMaker.create(GenericB); newlenemedigi icin hata alınacaktır. 
classMaker.create(GenericC);
