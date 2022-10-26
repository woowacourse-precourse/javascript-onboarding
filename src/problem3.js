function countTargetNumber(targets, number) {
  const numbers = [...number.toString()];
  return numbers.filter(num => targets.includes(parseInt(num))).length;
}

function problem3(number) {
  const clapTargets = [3, 6, 9];
  for (let i = 1; i <= number; i++) {
  }
}

module.exports = problem3;
