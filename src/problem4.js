function problem4(word) {
  var answer;

  function toAscii(wordString) {
    var originArray;
    originArray = wordString.split("").map((each) => each.charCodeAt());
    return originArray;
  }

  function convert(originArray) {
    var newArray;
    newArray = originArray.map((each) => {
      if (each >= 65 && each <= 90) {
        return 155 - each;
      } else if (each >= 97 && each <= 122) {
        return 219 - each;
      } else return each;
    });
    return newArray;
  }

  function toChar(newArray) {
    var newWord;
    newWord = String.fromCharCode(...newArray);
    return newWord;
  }

  answer = toChar(convert(toAscii(word)));

  return answer;
}

module.exports = problem4;
