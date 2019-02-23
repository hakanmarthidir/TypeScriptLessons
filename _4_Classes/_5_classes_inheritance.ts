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

    protected _height : number;

    constructor(humanName: string, humanheight : number) {

        this._name = humanName;
        this._height = humanheight;
    }

    run() { console.log('human started to run'); }
}


class BasketballPlayer extends Athlete {
    private _playerno: number;

    get PlayerNo() { return this._playerno }
    set PlayerNo(value: number) { this._playerno = value; }


    constructor(playerNumber: number, playerName: string, playerHeight:number) {
        super(playerName, playerHeight);
        this._playerno = playerNumber;            
    }
}

let nbaPlayer = new BasketballPlayer(23,"Jordan",6.4);
console.log(nbaPlayer.Name);
console.log(nbaPlayer.PlayerNo);
// console.log(nbaPlayer._height); protected oldugu için erişemezsiniz.