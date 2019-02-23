//ARRAYS - INDEXERS - ARRAY--------------------------------
let emptyArray: number[] = [];
let teams: string[] = ['bulls', 'bucks', 'heat', 'pacers'];
let players : Array<string> = ["jordan","pippen","rodman","kerr"];
let anyArray: any[] = [23, true, 'sasddas'];

let favouriteTeam = teams[0];
console.log(favouriteTeam);

let arrayVar : number[] = [23,15,33];
let [myFavourite, yourFavourite, herFavourite] = arrayVar;
console.log(myFavourite);



//READONLY ARRAY
let nameList : string[] = ["a","b","c"];
let readonlyNameList : ReadonlyArray<string> = nameList;

//readonlyNameList[0] = "hakan";  CALISMAZ
//readonlyNameList.push("deneme");  CALISMAZ
//readonlyNameList.length = 50;   CALISMAZ
//nameList = readonlyNameList;  CALISMAZ

//Asagidaki sekilde atama yapılırsa kabul eder. 
nameList = readonlyNameList as string[];





//TUPLES-------------------------------
let myTuple: [string, number] = ['Hakan', 23];
let firstElement = myTuple[0]; //Hakan
myTuple[0] = 'Eleman';
myTuple[1] = 45;