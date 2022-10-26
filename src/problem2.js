function problem2(cryptogram) {
  var answer;
  answer = removeDuplicate(cryptogram);
  return answer;
}

function removeDuplicate(word) {
  const stack = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== stack[stack.length - 1]) {
      stack.push(word[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
}

module.exports = problem2;
