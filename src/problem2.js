function problem2(cryptogram) {
  var answer;

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
