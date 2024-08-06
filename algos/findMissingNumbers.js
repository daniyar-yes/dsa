const findDisappearedNumbers = function(nums) {
    const resultArr = [];
    resultArr.length = nums.length;
    const output = []; 


    for (let i = 0; i < nums.length; i++) {
      resultArr[nums[i] - 1] = nums[i];
    }
    
    for (let i = 0; i < resultArr.length; i++) {
        if (!resultArr[i]) {
            output.push(i + 1)
        }
    }
    
    return output;
};

// o(n2) solution is:
// let missing = [];
// for (let i =0; i<=nums.length; i++) {
// if (!nums.includes(i)) {missing.push(i)}
//}
// n2 because includes is o(n) itself