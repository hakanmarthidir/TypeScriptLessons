//her dosya bir modul ve bir dosya içerisinde export edeceginiz sadece bir tane nesne var ise onu default olarak export edebilirsiniz.
//import ederken nesne adını bilmek zorunda kalmazsınız. 

export default class DefaultExportSample {
    constructor(public name: string) { }
}