function problem1(pobi, crong) {
  var answer;
  return answer;
}

// 1) 페이지 숫자를 주면 합/곱중 큰 수를 리턴하는 함수
function calculatePage(pageNum) {
  let temp = [];
  while (pageNum > 0) {
    temp.unshift(pageNum % 10);
    pageNum = Math.floor(pageNum / 10);
  }
  const sum = temp.reduce((acc, cur) => acc + cur, 0);
  const multiply = temp.reduce((acc, cur) => acc * cur, 1);

  return sum > multiply ? sum : multiply;
}
// 2) 페이지 배열을 주면 가능한 4가지 케이스중 가장 큰 수를 리턴하는 함수
function calculateScore(pageArr) {
  const left = calculatePage(pageArr[0]);
  const right = calculatePage(pageArr[1]);
  return left > right ? left : right;
}


module.exports = problem1;
