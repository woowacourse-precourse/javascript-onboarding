function validateArg(arg) {
  if (arg.length !== 2) {
    return 0;
  }
  if (typeof arg[0] !== "number" || typeof arg[1] !== "number") {
    return 0;
  }
  if (arg[1] % 2 !== 0 || arg[1] <= 3 || arg[1] >= 399) {
    return 0;
  }
  if (arg[1] - arg[0] !== 1) {
    return 0;
  }
  return 1;
}

function sumValue(strArg) {
  let sumValue = 0;

  for (let i = 0; i < strArg.length; i++) {
    sumValue += Number(strArg[i]);
  }
  return sumValue;
}

function multiplyValue(strArg) {
  let multiplyValue = 1;

  for (let i = 0; i < strArg.length; i++) {
    multiplyValue *= Number(strArg[i]);
  }
  return multiplyValue;
}

function getStringPage(arg) {
  return arg[0].toString(), arg[1].toString();
}

function findMaxValue(arg) {
  // const leftPage = arg[0].toString();
  // const rightPage = arg[1].toString();
  const [leftPage, rightPage] = getStringPage(arg);
  const maxSumLeft = Math.max(sumValue(leftPage), multiplyValue(leftPage));
  const maxSumRight = Math.max(sumValue(rightPage), multiplyValue(rightPage));
  return Math.max(maxSumLeft, maxSumRight);
}

function problem1(pobi, crong) {
  if (validateArg(pobi) === 0 || validateArg(crong) === 0) {
    return -1;
  }
  if (findMaxValue(pobi) > findMaxValue(crong)) {
    return 1;
  }
  if (findMaxValue(pobi) === findMaxValue(crong)) {
    return 0;
  }
  if (findMaxValue(pobi) < findMaxValue(crong)) {
    return 2;
  }
  return -1;
}

module.exports = problem1;
// // success
// console.log(problem1([97, 98], [197, 198]));
// console.log(problem1([131, 132], [211, 212]));

// // failure
// console.log(problem1([99, 102], [211, 212])); // #1
// console.log(problem1([99, 100, 101], [211, 212])); // #2
// console.log(problem1([99, '100'], [211, 212])); // #3
// console.log(problem1([99, 100], [211, '212'])); // #4
// console.log(problem1([2, 3], [211, 212])); // #5
// console.log(problem1([101, 102], [399, 400])); // #6
// console.log(problem1([99, 102], [398, 399])); // #7

