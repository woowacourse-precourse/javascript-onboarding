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

  setTargetEmailList = (email, nickName) => {
    if (!this.didDuplicationCheck)
      return new Error("닉네임 중복체크를 먼저 진행해야 합니다.");

    for (let i = 0; i < nickName.length - 1; i++) {
      const partOfNickName = nickName[i] + nickName[i + 1];
      if (this.nickNameChecker[partOfNickName] > 1)
        this.targetEmailList.add(email);
    }
  };
}

module.exports = problem6;
