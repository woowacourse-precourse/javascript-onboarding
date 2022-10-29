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
  return [...new Set(overLappingWords)].sort();
}

console.log(
  problem6([
    ["jm@email.com", "이불이불엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

// 같은 글자가 연속적으로 반복하되 같은 이름에서 반복될 경우는
// 제외해주어야 한다
module.exports = problem6;
