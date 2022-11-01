function problem6(forms) {
  const answer = [];

  const nicknames = getNickname(forms);
  const list = generateCommonSubstringList(nicknames);

  for (i = 0; i < forms.length; i++) {
    for (j = 0; j < nicknames[i].length - 1; j++) {
      commonSubstring = nicknames[i].substring(j, j + 2);
      if (list[commonSubstring] > 1) {
        answer.push(forms[i][0]);
      }
    }
  }

  return answer.sort();
}

function getNickname(forms) {
  const nicknames = [];

  for (let i = 0; i < forms.length; i++) {
    nicknames.push(forms[i][1]);
  }

  return nicknames;
}

function generateCommonSubstringList(nicknames) {
  let commonSubstring = "";
  const commonSubs = {};

  for (let i = 0; i < nicknames.length; i++) {
    for (let j = 0; j < nicknames[i].length - 1; j++) {
      commonSubstring = nicknames[i].substring(j, j + 2);
      if (commonSubs[commonSubstring]) {
        commonSubs[commonSubstring] += 1;
      } else commonSubs[commonSubstring] = 1;
    }
  }

  return commonSubs;
}

module.exports = problem6;
