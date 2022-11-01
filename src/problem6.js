function problem6(forms) {
  const answer = [];
  const subDict = {};
  const userEmail = {};
  forms.forEach((form) => {
    const user = form[1];
    userEmail[user] = form[0];
    for (let j = 0; j < user.length - 1; j++) {
      const subStr = user.substr(j, 2);
      if (subDict[subStr] && subDict[subStr] !== user) {
        answer.push(form[0]);
        answer.push(userEmail[subDict[subStr]]);
      } else subDict[subStr] = user;
    }
  });
  return [...new Set(answer)].sort();
}

module.exports = problem6;
