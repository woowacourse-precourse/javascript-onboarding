function problem2(cryptogram) {
  var answer = removeDuplicates(cryptogram);
  return answer;
}

function removeDuplicates(str) {
  const stack = [str[0]];

  for (let i = 1; i < str.length; i++) {
    const prev = str[i];

    if (stack[stack.length - 1] === prev) {
      stack.pop();
      continue;
    }
    stack.push(prev);
  }

  return stack.join("");
}

module.exports = problem2;
