const Cyptogram = {
  originText: "",
  chars: [],
  addOriginText: function (text) {
    this.originText = text;
    this.chars = this.originText.split("");
  },
  removeSameWord: function () {
    let tmpChars = [...this.chars];
    for (let i = 0; i < tmpChars.length - 1; i++) {
      if (tmpChars[i] == tmpChars[i + 1]) {
        tmpChars.slice(i, 2);
        i--;
      }
    }
    return tmpChars.join("");
  },
};

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
