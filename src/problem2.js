function problem2(cryptogram) {
  const answer = isContinuous(cryptogram);
  return answer;
}

function isContinuous(cryptogram) {
  const newCryptogram = continuousRemoval(cryptogram);

  if (newCryptogram === cryptogram) {
    return newCryptogram;
  }
  return isContinuous(newCryptogram);
}

function continuousRemoval(code) {
  let newCode = "";
  let continuousAlphabet = "";
  for (let i = 0; i < code.length; i++) {
    if (code[i] === code[i + 1] || continuousAlphabet === code[i]) {
      continuousAlphabet = code[i];
      continue;
    }

    continuousAlphabet = "";
    newCode += code[i];
  }

  return newCode;
}

module.exports = problem2;
