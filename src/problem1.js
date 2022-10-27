function problem1(pobi, crong) {
  const getScores = ([firstPage, secondPage]) => {
    return [
      Number(
        [...String(firstPage)].reduce((acc, cur) => Number(cur) * Number(acc))
      ),
      Number(
        [...String(firstPage)].reduce((acc, cur) => Number(cur) + Number(acc))
      ),
      Number(
        [...String(secondPage)].reduce((acc, cur) => Number(cur) * Number(acc))
      ),
      Number(
        [...String(secondPage)].reduce((acc, cur) => Number(cur) + Number(acc))
      ),
    ];
  };
  const getMaxScore = (scores) => {
    return scores.reduce((acc, cur) => Math.max(acc, cur));
  };
  getMaxScore(getScores(pobi)); //72
  getMaxScore(getScores(crong)); //72
}

problem1([97, 98], [197, 198]);
// module.exports = problem1;
