function problem4(word) {
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
        const lower_case_idx = lower_case.indexOf(char);
        return lower_case[lower_case.length - (lower_case_idx + 1)];
      }
      // 대문자일 때
      else {
        const upper_case_idx = upper_case.indexOf(char);
        return upper_case[upper_case.length - (upper_case_idx + 1)];
      }
    });

    return new_word.join("");
  };

  let answer;
  return answer;
}

module.exports = problem4;
