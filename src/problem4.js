const problem4 = (word) => {
  let answer;
  return answer;
};

const reverseWord = {
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

/*
| A   | B   | C   | D   | E   | F   | G   | H   | I   | J   | K   | L   | M   |
 N   | O   | P   | Q   | R   | S   | T   | U   | V   | W   | X   | Y   | Z   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Z   | Y   | X   | W   | V   | U   | T   | S   | R   | Q   | P   | O   | N   |
 M   | L   | K   | J   | I   | H   | G   | F   | E   | D   | C   | B   | A   |
=> dictionary로 해결하면 될 것 같다는 생각.
*/

module.exports = problem4;
