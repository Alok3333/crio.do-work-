// CheckMagicSquare

// let arr = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
// let arr = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
let arr = [[1, 2, 2], [2, 2, 1], [2, 1, 2]];

function magicSquare(mat) {
    let n = mat.length;
    let firstRowSum = 0;
    for (let i = 0; i < n; i++) {
        firstRowSum += mat[0][i]
    }
    // console.log(firstRowSum, "firstRowSum");
    for (let i = 0; i < n; i++) {
        let sumRow = 0;    // each of rowSum and colSum
        let sumCol = 0;
        for (let j = 0; j < n; j++) {
            sumRow += mat[i][j]
            sumCol += mat[j][i]
        }
        // console.log(sumRow, "row");
        // console.log(sumCol, "col");
        if (firstRowSum != sumRow && firstRowSum != sumCol) {
            return "No 1";
        }
    }

    let diagonalSum = 0;
    let reverseDiagonalSum = 0;
    for (let i = 0; i < n; i++) {
        diagonalSum += mat[i][i];
        reverseDiagonalSum += mat[i][n - 1 - i];
    }
    // console.log(diagonalSum, "diagonal");
    // console.log(reverseDiagonalSum, "re-diagonal");
    if (diagonalSum != reverseDiagonalSum) {
        return "No 2";
    }

    if (diagonalSum != firstRowSum) {
        return "No 3";
    }

    return "Yes";
}

let res = magicSquare(arr);
console.log(res);