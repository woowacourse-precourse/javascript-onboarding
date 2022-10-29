function problem2(cryptogram) {
  let answer = cryptogram;

  function delDuplication(string) {
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

  return answer;
}

module.exports = problem2;
