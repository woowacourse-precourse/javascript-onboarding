function checkEmailLength(forms) {
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][0].length < 11 || forms[i][0].length >= 20) {
      return false;
    }
  }

  return true;
}

function checkEmailForm(forms) {
  for (let i = 0; i < forms.length; i++) {
    const parsedEmail = forms[i][0].split("@");

    if (parsedEmail[1] !== "email.com") {
      return false;
    }
  }

  return true;
}

function checkNickNameLength(forms) {
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].length < 1 || forms[i][1].length >= 20) {
      return false;
    }
  }

  return true;
}

function checkNickNameOnlyKorean(forms) {
  const regex = /^[ㄱ-ㅎ|가-힣]+$/;

  for (let i = 0; i < forms.length; i++) {
    if (!regex.test(forms[i][1])) {
      return false;
    }
  }

  return true;
}

function checkFormsLength(forms) {
  if (forms.length < 1 || forms.length > 10000) {
    return false;
  }

  return true;
}

function checkSameWord(forms, checkingWordArray, ans) {
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < checkingWordArray.length; j++) {
      // 자기 자신은 비교하지 않는다
      if (i === j) {
        continue;
      }

      for (let k = 0; k < checkingWordArray[j].length; k++) {
        // 여기서 본인 닉네임에서 나온 중복 단어를 거르지 못해서 오답이 발생함
        if (forms[i][1].includes(checkingWordArray[j][k])) {
          ans.push(forms[i][0]);
        }
      }
    }
  }
}

function makeTestWord(j, modelNickName, testWordArrayFromStandardNickname) {
  // 중복 판별 단어가 시작되고 끝나는 부분 선정
  for (let k = 0; k <= modelNickName.length - j; k++) {
    const testWord = modelNickName.slice(k, j + k);

    testWordArrayFromStandardNickname.push(testWord);
  }
}

function decideTestWordLength(modelNickName, checkingWordArray) {
  // 2차원 배열로 만들자
  let testWordArrayFromStandardNickname = [];

  // 길이 2부터 문자열 최대 길이까지 중복 판별 단어 선정
  for (let j = 2; j <= modelNickName.length; j++) {
    makeTestWord(j, modelNickName, testWordArrayFromStandardNickname);
  }

  checkingWordArray.push(testWordArrayFromStandardNickname);
}

function selecStandardNickName(forms, checkingWordArray) {
  for (let i = 0; i < forms.length; i++) {
    const modelNickName = forms[i][1];

    decideTestWordLength(modelNickName, checkingWordArray);
  }
}

function deleteOverlapAndSortEmail(ans) {
  let noOverlapAns = Array.from(new Set(ans)).sort();

  return noOverlapAns;
}

function problem6(forms) {
  if (
    !checkEmailLength(forms) ||
    !checkEmailForm(forms) ||
    !checkNickNameLength(forms) ||
    !checkFormsLength(forms) ||
    !checkNickNameOnlyKorean(forms)
  ) {
    return;
  }

  let checkingWordArray = [];

  selecStandardNickName(forms, checkingWordArray);

  let ans = [];

  checkSameWord(forms, checkingWordArray, ans);

  return deleteOverlapAndSortEmail(ans);
}

module.exports = problem6;
