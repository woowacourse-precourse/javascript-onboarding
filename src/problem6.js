/* 
 * 중복된 값이 있는 지 확인 
 */
function isRepeated(cur, idx, arr) {
}

/**
 * @param {Array<Array<string>>} forms
 * @returns {Array<string>} 중복 닉네임 email list
 */
function problem6(forms) {
  return forms
    .filter(isRepeated)
    .map(([email]) => email)
    .sort();
}

module.exports = problem6;
