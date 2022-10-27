function problem6(forms) {
  var answer = [];
  let repeatTextObj = {};
  forms.map((form) => {
    const nickname = form[1];
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substr(i, 2);
      if (testText in repeatTextObj) repeatTextObj[testText]++;
      else {
        repeatTextObj[testText] = 1;
      }
    }
  });

  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substr(i, 2);
      if (repeatTextObj[testText] > 1) answer.push(email);
    }
  });
  return [...new Set(answer)].sort();
}

module.exports = problem6;
