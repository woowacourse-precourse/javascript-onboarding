function problem6(forms) {
  var answer;
  return answer;
}

class RenamingTargetListMaker {
  nickNameChecker = {};
  targetEmailList = new Set();

  constructor(forms) {
    this.forms = forms;
  }

  setDuplicationNickNameCount = (nickName) => {
    for (let i = 0; i < nickName.length - 1; i++) {
      const partOfNickName = nickName[i] + nickName[i + 1];
      this.nickNameChecker[partOfNickName] =
        (this.nickNameChecker[partOfNickName] || 0) + 1;
    }
  };
}

module.exports = problem6;
