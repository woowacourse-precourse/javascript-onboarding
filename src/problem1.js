function getMaxNum(pages) {
  let max = Number.MIN_SAFE_INTEGER;

  pages.forEach((page) => {
    let sum = 0;
    let mlp = 1;
    page
      .toString()
      .split("")
      .forEach((char) => {
        sum += Number(char);
        mlp *= Number(char);
        max = max > Math.max(sum, mlp) ? max : Math.max(sum, mlp);
      });
  });

  return max;
}

function compareTwoNums(pobiScore, crongScore) {
  return pobiScore === crongScore ? 0 : pobiScore > crongScore ? 1 : 2;
}

function problem1(pobi, crong) {
  if (!(pobi[1] - pobi[0] === 1) || !(crong[1] - crong[0] === 1)) return -1;

  const pobiScore = getMaxNum(pobi);
  const crongScore = getMaxNum(crong);
  const result = compareTwoNums(pobiScore, crongScore);

  return result;
}

// expected: 0
console.log(problem1([97, 98], [197, 198]));
// expected: 1
console.log(problem1([131, 132], [211, 212]));
// expected: -1
console.log(problem1([99, 102], [211, 212]));
// expected: -1
console.log(problem1([102, 99], [211, 212]));

module.exports = problem1;
