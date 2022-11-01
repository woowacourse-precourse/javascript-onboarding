const findDuplicatedIndex = (word, startIndex) => {
  let duplicatedStartInd = -1;
  let duplicatedEndInd = -1;
  for (let i = startIndex; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      if (duplicatedStartInd === -1) {
        duplicatedStartInd = i;
        duplicatedEndInd = i + 1;
      }
      if (duplicatedStartInd !== -1) {
        duplicatedEndInd = i + 1;
      }
    }
  }
  return [duplicatedStartInd, duplicatedEndInd];
};

function problem2(cryptogram) {
  let answer = "";
  let nowInd = 0;
  let word = cryptogram.split("");
  while (nowInd < word.length) {
    const [start, end] = findDuplicatedIndex(word, nowInd);
    if (start !== -1) {
      word.splice(start, end - start + 1);
      nowInd = start - 1;
      continue;
    }
    break;
  }
  answer = word.join("");
  return answer;
}

module.exports = problem2;
