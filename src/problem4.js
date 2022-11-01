function frogDictionary(letter) {
  if (letter === letter.toUpperCase()) {
    return "A".charCodeAt(0) + "Z".charCodeAt(0) - letter.charCodeAt(0);
  }
  return "a".charCodeAt(0) + "z".charCodeAt(0) - letter.charCodeAt(0);
}

function problem4(word) {
  const result = word
    .replace(/[a-zA-Z]/g, (letter) => String.fromCharCode(frogDictionary(letter)));
    
  return result;
}

module.exports = problem4;
