function problem6(forms) {
  var answer = [];
  let sameNickIdx = new Set();
  let mailList = new Set();

  for (let i = 0; i < forms.length; i++) {
    let twoChar = new Set();
    let name = forms[i][1];
    for (let j = 0; j < name.length - 1; j++) {
      twoChar.add(name.substr(j, j + 2));
    }
    for (let j = i + 1; j < forms.length; j++) {
      for (let item of twoChar.values()) {
        if (forms[j][1].includes(item)) {
          sameNickIdx.add(i);
          sameNickIdx.add(j);
        }
      }
    }
  }

  for (let idx of sameNickIdx) {
    mailList.add(forms[idx][0]);
  }
  for (let mail of mailList) {
    answer.push(mail);
  }

  function compareMail(a, b) {
    let nickA = a.split("@")[0];
    let nickB = b.split("@")[0];
    return nickA.localeCompare(nickB);
  }

  answer.sort((a, b) => compareMail(a, b));

  return answer;
}

module.exports = problem6;
