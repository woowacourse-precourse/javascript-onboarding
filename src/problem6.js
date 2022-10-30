function isDuplicateWord(forms, duplicateWords, word) {
  if (duplicateWords.includes(word)) {
    return false;
  }

  return forms.some((form) => form[1].includes(word));
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
    index += 1;

    if (!isDuplicateWord(forms, duplicateWords, word)) {
      continue;
    }

    duplicateWords.push(word);
  }

  return getDuplicateWords(forms, duplicateWords);
}

function isCrewWithDuplicateWord(crew, duplicateWords) {
  return duplicateWords.some((word) => crew.includes(word));
}

function problem6(forms) {
  const copiedForms = [...forms];
  const duplicateWords = getDuplicateWords(copiedForms, []);

  const answer = forms
    .filter((form) => isCrewWithDuplicateWord(form[1], duplicateWords))
    .map((form) => form[0])
    .sort();

  return answer;
}

module.exports = problem6;

function test() {
  const forms = [
    ['jm@email.com', '제이엠'],
    ['jm@email.com', '제이워니'],
    ['jm@email.com', '워니고'],
    ['jm@email.com', '니고스'],
    ['woniee@email.com', '워니'],
    ['jason@email.com', '제이슨'],
    ['nowm@email.com', '이제엠'],
    ['mj@email.com', '엠제이'],
    ['em@email.com', '이엠'],
    ['em@email.com', '가나다'],
  ];
  const forms2 = [
    ['jm@email.com', '제이엠'],
    ['jason@email.com', '제이슨'],
    ['woniee@email.com', '워니'],
    ['mj@email.com', '엠제이'],
    ['nowm@email.com', '이제엠'],
  ];
  const forms3 = [
    ['jm@email.com', '제오'],
    ['jason@email.com', '제이'],
    ['woniee@email.com', '워니'],
  ];

  console.log(problem6(forms));
  console.log(problem6(forms2));
  console.log(problem6(forms3));
}

test();
