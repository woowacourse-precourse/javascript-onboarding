class LetterPairDeletingStack {
  constructor() {
    this.stack = [null]; // Placeholder for safer peek
  }

  peekOrNull() {
    return this.stack[this.stack.length - 1];
  }

  push(letter) {
    if (this.peekOrNull() === letter) {
      this.stack.pop();
    } else {
      this.stack.push(letter);
    }
  }

  toString() {
    return this.stack.slice(1).join("");
  }
}

function removeRepeatingLetters(input) {
  const nonRepeatingLetters = [];
  let lastRun = { letter: "", run: 0 };

  for (const letter of input) {
    if (letter === lastRun.letter) {
      lastRun = { letter, run: lastRun.run + 1 };
    } else {
      // New run
      if (lastRun.run === 1) {
        nonRepeatingLetters.push(lastRun.letter);
      }
      lastRun = { letter, run: 1 };
    }
  }

  if (lastRun.run === 1) {
    nonRepeatingLetters.push(lastRun.letter);
  }
  return nonRepeatingLetters.join("");
}

module.exports = {
  LetterPairDeletingStack,
  removeRepeatingLetters,
};
