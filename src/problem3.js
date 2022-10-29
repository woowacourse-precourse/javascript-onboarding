const isDiviedThree = (num) => {
  if (num != 0 && num % 3 == 0) return true;
};

const countClap = (num) => {
  let clap = 0;

  for (let i = 1; i < num + 1; i++) {
    let currentNum = i;

    while (currentNum > 0) {
      let digitNum = currentNum % 10;
      if (isDiviedThree(digitNum) == true) clap++;
      currentNum = parseInt(currentNum / 10);
    }
  }
  return clap;
};

function problem3(number) {
  var answer;
  answer = countClap(number);
  return answer;
}

module.exports = problem3;
