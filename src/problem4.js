function problem4(word) {
  const lowerCase = Array.from({ length: 26 }, (VOID, index) => String.fromCharCode(index + 97));
  const upperCase = Array.from({ length: 26 }, (VOID, index) => String.fromCharCode(index + 65));
  const alphabet = lowerCase.concat(upperCase);

  const oppositeDictionary = alphabet.reverse(); // z = oppositeDictionary[26]

  const findIndex = Array.from(word, letter => letter === letter.toUpperCase() ? upperCase.indexOf(letter) : lowerCase.indexOf(letter) + 26);

  const convert = findIndex.map((number) => oppositeDictionary[number]);

  const removeComma = { ",,": " ", ",": "" };
  const answer = String(convert).replace(/,,|,/g, index => removeComma[index]);

  return answer;
}

module.exports = problem4;
