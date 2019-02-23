///<reference path="_1_mynamespace.ts" /

// ilgili namespace içerisinde baska bir namespace varsa ve içi boş ise . denildiginde gorunmez. 

//ornegin namespaceadi.nesneadi yazmak uzun gelebilir bunun yerine dosya basına tanımlama yapabilirsiniz. 
//bunun için import tanımlamaismi = MyFirstNamespace.nesneadi dersek artık tanımlama adı ile cagırabiliriz. 

import MyN = MyFirstNamespace.Trade;

let nameVar = MyN.A();
let objectVar = new MyFirstNamespace.MyMember();

// privateMethod export edilmedigi için namespace dısına cıkamaz. 
// let privateMethod = MyFirstNamespace.


//extend access
let bikeVar = new MyFirstNamespace.Bike();