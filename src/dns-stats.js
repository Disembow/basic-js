const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats( domains ) {
  let result = {};
  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.').reverse(); // create array from each object item
    arr.reduce((sum, cur) => {
      sum += `.${cur}`; // create object key
      !result[sum] ? result[sum] = 1 : result[sum] += 1; // if not exists create else add +1
      return sum;
    }, '');
  };
  return result;
};

module.exports = {
  getDNSStats
};
