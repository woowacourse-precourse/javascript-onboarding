function problem1(pobi, crong) {
  if (isUnconnectPages(pobi) || isUnconnectPages(crong)) {
    return -1;
  }

  const pobiMaxNumber = getMaxNumber(pobi);
  const crongMaxNumber = getMaxNumber(crong);

  if (pobiMaxNumber > crongMaxNumber) {
    return 1;
  } else if (pobiMaxNumber < crongMaxNumber) {
    return 2;
  } else {
    return 0;
  }
}

function isUnconnectPages(pages) {
  return pages[0] + 1 !== pages[1];
}

function getMaxNumber(pages) {
  let maxNumber = 0;

  pages.forEach((page) => {
    const eachNumbers = separateNumber(page);

    const sumOfNumbers = eachNumbers.reduce((prev, current) => prev + current);
    const mulOfNumbers = eachNumbers.reduce((prev, current) => prev * current);

    const biggerNumber = getBiggerNumber(sumOfNumbers, mulOfNumbers);

    maxNumber = getBiggerNumber(biggerNumber, maxNumber);
  });

  return maxNumber;
}

function separateNumber(number) {
  const strNumber = String(number);
  const eachNumbers = [...strNumber].map((value) => Number(value));

  return eachNumbers;
}

function getBiggerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

module.exports = problem1;
