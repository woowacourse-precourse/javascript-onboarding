const extractWord = (nickname, characterLength = 2) => {
  const wordSet = new Set();

  for (let i = 0; i <= nickname.length - characterLength; i++) {
    const word = nickname.slice(i, characterLength + i);

    wordSet.add(word);
  }

  return wordSet;
};

const getUniqueEmails = (emails) => {
  const uniqueEmails = [...new Set(emails)];

  return uniqueEmails;
};
// 함수명 변경, 인자 수
const countWord = ({ wordSet, wordMap, user: { email, nickname } }) => {
  for (const word of wordSet) {
    if (wordMap.has(word)) {
      const { count, users } = wordMap.get(word);

      wordMap.set(word, {
        count: count + 1,
        users: [...users, { email, nickname }],
      });

      return wordMap;
    }

    wordMap.set(word, { count: 1, users: [{ email, nickname }] });
  }

  return wordMap;
};

const createNicknameWordMap = (forms) => {
  let nicknameWordMap = new Map();

  for (const [email, nickname] of forms) {
    const wordSet = extractWord(nickname);

    nicknameWordMap = countWord({
      wordSet,
      wordMap: nicknameWordMap,
      user: { email, nickname },
    });
  }

  return nicknameWordMap;
};

const getUserData = {
  email(userInfoList) {
    return getUniqueEmails(userInfoList);
  },
};

const getDuplicateNicknameUserData = (nicknameWordMap, data = "email") => {
  const UNIQUE_NAME_USER_COUNT = 1;
  const result = [];

  for (const [, { count, users }] of nicknameWordMap) {
    if (count > UNIQUE_NAME_USER_COUNT) {
      users.forEach((user) => result.push(user[data]));
    }
  }

  return getUserData[data](result);
};

const problem6 = (forms) => {
  /* {"단어" => {count: 0, users : [{email, 닉네임}, {email,닉네임}]}} */
  const nicknameWordMap = createNicknameWordMap(forms);
  const duplicateNicknameUserEmails =
    getDuplicateNicknameUserData(nicknameWordMap);
  const sortedUserEmailList = duplicateNicknameUserEmails.sort();

  return sortedUserEmailList;
};

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

module.exports = problem6;
