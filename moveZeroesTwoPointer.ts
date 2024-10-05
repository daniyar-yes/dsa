/**
 1---2---3---0---0---1---0
r,w
1) val = 1;
2) nums[r] = 0; =>
 0---2---3---0---0---1---0
r,w

3) if val!==0, true, val=1,
   nums[w] = val
   nums[w] = 1;
 1---2---3---0---0---1---0
r,w
w++

 1---2---3---0---0---1---0
r    w

4) next iteration

 1---2---3---0---0---1---0
    r,w
val = 2;
 1---0---3---0---0---1---0
    r,w
val!==0;true;
 1---2---3---0---0---1---0
    r,w
w++, r++

5) next iteration

 1---2---3---0---0---1---0
        r,w
val = 3;
 1---2---0---0---0---1---0
        r,w
val!==0;true;
 1---2---3---0---0---1---0
        r,w
w++, r++

6) next iteration

 1---2---3---0---0---1---0
            r,w
val = 0;
 1---2---3---0---0---1---0
            r,w
val!==0;false;r++

 1---2---3---0---0---1---0
             w   r

7) next iteration

 1---2---3---0---0---1---0
             w   r
val = 0;
 1---2---3---0---0---1---0
             w   r

val!==0;false;r++

 1---2---3---0---0---1---0
             w       r

8) next iteration

 1---2---3---0---0---1---0
             w       r
val = 1;
 1---2---3---0---0---0---0
             w       r

val!==0;true;
nums[w] = val;
w++

 1---2---3---1---0---0---0
                 w       r

**/

function moveZeroes(nums: number[]): void {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    let val = nums[readPointer];
    nums[readPointer] = 0;

    if (val !== 0) {
      nums[writePointer] = val;
      writePointer++;
    }
  }
}
