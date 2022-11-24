const removeDuplicates(nums) {
        
    // The initial length is simply the capacity.
    const length = nums.length;
    
    // Assume the last element is always unique.
    // Then for each element, delete it iff it is
    // the same as the one after it. Use our deletion
    // algorithm for deleting from any index.
    for (let i = length - 2; i >= 0; i--) {
        if (nums[i] == nums[i + 1]) {
            // Delete the element at index i, using our standard
            // deletion algorithm we learned.
            for (let j = i + 1; j < length; j++) {
                nums[j - 1] = nums[j];
            }
            // Reduce the length by 1.
            length--;
        }
    }
    // Return the new length.
    return length;
}
