function countTargetNumber(targets, number) {
  const numbers = [...number.toString()];
  return numbers.filter(num => targets.includes(parseInt(num))).length;
}

function problem3(number) {
  const clapTargets = [3, 6, 9];
  let clapTotal = 0;
  
  for (let num = 1; num <= number; num++) {
    clapTotal += countTargetNumber(clapTargets, num);
  }
  return clapTotal;
}

module.exports = problem3;
