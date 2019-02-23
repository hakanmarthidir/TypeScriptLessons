//VAR
// lobal scopeda tanımlı bir degisken turudur. scope içi veya dışı farketmeksizin erişebilir ve deger atanabilir. 

var mynumber = 2;
if (mynumber % 2 == 0) {
    var mynumber = 3;
}
console.log("Var : " + mynumber);



//LET
//sadece tanımlandığı scope içerisinden erişilebilir. 
//cevap : 2 dir. 
let mynumber2 = 2;
if (mynumber2 % 2 == 0) {
    let mynumber2 = 4;
}
console.log("Let : " + mynumber2);


//*** Fonksiyonlar yeni scope yaratırlar. Bu ornekte cevap New York olacaktır.
var country = 'New York';
function test() {
    var country = 'Boston';
}
test();
console.log("Function : " + country); 



//CONST---------------------------------------------
//Degeri degistirilemeyen scoped bazlı tanımdır.
const allPlayers = [
    { name: 'Michael', surname: 'Jordan' },
    { name: 'Dennis', surname: 'Rodman' }
];;
//allPlayers = [];  -> constant oldugu için degistiremezsiniz. ama eleman ekleyebilirsiiz. 
allPlayers.push({ name: 'Scottie', surname: 'Pippen' });