const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const getAlphabet = ( letterCase ) => {
  let alphabet = [];
  let firstLetter;
  letterCase === 'upper' ? firstLetter = 65 : letterCase === 'lower' ? firstLetter = 97 : '';
  for (let i = 0; i <= 25; i++) {
    alphabet.push(String.fromCharCode(firstLetter + i));
  }
  return alphabet;
};

const getScaledKey = (str, key) => {
  let keyToStrLength = '';
  let keyScale = Math.ceil(str.length / key.length);
  for (let i = 0; i < keyScale; i++) {
    keyToStrLength += key;
  };
  keyToStrLength = keyToStrLength.substring(0, str.length);
  return keyToStrLength;
};

// console.log(getScaledKey('attack at dawn', 'alphonse'));

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
    this.type === undefined || this.type === true ? this.type = "direct" : this.type = "reverse";
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!')
    };
    let alphabet = getAlphabet('lower');
    let alphabetLength = alphabet.length;
    let keyGrowed = getScaledKey(str, key).toLowerCase();
    let result = '';
    str = str.toLowerCase();

    let i = 0;
    let j = 0;
    while (i < str.length) {
      let strIndex = alphabet.indexOf(str[i]);
      let alfabetIndex = alphabet.indexOf(keyGrowed[j]);
      if (strIndex === -1) {
        result += str[i];
        i++;
      } else {
        result += alphabet[(strIndex + alfabetIndex) % alphabetLength];
        i++;
        j++
      };
    };
    result = result.toUpperCase();
    return this.type === "reverse" ? result.split('').reverse().join('') : result;
  };

  decrypt(encrStr, key) {
    if (!encrStr || !key) {
      throw new Error('Incorrect arguments!')
    };

    let alphabet = getAlphabet('lower');
    let alphabetLength = alphabet.length;
    let keyGrowed = getScaledKey(encrStr, key).toLowerCase();
    let result = '';
    encrStr = encrStr.toLowerCase();
    let i = 0;
    let j = 0;
    while (i < encrStr.length) {
      let strIndex = alphabet.indexOf(encrStr[i]);
      let alfabetIndex = alphabet.indexOf(keyGrowed[j]);
      if (strIndex === -1) {
        result += encrStr[i];
        i++;
      } else {
        result += alphabet[Math.abs(alphabetLength + (strIndex - alfabetIndex)) % alphabetLength];
        i++;
        j++
      };
    };
    result = result.toUpperCase();
    return this.type === "reverse" ? result.split('').reverse().join('') : result;
  };
}

// const directMachine = new VigenereCipheringMachine()
const reverseMachine = new VigenereCipheringMachine(false)
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))
// console.log('LEARN FRONTEND DEVELOPMENT :)');
// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))
// console.log('LEARN FRONTEND DEVELOPMENT :)');
// console.log(directMachine.repeatString('lmao', 6))
console.log(reverseMachine.encrypt('attack all!', 'aabaac'))
console.log(reverseMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))
// console.log(reverseMachine.repeatString('lmao', 6))

module.exports = {
  VigenereCipheringMachine
};
