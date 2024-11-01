var makeFancyString = function(s) {
    if (s.length < 3) return s;
    let result = s[0];
    let sameCount = 1;

    for (let i=1; i<s.length; i++) {
        if (s[i] == s[i-1]) {
            sameCount++;
        } else {
            sameCount = 1;
        }
        if (sameCount <= 2) {
           result += s[i];
        }

    }


    return result;
};