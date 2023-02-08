const search = function(nums, target) {
    
    let min = 0;
    let max = nums.length-1;

    while (min <= max) {
        let middle = Math.floor(min + (max-min)/2);
        if (nums[middle] === target) return middle;
        else if (nums[middle] > target) {
            max = middle-1;
        }
        else if (nums[middle] < target) {
            min = middle+1;
        }
    }
    return -1;
};