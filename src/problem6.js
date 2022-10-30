function problem6(forms) {
  const arr = new Set();
  let index = 0;
  let state = Boolean;
  for (let [email, nickname] of forms) {
    state = false;
    for (let i = 0; i < nickname.length - 1; i++) {
      let twoChar = nickname[i] + nickname[i + 1];
      for (let j = index + 1; j < forms.length; j++) {
        if (forms[j][1].includes(twoChar) && !arr.has(forms[j][0])) {
          arr.add(forms[j][0]);
          state = true;
        }
      }
    }
    index++;
    if (state) {
      arr.add(email);
    }
  }
  const answer = [...arr].sort();
  return answer;
}

module.exports = problem6;
