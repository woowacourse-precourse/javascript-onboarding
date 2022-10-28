function problem1(pobi, crong) {
  let answer = -1;
  const check = (arr) => {
    let leftPageNum = arr[0];
    let rightPageNum = arr[1];

    if (
      arr.length !== 2 ||
      !(0 < leftPageNum && leftPageNum < 400) ||
      !(leftPageNum % 2 === 1) ||
      !(rightPageNum - leftPageNum === 1)
    )
      return false;
    return true;
  };

  const compareScore = (arr) => {
    const sumMax = handleSum(arr);
    const multiMax = handleMultiply(arr);
    return sumMax > multiMax ? sumMax : multiMax;
  };

  const handleSum = (arr) => {
    let left = arr[0];
    let right = arr[1];
    let sumLeft = 0;
    let sumRight = 0;

    do {
      sumLeft += left % 10;
      left = parseInt((left /= 10));
    } while (left > 0);

    do {
      sumRight += right % 10;
      right = parseInt((right /= 10));
    } while (right > 0);

    return sumLeft > sumRight ? sumLeft : sumRight;
  };

  const handleMultiply = (arr) => {
    let left = arr[0];
    let right = arr[1];
    let multiLeft = 1;
    let multiRight = 1;

    do {
      multiLeft *= left % 10;
      left = parseInt((left /= 10));
    } while (left > 0);

    do {
      multiRight *= right % 10;
      right = parseInt((right /= 10));
    } while (right > 0);

    return multiLeft > multiRight ? multiLeft : multiRight;
  };

  if (check(pobi) === true && check(crong) === true) {
    const pobiMax = compareScore(pobi);
    const crongMax = compareScore(crong);
    answer = pobiMax === crongMax ? 0 : pobiMax > crongMax ? 1 : 2;
  } else answer = -1;
  return answer;
}

module.exports = problem1;
