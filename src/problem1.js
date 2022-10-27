/*
 * -- 기능 목록 --
 * 1. 페이지의 배열인 유저를 받아 두 페이지 중 최고점을 반환하는 함수 - getUesrScore(user)
 * 2. 페이지를 받아 점수로 반환하는 함수 - calculatePageScore(page)
 * 3. 두 페이지가 붙어있지 않은 예외사항을 처리하는 함수 - isValid(user[])
 */

function calculatePageScore(page) {
  return Math.max(
    String(page)
      .split("")
      .reduce((acc, current) => acc + Number(current), 0),
    String(page)
      .split("")
      .reduce((acc, current) => acc * Number(current), 1)
  );
}

function getUserScore([leftPage, rightPage]) {
  const leftPageScore = calculatePageScore(leftPage);
  const rightPageScore = calculatePageScore(rightPage);

  return Math.max(leftPageScore, rightPageScore);
}

function isValid(userList) {
  return userList.every(([left, right]) => left + 1 === right);
}

function problem1(pobi, crong) {
  if (!isValid([pobi, crong])) return -1;

  const pobiScore = getUserScore(pobi);
  const crongScore = getUserScore(crong);

  switch (true) {
    case pobiScore === crongScore:
      return 0;
    case pobiScore > crongScore:
      return 1;
    case pobiScore < crongScore:
      return 2;
  }
}

module.exports = problem1;
