class FrogWord {
  constructor(word) {
    this.word = word;
  }

  getWord() {
    const letters = [];
    this.word.split("").forEach((letter) => {
      letters.push(this.translate(letter));
    });

    return letters.join("");
  }

  translate(letter) {
    const [ASCII_A, ASCII_Z, ASCII_a, ASCII_z] = [65, 90, 97, 122];
    const key = letter.charCodeAt();
    if (key >= ASCII_A && key <= ASCII_Z)
      return String.fromCharCode(ASCII_Z - (key - ASCII_A));
    else if (key >= ASCII_a && key <= ASCII_z)
      return String.fromCharCode(ASCII_z - (key - ASCII_a));
    return String.fromCharCode(key);
  }
}

function problem4(word) {
  const frogWord = new FrogWord(word);
  return frogWord.getWord();
}

module.exports = problem4;
