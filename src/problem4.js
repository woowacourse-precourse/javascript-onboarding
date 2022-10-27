function problem4(word) {
  var answer = solution(word);
  return answer;
};
function solution(word) {
 let askiiNum = [], askiiStr = [];
 for(let i = 0; i < word.length; i++) {
  askiiNum.push(word.charCodeAt(i));
 };
 for(let i = 0; i < askiiNum.length; i++) {
  if(askiiNum[i] === 32) {
    askiiStr.push(String.fromCharCode(32));
  }
  if(askiiNum[i] <= 90 && askiiNum[i] !== 32) {
    askiiStr.push(String.fromCharCode(90 - (askiiNum[i] - 65)));
  } else if(askiiNum[i] <= 122 && askiiNum[i] !== 32) {
    askiiStr.push(String.fromCharCode(122 - (askiiNum[i] - 97)));
  }
 };
 return askiiStr.join("")
}
module.exports = problem4;
