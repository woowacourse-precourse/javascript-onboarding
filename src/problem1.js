function problem1(pobi, crong) {
  var answer = -1;
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

  const handleSum = (arr) => {
    var left = arr[0];
    var right = arr[1];
    var sumLeft = 0;
    var sumRight = 0;

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
    var left = arr[0];
    var right = arr[1];
    var multiLeft = 1;
    var multiRight = 1;

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
