// Generic Interfaces and Constraints
// T yi tek basına yazabilecegimiz gibi illa IProducttan turesin diye de bir kuralimiz olabilir. 

interface IProduct { }

interface IBasket<T> {

    addItem: (newItem: T) => void;
    getAllItems: () => Array<T>;
}

let bookBasket: IBasket<Book>;

class Basket<T extends IProduct> implements IBasket<T> {

    addItem: (newItem: T) => void;
    getAllItems: () => T[];
}