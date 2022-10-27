function problem1(pobi, crong) {
  let answer;
  const FIRST_PAGE = 1;
  const LAST_PAGE = 400;
  const MINIMUM_PAGE = 2;
  const PAGE_LENGTH = 2;

  const EXCEPTIONS = -1;

  // - [x] 책을 임의로 펼친다.
  // - [x] 책을 펼쳤을때 시작 면이나 마지막 면이 나오지 않는다.
  const getRandomPage = () =>
    Math.floor(Math.random() * (LAST_PAGE - FIRST_PAGE)) + MINIMUM_PAGE;

  if (!pobi) {
    pobi = [getRandomPage(), getRandomPage()];
  }
  if (!crong) {
    crong = [getRandomPage(), getRandomPage()];
  }

  // - [x] pobi와 crong의 길이는 2이다.
  const isLengthMatch = (length, pages) => pages.length === length;
  if (!isLengthMatch(PAGE_LENGTH, pobi) || !isLengthMatch(PAGE_LENGTH, crong)) {
    answer = EXCEPTIONS;
    return answer;
  }

  // 예외사항
  // - [ ] 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수 번호다.
  // - [ ] 모든 페이지에는 번호가 적혀있다.

  // - [ ] 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 곱해 가장 큰 수를 구한다.
  // - [ ] 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 곱해 가장 큰 수를 구한다.
  // - [ ] 5~6의 결과 중 가장 큰 수를 본인의 점수로 한다
  // - [ ] 점수를 비교해 가장 높은 사람이 게임의 승자다.

  return answer;
}

module.exports = problem1;
