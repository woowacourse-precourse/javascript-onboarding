function problem1(pobi, crong) {
  var pobiMax = Math.max(maxNumber(pobi[0], pobi[1]));
  var crongMax = Math.max(maxNumber(crong[0], crong[1]));

  if (pobi[0] % 2 != 1 || pobi[1] - pobi[0] != 1) return -1;
  if (crong[0] % 2 != 1 || crong[1] - crong[0] != 1) return -1;

  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else if (pobiMax == crongMax) return 0;
}

function maxNumber(num) {
  var numArr = [...String(num)].map((item) => Number(item));
  let mul = 1;
  let add = 0;

  numArr.forEach((item) => {
    mul *= item;
    add += item;
  });

  return mul >= add ? mul : add;
}

module.exports = problem1;
