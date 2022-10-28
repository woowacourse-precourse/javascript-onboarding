function problem6(forms) {
  const twoChaArr = [];

  for (let i = 0; i < forms.length; i++) {
    const nameSplited = forms[i][1].split("");
    for (let j = 0; j < nameSplited.length - 1; j++) {
      const dup = nameSplited[j] + nameSplited[j + 1];
      twoChaArr.push(dup);
    }
  }
}

module.exports = problem6;
