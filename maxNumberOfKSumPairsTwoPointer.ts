function maxOperations(nums: number[], k: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    let numberOfOperations: number = 0;

// we need to sort it first, and there is no need to actually remove anything since we don't return nums -_- stupid js
    const sortedNums = nums.sort((a,b) => a-b);
    console.log(sortedNums)

// then we use 2 pointers, and key is to compare not == or !==, but < or > than k
    while (left < right) {
        if (sortedNums[left] + sortedNums[right] < k) {
            left++;
        } else if (sortedNums[left] + sortedNums[right] > k) {
            right--;
        } else {
            left++;
            right--;
            numberOfOperations++;
        }
    }


    return numberOfOperations;

};