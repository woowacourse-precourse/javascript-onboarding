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

// 분리한 숫자들 중에서 3, 6, 9가 얼마나 포함되어 있는지 구하는 기능 
function findNumber(source, number) {
  const result = source
    .flat()
    .reduce((acc, cur) => (cur === number ? ++acc : acc), 0);
  return result;
}

// solution
function solution(number) {
  const sequences = Array.from({ length: number }, (_, i) => i + 1);
  const splitedNumbers = splitNumbers(sequences);
  const numbers = [
    findNumber(splitedNumbers, 3),
    findNumber(splitedNumbers, 6),
    findNumber(splitedNumbers, 9),
  ];
  console.log(numbers);
}

function problem3(number) {
  var answer;
  return answer;
}

solution(33);

module.exports = problem3;
