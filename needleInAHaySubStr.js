var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    let needlePointer = 0;

    for (let i = 0; i<haystack.length; i++) {
       
        if (haystack[i] === needle[needlePointer]) {
            needlePointer++;
        } else {
            i -= needlePointer;
            needlePointer = 0;
        }
         if (needlePointer == needle.length) {
            return (i-needlePointer+1);
        }
        
    }
    
    return -1;
};