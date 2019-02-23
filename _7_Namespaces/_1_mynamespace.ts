// Changes In Typescript 1.5 
// 1.5 ten once external ve internal moduller vardı. Her ikisi de moduller olarak kullanıldıgı için kafa karısıklııgna sebep oluyordu.   

// 1.5 ile birlikte; 
// Internal Modules > namespaces  
// External Modules > modules 

//Namespaceler kucuk client uygulamaları için en iyi secimlerden biridir. 
//bu namespacei baska bir yerde kullanmak isterseniz ///<reference path="dosya_adi.ts" /> demeniz yeterlidir. 
//export demezsek namespace içerisindeki hic bir seye erisemeyiz. 

namespace MyFirstNamespace {

    export namespace Trade {
        export function A() { }
        export function B() { }
        export function C() { }
    }

    export function insertFunc() { }

    function privateMethod() { }

    export class MyMember { AddMember() { } }

}

//EXTEND ETME : 
//aynı namespace adı ile yeni nesneler olusturdugunuzda onceki nesnelere ek olarak yenilerde ilgili namespace altında gorunur olur. (export edilmis olanlar...)
namespace MyFirstNamespace {

    export class Bike { }
}

//Sample 2
namespace MyFramework.Tools.Logger {
    export class MyLogger{ };
}

namespace MyFramework.Tools.Notification {
    export class MyNotifier { };
}

namespace MyFramework.Tools.DataAccess {
    export class MyDataManager { };
}


var logger = new MyFramework.Tools.Logger.MyLogger();

//Create Shortcut
import Logging = MyFramework.Tools.Logger;
var logger2 = new Logging.MyLogger();