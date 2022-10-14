const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const customFilter = (str) => {
  let res = [];
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    i === 0 ? res.push(arr[i]) : arr[i] !== arr[i - 1] ? res.push(arr[i]) : '';
  }
  return res;
}

function encodeLine( str ) {
  let result = '';
  let filtredArr = customFilter(str);
  for (let i = 0; i < filtredArr.length; i++) {
    let counter = 1;
    for (let j = 0; j < str.length; j++) {
      str[j] === filtredArr[i] && str[j + 1] === filtredArr[i] ? counter++ : '';
    }
    result += `${counter === 1 ? counter = '' : counter}${filtredArr[i].toString()}`;
  }
  return result;
}

console.log(encodeLine('abbcca'));

module.exports = {
  encodeLine
};
