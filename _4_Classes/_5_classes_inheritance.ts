//INHERITANCE 
//super keyword 
//Sample 1
class SubClass { }

class MainClassA extends SubClass {
    constructor() { super(); }
}

//Sample 2
class Athlete {

    private _name : string;

    get Name() { return this._name }
    set Name(value: string) { this._name = value; }

    constructor(humanName: string) {

        this._name = humanName;
    }

    run() { console.log('human started to run'); }
}


class BasketballPlayer extends Athlete {
    _playerno: number;

    constructor(playerNumber: number, playerName: string) {
        super(playerName);
        this._playerno = playerNumber;            
    }
}