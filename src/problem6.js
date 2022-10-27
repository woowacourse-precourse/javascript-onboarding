function extractWord({ nickname, characterLength = 2 }) {
  const wordSet = new Set();

  for (let i = 0; i <= nickname.length - characterLength; i++) {
    const word = nickname.slice(i, characterLength + i);

    wordSet.add(word);
  }

  return wordSet;
}

function problem6(forms) {
  const UNIQUE_NAME_USER_COUNT = 1;
  const duplicateNicknameUserEmails = [];

  /* {"단어" => {count: 0, users : [{email, 닉네임}, {email,닉네임}]}} */
  const nicknameWordMap = new Map();

  for (const [email, nickname] of forms) {
    const wordSet = extractWord({ nickname });

    for (const word of wordSet) {
      if (nicknameWordMap.has(word)) {
        const { count, users } = nicknameWordMap.get(word);

        nicknameWordMap.set(word, {
          count: count + 1,
          users: [...users, { email, nickname }],
        });
        continue;
      }

      nicknameWordMap.set(word, { count: 1, users: [{ email, nickname }] });
    }
  }

  for (const [_, { count, users }] of nicknameWordMap) {
    if (count > UNIQUE_NAME_USER_COUNT) {
      users.forEach(({ email }) => duplicateNicknameUserEmails.push(email));
    }
  }

  duplicateNicknameUserEmails.sort();

  return duplicateNicknameUserEmails;
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
