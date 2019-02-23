// CLass
class SampleNormal {

    private _title: string;

    get title(): string { return this._title; }
    set title(newTitle) { this._title = newTitle; }

    constructor(t: string) { this._title = t; }

    GetTitle(): void {
        
    }
}