function problem6(forms) {
  if (!isInRange(forms.length)) return false;

  const validForms = getValidForms(forms);
  const duplicateKeyWords = findDuplicateKeywords(validForms);
  const applicableEmails = findEmailsByDuplicateNickname(
    forms,
    duplicateKeyWords,
  );

  return [...new Set(applicableEmails)].sort();
}

function getValidForms(forms) {
  const validForms = forms.filter(
    ([email, nickname]) => isValidEmail(email) && isValidNickname(nickname),
  );

  return validForms;
}

function isValidEmail(email) {
  const [, domain] = email.split('@');

  return isInRange(email.length, 11, 20) && isValidDomain(domain);
}

function isValidNickname(nickname) {
  return isInRange(nickname.length, 1, 20) && isHanguel(nickname);
}

function isInRange(value, min = 1, max = 10000) {
  return min <= value && value <= max;
}

function isValidDomain(domain) {
  const VALID_DOMAIN = 'email.com';

  return domain === VALID_DOMAIN;
}

function isHanguel(string) {
  const regex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;

  return regex.test(string);
}

function findEmailsByDuplicateNickname(forms, keywords) {
  const applicableForms = forms.filter(([, nickname]) =>
    isDuplicate(nickname, keywords),
  );

  return applicableForms.map(([email]) => email);
}

function isDuplicate(string, keywords) {
  return keywords.some((keyword) => string.includes(keyword));
}

function findDuplicateKeywords(forms) {
  const keywords = getTwoLetterWords(forms);
  const keywordCounts = keywords.reduce((acc, cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map());

  return [...keywordCounts]
    .filter(([, value]) => value > 1)
    .map(([key]) => key);
}

function getTwoLetterWords(forms) {
  const twoLetterWords = forms.reduce((words, [, nickname]) => {
    words.push(...getCombinations([...nickname], 2));
    return words;
  }, []);

  return twoLetterWords;
}

function getCombinations(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }

  array.forEach((current, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = [current, combinations[0]].join('');

    if (attached.length >= selectNumber) results.push(attached);
  });

  return results;
}

module.exports = problem6;
