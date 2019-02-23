//Static
class SampleStatic {
    static desc: string = "asdasd";
}

let staticVariable = new SampleStatic();
// staticVariable.   desc e erişemezsiniz.

let description = SampleStatic.desc;