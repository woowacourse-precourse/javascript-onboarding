// 기능 요구 사항

// - [x] 청개구리 사전 lower case
// - [x] 청개구리 사전 upper case
// - [x] word와 청개구리 사전 비교해서 공백이 아니면 answer변수에 word[index]를 할당해준다.
// - [x] word와 청개구리 사전 비교해서 공백이라면 공백을 할당해준다.
// - [x] 정답을 return 해준다.

function problem4(word) {
  let answer = "";

  let dict = new Map();

  const setUpperDict = () => {
    dict.set("A", "Z");
    dict.set("B", "Y");
    dict.set("C", "X");
    dict.set("D", "W");
    dict.set("E", "V");
    dict.set("F", "U");
    dict.set("G", "T");
    dict.set("H", "S");
    dict.set("I", "R");
    dict.set("J", "Q");
    dict.set("K", "P");
    dict.set("L", "O");
    dict.set("M", "N");
    dict.set("N", "M");
    dict.set("O", "L");
    dict.set("P", "K");
    dict.set("Q", "J");
    dict.set("R", "I");
    dict.set("S", "H");
    dict.set("T", "G");
    dict.set("U", "F");
    dict.set("V", "E");
    dict.set("W", "D");
    dict.set("X", "C");
    dict.set("Y", "B");
    dict.set("Z", "A");
  };
  const setLowerDict = () => {
    dict.set("a", "z");
    dict.set("b", "y");
    dict.set("c", "x");
    dict.set("d", "w");
    dict.set("e", "v");
    dict.set("f", "u");
    dict.set("g", "t");
    dict.set("h", "s");
    dict.set("i", "r");
    dict.set("j", "q");
    dict.set("k", "p");
    dict.set("l", "o");
    dict.set("m", "n");
    dict.set("n", "m");
    dict.set("o", "l");
    dict.set("p", "k");
    dict.set("q", "j");
    dict.set("r", "i");
    dict.set("s", "h");
    dict.set("t", "g");
    dict.set("u", "f");
    dict.set("v", "e");
    dict.set("w", "d");
    dict.set("x", "c");
    dict.set("y", "b");
    dict.set("z", "a");
  };

  setUpperDict();
  setLowerDict();
  for (let index = 0; index < word.length; index++) {
    if (word[index] != " ") {
      answer += dict.get(word[index]);
      continue;
    }
    answer += " ";
  }

  return answer;
}

module.exports = problem4;
