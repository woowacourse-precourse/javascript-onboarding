function problem1(pobi, crong) {

  //책의 범위
  
  //Left 값 계산

  //Right 값 계산

  //점수 비교

  //결과 출력
  if (maxNum(pobi) > maxNum(crong)) {
    return 1;
  } else if (maxNum(pobi) < maxNum(crong)) {
    return 2;
  } else {
    return 0;
  }

  //예외 상황
  if (pobi[1] !== pobi[0]+1 || crong[1] !== crong[0]+1) {
    return -1;
  }
}

module.exports = problem1;
