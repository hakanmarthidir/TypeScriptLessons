class Employee {
    name: string;
    surname: string;
}

interface IManager extends Employee{
    department:string;
}

let newManager : IManager = {
    name:"deneme",
    surname:"deneme",
    department:"a"
};