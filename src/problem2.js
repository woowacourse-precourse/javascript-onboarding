function removeDuplicates(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2);

      if (i > 1) {
        i -= 2;
      } else {
        i--;
      }
    }
  }

  return str;
}

function problem2(cryptogram) {
  let answer = removeDuplicates(cryptogram);

  if (answer.length === 2) {
    const [firstCharacter, lastCharacter] = answer;

    return firstCharacter === lastCharacter ? '' : answer;
  }

  return answer;
}

module.exports = problem2;
