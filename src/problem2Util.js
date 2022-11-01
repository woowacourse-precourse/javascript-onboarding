/**
 * 문자열을 받아 대문자가 없는지, 길이가 조건에 맞는지 확인한다
 * @param {string} checkString
 * @param {number} min
 * @param {number} max
 * @returns
 */
const isValidString = (checkString, min, max) => {
  if (checkString.length > max || checkString.length < min) {
    return false;
  }
  if (checkString.match(/[A-Z]/)) {
    return false;
  }
  return true;
};

module.exports = { isValidString };
