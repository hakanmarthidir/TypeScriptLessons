
interface Duck {

    walk: () => void;
    swim: () => void;
    quack: () => void;
}

let myDuck = {

    walk: () => console.log('walk'),
    swim: () => console.log('swim'),
    quack: () => console.log('quack')
}

function FlySwimQuack(bird: Duck) { }
FlySwimQuack(myDuck);