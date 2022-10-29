/**
 * 같은 글자를 연속으로 포함하는 닉네임을 가진 크루들의 이메일을 반환한다.
 * @param {string[][]} forms
 *   - [email, nickname]의 배열 (eg. ["jm@email.com", "제이엠"])
 *   - email과 nickname의 최대 길이는 20자 미만으로 제한되어 들어온다. 
 * @returns 
 */
function problem6(forms) {
  const substrings = getDuplicatedSubstring(forms)
  const emails = getEmailsWithstringsInNicknames(forms, substrings)
  // TODO: emails의 중복 제거 및 오름차순 정렬
  return emails
}

/**
 * TODO: 닉네임에 사용된 sub-string 중 중복이 있는 것들만 반환한다.
 * @param {string[][]} forms
 * @return {Set} 
 */
function getDuplicatedSubstring(forms) {
  const subTotal = new Set()
  const subDuplicated = new Set()

  console.log('hello', forms)
  for (let i = 0; i < forms.length - 1; i++) {
    const nickname = forms[i][1]
    const subUser = new Set()

    for (let j = 0; j < nickname.length - 1; j++) {
      const sub = nickname.slice(j, j + 2)
      if (!subUser.has(sub) && subTotal.has(sub)) {
        subUser.add(sub)
        subDuplicated.add(sub)
      }
      subTotal.add(sub)
    }
  }

  return subDuplicated
}

const tc = [["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]
console.log(getDuplicatedSubstring(tc))

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
