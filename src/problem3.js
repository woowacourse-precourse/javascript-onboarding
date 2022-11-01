// 기능 목록
// 1. 각 숫자에대하여 3,6,9의 개수를 반환하는 함수
// 2. 1부터 number까지 3,6,9의 개수를 누적하여 더함

// 숫자를 입력받아 박수 횟수 반환 함수
function getClapNumber(number) {
  const arr_369 = ["3", "6", "9"];
  const str_number = number.toString();
  const arr_number = str_number.split("");
  let count = 0;
  arr_number.forEach((ele) => {
    if (arr_369.includes(ele)) {
      count++;
    }
  });
  return count;
}

function problem3(number) {
  var answer;

  // 1 ~ number의 숫자 배열
  let range = [...Array(number)].map((v, idx) => idx + 1);

  // 숫자 배열에 대해서 누적 박수 횟수 구하기
  answer = range.reduce((acc, num) => acc + getClapNumber(num), 0);

  return answer;
}

module.exports = problem3;
