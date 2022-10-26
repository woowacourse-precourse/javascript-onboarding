function problem1(pobi, crong) {
  const pobiScore = Math.max(parseInt(pobi.map(num => getScore(num))));
  const crongScore = Math.max(parseInt(crong.map(num => getScore(num))));

  function getScore(num) {
    const add = String(num).split("").reduce((acc, cur) => acc + parseInt(cur), 0);
    const multiply = String(num).split("").reduce((acc, cur) => acc * parseInt(cur));
    const highScore = Math.max(add, multiply);

    return highScore;
  }
}

module.exports = problem1;

