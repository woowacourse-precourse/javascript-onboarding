function problem1(pobi, crong) {
  let answer = 0;
  let [pobiScore, crongScore] = [0, 0];
  let len = 2;
  function findMaxNum(arr) {
    let sum = 1;
    arr.forEach((ele) => {
      if (ele === 0 || ele === 1) {
        sum += ele;
      } else {
        sum *= ele;
      }
    });
    return sum;
  }
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  if (pobi[0] % 2 === 0 || pobi[1] % 2 !== 0) {
    return -1;
  }
  if (1 > pobi[0] || pobi[0] > 400 || pobi[1] < 1 || pobi[1] > 400) {
    return -1;
  }
  if (1 > crong[0] || crong[0] > 400 || crong[1] < 1 || crong[1] > 400) {
    return -1;
  }
  for (let i = 0; i < len; i++) {
    pobiScore = Math.max(
      findMaxNum((pobi[0] + "").split("")),
      findMaxNum((pobi[1] + "").split(""))
    );
    crongScore = Math.max(
      findMaxNum((crong[0] + "").split("")),
      findMaxNum((crong[1] + "").split(""))
    );
  }
  if (pobiScore < crongScore) {
    answer = 2;
  } else if (pobiScore > crongScore) {
    answer = 1;
  }
  return answer;
}

module.exports = problem1;
