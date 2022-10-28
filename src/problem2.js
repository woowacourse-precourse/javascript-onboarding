const findDuplicatedIndex = (word, startIndex) => {
  let duplicatedInd = -1;
  for (let i = startIndex; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      duplicatedInd = i;
      break;
    }
  }
  return duplicatedInd;
};

function problem2(cryptogram) {
  let answer = "";
  let nowInd = 0;
  let word = cryptogram.split("");
  while (nowInd < word.length) {
    const dupliIndex = findDuplicatedIndex(word, nowInd);
    console.log(nowInd, word.join(""));
    if (dupliIndex !== -1) {
      word.splice(dupliIndex, 2);
      nowInd = dupliIndex - 1;
      continue;
    }
    break;
  }
  answer = word.join("");
  return answer;
}

module.exports = problem2;
