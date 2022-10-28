function problem2(cryptogram) {
  let answer = [cryptogram[0]];
  for (let i = 1; i < cryptogram.length; i++) {
    if (answer[answer.length - 1] === cryptogram[i]) answer.pop();
    else answer.push(cryptogram[i]);
  }
  return answer.join("");
}

module.exports = problem2;
