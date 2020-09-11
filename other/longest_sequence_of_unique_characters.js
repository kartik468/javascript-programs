function lenghtOfLongestSubstring(inputString) {
    if (inputString.length === 0) {
        return 0;
    } else if (inputString.length === 1) {
        return 1;
    }

    let lookup = new Map();
    let len = inputString.length;
    let max = 0;
    let start = 0;

    for (let i = 0; i < len; i++) {
        const ch = inputString.charAt(i);
        if (lookup.has(ch) && lookup.get(ch) >= start) {
            start = lookup.get(ch) + 1;
        }
        lookup.set(ch, i);
        max = Math.max(max, i - start + 1);
        
    }
    return max;
}

console.log(lenghtOfLongestSubstring('kartik')); // should return 5
console.log(lenghtOfLongestSubstring('longest_substring')); // should return 8

