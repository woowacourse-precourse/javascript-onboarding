
//string의 메쏘드 charCodeAt() -> char -> ascii // fromCharCode()
function problem4(word) {
  answer = '';
  for(i=0;i<word.length;i++){
    c = word[i].charCodeAt()
    if('A'.charCodeAt()<=c && c <= 'Z'.charCodeAt()){//대문자일때
      c = c - 'A'.charCodeAt(); // 'A'와 word[i]값과의 아스키상 차이값
      answer += String.fromCharCode('Z'.charCodeAt() - c);
    }else if('a'.charCodeAt()<=c && c <= 'z'.charCodeAt()){//소문자일때
      c = c - 'a'.charCodeAt(); // 'A'와 word[i]값과의 아스키상 차이값
      answer += String.fromCharCode('z'.charCodeAt() - c);
    }else{
      answer += word[i];
    }
  }
  
  return answer;
}

module.exports = problem4;
