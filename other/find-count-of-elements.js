// find count of elements whose right side has small elements than it
var inputArray = [1, 4, 5, 2, 3, 4]; // 5, 4 ==> 2
var inputArray = [1, 4, 6, 5, 2, 3, 4]; // 6, 5, 4 ==> 3
var inputArray = [5, 4, 3, 2, 1]; // 5, 4, 3, 2, 1 ==> 5

var resultCount = 1;

var maxRightNumber = inputArray[inputArray.length - 1];
// console.log(maxRightNumber);

for (var index = inputArray.length - 2; index >= 0; index--) {
  const element = inputArray[index];
  // console.log(element);
  if (element > maxRightNumber) {
    console.log('element', element);
    resultCount++;
    maxRightNumber = element;
  }
}
// console.log(maxRightNumber);
console.log(resultCount);
