const isDividedThree = (num) => {
  if (num != 0 && num % 3 == 0) return true;
};

const countThreeSixNine = (num) => {
  let sum = 0;
  while (num > 0) {
    let digitNum = num % 10;
    if (isDividedThree(digitNum) == true) sum++;
    num = parseInt(num / 10);
  }
  return sum;
};

const countClap = (num) => {
  let clap = 0;

  for (let i = 1; i < num + 1; i++) {
    let currentNum = i;
    clap += countThreeSixNine(currentNum);
  }
  return clap;
};

function problem3(number) {
  var answer;
  answer = countClap(number);
  return answer;
}

module.exports = problem3;
