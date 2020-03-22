module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = [];
        if (arr && Array.isArray(arr)) {
            arr.forEach(item => {
                if (Array.isArray(item)) {
                    depth.push(1 + this.calculateDepth(item));
                } else {
                    depth.push(1);
                }
            });
            return depth.length > 0 ? depth.reduce((max, cur) => Math.max(max, cur)) : 1;
        }
        return 1;
    }
};