function problem6(forms) {
  let twoLetterMap = new Map();
  let duplicateEmailSet = new Set();

  forms.map((form) => {
    setMapTwoLetter(form, twoLetterMap);
  });

  forms.map((form) => {
    isDuplicateNickname(form, duplicateEmailSet, twoLetterMap);
  });

  let answer = [...duplicateEmailSet];
  answer.sort();

  return answer;
}

function setMapTwoLetter(form, twoLetterMap) {
  const [, nickname] = form;

  if (nickname.length >= 2) {
    for (let i = 0; i < nickname.length - 1; i++) {
      let twoLetter = nickname.slice(i, i + 2);

      if (twoLetterMap.has(twoLetter)) {
        let duplicateCount = twoLetterMap.get(twoLetter);
        twoLetterMap.set(twoLetter, duplicateCount + 1);
        continue;
      }
      twoLetterMap.set(twoLetter, 1);
    }
  }
}

function isDuplicateNickname(form, duplicateEmailSet, twoLetterMap) {
  const [email, nickname] = form;
  if (nickname.length >= 2) {
    for (let i = 0; i < nickname.length - 1; i++) {
      let twoLetter = nickname.slice(i, i + 2);
      if (twoLetterMap.get(twoLetter) > 1) {
        duplicateEmailSet.add(email);
        break;
      }
    }
  }
}

module.exports = problem6;
