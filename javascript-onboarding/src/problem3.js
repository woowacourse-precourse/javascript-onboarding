function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
function solution(order) {
  return [...('' + order)].filter(num => num === '3' || num === '6' || num === '9').length;
}
