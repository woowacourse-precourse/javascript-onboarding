/**
 * Returns the decrypt string
 * @param {string} cryptogram
 * @returns {string}
 */
 function problem2(cryptogram) {
  return cryptogram
    .split("")
    .reverse()
    .reduce(
      (acc, cur) =>
        acc.includes(cur) ? acc.filter((c) => c !== cur) : [cur, ...acc],
      []
    )
    .join("");
}
module.exports = problem2;
