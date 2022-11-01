function problem4(word) {
  if (word.length < 1 || word.length > 1000) {
    return -1;
  }
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
  let ascii;

  switch (capitalOrSmall) {
    case "capital":
      ascii = char.charCodeAt(0);
      changeChar = String.fromCharCode(ascii + (25 - 2 * (ascii - 65)));
      return changeChar;
    case "small":
      ascii = char.charCodeAt(0);
      changeChar = String.fromCharCode(ascii + (25 - 2 * (ascii - 97)));
      return changeChar;
  }
}
module.exports = problem4;