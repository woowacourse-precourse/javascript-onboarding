const Cryptogram = {
  originText: "",
  chars: [],
  addOriginText: function (text) {
    if (!this.checkText(text)) return false;
    this.originText = text;
    this.chars = this.originText.split("");
    return true;
  },
  checkText: function (text) {
    if (!this.checkTextLength(text)) {
      return false;
    }
    return true;
  },
  checkTextLength: function (text) {
    return text.length >= 0 && this.chars <= 1000;
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
