/*
  기능 요구 사항 과 구현한 기능목록
  1. 책을 임의로 펼친다. 
  -> problem1의 인자로 들어온 배열을 PobiCheck,CrongCheck 변수를 이용하여 펼쳤음.
  2. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다. 
  3. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
  4. 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
  -> addproblem1(),mulproblem1() 함수를 이용하여 덧셈과 곱셈 두가지 경우를 모두 구한 후 MaxPobiNum, MaxCrongiNum를 이용하여 덧셈과 곱셈중 큰 수를 가지도록 구현함
  5. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
  -> 마지막 if,else if ,else 통하여 pobi 와 crong 의 수를 비교하여 결과를 출력하게 함.
  6. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.
  -> 시작하는 면은 1 마지막 면은  400 이므로 pobi 나 crong이 이 페이지를 피면 즉시 -1 를 반환하게 구현함.
*/

function problem1(pobi, crong) {
  const PobiCheck = pobi[1] - pobi[0];
  const CrongCheck = crong[1] - crong[0];
  //pobi,crong의 배열의 길이가 2가 넘어가면 -1 반환
  if (pobi.legnth > 2 || crong.legnth > 2) {
    return -1
  }
  //끝나는면과 시작하는 면의 차이가 1초과시 페이지를 다 펼친게 아니므로 -1 반환
  if (PobiCheck > 1 || CrongCheck > 1) {
    return -1;
  };
  //시작하는 면 1 , 끝나는 면 400 이 나오면 -1 을 반환
  if ((pobi[0] === 1 || pobi[1] === 400) || (crong[0] === 1 || crong[1] === 400)) {
    return -1;
  };
  // 왼쪽 페이지가 오른쪽 페이지와 같거나 크면 -1 반환
  if ((pobi[0] >= pobi[1]) || (crong[0] >= crong[1])) {
    return -1;
  }
  const MaxPobiNum = () => {
    const addpobi = addproblem1(pobi[0], pobi[1]);
    const mulpobi = mulproblem1(pobi[0], pobi[1]);

    if (addpobi > mulpobi) {
      return addpobi;
    }
    else {
      return mulpobi;
    }
  }

  const MaxCrongiNum = () => {
    const addcrong = addproblem1(crong[0], crong[1]);
    const mulcrong = mulproblem1(crong[0], crong[1]);
    if (addcrong > mulcrong) {
      return addcrong;
    }
    else {
      return mulcrong;
    }
  }
  if (MaxPobiNum() > MaxCrongiNum()) {
    return 1;
  }
  else if (MaxPobiNum < MaxCrongiNum) {
    return 2;
  }
  else {
    return 0;
  }
}

function addproblem1(num1, num2) {
  var sum1 = 0, sum2 = 0;
  while (num1 > 0) {
    sum1 += num1 % 10;
    num1 = Math.floor(num1 / 10);
  };
  while (num2 > 0) {
    sum2 += num2 % 10;
    num2 = Math.floor(num2 / 10);
  };

  if (sum1 > sum2) {
    return sum1;
  }
  else {
    return sum2;
  }
}

function mulproblem1(num1, num2) {
  var mul1 = 1, mul2 = 1;
  while (num1 != 0) {
    mul1 *= num1 % 10;
    num1 = Math.floor(num1 / 10);
  }
  while (num2 != 0) {
    mul2 *= num2 % 10;
    num2 = Math.floor(num2 / 10);
  }
  if (mul1 > mul2) {
    return mul1;
  }
  else {
    return mul2;
  }
}


module.exports = problem1;
