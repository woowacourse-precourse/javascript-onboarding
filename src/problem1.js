function isPagesValid(pages) {
  const [left, right] = pages;
  if (1 <= left && left < 400 && left % 2 === 1 && left + 1 === right) {
    return true;
  }
  return false;
}

function problem1(pobi, crong) {
  if (!isPagesValid(pobi) || !isPagesValid(crong)) {
    return -1;
  }

  var answer;
  return answer;
}

module.exports = problem1;
