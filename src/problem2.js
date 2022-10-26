function problem2(cryptogram) {
  const answer = [];
  for (let x of cryptogram) {
    if (answer[answer.length - 1] !== x) {
      answer.push(x);
    } else {
      answer.pop();
    }
  }
  return answer.length === 0 ? "" : answer.join("");
}

module.exports = problem2;
