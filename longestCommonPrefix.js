var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    let prefix = "";
    
    for (let j=0; j<strs[0].length; j++) {
        let currentChar = strs[0][j];
        
        for (let i=1; i<strs.length; i++) {
            if (j >= strs[i].length || strs[i][j] !== currentChar) {
                return prefix;
            }
        }
        
        prefix = prefix + currentChar;
    }
    
    
    return prefix;
};