function problem1(pobi, crong) {

  //예외사항
  function check(n) {
    if (n.length >= 3) return true
    if (n[1] !== n[0] + 1 || n[0] !== n[1] - 1) return true
  }

  if (check(pobi) || check(crong)) {
    return -1
  }

  var pobi_result = getMaxNum(pobi[0], pobi[1])
  var crong_result = getMaxNum(crong[0], crong[1])

  //승부 가리기
  if (pobi_result > crong_result) return 1
  else if (pobi_result < crong_result) return 2
  else if (pobi_result == crong_result) return 0


  function sum(n) {
    var result = String(n).split("").reduce((acc, cur) => Number(acc) + Number(cur), 0);
    return result;
  }

  function multiplication(n) {
    var result = String(n).split("").reduce((acc, cur) => Number(acc) * Number(cur), 1);
    return result;
  }

  function getMaxNum(left, right) {
    return Math.max(
      sum(left),
      sum(right),
      multiplication(left),
      multiplication(right)
    )
  }
}
module.exports = problem1;

