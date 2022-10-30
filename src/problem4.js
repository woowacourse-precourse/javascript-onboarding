function convertToFrogDictionary(targetChar) {
  if (targetChar >= 65 && targetChar <= 90) {
    return String.fromCharCode(90 - (targetChar - 65));
  } else if (targetChar >= 97 && targetChar <= 122) {
    return String.fromCharCode(122 - (targetChar - 97));
  }
}

function problem4(word) {
  const words = word.split('');
  const result = [];
  for (char of words) {
    const pattern = /[a-zA-Z]/;
    if (pattern.test(char)) {
      const targetASCII = char.charCodeAt();
      result.push(convertToFrogDictionary(targetASCII));
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

module.exports = problem4;
