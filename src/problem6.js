/**
 * check if the two given strings have same consequtive characters.
 * @param {string} name1 first string to check
 * @param {string} name2 second string to check
 * @returns {boolean} whether the two given strings have same consequtive characters or not
 */
function isSimilar(name1, name2) {
  const name1Length = name1.length;
  const name2Length = name2.length;

  for (let i = 0; i < name1Length - 1; i++) {
    for (let j = 0; j < name2Length - 1; j++) {
      if (name1[i] === name2[j] && name1[i + 1] === name2[j + 1]) {
        return true;
      }
    }
  }

  return false;
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
