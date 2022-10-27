function problem3(number) {
  const answer = getTotalClap(number);
  return answer;
}

function getTotalClap(number) {
  let clapTotal = 0;
  for (let num = 1; num <= number; num++) {
    clapTotal += getCountClap(String(num));
  }
  return clapTotal;
}

function getCountClap(num) {
  const clapNumber = new Set(['3', '6', '9']);
  let countClap = 0;
  for (let i = 0; i < num.length; i++) {
    if (clapNumber.has(num[i])) {
      countClap++;
    }
  }
  return countClap;
}

module.exports = problem3;
