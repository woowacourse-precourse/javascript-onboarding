function problem6(forms) {
  let strMap = {};
  let answer = [];

  forms.forEach((item) => {
    const [_, nickname] = item;
    for (let i = 0; i < nickname.length - 1; i++) {
      let strCase = nickname.slice(i, i + 2);
      if (strCase in strMap) strMap[strCase]++;
      else strMap[strCase] = 1;
    }
  });

  forms.forEach((item) => {
    const [email, nickname] = item;
    for (let i = 0; i < nickname.length - 1; i++) {
      let strCase = nickname.slice(i, i + 2);
      if (strMap[strCase] > 1) {
        answer.push(email);
        break;
      }
    }
  });
  answer = answer.sort();
  return answer;
}

module.exports = problem6;
