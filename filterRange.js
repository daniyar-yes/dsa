const filterRange = (arr, a, b) => {
    let filtered = [];
    arr.forEach((item) => {
        if (item >= a && item <= b) {
            filtered.push(item)
        }
    })
    return filtered;
}

// or better

arr.filter(item => (a <= item && item <= b));