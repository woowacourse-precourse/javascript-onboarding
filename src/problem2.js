// 중복 문자 제거 함수
function decryption(cryptogram) {
  // 스택, 이전 값 저장할 변수 생성
  let result = [], 
      prev = '';

  // 문자 하나씩 탐색
  for (let chr of cryptogram) {
    // 첫 번째 값 추가
    if (result.length === 0) result.push(chr); 
    // 이전 값과 같으면 스택에서 맨 위의 값 제거(연속되는 값 제거) 후 이전 값 변수에 저장
    else if (chr === result.at(-1)) prev = result.pop();
    // 이전에 제거된 값과 같으면 다음 반복문으로 넘어가기(두 개 이상 연속되는 값 제거)
    else if (chr === prev) continue;
    // 위에 모두 해당되지 않으면(연속되지 않으면) 스택에 추가
    else result.push(chr);
  }
  return result.join('');
}

function problem2(cryptogram) {
  // 암호화된 문자 해독(중복 문자 제거)
  return decryption(cryptogram);
}

module.exports = problem2;
