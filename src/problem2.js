function problem2(cryptogram) {
  var answer;
  answer = removeDupl(cryptogram);
  return answer;
}
const removeDupl = (string) => {
  let result = string;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      result = string.replace(`${string[i]}${string[i]}`, "");
      return removeDupl(result);
    }
  }
  return result;
};
problem2("browoanoommnaon");

module.exports = problem2;
