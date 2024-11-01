var rotate = function(nums, k) {
    k = k % nums.length;
    if (k === 0) return;
    
    
    let startIndex = nums.length - k;
    
    let tempArr = [];
    
    for (let i = startIndex; i < nums.length; i++) {
        tempArr.push(nums[i])
    }
    
    for (let i = 0; i < startIndex; i++) {
        tempArr.push(nums[i])
    }
    
    for (let i = 0; i<nums.length; i++) {
        nums[i] = tempArr[i]
    }
};