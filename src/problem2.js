// main
function problem2(cryptogram) {
  // 예외처리
  if (errorHandler(cryptogram)) {
    console.log("Error : 글자수 제한");
    return null;
  }

  var answer;
  // 암호해독
  answer = splitWord(cryptogram);

  return answer;
}

function errorHandler(cryptogram) {
  if (cryptogram.length > 1000) return true;
}

// 암호해독 함수
function splitWord(word) {
  // 암호를 쪼개서 arr에 저장
  var arr = (word + '').split('');
  // 중복문자 유무를 판단하기 위한 flag
  var flag = false;

  while (true){
    // flag 초기화
    flag = true;

    // 마지막 원소는 탐색할 필요 없기 때문에 length-1까지 탐색
    for (i=0; i<arr.length - 1; i++){
      if (arr[i] == arr[i+1]){
        // 중복문자 발견시 false로 치환
        flag = false;
        // i번째, i+1번째 원소 제거
        arr.splice(i, 2);
        // splice로 원소 제거시 index에 변화가 생기므로 i를 1만큼 감소시킨다
        i--;
      }
    }

    if (flag == true) break;
  }

  // 쪼개진 암호 재결합
  var result = arr.join('');
  return result;
}

module.exports = problem2;
