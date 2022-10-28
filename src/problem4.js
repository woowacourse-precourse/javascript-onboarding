function problem4(word) {
  let answer = word;
  let length = word.length;

  for (let index = 0; index < length; index++) {
    const isCapital = /^[A-Z]+$/;
    const isSmall = /^[a-z]+$/;

    if (isCapital.test(word[index])) {
      answer[index] = frogDictionary(word[index], "capital");
    } else if (isSmall.test(word[index])) {
      answer[index] = frogDictionary(word[index], "small");
    }
  }
  return answer;
}

function frogDictionary(char, capitalOrSmall) {
  switch (char) {
    case "capital":
      let ascii1 = char.charCodeAt(0);
      let frogDic1 = (ascii1 - 65) + (25 - 2 * ascii1);
      return String.fromCharCode(frogDic1);
    case "small":
      let ascii2 = char.charCodeAt(0);
      let frogDic2 = (ascii2 - 97 ) + (25 - 2 * ascii2);
      return String.fromCharCode(frogDic2);
  }
}
module.exports = problem4;