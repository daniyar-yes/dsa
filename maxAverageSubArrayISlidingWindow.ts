function findMaxAverage(nums: number[], k: number): number {

    if (nums.length == 1) return nums[0];
    if (nums.length == k) {
        let normalAverage = nums.reduce((a,b) => a+b, 0,) / k;
        return normalAverage;
    }
    
    let maxSum: number = 0;
    let tempSum: number = 0;

    for (let i=0; i<k; i++) {
        maxSum += nums[i];
    }

    tempSum = maxSum;

    for (let j=k; j<nums.length; j++) {
        tempSum = tempSum - nums[j-k] + nums[j];
        maxSum = Math.max(maxSum, tempSum)

    }

    return maxSum / k;
    /*
    Intuion: it's a sliding window sum with sum / k, to give average.

    sliding window worked like this:
    1-3-1-2-5-6-1-3-2
    1-3-1
      3-1-2
        1-2-5
          2-5-6

    so, what we do, if the first loop to get the sum of the first k elems

    1-3-1 = 1+3+1 = 5

    Store it somewhere.
    It's our first sum, and the first average will be 5/3 = 1.66

    Then we slide the window, and subtract i elem and add k+1 elem, like so:
    1-3-1   minus 1 + 2
      3-1-2
    update the currentSum = 6
    update the current average = 6/3 = 2.

    update the max average if it's greater than previous, which is in our case.

    For the 2nd loop, we start and j=0, j<k, j++
    yeah.

    we need to return only the average value of the max.
    For max, we can use Math.max(a,b) in place to save memory, or we can store ALL the averages in a separate array, and do Math.max after. Which is not optimal I guess? DOn't know.

    let's start and see

    Exception: if n (nums.length) < k, return null.


    Important step: don't forget to put maxSum into tempSum afetr the first array, or will be as if 0
    */
};