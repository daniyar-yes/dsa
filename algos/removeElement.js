var removeElement = function(nums, val) {    
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i]==val) {
            nums.splice(i,1)
            i--
        }
    }
      
    return nums.length
    
};

var removeElement2 = function(nums, val) {
    while (nums.includes(val)){
        nums.splice(nums.indexOf(val),1);
    }
    return nums.length;
};

function removeElement3(nums, val) {
    for (let i = 0; i < nums.length;) {
      if (nums[i] === val) {
        nums.splice(i, 1);
      } else {
        i++;
      }
    }
    return nums.length;
  }; 