function problem6(forms) {
  const targetEmails = new Set();

  for (const form of forms) {
    const [email, nickname] = form;

    const filteredForms = forms.filter((f) => email !== f[0]);
    const emails = findDuplicatedNickname(nickname, filteredForms);

    emails.forEach((e) => targetEmails.add(e));
  }

  return [...targetEmails].sort();
}

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

function getWordSet(str) {
  const wordSet = new Set();

  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 2; j <= str.length; j++) {
      wordSet.add(str.substring(i, j));
    }
  }

  return [...wordSet];
}

function isDuplicate(wordSet, nickname) {
  const index = wordSet.findIndex((word) => nickname.includes(word));

  return index !== -1;
}

module.exports = problem6;
