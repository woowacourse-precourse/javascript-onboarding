/**
 * @param {string} str
 * @returns {string}
 */
function removeDuplicateStr(str) {
  let cache = '';

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    for (let j = i + 1; j < str.length; j++) {
      const next = str[j];

      if (cur === next) {
        if (!cache) {
          cache += cur + next;
        } else {
          cache += next;
        }
      } else {
        break;
      }
    }

    if (cache) break;
  }

  return str.replace(cache, '');
}

/**
 * @param {string} cryptogram
 * @returns {string}
 */
function problem2(cryptogram) {
  let temp = cryptogram;
  let answer;

  while (true) {
    answer = removeDuplicateStr(temp);

    if (temp !== answer) temp = answer;
    else break;
  }

  return answer;
}

module.exports = problem2;
