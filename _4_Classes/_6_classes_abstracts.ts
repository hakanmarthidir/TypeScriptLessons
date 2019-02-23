// ABSTRACT CLASSES
//initialize edilemezler. 
abstract class AbstractSample {
    abstract abstractMethod(): void;
}

class MainClassB extends AbstractSample {

    abstractMethod(): void {
        throw new Error("Method not implemented.");
    }
}

//CLASS EXPRESSION

let expressionSample = class extends AbstractSample {
    abstractMethod(): void {
        throw new Error("Method not implemented.");
    }
}

let myexp = new expressionSample();
myexp.abstractMethod();

//sample2
class Exp2 extends class { firstname: string } { fullname: string; }

let exp2Sample = new Exp2();
exp2Sample.firstname = "";
exp2Sample.fullname = "sdfsd dsfsd";