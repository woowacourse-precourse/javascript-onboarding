function problem1(pobi, crong) {
  if (checkNumber(pobi) || checkNumber(crong)) {
    return -1;
  }

  const pobiMaxScore = maxNumber(pobi[0], pobi[1]);
  const crongMaxScore = maxNumber(crong[0], crong[1]);

  if (pobiMaxScore === crongMaxScore) {
    return 0;
  } else if (pobiMaxScore > crongMaxScore) {
    return 1;
  } else if (pobiMaxScore < crongMaxScore) {
    return 2;
  }
}

/**
 *
 * @param {*} numbers
 * @returns
 */
function checkNumber(numbers) {
  if (numbers.length !== 2) {
    return true;
  }
  if (numbers[0] % 2 !== 1) {
    return true;
  }
  if (numbers[1] % 2 !== 0) {
    return true;
  }
  if (numbers[0] + 1 !== numbers[1]) {
    return true;
  }
  return false;
}

function maxNumber(oddNumber, evenNumber) {
  return Math.max(
    sumNumber(oddNumber),
    mutiNumber(oddNumber),
    sumNumber(evenNumber),
    mutiNumber(evenNumber)
  );
}

function sumNumber(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, current) => parseInt(sum) + parseInt(current), 0);
}

function mutiNumber(number) {
  return number
    .toString()
    .split("")
    .reduce((muti, current) => parseInt(muti) * parseInt(current), 1);
}

module.exports = problem1;
