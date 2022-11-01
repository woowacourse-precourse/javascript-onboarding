function problem4(word) {
  let result = "";
  let normal = [
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
  let num = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      result += " ";
    } else {
      if (word[i] === word[i].toUpperCase()) {
        num = normal.indexOf(word[i].toLowerCase());
        result += normal[25 - num].toUpperCase();
      } else {
        num = normal.indexOf(word[i]);
        result += normal[25 - num];
      }
    }
  }

  return result;
}
console.log(problem4("I love you"));
module.exports = problem4;
