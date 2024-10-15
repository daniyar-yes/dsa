function longestSubarray(nums) {
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let maxLen = 0;

    while (right < nums.length) {
       if (nums[right] === 0) {
           zeroCount += 1;
       }

       while (zeroCount > 1) {
           if (nums[left] === 0) {
               zeroCount -= 1;
           }
           left += 1;
       }

       maxLen = Math.max(maxLen, right - left)

       right += 1;
    }

    return maxLen;
};