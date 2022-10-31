function plusSum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}

function multiSum(num) {
  let sum = 1;
  while (num) {
    sum *= num % 10;
    num = parseInt(num / 10);
  }
  return sum;
}

function pageCheck(page) {
  const [left, right] = page;
  if(right - left != 1)
    return 0;
  else if (left % 2 === 1 && 1 <= left && left <= 399 && right % 2 === 0 && 2 <= right && right <= 400)
    return 1;
  
}

function compare(cmp1, cmp2) {
  if (cmp1 > cmp2)
    return cmp1;
  else return cmp2;
}

function problem1(pobi, crong) {
  if (pageCheck(pobi) === 0 || pageCheck(crong) === 0)
    return -1;

  const [pobiLeft, pobiRight] = pobi;
  pobiNum = Math.max(plusSum(pobiLeft), multiSum(pobiLeft), plusSum(pobiRight), multiSum(pobiRight));

  const [crongLeft, crongRight] = crong;
  crongNum = Math.max(plusSum(crongLeft), multiSum(crongLeft), plusSum(crongRight), multiSum(crongRight));

  if (pobiNum > crongNum) return 1;
  else if (pobiNum == crongNum) return 0;
  else return 2;
}

module.exports = problem1;
