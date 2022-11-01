//제한 길이 검사
function isLength(length) {
  if(length>=1 && length<=1000) return true;
  else return false;
}
//알파벳 소문자 검사
function isLowerCase(str) {
  let lowerStr = new Array();
  for(let i=0; i<str.length; i++) {
    lowerStr[i] = str[i].toLowerCase();
  }
  if(str.toString() == lowerStr.toString()) return true;
  else return false;
}

function problem2(cryptogram) {
  var answer;

  //한 글자씩 분리
  let characters = cryptogram.split("");

  //제한 길이 검사
  if(isLength(characters.length)) {

    //소문자 검사
    if(isLowerCase(characters)) {

      let repeatedChar = true;
      while(repeatedChar) {
        let cnt = 0;
    
        //반복되는 문자 없애기
        length = characters.length;
        for(let i=0; i<length; i++) {
          if(characters[i] == characters[i+1]) {
              characters.splice(i,2);
              cnt += 1;
              break;
          }
        }
    
        if (cnt == 0) {
          repeatedChar = false;
        }
        else {
          repeatedChar = true;
        }
      }
    
      //문자열로 합치기
      answer = characters.join('');
      return answer;

    }
    else {
      console.log("문자열의 알파벳은 모두 소문자여야 합니다.");
      return;
    }
  }
  else {
    console.log("문자열은 길이가 1이상 1000이하여야 합니다.");
    return;
  }

}

module.exports = problem2;
