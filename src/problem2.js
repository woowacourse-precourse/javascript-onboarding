const duplicateStringExists = (string) => {
  return string.search(/([a-zA-Z])\1/) !== -1;
};
const cutDuplicateString = (string) => {
  return string.replace(/([a-zA-Z])\1+/g, "");
};
function problem2(cryptogram) {
  while (duplicateStringExists(cryptogram)) {
    cryptogram = cutDuplicateString(cryptogram);
  }
  return cryptogram;
}

module.exports = problem2;
