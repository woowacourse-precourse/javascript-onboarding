function problem2(cryptogram) {
  // 스택으로 풀기
  let stack=[];

  for (let word of cryptogram) {
    if (stack[stack.length-1] != word) stack.push(word);
    else stack.pop();
  };

  return stack.join('');
}

module.exports = problem2;
