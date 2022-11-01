function problem2(cryptogram) {
  let result = cryptogram;
  const getAllDuplicates = /([a-z])\1+/g;

  while (result.match(getAllDuplicates)) {
    result = result.replace(getAllDuplicates, "");
  }
  return result;
}

module.exports = problem2;
