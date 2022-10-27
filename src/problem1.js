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

module.exports = problem1;
