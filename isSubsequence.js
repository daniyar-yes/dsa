var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;
    
    let subsequence = 0;
    for (let i = 0; i < t.length; i++) {
      if (s[subsequence] === t[i]) {
        subsequence++;
      }
    }
    if (subsequence === s.length) return true;
    else return false;
  };