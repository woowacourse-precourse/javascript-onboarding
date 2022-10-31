const createConsecutiveLetterMap = (args) => {
  const { forms } = args;
  const consecutiveLetterMap = new Map();
  forms.forEach((userData) => {
    const userNickName = userData[1];
    const userNicknameLength = userNickName.length;

    for (let i = 0; i < userNicknameLength; i += 1) {
      if (i === userNicknameLength - 1) break;

      let consecutiveLetter = userNickName.substring(i, i + 2);
      consecutiveLetterMap.set(
        consecutiveLetter,
        consecutiveLetterMap.get(consecutiveLetter) + 1 || 1
      );
    }
  });

  return { ...args, consecutiveLetterMap };
};

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
