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
}

module.exports = problem6;
