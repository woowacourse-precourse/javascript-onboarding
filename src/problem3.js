// 숫자를 각 자리 숫자로 분리하는 기능
function splitNumbers(numbers) {
  const splitedNumbers = numbers.map((number) =>
    number
      .toString()
      .split("")
      .map((number) => +number)
  );
  return splitedNumbers;
}

// solution
function solution(number) {
  const sequences = Array.from({ length: number }, (_, i) => i);
  console.log(splitNumbers(sequences));
}

function problem3(number) {
  var answer;
  return answer;
}

solution(15);

module.exports = problem3;
