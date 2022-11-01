function problem6(forms) {
  var answer = [];

  getSameNickIndex(forms);

  function getSameNickIndex(forms) {
    let sameNickIdx = new Set();
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
    getMailIndexList(sameNickIdx);
  }

  function getMailIndexList(sameNickIdx) {
    let mailList = new Set();
    for (let idx of sameNickIdx) {
      mailList.add(forms[idx][0]);
    }
    getMailAddressList(mailList);
  }

  function getMailAddressList(mailList) {
    for (let mail of mailList) {
      answer.push(mail);
    }
    sortMailList(answer);
  }

  function sortMailList(list) {
    list.sort((a, b) => compareMail(a, b));
  }

  function compareMail(a, b) {
    let nickA = a.split("@")[0];
    let nickB = b.split("@")[0];
    return nickA.localeCompare(nickB);
  }

  return answer;
}

module.exports = problem6;
