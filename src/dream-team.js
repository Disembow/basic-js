const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = [];
  if (Array.isArray(members) !== true) {
    return false;
  };
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      for (let j = 0; j < members[i].length; j++) {
        if (members[i][j] !== ' ') {
          str.push(members[i][j].toUpperCase())
          break;
        };
      };
    }
  }
  return str.sort().join('');
}
console.log(createDreamTeam(['Amelia',null,undefined,'Ruby','Lily',11,'Grace',22,'Millie','Daisy',true,'Freya',false,'Erin',new Set([1, 2, 3, 4, 5]),'Megan',{'John': 'Smith'},'Jasmine',1,2,3,4,5,'Brooke',]))
// console.log(Array.isArray(true));

module.exports = {
  createDreamTeam
};
