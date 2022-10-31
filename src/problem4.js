
//대문자 변환
function alphabetUpper(str){
  let num = 0;
  let ans;
  let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for(let i=0; i<26; i++){
    if(str == upper[i]){
      num = i;
      upper = upper.reverse()
      ans = upper[i];
      break;
    }
  }
  return ans;
}
//소문자 변환
function alphabetLower(str){
  let num = 0;
  let ans;
  let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for(let i=0; i<26; i++){
    if(str == lower[i]){
      num = i;
      lower = lower.reverse()
      ans = lower[i];
      break;
    }
  }
  return ans;
}
function problem4(word) {
  //var answer;
  let alphabet = [...word];
  const check = /^[a-z|A-Z]+$/; //정규식, 알파벳인지 확인

  for(let i = 0; i < alphabet.length; i++){
    //예외사항 체크(알파벳인지 확인)
    if(check.test(alphabet[i]) == true){ //알파벳이면 알파벳 변형 진행.
      if(alphabet[i].charCodeAt(0) > 90){ //아스키코드 90까지 대문자, 97부터 소문자
        alphabet[i] = alphabetLower(alphabet[i]);
      }
      else{
        alphabet[i] = alphabetUpper(alphabet[i]);
      }
    }
    else{ //알파벳이 아니라면 변경 없이 다음으로 넘어감.
      continue;
    }
  }
  alphabet = alphabet.join(""); //배열->문자열
  return alphabet;
  //return answer;
}

module.exports = problem4;
