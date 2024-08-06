const countUnique = (arr) => {
    if (arr.length == 0) return 0;
    let counter = 1;
    if (arr.length == 1) return counter;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            counter++;
        }
    } return counter;
}