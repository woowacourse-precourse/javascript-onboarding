/**
 * 문자열의 연속 조합을 반환한다. ex) "수리남" -> ["수리", "리남"]
 * @param {string} str 
 * @returns {Array<string>} 조합된 배열
 */
function getCombinationOfStr(str) {
  return str
    .split("")
    .map((cur, idx, arr) => `${cur}${arr[idx + 1] || ''}`)
    .slice(0, str.length - 1);
}

/**
 * 중복된 값이 있는 지 확인
 */
function isRepeated(cur, idx, arr) {
  arr = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
  return getCombinationOfStr(cur[1])
      .map(((str) => arr.map(([_, name])=>[str, name])))
      .flat()
      .some(([target, source]) => source.includes(target));
}//arr 부수효과 제거해야 함

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
