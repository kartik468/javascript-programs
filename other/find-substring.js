//  eg- "#$$sanjay@ss test@3%%(" will return "sanjay@ss test@3"

const str = "#$$#####sanjay@ss test@3#%%(";

const strArray = str.split('');

let firstNonSpecialCharacterIndex = -1;
let lastNonSpecialCharacterIndex = -1;
let isSpecialCharacter = function(ch: string) {
    return "!@#$%^&*()_+".split('').includes(ch);
}

let noOfCycles = 0;
for (let index = 0; index < strArray.length; index++) {
    noOfCycles++;
    const character = strArray[index];
    if (!isSpecialCharacter(character)) {
        if(firstNonSpecialCharacterIndex === -1) {
            firstNonSpecialCharacterIndex = index;
        }
    }
    console.log(character);
    const startFromLastCharacter = strArray[str.length - index - 1];
    if (!isSpecialCharacter(startFromLastCharacter)) {
        console.log(str.length - index - 1);
        lastNonSpecialCharacterIndex = str.length - index - 1;
    }
    console.log(startFromLastCharacter);
    if (firstNonSpecialCharacterIndex !== -1 && lastNonSpecialCharacterIndex !== -1) {
        break;
    }
    // lastNonSpecialCharacterIndex = index;
}

console.log(firstNonSpecialCharacterIndex);
console.log(lastNonSpecialCharacterIndex);
console.log(noOfCycles, str.length);

console.log(str.substring(firstNonSpecialCharacterIndex, lastNonSpecialCharacterIndex + 1));
// console.log(strArray);