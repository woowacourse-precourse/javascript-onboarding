
function checkArr(arr) {
  left = Number(arr[0]);
  right = Number(arr[1]);
  if (left % 2 != 1 || left < 3 || left > 397)
    return (0);
  if (left + 1 !== right)
    return (0);
  return (1);
}

function splitAdd(arr) {
  return result = String(arr).split('').reduce(function(acc, cur) {
    return acc + Number(cur);
  }, 0);
}

function splitMul(arr) {
  return result = String(arr).split('').reduce(function(acc, cur) {
    return acc * Number(cur);
  }, 1);
}

function getMax(arr) {
  let maxResult = 0;
  arr.forEach(function(arr) {
    maxResult = Math.max(maxResult, splitAdd(arr), splitMul(arr));
  });
  return maxResult;
}

function problem1(pobi, crong) {
  if (!checkArr(pobi) || !checkArr(crong))
    return -1;
  let pobiMax = getMax(pobi);
  let crongMax = getMax(crong);
  var answer;
  answer = (pobiMax > crongMax ? 1 : 2);
  if (pobiMax == crongMax)  answer = 0;
  return answer;
}


module.exports = problem1;
