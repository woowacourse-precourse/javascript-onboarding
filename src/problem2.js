/* 문제 분석
1. 암호문이 주어지고, 암호문을 해독하는 문제.
2. 암호문 해독방법은 각 루프마다 같은 문자가 연속으로 등장할 때 제거
3. 연속으로 등장하는 문자가 없을 때 해독 완료 결과 리턴*/

/* 테스트 케이스 분석
1) browoanoommnaon : 에서 oo, mm 제거
2) browoannaon : 에서 nn 제거
3) browoaaon : 에서 aa 제거
4) browoon : 에서 oo 제거
5) brown : 결과
 */

/* loop(cryptogram:array):void
startIdx와 nextIdx를 활용하여, startIdx부터 cnt 만큼 원본 배열에서 문자를 제거시킨다.*/
function loop(cryptogram) {
  let startIdx = 0; // 제거를 시작할 지점을 나타내는 변수
  let nextIdx = 1; // 다음 문자와의 비교를 위한 변수
  let cnt = 1; // 제거할 문자의 개수를 나타내는 변수

  while (true) {
    // startIdx가 배열의 끝에 도달하면 while문을 탈출한다.
    if (startIdx === cryptogram.length) break;

    /* startIdx의 문자와 nextIdx의 문자가 동일하다면,
    그 다음 문자와 비교를 위해 nextIdx를 1증가
    같은 문자가 있다는 의미이므로 cnt 1증가*/
    if (cryptogram[startIdx] === cryptogram[nextIdx]) {
      nextIdx += 1;
      cnt += 1;
    } else {
      /* startIdx의 문자와 nextIdx의 문자가 다르다면,
    cnt가 2 이상일 때, 즉 같은 문자가 2개 이상 등장했을 때 startIdx부터 cnt만큼 제거.
    cnt가 2 미만이면, startIdx와 nextIdx을 1씩 증가시킨다*/
      if (cnt >= 2) {
        cryptogram.splice(startIdx, cnt);
        nextIdx = startIdx + 1;
        cnt = 1;
      } else {
        startIdx += 1;
        nextIdx += 1;
      }
    }
  }
}

// main
function problem2(cryptogram) {
  cryptogram = [...cryptogram]; // string -> array
  let before_length = 0; //

  while (true) {
    // 만약, 이전 배열의 길이와 현재 배열의 길이가 같다면 while 문을 탈출
    // 해독된 암포문은 루프를 돌다가 어느 순간 배열의 길이가 일정해지기 때문.
    if (before_length === cryptogram.length) break;

    before_length = cryptogram.length; // 현재의 배열 길이를 before_length에 저장. 다음 루프에 사용됨.
    loop(cryptogram); // 루프
  }

  return cryptogram.join("");
}

module.exports = problem2;
