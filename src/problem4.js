function problem4(word) {
  var answer = solution(word);
  return answer;
}
function solution(word) {
  let askiiNum = [], askiiStr = [];
  for (let i = 0; i < word.length; i++) {
    askiiNum.push(word.charCodeAt(i));
  }
  for (let i = 0; i < askiiNum.length; i++) {
    if (askiiNum[i] >= 65 && askiiNum[i] <= 90) {
      askiiStr.push(String.fromCharCode(155 - askiiNum[i]));
    } else if (askiiNum[i] >= 97 && askiiNum[i] <= 122) {
      askiiStr.push(String.fromCharCode(219 - askiiNum[i]));
    } else {
      askiiStr.push(String.fromCharCode(askiiNum[i]));
    }
  }
  return askiiStr.join("");
}
module.exports = problem4;