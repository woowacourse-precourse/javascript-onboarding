// @ts-check

/**
 *
 * @param {[string, string][]} forms [email][nickname]
 * @returns {string[]}
 */

function problem6(forms) {
  /** @type {{[word :string]: Set<string>}} */
  const emailsWithWord = {};

  forms.forEach((form) => {
    const [email, nickname] = form;

    const wordSet = getWordSet(nickname);

    wordSet.forEach((w) => {
      emailsWithWord[w]
        ? emailsWithWord[w].add(email)
        : (emailsWithWord[w] = new Set([email]));
    });
  });

  const duplicatedEmails = findDuplicatedEmails(emailsWithWord);

  return duplicatedEmails;
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
 *
 * @param {{[word :string]: Set<string>}} emailsWithWord
 * @returns {string[]}
 */
function findDuplicatedEmails(emailsWithWord) {
  /** @type {string[]} */
  const duplicatedEmails = [];

  Object.entries(emailsWithWord).forEach((value) => {
    const [_, emails] = value;

    if (emails.size > 1) {
      duplicatedEmails.push(...emails);
    }
  });

  return [...new Set(duplicatedEmails)].sort();
}

module.exports = problem6;
