// 기능 목록
// 1. 각 숫자에대하여 3,6,9의 개수를 반환하는 함수
// 2. 1부터 number까지 3,6,9의 개수를 누적하여 더함

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
  return answer;
}

module.exports = problem3;
