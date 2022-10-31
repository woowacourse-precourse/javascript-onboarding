function problem2(cryptogram) {
  let answer = [cryptogram[0]];

  for (let i = 1; i <= cryptogram.length; i++) {
    if (cryptogram[i] !== answer[answer.length - 1]) answer.push(cryptogram[i]);
    else answer.pop();
  }
  return answer.join("");
}

module.exports = problem2;
