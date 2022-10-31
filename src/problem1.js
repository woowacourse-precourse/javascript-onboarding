function problem1(pobi, crong) {
  function check(arr) {
    if (arr[1] & 1 != 0 || arr[1] - arr[0] !== 1) {
      return false;
    }
    if (arr[0] < 1 || arr[1] > 400)
      return false;
    return true;
  }

  function getNum(num) {
    let add = 0; mult = 1;

    while (num > 0) {
      let digit = num % 10;
      add += digit;
      mult *= digit;
      num = Math.floor(num / 10);
    }

    return Math.max(add, mult);
  }

  if (!check(pobi) || !check(crong)) {
    return -1;
  }

  const pobiNum = Math.max(...pobi.map(x => getNum(x)));
  const crongNum = Math.max(...crong.map(x => getNum(x)));

  if (pobiNum > crongNum) {
    return 1;
  } else if (pobiNum < crongNum) {
    return 2;
  }
  return 0;
}

module.exports = problem1;
