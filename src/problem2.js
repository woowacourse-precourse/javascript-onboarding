function problem2(cryptogram) {
  let answer = [];

  let tmp = '';
  for (let char of cryptogram) {
    if (tmp !== char) {
      answer.push(char)
      tmp = char;
    } else if (tmp === char) {
      answer.pop();
      tmp = answer[answer.length-1]
    }
  }
  
  return answer.join("");
}

module.exports = problem2;
