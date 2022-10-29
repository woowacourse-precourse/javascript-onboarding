function findDuplicateLetters(forms, crew) {
  const duplicateLetters = [];
  let index = 0;

  while (index < crew.length - 1) {
    const word = crew.substring(index, index + 2);

    forms.some((form) => {
      if (form[1].includes(word)) {
        duplicateLetters.push(word);
        return true;
      }

      return false;
    });

    index++;
  }

  return duplicateLetters;
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;

function test() {
  const forms = [
    ['woniee@email.com', '워니'],
    ['nowm@email.com', '이제엠'],
    ['mj@email.com', '엠제이'],
    ['mj@email.com', '이엠'],
  ];
  const user1 = '제이엠';

  console.log(findDuplicateLetters(forms, user1));
}

test();
