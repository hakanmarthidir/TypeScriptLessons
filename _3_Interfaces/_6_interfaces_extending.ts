//Sample 1
interface IPerson {

    name: string;
    address: string;
    age: number;
    isMarried: boolean;
}

interface IStudent extends IPerson {
    lessonCount: number;
}

class MathClass {
    getStudents(...students: IStudent[]) {

        for (var i = 0; i < students.length; i++) {
            console.log(students[i].name + ' ' + students[i].lessonCount.toString());
        }
    }
}


//Sample 2 
interface IA { id: number; }
interface IB { firstname: string; }
interface IExtended extends IA, IB { age: number; }

let interfaceObject: IExtended =
{
    age: 35,
    firstname: "asdas",
    id: 1
}

//Implementation Interface
class SampleClass implements IExtended {
    age: number;
    id: number;
    firstname: string;
}
