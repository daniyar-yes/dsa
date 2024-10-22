function pivotIndex(nums: number[]): number {
    if (nums.length < 1) return -1;

    let leftSums = {
        0: 0,
    };
    let rightSums = {};

    let leftAccum = 0;
    let rightAccum = 0;

    for (let i=1; i<nums.length; i++) {
        leftAccum = leftAccum + nums[i-1];
        leftSums[i] = leftAccum;
    }

    rightSums[nums.length - 1] = 0;

    for (let i=nums.length-2; i>=0; i--) {
        rightAccum = rightAccum + nums[i+1];
        rightSums[i] = rightAccum;
    }

    for (const i in leftSums) {
        if (leftSums[i] == rightSums[i]) {
            return Number(i);
        }
    }

    return -1;
};