function solution(text) {
  const stack = [];
  let temp = "";
  for (let i = 0; i < text.length; i++) {
    if (stack.length === 0 && temp !== text[i]) stack.push(text[i]);
    else if (stack[stack.length - 1] === text[i]) {
      stack.pop();
      temp = text[i];
    } else if (temp !== text[i]) {
      stack.push(text[i]);
      temp = "";
    }
  }
  return stack.join("");
}

function problem2(cryptogram) {
  return solution(cryptogram);
}

module.exports = problem2;
