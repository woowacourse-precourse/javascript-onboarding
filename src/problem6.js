function problem6(forms) {
  var answer = [];

  forms.forEach((v, i, arr) => {
    const standardEmail = v[0];
    const standardNickname = v[1];

    for (let j = arr.length - 1; j > i; j--) {
      const compareEmail = arr[j][0];
      const compareNickname = arr[j][1];

      if (standardEmail === compareEmail)
        throw new Error('중복된 이메일입니다.');

      standardNickname.split('').forEach((word, k) => {
        if (!compareNickname.includes(word)) return;

        compareNickname.split('').forEach((wordCompare, l) => {
          if (word === wordCompare) {
            if (!standardNickname[k + 1] || !compareNickname[l + 1]) return;
            if (standardNickname[k + 1] === compareNickname[l + 1]) {
              answer.push(standardEmail, compareEmail);
            }
          }
        });
      });
    }
  });

  var answer = [...new Set(answer)].sort();

  return answer;
}

module.exports = problem6;
