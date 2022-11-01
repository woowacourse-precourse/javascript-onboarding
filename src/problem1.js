function problem1(pobi, crong) {
  var answer;

  //예외처리
  if (!handleExceptions(pobi, crong)) return -1;

  //각자의 최대값 구하기
  let pobiMax = calcPages(pobi);
  let crongMax = calcPages(crong);

  //최대값 비교
  if (pobiMax > crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  else answer = 0;

  return answer;
}

function handleExceptions(pobi, crong) {
  if (!Array.isArray(pobi) || !Array.isArray(crong)) return false;
  if (pobi.length !== 2 || crong.length !== 2) return false;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return false;
  for (let i = 0; i < 2; i++) {
    if (!(pobi[i] > 0 && pobi[i] <= 400 && crong[i] > 0 && crong[i] <= 400)) {
      return false;
    }
  }

  return true;
}

function calcPages(pages) {
  const resultArr = [];
  for (const page of pages) {
    const eachNum = [...String(page)];
    const addPages = eachNum.reduce((acc, i) => parseInt(acc) + parseInt(i));
    const mulPages = eachNum.reduce((acc, i) => parseInt(acc) * parseInt(i));
    resultArr.push(Math.max(addPages, mulPages));
  }
  return Math.max(resultArr[0], resultArr[1]);
}

module.exports = problem1;
