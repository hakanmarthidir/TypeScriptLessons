//ENUMS -----------------------------------
enum Sports { Basketball, Football }; // 0, 1
enum Teams { Galatasaray = 1, Liverpool, Benfica }; // 1,2,3
enum Footballer { Ronaldo = 1, Messi = 3, Iniesta = 9, Sneijder = 23 }; // 1, 3, 9, 23

let mySport: Sports = Sports.Basketball;
console.log(mySport);  // 0 
let mySport2: string = Sports[mySport]; //Basketball


//STRING ENUMS

enum Floor {

    Floor1 = "Floor 1",
    Floor2 = "Floor 2",
    Floor3 = "Floor 3"
}


