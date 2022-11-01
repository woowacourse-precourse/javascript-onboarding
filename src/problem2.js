function problem2(cryptogram) {
  const duplicationCheck = [...cryptogram];
  let answer = "";

  for (let i = 0; i < duplicationCheck.length; i++) {
    duplicationCheck[i] === duplicationCheck[i + 1]
      ? i++
      : (answer += duplicationCheck[i]);
  }

  return answer === duplicationCheck.join("") ? answer : problem2(answer);
}

module.exports = problem2;
