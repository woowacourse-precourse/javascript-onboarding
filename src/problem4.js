function problem4(word) {
  var answer;
  return answer;
  //2. 아스키코드 78~90일 때, 90과 차이를 i라고 할 때, 25-(i*2)만큼 더해 리턴.
  //3. 위 두 조건을 만족하는 함수 작성.
  //4. 문자열을 매핑하며 함수 결과에 따라 문자열 변환.
}

function frog(alph){
  const alph = alph.charCodeAt(0);
  if(alph>=65 && alph<=77){
    return String.fromCharCode(65+(25-(alph-65)*2));
  }
}

module.exports = problem4;
