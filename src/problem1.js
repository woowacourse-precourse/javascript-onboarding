function numValueError(num) {
  return isNaN(num) || !Number.isInteger(num) || num < 1 || num > 400;
}

function isException(arg) {
  return (
    !Array.isArray(arg) ||
    arg.length !== 2 ||
    numValueError(arg[0]) ||
    numValueError(arg[1]) ||
    arg[0] % 2 === 0 ||
    arg[1] - arg[0] !== 1
  );
}

function calSum(num) {
  const stringNum = num.toString();
  let sum = 0;

  for (let i = 0; i < stringNum.length; ++i) {
    sum += parseInt(stringNum.charAt(i));
  }
  return sum;
}

function calProduct(num) {
  const stringNum = num.toString();
  let product = 1;

  for (let i = 0; i < stringNum.length; ++i) {
    product *= parseInt(stringNum.charAt(i));
  }
  return product;
}

function calScore(arg) {
  return Math.max(
    Math.max(calSum(arg[0]), calProduct(arg[0])),
    Math.max(calSum(arg[1]), calProduct(arg[1])),
  );
}

function compare(pobiScore, crongScore) {
  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  return 0;
}

function problem1(pobi, crong) {
  if (isException(pobi) || isException(crong)) return -1;
  return compare(calScore(pobi), calScore(crong));
}

module.exports = problem1;
