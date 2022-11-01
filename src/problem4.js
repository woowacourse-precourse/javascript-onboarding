function problem4(word) {
  let answer = '';

  const upperReg = /[A-Z]/; // ascii 65 ~ 90
  const lowerReg = /[a-z]/; // ascii 97 ~ 122

  word = word.split('');
  word.forEach( w =>{
    if(upperReg.test(w)){ // 대문자인지 체크
      if(w.charCodeAt() <= 77){
        answer = answer.concat(String.fromCodePoint(w.charCodeAt()  + (25 - ( w.charCodeAt()  - 65 ) * 2)));
      }
      else{
        answer = answer.concat(String.fromCodePoint(w.charCodeAt()  - (25 + ( w.charCodeAt()  - 90 ) * 2)));
      }
    }
    else if(lowerReg.test(w)){ // 소문자인지 체크
      if(w.charCodeAt() <= 109){
        answer = answer.concat(String.fromCodePoint(w.charCodeAt()  + (25 - ( w.charCodeAt()  - 97 ) * 2)));
      }
      else{
        answer = answer.concat(String.fromCodePoint(w.charCodeAt()  - (25 + ( w.charCodeAt()  - 122 ) * 2)));
      }
    }
    else{ // 알파벳 아닌 경우
      answer = answer.concat(w);
    }
  })

  return answer;
}

module.exports = problem4;
