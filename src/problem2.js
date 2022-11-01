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
  if (cryptogram === removeDuplication(splitCryptogram)) return cryptogram;
  return problem2(removeDuplication(splitCryptogram));
}

module.exports = problem2;
