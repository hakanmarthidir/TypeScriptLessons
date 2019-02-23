    //HtmlTableElement Typescriptte built in bir tiptir. veya HtmlInputElement vs.
    //document.getElementById() methodu ile bir html nesnesini almak istedigimizde sistem bize bu nesneyi HtmlElement tipinde verir. 

    class EmailGenerator {

        private _emailTextBox: HTMLInputElement;
        private _emailButton: HTMLButtonElement;
        private _emailSpan: HTMLSpanElement;

        constructor(txtId: string, btnId: string, spnId: string) {

            this._emailTextBox = <HTMLInputElement>document.getElementById(txtId);
            this._emailButton = <HTMLButtonElement>document.getElementById(btnId);
            this._emailSpan = <HTMLSpanElement>document.getElementById(spnId);
            this.addClickEvent();
        }

        addClickEvent() {

            this._emailButton.addEventListener('click', event => { this._emailSpan.innerHTML = this.CreateEmail(this._emailTextBox.value); });

        }


        CreateEmail(email : string) :string {

            if (email === undefined) {
                throw 'Undefined Email';
            }
            var generatedEmail = email + '@abcd.com';
            console.log(generatedEmail);
            return generatedEmail;
        }
    }

    window.onload = function () {
        var generator = new EmailGenerator('txtEmail', 'btnEmail', 'spnEmail');
    }