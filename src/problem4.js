function problem4(word) {
  var answer;
  const arr = word.trim().split("");
  let covertedArr = "";
  const dic = {
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
    " ": " ",
  };
  for (let i = 0; i < arr.length; i++) {
    arr[i] == arr[i].toUpperCase()
      ? (covertedArr += dic[arr[i]])
      : (covertedArr += dic[arr[i].toUpperCase()].toLowerCase());
  }

  console.log(covertedArr);
  answer = covertedArr;
  return answer;
}
module.exports = problem4;
