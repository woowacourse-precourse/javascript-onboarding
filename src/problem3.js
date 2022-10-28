function problem3(number) {
  var answer;
  return answer;
}

function countClap(requestedNumber) {
  let clapNumber = 0;
  while (requestedNumber > 2) {
    let check369 = requestedNumber;
    while (check369 > 0) {
      if (check369 % 10 === 3 || check369 % 10 === 6 || check369 % 10 === 9) {
        clapNumber++;
      }
      check369 = parseInt(check369 / 10, 10);
    }
    requestedNumber--;
  }
  return clapNumber;
}

module.exports = problem3;
