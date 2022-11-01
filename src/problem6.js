function sameNameCheck(twoChar, nickname, forms, emailSet) {
  let localState = false;
  for (let j = 0; j < forms.length; j++) {
    if (nickname === forms[j][1]) continue;
    if (forms[j][1].includes(twoChar) && !emailSet.has(forms[j][0])) {
      emailSet.add(forms[j][0]);
      localState = true;
    }
  }
  return localState;
}
function nameSplit(nickname, forms, emailSet) {
  let localState = Boolean;
  for (let i = 0; i < nickname.length - 1; i++) {
    let twoChar = nickname[i] + nickname[i + 1];
    localState = sameNameCheck(twoChar, nickname, forms, emailSet);
  }
  return localState;
}

function sortEmail(emailArray) {
  return emailArray.sort();
}

function problem6(forms) {
  const EmailSet = new Set();

  for (let [email, nickname] of forms) {
    let state = nameSplit(nickname, forms, EmailSet);

    if (state) {
      EmailSet.add(email);
    }
  }
  const answer = sortEmail([...EmailSet]);
  return answer;
}

module.exports = problem6;
