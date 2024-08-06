const moveZeroes = function(nums) {
    let writePointer = 0;
     
     for(let i = 0; i < nums.length; i++) {
         if(nums[i]!==0) {
             [nums[i], nums[writePointer]] = [nums[writePointer], nums[i]];
             writePointer++;
         }
     }
     return nums;
 };