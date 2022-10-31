function problem1(pobi, crong) {
  let answer;
  const isException = () => {
    if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return true;
    if (pobi[0] === 0 || crong[0] === 0 || crong[1] === 400 || crong[1] === 400)
      return true;
    if (
      pobi[0] % 2 !== 1 ||
      crong[0] % 2 !== 1 ||
      pobi[1] % 2 !== 0 ||
      crong[1] % 2 !== 0
    )
      return true;
    return false;
  };

  if (isException()) return -1;

  const multiply = (n) => {
    const nString = n.toString();

    let result = 1;
    for (let i = 0; i < nString.length; i++) {
      result = result * nString[i];
    }
    return result;
  };

  const sum = (n) => {
    const nString = n.toString();

    let result = 0;
    for (let i = 0; i < nString.length; i++) {
      result = result + +nString[i];
    }
    return result;
  };

  const pobiPoint = Math.max(
    multiply(pobi[0]),
    multiply(pobi[1]),
    sum(pobi[0]),
    sum(pobi[1])
  );

  const crongPoint = Math.max(
    multiply(crong[0]),
    multiply(crong[1]),
    sum(crong[0]),
    sum(crong[1])
  );

  answer =
    pobiPoint > crongPoint
      ? 1
      : pobiPoint < crongPoint
      ? 2
      : pobiPoint === crongPoint
      ? 0
      : -1;

  return answer;
}
// problem1([97, 98], [197, 198]);
// problem1([131, 132], [211, 212]);
// problem1([99, 102], [211, 212]);

module.exports = problem1;
