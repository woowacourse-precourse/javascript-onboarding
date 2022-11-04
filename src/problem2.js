function problem2(cryptogram) {
  const decrypted = cryptanalyze(cryptogram).join('');

  return decrypted === cryptogram ? cryptogram : problem2(decrypted);
}

function cryptanalyze(cryptogram) {
  return [...cryptogram].filter(
    (cipher, index) => !isConsecutive(cipher, cryptogram, index),
  );
}

function isConsecutive(value, array, index) {
  return value === array[index - 1] || value === array[index + 1];
}

module.exports = problem2;
