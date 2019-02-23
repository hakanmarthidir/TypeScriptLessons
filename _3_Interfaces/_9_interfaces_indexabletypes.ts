interface IRatingList{    
    [index:number] : number;
}

let rateList : IRatingList = [23,15,33,91];
console.log(rateList[0]);  //23 


interface ICinemaList {
    [index:number] : string;
}

let cinemaList : ICinemaList = ["Se7en","Forest Gump"]
console.log(cinemaList[1]); // Forest Gump
