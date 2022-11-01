function problem4(word) {
  var answer;

  answer = ""
  for(let i=0; i<word.length; i++){
    answer = answer.concat(EachFrog(word[i]));
  }

  return answer;
}

//문자 하나를 입력값으로, 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환
function EachFrog(alphabet){
  let code = alphabet.charCodeAt(0);
  const Acode = 'A'.charCodeAt(0);
  const Zcode = 'Z'.charCodeAt(0);
  const acode = 'a'.charCodeAt(0);
  const zcode = 'z'.charCodeAt(0);
  //대문자일 경우 대문자로 변환
  if (Acode <= code && code <= Zcode){
    code = Zcode - (code - Acode);
  }
  //소문자일 경우 소문자로 변환
  else if(acode <= code && code <= zcode){
    code = zcode - (code - acode);
  }

  return String.fromCharCode(code);
}


module.exports = problem4;
