const pipe =
  (...funcs) =>
  (arg) =>
    funcs.reduce((a, f) => f(a), arg);

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

const deleteNonOverlappingKeyInMap = (args) => {
  const { forms, consecutiveLetterMap } = args;
  const copyMap = new Map(
    JSON.parse(JSON.stringify(Array.from(consecutiveLetterMap)))
  );

  for (let [key, value] of copyMap) {
    if (value === 1) copyMap.delete(key);
  }

  return { ...args, consecutiveLetterMap: copyMap };
};

const isIncludeConsecutiveLetter = (consecutiveLetterMap, userNickName) =>
  Array.from(consecutiveLetterMap.keys()).some((consecutiveLetter) =>
    userNickName.includes(consecutiveLetter)
  );

const gatherEmailFromUsersUsingConsecutiveLetter = (args) => {
  const { forms, consecutiveLetterMap } = args;
  const userEmailArray = [];
  forms.forEach((userData) => {
    const [userEmail, userNickName] = userData;

    if (isIncludeConsecutiveLetter(consecutiveLetterMap, userNickName)) {
      userEmailArray.push(userEmail);
    }
  });

  return { ...args, userEmailArray };
};

const sortEmailFromUsersUsingConsecutiveLetter = (args) => {
  const { userEmailArray } = args;
  return userEmailArray.sort();
};

function problem6(forms) {
  const solve = pipe(
    createConsecutiveLetterMap,
    deleteNonOverlappingKeyInMap,
    gatherEmailFromUsersUsingConsecutiveLetter,
    sortEmailFromUsersUsingConsecutiveLetter
  )({ forms });

  return solve;
}

module.exports = problem6;
