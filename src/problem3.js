function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let x = i % 10;
    let y = i / 10;
    if (((x === 3 || x === 6 || x === 9)) || ((y === 3 || y === 6 || y === 9))) {
      answer++
    }
    if (i % 10 == 0) {
      answer++
    }
  }
  return answer;
}


module.exports = problem3;
