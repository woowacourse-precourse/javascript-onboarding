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

  if (check(pobi) === true && check(crong) === true) {
    const pobiMax = compareScore(pobi);
    const crongMax = compareScore(crong);
    answer = pobiMax === crongMax ? 0 : pobiMax > crongMax ? 1 : 2;
  } else answer = -1;
  return answer;
}

module.exports = problem1;
