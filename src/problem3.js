function problem3(number) {
  let answer;
  let claps = [];

  for (i = 1; i <= number; i++) {
    let threeSixNine = i.toString().match(/[369]/g) || [];
    claps.push(threeSixNine.length);
  }

  answer = claps.reduce((prev, current) => prev + current, 0);

  return answer;
}

module.exports = problem3;
