function problem6(forms) {
  let overLappingWords = [];
  let repeatTextObj = {};

  forms.map((form, index) => {
    let firstRecordObj = {};
    const [_, nickname] = form;
    for (let j = 0; j < nickname.length - 1; j++) {
      const testText = nickname[j] + nickname[j + 1];
      if (testText in repeatTextObj && firstRecordObj[testText] !== index) {
        repeatTextObj[testText]++;
      } else {
        repeatTextObj[testText] = 1;
        firstRecordObj[testText] = index;
      }
    }
  });

  forms.map((form) => {
    const [email, nickname] = form;
    for (let j = 0; j < nickname.length - 1; j++) {
      const testText = nickname[j] + nickname[j + 1];
      if (repeatTextObj[testText] > 1) overLappingWords.push(email);
    }
  });

  let answer = [...new Set(overLappingWords)].sort();
  return answer;
}

module.exports = problem6;
