function problem4(word) {
  var answer;
  const wordArr = [...word].map((char) => char.charCodeAt());
  console.log(wordArr);
  let greenFrogSaid = "";

  // 각 대소문자 아스키코드 중간값을 기준으로 일반항을 구해 품
  for (const ASCIInum of wordArr) {
    let str = 0;
    if (ASCIInum >= 65 && ASCIInum <= 77) {
      str = ASCIInum + ((77 - ASCIInum) * 2 + 1);
    } else if (ASCIInum >= 78 && ASCIInum <= 90) {
      str = ASCIInum - ((ASCIInum - 78) * 2 + 1);
    } else if (ASCIInum >= 97 && ASCIInum <= 109) {
      str = ASCIInum + ((109 - ASCIInum) * 2 + 1);
    } else if (ASCIInum >= 110 && ASCIInum <= 122) {
      str = ASCIInum - ((ASCIInum - 110) * 2 + 1);
    } else {
      str = ASCIInum;
    }
    greenFrogSaid += String.fromCharCode(str);
  }

  answer = greenFrogSaid;
  return answer;
}

module.exports = problem4;
