/**
 * @type {(cryptogram: string) => string}
 */
function problem2(cryptogram) {
  const findingRepetitiveCharRegex = /([a-z])\1+/g;
  let result = cryptogram;

  while (result.match(findingRepetitiveCharRegex) !== null) {
    result = result.replace(findingRepetitiveCharRegex, "");
  }

  return result;
}

module.exports = problem2;
