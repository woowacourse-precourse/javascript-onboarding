function problem6(forms) {
  var answer = new Set();
  let limitTextObj = {};
  forms.map((form) => {
    const [_, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substring(i, i + 2);
      if (testText in limitTextObj) limitTextObj[testText]++;
      else limitTextObj[testText] = 1;
    }
  });

  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substring(i, i + 2);
      if (limitTextObj[testText] > 1) answer.add(email);
    }
  });
  answer = Array.from(answer);
  answer.sort();
  return answer;
}

module.exports = problem6;
