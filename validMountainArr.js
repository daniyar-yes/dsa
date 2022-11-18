var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false
    } 
    
    let hasDecreased = false;
    let hasIncreased = false;
    
    for (let i = 1; i < arr.length; i++) {
        
        let current = arr[i];
        let previous = arr[i - 1];
        
        if (current == previous)
            return false;
        else if (hasIncreased && hasDecreased && current > previous)
            return false;
        else if (current < previous && !hasIncreased)
            return false;
        else if (current > previous)
            hasIncreased = true;
        else if (current < previous)
            hasDecreased = true;
        
    }
    
    return hasIncreased && hasDecreased ? true : false;
        

};