/*
  기능 목록
  1.  number까지의 수 중 3, 6, 9가 포함되는 숫자 횟수 세기
*/

function problem3(number) {
  let slapCount = 0;
  for (let i = 1; i <= number; i++) {
    const numberToArray = i.toString().split("");
    numberToArray.forEach((number) => {
      if (number === "3" || number === "6" || number === "9") slapCount += 1;
    });
  }
  return slapCount;
}

module.exports = problem3;
