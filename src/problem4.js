function problem4(word) {
  var answer;
  let rev_word=[];
  let str=[];
  for(let i=0;i<word.length;i++){
    if(65<=word.charCodeAt(i)&&word.charCodeAt(i)<=90){//대문자 일때
      str[i]=String.fromCharCode(155-word.charCodeAt(i));//대문자의 리버스 숫자
      rev_word[i]=str[i];
    }
    else if(97<=word.charCodeAt(i)&&word.charCodeAt(i)<=122){//소문자 일때
      str[i]=String.fromCharCode(219-word.charCodeAt(i));//소문자의 리버스 숫자
      rev_word[i]=str[i];
    }
    else{//공백일때
      str[i]=" ";//공백일때 공백 저장
      rev_word[i]=str[i];
    }
  }
  answer=rev_word.join("");
  return answer;
}

module.exports = problem4;
