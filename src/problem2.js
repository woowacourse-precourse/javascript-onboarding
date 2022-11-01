function removeDuplication(splitCryptogram) {
  let arrayWithoutDuplication = splitCryptogram.reduce(
    (acc, alphabet, index, arr) => {
      alphabet !== arr[index + 1] &&
        alphabet !== arr[index - 1] &&
        acc.push(alphabet);
      return acc;
    },
    []
  );
  return arrayWithoutDuplication.join("");
}

function problem2(cryptogram) {
  let splitCryptogram = cryptogram.split("");
  return removeDuplication(splitCryptogram);
}

module.exports = problem2;
