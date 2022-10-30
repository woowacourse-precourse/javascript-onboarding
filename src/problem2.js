function problem2(cryptogram) {
  while (1) {
    cryptogram = removeDuplicate(cryptogram);
    if (isNotDuplicate(cryptogram)) break;
  }
  return cryptogram;
}

const searchDuplicateRegExp = /([a-z])\1+/g;

const removeDuplicate = (cryptogram) => {
  return cryptogram.replace(searchDuplicateRegExp, "");
};

const isNotDuplicate = (cryptogram) => {
  return !searchDuplicateRegExp.test(cryptogram);
};

module.exports = problem2;
