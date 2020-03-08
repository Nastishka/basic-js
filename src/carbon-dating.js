const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && sampleActivity.constructor === String) {
    let finalActivity = parseFloat(sampleActivity);
    if (finalActivity && finalActivity > 0 && finalActivity < MODERN_ACTIVITY) {
      return Math.ceil(
        Math.log(MODERN_ACTIVITY / finalActivity) * HALF_LIFE_PERIOD / Math.LN2.toFixed(3)
      );
    }
  }
  return false;
};
