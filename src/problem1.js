function problem1(pobi, crong) {
  let result;
  if (!left(pobi) || !left(crong)) {
    return -1;
  }
  if (!right(pobi) || !right(crong)) {
    return -1;
  }
  const pobiPage = Math.max(maxCal(pobi[0]), maxCal(pobi[1]));
  const crongPage = Math.max(maxCal(crong[0]), maxCal(crong[1]));

  if (pobiPage > crongPage) {
    result = 1;
  } else if (pobiPage < crongPage) {
    result = 2;
  } else {
    result = 0;
  }
  return result;
}

function sumCount(page) {
  let count = 0;
  do {
    count += page % 10;
    page = Math.floor(page / 10);
  } while (page > 0);
  return count;
}

function mulCount(page) {
  let count = 1;
  do {
    count *= page % 10;
    page = Math.floor(page / 10);
  } while (page > 0);
  return count;
}

function maxCal(page) {
  const sumValue = sumCount(page);
  const mulValue = mulCount(page);
  return Math.max(sumValue, mulValue);
}

function left(page) {
  if (page[0] === 1 || page[1] === 400) {
    return false;
  }
  return true;
}

function right(page) {
  if (page[1] - page[0] !== 1) {
    return false;
  }
  return true;
}

module.exports = problem1;
