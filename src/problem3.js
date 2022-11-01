// test sample 추가
// console.log(problem3(33));

function problem3(number) {
  let countClap = 0;

  // for문으로 1부터 number까지 반복
  for (let i = 1; i <= number; i++) {
    countClap += checkClap(i);
    //console.log(i, checkClap(i));
  }

  return countClap;
}

// 3, 6, 9 발견 함수
function checkClap(num) {
  let count = 0;

  num
    .toString()
    .split("")
    .map((n) => {
      if (["3", "6", "9"].includes(n)) count++;
    });

  return count;
}

module.exports = problem3;
