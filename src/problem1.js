function problem1(pobi, crong) {
  const pobiCheck = checkData(pobi);
  const crongCheck = checkData(crong);

  //   console.log(pobiCheck);
  //   console.log(crongCheck);
  if (pobiCheck && crongCheck) {
    const pobiBigNumber = solution(pobi);
    const crongBigNumber = solution(crong);

    if (pobiBigNumber > crongBigNumber) {
      return 1;
    } else if (pobiBigNumber === crongBigNumber) {
      return 0;
    } else {
      return 2;
    }
  } else {
    return -1;
  }
}

function solution(data) {
  let bigNumber = 0;
  for (d of data) {
    let sum = 0;
    let multi = 1;
    do {
      sum += d % 10;
      multi *= d % 10;
      d = Math.floor(d / 10);
    } while (d > 0);

    if (sum > multi) {
      if (sum > bigNumber) {
        bigNumber = sum;
      }
    } else {
      if (multi > bigNumber) {
        bigNumber = multi;
      }
    }
  }
  return bigNumber;
}

function checkData(data) {
  let returnValue = false;
  if (data[1] - 1 === data[0]) {
    if (data[0] % 2 == 1) {
      if (data[0] > 1 && data[0] < 399) {
        returnValue = true;
      }
    }
  }
  return returnValue;
}

module.exports = problem1;
