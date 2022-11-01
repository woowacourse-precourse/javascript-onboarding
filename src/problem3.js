const problem3 = (number) => {
  let clapCount = 0;

  Array.from({ length: number }).forEach((_, i) => {
    const matchResults = `${i + 1}`.match(/3|6|9/g);

    if (matchResults) clapCount += matchResults.length;
  });

  return clapCount;
};

module.exports = problem3;
