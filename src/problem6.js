function problem6(forms) {
  var answer = [];

  for (var i = 0; i < forms.length; ++i) {
    const [emailI, nicknameI] = forms[i];

    for (var j = 0; j < nicknameI.length - 1; ++j) {
      const testCase = nicknameI.slice(j, j + 1);

      for (var k = i + 1; k < forms.length; ++k) {
        const [emailK, nicknameK] = forms[k];
        if (nicknameK.includes(testCase)) answer.push(emailI, emailK);
      }
    }
  }

  answer = [...new Set(answer)];
  answer.sort();

  return answer;
}

module.exports = problem6;
