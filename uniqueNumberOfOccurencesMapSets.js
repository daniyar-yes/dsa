var uniqueOccurrences = function(arr) {
    if (arr.length === 1) return true;

    let occurences = new Map();
    let isUnique = false;

    for (let i=0; i<arr.length; i++) {
        let current = arr[i];
        if (!occurences.has(current)) {
            occurences.set(current, 0)
        }
        if (occurences.has(current)) {
            let count = occurences.get(current);
            occurences.set(current, count+1)
        }
    }

    let frequencies = new Set(occurences.values())

    return frequencies.size === occurences.size;
};