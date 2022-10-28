function problem2(cryptogram) {
  const words = [...cryptogram];
  let answer = '';
  let overword = null;

  for (let i = 0; i < words.length; i++) {
    if (overword === words[i]) continue;

    if (words[i] === words[i + 1]) {
      overword = words[i];
    } else {
      overword = null;
      answer += words[i];
    }
  }

  return answer === cryptogram ? answer : problem2(answer);
}

module.exports = problem2;