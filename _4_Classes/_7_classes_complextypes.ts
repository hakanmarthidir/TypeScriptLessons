class School {
    constructor(public schoolName: string) { }
}

class StudentComplex {

    private _studentname: string;
    private _school: School;

    constructor(stname: string, scname: School) {
        this._studentname = stname;
        this._school = scname;
    }

    giveFullInfo() : string { return this._studentname + ' - ' + this._school.schoolName }
}


window.onload = function () {

    var schoolSample = new School('Uludag');
    var studentSample = new StudentComplex('Hakan', schoolSample);
    console.log(studentSample.giveFullInfo());
}