function problem2(cryptogram) {
  const cryptogramArray = cryptogram.split("");
  let index = 0;
  while (true) {
    if (index >= cryptogramArray.length - 1) break;

    if (cryptogramArray[index] === cryptogramArray[index + 1]) {
      cryptogramArray.splice(index, 2);
      index = 0;
    } else index += 1;
  }

  return cryptogramArray.join("");
}

module.exports = problem2;
