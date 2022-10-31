function problem4(word) {
  const upperCaseDic = {
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
    k: "P",
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
    a: "z",
  };
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      answer += word[i];
    } else {
      if (word[i].toUpperCase() === word[i]) {
        answer += upperCaseDic[word[i]];
      } else {
        answer += upperCaseDic[word[i].toUpperCase()].toLowerCase();
      }
    }
  }
  return answer;
}

module.exports = problem4;
