function problem2(cryptogram) {
  const cryptogramArr = [...cryptogram];
  let checkOverword = "";

  const decoding = cryptogramArr
    .map((word, index) => {
      if (checkOverword === word) return null;
      if (cryptogramArr[index] === cryptogramArr[index + 1]) {
        checkOverword = cryptogramArr[index];
        return null;
      }
      checkOverword = "";
      return word;
    })
    .join("");

  if (decoding === cryptogram) return decoding;
  return problem2(decoding);
}

module.exports = problem2;
