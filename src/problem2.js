function problem2(cryptogram) {
  const RepetitionWords = [...cryptogram];
  let answer = "";

  for (let i = 0; i < RepetitionWords.length; i++) {
    if (RepetitionWords[i] === RepetitionWords[i + 1]) {
      i++;
    } else answer += RepetitionWords[i];
  }
  console.log(answer);
  console.log(RepetitionWords);

  return answer === RepetitionWords.join("") ? answer : problem2(answer);
}
problem2("zyelleyz");
module.exports = problem2;
