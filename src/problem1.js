function problem1(pobi, crong) {
  var answer;
  return answer;
}

//예외사항 : 첫, 마지막 페이지일때 예외. 다음 페이지가 이전 페이지보다 +1이 아닐 때
function exceptions(arr) {
  if (arr[0] + 1 !== arr[1]) return false;
  if (arr[0] === 1 || arr[1] === 400) return false;
  return true;
}


module.exports = problem1;
