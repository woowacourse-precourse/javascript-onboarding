/*
  기능구현 목록
  1. 문자의 연속성을 체크하기 위해 먼저 0,1 인덱스를 체크후 시작 인덱스를 cntbox에 push 후 check 를 true 변경 후 또 연속한지 체크하기 위해 i++를 진행
  2. 만약 더 이상 연속하지 않는다면 맨 처음 중복이 시작된 인덱스 숫자와 cntbox 의 길이 + 1(splice의 2번째 인자 수만큼 삭제하기 때문에 +1을 해줌)로 인자를 줌
     이후 i, cntbox를 초기화 후 check를 false로 변경후 다시 반복하도록 구현
  3. 만약 arr의 길이만큼 반복하고 check가 false 인 경우 반복하는 문자가 없으므로 i++ 하여 다시 반복문 진행
  4. arr 의 길이와 i가 같은 경우 모든 탐색을 마쳤으므로 break를 통해 탐색 종료
  5. arr 에 담겨진 문자들을 join을 통하여 하나의 문자로 통합한다.
*/
function problem2(cryptogram) {
  const arr = [...cryptogram];
  let i = 0;
  let cntbox = [];
  let check = false;
  //순차적으로 탐색후 중복 발견하면 계속 탐색하고 끝나면 탐색한 부분까지 제거후 다시 원점으로 복귀를 반복
  while (1) {
    if ((arr[i] === arr[i + 1]) && ((arr.length) !== i)) {
      cntbox.push(i);
      check = true;
      i++;
      continue;
    }
    else if ((arr[i] !== arr[i + 1]) && ((arr.length) !== i) && !check) {
      i++;
      continue;
    }
    else if ((arr[i] !== arr[i + 1]) && ((arr.length) !== i) && check) {
      arr.splice(cntbox[0], cntbox.length + 1);
      i = 0;
      cntbox = []
      check = false;
      continue;
    }

    if (arr.length === i)
      break;
  }
  return arr.join('');
}

module.exports = problem2;