function problem6(forms) {
  if (forms.length < 1 || forms.length > 10000) return;
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][0].length < 11 || forms[i][0].length > 20) return;
    if (forms[i][1].length < 1 || forms[i][1].length > 20) return;
  }

  let nickname = [];
  let overlapName = [];
  let email = [];
  let element = ["제이"]; //여기 수정 필요

  for (let i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
  }

  for (let i = 0; i < nickname.length; i++) {
    if (nickname[i].includes(element)) {
      overlapName.push(nickname[i]);
    } else {
      overlapName.push("");
    }
  }

  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1] === overlapName[i]) {
      email.push(forms[i][0]);
    }
  }
  return email.sort();
}

module.exports = problem6;
