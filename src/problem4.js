function problem4(word) {
  let a = word.split("");
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "A") {
      answer += "Z";
    } else if (a[i] === "B") {
      answer += "Y";
    } else if (a[i] === "C") {
      answer += "X";
    } else if (a[i] === "D") {
      answer += "W";
    } else if (a[i] === "E") {
      answer += "V";
    } else if (a[i] === "F") {
      answer += "U";
    } else if (a[i] === "G") {
      answer += "T";
    } else if (a[i] === "H") {
      answer += "S";
    } else if (a[i] === "I") {
      answer += "R";
    } else if (a[i] === "J") {
      answer += "Q";
    } else if (a[i] === "K") {
      answer += "P";
    } else if (a[i] === "L") {
      answer += "O";
    } else if (a[i] === "M") {
      answer += "N";
    } else if (a[i] === "N") {
      answer += "M";
    } else if (a[i] === "O") {
      answer += "L";
    } else if (a[i] === "P") {
      answer += "K";
    } else if (a[i] === "Q") {
      answer += "J";
    } else if (a[i] === "R") {
      answer += "I";
    } else if (a[i] === "S") {
      answer += "H";
    } else if (a[i] === "T") {
      answer += "G";
    } else if (a[i] === "U") {
      answer += "F";
    } else if (a[i] === "V") {
      answer += "E";
    } else if (a[i] === "W") {
      answer += "D";
    } else if (a[i] === "X") {
      answer += "C";
    } else if (a[i] === "Y") {
      answer += "B";
    } else if (a[i] === "Z") {
      answer += "A";
    } else if (a[i] === " ") {
      answer += " ";
    } else if (a[i] === "a") {
      answer += "z";
    } else if (a[i] === "b") {
      answer += "y";
    } else if (a[i] === "c") {
      answer += "x";
    } else if (a[i] === "d") {
      answer += "w";
    } else if (a[i] === "e") {
      answer += "v";
    } else if (a[i] === "f") {
      answer += "u";
    } else if (a[i] === "g") {
      answer += "t";
    } else if (a[i] === "h") {
      answer += "s";
    } else if (a[i] === "i") {
      answer += "r";
    } else if (a[i] === "j") {
      answer += "q";
    } else if (a[i] === "k") {
      answer += "p";
    } else if (a[i] === "l") {
      answer += "o";
    } else if (a[i] === "m") {
      answer += "n";
    } else if (a[i] === "n") {
      answer += "m";
    } else if (a[i] === "o") {
      answer += "l";
    } else if (a[i] === "p") {
      answer += "k";
    } else if (a[i] === "q") {
      answer += "j";
    } else if (a[i] === "r") {
      answer += "i";
    } else if (a[i] === "s") {
      answer += "h";
    } else if (a[i] === "t") {
      answer += "g";
    } else if (a[i] === "u") {
      answer += "f";
    } else if (a[i] === "v") {
      answer += "e";
    } else if (a[i] === "w") {
      answer += "d";
    } else if (a[i] === "x") {
      answer += "c";
    } else if (a[i] === "y") {
      answer += "b";
    } else if (a[i] === "z") {
      answer += "a";
    }
  }
}
module.exports = problem4;
