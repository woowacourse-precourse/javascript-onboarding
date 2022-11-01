function problem6(forms) {
  var answer = [];
  let nicknamesArr = [];
  let repeatedNicknameEmail = [];

  forms.forEach((info, index) => {
    nicknamesArr[index] = info[1];
  });

  for (let i = 0; i < nicknamesArr.length; i++) {
    let nickname = [...nicknamesArr[i]];

    for (let j = i + 1; j < nicknamesArr.length; j++) {
      let comparedNickname = [...nicknamesArr[j]];

      for (let k = 0; k < nickname.length - 1; k++) {
        let nicknameSlice = nickname.slice(k, k + 2);
        let index = comparedNickname.indexOf(nicknameSlice[0]);

        if (comparedNickname.includes(nicknameSlice[0])) {
          if (nicknameSlice[1] == comparedNickname[index + 1]) {
            repeatedNicknameEmail.push(forms[i][0]);
            repeatedNicknameEmail.push(forms[j][0]);
          }
        }
      }
    }
  }

  repeatedNicknameEmail = repeatedNicknameEmail
    .reduce((ac, v) => (ac.includes(v) ? ac : [...ac, v]), [])
    .sort();

  answer = repeatedNicknameEmail;

  return answer;
}

module.exports = problem6;
