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

  if (!exception(pobi) || !exception(crong)) return -1;

  const pobiLeftBest = compare(add(pobi[0]), multiply(pobi[0]), true);
  const pobiRightBest = compare(add(pobi[1]), multiply(pobi[1]), true);
  const crongLeftBest = compare(add(crong[0]), multiply(crong[0]), true);
  const crongRightBest = compare(add(crong[1]), multiply(crong[1]), true);

  const pobiScore = compare(pobiLeftBest, pobiRightBest, true);
  const crongScore = compare(crongLeftBest, crongRightBest, true);
  answer = compare(pobiScore, crongScore);

  return answer;
}

module.exports = problem1;
