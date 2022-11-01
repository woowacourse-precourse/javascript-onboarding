function problem6(forms) {
  var answer = [];

  for (let i = 0; i < forms.length; i++) {
    const email = forms[i][0];
    const nickname = forms[i][1];

    if (isEmailValid(email) && isNicknameValid(nickname)) {
      for (let j = 0; j < nickname.length - 1; j++) {
        const checkedNickname = checkDuplicateNicknames(
          forms,
          nickname.slice(j, j + 2),
          email
        );

        answer = [...answer, ...checkedNickname];

        if (checkedNickname.length > 0) break;
      }
    }
  }

  return answer.sort();
}

function checkDuplicateNicknames(forms, slicedNickname, email) {
  let arr = [];

  for (let k = 0; k < forms.length; k++) {
    if (forms[k][1].includes(slicedNickname)) {
      if (forms[k][0] === email) continue;
      arr.push(email);
      break;
    }
  }

  return arr;
}

function isEmailValid(email) {
  const lengthOfEmail = email.length;
  return (
    lengthOfEmail >= 11 &&
    lengthOfEmail < 20 &&
    email.slice(-10) === "@email.com"
  );
}

function isNicknameValid(nickname) {
  const lengthOfNickname = nickname.length;
  const regex = /^[ㄱ-ㅎ|가-힣]+$/;
  return lengthOfNickname >= 1 && lengthOfNickname < 20 && regex.test(nickname);
}

module.exports = problem6;
