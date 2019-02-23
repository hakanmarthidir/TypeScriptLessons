//OPTIONAL PARAMETER  ? ile kullanılır. 
function optionalSample(id: number, firstname?: string): string { return id.toString(); }

optionalSample(1, "ajkshdjasd");
optionalSample(2);



//DEFAULT PARAMETERS
function defaultSample() { return "Default"; }
function defaultSample2(firstname: string = "default value"): string { return ""; }
function defaultSample3(firstname: string = defaultSample()): string { return ""; }

defaultSample2();
defaultSample2("deneme");
defaultSample3();



//REST PARAMS ...
function getRestParameters(teachername: string, ...students: string[]) {    
        for (let a of students) {
            console.log(a);
        }  
}
let restCall1 = getRestParameters("deneme1", "a", "b", "c");
let restCall2 = getRestParameters("deneme2", "f", "g");

function getRestParameters2(teachername: string, ...students: string[]) {    
    return teachername + " " + students.join(" ");
}