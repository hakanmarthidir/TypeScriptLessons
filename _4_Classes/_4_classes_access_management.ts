//Access Management
//Class memberları varsayılan olarak publictir. 
class Student5 {

    private _name: string;
    constructor(name: string) { this._name = name; }

    get name(): string { return this._name; }
    set name(value: string) {
        if (value == undefined) {
            throw 'No Value';
        }
        this._name = value;
    }

    //Veya
    //getName(): string { return this._name; }
    //setName(value: string) {
    //    if (value == undefined) {
    //        throw 'No Value';
    //    }
    //    this._name = value;
    //}

    saySchoolNumber(startedYear: number) {
        if (startedYear === undefined || startedYear) {
            throw 'Invalid Year';
        }

        return this._name + '-' + 2019;
    }
}