function problem6(forms) {
  var answer;
  return answer;
}
function makePatterns(nickname) {
  const resultArray = [];
  let x = 0;
  while (x < nickname.length - 1) {
    resultArray.push(nickname.substr(x, 2));
    x++;
  }
  return resultArray;
}
module.exports = problem6;
