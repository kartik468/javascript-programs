// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// Time Complexity - O(n)
// Space Complexity - O(n)
// Bonus
// You must do this with constant or O(1) space and O(n) time.

var countUniqueValues = function(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var uniqueValues = 1;
    var previous = 0;
    var next = 1;
    while (next < arr.length) {
        if (arr[previous] !== arr[next]) {
            uniqueValues++;
        }
        previous++;
        next++;
    }
    return uniqueValues;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([-2, -1, 1, 1, 4, 5, 6]));
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
