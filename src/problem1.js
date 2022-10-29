function problem1(pobi, crong) {
  const singleDigitsOfBothPages = pobi.map((page) =>
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

  const pobiScore = Math.max(...scores);
}

module.exports = problem1;
