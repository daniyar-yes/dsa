var searchInsert = function(nums, target) {
    let min = 0;
    let max = nums.length-1;
    while (min<max) {
        let mid = Math.floor((max+min)/2);
        if (nums[mid] === target) {return mid};
        if (nums[mid] < target) {
            min = mid+1;
        }
        else {
            max = mid;
        }
        if (min === max) {
            return target <= nums[min] ? min : min + 1;
        }
    }
}