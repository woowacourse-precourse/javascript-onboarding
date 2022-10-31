function problem4(word) {
  var answer;
  convertedWord = "";
  for (const item of word) {
    const ascii = item.charCodeAt();
    let convert = 0;
    if (ascii > 96) {
      convert = ascii + (109 - ascii) * 2 + 1;
    } else if (ascii > 64) {
      convert = ascii + (77 - ascii) * 2 + 1;
    } else {
      convert = ascii;
    }
    convertedWord += String.fromCharCode(convert);
  }
  answer = convertedWord;
  return answer;
}
problem4("I love you");

module.exports = problem4;
