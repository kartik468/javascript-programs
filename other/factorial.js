// to do

// 4! = 4 × 3 × 2 × 1 = 24
// 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
// 1! = 1

// iterative
function factorialIterative(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let index = n; index > 1; index--) {
        factorial = factorial * index;
    }
    return factorial;
}
console.log('iterative..');
console.log('4! = 24; ', factorialIterative(4));
console.log('7! = 5040; ', factorialIterative(7));
console.log('1! = 1; ', factorialIterative(1));

// ==============
// recursive
console.log('recursive..');
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}
console.log('4! = 24; ', factorialRecursive(4));
console.log('7! = 5040; ', factorialRecursive(7));
console.log('1! = 1; ', factorialRecursive(1));