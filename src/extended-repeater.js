const repeatStr = (str, repeatTimes, separator) => {
    let result = str;
    if (repeatTimes > 0) {
        let resultArray = Array.from({ length: repeatTimes }, () => result);
        result = resultArray.join(separator);
    }
    return result;
}
module.exports = function repeater(str, options) {
    let addition = repeatStr(
        options.addition === undefined ? '' : options.addition + '',
        options.additionRepeatTimes,
        options.additionSeparator || '|');
    
    return repeatStr(
        addition ? str + addition : str,
        options.repeatTimes,
        options.separator || '+');
};
