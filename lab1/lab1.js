
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function generateMatrix() {

    let matrix = [];

    for(let i=0; i<9; i++) {
        matrix[i] = [];
        for(let j=0; j<9; j++) {
            matrix[i][j] = getRandomInt(10,100);
        }
    }

    return matrix;
}

function symmetricMatrix(matrix) {
    for(let i=0; i<9; i++) {
        for(let j=0; j<4; j++) {
            matrix[i][9-j-1] = matrix[i][j];
        }
    }

    return matrix;
}

let matrix = generateMatrix();

console.log("Generated matrix:")
console.log(matrix);

console.log("\n");
console.log("Symmetric matrix:");
console.log(symmetricMatrix(matrix));