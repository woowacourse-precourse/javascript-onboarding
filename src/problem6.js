function problem6(forms) {
  var answer = [];

  // 두명씩 비교하기 위해 크루의 이메일, 닉네임 순회
  for (let i = 0; i < forms.length; i++) {
    let email_of_crew1 = forms[i][0];
    let nickName_of_crew1 = forms[i][1];
    for (let j = i + 1; j < forms.length; j++) {
      let email_of_crew2 = forms[j][0];
      let nickName_of_crew2 = forms[j][1];

      // 두 크루의 닉네임에 길이 2 이상의 중복 단어 있는지 확인
      for (let k = 0; k < nickName_of_crew1.length - 1; k++) {
        for (let l = 0; l < nickName_of_crew2.length - 1; l++) {
          if (
            nickName_of_crew1[k] == nickName_of_crew2[l] &&
            nickName_of_crew1[k + 1] == nickName_of_crew2[l + 1]
          ) {
            // answer에 해당 이메일 추가하기
          }
        }
      }
    }
  }
  // answer에서 중복되는 이메일 제거

  return answer;
}

module.exports = problem6;
