function problem3(number) {
  var answer = countClapTotal(number);
  return answer;
}

function countClapTotal(maxNumber) {
  let clap = 0;
  for (let nowNumber = 1; nowNumber <= maxNumber; nowNumber++) {
    clap += countNowNumClap(nowNumber);
  }
  return clap;
}

function countNowNumClap(number) {
  const nums = [...number.toString()];
  return nums.filter((num) => parseInt(num) !== 0 && parseInt(num) % 3 === 0)
    .length;
}

module.exports = problem3;
