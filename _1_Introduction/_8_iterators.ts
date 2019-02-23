//For Of iterable nesneler uzerinde Symbol.iterator özelliğini çağırır.

let teamMembers: Array<string>= ["a","b","c"];

//Output : 
//a 
//b 
//c
for (let i of teamMembers) {
    console.log(i);
}

//Output : 
//0 
//1 
//2 
for (let i in teamMembers) {
    console.log(i);
}