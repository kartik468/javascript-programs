console.log('fibonacci...');
console.log('find nth number in fibonacci series');

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// 1, 2, 3, 4, 5, 6, 7,  8,  9, 10

// in O(n) time

function generateFibonacciArray(number) {
    const array = [];
    for (let index = 0; index < number + 1; index++) {
        if (index === 0 || index === 1) {
            array.push(index);
        } else {
            array.push(array[index - 2] + array[index - 1]);
        }
    }
    return array;
}

console.log(generateFibonacciArray(10));

function getNthFibonacciRecursive(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return getNthFibonacciRecursive(n - 1) + getNthFibonacciRecursive(n - 2); 
}

console.log(getNthFibonacciRecursive(10));

// in constant time O(1)

const phi = (1 + Math.sqrt(5)) / 2;
// x6 = ((phi ^ 6) - ((1 - phi) ^ 6)) / sqrt of 5
// https://www.mathsisfun.com/numbers/fibonacci-sequence.html
function getNthFibonacci(n) {
    const val = (Math.pow(phi, n) - Math.pow((1 - phi), n)) / Math.sqrt(5);

    return Math.round(val);
}

console.log(getNthFibonacci(10));