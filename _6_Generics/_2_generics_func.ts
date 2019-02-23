//Generic Functions 
function LogAndReturn<T>(thing: T): T {
    console.log(thing);
    return thing;
}

let some: string = LogAndReturn<string>('log value');
let book: Book = new Book();
let someBook: Book = LogAndReturn<Book>(book);