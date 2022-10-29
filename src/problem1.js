function problem1(pobi, crong) {
  const getMaxScore = (pages) => {
    const singleDigitsOfBothPages = pages.map((page) =>
      page
        .toString()
        .split('')
        .map((singleDigit) => +singleDigit),
    );

    const scores = [];
    singleDigitsOfBothPages.forEach((singleDigitsOfOnePage) => {
      scores.push(
        singleDigitsOfOnePage.reduce((prev, curr) => prev + curr),
        singleDigitsOfOnePage.reduce((prev, curr) => prev * curr),
      );
    });
    return Math.max(...scores);
  };

  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);

  if (pobiScore === crongScore) return 0;
  else if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else return -1;
}

module.exports = problem1;
