const heightChecker = function(heights) {
    if (heights.length == 0) return 0;
    let peak = 0;
    let wrongs = [];
    let expected = [...heights];
    expected.sort((a,b) => a-b);
    for (let i=0; i<heights.length; i++) {
        if (heights[i] !== expected[i]) {
            wrongs.push(heights[i]);
        }
    } return wrongs.length;
};