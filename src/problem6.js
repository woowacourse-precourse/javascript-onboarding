/**
 * 같은 글자를 연속으로 포함하는 닉네임을 가진 크루들의 이메일을 반환한다.
 * @param {string[][]} forms
 *   - [email, nickname]의 배열 (eg. ["jm@email.com", "제이엠"])
 *   - email과 nickname의 최대 길이는 20자 미만으로 제한되어 들어온다. 
 * @returns 
 */
function problem6(forms) {
  const subStrings = getDuplicatedSubstring(forms)
  const emails = getEmailsWithstringsInNicknames(forms, subStrings)
  // TODO: emails의 중복 제거 및 오름차순 정렬
  return emails;
}

/**
 * TODO: 닉네임에 사용된 sub-string 중 중복이 있는 것들만 반환한다.
 * @param {string[][]} forms
 * @return {string[]}
 */
function getDuplicatedSubstring(forms) {
  return []
}

/**
 * strings로 입력받은 문자열을 포함하는 닉네임을 가진 크루들의 이메일을 반환한다.
 * @param {string[][]} forms
 * @param {string[]} strings 
 * @return {string[]} 
 */
function getEmailsWithstringsInNicknames(forms, strings) {
  return []
}

module.exports = problem6;
