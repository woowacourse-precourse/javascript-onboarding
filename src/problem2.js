function problem2(cryptogram) {
  const words = [...cryptogram];
  let answer = '';

  for (let i = 0; i < words.length; i++) {
    words[i] === words[i + 1] ? i++ : answer += words[i];
  }

  return answer === cryptogram ? answer : problem2(answer);
}

module.exports = problem2;