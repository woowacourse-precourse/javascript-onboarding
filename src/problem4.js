function problem4(word) {
  let answer="";
  let wordArr = word.toUpperCase(); //전체 글자가 동일한 구조를 가지기 위해 대문자로 치환
  
  for(let i=0; i<word.length;i++){
    let wordAscii = wordArr.charCodeAt(i);
    if(wordAscii === 32){ //32는 아스키 코드로 공백이므로 공백일 경우 " "
      answer += " ";
    }else{ //공백이 아닐 경우 
      let newWord = String.fromCharCode(155 - wordAscii);//반대의 글자 아스키코드를 합하면 155라서 155에서 빼줌
      if( word.charCodeAt(i)>=65 && word.charCodeAt(i)<=90 ){//입력된 값이 대문자라면
        answer += newWord //대문자 그대로 합쳐줌
      }else{
        answer += newWord.toLowerCase(); //대문자가 아니라면 소문자로 치환해서 합쳐줌
      }
    }
  }

  return answer;
}

module.exports = problem4;
