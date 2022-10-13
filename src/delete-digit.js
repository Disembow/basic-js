const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let max = 0;
  n = n.toString().split('');
  for (let i = 0; i < n.length; i++) {
    let newArr = [...n]
    newArr.splice(i, 1);
    max = Math.max(newArr.join('') * 1 , max);
  }
  return max;
}

module.exports = {
  deleteDigit
};
