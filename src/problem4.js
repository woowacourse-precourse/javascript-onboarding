const alphaMap = {
  a: 'Z',
  b: 'Y',
  c: 'x',
  d: 'w',
  e: 'v',
  f: 'u',
  g: 't',
  h: 's',
  i: 'r',
  j: 'q',
  k: 'p',
  l: 'o',
  m: 'n',
  n: 'm',
  o: 'l',
  p: 'k',
  q: 'j',
  r: 'i',
  s: 'h',
  t: 'g',
  u: 'f',
  v: 'e',
  w: 'd',
  x: 'c',
  y: 'b',
  z: 'a',
  A: 'Z',
  B: 'Y',
  C: 'X',
  D: 'W',
  E: 'V',
  F: 'U',
  G: 'T',
  H: 'S',
  I: 'R',
  J: 'Q',
  K: 'P',
  L: 'O',
  M: 'N',
  N: 'M',
  O: 'L',
  P: 'K',
  Q: 'J',
  R: 'I',
  S: 'H',
  T: 'G',
  U: 'F',
  V: 'D',
  W: 'D',
  X: 'C',
  Y: 'B',
  Z: 'A',
  ' ': ' '
}

function problem4(word) {
  let answerWord = ''
  for (let i = 0; i < word.length; i++) {
    answerWord += alphaMap[word[i]]
  }

  var answer = answerWord;
  return answer;
}

module.exports = problem4;
