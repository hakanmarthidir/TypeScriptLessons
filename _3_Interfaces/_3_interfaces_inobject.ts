interface Student {
    name: string;
    lastname: string;
    startedYear?: number;
    isFinished: () => boolean;
    sayHello: (msg: string) => string;
    gotoBed: () => void;
};

var s: Student = {       
    name: 'Hakan',
    lastname: 'Hidir',
    startedYear: 2002,
    sayHello: function (message: string) { return 'Hello, ' + message },
    gotoBed: function () { console.log('Bed time!') },
    isFinished: function () { return false; }
};

s.gotoBed();