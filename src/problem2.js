class Deduplication {
  constructor(word) {
    this.word = word;
    this.target = "";
  }

  deduplicate() {
    if (this.isDuplicate()) {
      this.target = "";
      this.word = this.delete();
      return this.deduplicate();
    }
    return this.word;
  }

  isDuplicate() {
    let duplicate = false;
    for (let i = 1; i < this.word.length; i++) {
      if (this.word[i] === this.word[i - 1]) {
        duplicate = true;
        break;
      }
    }
    return duplicate;
  }

  delete() {
    let stack = [];
    let check = false;
    this.word.split("").forEach((letter, idx) => {
      [stack, check] = this.change(stack, check, letter);
      if (idx === this.word.length - 1 && check) stack.pop();
    });
    return stack.join("");
  }

  change(stack, check, letter) {
    if (this.target !== letter) {
      this.target = letter;
      if (check) stack.pop();
      stack.push(letter);
      check = false;
    } else check = true;
    return [stack, check];
  }
}

function problem2(cryptogram) {
  const deduplication = new Deduplication(cryptogram);
  return deduplication.deduplicate();
}

module.exports = problem2;
