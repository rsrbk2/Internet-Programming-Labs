function MultiplyMatrix(A, B) {

    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;
    let C = [];

    if (colsA != rowsB) return false;

    for (let i = 0; i < rowsA; i++) {
        C[i] = [];
    }

    for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
            let t = 0;
            for (let j = 0; j < rowsB; j++) {
                t += A[i][j] * B[j][k];
            }
            C[i][k] = t;
        }
    }

    return C;
}

function TransMatrix(A) {

    let m = A.length;
    let n = A[0].length;
    let AT = [];

    for (let i = 0; i < n; i++) {
        AT[i] = [];
        for (let j = 0; j < m; j++) {
            AT[i][j] = A[j][i];
        }
    }

    return AT;
}


// Используется алгоритм Барейса, сложность O(n^3)
function Determinant(A) {

    let N = A.length;
    let B = [];
    let denom = 1;
    let exchanges = 0;

    for (let i = 0; i < N; ++i) {
        B[i] = [];
        for (let j = 0; j < N; ++j) {
            B[i][j] = A[i][j];
        }
    }

    for (let i = 0; i < N - 1; ++i) {
        let maxN = i, maxValue = Math.abs(B[i][i]);
        for (let j = i + 1; j < N; ++j) {
            let value = Math.abs(B[j][i]);
            if (value > maxValue) {
                maxN = j;
                maxValue = value;
            }
        }
        if (maxN > i) {
            let temp = B[i];
            B[i] = B[maxN];
            B[maxN] = temp;
            ++exchanges;
        }
        else {
            if (maxValue == 0) return maxValue;
        }
        let value1 = B[i][i];
        for (let j = i + 1; j < N; ++j) {
            let value2 = B[j][i];
            B[j][i] = 0;
            for (let k = i + 1; k < N; ++k) B[j][k] = (B[j][k] * value1 - B[i][k] * value2) / denom;
        }
        denom = value1;
    }
    if (exchanges % 2) return -B[N - 1][N - 1];
    else return B[N - 1][N - 1];
}

function MaxElement(A) {
    let max = A[0][0];

    for (let i = 0; i < A.length; i++) {
        let B = A[i];
        for (j = 0; j < B.length; j++) {
            if (B[i] > max) {
                max = B[i];
            }
        }
    }

    return max;

}

let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let E = new MultiplyMatrix(A, new TransMatrix(A));

console.log(E);
