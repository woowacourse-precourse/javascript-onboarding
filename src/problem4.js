function problem4(words) {
  let result = "";
  let wordMap = new Map([
    ["A", "Z"],
    ["B", "Y"],
    ["C", "X"],
    ["D", "W"],
    ["E", "V"],
    ["F", "U"],
    ["G", "T"],
    ["H", "S"],
    ["I", "R"],
    ["J", "Q"],
    ["K", "P"],
    ["L", "O"],
    ["M", "N"],
    ["N", "M"],
    ["O", "L"],
    ["P", "K"],
    ["Q", "J"],
    ["R", "I"],
    ["S", "H"],
    ["T", "G"],
    ["U", "F"],
    ["V", "E"],
    ["W", "D"],
    ["X", "C"],
    ["Y", "B"],
    ["Z", "A"],
  ]);

  for (let word of words) {
    if (word == " " || word == null) {
      result += " ";
      continue;
    }

    if (word.charCodeAt(0) < 65 || word.charCodeAt(0) > 122) {
      result += word;
      continue;
    }

    if (word.toUpperCase() == word) {
      //대문자면
      result += wordMap.get(word);
    } else if (word.toLowerCase() == word) {
      //소문자면
      word = word.toUpperCase();
      result += wordMap.get(word).toLowerCase();
    }
  }
  console.log(result);
}

problem4("I love you");

module.exports = problem4;
