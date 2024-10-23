var findDiagonalOrder = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let result = [];
    

    let diagonals = {};


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let key = i + j;

            if (!diagonals[key]) {
                diagonals[key] = [];
            }
            diagonals[key].push(mat[i][j]);
        }
    }
    

    for (let key in diagonals) {
        let diagonal = diagonals[key];
        if (key % 2 === 0) {

            result.push(...diagonal.reverse());
        } else {

            result.push(...diagonal);
        }
    }
    
    return result;
};