function problem4(word) {
  const lowerCase = Array.from({ length: 26 }, (VOID, index) => String.fromCharCode(index + 97));
  const upperCase = Array.from({ length: 26 }, (VOID, index) => String.fromCharCode(index + 65));
  const alphabet = lowerCase.concat(upperCase);

  const oppositeDictionary = alphabet.reverse(); // z = oppositeDictionary[26]
  
  return answer;
}

module.exports = problem4;
