// function calculateMatrixSum(matrix) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++)
//     for (var j = 0; j < matrix[i].length; j++) sum += matrix[i][j];
//   return sum;
// }

const calculateMatrixSum = (matrix) => {
  let sum = 0;
  matrix.map((raw) => {
    for (let j = 0; j < raw.length; j++) sum += raw[j];
  });
  return sum;
};
