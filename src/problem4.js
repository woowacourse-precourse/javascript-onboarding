function converFun(word) {
  const upperCaseASCIINum = 155;
  const lowerCaseASCIINUM = 219;
  const classifyingASCIINum = 96;
  if (word === " ") return " ";
  else {
    if (word.charCodeAt() > classifyingASCIINum) {
      return String.fromCharCode(lowerCaseASCIINUM - word.charCodeAt());
    } else {
      return String.fromCharCode(upperCaseASCIINum - word.charCodeAt());
    }
  }
}

function problem4(word) {
  let convertWord = word.split("").map((x) => converFun(x));
}

module.exports = problem4;
