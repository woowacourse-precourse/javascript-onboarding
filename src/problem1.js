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

function compare(num1, num2, value = false) {
  if (value) {
    if (num1 >= num2) return num1;
    else return num2;
  } else {
    if (num1 > num2) return 1;
    else if (num1 < num2) return 2;
    else return 0;
  }
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
