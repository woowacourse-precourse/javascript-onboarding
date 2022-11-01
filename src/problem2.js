function problem2(cryptogram) {
  let answer = contiCheck(cryptogram);

  function contiCheck(cryptogram) {
    let newCrypto = contiRemove(cryptogram);

    if (newCrypto === cryptogram) {
      return newCrypto;
    }
    return contiCheck(newCrypto);
  }

  function contiRemove(code) {
    let newCode = "";
    let contiPart = "";

    for (let i = 0; i < code.length; i++) {
      if (code[i] === code[i + 1] || contiPart === code[i]) {
        contiPart = code[i];
        continue;
      }

      contiPart = "";
      newCode += code[i];
    }
    return newCode;
  }

  return answer;
}

module.exports = problem2;
