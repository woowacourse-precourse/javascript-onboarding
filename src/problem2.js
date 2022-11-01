const findDuplicate = (string) => string.match(/([a-z])\1{1,}/g);

const problem2 = (cryptogram) => {
  if (!findDuplicate(cryptogram)) return cryptogram;

  while (findDuplicate(cryptogram)) {
    const duplicates = findDuplicate(cryptogram);

    duplicates.forEach(
      (duplicate) => (cryptogram = cryptogram.replace(duplicate, ""))
    );
  }

  return cryptogram;
};

module.exports = problem2;
