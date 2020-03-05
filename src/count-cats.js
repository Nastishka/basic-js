const EARS = '^^';
module.exports = function countCats(matrix) {
  if (Array.isArray(matrix) && matrix.length > 0) {
    return matrix
      .flat(Infinity)
      .filter(element => element === EARS)
      .length;
  }
  return 0;
};
