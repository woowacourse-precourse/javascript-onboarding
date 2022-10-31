function sumCalc(eachSide) {
  let eachSideSum = eachSide.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return eachSideSum;
}

function multipleCalc(eachSide) {
  let eachSideMultiple = 1;

  for (let i = 0; i < eachSide.length; i++) {
    eachSideMultiple *= eachSide[i];
  }

  return eachSideMultiple;
}

function eachSideCalc(eachSideNum) {
  const eachSide = eachSideNum
    .toString()
    .split("")
    .map((item) => Number(item));

  const eachSideSum = sumCalc(eachSide);

  const eachSideMultiple = multipleCalc(eachSide);

  const eachSideMax = Math.max(eachSideSum, eachSideMultiple);

  return eachSideMax;
}

function pageNumCalc(who) {
  const leftMax = eachSideCalc(who[0]);

  const rightMax = eachSideCalc(who[1]);

  const finalMax = Math.max(leftMax, rightMax);

  return finalMax;
}

function exceptionCheck(who) {
  if (who.length > 2 || who.length < 2) {
    return false;
  }

  if (who[0] < 1 || who[0] > 400 || who[1] < 1 || who[1] > 400) {
    return false;
  }

  if (who[1] - who[0] !== 1) {
    return false;
  }

  if ((who[0] === 1 && who[1] === 2) || (who[0] === 399 && who[1] === 400)) {
    return false;
  }

  return true;
}

function whoIsWinner(pobi, crong) {
  if (pobi > crong) {
    return 1;
  }

  if (pobi < crong) {
    return 2;
  }

  if (pobi === crong) {
    return 0;
  }
}

function problem1(pobi, crong) {
  if (!exceptionCheck(pobi) || !exceptionCheck(crong)) {
    return -1;
  }

  const pobiMax = pageNumCalc(pobi);
  const crongMax = pageNumCalc(crong);

  const ans = whoIsWinner(pobiMax, crongMax);

  return ans;
}

module.exports = problem1;
