/*
--기능 목록--
1. 숫자의 각 자리수들 중 3,6,9의 총 개수를 리턴한다.
    - 3,6,9가 없을 시 0을 리턴

2. 1부터 number까지 숫자를 하나씩 대면서, 각 숫자의 3,6,9 개수의 총합을 구한다.

*/

function problem3(number) {}

const count369InNumber = (number) => {
  let countOf369 = 0;
  const eachDigits = number.toString().split("");

  eachDigits.forEach((digit) => {
    if (digit === "3" || digit === "6" || digit === "9") countOf369++;
  });

  return countOf369;
};

module.exports = problem3;
