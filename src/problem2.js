// 기능 1 : 문자별 배열 생성
function splitString(str) {
  const strArr = str.split("");
  return strArr;
}

function problem2(cryptogram) {
  var answer;
  answer = splitString(cryptogram);

  return answer;
}

module.exports = problem2;

/* 기능 목록
1. 주어진 문자열을 문자 별로 자르고 배열에 저장
2. 문자들이 담긴 배열을 반복문을 통해 연속된 중복 문자들을 제거
 [아이디어] 처음부터 제거하지 않고 반복문을 통해 배열에 중복 원소를 체크한 후 일괄적으로 제거
  -> [중복 시작 인덱스, 중복원소 개수]를 새로운 배열에 추가하여 중복 원소 체크
  -> 중복원소 배열을 확인하며 중복원소 제거
3. while문을 통해 연속하는 중복 문자가 안 나올 때까지 반복
4. 삭제한 결과를 다시 하나의 문자열로 만듦
5. 삭제 후 합친 문자열 return
*/
