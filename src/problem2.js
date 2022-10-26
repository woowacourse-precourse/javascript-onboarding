function removeDuplicates(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2);

      if (i > 1) {
        i -= 2;
      } else {
        i = -1;
      }
    }
  }

  return str;
}

function problem2(cryptogram) {
  let answer = removeDuplicates(cryptogram);

  return answer;
}

module.exports = problem2;
