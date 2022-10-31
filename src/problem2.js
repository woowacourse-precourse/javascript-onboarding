function problem2(cryptogram) {
  var answer;
  answer = removeDupl([...cryptogram]).join("");
  return answer;
}
const removeDupl = (string) => {
  let result = string;
  let dupleNum = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === result[i + 1]) {
      while (string[i] === string[i + dupleNum + 1]) {
        dupleNum++;
      }
      result.splice(i, dupleNum + 1);
      return removeDupl(result);
    }
  }
  return result;
};

module.exports = problem2;
