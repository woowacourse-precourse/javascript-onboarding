function problem2(cryptogram) {
  while (cryptogram !== removeDuplication(cryptogram)) {
    cryptogram = removeDuplication(cryptogram);
  }
  return cryptogram;
}

const removeDuplication = (str) => {
  const regex = new RegExp(/(.)\1+/, "g");

  return str.replace(regex, "");
};

module.exports = problem2;
