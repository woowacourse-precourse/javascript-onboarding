function problem4(word) {
  const changeAlphabet = (char, char_arr) => {
    const idx = char_arr.indexOf(char);
    return char_arr[char_arr.length - (idx + 1)];
  };

  const replaceAlphabet = (word) => {
    const lower_case = [
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
      "x",
      "y",
      "z",
    ];
    const upper_case = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    const word_arr = word.split("");
    let new_word;
    new_word = word_arr.map((char) => {
      // 공백은 그대로 반환
      if (char === " ") return " ";
      // 소문자일 때
      if (lower_case.includes(char)) {
        return changeAlphabet(char, lower_case);
      }
      // 대문자일 때
      else {
        return changeAlphabet(char, upper_case);
      }
    });

    return new_word.join("");
  };

  // 코드 작성
  return replaceAlphabet(word);
}

module.exports = problem4;
