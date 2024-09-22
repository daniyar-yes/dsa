function productExceptSelf(nums: number[]): number[] {
    let answer: number[] = [];
    for (let i=0; i<nums.length; i++) {
        answer.push(1)
    }

    let runningProductLeft: number = 1;
    let runningProductRight: number = 1;

    for (let i=1; i<nums.length; i++) {
        runningProductLeft = runningProductLeft * nums[i-1]
        answer[i] = runningProductLeft;
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        runningProductRight = runningProductRight * nums[i+1];
        answer[i] = answer[i] * runningProductRight;
    }
    return answer;
};

/*
✅Intuition
The goal is to calculate the product of all elements in the array except the current element for each position, without using division. To achieve this, we can use two passes through the array to calculate products to the left and right of each element, thereby constructing the desired product by multiplying these partial results.
✅Approach
1.💥Initialize the Output Array : Create an answer array initialized with 1s, which will store the final product results.
2.💥Calculate Left Products :
⚡Traverse the input array from left to right.
⚡For each element, keep a running product of all elements to its left.
⚡Store this running product in the answer array for each index.
3.💥Calculate Right Products and Final Result :
⚡Traverse the input array from right to left.
⚡For each element, maintain a running product of all elements to its right.
⚡Multiply the right product with the value already in the answer array, which contains the left product, to get the final result for each index.
4.💥Return the Result :
⚡The answer array now contains the product of all elements except the current one for each index.
✅Complexity
🔥Time complexity : O(n)
🔥Space complexity : O(1)
*/