function problem1(pobi, crong) {
  
  if(!((pobi[0]*crong[0])%2===1 && (pobi[1]*crong[1])%2===0 &&
  (pobi[1]-pobi[0]===1 && crong[1]-crong[0]===1))) return -1;

  const addSum = ([a, b, c=0]) => Number(a)+Number(b)+Number(c);
  const multiplySum = ([a, b, c=1]) => Number(a)*Number(b)*Number(c);

  const largestNumber = (left, right) => {
    left = String(left).split('');
    right = String(right).split('');

    addSum(left) >= multiplySum(left) ? left = addSum(left) : left = multiplySum(left);
    addSum(right) >= multiplySum(right) ? right = addSum(right) : right = multiplySum(right);

    return left>=right ? left : right;
  };

  pobi = largestNumber(pobi[0], pobi[1])
  crong = largestNumber(crong[0], crong[1])

  return pobi > crong ? 1 : pobi = crong ? 0 : 2;
}

module.exports = problem1;
