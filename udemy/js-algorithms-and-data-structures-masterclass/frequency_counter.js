// Frequency Counter - sameFrequency

// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequencyMyTry(num1, num2) {
    const num1Str = num1 + '';
    const num2Str = num2 + '';

    if (num1Str.length !== num2Str.length) {
        return false;
    }

    const characterMap1 = new Map();
    // const characterMap2 = new Map();
    const length = num1Str.length;

    for (let index = 0; index < length; index++) {
        const ch1 = num1Str[index];
        const val1 = characterMap1.get(ch1) !== undefined ? characterMap1.get(ch1) + 1 : 1;
        characterMap1.set(ch1, val1);

        const ch2 = num2Str[index];
        const val2 = characterMap1.get(ch2) !== undefined ? characterMap1.get(ch2) + -1 : -1;
        characterMap1.set(ch2, val2);
    }

    const values = Array.from(characterMap1.values());

    // console.log(characterMap1);
    if (!values.find((val) => val !== 0)) {
        return true;
    }

    return false;
}

console.log('sameFrequencyMyTry(182, 281) //', sameFrequencyMyTry(182, 281)) // true
console.log('sameFrequencyMyTry(34, 14) //', sameFrequencyMyTry(34, 14)) // false
console.log('sameFrequencyMyTry(3589578, 5879385) //', sameFrequencyMyTry(3589578, 5879385)) // true
console.log('sameFrequencyMyTry(22, 222) //', sameFrequencyMyTry(22, 222)) // false

// original solution
console.log('///////////////////////////////////////////////////////////////////////////');

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

console.log('sameFrequency(182, 281) //', sameFrequency(182, 281)) // true
console.log('sameFrequency(34, 14) //', sameFrequency(34, 14)) // false
console.log('sameFrequency(3589578, 5879385) //', sameFrequency(3589578, 5879385)) // true
console.log('sameFrequency(22, 222) //', sameFrequency(22, 222)) // false