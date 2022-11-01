function problem6(forms) {
  const targetIdx = [];

  for (let i = 0; i < forms.length; i++) {
    const nickname = forms[i][1];
    for (let j = 1; j < nickname.length; j++) {
      const nicknameSubStr = nickname.substring(j-1, j+1)
      for (let k = i + 1; k < forms.length; k++) {
        if (forms[k][1].includes(nicknameSubStr)) {
          if (!targetIdx.includes(i))
            targetIdx.push(i);
          if (!targetIdx.includes(k))
            targetIdx.push(k);
        }
      }
    }
  }

  const answer = [];
  for (let idx of targetIdx) {
    answer.push(forms[idx][0]);
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
