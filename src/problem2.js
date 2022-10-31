function problem2(cryptogram) {
  let answer = '';

  answer = cryptogram.split('').filter((ch, ind, str) => {
    return str[ind - 1] !== ch && str[ind + 1] !== ch;
  }).join('');
  if (answer === cryptogram) {
    return answer;
  }
  return problem2(answer);
}

module.exports = problem2;
