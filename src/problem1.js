function problem1(pobi, crong) {
  let answer;
  return answer;
}
// 예외사항을 판별하는 함수
const checkingExceptions = (pages) => {
  if (pages.length !== 2) return -1;
  if (pages[1] - pages[0] !== 1) return -1;
  if (
    pages.some((ele) => {
      ele <= 1 || ele >= 400;
    })
  )
    return -1;

  return 1;
};

module.exports = problem1;
