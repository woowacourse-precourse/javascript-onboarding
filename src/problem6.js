/**
 * @param {string[][]} forms
 * @returns {string[]}
 */
function problem6(forms) {
  const nickNameList = forms.map(([_, nickName]) => nickName);
  const seperatedNickNameList = nickNameList
    .map((nickName) => {
      const seperated = [];

      for (let i = 0; i < nickName.length - 1; i++) {
        let word = nickName[i] + nickName[i + 1];
        seperated.push(word);
      }

      return seperated;
    })
    .flat()
    .reduce((count, seperatedNickName) => {
      if (!count[seperatedNickName]) {
        count[seperatedNickName] = 0;
      }
      count[seperatedNickName]++;

      return count;
    }, {});

  const duplicated = [];

  for (const [key, value] of Object.entries(seperatedNickNameList)) {
    if (value > 1) {
      duplicated.push(key);
    }
  }

  const answer = duplicated.map((key) => {
    const emailList = [];

    for (let i = 0; i < forms.length; i++) {
      if (forms[i][1].indexOf(key) !== -1) {
        emailList.push(forms[i][0]);
      }
    }

    return emailList;
  });
}

module.exports = problem6;
