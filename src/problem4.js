function isAlphabet(letter) {
  const asciiCode = letter.charCodeAt(0);

  if (97 <= asciiCode && asciiCode <= 122) {
    return true;
  }
  if (65 <= asciiCode && asciiCode <= 90) {
    return true;
  }
  return false;
}

function problem4(word) {
  const MAP_1 = [
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
  ];
  const MAP_2 = [
    "z",
    "y",
    "x",
    "w",
    "v",
    "u",
    "t",
    "s",
    "r",
    "q",
    "p",
    "o",
    "n",
  ];

  let answer = "";

  word.split("").map((letter) => {
    let temp = letter;
    if (isAlphabet(letter)) {
      if (MAP_1.includes(letter.toLowerCase())) {
        const index = MAP_1.indexOf(letter.toLowerCase());
        if (letter === letter.toLowerCase()) {
          temp = MAP_2[index];
        } else {
          temp = MAP_2[index].toUpperCase();
        }
      }
      if (MAP_2.includes(letter.toLowerCase())) {
        const index = MAP_2.indexOf(letter.toLowerCase());
        if (letter === letter.toLowerCase()) {
          temp = MAP_1[index];
        } else {
          temp = MAP_1[index].toUpperCase();
        }
      }
    }
    answer += temp;
  });

  return answer;
}

module.exports = problem4;
