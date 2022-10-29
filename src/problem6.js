function findDuplicateWords(forms, words) {
  const crew = forms[0][1];
  forms.shift();

  if (forms.length === 0) {
    return words;
  }

  let index = 0;

  while (index < crew.length - 1) {
    const word = crew.substring(index, index + 2);

    forms.some((form) => {
      if (form[1].includes(word)) {
        words.push(word);
        return true;
      }

      return false;
    });

    index++;
  }

  return findDuplicateWords(forms, words);
}

function problem6(forms) {
  var answer;
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
  ];
  const user1 = '제이엠';

  console.log(findDuplicateLetters(forms, []));
}

test();
