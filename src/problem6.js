function problem6(forms) {
  var answer = [];

  const includeSameWord = (name1, name2) => {
    for (let k = 0; k < name1.length - 1; k++) {
      for (let l = 0; l < name2.length - 1; l++) {
        if (name1[k] == name2[l] && name1[k + 1] == name2[l + 1]) {
          return true;
        }
      }
    }
    return false;
  };
  // 두명씩 비교하기 위해 크루의 이메일, 닉네임 순회
  for (let i = 0; i < forms.length; i++) {
    let email_of_crew1 = forms[i][0];
    let nickName_of_crew1 = forms[i][1];
    for (let j = i + 1; j < forms.length; j++) {
      let email_of_crew2 = forms[j][0];
      let nickName_of_crew2 = forms[j][1];

      // 두 크루의 닉네임에 길이 2 이상의 중복 단어 있는지 확인
      if (includeSameWord(nickName_of_crew1, nickName_of_crew2)) {
        // answer에 해당 이메일 추가하기
        answer.push(email_of_crew1);
        answer.push(email_of_crew2);
      }
    }
  }

  // answer에서 중복되는 이메일 제거
  answer = new Set(answer);
  answer = Array.from(answer).sort();
  return answer;
}

module.exports = problem6;
