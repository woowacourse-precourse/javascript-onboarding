function problem4(word) {
  let answer = word;
  let length = word.length;
  const isCapital = /^[A-Z]+$/;
  const isSmall = /^[a-z]+$/;

  for (let index = 0; index < length; index++) {
    let char = word[index];
    let charReplace;
    if (isCapital.test(char)) {
      charReplace = frogDictionary(char, "capital");
      answer = answer.replaceAt(index, charReplace);
    } else if (isSmall.test(answer[index])) {
      charReplace = frogDictionary(char, "small");
      answer = answer.replaceAt(index, charReplace);
    }
  }

  return answer;
}

String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  return this.substring(0, index) + replacement + this.substring(index + 1);
}

function frogDictionary(char, capitalOrSmall) {
  let changeChar;

  switch (capitalOrSmall) {
    case "capital":
      let ascii1 = char.charCodeAt(0);
      changeChar = String.fromCharCode(ascii1 + (25 - 2 * (ascii1 - 65)));
      return changeChar;
    case "small":
      let ascii2 = char.charCodeAt(0);
      changeChar = String.fromCharCode(ascii2 + (25 - 2 * (ascii2 - 97)));
      return changeChar;
  }
}
module.exports = problem4;