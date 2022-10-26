function problem4(word) {
  let answer = "";
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
  for (let x of word) {
    if (x === " ") {
      answer += " ";
      continue;
    }
    let char = wordsObject[x.toUpperCase()];
    if (x === x.toUpperCase()) {
      answer += char;
    } else {
      answer += char.toLowerCase();
    }
  }
  return answer;
}

module.exports = problem4;
