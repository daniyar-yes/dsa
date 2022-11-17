// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]


const duplicateZeros = function(arr) {
    let isDuplicate = false;
    for (let i=0; i<arr.length; i++) {
        if (arr[i]===0 && !isDuplicate) {
            for (let j=arr.length-1; j>i+1; j--) {
                arr[j] = arr[j-1]
            }
            // preventing adding 0 if the last item in array, because can't go over the original length
            if (i<arr.length-1) {
                arr[i+1] = 0
                isDuplicate = true
            }
        } else if (arr[i] === 0 && isDuplicate) {
            isDuplicate = !isDuplicate
        }
    } 
    return arr
}

