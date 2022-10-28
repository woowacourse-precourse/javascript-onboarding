const returnMax = (arr) => {
  return arr.reduce((prev, item) => {
    let sumVal = 0;
    let mulVal = 1;
    for (let i = 0; i < String(item).length; i++) {
      sumVal += Number(String(item)[i]);
      mulVal *= Number(String(item)[i]);
    }
    const max = sumVal > mulVal ? sumVal : mulVal;
    prev = max > prev ? max : prev;
    return prev;
  }, 0);
};

const exceptionCheck = (arr) => {
  if (
    arr[0] % 2 != 1 ||
    arr[1] % 2 != 0 ||
    arr[1] - arr[0] > 1 ||
    arr.includes(1) ||
    arr.includes(400)
  )
    return true;
};

function problem1(pobi, crong) {
  const pobiValue = returnMax(pobi);
  const crongValue = returnMax(crong);
  if (exceptionCheck(pobi) || exceptionCheck(crong)) return -1;
  let answer = 0;
  if (pobiValue > crongValue) answer = 1;
  else if (pobiValue < crongValue) answer = 2;
  return answer;
}

module.exports = problem1;
