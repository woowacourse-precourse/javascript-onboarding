function problem4(word) {
  const wordArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "z",
    "y",
    "z",
  ];

  const upperWordArray = Array.from(wordArray, (x) => x.toUpperCase());

  const newWordArray = [
    "z",
    "y",
    "x",
    "w",
    "v",
    "y",
    "t",
    "s",
    "r",
    "q",
    "p",
    "o",
    "n",
    "m",
    "l",
    "k",
    "j",
    "i",
    "h",
    "g",
    "f",
    "e",
    "d",
    "c",
    "b",
    "a",
  ];

  const upperNewWordArray = Array.from(newWordArray, (x) => x.toUpperCase());

  const originWord = word.split("");

  originWord.map((el, index) => {
    if (el === el.toUpperCase()) {
      originWord.splice(
        index,
        1,
        upperNewWordArray[upperWordArray.findIndex((x) => el === x)]
      );
    } else if (el === el.toLowerCase()) {
      originWord.splice(
        index,
        1,
        newWordArray[wordArray.findIndex((x) => el === x)]
      );
    } else {
      console.log("123");
      originWord.splice(index, 1, "-");
    }
  });

  function updateArray(myArray, oldValue, newValue) {
    const index = myArray.indexOf(oldValue);
    if (index !== -1) {
      myArray[index] = newValue;
    }
    return myArray;
  }

  for (let i = 0; i < originWord.length; i++) {
    updateArray(originWord, undefined, "-");
  }

  var answer = originWord.join("").replace(/-/gi, " ");
  return answer;
}

module.exports = problem4;
