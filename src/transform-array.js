const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  };
  arr = [...arr];
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      arr[i - 1] === '--discard-next' ? '' : arr[i - 1] === '--double-next' ? result.push(arr[i], arr[i]) : result.push(arr[i]);
    } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
      result.length > 0 ? result.pop() : '';
    } else if (arr[i] === '--double-prev') {
      arr[i -2] !== '--discard-next' ? result.push(result[result.length - 1]) : '';
    }
    result[result.length - 1] === '--discard-next' || result[result.length - 1] === '--discard-prev' || result[result.length - 1] === '--double-next' || result[result.length - 1] === '--double-prev' ? result.pop() : '';
  }
  result[0] === undefined ? result.shift() : '';
  return result;
}

module.exports = {
  transform
};
