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

function selectModelNickName(forms, ans) {
  for (let i = 0; i < forms.length; i++) {
    const modelNickName = forms[i][1];
  }
}

function problem6(forms) {
  if (
    !checkEmailLength(forms) ||
    !checkEmailForm(forms) ||
    !checkNickNameLength(forms)
  ) {
    return;
  }

  let ans = [];

  selectModelNickName(forms, ans);
}
module.exports = problem6;
