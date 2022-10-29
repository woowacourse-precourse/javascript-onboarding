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

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
