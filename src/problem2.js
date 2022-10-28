const Cryptogram = {
  originText: "",
  chars: [],
  addOriginText: function (text) {
    this.originText = text;
    this.chars = this.originText.split("");
  },
  removeSameWord: function () {
    let tmpChars = [...this.chars];
    for (let i = 0; i < tmpChars.length - 1; i++) {
      if (tmpChars[i] === tmpChars[i + 1]) {
        tmpChars.splice(i, 2);
        i -= 2;
      }
    }
    return tmpChars.join("");
  },
};

function problem2(cryptogram) {
  Cryptogram.addOriginText(cryptogram);
  return Cryptogram.removeSameWord();
}

module.exports = problem2;
