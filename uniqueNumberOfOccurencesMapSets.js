var uniqueOccurrences = function(arr) {
    if (arr.length === 1) return true;

    let occurences = new Map();

    for (let i=0; i<arr.length; i++) {
        if (!occurences.has(arr[i])) {
            occurences.set(arr[i], 0)
        }
        if (occurences.has(arr[i])) {
            let count = occurences.get(arr[i]);
            occurences.set(arr[i], count+1)
        }
    }

    let frequencies = new Set(occurences.values())

    return frequencies.size === occurences.size;
};