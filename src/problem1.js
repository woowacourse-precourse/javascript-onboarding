function problem1(pobi, crong) {
  if (pobi[0], crong[0] === 1 || pobi[0], crong[0] === 399) {
    //시작 면[1, 2]이나 마지막 면[399, 400]이 나오도록 책을 펼치지 않는다.
    return -1;
  } else if (pobi.length != 2 || crong.length != 2) {
    //pobi와 crong의 길이는 2이다.
    return -1;
  } else if (pobi[0] % 2, crong[0] % 2 != 1 || pobi[1] % 2, crong[1] % 2 != 0) {
    //pobi와 crong에는 [왼쪽 페이지 번호(홀수), 오른쪽 페이지 번호(짝수)]가 순서대로 들어있다.
    return -1;
  }

  var answer;

  var pobiBiggest = isBigger(sumOrMultipy(pobi[0]),sumOrMultipy(pobi[1]));
  var crongBiggest = isBigger(sumOrMultipy(crong[0]),sumOrMultipy(crong[1]));
  answer = isBigger(pobiBiggest, crongBiggest);

  return answer;
}

function sumOrMultipy(page) {
  var hundred = Math.floor(page / 100);
  var ten = Math.floor((page % 100) / 10);
  var one = page % 10;

  var sum = hundred + ten + one;
  var multiply = hundred * ten * one;
  if (sum > multiply) {
    return sum;
  } else if (multiply > sum) {
    return multiply;
  } else if (multiply === sum) {
    //sum, multiply 변수 중 아무거나 반환해도 무관
    return sum;
  }
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