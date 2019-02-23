//FUNC IN FUNC
function mainFunc() {
    var total = 10;
    return function inFunc() {
        var bTotal = total * 3.14;
        return bTotal;
    }
}

var showTotal = mainFunc();