function problem6(forms) {
  // 두 글자 이상의 문자가 연속한다면 그 문자와 개수를 객체로 저장
  function countDuplicateNicknames(forms) {
    let result = {};
    for (let i = 0; i < forms.length; i++) {
      let nickName = forms[i][1];
      let len = nickName.length - 1;
      for (let j = 0; j < len; j++) {
        let compare = nickName.substr(j, 2);
        if (compare in result) {
          result[compare] += 1;
        } else {
          result[compare] = 1;
        }
      }
    }
    return result;
  }

  // countDuplicateNicknamesd()의 value 값이 2개 이상이면 true를 return
  function doesExistNickname(duplicateNicknames, nickname) {
    let result = false;
    let len = nickname.length - 1;
    for (let i = 0; i < len; i++) {
      let compare = nickname.substr(i, 2);
      if (compare in duplicateNicknames) {
        if (duplicateNicknames[compare] >= 2) {
          result = true;
          break;
        }
      }
    }
    return result;
  }

  let result = [];
  let duplicateNicknames = countDuplicateNicknames(forms);

  for (let i = 0; i < forms.length; i++) {
    let email = forms[i][0];
    let nickname = forms[i][1];
    if (doesExistNickname(duplicateNicknames, nickname)) {
      result.push(email); // 중복으로 간주된 닉네임의 이메일
    }
  }
  result.sort();
  return result;
}

module.exports = problem6;
