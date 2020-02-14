// pending
function lenghtOfLongestSubstring(s) {
    if (s.length === 0) {
        return 0;
    } else if (s.length === 1) {
        return 1;
    }

    let lookup = new Map();
    let len = s.length;
    let max = 0;
    let start = 0;

    for (let i = 0; i < len; i++) {
        const c = s.charAt(i);
        if (lookup.has(c) && lookup.get(c) >= start) {
            start = lookup.get(c) + 1;
        }
        lookup.set(c, i);
        max = Math.max(max, i - start + 1);
        
    }
    return max;
}

console.log(lenghtOfLongestSubstring('abcabcdeabc'))

