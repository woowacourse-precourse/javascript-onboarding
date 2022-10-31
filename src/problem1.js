function problem1(pobi, crong) {
  const pobiSum = sum(pobi);
  const pobiMul = multiply(pobi);
  const crongSum = sum(crong);
  const crongMul = multiply(crong);

  let pobiMax = 0;
  let crongMax = 0;

  pobiMax = pobiSum > pobiMul ? pobiSum : pobiMul;
  crongMax = crongSum > crongMul ? crongSum : crongMul;

  if ((pobi[1] - pobi[0]) > 2 || (crong[1] - crong[0]) > 2) return -1;

  if (pobiMax > crongMax) return 1;
  if (pobiMax < crongMax) return 2;
  if (pobiMax === crongMax) return 0;
}

function sum(arr) {
  const leftArr = Array.from(String(arr[0]), Number);
  const rightArr = Array.from(String(arr[1]), Number);

  let leftSum = leftArr.reduce((prev, curr) => {
    return prev + curr;
  });
  let rightSum = rightArr.reduce((prev, curr) => {
    return prev + curr;
  });

  return leftSum > rightSum ? leftSum : rightSum;
}

function multiply(arr) {
  const leftArr = Array.from(String(arr[0]), Number);
  const rightArr = Array.from(String(arr[1]), Number);

  let leftSum = leftArr.reduce((prev, curr) => {
    return prev * curr;
  });
  let rightSum = rightArr.reduce((prev, curr) => {
    return prev * curr;
  });

  return leftSum > rightSum ? leftSum : rightSum;
}

module.exports = problem1;
