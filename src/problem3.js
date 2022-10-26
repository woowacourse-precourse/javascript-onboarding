function getCount(str) {
  const arr = str.split('').map(Number);
  const cnt = arr.filter((num) => num === 3 || num === 6 || num === 9).length;
  return cnt;
}

function problem3(number) {
  let answer = 0;

  for (let target = 1; target <= number; target++) {
    answer += getCount(String(target));
  }

  return answer;
}

console.log(problem3(33));

module.exports = problem3;
