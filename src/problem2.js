const findDuplicate = (string) => string.match(/([a-z])\1{1,}/g);

const problem2 = (cryptogram) => {
  let answer;
  const cipherText = cryptogram;

  if (!findDuplicate(cipherText)) return cipherText;

  while (findDuplicate(cipherText)) {
    const duplicates = findDuplicate(cipherText);

    duplicates.forEach(
      (duplicate) => (cipherText = cipherText.replace(duplicate, ''))
    );

    answer = cipherText;
  }

  return answer;
};

module.exports = problem2;
