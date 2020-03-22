const chainMaker = {
  values: [],
  getLength() {
    return this.values.length;
  },
  addLink(value) {
    if (arguments.length === 0){
      value = '';
    }
    this.values.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position)) {
      let calculatedPosition = position - 1;
      if (calculatedPosition < this.values.length && calculatedPosition >= 0) {
        this.values.splice(calculatedPosition, 1);
        return this;
      }
    }
    this.values = [];
    throw new Error();
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    if (this.values.length > 0) {
      let result = this.values.join('~~');
      this.values = [];
      return result;
    } else {
      throw new Error();
    }
  }
};

module.exports = chainMaker;
