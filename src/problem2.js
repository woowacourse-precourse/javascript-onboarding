function problem2(cryptogram) {
  let answer=[];
  for (let word of cryptogram) {
    if (answer[answer.length-1] != word) answer.push(word);
    else answer.pop();
  };
  return answer.join('');
};

module.exports = problem2;
