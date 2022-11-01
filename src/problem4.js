function problem4(word) {
  const ascii = convertWordToAscii(word);
  const result = convertAsciiToWord(ascii);

  return result;
}

function convertWordToAscii(str) {
  const arrOfAscii = [];
  for (let char of str) {
    let ascii = str.charCodeAt(str.indexOf(char));
    arrOfAscii.push(ascii);
  }
  return arrOfAscii;
}

function convertAsciiToWord(arrOfNum) {
  // if (ascii < 65 || ascii > 122 || (ascii < 97 && ascii > 90)) return "";
  // if (ascii === 32) return " ";
  // if (ascii <= 90) return 90 - ascii + 65;
  // if (ascii >= 97) return 122 - ascii + 97;
}
module.exports = problem4;

//expected: "R olev blf"
console.log(problem4("I love you"));
