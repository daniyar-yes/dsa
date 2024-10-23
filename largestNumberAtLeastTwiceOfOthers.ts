function dominantIndex(nums: number[]): number {
    let max: number = 0;
    let maxIndex: number = -1;
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    
    for (let i=0; i<nums.length; i++) {
        if (i === maxIndex) {
            continue;
        }
        
        if (nums[i] > max / 2) {
            return -1;
        }
    }
    
    return maxIndex;
};