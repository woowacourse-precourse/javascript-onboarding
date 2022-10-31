// @ts-check

/**
 *
 * @param {string[][]} forms
 * @returns {string[]}
 */

function problem6(forms) {
  const targetEmails = new Set();

  forms.forEach((form) => {
    const [email, nickname] = form;

    const filteredForms = forms.filter((f) => email !== f[0]);
    const emails = findDuplicatedNickname(nickname, filteredForms);

    emails.forEach((e) => targetEmails.add(e));
  });

  return [...targetEmails].sort();
}

/**
 * wordSet 중 하나의 문자열과 중복이 있는 이메일 배열을 반환
 * @param {string} targetNickname
 * @param {string[][]} forms
 * @returns {string[]}
 */

function findDuplicatedNickname(targetNickname, forms) {
  const wordSet = getWordSet(targetNickname);

  const emails = [];

  forms.forEach((form) => {
    const [email, nickname] = form;

    if (isDuplicate(wordSet, nickname)) {
      emails.push(email);
    }
  });

  return emails;
}

/**
 * 문자열로 만들 수 있는 두 글자 문자열 배열을 반환
 * @param {string} str
 * @returns {string[]}
 */

function getWordSet(str) {
  const wordSet = new Set();

  for (let i = 0; i <= str.length - 2; i++) {
    wordSet.add(str.substring(i, i + 2));
  }

  return [...wordSet];
}

/**
 * wordSet 중 nickname 에 포함된 것이 있는지 체크
 * @param {string[]} wordSet
 * @param {string} nickname
 * @returns {boolean}
 */

function isDuplicate(wordSet, nickname) {
  const index = wordSet.findIndex((word) => nickname.includes(word));

  return index !== -1;
}

module.exports = problem6;
