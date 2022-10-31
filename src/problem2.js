function problem2(cryptogram) {
  const INIT = -1;
  let duplicateCount = INIT;
  let answer = cryptogram;

  while (duplicateCount !== 0) {
    answer = delDuplication(answer);
  }

  return answer;

  function delDuplication(string) {
    duplicateCount = 0;
    let deduplicatedString = string;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let letter of alphabet) {
      const regex = new RegExp(`${letter}{2,}`, "g");
      if (deduplicatedString.match(regex) !== null) {
        deduplicatedString = deduplicatedString.replace(regex, "");
        duplicateCount += 1;
      }
    }

    return deduplicatedString;
  }
}

module.exports = problem2;
