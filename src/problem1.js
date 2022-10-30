const BOOK = {
  FIRST_PAGE: 0,
  LAST_PAGE: 400,
}

const RESULT = {
  POBI_WIN: 1,
  CRONG_WIN: 2,
  DRAW: 0,
  EXCEPTION: -1,
}

const calcSum = (num) => {
  let sum = 0;
  while (num > 0){
    sum += Math.trunc(num % 10);
    num = Math.trunc(num / 10);
  }
  return sum;
}

const calcProduct = (num) => {
  let product = 1;
  while (num > 0){
    product *= Math.trunc(num % 10);
    num = Math.trunc(num / 10);
  }
  return product;
}

const getMaxNum = (player) => {
  const [odd, even] = player;
  return Math.max(
    calcSum(odd), 
    calcSum(even), 
    calcProduct(odd), 
    calcProduct(even)
  );
}

const isValidPage = (player) => {
  const [leftPage, rightPage] = player;
  if (leftPage < BOOK.FIRST_PAGE || rightPage > BOOK.LAST_PAGE) return false;
  if (rightPage - leftPage !== 1) return false;
  return true;
}

function problem1(pobi, crong) {
  const pobiMax = getMaxNum(pobi);
  const crongMax = getMaxNum(crong);
  if(isValidPage(pobi) && isValidPage(crong)){
    if(pobiMax > crongMax) return RESULT.POBI_WIN;
    if(pobiMax < crongMax) return RESULT.CRONG_WIN;
    if(pobiMax === crongMax) return RESULT.DRAW;
  }
  return RESULT.EXCEPTION;
}

module.exports = problem1;
