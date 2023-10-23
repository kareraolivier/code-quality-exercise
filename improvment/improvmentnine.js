// function calculateMatrixSum(matrix) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++)
//     for (var j = 0; j < matrix[i].length; j++) sum += matrix[i][j];
//   return sum;
// }

const calculateMatrixSum = (matrix) =>
  matrix.reduce(
    (accumulator, current) =>
      accumulator +
      current.reduce((accumulator, current) => accumulator + current)
  );
calculateMatrixSum();
