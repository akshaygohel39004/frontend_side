/* array declaration */
var numbers: number[] = [1, 2, 3, 4, 5];

/* readonly array */
var readonlyNumbers: readonly number[] = [10, 20, 30];

/* access */
console.log(numbers[0]);
console.log(numbers.length);

/* add remove */
numbers.push(6);
numbers.pop();

numbers.unshift(0);
numbers.shift();

/* loop */
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(function (n) {
    console.log(n);
});

/* search using indexOf */
var index = numbers.indexOf(3);
console.log(index);

/* some logic without some method */
var hasGreaterThanFour = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 4) {
        hasGreaterThanFour = true;
        break;
    }
}
console.log(hasGreaterThanFour);

/* every logic without every method */
var allPositive = true;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        allPositive = false;
        break;
    }
}
console.log(allPositive);

/* map using loop */
var doubled: number[] = [];
for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}
console.log(doubled);

/* filter using loop */
var evens: number[] = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }
}
console.log(evens);

/* reduce using loop */
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);

/* slice */
var sliced = numbers.slice(1, 3);
console.log(sliced);

/* splice */
numbers.splice(2, 1, 99);
console.log(numbers);

/* sort */
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

/* reverse */
numbers.reverse();
console.log(numbers);

/* join */
var joined = numbers.join(",");
console.log(joined);

/* concat */
var moreNumbers: number[] = [7, 8, 9];
var combined = numbers.concat(moreNumbers);
console.log(combined);

/* fill using loop */
var filled: number[] = [];
for (var i = 0; i < 5; i++) {
    filled.push(0);
}
console.log(filled);

/* readonly usage */
function printReadonly(arr: readonly number[]) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printReadonly(readonlyNumbers);

/* tuple */
var user: [number, string] = [1, "Akshay"];

/* destructuring */
var first = numbers[0];
var second = numbers[1];
