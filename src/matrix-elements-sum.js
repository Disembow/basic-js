const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum( matrix ) {
  let counter = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let transporedMatrix = [];
  for (let i = 0; i < n; i++) {
    transporedMatrix[i] = [];
    for (let j = 0; j < m; j++) {
      transporedMatrix[i][j] = matrix[j][ i ];
    };
  };
  for (let i = 0; i < transporedMatrix.length; i++) {
    for (let j = 0; j < transporedMatrix[i].length; j++) {
      if (transporedMatrix[i][j] === 0) {
        break;
      } else {
        counter += transporedMatrix[i][j];
      };
    };
  };
  return counter;
}

module.exports = {
  getMatrixElementsSum
};
