// @ts-check

/**
 * @param {string} cryptogram
 * @returns {string}
 */
function problem2(cryptogram) {
  let loop = true;

  while (loop) {
    loop = false;
    for (let i = 0; i < cryptogram.length; i++) {
      if (cryptogram[i] === cryptogram[i + 1]) {
        loop = true;
        cryptogram = cryptogram.replace(cryptogram[i].repeat(2), "");
        i--;
      }
    }
  }
  return cryptogram;
}

console.log(problem2("browoanoommnaon")); // "brown"
console.log(problem2("zyelleyz")); // ""

module.exports = problem2;
