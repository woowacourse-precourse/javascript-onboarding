function problem1(pobi, crong) {
  var answer;

  // 예외 확인
  const check = (left, right) => {
    // 입력 페이지가 정상이면 1, 비정상이면 -1
    return (left + 1) == right ? 1 : -1;
  }

  // 합
  const sum = (num) => {
    let total = 0;
    num = String(num);
    for (let i = 0; i < num.length; i++) {
      total += parseInt(num[i]);
    }
    return total;
  }

  // 곱
  const product = (num) => {
    let total = 1;
    num = String(num);
    for (let i = 0; i < num.length; i++) {
      total *= parseInt(num[i]);
    }
    return total;
  }

  // 최종 점수 선택
  const score = (num1, num2) => {
    // 중첩 삼항 연산자: num1이 더 크면 num1반환, 거짓인데 num2가 더 크면 num2반환, 같으면 아무거나(num2)
    return num1 > num2 ? num1 : num1 < num2 ? num2 : num2;
  }

  // 게임 결과
  const gameResult = (num1, num2) => {
    // 중첩 삼항 연산자: num1이 더 크면 1, 거짓인데 num2가 더 크면 2, 같으면 0
    return num1 > num2 ? 1 : num1 < num2 ? 2 : 0;
  }

  // 왼쪽 페이지 계산
  const calLeft = (num) => {
    let sumLeft = sum(num);
    let productLeft = product(num);

    return score(sumLeft, productLeft);
  }

  // 오른쪽 페이지 계산
  const calRight = (num) => {
    let sumRight = sum(num);
    let productRight = product(num);

    return score(sumRight, productRight);
  }

  let p = check(pobi[0], pobi[1]);
  let c = check(crong[0], crong[1]);

  // 잘못된 페이지 확인
  if ((p === -1) || (c === -1)) {
    answer = -1;
  } else {
    const p_score = score(calLeft(pobi[0]), calRight(pobi[1]));
    const c_score = score(calLeft(crong[0]), calRight(crong[1]));
    answer = gameResult(p_score, c_score);
  }

  return answer;
}

module.exports = problem1;
