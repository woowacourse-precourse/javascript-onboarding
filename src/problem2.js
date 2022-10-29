function problem2(cryptogram) {
  var answer;
  let strStack = [cryptogram[0]];
  let length = cryptogram.length;
  let top;

  for (let i = 1; i < length; i++) {
    if (strStack.length === 0) {
      strStack.push(cryptogram[i]);
    } else {
      if (strStack[strStack.length - 1] === cryptogram[i]) {
        top = strStack.pop();
        while (top === cryptogram[i]) {
          i++;
        }
        i--;
      } else {
        strStack.push(cryptogram[i]);
      }
    }
  }

  answer = strStack;
  return answer;
}

console.log(problem2("browoanoommnaon").join(""));
console.log(problem2("zyelleyz").join(""));
module.exports = problem2;
