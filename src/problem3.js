function problem3(number) {
  let clapCount = 0;
  if (number < 0 || 10000 < number) {
    console.log("잘못된 입력입니다");
  }
  for (let i = 1; i <= number; i++) {
    clapCount += getClapCount(i);
  }

  return clapCount;
}

function getClapCount(number) {
  let count = 0;
  number
    .toString()
    .split("")
    .map((num) => {
      if (["3", "6", "9"].includes(num)) count += 1;
    });

  return count;
}

console.log(problem3(1));
module.exports = problem3;
