//기능 목록 작성
//1. number가 입력되면 숫자를 전부 자릿수마다 쪼개서 배열로 저장한다.
//2. 배열을 돌면서 3, 6, 9가 있을 때마다 result값을 증가시킨다.
//3. result를 반환한다.

function problem3(number) {
    var answer;
    var count;
    var tmpNumber = number;
    var tmpArray = new Array[tmpNumber.length];

    if (tmpNumber > 10000) {
        answer = "10000 이하의 값을 입력하시오.";
    }
    else if (tmpNumber <= 10000) {
        for (let i = 0; i < tmpNumber; i++) {
            tmpArray[i] = i + 1;
        }
    }
  return answer;
}

module.exports = problem3;
