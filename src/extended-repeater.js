const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater( str, options ) {
  let res = '';
  options.separator ? '' : options.separator = '+';
  options.additionSeparator ? '' : options.additionSeparator = '|';
  options.repeatTimes ? '' : options.repeatTimes = 1;
  options.additionRepeatTimes ? '' : options.additionRepeatTimes = 1;
  options.addition !== undefined ? '' : options.addition = '';
  options.addition = String(options.addition);
  console.log(options)
  for (let i = 0; i < options.repeatTimes; i++) {
    let add = '';
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      add += options.addition + (j < options.additionRepeatTimes - 1 ? options.additionSeparator : '');
    }
    res += str + add + (i < options.repeatTimes -1 ? options.separator : '');
  }
  return res;
}

module.exports = {
  repeater
};
