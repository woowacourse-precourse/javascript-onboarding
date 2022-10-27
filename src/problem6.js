function getsubStrings(nickname) {
  const arr = [];

  for (let start = 0; start < nickname.length - 1; start++) {
    for (let end = start + 2; end <= nickname.length; end++) {
      const word = nickname.substring(start, end);
      arr.push(word);
    }
  }

  return [...new Set(arr)];
}

function getWords(forms) {
  const map = {};
  const words = [];
  for (const [_, nickname] of forms) {
    if (nickname.length < 2) continue;
    const subStrs = getsubStrings(nickname);
    for (const str of subStrs) {
      if (!map[str]) map[str] = 0;
      map[str] += 1;
    }
  }

  for (const word in map) {
    if (map[word] >= 2) words.push(word);
  }

  return words;
}

function isIncludes(answer, nickname, email, word) {
  if (nickname.includes(word)) answer.push(email);
}

function problem6(forms) {
  const words = getWords(forms);
  const answer = [];

  for (const [email, nickname] of forms) {
    for (const word of words) {
      isIncludes(answer, nickname, email, word);
    }
  }

  return [...new Set(answer)].sort();
}

module.exports = problem6;
