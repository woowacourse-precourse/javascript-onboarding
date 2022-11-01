function problem1(pobi, crong) {
  var answer;
  if (handleException(pobi) || handleException(crong)) {
    return -1;
  } else {
    pobi = [String(pobi[0]), String(pobi[1])];
    crong = [String(crong[0]), String(crong[1])];
  }
  const pobiNum = solve(pobi);
  const crongNum = solve(crong);
  answer = pobiNum === crongNum ? 0 : pobiNum > crongNum ? 1 : 2;
  return answer;
}

const handleException = (arr) => {
  if (
    arr[1] - arr[0] !== 1 ||
    arr.length > 2 ||
    arr.includes(1) ||
    arr.includes(400)
  ) {
    return true;
  } else {
    return false;
  }
};

const solve = (arr) => {
  let firstNum = 0;
  let secondNum = 0;
  let finalNum = 0;
  for (let i = 0; i < 2; i++) {
    let multiply = 1;
    let add = 0;
    for (let j = 0; j < arr[i].length; j++) {
      add = add + Number(arr[i][j]);
      multiply = multiply * arr[i][j];
    }
    if (!firstNum) {
      firstNum = add > multiply ? add : multiply;
    } else {
      secondNum = add > multiply ? add : multiply;
      finalNum = firstNum > secondNum ? firstNum : secondNum;
    }
  }
  return finalNum;
};

module.exports = problem1;
