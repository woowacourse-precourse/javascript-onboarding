function extractWord(nickname, characterLength = 2) {
  const wordSet = new Set();

  for (let i = 0; i <= nickname.length - characterLength; i++) {
    const word = nickname.slice(i, characterLength + i);

    wordSet.add(word);
  }

  return wordSet;
}

function getUniqueEmails(emails) {
  const uniqueEmails = [...new Set(emails)].sort();

  return uniqueEmails;
}

function countWord({ word, wordMap, nickname, email }) {
  if (wordMap.has(word)) {
    const { count, users } = wordMap.get(word);

    wordMap.set(word, {
      count: count + 1,
      users: [...users, { email, nickname }],
    });

    return;
  }

  wordMap.set(word, { count: 1, users: [{ email, nickname }] });
}

function createNicknameWordMap(forms) {
  const nicknameWordMap = new Map();

  for (const [email, nickname] of forms) {
    const wordSet = extractWord(nickname);

    for (const word of wordSet) {
      countWord({
        word,
        wordMap: nicknameWordMap,
        email,
        nickname,
      });
    }
  }

  return nicknameWordMap;
}

function problem6(forms) {
  const UNIQUE_NAME_USER_COUNT = 1;
  const duplicateNicknameUserEmails = [];

  /* {"단어" => {count: 0, users : [{email, 닉네임}, {email,닉네임}]}} */
  const nicknameWordMap = createNicknameWordMap(forms);

  // duplicateNicknameUserEmails 완성하는 부분의 함수 분리
  for (const [_, { count, users }] of nicknameWordMap) {
    if (count > UNIQUE_NAME_USER_COUNT) {
      users.forEach(({ email }) => duplicateNicknameUserEmails.push(email));
    }
  }

  const filteredUserEmails = getUniqueEmails(duplicateNicknameUserEmails);

  return filteredUserEmails;
}

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
