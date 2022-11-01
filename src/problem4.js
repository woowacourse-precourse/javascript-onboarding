function dirFun(word) {
  let answer = "";
  /*
  for (let i of word1) {
    if (i === i.toUpperCase()) {
      word += i.toLowerCase();
    } else word += i.toUpperCase();
  }*/

  for (let i = 0; i < word.length; i++) {
    let nowChar = word.charAt(i);
    if (nowChar == " ") {
      answer += " ";
      continue;
    }
    if (nowChar == "A" || nowChar == "a") {
      let a = word.charCodeAt(i) + 25;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "B" || nowChar == "b") {
      let a = word.charCodeAt(i) + 23;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "C" || nowChar == "c") {
      let a = word.charCodeAt(i) + 21;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "D" || nowChar == "d") {
      let a = word.charCodeAt(i) + 19;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "E" || nowChar == "e") {
      let a = word.charCodeAt(i) + 17;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "F" || nowChar == "f") {
      let a = word.charCodeAt(i) + 15;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "G" || nowChar == "g") {
      let a = word.charCodeAt(i) + 13;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "H" || nowChar == "h") {
      let a = word.charCodeAt(i) + 11;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "I" || nowChar == "i") {
      let a = word.charCodeAt(i) + 9;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "J" || nowChar == "j") {
      let a = word.charCodeAt(i) + 7;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "K" || nowChar == "k") {
      let a = word.charCodeAt(i) + 5;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "L" || nowChar == "l") {
      let a = word.charCodeAt(i) + 3;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "M" || nowChar == "m") {
      let a = word.charCodeAt(i) + 1;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "N" || nowChar == "n") {
      let a = word.charCodeAt(i) - 1;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "O" || nowChar == "o") {
      let a = word.charCodeAt(i) - 3;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "P" || nowChar == "p") {
      let a = word.charCodeAt(i) - 5;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "Q" || nowChar == "q") {
      let a = word.charCodeAt(i) - 7;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "R" || nowChar == "r") {
      let a = word.charCodeAt(i) - 9;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "S" || nowChar == "s") {
      let a = word.charCodeAt(i) - 11;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "T" || nowChar == "t") {
      let a = word.charCodeAt(i) - 13;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "U" || nowChar == "u") {
      let a = word.charCodeAt(i) - 15;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "V" || nowChar == "v") {
      let a = word.charCodeAt(i) - 17;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "W" || nowChar == "w") {
      let a = word.charCodeAt(i) - 19;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "X" || nowChar == "x") {
      let a = word.charCodeAt(i) - 21;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "Y" || nowChar == "y") {
      let a = word.charCodeAt(i) - 23;
      answer += String.fromCharCode(a);
      continue;
    }
    if (nowChar == "Z" || nowChar == "z") {
      let a = word.charCodeAt(i) - 25;
      answer += String.fromCharCode(a);
      continue;
    }
  }
  return answer;
}

function problem4(word) {
  var answer;
  answer = dirFun(word);
  return answer;
}
/*
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| Z | Y | X | W | V | U | T | S | R | Q | P | O | N | M | L | K | J | I | H | G | F | E | D | C | B | A |
*/
module.exports = problem4;
