const POBI_CASE = 1;
const CRONG_CASE = 2;
const DRAW_CASE = 0;
const EXCEPTION_CASE = -1;
const SELECTED_PAGE = 2;
const SEQUENCE_CASE = 1;
const FIRST_PAGE = 1;
const LAST_PAGE = 400;

/**
 * @name problem1
 * @description
 * 포비와 크롱이 페이지 번호가 1부터 시작되는 400 페이지의 책을 주웠다.
 * 책을 살펴보니 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수 번호이고 모든 페이지에는 번호가 적혀있었다.
 * 책이 마음에 든 포비와 크롱은 페이지 번호 게임을 통해 게임에서 이긴 사람이 책을 갖기로 한다.
 * 페이지 번호 게임의 규칙은 아래와 같다.
 *
 * - 책을 임의로 펼친다.
 * - 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
 * - 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
 * - 2~3 과정에서 가장 큰 수를 본인의 점수로 한다.
 * - 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
 * - 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.
 *
 * 포비와 크롱이 펼친 페이지가 들어있는 배열 pobi와 crong이 주어질 때,
 * 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return 하도록 solution 메서드를 완성하라.
 * @param {[number, number]} [pobi]
 * @param {[number, number]} [mocrongey]
 * @return {-1 | 0 | 1 | 2} 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1로 return
 * 제한사항
 * @throws pobi와 crong의 길이는 2이다.
 * @throws pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.
 * 기능목록
 * @todo 1. 유효한 페이지인지 검증해주는 함수
 * @todo 1. 연속되는 페이지인지 검증해주는 함수
 * @todo 1. 최댓값을 반환해주는 함수
 */

function problem1(pobi, crong) {
  if (!isExactSelectedPage(pobi) || !isExactSelectedPage(crong))
    return EXCEPTION_CASE;
  if (!isValidPage(pobi) || !isValidPage(crong)) return EXCEPTION_CASE;
  if (!isSequenceNumber(pobi) || !isSequenceNumber(crong))
    return EXCEPTION_CASE;

  const pobiMaxNumber = getMaxNumber(pobi);
  const crongMaxNumber = getMaxNumber(crong);

  if (pobiMaxNumber > crongMaxNumber) return POBI_CASE;
  if (pobiMaxNumber < crongMaxNumber) return CRONG_CASE;
  if (pobiMaxNumber === crongMaxNumber) return DRAW_CASE;
  return EXCEPTION_CASE;
}

function isValidPage(numbers) {
  if (
    numbers.indexOf(FIRST_PAGE) === EXCEPTION_CASE &&
    numbers.indexOf(LAST_PAGE) === EXCEPTION_CASE
  )
    return true;
  return false;
}

function isSequenceNumber(numbers) {
  const [leftPage, rightPage] = numbers;
  if (rightPage - leftPage === SEQUENCE_CASE) return true;
  return false;
}

function isExactSelectedPage(numbers) {
  if (numbers.length === SELECTED_PAGE) return true;
  return false;
}

function getMaxNumber(numbers) {
  const max = [];
  numbers.forEach((number) => {
    const numberArr = number.toString().split("");
    const plus = numberArr.reduce((acc, cur) => acc + parseInt(cur), 0);
    const multi = numberArr.reduce((acc, cur) => acc * parseInt(cur), 1);
    max.push(plus, multi);
  });
  return Math.max(...max);
}

module.exports = problem1;
