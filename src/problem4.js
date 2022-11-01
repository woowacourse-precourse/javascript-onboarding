function problem4(word) {
  var answer = "";
  let frogDict = {
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
    Z: "A"
  }

  let i = 0;
  do {
    for (const [key, value] of Object.entries(frogDict)) {
      if (word[i] === key) {
        // 대문자
        answer += value;
      } else if (word[i] === key.toLowerCase()) {
        // 소문자
        answer += value.toLowerCase();
      }
    }
    if (word[i] === " ") {
      answer += " "
    }
    i++;
  } while (i < word.length)

  return answer;
}
module.exports = problem4;
