// write a function which returns a first pair which sums to zero
// should return [-2, 2] in below eg.
var inputArray = [-4, -3, -2, -1, 0, 1, 2, 5];

var sumZero = function(inputArray) {
    var left = 0;
    var right = inputArray.length - 1;
    while (left < right) {
        var sum = inputArray[left] + inputArray[right];
        if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            return [inputArray[left], inputArray[right]];
        }
    }
    return false;
};

var pairs = sumZero(inputArray);
console.log(pairs);