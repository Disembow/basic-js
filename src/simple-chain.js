const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink( value ) {
    value === undefined ? this.arr.push('( )~~') : this.arr.push(`( ${value} )~~`);
    return this;
  },
  removeLink( position ) {
    if ( position > this.arr.length - 1 || position <= 0 || isNaN(position) || !Number.isInteger(position) ) {
      this.arr = [];
      throw new Error ("You can't remove incorrect link!");
    }
    this.arr.splice( position - 1, 1 );
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let e = this.arr[this.arr.length - 1].slice(0, this.arr[this.arr.length - 1].length - 2);
    this.arr.pop();
    this.arr.push(e);
    let str = this.arr.join('');
    this.arr = [];
    return str;
  }
};


// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0).finishChain());

module.exports = {
  chainMaker
};
