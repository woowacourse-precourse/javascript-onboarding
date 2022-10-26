function problem1(pobi, crong) {
  return getWinner(pobi, crong);
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

module.exports = problem1;
