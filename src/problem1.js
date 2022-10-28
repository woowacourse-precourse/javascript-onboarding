function problem1(pobi, crong) {
  let pobiMax = getMax(pobi);
  let crongMax = getMax(crong);

  if (pobiMax > crongMax) return 1;
  if (pobiMax === crongMax) return 0;
  else return -1;

  function getMax(nums) {
    return 0;
  }
}

module.exports = problem1;
