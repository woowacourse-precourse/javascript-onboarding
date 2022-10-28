function problem2(cryptogram) {
  let cryptogramArray = cryptogram.split("");
  let cryptogramArray2 = "";
  let waste = "";
  cryptogramArray.forEach((code, index, cryptogramArray) => {
    if (
      code !== cryptogramArray[index - 1] &&
      code !== cryptogramArray[index + 1]
    ) {
      cryptogramArray2 += code;
    } else {
      waste += code;
    }
  });

  if (waste === "") {
    return cryptogramArray2;
  } else {
    return problem2(cryptogramArray2);
  }
}

module.exports = problem2;
console.log(problem2("aasqwerwqsdseeesrr"));
