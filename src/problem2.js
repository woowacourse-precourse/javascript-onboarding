function problem2(cryptogram) {
  function deleteWords(words) {
    let [newWords, check, nextRepeat] = [[], false, false];
    words.split("").forEach((word) => {
      if (newWords[newWords.length - 1] === word) {
        [check, nextRepeat] = [true, true];
      } else {
        if (check) {
          newWords.pop();
          check = false;
        }
        newWords.push(word);
      }
    });
    if (check) newWords.pop();
    return [newWords.join(""), nextRepeat];
  }

  let [checkWord, result, repeat] = [cryptogram, "", false];

  while (true) {
    [result, repeat] = deleteWords(checkWord);
    if (!repeat) break;
    checkWord = result;
  }
  return result;
}

module.exports = problem2;
