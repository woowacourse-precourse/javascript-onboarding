function problem1(pobi, crong) {
  var answer;

  const [pobil, pobir] = pobi;
  const [crongl, crongr] = crong;

  if (pobir - pobil !== 1 || crongr - crongl !== 1) return -1;

  const pobiMax = Math.max(
    maxNum(eachNumber(pobil)),
    maxNum(eachNumber(pobir))
  );

  const crongMax = Math.max(
    maxNum(eachNumber(crongl)),
    maxNum(eachNumber(crongr))
  );

  if (pobiMax === crongMax) {
    answer = 0;
  } else if (pobiMax > crongMax) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}

function maxNum(numList) {
  const sumValue = sumValueOfList(numList);
  const multiValue = multipleValueOfList(numList);

  return sumValue >= multiValue ? sumValue : multiValue;
}

function sumValueOfList(numList) {
  const sumValue = 0;
  return numList.reduce((a, b) => a + b, sumValue);
}

function multipleValueOfList(numList) {
  const multiValue = 1;
  return numList.reduce((a, b) => a * b, multiValue);
}

function eachNumber(num) {
  const list = [];
  while (num >= 10) {
    list.push(num % 10);
    num = Math.floor(num / 10);
  }
  list.push(num);
  return list;
}

module.exports = problem1;
