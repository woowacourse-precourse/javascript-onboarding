function handleExceptions(pobi, crong) {
  const [pobi_left, pobi_right] = pobi;
  const [crong_left, crong_right] = crong;

  if (
    pobi_left % 2 !== 1 ||
    crong_left % 2 !== 1 ||
    pobi_right % 2 !== 0 ||
    crong_right % 2 !== 0
  ) {
    return false;
  }

  if (pobi_right - pobi_left !== 1 || crong_right - crong_left !== 1) {
    return false;
  }

  return true;
}

function getPlus(str) {
  const result = str.split('').reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  return result;
}

function getMultiple(str) {
  const result = str.split('').reduce((acc, cur) => acc * parseInt(cur, 10), 1);

  return result;
}

function getLocalMax(arr) {
  const [left_Num, right_Num] = arr.map((el) => String(el));

  left_Max = Math.max(getPlus(left_Num), getMultiple(left_Num));
  right_Max = Math.max(getPlus(right_Num), getMultiple(right_Num));

  return Math.max(left_Max, right_Max);
}

function problem1(pobi, crong) {
  if (!handleExceptions(pobi, crong)) {
    return -1;
  }

  return answer;
}

module.exports = problem1;
