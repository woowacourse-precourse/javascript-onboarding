function problem6(forms) {
  const emailSet = new Set();
  forms.forEach(([email, nickname]) => {
    if (!validateEmail(email)) return;
    if (emailSet.has(email)) return;

    const emails = compareNicknames(nickname, forms);
    addEamil(emails, emailSet);
  });
  return [...emailSet].sort();
}

function addEamil(emails, emailSet) {
  emails.forEach((email) => {
    emailSet.add(email);
  });
}

function compareNicknames(targetNickname, forms) {
  const regString = makeRegString(targetNickname);
  const regExp = makeReg(regString);
  return filterForms(regExp, forms).map(([email, _]) => email);
}

function filterForms(regExp, forms) {
  const filteredForms = forms.filter(([_, nickname]) =>
    isMatched(nickname, regExp)
  );
  if (filteredForms.length === 1) return [];
  return filteredForms;
}

function isMatched(nickname, regExp) {
  const matchedGroup = nickname.match(regExp);
  const filterUnmatchedGroup = matchedGroup.filter(
    (matchString) => !!matchString
  );
  return filterUnmatchedGroup.length > 0;
}

function validateEmail(email) {
  return email.match(/@email.com/g);
}

function makeRegString(word) {
  const wordArr = word.split("");
  const regStringArr = wordArr.map((alpha, idx) => {
    if (idx === wordArr.length - 1) return "";
    return `(?:${alpha}${wordArr[idx + 1]})?`;
  });
  return regStringArr.join("");
}

function makeReg(regString) {
  return new RegExp(regString, "g");
}

module.exports = problem6;
