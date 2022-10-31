function problem3(number) {
  var answer;
  answer = countClap(number);
  return answer;
}

function countClap(number) {
  let clap = 0;
  while (number > 2) {
    let threeSixNine = number;
    while (threeSixNine > 0) {
      if (
        threeSixNine % 10 === 3 ||
        threeSixNine % 10 === 6 ||
        threeSixNine % 10 === 9
      ) {
        clap++;
      }
      threeSixNine = parseInt(threeSixNine / 10, 10);
    }
    number--;
  }
  return clap;
}

module.exports = problem3;
