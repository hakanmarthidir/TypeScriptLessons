//VOID

//Sample 1
function writeFullName(firstname: string, lastname: string): void {
    console.log(firstname + " " + lastname);
}

writeFullName("abcd", "efgh");


//Sample 2
var sendMail: (to?: string) => void;
sendMail = (to: string) => { console.log(to); }

sendMail("abcd@defg.com");
sendMail();



//Sample 3 
let changeSpanText = function () {
    document.getElementById("spnTitle").innerHTML = 'Changed Text';
}

var mybutton = document.getElementById("btn1");
mybutton.onclick = changeSpanText;