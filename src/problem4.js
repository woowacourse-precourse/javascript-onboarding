const TreeFrog = {
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
  let start = startChar.charCodeAt(0);
  let end = endChar.charCodeAt(0);
  chars = chars.map((char) => {
    let charCode = char.charCodeAt(0);
    if (charCode > start && charCode < end) {
      let gap = charCode - start;
      return String.fromCharCode(end - gap);
    }
    return char;
  });
  return chars.join("");
}

function problem4(word) {
  const treeFlog = Object.assign({}, TreeFrog);
  treeFlog.inputMonSay(word);
  return treeFlog.convertTreeFlog();
}

module.exports = problem4;
