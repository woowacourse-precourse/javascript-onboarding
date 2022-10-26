function problem1(pobi, crong) {
  const pobiOddNumber = pobi[0];
  const pobiEvenNumber = pobi[1];
  const crongOddNumber = crong[0];
  const crongEvenNumber = crong[1];

  const pobiScore = maxNumber(pobiOddNumber, pobiEvenNumber);
  const crongScore = maxNumber(crongOddNumber, crongEvenNumber);

  if (checkNumber(pobi) || checkNumber(crong)) {
    return -1;
  }

  if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else if (pobiScore == crongScore) {
    return 0;
  }
}

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
problem1([1, 312], [1, 2312]);

module.exports = problem1;
