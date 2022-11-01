function problem1(pobi, crong) {
  const pobiArr = [add(pobi[0]), add(pobi[1]), mul(pobi[0]), mul(pobi[1])];
  const pobiMax = Math.max.apply(null, pobiArr);
  const crongArr = [add(crong[0]), add(crong[1]), mul(crong[0]), mul(crong[1])];
  const crongMax = Math.max.apply(null, crongArr);
  var answer;

  function add(n) {
    let arr = n;
    if (!Number.isInteger(arr)) {
      return (arr = -1);
    } else if (arr >= 400 || arr <= 1) {
      return (arr = -1);
    } else {
      arr = arr
        .toString()
        .split("")
        .map((x) => parseInt(x));
      return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }
  }

  function mul(n) {
    let arr = n;
    if (!Number.isInteger(arr)) {
      return (arr = -1);
    } else if (arr >= 400 || arr <= 1) {
      return (arr = -1);
    } else {
      arr = arr
        .toString()
        .split("")
        .map((x) => parseInt(x));
      return arr.reduce(
        (accumulator, currentValue) => accumulator * currentValue
      );
    }
  }

  if (pobiArr.includes(-1) || crongArr.includes(-1)) {
    answer = -1;
  } else if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    answer = -1;
  } else if (pobiMax > crongMax) {
    answer = 1;
  } else if (pobiMax < crongMax) {
    answer = 2;
  } else {
    answer = 0;
  }
  return answer;
}

module.exports = problem1;
