const isDuplicateWord = (forms, word) =>
  forms.some((form) => form[1].includes(word));
const isCrewWithDuplicateWord = (crew, duplicateWords) =>
  duplicateWords.some((word) => crew.includes(word));

function removeDuplicateEmails(emails) {
  const emailSet = new Set(emails);

  return [...emailSet];
}

function getDuplicateWords(forms, duplicateWords) {
  if (forms.length === 1) {
    return duplicateWords;
  }

  const crew = forms[0][1];
  let index = 0;
  forms.shift();

  while (index < crew.length - 1) {
    const word = crew.substring(index, index + 2);

    if (!duplicateWords.includes(word) && isDuplicateWord(forms, word)) {
      duplicateWords.push(word);
    }

    index += 1;
  }

  return getDuplicateWords(forms, duplicateWords);
}

function problem6(forms) {
  const copiedForms = [...forms];
  const duplicateWords = getDuplicateWords(copiedForms, []);

  const crewEmails = forms
    .filter((form) => isCrewWithDuplicateWord(form[1], duplicateWords))
    .map((form) => form[0]);
  const answer = removeDuplicateEmails(crewEmails).sort();

  return answer;
}

module.exports = problem6;
