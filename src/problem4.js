function problem4(word) {
  let result = "";
  let ascii = 0;
  let reverse = 0;
  let abstemp = 0;
  
  // 대문자, 소문자 변환
  for(let i = 0; i < word.length; i++) {
      // 대문자인지 소문자인지 판단
      if(word[i] === " ") {
          result += " ";
          continue;
      }
      else if(word[i] === word[i].toUpperCase()) {
          ascii = 65;
      }
      else if(word[i] === word[i].toLowerCase()) {
          ascii = 97;
      }
      abstemp = Math.abs(ascii - word.charCodeAt(i));
      reverse = (ascii + 25) - abstemp;
      result += String.fromCharCode(reverse);
  }
  
  if (word.length < 1 || word.length > 1000) result = "예외사항";
  return result;

}

module.exports = problem4;
