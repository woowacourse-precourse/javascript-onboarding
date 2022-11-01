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
    return this.checkTextLength(text) && this.checkTextLow(text);
  },
  checkTextLength: function (text) {
    return text.length >= 0 && this.chars <= 1000;
  },
  checkTextLow: function (text) {
    const nonLowText = text.split("").filter((char) => {
      if ("a" > char && "z" < char) {
        return char;
      }
    });
    return nonLowText.length === 0;
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
  const cryto = Object.assign({}, Cryptogram);
  cryto.addOriginText(cryptogram);
  return cryto.removeSameWord();
}

module.exports = problem2;
