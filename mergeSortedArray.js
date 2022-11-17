var merge = function(nums1, m, nums2, n) {
    let s = 0;
    let d = 0;
    
    const moveRight = function(arr, leftLimit) {
        for (let j=arr.length-1; j>leftLimit; j--) {
            arr[j] = arr[j-1]
        } return arr
    }
    
    while (d < nums1.length) {
    if (nums2[s] < nums1[d]) {
        moveRight(nums1, d);
        nums1[d] = nums2[s];
        s++;
        d++; //we don't loop over D here, need to increase d so that it's from 0 to lenght again
        console.log('s increased')
    } else {
        d++;
        console.log('d increased')
    }}
    return nums1
};

var merge2 = function(nums1, m, nums2, n) {
    let s = 0;
    let d = 0;
    
    const moveRight = function(arr, leftLimit) {
        for (let j=arr.length-1; j>leftLimit; j--) {
            arr[j] = arr[j-1]
        } return arr
    }
    
    while (d < nums1.length) {
    if (nums2[s] < nums1[d]) {
        moveRight(nums1, d);
        nums1[d] = nums2[s];
        s++;
        d = 0;
        console.log('s increased')
    } 
        else if ( m < d <= (m+n)) {
            nums1[d] = nums2[s]
            s++;
        }
        else {
        d++;
    }}
    return nums1
};

var merge3 = function(nums1, m, nums2, n) {
    let s = 0;
    for (let i = m; i < (m+n); i++) {
        nums1[i] = nums2[s];
        s++;
    }
}

const mergeFinal = function(nums1, m, nums2, n) {
    let s = 0;
    for (let i = m; i < (m+n); i++) {
        nums1[i] = nums2[s];
        s++;
    }
    
    function swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    
    let smallestIndex = 0;
    let currentIndex = 1;
    let beginningIndex = 0;
    
    while(beginningIndex < nums1.length) {
        while(currentIndex < nums1.length) {
            if(nums1[smallestIndex] > nums1[currentIndex]) {
                smallestIndex = currentIndex
            }
            currentIndex++
        }
        if (smallestIndex !== beginningIndex) {
            swap(nums1, smallestIndex, beginningIndex)
        }
        
    beginningIndex++
    currentIndex = beginningIndex + 1;
    smallestIndex = beginningIndex;
    }
    

    return nums1
};
