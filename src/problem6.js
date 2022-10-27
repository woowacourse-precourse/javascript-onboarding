function problem6(forms) {
  let answer = new Set();
  let duplicateNicknameList = new Map();

  let getDuplicatedNicknameList = function (forms) {
    forms.forEach((form) => {
      const [email, nickname] = form;
      for (let i = 0; i < nickname.length - 1; i++) {
        const testText = nickname.substring(i, i + 2);
        duplicateNicknameList.set(
          testText,
          (duplicateNicknameList.get(testText) || 0) + 1
        );
      }
    });
  };

  let getEmailList = function (forms) {
    forms.forEach((form) => {
      const [email, nickname] = form;
      for (let i = 0; i < nickname.length - 1; i++) {
        const testText = nickname.substring(i, i + 2);
        if (duplicateNicknameList.get(testText) > 1) answer.add(email);
      }
    });
  };

  getDuplicatedNicknameList(forms);
  getEmailList(forms);

  answer = Array.from(answer);
  answer.sort();

  return answer;
}


module.exports = problem6;

