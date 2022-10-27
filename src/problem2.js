/* 기능 목록
* 1. 문자열 cryptogram을 문자 배열로 변환
* 2. 요소를 순서대로 비교 후 연속된 중복문자 삭제
* 3. 불가능할 때까지 기능2 반복
* 4. 남은 문자 배열을 문자열로 변환, 결과 출력
* 5. 코드 정리
*/

function problem2(cryptogram) {
  var crypArr = cryptogram.split("");
  var decryption = crypArr;
  
  let i = 0;
  while(1){
    if(i==decryption.length){
      break;
    }
    if(decryption[i] == decryption[i+1]){
      let j = 2;
      while(1){
        if(decryption[i] != decryption[i+j]){
          break;
        }j++;
      }
      decryption.splice(i,j);
      i = 0;
    }else{
      i++;
      continue;
    }
  }
  console.log(decryption);
}

module.exports = problem2;
  

