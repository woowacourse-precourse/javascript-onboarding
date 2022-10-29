function bigger(array) {
  const leftHundreds = Math.floor(array[0] / 100);
  const leftTens = Math.floor((array[0] % 100) / 10);
  const leftUnits = (array[0] % 100) % 10;

  const rightHundreds = Math.floor(array[1] / 100);
  const rightTens = Math.floor((array[1] % 100) / 10);
  const rightUnits = (array[1] % 100) % 10;

  const leftResult = Math.max(
    leftHundreds + leftTens + leftUnits,
    (leftHundreds ? leftHundreds : 1) * (leftTens ? leftTens : 1) * leftUnits
  );

  const rightResult = Math.max(
    rightHundreds + rightTens + rightUnits,
    (rightHundreds ? rightHundreds : 1) *
      (rightTens ? rightTens : 1) *
      rightUnits
  );

  return Math.max(leftResult, rightResult);
}

function problem1(pobi, crong) {
  if (pobi.length > 2 || pobi.length < 2) return -1;
  if (crong.length > 2 || crong.length < 2) return -1;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  const pobiResult = bigger(pobi);

  const crongResult = bigger(crong);

  if (pobiResult > crongResult) {
    return 1;
  } else if (pobiResult < crongResult) {
    return 2;
  } else return 0;
}

module.exports = problem1;
