var isIsomorphic = function(s, t) {
    if (s === t) return true;
    if (s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
         if (!obj1[s[i]] && !obj2[t[i]]) {
            obj1[s[i]] = t[i];
            obj2[t[i]] = s[i];
         } else if (obj1[s[i]] !== t[i] || obj2[t[i] !== s[i]]) return false;
  }

  return true;
};