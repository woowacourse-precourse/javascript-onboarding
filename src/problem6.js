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
  let filteredNickname = [...getSameNicknames]; //중복제거
}
module.exports = problem6;
