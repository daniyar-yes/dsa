var rotateString = function(s, goal) {

    if (s.length !== goal.length) return false;

    let circularString = s + s;

    for (let i=0; i <= circularString.length - goal.length; i++) {
        let substring = circularString.slice(i, i + goal.length)
        if (substring === goal) {
            return true;
        }
    }

    return false;
};