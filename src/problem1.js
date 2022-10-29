function problem1(pobi, crong) {

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

problem1([97, 98], [197, 198]) //0

module.exports = problem1;
