function problem3(number) {
  let countSum;
  let eachCountArr = new Array(10).fill(0);

  for (let i = 1; i <= number; i++) {
    let splitNumArr = String(i).split("");
    for (n = 0; n < splitNumArr.length; n++) {
      eachCountArr[splitNumArr[n] - "0"]++;
    }
  }

  countSum = eachCountArr[3] + eachCountArr[6] + eachCountArr[9];
  return countSum;
}

module.exports = problem3;
