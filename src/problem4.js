function problem4(word) {
  const ascii = convertWordToAscii(word);
  const answer = convertAsciiToWord(ascii);

  return answer;
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
  let answer = "";

  arrOfNum.forEach((ascii) => {
    if (ascii === 32) answer += " ";
    if (ascii < 65 || ascii > 122 || (ascii < 97 && ascii > 90)) return;
    if (ascii <= 90) answer += String.fromCharCode(90 - ascii + 65);
    if (ascii >= 97) answer += String.fromCharCode(122 - ascii + 97);
  });

  return answer;
}
module.exports = problem4;

//expected: "R olev blf"
console.log(problem4("I love you"));
