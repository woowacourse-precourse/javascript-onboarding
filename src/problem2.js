const duplicatedStringExist = (string) => {
  const duplicateExist = string.search(/([a-zA-Z])\1/);
  return duplicateExist !== -1;
};

const trimDuplicateString = (string) => {
  const trimedString = string.replace(/([a-zA-Z])\1+/g, "");
  return trimedString;
};

function problem2(cryptogram) {
  while (duplicatedStringExist(cryptogram)) {
    cryptogram = trimDuplicateString(cryptogram);
  }
  return cryptogram;
}

module.exports = problem2;
