function problem2(cryptogram) {
  let answer = removeSameCharacter(cryptogram);
  for (let i = 0; i < answer.length - 1; i++) {
    if (answer[i] === answer[i + 1]) {
      answer = removeSameCharacter(answer);
      i = -1;
    }
    if (i + 1 === answer.length - 1 && answer[i] !== answer[i + 1]) {
      return answer;
    }
  }

  function removeSameCharacter(inputString) {
    let decode = "";
    let baseIndex = 0;
    let compareIndex = baseIndex + 1;

    while (baseIndex < inputString.length) {
      if (inputString[baseIndex] === inputString[compareIndex]) {
        while (inputString[baseIndex] === inputString[compareIndex]) {
          compareIndex++;
        }
        baseIndex = compareIndex;
        compareIndex++;
      }
      if (inputString[baseIndex] !== inputString[compareIndex]) {
        decode += inputString[baseIndex];
        baseIndex++;
        compareIndex++;
      }
    }
    return decode;
  }

  return answer;
}

module.exports = problem2;
