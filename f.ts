
{// number type
let age: number = 30;
let temperature: number = 25.5;

// string type
let firstName: string = "Akshay";
let greeting: string = `Hello, ${firstName}`;

// boolean type
let isAdmin: boolean = false;

// type inference (no explicit type)
let score = 100; // inferred as number

// any type
let data: any = "Hello World";
data = 123; // no error because 'any' allows any type

// simple function using types
function addNumbers(a: number, b: number): number {
    return a + b;
}

let result = addNumbers(10, 15); // 25
console.log(greeting, result, isAdmin);
}