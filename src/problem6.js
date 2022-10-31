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
  const regex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;

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

function checkSameWord(forms, checkingWordArray, ans, i, j) {
  for (let k = 0; k < checkingWordArray[j].length; k++) {
    if (forms[i][1].includes(checkingWordArray[j][k])) {
      ans.push(forms[i][0]);
    }
  }
}

function checkSameWordExceptOneself(forms, checkingWordArray, ans, i) {
  for (let j = 0; j < checkingWordArray.length; j++) {
    // 자기 자신은 비교하지 않는다
    if (i === j) {
      continue;
    }

    checkSameWord(forms, checkingWordArray, ans, i, j);
  }
}

function checkSameWordForAllCrew(forms, checkingWordArray, ans) {
  for (let i = 0; i < forms.length; i++) {
    checkSameWordExceptOneself(forms, checkingWordArray, ans, i);
  }
}

function makeTestWord(j, standardNickName, testWordArrayFromStandardNickname) {
  // 중복 판별 단어가 시작되고 끝나는 부분 선정
  for (let k = 0; k <= standardNickName.length - j; k++) {
    const testWord = standardNickName.slice(k, j + k);

    testWordArrayFromStandardNickname.push(testWord);
  }
}

function decideTestWordLength(standardNickName, checkingWordArray) {
  // 하나의 닉네임에서 얻은 중복 판별 단어들을 하나의 배열로 만들어, 모든 중복 판별 단어 배열을 2차원으로 만든다.
  let testWordArrayFromStandardNickname = [];

  // 길이 2부터 문자열 최대 길이까지 중복 판별 단어 선정
  for (let j = 2; j <= standardNickName.length; j++) {
    makeTestWord(j, standardNickName, testWordArrayFromStandardNickname);
  }

  checkingWordArray.push(testWordArrayFromStandardNickname);
}

function selecStandardNickName(forms, checkingWordArray) {
  for (let i = 0; i < forms.length; i++) {
    const standardNickName = forms[i][1];

    decideTestWordLength(standardNickName, checkingWordArray);
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

  checkSameWordForAllCrew(forms, checkingWordArray, ans);

  return deleteOverlapAndSortEmail(ans);
}

module.exports = problem6;
