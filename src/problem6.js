/**
 * 기능 목록
 * 1. forms 데이터를 입력 받는다.
 * 2. 닉네임에서 두 글자 씩 추출한다.
 * 3. 추출된 두 글자가 다른 닉네임에 존재하는지 확인한다.
 * 4. 존재하면 두 닉네임에 같은 글자가 연속적으로 포함함을 표시한다.
 * 5. 같은 글자가 연속적으로 포함하는 form의 이메일을 result 배열에 추가한다.
 * 6. result 배열을 문자열 오름차순으로 정렬한다.
 * 7. result 배열을 return 한다.
 */

/**
 * @param {string} str
 * @returns {string[]} two chars list
 */
function getTwoCharsInString(str) {
  const result = new Set();
  for (let i = 0; i < str.length - 1; i++) {
    result.add(str.slice(i, i + 2));
  }
  return [...result];
}

/**
 * @param {string[]} twoCharsList
 * @param {string} nickname
 * @returns {boolean} has same twoChars
 */
function checkHasSame(twoCharsList, nickname) {
  return twoCharsList.some((twoChars) => nickname.includes(twoChars));
}

/**
 * @param {[string, string][]} forms
 * @returns {boolean[]} duplicated data
 */
function findDuplicatedData(forms) {
  const result = new Array(forms.length).fill(false);
  const nicknames = forms.map((form) => form[1]);
  for (let i = 0; i < nicknames.length - 1; i++) {
    for (let j = i + 1; j < nicknames.length; j++) {
      const twoCharsList = getTwoCharsInString(nicknames[i]);
      const hasSameChars = checkHasSame(twoCharsList, nicknames[j]);
      if (hasSameChars) {
        result[i] = true;
        result[j] = true;
      }
    }
  }
  return result;
}

/**
 * @param {[string, string][]} forms
 * @returns {string[]} result
 */
function solution(forms) {
  const duplicated = findDuplicatedData(forms);
  const result = [];
  duplicated.forEach((element, index) => {
    if (element) {
      const [email] = forms[index];
      result.push(email);
    }
  });
  result.sort();
  return result;
}

/**
 * @param {[string, string][]} forms
 * @returns {string[]} result
 */
function problem6(forms) {
  const result = solution(forms);
  return result;
}

module.exports = problem6;
