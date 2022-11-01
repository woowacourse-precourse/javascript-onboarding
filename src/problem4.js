function problem4(word) {
  let answer = '';

  for (let i of word) {
    const convertWord = i.charCodeAt();
    let resultWord = '';
    if (convertWord >= 65 && convertWord <= 90)
      resultWord = 90 - convertWord + 65;
    else if (convertWord >= 97 && convertWord <= 122)
      resultWord = 122 - convertWord + 97;
    else resultWord = convertWord;
    answer = answer + String.fromCharCode(resultWord);
  }

  return answer;
}

module.exports = problem4;
