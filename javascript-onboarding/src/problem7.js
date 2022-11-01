function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
function solution(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}