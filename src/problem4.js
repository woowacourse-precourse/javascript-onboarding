function spaceCheck(space) {
  if (space === " ") return true;
  return false;
}

function ChangeUpperCase(letter) {
  return letter.toUpperCase();
}

function ChangeLowerCase(letter) {
  return letter.toLowerCase();
}

function changeLetter(letter) {
  const wordsObject = {
    A: "Z",
    B: "Y",
    C: "X",
    D: "W",
    E: "V",
    F: "U",
    G: "T",
    H: "S",
    I: "R",
    J: "Q",
    K: "P",
    L: "O",
    M: "N",
    N: "M",
    O: "L",
    P: "K",
    Q: "J",
    R: "I",
    S: "H",
    T: "G",
    U: "F",
    V: "E",
    W: "D",
    X: "C",
    Y: "B",
    Z: "A",
  };

  if (spaceCheck(letter)) {
    return " ";
  }

  let changedLetter = wordsObject[ChangeUpperCase(letter)];
  if (changedLetter === undefined) return letter;

  if (ChangeUpperCase(letter) === letter) {
    return changedLetter;
  }
  return ChangeLowerCase(changedLetter);
}

function problem4(word) {
  let answer = "";

  for (let letter of word) {
    answer += changeLetter(letter);
  }
  return answer;
}

module.exports = problem4;
