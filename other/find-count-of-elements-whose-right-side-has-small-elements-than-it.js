// find count of elements whose right side has small elements than it
var inputArray0 = [1, 5, 2, 3, 4]; // 5, 4 ==> 2
var inputArray1 = [1, 6, 5, 2, 3, 4]; // 6, 5, 4 ==> 3
var inputArray2 = [5, 4, 3, 2, 1]; // 5, 4, 3, 2, 1 ==> 5
var inputArray3 = [5, 4, 3, 2]; // 5, 4, 3, 2, 1 ==> 5

function getCount(inputArray) {
  var resultCount = 1;

  var maxRightNumber = inputArray[inputArray.length - 1];
  // console.log(maxRightNumber);

  for (var index = inputArray.length - 2; index >= 0; index--) {
    const element = inputArray[index];
    // console.log(element);
    if (element > maxRightNumber) {
      //   console.log('element', element);
      resultCount++;
      maxRightNumber = element;
    }
  }
  // console.log(maxRightNumber);
  console.log(inputArray, resultCount);
  return resultCount;
}

getCount(inputArray0);
getCount(inputArray1);
getCount(inputArray2);
getCount(inputArray3);
console.log('=========');
function getCountBruteForce(inputArray) {
  var resultCount = 0;

  for (let index = 0; index < inputArray.length; index++) {
    const mainElement = inputArray[index];

    let pass = true;
    for (let index1 = index + 1; index1 < inputArray.length; index1++) {
      const minorElement = inputArray[index1];
      //   console.log(mainElement, minorElement);
      if (mainElement < minorElement) {
        pass = false;
      }
    }
    if (pass) {
      resultCount++;
      pass = true;
    }
  }

  console.log(inputArray, resultCount);
  return resultCount;
}

getCountBruteForce(inputArray0);
getCountBruteForce(inputArray1);
getCountBruteForce(inputArray2);
getCountBruteForce(inputArray3);
