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

const countWord = ({ word, wordMap, user: { email, nickname } }) => {
  if (wordMap.has(word)) {
    const { count, users } = wordMap.get(word);

    wordMap.set(word, {
      count: count + 1,
      users: [...users, { email, nickname }],
    });

    return;
  }

  wordMap.set(word, { count: 1, users: [{ email, nickname }] });
};

const setNicknameWordMap = ({ words, wordMap, user }) => {
  for (const word of words) {
    countWord({ word, wordMap, user });
  }
};

const createNicknameWordMap = (forms) => {
  const nicknameWordMap = new Map();

  for (const [email, nickname] of forms) {
    const wordSet = extractWord(nickname);

    setNicknameWordMap({
      words: wordSet,
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

module.exports = problem6;
