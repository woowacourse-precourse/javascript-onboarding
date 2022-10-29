function isPagesValid(pages) {
  const [left, right] = pages;
  if (1 <= left && left < 400 && left % 2 === 1 && left + 1 === right) {
    return true;
  }
  return false;
}

function sumDigits(page) {
  return [...page.toString()].reduce((acc, cur) => acc + Number(cur), 0);
}

function multiplyDigits(page) {
  return [...page.toString()].reduce((acc, cur) => acc * Number(cur), 1);
}

function getMaxValue(pages) {
  const [left, right] = pages;
  return Math.max(
    sumDigits(left),
    multiplyDigits(left),
    sumDigits(right),
    multiplyDigits(right)
  );
}

function problem1(pobi, crong) {
  if (!isPagesValid(pobi) || !isPagesValid(crong)) {
    return -1;
  }

  const pobiMaxValue = getMaxValue(pobi);
  const crongMaxValue = getMaxValue(crong);

  if (pobiMaxValue > crongMaxValue) {
    return 1;
  } else if (pobiMaxValue < crongMaxValue) {
    return 2;
  } else {
    return 0;
  }
}

module.exports = problem1;
