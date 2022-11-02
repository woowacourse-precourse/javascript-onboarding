// 같은 글자가 연속적으로 포함되는 닉네임들을 구하는 기능
const isNicknameDuplicated = (forms) => {
  let nickname = [];
  let target;
  let duplicatedNickname = [];
  for (i = 0; i < forms.length; i++) {
    nickname[i] = forms[i][1];
  }
  for (j = 0; j < nickname.length; j++) {
    for (k = 0; k < nickname[j].length - 1; k++) {
      target = nickname[j].substr(k, 2);
      duplicatedNickname.push(
        nickname
          .filter((word) => word != nickname[j])
          .filter((word) => word.includes(target))
      );
    }
  }
  duplicatedNickname = duplicatedNickname.reduce((prev, curr) =>
    prev.concat(curr)
  );
  const set = new Set(duplicatedNickname);
  duplicatedNickname = [...set];
  return duplicatedNickname;
};

// 중복이 있는 배열에서 이메일만 오름차순 정렬된 배열로 반환하는 기능
function problem6(forms) {
  var answer;
  let emailArr = [];
  const duplicatedNicknameArr = isNicknameDuplicated(forms);
  for (i = 0; i < duplicatedNicknameArr.length; i++) {
    for (j = 0; j < forms.length; j++) {
      if (forms[j][1] == duplicatedNicknameArr[i]) {
        emailArr.push(forms[j][0]);
      }
    }
  }
  answer = emailArr.sort();
  return answer;
}

module.exports = problem6;
