function MaxNumber(array) {
  return (num = Math.max(
    array.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) * parseInt(currentValue),
      1
    ),
    array.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) + parseInt(currentValue),
      0
    )
  ));
}

function problem1(pobi, crong) {
  const pobiArray = String(pobi[0]).split('');
  const pobiArray2 = String(pobi[1]).split('');

  const crongArray = String(crong[0]).split('');
  const crongArray2 = String(crong[1]).split('');
  
  //예외사항(처음,마지막,연속으로 펼치치 않은 경우)
  if (
    pobi[0] === 1 ||
    pobi[1] === 400 ||
    crong[0] === 1 ||
    crong[1] === 400 ||
    pobi[0] + 1 !== pobi[1] ||
    crong[0] + 1 !== crong[1]
  ) {
    return -1;
  }

  const pobieNum = Math.max(MaxNumber(pobiArray), MaxNumber(pobiArray2));
  const crongNum = Math.max(MaxNumber(crongArray), MaxNumber(crongArray2));

  if (pobieNum > crongNum) {
    return 1;
  } else if (pobieNum < crongNum) {
    return 2;
  } else if (pobieNum === crongNum) {
    return 0;
  }

}

module.exports = problem1;
