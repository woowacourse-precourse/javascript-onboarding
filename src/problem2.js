/**
 * remove continuous duplicated haracters in given string.
 * @param {string} cryptogram cryptogram(string to decode)
 * @returns {string} decoded string(string with continuous duplicated characters removed)
 */
function removeCharacters(cryptogram) {
  let decodedString = "";
  const length = cryptogram.length;
  for (let i = 0; i < length; i++) {
    let isUnique = true;
    if (i - 1 >= 0 && cryptogram[i] === cryptogram[i - 1]) isUnique = false;
    if (i + 1 < length && cryptogram[i] === cryptogram[i + 1]) isUnique = false;
    if (isUnique) decodedString += cryptogram[i];
  }
  return decodedString;
}

function problem2(cryptogram) {
  var answer;

  return answer;
}

module.exports = problem2;
