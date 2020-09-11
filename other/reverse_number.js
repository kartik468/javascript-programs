// pseudo code to reverse a number 123 to 321
function reverseNumber(n) {
    let rev = 0, remainder;
    while (n != 0) {
        remainder = n % 10;
        rev = rev * 10 + remainder;
        n = Math.floor(n / 10);
    }
    return rev;
}


console.log(reverseNumber(123));

function reverseNumberMyTry(num) {
    let reverseNumbers = [];

    while(num) {
        reverseNumbers.push(num % 10);
        num = Math.floor(num / 10);
    }

    let result = 0; 
    console.log(reverseNumbers);
    for (let index = 0; index < reverseNumbers.length; index++) {
        const digit = reverseNumbers[index];
        result += digit * Math.pow(10, (reverseNumbers.length - index - 1));
    }
    return result;
}

console.log(reverseNumberMyTry(123));