var replaceElements = function(arr) {
    let maxRight = arr[arr.length-1]
    for (let i=arr.length-2; i>=0; i--) {
        if (maxRight > arr[i]) {
            arr[i] = maxRight
        } else {
            let temp = maxRight
            maxRight = arr[i]
            arr[i] = temp
        }
        
    }
    arr[arr.length-1] = -1
    return arr
};
