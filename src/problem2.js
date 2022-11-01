function problem2(cryptogram) {
  var answer;
  return answer;
  const cryptogramArray = cryptogram.split("");
  let cryptogramString = "";
  let waste = "";
  cryptogramArray.forEach((code, index, cryptogramArray) => {
    if (
      code !== cryptogramArray[index - 1] &&
      code !== cryptogramArray[index + 1]
    ) {
      cryptogramString += code;
      return;
    }
    waste += code;
  });
}

module.exports = problem2;
