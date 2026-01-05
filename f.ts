/* basic object type */
var person: { name: string; age: number } = {
    name: "Akshay",
    age: 25
};

console.log(person.name);
console.log(person.age);

/* object with more properties */
var car: { brand: string; year: number; electric: boolean } = {
    brand: "Tesla",
    year: 2024,
    electric: true
};

console.log(car.brand);
console.log(car.year);
console.log(car.electric);

/* optional property */
var user: { id: number; email?: string } = {
    id: 1
};

console.log(user.id);
console.log(user.email);

/* readonly property */
var product: { readonly id: number; name: string } = {
    id: 101,
    name: "Laptop"
};

/* product.id = 200 not allowed */
product.name = "Gaming Laptop";
console.log(product);

/* object as function parameter */
function printStudent(student: { roll: number; name: string }) {
    console.log(student.roll);
    console.log(student.name);
}

printStudent({ roll: 10, name: "Rahul" });

/* object as function return */
function getBook(): { title: string; price: number } {
    return {
        title: "TypeScript Guide",
        price: 500
    };
}

var book = getBook();
console.log(book.title);
console.log(book.price);

/* nested object type */
var order: {
    orderId: number;
    customer: { name: string; city: string };
} = {
    orderId: 9001,
    customer: {
        name: "Amit",
        city: "Delhi"
    }
};

console.log(order.customer.name);
console.log(order.customer.city);

/* type alias for object */
type Employee = {
    id: number;
    name: string;
};

var emp1: Employee = { id: 1, name: "Kiran" };
var emp2: Employee = { id: 2, name: "Suman" };

console.log(emp1);
console.log(emp2);

/* index signature object */
var marks: { [subject: string]: number } = {};

marks["math"] = 90;
marks["science"] = 85;

console.log(marks);

/* array of objects */
var usersList: { id: number; username: string }[] = [
    { id: 1, username: "akshay" },
    { id: 2, username: "ram" }
];

console.log(usersList);

/* object with union type property */
var response: { status: string; data: string | null } = {
    status: "success",
    data: null
};

console.log(response);
