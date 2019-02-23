//C# Java C++ gibi class kullanılabilen bir dilden geliyorsanız Typescript içerisindeki classlara aşinasınız demektir. 
//Classların Typescript içerisindeki görevi, code u encapsulate etmek, functionlar ve degiskenler gibi yapıları reusable hale getirmektir. container gibi dusunebilirsiniz.

//Class Uyeleri ---------------------
//A. Fields - Degiskenler
//B. Constructors
//C. Properties
//D. Functions 

// Access Modifiers --------------
// Public 
// Private 
// Protected 

class Student {
    name: string;
    constructor(studentname: string) {
        this.name = studentname;
    }

}

//Kısa yol 
class Student2 {
    constructor(public studentname: string) { }
}


//With Function
class Student3 {

    name: string;
    constructor(name: string) { this.name = name; }

    saySchoolNumber(startedYear: number) {
        if (startedYear === undefined || startedYear) {
            throw 'Invalid Year';
        }

        return this.name + '-' + 2019;
    }
}

//window.onload
class Student4 {
    studentName: string;
    studentLastname: string;
    constructor(name: string, surname: string) {
        this.studentName = name;
        this.studentLastname = surname;        
    }

    GetStudent() {
        console.log(this.studentName + " " + this.studentLastname);
    }
}

window.onload = function () {
    var student = new Student4("Hakan", "Hıdır");
    student.GetStudent();

}