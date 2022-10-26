function problem1(pobi, crong) {
  var answer;

  function findException(numArray) {
    if (
      numArray[0] % 2 != 1 ||
      numArray[1] % 2 != 0 ||
      numArray[1] - numArray[0] != 1
    )
      return -1;
    return 0;
  }

  function findMax(numArray) {
    let max = 0;
    let array = [];

    array.push(numArray[0].toString().split(""));
    array.push(numArray[1].toString().split(""));

    for (let i = 0; i < array.length; i++) {
      let sum = 0;
      let mul = 1;
      for (let k = 0; k < array[i].length; k++) {
        sum += Number(array[i][k]);
        mul *= Number(array[i][k]);

        if (max < sum) max = sum;
        if (max < mul) max = mul;
      }
    }

    return max;
  }
  let pobiException = findException(pobi);
  let crongException = findException(crong);

  let pobiMax = findMax(pobi);
  let crongMax = findMax(crong);

  if (pobiException === -1 || crongException === -1) {
    answer = -1;
  } else if (pobiMax > crongMax) {
    answer = 1;
  } else if (pobiMax < crongMax) {
    answer = 2;
  } else if (pobiMax === crongMax) {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
