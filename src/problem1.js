// 2022 Kimjungwon 우아한테크코스 문제풀이 1

/**
 * 
 * 예외사항 체크 함수
 * 
 * 1~400까지의 페이지가 되면 안되고, 첫페이지[(1,2),(399,400)]이면 안된다.
 * 각 배열의 값은 정수형이여야 한다.
 * person의 값은 1차이여야 한다.
 * person의 첫번째인덱스는 홀수이다. 두번째인덱스가 짝수인경우는 위에 경우에서 해결되었으므로 넘어간다.
 * 
 * @param person pobi나 crong과 같은 사람의 책 page 정수형 배열로 길이는 2로 고정. 
 * @return 예외사항이라면 true를 반환하고, 예외사항이 없다면 false를 반환한다.
 */
function isException(person) {
  if (person[0] < 2 || person[1] > 399)
    return true;

  else if (typeof (person[0]) != typeof (1) || typeof (person[1]) != typeof (1))
    return true;

  else if (person[0] - person[1] != -1)
    return true;

  else if (person[0] % 2 != 1)
    return true;

  return false;
}

/**
 * 정수의 각 자릿수의 합과 곱을 계산하고, 더 큰 값을 리턴하는 함수
 * 
 * 
 * @param number 책의 왼쪽 또는 오른쪽 페이지로 정수형이다.
 * @return 정수의 각 자릿수의 합과 곱중에 더 큰 값이다.
 */
function calculate(number) {
  let plus = 0;
  let multiply = 1;

  // 낮은 자릿수부터  %10의 연산으로 뽑아서 덧셈, 곱셈을 수행.
  // 이어서 number를 나누기10을 하고 버림을 하면서 오른쪽으로 쉬프트되는 효과.
  while (number > 0) {
    plus += number % 10;
    multiply *= number % 10;

    number = Math.floor(number / 10);
  }
  // 더 큰 값을 리턴한다.
  return plus > multiply ? plus : multiply;
}

function problem1(pobi, crong) {

  let answer = -1;
  let pobiScore = 0;
  let crongScore = 0;

  //예외사항 처리부분
  if (isException(pobi) || isException(crong))
    return answer;

  //각 페이지번호마다 계산을 하는 과정
  let pobiLeft = calculate(pobi[0]);
  let pobiRight = calculate(pobi[1]);
  let crongLeft = calculate(crong[0]);
  let crongRight = calculate(crong[1]);

  //두 인물의 최종 score를 구한다.
  pobiScore = pobiLeft > pobiRight ? pobiLeft : pobiRight;
  crongScore = crongLeft > crongRight ? crongLeft : crongRight;

  //pobi가 이기면 1, 크롱이 이기면 2, 무승부는 0
  if (pobiScore > crongScore) answer = 1;
  else if (crongScore > pobiScore) answer = 2;
  else answer = 0;

  return answer;
}

module.exports = problem1;
