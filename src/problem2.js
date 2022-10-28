function problem2(cryptogram) {
  const RepetitionWords = [...cryptogram];
  let answer = "";

  for (let i = 0; i < RepetitionWords.length; i++) {
    RepetitionWords[i] === RepetitionWords[i + 1]
      ? i++
      : (answer += RepetitionWords[i]);
  }

  return answer === RepetitionWords.join("") ? answer : problem2(answer);
}

module.exports = problem2;
