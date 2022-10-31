/**
 * @param {string} cryptogram
 * @returns {string}
 */
function problem2(cryptogram) {
  let flag = true;
  let temp = cryptogram;
  let answer;
  let cache = '';

  while (flag) {
    for (let i = 0; i < temp.length; i++) {
      const cur = temp[i];
      for (let j = i + 1; j < temp.length; j++) {
        const next = temp[j];

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

    answer = temp.replace(cache, '');
    cache = '';

    if (temp !== answer) temp = answer;
    else flag = false;
  }

  return answer;
}

module.exports = problem2;
