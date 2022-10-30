/*
  기능 목록
  1. 연속하는 중복 문자를 삭제하는 과정을 중복문자가 없을때까지 반복하는 함수 구현
  2. 결과값 리턴
*/

function removeDuplicate(cryptogram) {
  let find_duplicate = true;  // 연속하는 중복 문자 존재 여부
  while(find_duplicate) { // 연속하는 중복 문자가 존재하는 동안 루프
    find_duplicate = false; // 존재하지 않는 상태(false)로 가정하고 시작.
    let target_str = '';
    for(let i =0; i<cryptogram.length; i++) {
      if(cryptogram[i] === cryptogram[i+1]) {
        find_duplicate = true;  // 연속된 중복 문자가 존재하므로 (true) 로 변경
        let target = cryptogram[i+1];
        let compare_idx = i+1;
        let duplicate_count = 0; // 중복된 문자 개수.
        while(cryptogram[i] === target ) {
          ++duplicate_count;
          target = cryptogram[++compare_idx];
        }
        i+= duplicate_count; // 중복된 문자 개수만큼 건너뜀.
      }else {
        target_str+=cryptogram[i];  // 중복되지 않는 문자는 저장.
      }
    }
    cryptogram = target_str;
  }
  return cryptogram;
}

function problem2(cryptogram) {
  let answer = removeDuplicate(cryptogram);
  return answer;
}

module.exports = problem2;
