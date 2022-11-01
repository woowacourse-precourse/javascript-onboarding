function problem6(forms) {
  let nicknames = [];

  for (j in forms) {
    for (i = 0; i < forms[j][1].length - 1; i++) {
      nicknames.push(forms[j][1][i] + forms[j][1][1 + i]);
    }
  }

  let getNickname = [];
  for (i in nicknames) {
    for (j in nicknames) {
      if (i !== j && nicknames[i] == nicknames[j]) {
        getNickname.push(nicknames[i]);
      }
    }
  }

  let getSameNicknames = new Set(getNickname);
  let filteredNickname = [...getSameNicknames];

  let emails = [];

  for (i in forms) {
    for (j in filteredNickname) {
      if (forms[i][1].indexOf(filteredNickname[j]) != -1) {
        emails.push(forms[i][0]);
      }
    }
  }

  let getEmails = new Set(emails);
  let filteredEmails = [...getEmails];

  let result = filteredEmails.sort();

  return result;
}
module.exports = problem6;
