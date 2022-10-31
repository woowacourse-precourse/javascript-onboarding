function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  if (pobi[0] % 2 === 0 || crong[0] % 2 === 0) return -1;
  if (pobi[0] === 399 || pobi[0] === 1 || crong[0] === 399 || crong[0] === 1) {
    return -1;
  }
  if (!pobi[0] || !pobi[1] || !crong[0] || !crong[1]) return -1;

  function getMaxNumber(num) {
    let arr = String(num).split("");
    let plusAmount = 0;
    let multipleAmount = 1;
    for (let i = 0; i < arr.length; i++) {
      plusAmount += +arr[i];
      multipleAmount *= +arr[i];
    }
    return Math.max(plusAmount, multipleAmount);
  }

  let pobiMaxNum = Math.max(getMaxNumber(pobi[0]), getMaxNumber(pobi[1]));
  let crongMaxNum = Math.max(getMaxNumber(crong[0]), getMaxNumber(crong[1]));

  if (pobiMaxNum > crongMaxNum) return 1;
  if (pobiMaxNum < crongMaxNum) return 2;
  if (pobiMaxNum === crongMaxNum) return 0;
  return -1;
}

module.exports = problem1;
