function problem4(word) {
  let newWord = [...word].map((letter) => 
  (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) ? String.fromCharCode(155 - letter.charCodeAt(0)) : 
  (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) ? String.fromCharCode(219 - letter.charCodeAt(0)) : letter);

  return newWord.join('');
}

module.exports = problem4;
