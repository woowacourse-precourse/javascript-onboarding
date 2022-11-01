// number를 array로 바꿔주는 함수
function numberToArray(number) {
  let numArray = [];
  let i = 0;

  for (; i <= number; i++) {
    numArray.push(String(i).split(""));
  }

  return numArray;
}

// 중복 array의 원소 중 3,6,9가 있으면 count를 1씩 높여 count를 반환하는 함수
function countClap(numArray) {
  let count = 0;

  numArray.forEach((numArray) =>
    numArray.forEach((num) => {
      if (num === "3" || num === "6" || num === "9") {
        count = count + 1;
      }
    })
  );

  return count;
}

// count를 받아 리턴하는 함수
function problem3(number) {
  const numArray = numberToArray(number);
  const answer = countClap(numArray);

  return answer;
}
module.exports = problem3;
