var removeDuplicates = function(nums) {
    let unique = nums[0]
    
    for (let i=1; i<nums.length; i++) {
        if (nums[i]===unique) {
            nums.splice(i,1)
            i--
        } else {
            unique = nums[i]
        }
    }
    
};

let nums = [1,2,4,4,5,6,7,7,7,8]

var removeDuplicates2 = function(nums) {
    let insertIndex = 1;
    for(let i = 1; i < nums.length; i++){
        // We skip to next index if we see a duplicate element
        if(nums[i - 1] != nums[i]){  
            /* Storing the unique element at insertIndex index and incrementing
               the insertIndex by 1 */
            nums[insertIndex] = nums[i];  
            insertIndex++; 
        }
    }
    return insertIndex;
};