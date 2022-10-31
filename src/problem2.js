function problem2(cryptogram) {
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

  if (waste === "") {
    return cryptogramString;
  } else {
    return problem2(cryptogramString);
  }
}

module.exports = problem2;
console.log(problem2("saddaas"));
