// find count of elements whose right side has small elements than it
var inputArray = [1, 4, 5, 2, 3, 4];

var resultCount = 1;

var maxRightNumber = inputArray[inputArray.length - 1];
console.log(maxRightNumber);

for (var index = inputArray.length - 2; index > 0; index--) {
    const element = inputArray[index];
    console.log(element);
    if (element > maxRightNumber) {
        resultCount++;
        maxRightNumber = element;
    }

}
console.log(maxRightNumber);
console.log(resultCount);