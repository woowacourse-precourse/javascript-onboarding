function problem1(pobi, crong) {
  const singleDigitsOfBothPages = pobi.map((page) =>
    page
      .toString()
      .split('')
      .map((singleDigit) => +singleDigit),
  );
}

module.exports = problem1;
