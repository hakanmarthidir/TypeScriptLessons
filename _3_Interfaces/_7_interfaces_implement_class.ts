interface IHuman {
    run(callback: (miles: number) => void): void;
    walk(callback: (duration: number) => void): void;
    sayName(callback: (name: string) => string): string;

}

class Human implements IHuman {

    run(callback: (miles: number) => void): void {
        throw new Error("Method not implemented.");
    }

    walk(callback: (duration: number) => void): void {
        throw new Error("Method not implemented.");
    }

    sayName(callback: (name: string) => string): string {
        throw new Error("Method not implemented.");
    }
}

//Interfacei Type olarak kullanma
//Bir class illa interfacei  implement etmek zorunda degildir. 
//Yaratılan interface i type olarak kullanıp polymorphic bir davranıs sergilenebilir. 
class Team {
    player: IHuman;
}