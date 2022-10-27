function extractWord({ nickname, characterLength = 2 }) {
  const wordSet = new Set();

  for (let i = 0; i <= nickname.length - characterLength; i++) {
    const word = nickname.slice(i, characterLength + i);

    wordSet.add(word);
  }

  return wordSet;
}

function problem6(forms) {
  var answer;

  /* {"단어" => {count: 0, users : [[email, 닉네임], [email,닉네임]]}} */
  const nicknameWordMap = new Map();

  for (const [email, nickname] of forms) {
    const wordSet = extractWord({ nickname });
    wordSet.forEach((word) =>
      nicknameWordMap.set(word, { count: 0, users: [] })
    );
  }

  console.log(nicknameWordMap);

  return answer;
}

module.exports = problem6;
