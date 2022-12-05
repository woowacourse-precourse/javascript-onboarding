const getTopNum = (arr) => {
  const array = arr.map((a) => String(a));
  const firstNum = array[1];
  const [fir, sec, thi] = firstNum;
  const [first, second, third] = [+fir, +sec, +thi];

  if (array[1] - array[0] !== 1) return -1;

  if (!second) return firstNum;
  if (!third) {
    const multiple = first * second;
    const plus = first + second;
    return multiple < plus ? plus : multiple;
  }
  if (third) {
    const multiple = first * second * third;
    const plus = first + second + third;

    return multiple < plus ? plus : multiple;
  }
};

function problem1(pobi, crong) {
  const pobiNum = getTopNum(pobi);
  const crongNum = getTopNum(crong);

  return pobiNum === -1 || crongNum === -1
    ? -1
    : pobiNum > crongNum
    ? 1
    : pobiNum < crongNum
    ? 2
    : pobiNum === crongNum
    ? 0
    : undefined;
}

module.exports = problem1;
