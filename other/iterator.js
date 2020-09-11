let person = {
    firstName: 'kar',
    lastName: 'tik',
};

// person[Symbol.iterator] = function* () {
//     let keys = Object.keys(person);
//     for (const key of keys) {
//         yield this[key];
//     }
// };

person[Symbol.iterator] = function() {
    let keys = Object.keys(person);
    let count = 0;
    let isDone = false;

    let next = () => {
        if (count >= keys.length) {
            isDone = true;
        }
        return { done: isDone, value: this[keys[count++]] };
    };

    return { next };
};

// console.log(person);

for (const iterator of person) {
    console.log(iterator);
}
