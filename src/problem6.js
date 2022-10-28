function problem6(forms) {
  const answer = [];
  const wordDict = {};
  forms.forEach((form) => {
    const user = form[1];
    for (let i = 2; i <= user.length; i++) {
      for (let j = 0; j <= user.length - i; j++) {
        const subStr = user.substr(j, i);
        forms.forEach((data) => {
          if (data[1] !== user && data[1].includes(subStr)) {
            if (!wordDict[data[1]]) {
              wordDict[data[1]] = true;
              answer.push(data[0]);
            }
          }
        });
      }
    }
  });
  return answer.sort();
}

module.exports = problem6;
