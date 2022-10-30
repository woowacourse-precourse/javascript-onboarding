function exception(pages) {
  if (pages[0] + 1 !== pages[1]) return false;
  else return true;
}

function add(pageNum) {
  let addResult = 0;
  pageNum = pageNum.toString();

  for (let i = 0; i < pageNum.length; i++) {
    addResult += parseInt(pageNum[i], 10);
  }

  return addResult;
}

function multiply(pageNum) {
  let multiplyResult = 1;
  pageNum = pageNum.toString();

  for (let i = 0; i < pageNum.length; i++) {
    multiplyResult *= parseInt(pageNum[i], 10);
  }

  return multiplyResult;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
