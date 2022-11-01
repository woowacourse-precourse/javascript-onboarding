/**
 * 같은 글자를 연속으로 포함하는 닉네임을 가진 크루들의 이메일을 반환한다.
 * @param {string[][]} forms
 *   - [email, nickname]의 배열 (eg. ["jm@email.com", "제이엠"])
 *   - email과 nickname의 최대 길이는 20자 미만으로 제한되어 들어온다.
 * @returns
 */
function problem6(forms) {
  const substrings = getDuplicatedSubstring(forms);
  const emails = getEmailsWithStringsInNicknames(forms, substrings);
  return getSortedArrayFromStringSet(emails);
}

/**
 * TODO: 닉네임에 사용된 sub-string 중 중복이 있는 것들만 반환한다.
 * @param {string[][]} forms
 * @return {Set}
 */
function getDuplicatedSubstring(forms) {
  const subTotal = new Set();
  const subDuplicated = new Set();

  for (let i = 0; i < forms.length; i++) {
    const nickname = forms[i][1];
    const subUser = new Set();

    for (let j = 0; j < nickname.length - 1; j++) {
      const sub = nickname.slice(j, j + 2);
      if (!subUser.has(sub) && subTotal.has(sub)) {
        subDuplicated.add(sub);
      }
      subUser.add(sub);
      subTotal.add(sub);
    }
  }

  return subDuplicated;
}

/**
 * strings로 입력받은 문자열을 포함하는 닉네임을 가진 크루들의 이메일을 반환한다.
 * @param {string[][]} forms
 * @param {Set} strings
 * @return {Set}
 */
function getEmailsWithStringsInNicknames(forms, strings) {
  const ret = new Set();
  for (let i = 0; i < forms.length; i++) {
    const [email, nickname] = forms[i];
    for (let j = 0; j < nickname.length - 1; j++) {
      const sub = nickname.slice(j, j + 2);
      if (strings.has(sub)) {
        ret.add(email);
      }
    }
  }
  return ret;
}

/**
 * 스트링으로 구성된 Set을 입력받아 compareFucntion의 기준대로 정렬된 배열 형태로 반환한다.
 * @param {Set} strings
 * @param {Function} compareFunction
 * @returns {string[]}
 */
function getSortedArrayFromStringSet(strings, compareFunction) {
  return [...strings].sort(compareFunction);
}

module.exports = problem6;
