module.exports = function getSeason(date) {
  if (date) {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      let month = date.getMonth() + 1;
      let result = '';
      switch (month) {
        case 1:
        case 2:
        case 12:
          result = 'winter';
          break;
        case 3:
        case 4:
        case 5:
          result = 'spring';
          break;
        case 6:
        case 7:
        case 8:
            result = 'summer';
            break;
        case 9:
        case 10:
        case 11:
            result = 'autumn';
        break;
      }
      return result;
    } else {
      throw new Error();
    }
  }
  return 'Unable to determine the time of year!';
};
