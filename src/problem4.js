const treeFrog = {
  monSay: "",
  chars: [],
  inputMonSay: function (text) {
    if (!this.checkTextLength(text)) {
      return;
    }
    this.monSay = text;
  },
  checkTextLength: function (text) {
    return text.length >= 1 && text.length <= 1000;
  },
};

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
