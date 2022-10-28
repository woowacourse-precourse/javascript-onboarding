const treeFrog = {
  monSay: "",
  inputMonSay: function (text) {
    if (!this.checkTextLength(text)) {
      return;
    }
    this.monSay = text;
  },
  checkTextLength: function (text) {
    return text.length >= 1 && text.length <= 1000;
  },
  convertTreeFlog: function () {
    let convertedBigChars = convertWordSwitch(this.monSay, "A", "Z");
    let convertedSmallChars = convertWordSwitch(convertedBigChars, "a", "z");
    return convertedSmallChars;
  },
};

function convertWordSwitch(text, startChar, endChar) {
  let chars = text.split("");
  let start = String.charCodeAt(startChar);
  let end = String.charCodeAt(endChar);
  chars = chars.map((char) => {
    let charCode = String.charCodeAt(char);
    if (charCode > start && charCode < end) {
      let gap = charCode - start;
      return String.charAt(end - gap);
    }
    return char;
  });
  return chars.join("");
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
