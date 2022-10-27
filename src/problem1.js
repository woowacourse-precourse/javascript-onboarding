function problem1(pobi, crong) {
  if (validatePages(pobi) && validatePages(crong)) {
    return getWinner(pobi, crong);
  }
  return -1;
}

const getNumberArray = (number) => {
  return String(number)
    .split('')
    .map((number) => Number(number));
};

const getSumPage = (page) => {
  return getNumberArray(page).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const getMulPage = (page) => {
  return getNumberArray(page).reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const getLargestNumber = (pages) => {
  const numbers = [];
  pages.forEach((page) => {
    numbers.push(getSumPage(page), getMulPage(page));
  });
  return Math.max(...numbers);
};

const getWinner = (pobi, crong) => {
  let winner = 0;
  const pobiScore = getLargestNumber(pobi);
  const crongScore = getLargestNumber(crong);
  if (pobiScore > crongScore) {
    winner = 1;
  } else if (pobiScore < crongScore) {
    winner = 2;
  }
  return winner;
};

const validatePages = (pages) => {
  if (typeof pages[0] !== 'number' || typeof pages[1] !== 'number') {
    return false;
  }
  if (pages.length !== 2) {
    return false;
  }
  if (pages[0] % 2 !== 1 || pages[1] % 2 !== 0) {
    return false;
  }
  if (pages[0] + 1 !== pages[1]) {
    return false;
  }
  if (pages[0] < 3 || pages[0] > 398 || pages[1] < 3 || pages[1] > 398) {
    return false;
  }
  return true;
};

module.exports = problem1;
