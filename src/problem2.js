function problem2(cryptogram) {
  const arrayCryptogram = [...cryptogram];
  let letter = "";

  for (let i = 0; i < arrayCryptogram.length; i++) {
    if (letter == arrayCryptogram[i]) {
      arrayCryptogram.splice(i - 1, 2);

      i = 0;
      letter = "";
    }
    letter = arrayCryptogram[i];
  }
  return arrayCryptogram.join("");
}

module.exports = problem2;
