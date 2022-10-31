function problem2(cryptogram) {
  var answer = solution(cryptogram);
  return answer;
};
function solution(cryptogram) {
  let tempStack = [];
  for (let i = 0; i < cryptogram.length; i++) {
    let last = tempStack[tempStack.length - 1];
    let curr = cryptogram[i];
    if (last === curr) {
      tempStack.pop();
    } else {
      tempStack.push(curr);
    }
  }
  let answer = tempStack.length === 0 ? "" : tempStack.join("");
  return answer;
};
module.exports = problem2;