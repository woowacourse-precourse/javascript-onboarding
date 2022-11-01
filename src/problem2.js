function problem2(cryptogram) {
  if (1 <= cryptogram <= 1000) {
    cryptogram.toLowerCase();
    let stack = [];
    for (let i of cryptogram) {
      if (stack[stack.length - 1] === i) {
        stack.pop();
        continue;
      }
      stack.push(i);
    }
    let answer = stack.join("");
    return answer;
  }
}

module.exports = problem2;
