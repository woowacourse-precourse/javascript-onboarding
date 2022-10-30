/* 기능목록
* 1. word를 아스키 코드 배열로 변환
* 2. 대문자, 소문자, 공백 구분 후 청개구리 사전에 맞게 변환
* 3. 결과 출력
* 4. 코드 정리
*/

function problem4(word) {
  var result = "";
  var wordArr = word.toString().split("").map(x=> x.charCodeAt([0]));

  for (const ascii of wordArr){
    if (ascii == 32){
      result += " ";
    }else if(ascii <= 90){
      result += String.fromCharCode([155-ascii]);
    }else{
      result += String.fromCharCode([219-ascii]);
    }
  }
  return result;
}

module.exports = problem4;
