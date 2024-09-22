function increasingTriplet(nums: number[]): boolean {
    if (nums.length  < 3) return false;

    let firstMin: number = Infinity;
    let secondMin: number = Infinity;

    for (let num of nums) {
        if (num <= firstMin) {
            firstMin = num;
        }
        else if (num <= secondMin) {
            secondMin = num;
        }
        else {
            return true;
        }
    }

    return false;
};

// works because First IF is for the First min in triplet, ELSE IF is for the Second, and return true is when the third in a wave shape is there, regardless if in a row or not