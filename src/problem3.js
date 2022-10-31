/* 문제 분석
1. 3,6,9 게임을 진행.
2. 박수 대신 카운트를 증가시킨다. (단 3,6,9의 개수만큼 증가. ex : 33이면 2증가)
3. 주어진 number에 대한 카운트가 몇 인지 반환. */

/* 테스트 케이스 분석
tc1. 13
1, 2, cnt++, 4, 5, cnt++, 7, 8, cnt++, 10, 11, 12, cnt++
return 4

tc2. 33
1, 2, cnt++, 4, 5, cnt++, 7, 8, cnt++, 10, 11, 12, cnt++, 14, 15, cnt++, 17, 18, cnt++, 20, 21, 22, cnt++, 24, 25, cnt++, 27, 28, cnt++, cnt++, cnt++, cnt++, cnt++(x2)
return 14
 */

// main
function problem3(number) {
  var answer = 0;

  // 1부터 number까지 차례대로 반복한다.
  for (let i = 1; i <= number; i++) {
    // 각 숫자 i에서의 3,6,9 개수의 합을 저장하기 위한 변수 cnt
    let cnt = 0;

    // i를 문자열로 바꾼 뒤, 배열화하여 각 문자를 forEach로 순회한다.
    // 문자가 3 또는 6 또는 9 일때, 카운트를 증가시킨다.
    i.toString()
      .split("")
      .forEach((el) => {
        if (el === "3" || el === "6" || el === "9") cnt += 1;
      });

    // 한 숫자에서 증가된 cnt를 최종 합계인 answer에 더한다.
    answer += cnt;
  }
  return answer;
}

module.exports = problem3;
