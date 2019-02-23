
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
// function add(a: any, b:any, c?:number): any {
//     return a + b;
// }

function add(a: number, b: number, c?: number) {
    if (typeof c === 'undefined') {
        return a + b;
    }
    else {
        return a + b + c;
    }
}


console.log(add(1,2));
console.log(add(1,2,3));
