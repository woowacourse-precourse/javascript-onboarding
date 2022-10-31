function count369(num) {
  return [...num.toString()] //
    .filter((n) => n === '3' || n === '6' || n === '9').length;
}

function countClap(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) count += count369(i);
  return count;
}

function problem3(number) {
  const answer = countClap(number);
  return answer;
}
module.exports = problem3;
