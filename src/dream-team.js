module.exports = function createDreamTeam(members) {
  if (members && Array.isArray(members)) {
    let firstLetters = [];
    members.forEach(name => {
      if (name && name.constructor === String) {
        let trimmedName = name.trim();
        if (trimmedName.length > 0) {
          firstLetters.push(trimmedName[0].toUpperCase());
        }
      }
    });
    return firstLetters.sort().join('');
  }
  return false;
};