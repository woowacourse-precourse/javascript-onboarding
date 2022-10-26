function problem1(pobi, crong) {
  let pobiNumber = {
    odd: pobi[0],
    even: pobi[1],
    max: 0,
  };

  let crongNumber = {
    odd: crong[0],
    even: crong[1],
    max: 0,
  };

  pobiNumber.max = getMaxNumber(pobiNumber.odd, pobiNumber.even);
  crongNumber.max = getMaxNumber(crongNumber.odd, crongNumber.even);

  if (pobiNumber.max === crongNumber.max) return 0;
  else if (pobiNumber.max > crongNumber.max) return 1;
  else if (pobiNumber.max < crongNumber.max) return 2;
}

function getMaxNumber(oddNumber, evenNumber) {
  return Math.max(
    sumNumber(oddNumber),
    multiNumber(oddNumber),
    sumNumber(evenNumber),
    multiNumber(evenNumber)
  );
}

function sumNumber(number) {
  let sum = 0;
  number
    .toString()
    .split("")
    .map((num) => (sum += Number(num)));

  return sum;
}
function multiNumber(number) {
  let multi = 1;
  number
    .toString()
    .split("")
    .map((num) => (multi *= Number(num)));

  return multi;
}

module.exports = problem1;
