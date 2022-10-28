function problem1(pobi, crong) {
  var answer;
  let pobiMax = 0;
  let crongMax = 0;

  const isValid = (arr) => {
    if (
      arr[0] === 1 ||
      arr[1] === 400 ||
      arr[1] - arr[0] !== 1 ||
      arr[0] > arr[1] ||
      arr[0] % 2 !== 1 ||
      arr[1] % 2 !== 0
    ) {
      answer = -1;
      return false;
    }
    return true;
  };

  function getMax(pageNumbers) {
    let max = 0;
    for (let pageNumber of pageNumbers) {
      const splitList = pageNumber
        .toString()
        .split("")
        .map((val) => +val);
      let sum = splitList.reduce((sum, val) => sum + val, 0);
      let multiResult = splitList.reduce((sum, val) => sum * val, 1);
      max = Math.max(sum, multiResult);
      return max;
    }
  }

  if (isValid(pobi) && isValid(crong)) {
    pobiMax = getMax(pobi);
    crongMax = getMax(crong);

    if (pobiMax > crongMax) answer = 1;
    else if (pobiMax < crongMax) answer = 2;
    else if (pobiMax === crongMax) answer = 0;
  }
  return answer;
}

module.exports = problem1;
