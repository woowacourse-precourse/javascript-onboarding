function problem4(word) {
  if (word.length < 1 || word.length > 1000) {
    return "입력된 문자는 1 이상 1,000 이하의 문자열이여야 합니다.";
  }
  var answer;
  word_object = {
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
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
    " ": " ",
  };

  const reversedWords = word
    .split("")
    .map((word) => (word_object[word] ? word_object[word] : word));
  answer = reversedWords.join("");
  return answer;
}

module.exports = problem4;
