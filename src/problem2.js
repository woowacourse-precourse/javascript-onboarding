function problem2(cryptogram) {
  const INIT = -1;
  let countDuplication = INIT;
  let answer = cryptogram;

  function delDuplication(string) {
    countDuplication = 0;
    let result = string;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let letter of alphabet) {
      const regex = new RegExp(`${letter}{2,}`, "g");
      if (result.match(regex) !== null) {
        result = result.replace(regex, "");
        countDuplication += 1;
      }
    }

    return result;
  }

  while (countDuplication !== 0) {
    answer = delDuplication(answer);
  }

  return answer;
}

module.exports = problem2;
