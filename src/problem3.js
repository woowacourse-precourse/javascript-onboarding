function problem3(number) {
  var answer = countClap(number);
  return answer;
}

function countClap(maxNumber) {
  let clap = 0;
  for (let nowNumber = 1; nowNumber <= maxNumber; nowNumber++) {
    const nums = [...nowNumber.toString()];
    clap += nums.filter(
      (num) => parseInt(num) !== 0 && parseInt(num) % 3 === 0
    ).length;
  }
  return clap;
}

module.exports = problem3;
