function problem6(forms) {
  let emailArr = [];
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
      if (repeatTextObj[testText] > 1) {
        emailArr = [...emailArr, email];
      }
    }
  });

  let answer = [...new Set(emailArr)].sort();
  return answer;
}

module.exports = problem6;
