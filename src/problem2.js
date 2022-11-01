function sameCheck(a, b) {
  if (a === b) return 1;
  else return 0;
}

function problem2(cryptogram) {
  var answer;
  let stack = [];
  let prevWord = "";
  stack.push(cryptogram[0]);
  for (let i = 1; i < cryptogram.length; i++) {
    //스택 자료구조 push,pop으로
    const char = cryptogram[i];
    if (sameCheck(stack[stack.length - 1], char)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  answer = stack.join("");
  return answer;
}
module.exports = problem2;
