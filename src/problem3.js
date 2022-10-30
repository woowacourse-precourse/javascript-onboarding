/*
 ### 기능 목록
 
  1. number가 3,6,9 박수를 칠 수 있는지 확인하기 위해, 정규식을 작성한다.
  2. number에서 3,6,9 박수를 친다면,
    2-1. 3부터 number 까지의 박수의 개수를 센다.
    number에서 3,6,9 박수를 안친다면, 0을 반환한다.
  3. 각 자리수의 3,6,9 가 들어갔을때, 누적해서 더한다.
  */

function problem3(number) {
  var answer;
  let sum = 0;

  const regex = /[3,6,9]/g;

  if (number.toString().search(regex) != null) {
    for (let i = 3; i <= number; i++) {
      let j = i;
      while (j > 0) {
        let sdc = j % 10;
        if (sdc == 3 || sdc == 6 || sdc == 9) {
          sum++;
        }
        j = parseInt(j / 10);
      }
    }
    answer = sum;
  } else {
    answer = 0;
  }
  return answer;
}

module.exports = problem3;
