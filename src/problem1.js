function problem1(pobi, crong) {
  var answer;

  // 책의 길이가 2가 넘는 경우
  if (pobi.length !== 2 || crong.length !== 2) return -1;

  // 왼쪽 페이지, 오른쪽 페이지가 순서대로 들어있다. ( 둘의 차가 1이다. )
  const subtractBookPage = (array) =>
    array.reduce((previousValue, currentValue) => currentValue - previousValue);
  if (subtractBookPage(pobi) !== 1 || subtractBookPage(crong) !== 1) return -1;
}

module.exports = problem1;
