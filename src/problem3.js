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

// 분리한 숫자들 중에서 3, 6, 9가 포함되어 있는 숫자의 개수를 찾는 기능
function findNumber(source, number) {
  const result = source.reduce(
    (acc, cur) => (cur.includes(number) ? ++acc : acc),
    0
  );
  return result;
}
// solution
function solution(number) {
  const sequences = Array.from({ length: number }, (_, i) => i);
  const splitedNumbers = splitNumbers(sequences);
}

function problem3(number) {
  var answer;
  return answer;
}

solution(15);

module.exports = problem3;
