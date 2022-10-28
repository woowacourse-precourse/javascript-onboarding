function problem4(word) {
  let arr = Array.from(word.length);
  for (let i = 0; i < word.length; i++) {
    if (
      (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) ||
      (word[i].charCodeAt(0) >= 97 && word[i].charCodeAt(0) <= 122)
    ) {
      arr[i] = converter(word[i]);
    } else {
      arr[i] = word[i];
    }
  }
  return arr.join("");
}

const converter = (alphabet) => {
  if (alphabet.charCodeAt(0) >= 65 && alphabet.charCodeAt(0) <= 90) {
    return String.fromCharCode(
      alphabet.charCodeAt(0) + (77 - alphabet.charCodeAt(0)) * 2 + 1
    );
  }
  return String.fromCharCode(
    alphabet.charCodeAt(0) + (109 - alphabet.charCodeAt(0)) * 2 + 1
  );
};

module.exports = problem4;
