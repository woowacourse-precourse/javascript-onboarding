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

function checkFormsLength(forms) {
  if (forms.length < 1 || forms.length > 10000) {
    return false;
  }

  return true;
}

function checkSameWord(i, forms, testWord, ans) {
  for (let n = 0; n < forms.length; n++) {
    if (n === i) {
      continue;
    }

    if (forms[n][1].includes(testWord)) {
      ans.push(forms[n][0]);
    }
  }
}

function makeTestWord(i, j, modelNickName, forms, ans) {
  // 중복 판별 단어가 시작되고 끝나는 부분 선정
  for (let k = 0; k <= modelNickName.length - j; k++) {
    const testWord = modelNickName.slice(k, j + k);

    checkSameWord(i, forms, testWord, ans);
  }
}

function decideTestWordLength(i, modelNickName, forms, ans) {
  // 길이 2부터 문자열 최대 길이까지 중복 판별 단어 선정
  for (let j = 2; j <= modelNickName.length; j++) {
    makeTestWord(i, j, modelNickName, forms, ans);
  }
}

function selectModelNickName(forms, ans) {
  for (let i = 0; i < forms.length; i++) {
    const modelNickName = forms[i][1];

    decideTestWordLength(i, modelNickName, forms, ans);
  }
}

function deleteOverlapEmail(ans) {
  let noOverlapAns = Array.from(new Set(ans)).sort();

  return noOverlapAns;
}

function problem6(forms) {
  if (
    !checkEmailLength(forms) ||
    !checkEmailForm(forms) ||
    !checkNickNameLength(forms) ||
    !checkFormsLength(forms)
  ) {
    return;
  }

  let ans = [];

  selectModelNickName(forms, ans);

  return deleteOverlapEmail(ans);
}
module.exports = problem6;
