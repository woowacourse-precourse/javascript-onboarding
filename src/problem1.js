function problem1(pobi, crong) {
  if (pobi[0] < 1 || crong[0] < 1 || pobi[0] > 400 || crong[0] > 400) {
    return -1;
  } else if (pobi.length != 2 || crong.length != 2) {
    return -1;
    //pobi와 crong에는 [왼쪽 페이지 번호(홀수), 오른쪽 페이지 번호(짝수)]가 순서대로 들어있다.
  } else if (pobi[0] % 2 != 1 || crong[0] % 2 != 1 || pobi[1] % 2 != 0 || crong[1] % 2 != 0) {
    return -1;
  } else if ((pobi[0] + 1) != pobi[1] || (crong[0] + 1) != crong[1]) {
    return -1;
  }

  let answer;

  let pobiBiggest = isBigger(sumOrMultipy(pobi[0]), sumOrMultipy(pobi[1]));
  let crongBiggest = isBigger(sumOrMultipy(crong[0]), sumOrMultipy(crong[1]));

  if (pobiBiggest > crongBiggest) {
    answer = 1;
  } else if (crongBiggest > pobiBiggest) {
    answer = 2;
  } else if (crongBiggest === pobiBiggest) {
    answer = 0;
  }

  return answer;
}

function sumOrMultipy(page) {
  let hundred = Math.floor(page / 100);
  let ten = Math.floor((page % 100) / 10);
  let one = page % 10;

  let sum = hundred + ten + one;
  let multiply = 0;

  if (page < 100 && page >= 10) {
    multiply = ten * one;
  } else if (page < 10) {
    multiply = one;
  } else {
    multiply = hundred * ten * one;
  }

  return isBigger(sum, multiply);
}

function isBigger(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else if (n1 === n2) {
    return n1;
  }
}
module.exports = problem1;