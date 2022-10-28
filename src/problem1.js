function problem1(pobi, crong) {
  var answer;
  if (exception(pobi) || exception(crong)) {
    return -1;
  } else {
    pobi = [String(pobi[0]), String(pobi[1])];
    crong = [String(crong[0]), String(crong[1])];
  }
  const pobiBigNum = process(pobi);
  const crongBigNum = process(crong);
  answer = pobiBigNum === crongBigNum ? 0 : pobiBigNum > crongBigNum ? 1 : 2;
  return answer;
}

//예외사항 분리 함수
const exception = (arr) => {
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

//계산과정 함수
const process = (arr) => {
  let firstBigNum = 0;
  let secondBigNum = 0;
  let finalBigNum = 0;
  for (let i = 0; i < 2; i++) {
    let multiply = 1;
    let add = 0;
    for (let j = 0; j < arr[i].length; j++) {
      add = add + Number(arr[i][j]);
      multiply = multiply * arr[i][j];
    }
    if (!firstBigNum) {
      firstBigNum = add > multiply ? add : multiply;
    } else {
      secondBigNum = add > multiply ? add : multiply;
      finalBigNum = firstBigNum > secondBigNum ? firstBigNum : secondBigNum;
    }
  }
  return finalBigNum;
};

module.exports = problem1;
