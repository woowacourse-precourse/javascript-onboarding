function problem4(word) {
  // 대문자 65-90 (155)
  // 소문자 97-122 (219)
  let splittedWord = word.split('')
  let answer = '';
  for (let i = 0; i<splittedWord.length; i++){
    let ascii = splittedWord[i].charCodeAt()
    if (ascii>=65 && ascii<=90){
      answer += String.fromCharCode(155-ascii);
    } else if (ascii>=97 && ascii<=122){
      answer += String.fromCharCode(219-ascii);
    } else {
      answer += splittedWord[i]
    }
  }
  
  return answer;
}

module.exports = problem4;
