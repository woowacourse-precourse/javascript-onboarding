function isValidPage(page) {
  if (page[0] === 1 || page[1] === 400) return false;
  else return true;
}

function problem1(pobi, crong) {
  var answer;
  let answer;

  if (!isValidPage(pobi) || !isValidPage(crong)) return -1;

  return answer;
}
module.exports = problem1;