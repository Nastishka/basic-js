module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let transformedArr = [];
        arr.forEach((item, index) => {
            switch (item) {
                case '--discard-next':
                    break;
                case '--discard-prev':
                    if (transformedArr.length > 0) {
                        transformedArr.pop();
                    }
                    break;
                case '--double-next':
                    if (arr.length > index + 1) {
                        transformedArr.push(arr[index + 1]);
                    }
                    break;
                case '--double-prev':
                    let newIndex = index - 1;
                    if (newIndex >= 0) {
                        transformedArr.push(arr[newIndex]);
                    }
                    break;
                default:
                    if (index === 0 || arr[index - 1] != '--discard-next') {
                        transformedArr.push(item);
                    }
            }

        });
        return transformedArr;
    } else throw new Error();
};
